"use server";

import { Resend } from "resend";
import { Web3TransactionReceiptEmail } from "@/components/resend/email-template-yelp";

const resend = new Resend(process.env.RESEND_API_KEY);

interface TransactionReceiptDetails {
    authUserName?: string;
    authEmailAddress?: string;
    toAddress?: string;
    fromAddress?: string;
    chainGuidName?: string;
    tokenPurchaseEthAmount?: string;
    tokenItemPurchaseNumber?: string;
    transactionHash?: string;
    promoCode?: string;
}

export async function resendEmailWeb3TransactionReceipt(details: TransactionReceiptDetails) {
    try {
        if (typeof details.authEmailAddress !== 'string') {
            throw new Error('authEmailAddress is not a string');
        }

        let emailString = 'info@creat-or.io, promo@coinband.io';
        let emailArray = emailString.split(",").map(email => email.trim());

        const message = ``;
        const data = await resend.emails.send({
            from: 'Creator | ICO <receipts@saas.creat-or.io>',
            to: emailArray,
            subject: `Your CRET token sale receipt from Creator`,
            text: message,
            react:  Web3TransactionReceiptEmail(details),
        });

        return Response.json(data);
    } catch (error) {
        const err = error as Error;
        return Response.json({ error: err.message });
    }
}

// to: [details.authEmailAddress],
//  bcc: emailArray,