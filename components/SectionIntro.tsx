// Label + heading on the left, muted lead on the right; stacks below lg.
export function SectionIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <div>
        <span className="label">{label}</span>
        <h2 className="mt-3.5 text-h2">{title}</h2>
      </div>
      <p className="text-taupe">{children}</p>
    </div>
  );
}
