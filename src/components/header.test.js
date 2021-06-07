import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "./header";

test("should render Header", () => {
    render(<Header/>);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("NewsPaper");
});
