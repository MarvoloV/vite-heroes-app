import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { beforeEach, describe, test, vi } from "vitest";
import { AuthContext } from "../../src/auth";
import { Navbar } from "../../src/ui/components/Navbar";

const mockedUseNavigate= vi.fn();
vi.mock("react-router-dom",async()=>({
  ...(await vi.importActual<any>('react-router-dom')),
  useNavigate:()=> mockedUseNavigate
}))

describe("Pruebas en <Navbar/>", () => {
  const contextValue = {
    authState: {
      logged: true,
      name: "Jorge",
    },
    onLogin: () => {},
    logout: vi.fn(),
  };
  beforeEach(()=> vi.clearAllMocks());
  test("debe mostrar el nombre logeado", () => {
    
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Jorge')).toBeTruthy()
  });
  test('debe cerrar sesion', () => { 
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{"replace":true})
   })
});
