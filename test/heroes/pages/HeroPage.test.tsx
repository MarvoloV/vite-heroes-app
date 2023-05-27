import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, test } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../../src/auth";
import { HeroPage } from "../../../src/heroes";

describe("Pruebas en <HeroPage/>", () => {
  test("debe mostrar los card de heroes de DC", () => {
    const contextValue = {
      authState: {
        logged: true,
        name: "Jorge",
      },
      onLogin: () => {},
      logout: () => {},
    };
    render(
      <MemoryRouter initialEntries={["/hero/dc-superman"]}>
        {/* <AuthContext.Provider value={contextValue}></AuthContext.Provider> */}
        <Routes>
          <Route path="/hero/:id" element={<HeroPage />}>
            
          </Route>
        </Routes>
        {/* </AuthContext.Provider> */}
      </MemoryRouter>
    );
    expect(screen.getByText("Superman")).toBeTruthy();
    
    
  });
});
