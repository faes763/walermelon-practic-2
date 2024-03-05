import { create } from 'zustand'

interface toggleState {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const usePopupComponent = create<toggleState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
