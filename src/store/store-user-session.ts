import { create } from "zustand";

export interface UserSessionState {
    // clerk_user_Id?: string | null;
    // setClerkUserId?: (clerk_user_Id: string | null) => void;
    //
    // clerk_active_session?: string | null;
    // setClerkActiveSession?: (clerk_active_session: string | null) => void;

    thirdweb_connected_wallet?: string | null;
    setThirdwebConnectedWallet?: (thirdweb_connected_wallet: string | null) => void;

    thirdweb_connected_chain?: number | null;
    setThirdwebConnectedChain?: (thirdweb_connected_chain: number | null) => void;
    //
    // clerk_connected_wallet?: number | null;
    // setClerkConnectedWallet?: (clerk_connected_wallet: number | null) => void;
}

export const useUserSessionStore = create<UserSessionState>((set) => ({
    // clerk_user_Id: null,
    // setClerkUserId: (clerk_user_Id: string | null) => set(() => ({clerk_user_Id})),
    //
    // clerk_active_session: null,
    // setClerkActiveSession: (clerk_active_session: string | null) => set(() => ({clerk_active_session})),

    thirdweb_connected_wallet: null,
    setThirdwebConnectedWallet: (thirdweb_connected_wallet: string | null) => set(() => ({thirdweb_connected_wallet})),

    thirdweb_connected_chain: undefined,
    setThirdwebConnectedChain: (thirdweb_connected_chain: number | null) => set(() => ({thirdweb_connected_chain})),

    // clerk_connected_wallet: undefined,
    // setClerkConnectedWallet: (clerk_connected_wallet: number | null) => set(() => ({clerk_connected_wallet})),
}));