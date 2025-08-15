import { beforeEach, describe, expect, it, vi } from "vitest";
import { findAllFocusable } from "#/ui/utils/findAllFocusable";
import { createElement } from "#/ui/utils/testing/createElement";

describe("findAllFocusable", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("returns undefined for a null container", () => {
    expect(findAllFocusable(null)).toBeUndefined();
  });

  it("filters out non-focusable elements", () => {
    const container = createElement("div");

    const goodBtn = createElement("button");
    container.appendChild(goodBtn);

    const disabledBtn = createElement("button", {
      disabled: true,
    });
    container.appendChild(disabledBtn);

    const link = createElement("a", {
      href: "#",
    });
    container.appendChild(link);

    const hiddenDiv = createElement("div", {
      ariaHidden: "true",
      width: 0,
      height: 0,
    });
    container.appendChild(hiddenDiv);

    const found = findAllFocusable(container)!;
    expect(found).toEqual([goodBtn, link]);
  });
});
