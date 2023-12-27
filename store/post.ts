import { create } from "zustand";

export const useFontSize = create((set) => ({
    fontSize: 10,
    increase: (value: number) => {
        set((state: any) => {
            return { fontSize: state.fontSize + value };
        })
    },
    decrease: (value: number) => {
        set((state: any) => {
            return { fontSize: state.fontSize - value };
        })
    }
}))
