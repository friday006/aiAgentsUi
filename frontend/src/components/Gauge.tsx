import React from 'react';

/**
 * A half-circle gauge component.
 * @param value The current value (e.g., 17)
 * @param min   The min value (default 0)
 * @param max   The max value (default 100)
 * @param label Optional text displayed below the gauge
 */
interface HalfGaugeProps {
  value: number;  // e.g. 17
  min?: number;   // default 0
  max?: number;   // default 100
  label?: string; // e.g. "Avg Score 41"
}

const HalfGauge: React.FC<HalfGaugeProps> = ({
  value,
  min = 0,
  max = 100,
  label,
}) => {
  // Calculate fraction from 0 to 1
  const fraction = (value - min) / (max - min);

  // For a half-circle of radius=40, the path length = π * 40 ≈ 125.66
  const radius = 40;
  const halfCircumference = Math.PI * radius;

  // Fill portion
  const progress = fraction * halfCircumference;
  // Stroke dash offset for the "progress" arc
  const strokeDashoffset = halfCircumference - progress;

  return (
    <div className="flex flex-col items-center">
      {/* SVG sized to show a half circle at the bottom */}
      <svg viewBox="0 0 100 60"
  width="150"   // 2x the original
  height="100"  // 2x the original
      >
        {/* Background arc (gray) */}
        <path
          d="M 10 50 a 40 40 0 0 1 80 0"
          fill="none"
          stroke="#E5E7EB"       // Gray background
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Progress arc (red) */}
        <path
          d="M 10 50 a 40 40 0 0 1 80 0"
          fill="none"
          stroke="#EF4444"       // Red fill
          strokeWidth="10"
          strokeDasharray={halfCircumference.toString()}
          strokeDashoffset={strokeDashoffset.toString()}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
        />
        {/* Center text (value%) */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#111827"
        >
          {value}%
        </text>
      </svg>

      {/* Optional label below the gauge */}
      {label && (
        <div className="mt-1 text-sm text-gray-800">
          {label}
        </div>
      )}
    </div>
  );
};

export default HalfGauge;
