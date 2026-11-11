// Primary wordmark: PRIMUS NARRATIVE in Cormorant Garamond Medium capitals, widely spaced.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif font-medium text-[15px] tracking-[0.18em] sm:text-[19px] sm:tracking-[0.24em] text-burgundy whitespace-nowrap ${className}`}
    >
      PRIMUS NARRATIVE
    </span>
  );
}
