export default function WaveDivider({ color = "#F8F4EE", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div style={{ lineHeight: 0, transform: flip ? "scaleY(-1)" : undefined }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,24 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
