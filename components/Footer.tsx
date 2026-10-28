export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © {year} Daniel Muiruri
    </footer>
  );
}