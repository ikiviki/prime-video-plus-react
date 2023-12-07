// AAA
// Arrange
import { screen, render, fireEvent } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";

// Group of related test specs / test suites.
describe("CompanyInfo", () => {
  // Test spec #1
  // Testing JSX
  it("has heading level 2 with Company Info!!", () => {
    // Act
    render(<CompanyInfo />);
    const headingElement = screen.getByText("Company Info!!");
    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  // Test spec #2
  // Testing JSX
  it("has company name Bosch!", () => {
    // Act
    render(<CompanyInfo />);
    const companyNameElement = screen.getByText("Bosch!");
    // Assert
    expect(companyNameElement).toBeTruthy();
  });

  // Test spec #3
  // Testing Props
  it("receives foundedYear prop and displays it in JSX", () => {
    // Act
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYearElement = screen.getByText("Founded Year: 2000");
    // Assert
    expect(foundedYearElement).toBeInTheDocument();
  });

  // Test spec #4
  // Testing States and Events
  it("displays country name USA by default and updates JSX onChange of country input", () => {
    render(<CompanyInfo />);
    // Find the input element.
    const countryInput = screen.getByPlaceholderText("Enter Country Name");
    // Then check whether the input has default value USA.
    expect(countryInput.value).toBe("USA");

    const mockEvent = {
      target: {
        value: "Australia",
      },
    };

    // Mocking the keyboard event onChange.
    fireEvent.change(countryInput, mockEvent);
    expect(countryInput.value).toBe("Australia");
    // TODO: also check the paragraph for country name change.
  });
});
