import { HeaderDashboard } from "@/components/headers/header-dashboard";
import { TimeOfDayGreeting } from "@/components/datetime/time-sensitive-greeting";
import { DateTimeDisplayContinuously } from "@/components/datetime/datetime-display-continuously";
// import { auth } from "@clerk/nextjs";
import {ReasonsWhyBeATokenHolder} from "@/components/ico/reasons-why-be-a-token-holder";

export default async function Page() {
        // const { userId } = auth();

        return (
            <>
                    <div className="dark bg-black text-white">
                            <div className="flex justify-between pb-1 ">
                                    <div className="flex overflow-x-auto ">
                                            <div
                                                className="flex min-w-full flex-none gap-x-6 px-2 text-md font-semibold leading-6 sm:px-6 lg:px-8 text-gray-400/80">
                                                    <TimeOfDayGreeting/>
                                            </div>
                                    </div>
                                    <div className="flex justify-end">
                                            <div className="mr-2 sm:px-1 lg:px-6">
                                                    {/*<CommandDialogTest/>*/}
                                            </div>
                                    </div>
                            </div>

                            <HeaderDashboard/>

                            <div
                                className="px-4 py-4 flex flex-col justify-between items-start sm:flex-row bg-gray-700/10 gap-x-8 gap-y-4 sm:px-6 lg:px-8">
                                    <div>


                                            <div
                                                className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-x-3">
                                                    <div className="order-2 sm:order-1 flex items-center">
                                                            <div
                                                                className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                                                                    <div className="h-2 w-2 rounded-full bg-current"/>
                                                            </div>
                                                            <h1 className="ml-2 flex gap-x-3 text-base leading-7">
                                                                    <span className="font-semibold text-white">Dashboard</span>
                                                                    <span className="text-gray-600">/</span>
                                                                    <span className="font-semibold text-white">Welcome</span>
                                                            </h1>
                                                    </div>
                                                    <div
                                                        className="order-1 sm:order-3 mb-4 sm:mb-0 sm:ml-auto flex-none rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/30">
                                                            <DateTimeDisplayContinuously/>
                                                    </div>
                                            </div>

                                            <div className="text-md text-gray-200  mt-6 ">
                                                    <p className="font-bold text-lg">
                                                            We hope to welcome you onboard as a valued $CRET token holder.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                            Your part of an elite group that enjoys comprehensive benefits
                                                            designed to maximize your investment experience and returns.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                            Your privileges include sliding scale discounts on platform fees,
                                                            earning potential through staking, a say in our DAO,
                                                            early access to new ventures, potential strategic roles in funded
                                                            companies, NFT-based investment perks, a tiered rewards
                                                            system, and equity rewards.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                            Plus, enjoy real-time insights with our
                                                            project tracker, exclusive analysis, special event invites,
                                                            and educational resources from CREAT&apos;OR University.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                            Explore these advantages in detail and take advantage of our
                                                            current ICO discount by navigating to the token purchase/wallet tab.
                                                    </p>
                                            </div>

                                            <div className="text-md text-gray-200 mt-10 mb-20">
                                                    <p className="font-bold text-lg">
                                                            Here are some of the reasons why you would want to be part of
                                                            Creat&apos;or as a token holder.
                                                    </p>
                                                    <ReasonsWhyBeATokenHolder />
                                            </div>

                                    </div>
                            </div>
                    </div>
            </>
        )
}
