
export function AnabynLogo({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Anabyn Global Ventures LLP"
    >
      <path
        d="M209.682 60.1062L512 0L814.318 60.1062V226.705C814.318 576.804 686.364 851.688 512 1024C337.636 851.688 209.682 576.804 209.682 226.705V60.1062Z"
        fill="#002244"
      />
      <path
        d="M512 1024L209.682 226.705V60.1062L512 0"
        fill="#0C356A"
      />
      <text
        x="512"
        y="500"
        fontFamily="sans-serif"
        fontSize="400"
        fill="#FFC436"
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="bold"
      >
        A
      </text>
    </svg>
  );
}
