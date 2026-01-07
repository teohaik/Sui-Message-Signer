# Sui Message Signer dApp

A Next.js dApp that allows users to connect their Sui wallet (including Slush wallet), sign text messages with their personal keypair, and verify signatures.

## Features

### Sign Messages
- Connect to any Sui-compatible wallet (Slush, Sui Wallet, etc.)
- Enter custom text messages
- Sign messages with your wallet's keypair
- View the signature and base64-encoded message
- Copy signed message data to clipboard

### Verify Signatures
- Verify signatures without needing to connect a wallet
- Paste any message and signature to verify authenticity
- View the signer's Sui address when verification succeeds
- Works with signatures from any Sui wallet

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Sui wallet browser extension (like Slush Wallet)

### Installation

Dependencies are already installed. Just run:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) (or the next available port).

### Usage

#### Signing Messages

1. **Connect Wallet**: Click the "Connect Wallet" button in the top-right corner
2. **Select Your Wallet**: Choose Slush or any other Sui-compatible wallet from the modal
3. **Approve Connection**: Approve the connection request in your wallet
4. **Enter Message**: Type your message in the text field
5. **Sign**: Click "Sign Message" button
6. **Approve in Wallet**: Confirm the signing request in your wallet popup
7. **Copy Result**: Use the "Copy Signed Message" button to copy both the signature and the base64-encoded message

#### Verifying Signatures

1. **Switch to Verify Tab**: Click the "Verify Signature" tab
2. **Enter Original Message**: Paste or type the original message that was signed
3. **Enter Signature**: Paste the signature you want to verify
4. **Verify**: Click "Verify Signature" button
5. **View Result**: See if the signature is valid and view the signer's address

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **@mysten/sui** - Latest Sui TypeScript SDK
- **@mysten/dapp-kit** - Sui wallet integration
- **@tanstack/react-query** - Async state management

## Project Structure

```
├── app/
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Main page with tabs
│   ├── providers.tsx         # Wallet providers setup
│   └── globals.css           # Global styles
├── components/
│   ├── WalletConnect.tsx     # Wallet connection UI
│   ├── MessageSigner.tsx     # Message signing component
│   ├── SignatureVerifier.tsx # Signature verification component
│   └── Footer.tsx            # Footer with copyright and version
├── package.json
└── LICENSE
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Network Configuration

By default, the app connects to Sui **testnet**. You can change this in `app/providers.tsx` by modifying the `defaultNetwork` prop.

## Deployment

This app can be easily deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your Git repository and deploy
- **CloudFlare Pages**: Push to Git and connect
- **Self-hosted**: Run `npm run build` and `npm start`

## Privacy & Security

- **No data collection**: This application does not collect, store, or transmit any user data
- **Client-side only**: All signing and verification happens locally in your browser
- **No backend**: No server or database involved
- **Wallet security**: Your private keys never leave your wallet extension
- **Open source**: All code is transparent and auditable

## Author

**Theodore Chaikalis** © 2026

## License

ISC - See [LICENSE](LICENSE) file for details
