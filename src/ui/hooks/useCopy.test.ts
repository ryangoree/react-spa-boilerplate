import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useCopy } from "#/ui/hooks/useCopy";

const originalClipboard = { ...navigator.clipboard };

describe("useCopy", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // @ts-expect-error
    navigator.clipboard = {
      writeText: vi.fn(),
    };
  });

  afterEach(() => {
    vi.useRealTimers();
    // @ts-expect-error
    navigator.clipboard = originalClipboard;
  });

  it("copies the provided string to the clipboard", async () => {
    const { result } = renderHook(() => useCopy());
    const text = "Hello, World!";

    await act(async () => {
      await result.current.copy(text);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });

  it("temporarily sets `copied` to true after copying", async () => {
    const { result } = renderHook(() => useCopy(1000));

    await act(() => result.current.copy("Hello, World!"));
    expect(result.current.copied).toBe(true);

    // Resets after the specified duration
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.copied).toBe(false);
  });
});
