import { useCallback, useState } from "react";

/**
 * Returns a function to copy text to the clipboard as well as a boolean that
 * will be true for a short period of time after the text is copied
 *
 * @param duration - The duration in milliseconds for which the `copied` state
 * should remain true. Defaults to 1200ms.
 */
export function useCopy(duration = 1200): {
  copy: (text: string) => Promise<void>;
  /**
   * A boolean that will be true for a short period of time after the text is
   * copied. Useful for showing temporary feedback to the user.
   */
  copied: boolean;
} {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, duration);
    },
    [duration],
  );

  return { copy, copied };
}
