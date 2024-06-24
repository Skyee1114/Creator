import {
    Wallet2
} from "iconsax-react";

export function UserConnectWalletState() {
    return (
        <div className="flex justify-start p-14">
            <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
                <Wallet2 className="w-10 h-10 text-red-500 fill-red-400/30" aria-hidden="true"/>
                <h3 className="mt-2 text-sm font-semibold text-gray-500">Wallet not connected</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by connecting your wallet</p>
            </div>
        </div>
    )
}