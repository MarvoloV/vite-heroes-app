import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";
import { describe, test } from "vitest";

describe("Pruebas en <AppRouter/>", () => {
  test.concurrent("debe de mostrar el login si no esta autnticado", () => {
    const contextValue = {
      authState: {
        logged: false,
      },
      onLogin: () => {},
      logout: () => {},
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Login").length).toBe(2);
  });
  test.concurrent("debe de mostrar el component de marvel si esta autenticado", () => {
    const contextValue = {
      authState: {
        logged: true,
        name: "Jorge",
      },
      onLogin: () => {},
      logout: () => {},
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Marvel Comics")).toBeTruthy();
    // screen.debug();
  });
});
