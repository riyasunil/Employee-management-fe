import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/login/Login";
import { Provider } from "react-redux";
// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
// Mock the store
const mockStore = configureStore({
  reducer: {
    employee: (state = { employees: [] }) => state,
    department: (state = { departments: [] }) => state,
    employeeApi: (state = {}) => state,
  },
});
// Mock the login mutation
const mockLoginMutation = vi.fn();
vi.mock("../../api-services/auth/login.api", () => ({
  useLoginMutation: () => [
    () => ({
      unwrap: () => mockLoginMutation(),
    }),
    { isLoading: false },
  ],
}));
describe("Login Page", () => {
  const renderLogin = () => {
    return render(
      <Provider store={mockStore}>
        <Login />
      </Provider>
    );
  };
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should match snapshot", () => {
    const { container } = renderLogin();
    expect(container).toMatchSnapshot();
  });
  it("should render login form with all required elements", () => {
    renderLogin(); // Check if username input is present
    const usernameInput = screen.getByLabelText("Email");
    expect(usernameInput).toBeInTheDocument(); // Check if password input is present
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument(); // Check if submit button is present
    const submitButton = screen.getByRole("button", { name: /login/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "button");
   
  });

   it("should handle successful login", async () => {
      mockLoginMutation.mockResolvedValueOnce({ token: "fake-token" });
      renderLogin(); // Fill in the form
      const usernameInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: /login/i });
      await userEvent.type(usernameInput, "test@example.com");
      await userEvent.type(passwordInput, "password123"); // Submit the form
      await userEvent.click(submitButton); // Wait for the login mutation to resolve and navigation to occur
      await waitFor(() => {
        expect(mockLoginMutation).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("/employee");
      });
    });
});
