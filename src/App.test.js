// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange
// import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Test spec / test case / test
test("has proper app component", () => {
  // Act (optional)
  // render(App);
  // Assert
  expect(App).toBeDefined();
});

/*
 * test, expect, are from JEST
 * render, screen are from RTL
 * toBeDefined is known as a matcher -- from @testing-library/jest-dom
 */
