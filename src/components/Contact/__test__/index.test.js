// __tests__/Contact.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });

  // eslint-disable-next-line jest/no-identical-title
  it("renders", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
});

it("renders", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("button")).toHaveTextContent("Submit");
});
