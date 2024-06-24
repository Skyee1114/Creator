import * as React from "react"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function ReasonsWhyBeATokenHolder() {
    return (
        <>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="max-w-screen-xl">
                    <CardHeader>
                        <CardTitle>Reduced Platform Fees: Sliding Scale Discounts</CardTitle>
                        <CardDescription>Holding CRET tokens entitles investors to a sliding scale of
                            discounts on platform fees, including investment transactions,
                            withdrawals, and other services. The discount increases with the
                            number of tokens held, significantly enhancing investment
                            profitability.</CardDescription>
                    </CardHeader>
                </Card>

                <Card className="max-w-screen-xl">
                    <CardHeader>
                        <CardTitle>Staking Rewards and DAO Participation</CardTitle>
                        <CardDescription>Earning through Staking: Investors can stake their CRET tokens to
                            earn rewards, providing a substantial passive income stream.
                            Influential DAO Role: Top token holders participate in the
                            platform&apos;s DAO, influencing key decisions, including project
                            listings, thus shaping the platform’s strategic direction.</CardDescription>
                    </CardHeader>
                </Card>

                <Card className="max-w-screen-xl">
                    <CardHeader>
                        <CardTitle>Early Access to Investment Opportunities</CardTitle>
                        <CardDescription>Priority Investment Opportunities: Token holders get early access to
                            new investment ventures, allowing them to invest in high-potential
                            projects before they open to the broader market, potentially
                            securing better terms.</CardDescription>
                    </CardHeader>
                </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>Leadership Opportunities in Funded Companies</CardTitle>
                    <CardDescription>Strategic Roles in Investments: Significant investments can lead to
                        roles like board members or advisors in funded companies, aligning investors&apos;
                        financial interests with the operational success of these businesses. NFT-Based Benefits:
                        Investment Representation through NFTs: Investors receive unique NFTs representing
                        rights and perks, such as dividends and voting rights, associated with their investments.
                        These NFTs offer liquidity and can be traded on secondary markets.</CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>Tiered Rewards System</CardTitle>
                    <CardDescription>Exclusive Benefits Across Tiers: The platform&apos;s tiered system offers
                        varying levels of benefits based on token holdings, with higher tiers accessing more
                        exclusive advantages like unique investment opportunities and special platform privileges.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>CREAT&apos;OR Equity Reward Mechanism</CardTitle>
                    <CardDescription>Equity Allocation for Top Investors: A portion of equity in listed companies
                        is allocated as rewards for top investors, aligning their interests with the long-term success
                        of their investments.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>CREAT&apos;OR Project Tracker</CardTitle>
                    <CardDescription>Real-Time Project Insights: A blockchain-integrated dashboard provides
                        real-time data and analytics on projects, enhancing transparency and informed decision-making
                        for investors.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>CREAT&apos;OR Exclusive Insights</CardTitle>
                    <CardDescription>In-Depth Analyses and Reports: This feature offers detailed analyses, progress
                        reports, and direct interactions with project teams, available through a &apos;CREAT&apos;OR
                        Insider&apos; subscription service.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>CREAT&apos;OR Special Invites</CardTitle>
                    <CardDescription>Exclusive Event Access: High-tier token holders receive invites to online and
                        offline events, including investment forums and industry conferences, offering enhanced
                        networking opportunities and insights.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-4 max-w-screen-xl">
                <CardHeader>
                    <CardTitle>CREAT&apos;OR University</CardTitle>
                    <CardDescription>Educational Resources: An online learning hub provides webinars, courses,
                        and articles on investment strategies and industry trends, tailored to different investor tiers
                        for continuous learning and engagement.
                    </CardDescription>
                </CardHeader>
            </Card>

            </div>
        </>
    )
}
