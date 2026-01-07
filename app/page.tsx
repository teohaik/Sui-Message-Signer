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

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg
                className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>No sensitive data is captured or stored</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
