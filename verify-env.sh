#!/bin/bash
# ENV Verification Script

echo "======================================"
echo "NEXIUM ENV SETUP VERIFICATION"
echo "======================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo "Creating .env file..."
    cp .env.example .env
    echo "✅ .env created from .env.example"
    echo ""
fi

# Check required fields
echo "Checking required environment variables..."
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_env() {
    local var=$1
    local value=$(grep "^${var}=" .env | cut -d'=' -f2-)
    
    if [ -z "$value" ] || [ "$value" = "" ]; then
        echo -e "${RED}❌ ${var}${NC} - NOT SET"
        return 1
    else
        echo -e "${GREEN}✅ ${var}${NC} - SET"
        return 0
    fi
}

# Critical variables
echo "Critical Variables:"
check_env "PRIVATE_KEY"
check_env "BSCSCAN_API_KEY"
check_env "NEXT_PUBLIC_ADMIN_WALLET"
check_env "NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID"

echo ""
echo "Token Addresses:"
check_env "BUSD_ADDRESS"
check_env "USDT_ADDRESS"
check_env "WBNB_ADDRESS"

echo ""
echo "RPC Configuration:"
check_env "MAINNET_RPC_URL"

echo ""
echo "======================================"
echo "Setup Instructions:"
echo "======================================"
echo ""
echo "1. Get your private key from MetaMask:"
echo "   MetaMask → Account Details → Export Private Key"
echo ""
echo "2. Get BscScan API key:"
echo "   https://bscscan.com/apis"
echo ""
echo "3. Get WalletConnect ID:"
echo "   https://cloud.walletconnect.com/"
echo ""
echo "4. Edit .env file and fill in the values"
echo ""
echo "5. Run this script again to verify"
echo ""
echo "======================================"
