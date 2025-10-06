import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("renderiza el saludo inicial", () => {
    render(<AboutPage />);
    expect(screen.getByText(/hola/i)).toBeInTheDocument();
  });

  it("muestra el nombre de Victoria López", () => {
    render(<AboutPage />);
    expect(screen.getByText(/victoria lópez/i)).toBeInTheDocument();
  });

  it("contiene la descripción profesional", () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/desarrolladora web especializada en frontend/i)
    ).toBeInTheDocument();
  });

  it("incluye un enlace para descargar el CV", () => {
    render(<AboutPage />);
    const link = screen.getByRole("link", { name: /descargar cv/i });
    expect(link).toHaveAttribute("href", "/LOPEZ-CV.pdf");
    expect(link).toHaveAttribute("download", "LOPEZ-CV.pdf");
  });
});

