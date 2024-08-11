import { render } from "@testing-library/react";
import Section from ".";
import React from "react";

let x;
describe("Test", () => {
  test("1", () => {
    x = render(<Section colorGroup="red" colors={["FFF"]} />);
    expect(x.container).toBeInTheDocument();
  });
});
