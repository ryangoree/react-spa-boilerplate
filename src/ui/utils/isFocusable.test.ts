import { beforeEach, describe, expect, it, vi } from "vitest";
import { isFocusable } from "#/ui/utils/isFocusable";
import { createElement } from "#/ui/utils/testing/createElement";

describe("isFocusable", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("returns false for null", () => {
    expect(isFocusable(null)).toBe(false);
  });

  it("returns true for the activeElement", () => {
    const div = createElement("div", {
      tabIndex: 0,
    });
    div.focus();
    expect(document.activeElement).toBe(div);
    expect(isFocusable(div)).toBe(true);
  });

  it("returns false if no focus method", () => {
    const fake = { hasAttribute: () => false } as unknown as EventTarget;
    expect(isFocusable(fake)).toBe(false);
  });

  it("returns false for disabled elements", () => {
    const btn = createElement("button", {
      disabled: true,
    });
    expect(isFocusable(btn)).toBe(false);
  });

  it('returns false for aria-hidden="true"', () => {
    const btn = createElement("button", {
      ariaHidden: "true",
    });
    expect(isFocusable(btn)).toBe(false);
  });

  it("returns false for negative tabindex values", () => {
    const btn = createElement("button", {
      tabIndex: -1,
    });
    expect(isFocusable(btn)).toBe(false);
  });

  it("returns false for zero area elements", () => {
    const link = createElement("button", {
      width: 0,
      height: 0,
    });
    expect(isFocusable(link)).toBe(false);
  });

  it("returns true for a normally focusable element", () => {
    const btn = createElement("button");
    expect(isFocusable(btn)).toBe(true);
  });
});
