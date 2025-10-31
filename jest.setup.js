import "@testing-library/jest-dom";

jest.mock("next/font/google", () => ({
  Geist: () => ({
    className: "geist-font",
  }),
  Geist_Mono: () => ({
    className: "geist-mono-font",
  }),
}));

jest.mock("@once-ui-system/core", () => ({
  ...jest.requireActual("@once-ui-system/core"),
  LayoutProvider: ({ children }) => <>{children}</>,
  useLayout: () => ({}),
  isDefaultBreakpoints: () => true,
}));
