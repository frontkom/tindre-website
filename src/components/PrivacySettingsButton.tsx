"use client";

declare global {
  interface Window {
    __ucCmp?: {
      showSecondLayer: () => void;
    };
  }
}

type PrivacySettingsButtonProps = {
  label: string;
};

export function PrivacySettingsButton({ label }: PrivacySettingsButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.__ucCmp) {
      window.__ucCmp.showSecondLayer();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-xs font-light tracking-[0.12em] text-zinc-400 hover:text-zinc-600 transition-colors"
    >
      {label}
    </button>
  );
}
