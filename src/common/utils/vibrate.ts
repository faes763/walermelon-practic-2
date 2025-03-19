
export const vibrate = (style: "light" | "medium" | "heavy" | "rigid" | "soft") => {
    window.Telegram?.WebApp?.HapticFeedback.impactOccurred(style); 
}