export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2 border-border bg-surface-alt px-2.25 py-0.75 text-xs font-bold uppercase">
      {children}
    </span>
  );
}

export function Kicker({
  children,
  rotate = false,
  className = "",
}: {
  children: React.ReactNode;
  rotate?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-block bg-ink px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-bg ${
        rotate ? "-rotate-1" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
