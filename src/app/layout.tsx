import "@/styles/globals.css";

export const metadata = {
  title: "ZapGenda",
  description: "Sua agenda automatizada com WhatsApp e lembretes inteligentes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-inter bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
