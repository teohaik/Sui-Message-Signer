"use client";

import {
  ConnectButton,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";

export function WalletConnect() {
  const account = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div className="flex items-center gap-4">
      {account ? (
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <div className="font-semibold">Connected</div>
            <div className="text-gray-600 dark:text-gray-400 font-mono text-xs">
              {account.address.slice(0, 6)}...{account.address.slice(-4)}
            </div>
          </div>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <ConnectButton className="!bg-blue-600 !hover:bg-blue-700 !text-white !px-4 !py-2 !rounded-lg !transition-colors" />
      )}
    </div>
  );
}
