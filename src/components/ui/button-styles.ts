export type ButtonVariant = "primary" | "secondary" | "invert";
export type ButtonSize = "sm" | "md";

// Tailwind scans this file for literal class names, so every combination is
// spelled out in full rather than assembled from interpolated fragments.
//
// Each variant repeats its own text color under `hover:` and `active:`. This
// isn't decorative — buttons rendered as <a> also match the global `a:hover
// { color: var(--accent) }` rule in globals.css, and `a:hover` (an element +
// pseudo-class) outranks a single utility class like `text-accent-ink` in
// specificity. Without the explicit hover/active override, hovering an
// accent-background button (e.g. "Get in touch") would turn its text the
// same orange as the background and make it unreadable.
const classMap: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    md: "inline-flex items-center justify-center gap-2 border-[3px] font-extrabold uppercase cursor-pointer no-underline transition-transform duration-150 bg-accent text-accent-ink hover:text-accent-ink active:text-accent-ink border-border text-[15px] px-6 py-3.5 shadow-[5px_5px_0_var(--shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
    sm: "inline-flex items-center justify-center gap-2 border-[3px] font-extrabold uppercase cursor-pointer no-underline transition-transform duration-150 bg-accent text-accent-ink hover:text-accent-ink active:text-accent-ink border-border text-[13px] px-4 py-2.5 shadow-[4px_4px_0_var(--shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
  },
  secondary: {
    md: "inline-flex items-center justify-center gap-2 border-[3px] font-extrabold uppercase cursor-pointer no-underline transition-transform duration-150 bg-bg text-ink hover:text-ink active:text-ink border-border text-[15px] px-6 py-3.5 shadow-[5px_5px_0_var(--shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
    sm: "inline-flex items-center justify-center gap-2 border-[3px] font-extrabold uppercase cursor-pointer no-underline transition-transform duration-150 bg-bg text-ink hover:text-ink active:text-ink border-border text-[13px] px-4 py-2.5 shadow-[4px_4px_0_var(--shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
  },
  invert: {
    md: "inline-flex items-center justify-center gap-2 border-[3px] font-extrabold uppercase cursor-pointer no-underline transition-transform duration-150 bg-accent text-accent-ink hover:text-accent-ink active:text-accent-ink border-bg text-[15px] px-6 py-3.5 shadow-[5px_5px_0_var(--bg)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--bg)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
    sm: "inline-flex items-center justify-center gap-2 border-[3px] font-extrabold uppercase cursor-pointer no-underline transition-transform duration-150 bg-accent text-accent-ink hover:text-accent-ink active:text-accent-ink border-bg text-[13px] px-4 py-2.5 shadow-[4px_4px_0_var(--bg)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--bg)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
  },
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return classMap[variant][size];
}
