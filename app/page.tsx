"use client";

import { WalletConnect } from "@/components/WalletConnect";
import { MessageSigner } from "@/components/MessageSigner";
import { SignatureVerifier } from "@/components/SignatureVerifier";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"sign" | "verify">("sign");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Sui Message Signer
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Sign and verify messages with your Sui wallet
                  </p>
                </div>
                <WalletConnect />
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveTab("sign")}
                    className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                      activeTab === "sign"
                        ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                  >
                    Sign Message
                  </button>
                  <button
                    onClick={() => setActiveTab("verify")}
                    className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                      activeTab === "verify"
                        ? "border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400"
                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                  >
                    Verify Signature
                  </button>
                </div>

                <div className="mt-6">
                  {activeTab === "sign" ? <MessageSigner /> : <SignatureVerifier />}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              <p>
                {activeTab === "sign"
                  ? "Connect your Slush wallet or any Sui-compatible wallet to get started"
                  : "Verify signatures from any Sui wallet"}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
