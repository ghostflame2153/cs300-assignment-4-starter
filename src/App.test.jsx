import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

// Two sample tests so `npm test` passes from the starter.
// They do not count toward your required tests. Replace them with tests of your own behavior.
{/*
test("shows the starter heading", () => {
  render(<App />);
  expect(screen.getByText("Your application starts here")).toBeInTheDocument();
});

test("renders a main landmark", () => {
  render(<App />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});
*/}

test("renders book 1's id (not the test books)", () => {
  render(<App />);
  const bookOne = screen.getByText(/#1-/);
  expect(bookOne).toBeInTheDocument();
  console.log(bookOne.textContent);
  expect(bookOne).toHaveTextContent(/by/i);
});

test("Simulates adding a Book", () => {
  render(<App />);
  const title = screen.getByPlaceholderText("Title");
  const author = screen.getByPlaceholderText("Author");
  const genre = screen.getByPlaceholderText("Genre(optional)");
  const info = screen.getByPlaceholderText("Additional Info (optional)");

  fireEvent.change(title, {target: {value: "Bookithy"}});
  fireEvent.change(author, {target: {value: "Authority"}});
  fireEvent.change(genre, {target: {value: "NonFiction"}});
  fireEvent.change(info, {target: {value: "Infortanius"}});

  const button = screen.getByText("Add New Book");
  fireEvent.click(button);

  expect(screen.getByText(/"Bookithy" by Authority/)).toBeInTheDocument();
  expect(title.value).toBe("");
  expect(author.value).toBe("");
  expect(genre.value).toBe("");
  expect(info.value).toBe("")
  console.log("This test sought to test adding a book!")

})