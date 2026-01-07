import packageJson from "../package.json";

export function Footer() {
  return (
    <footer className="mt-auto py-6 px-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
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
            v{packageJson.version}
          </div>
        </div>
      </div>
    </footer>
  );
}
