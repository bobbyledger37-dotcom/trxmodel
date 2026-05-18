#!/usr/bin/env node

/**
 * Telegram Relay Server
 * Proxies Telegram API requests to avoid CORS issues from browser
 * Run: node telegram-relay.js
 */

const http = require('http');
const https = require('https');
const url = require('url');

// Configuration
const RELAY_PORT = 3000;
const TELEGRAM_API = 'https://api.telegram.org';

// Create relay server
const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Support both GET and POST
    if (!['GET', 'POST'].includes(req.method)) {
        res.writeHead(405);
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
    }

    // Handle GET requests (health check)
    if (req.method === 'GET') {
        if (req.url === '/' || req.url === '/health' || req.url === '/relay') {
            res.writeHead(200);
            res.end(JSON.stringify({ status: 'ok', server: 'Telegram Relay', timestamp: new Date().toISOString() }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Not found' }));
        }
        return;
    }

    if (req.url !== '/relay') {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
        return;
    }

    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
        try {
            const payload = JSON.parse(body);
            const { botToken, message } = payload;

            if (!botToken || !message) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Missing botToken or message' }));
                return;
            }

            // Forward to Telegram
            const telegramUrl = `${TELEGRAM_API}/bot${botToken}/sendMessage`;
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const request = https.request(telegramUrl, options, (response) => {
                let data = '';
                response.on('data', chunk => data += chunk);
                response.on('end', () => {
                    res.writeHead(response.statusCode);
                    res.end(data);
                    console.log(`✅ Telegram message sent: ${new Date().toLocaleTimeString()}`);
                });
            });

            request.on('error', (error) => {
                console.error('❌ Telegram relay error:', error);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            });

            request.write(JSON.stringify(message));
            request.end();

        } catch (error) {
            console.error('❌ Relay error:', error);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
});

server.listen(RELAY_PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   📡 Telegram Relay Server Running    ║
║   Port: ${RELAY_PORT}                        ║
║   Status: ✅ Ready                     ║
╚════════════════════════════════════════╝

To use this relay:
1. Update your config.js to use:
   relayUrl: "http://localhost:${RELAY_PORT}/relay"

2. Update index.html to use relay instead of direct API calls

This server acts as a CORS proxy for Telegram API requests.
    `);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n⏹️  Shutting down relay server...');
    server.close(() => {
        console.log('✅ Server stopped');
        process.exit(0);
    });
});
