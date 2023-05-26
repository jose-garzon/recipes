import "./globals.css";

export const metadata = {
  title: "Recipes",
  description: "Manage you weekly meals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
