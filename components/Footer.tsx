export function Footer() {
  return (
    <footer className="mt-auto py-6 px-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-600 dark:text-gray-400">
              © 2026 Theodore Chaikalis
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg
                className="w-4 h-4 text-green-600 dark:text-green-400"
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
              <span className="text-xs md:text-sm">
                No sensitive data is captured or stored
              </span>
            </div>

            <div className="text-gray-500 dark:text-gray-500 font-mono text-xs">
              v1.0.0
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
            <a
              href="https://github.com/teohaik/Sui-Message-Signer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>View on GitHub</span>
            </a>
            <span className="hidden md:inline text-gray-400">•</span>
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <span>Proudly vibe-coded with</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">Claude Code</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
