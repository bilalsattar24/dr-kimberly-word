import Image from "next/image";

interface SparkleProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Sparkle({
  className = "",
  width = 28,
  height = 42,
}: SparkleProps) {
  return (
    <Image
      src="/sparkle.svg"
      alt=""
      width={width}
      height={height}
      className={`inline-block ${className}`}
      style={{ width: "auto", height: "auto" }}
      aria-hidden="true"
    />
  );
}
