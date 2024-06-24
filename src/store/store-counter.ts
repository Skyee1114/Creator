// import { create } from "zustand";
//
// type StoreCounter = {
//     count: number;
//     increment: () => void;
//     incrementAsync: () => Promise<void>;
//     decrement: () => void;
// };
//
// export const useCounterStore = create<StoreCounter>((set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     incrementAsync: async () => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         set((state) => ({ count: state.count + 1 }));
//     },
//     decrement: () => set((state) => ({ count: state.count - 1 })),
//     reset: () => set({ count: 0 }),
// }));
