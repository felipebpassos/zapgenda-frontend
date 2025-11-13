export default function Footer() {
  return (
    <footer className="h-16 border-t bg-white flex items-center justify-center text-sm text-gray-500">
      © {new Date().getFullYear()} ZapGenda — Todos os direitos reservados.
    </footer>
  );
}
