export function Logo({
  size = "md",
  tone = "ink",
}: {
  size?: "sm" | "md" | "lg";
  tone?: "ink" | "bone";
}) {
  const sizeClass =
    size === "lg"
      ? "text-[28px] md:text-[32px]"
      : size === "sm"
        ? "text-[20px]"
        : "text-[22px] md:text-[24px]";

  const toneClass = tone === "bone" ? "text-bone" : "text-ink";
  const muteTone = tone === "bone" ? "text-bone/60" : "text-mute";

  return (
    <span
      className={`font-serif tracking-tight inline-flex items-baseline gap-[0.35ch] whitespace-nowrap ${sizeClass} ${toneClass}`}
      aria-label="Primus Narrative"
    >
      <span>
        Pr<em className="italic text-accent not-italic-fallback">i</em>mus
      </span>
      <span className={`${muteTone} not-italic`}>·</span>
      <span className="italic">Narrative</span>
    </span>
  );
}
