export function NavAnchor({ href, children, active = false }) {
  return (
    <a href={href} className={`nav-tech whitespace-nowrap ${active ? "is-active" : ""}`}>
      {children}
    </a>
  );
}
