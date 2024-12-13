import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remembo",
  description: "Remembo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Remembo</h1>
          <p>Sistema de gestión del conocimiento personal para la administración del conocimiento académico de los estudiantes</p>
        </header>
        {children}
        <footer>
          <p>&copy; 2024 Remembo. Todos los derechos reservados. | <a href="#">Política de privacidad</a></p>
        </footer>
      </body>
    </html>
  );
}
