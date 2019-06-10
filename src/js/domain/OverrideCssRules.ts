const OVERRIDE_CLASS = "kintone-portal-customize-override-css";

export const addOverrideCssRule = (
  selector: string,
  property: string,
  value: string
) => {
  const styleEl = document.createElement("style");
  styleEl.classList.add(OVERRIDE_CLASS);
  styleEl.innerHTML = `${selector} { ${property}: ${value} !important; }`;
  const headEl = document.querySelector("head")!;
  headEl.appendChild(styleEl);
};

export const clearAllOverrideCss = () => {
  const styleEls = document.querySelectorAll("." + OVERRIDE_CLASS);
  styleEls.forEach(el => el.remove());
};
