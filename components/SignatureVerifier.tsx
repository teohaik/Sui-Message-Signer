"use client";

import { useState } from "react";
import { fromB64 } from "@mysten/sui/utils";
import { verifyPersonalMessageSignature } from "@mysten/sui/verify";

export function SignatureVerifier() {
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean;
    address?: string;
    error?: string;
  } | null>(null);

  const handleVerify = async () => {
    if (!message.trim() || !signature.trim()) {
      alert("Please enter both message and signature");
      return;
    }

    try {
      const messageBytes = new TextEncoder().encode(message);

      const publicKey = await verifyPersonalMessageSignature(
        messageBytes,
        signature
      );

      setVerificationResult({
        isValid: true,
        address: publicKey.toSuiAddress(),
      });
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationResult({
        isValid: false,
        error: error instanceof Error ? error.message : "Invalid signature",
      });
    }
  };

  const handleClear = () => {
    setMessage("");
    setSignature("");
    setVerificationResult(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="verify-message" className="block text-sm font-medium mb-2">
          Original Message
        </label>
        <textarea
          id="verify-message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setVerificationResult(null);
          }}
          placeholder="Enter the original message that was signed..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 min-h-[100px] resize-y"
        />
      </div>

      <div>
        <label htmlFor="signature-input" className="block text-sm font-medium mb-2">
          Signature
        </label>
        <textarea
          id="signature-input"
          value={signature}
          onChange={(e) => {
            setSignature(e.target.value);
            setVerificationResult(null);
          }}
          placeholder="Paste the signature here..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 min-h-[80px] resize-y font-mono text-sm"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleVerify}
          disabled={!message.trim() || !signature.trim()}
          className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          Verify Signature
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
        >
          Clear
        </button>
      </div>

      {verificationResult && (
        <div
          className={`p-6 rounded-lg border ${
            verificationResult.isValid
              ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              {verificationResult.isValid ? (
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <h3
                className={`font-semibold text-lg ${
                  verificationResult.isValid
                    ? "text-green-800 dark:text-green-200"
                    : "text-red-800 dark:text-red-200"
                }`}
              >
                {verificationResult.isValid
                  ? "Signature Valid!"
                  : "Signature Invalid"}
              </h3>
              {verificationResult.isValid && verificationResult.address && (
                <div className="mt-3">
                  <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                    Signer Address:
                  </label>
                  <div className="p-3 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded font-mono text-sm break-all">
                    {verificationResult.address}
                  </div>
                </div>
              )}
              {!verificationResult.isValid && verificationResult.error && (
                <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                  {verificationResult.error}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
