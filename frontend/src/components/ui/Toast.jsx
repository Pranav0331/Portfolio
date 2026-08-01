import { useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles =
    type === 'error'
      ? 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200'
      : 'border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-200';

  return (
    <div
      role="alert"
      className={`fixed bottom-6 right-6 z-50 max-w-sm rounded-lg border px-4 py-3 text-sm shadow-lg ${styles}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span>{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 opacity-70 hover:opacity-100"
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
