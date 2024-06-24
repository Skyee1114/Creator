"use client"

import { useUserSessionStore } from "@/store/store-user-session";

export function ZustandUserSession() {
    // const clerk_user_Id = useUserSessionStore((state) => state.clerk_user_Id);
    // const clerk_active_session = useUserSessionStore((state) => state.clerk_active_session);
    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    const thirdweb_connected_chain = useUserSessionStore((state) => state.thirdweb_connected_chain);

    return (
        <>
            {/*<div className="font-bold">*/}
            {/*    Clerk User Id*/}
            {/*</div>*/}
            {/*<div className="pl-10">*/}
            {/*    {clerk_user_Id || 'Not set'}*/}
            {/*</div>*/}

            {/*<div className="font-bold mt-2">*/}
            {/*    Clerk Active Session*/}
            {/*</div>*/}
            {/*<div className="pl-10">*/}
            {/*    {clerk_active_session || 'Not set'}*/}
            {/*</div>*/}

            <div className="font-bold mt-2">
                Wallet Address
            </div>
            <div className="pl-10">
                {thirdweb_connected_wallet || 'Not set'}
            </div>

            <div className="font-bold mt-2">
                EVM Chain
            </div>
            <div className="pl-10">
                {thirdweb_connected_chain || 'Not set'}
            </div>
        </>
    )
}
