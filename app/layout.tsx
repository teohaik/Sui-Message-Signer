import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";

export const metadata: Metadata = {
  title: "Sui Message Signer - Sign & Verify Messages",
  description: "Sign and verify messages with your Sui wallet. Connect any Sui-compatible wallet like Slush to cryptographically sign text messages. No data collection, fully client-side.",
  keywords: ["Sui", "wallet", "signature", "message signing", "blockchain", "dApp", "Slush wallet", "cryptography"],
  authors: [{ name: "Theodore Chaikalis" }],
  creator: "Theodore Chaikalis",
  openGraph: {
    title: "Sui Message Signer",
    description: "Sign and verify messages with your Sui wallet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sui Message Signer",
    description: "Sign and verify messages with your Sui wallet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
