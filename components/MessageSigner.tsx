"use client";

import { useCurrentAccount, useSignPersonalMessage } from "@mysten/dapp-kit";
import { useState } from "react";
import { toB64 } from "@mysten/sui/utils";

export function MessageSigner() {
  const account = useCurrentAccount();
  const { mutate: signPersonalMessage } = useSignPersonalMessage();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState<{
    signature: string;
    bytes: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSign = () => {
    if (!message.trim()) {
      alert("Please enter a message to sign");
      return;
    }

    const messageBytes = new TextEncoder().encode(message);

    signPersonalMessage(
      {
        message: messageBytes,
      },
      {
        onSuccess: (result) => {
          setSignedMessage({
            signature: result.signature,
            bytes: toB64(messageBytes),
          });
        },
        onError: (error) => {
          console.error("Error signing message:", error);
          alert("Failed to sign message. Please try again.");
        },
      }
    );
  };

  const handleCopy = () => {
    if (signedMessage) {
      navigator.clipboard.writeText(signedMessage.signature);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!account) {
    return (
      <div className="text-center p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400">
          Please connect your wallet to sign messages
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
        >
          Message to Sign
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 min-h-[120px] resize-y"
        />
      </div>

      <button
        onClick={handleSign}
        disabled={!message.trim()}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
      >
        Sign Message
      </button>

      {signedMessage && (
        <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg space-y-4">
          <h3 className="font-semibold text-green-800 dark:text-green-200 text-lg">
            Message Signed Successfully!
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Signature:
              </label>
              <div className="p-3 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded font-mono text-xs break-all">
                {signedMessage.signature}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Message (Base64):
              </label>
              <div className="p-3 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded font-mono text-xs break-all">
                {signedMessage.bytes}
              </div>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            {copied ? "Copied!" : "Copy Signature"}
          </button>
        </div>
      )}
    </div>
  );
}
