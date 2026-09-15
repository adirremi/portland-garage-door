export function DoorMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect
        x="10"
        y="6"
        width="28"
        height="36"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {Array.from({ length: 4 }, (_, index) => (
        <rect
          key={index}
          x="14"
          y={11 + index * 7.4}
          width="20"
          height="5.2"
          rx="0.6"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      ))}
      <circle cx="32" cy="29.6" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function Seam({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-line" />
      <span className="size-1.5 rotate-45 border border-line-strong" />
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
