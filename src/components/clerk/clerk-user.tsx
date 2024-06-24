// import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Cog6ToothIcon } from "@heroicons/react/20/solid";
// import { EthereumClassic } from "iconsax-react";
// import React from "react";
//
// export function ClerkUser() {
//     // const { user, isLoaded } = useUser();
//     return (
//                 <>
//                     {/*{isLoaded && user && (*/}
//                         <UserButton afterSignOutUrl="/">
//                                 <UserButton.UserProfilePage label="account" />
//                                 <UserButton.UserProfilePage label="security" />
//                                 {/*<UserButton.UserProfileLink label="Settings" url="/saas/settings" labelIcon={<Cog6ToothIcon />} />*/}
//                                 {/*<UserButton.UserProfileLink label="Smart Wallet" url="/saas/smart-wallets" labelIcon={<EthereumClassic size="17"/>} />*/}
//                             </UserButton>
//                     {/*)}*/}
//                 </>
//     )
// }
//
// export function ClerkUserSignInButton() {
//     return (
//         <SignInButton
//             mode="modal"
//             afterSignInUrl="/saas/dashboard"
//             afterSignUpUrl="/saas/dashboard"
//         >
//             <button className="text-gray-100">
//                 Sign In <span aria-hidden="true">→</span>
//             </button>
//         </SignInButton>
//     )
// }
//
// export function ClerkUserSignOutButton() {
//     return (
//         <SignOutButton >
//             <button className="text-white">Sign out</button>
//         </SignOutButton>
//     )
// }
//
// export function ClerkUserSignUpButton() {
//     return (
//         <SignUpButton
//             mode="modal"
//
//             afterSignInUrl="/saas/dashboard"
//             afterSignUpUrl="/saas/dashboard"
//         >
//             <button
//                 className="flex items-center bg-green-600/40 text-white px-3 py-2 hover:bg-green-400/40 transition-colors duration-200 rounded-full"
//             >Get started
//             </button>
//         </SignUpButton>
//     )
// }