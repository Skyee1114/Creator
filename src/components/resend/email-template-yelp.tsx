import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface YelpRecentLoginEmailProps {
    authUserName?: string;
    authEmailAddress?: string;
    fromAddress?: string;
    toAddress?: string;
    chainGuidName?: string;
    tokenPurchaseEthAmount?: string;
    tokenItemPurchaseNumber?: string;
    transactionHash?: string;
    promoCode?: string;
}

const baseUrl = process.env.AZURE_CONTAINER_CSAAS_BASE_URL;
const halfSizeStyle = {
    width: "50%",
    height: "50%"
};

export const Web3TransactionReceiptEmail = ({
                                        authUserName,
                                        authEmailAddress,
                                         fromAddress,
                                         toAddress,
                                         chainGuidName,
                                         tokenPurchaseEthAmount,
                                         tokenItemPurchaseNumber,
                                         transactionHash,
                                         promoCode,
                                     }: YelpRecentLoginEmailProps) => {

    let formattedTokenPurchaseEthAmount;

    if (tokenPurchaseEthAmount) {
        const numValue = Number(tokenPurchaseEthAmount);
        if (!isNaN(numValue)) {
            formattedTokenPurchaseEthAmount = numValue.toFixed(6);
        }
    }

    return (
        <Html>
            <Head />
            <Preview>Your CRET token sale receipt from Creator</Preview>
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <Img src={`${baseUrl}images/brand/svg/creator_logo_green_green_accent_black_text_full.svg`} style={halfSizeStyle} />
                    </Section>

                    <Section style={content}>
                        <Row style={{...boxInfos, paddingBottom: "0"}}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 26,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    CRET
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Token Sale Receipt
                                </Heading>

                                <br/><br/>
                                <Text style={{...paragraph, marginTop: -5}}>
                                    <b>from (your connected wallet)</b><br/>
                                    {fromAddress}
                                </Text>
                                <Text style={{...paragraph, marginTop: -5}}>
                                    <b>to (Creator)</b><br/>
                                    {toAddress}
                                </Text>

                                <Text style={{...paragraph, marginTop: -5}}>
                                    <b>transferred (via {chainGuidName})</b><br/>
                                    {formattedTokenPurchaseEthAmount} ETH for {tokenItemPurchaseNumber} CRET tokens
                                </Text>

                                <Text style={{...paragraph, marginTop: -5}}>
                                    <b>blockchain transaction ref:</b><br/>
                                    {transactionHash}
                                </Text>

                                <Text style={{...paragraph, marginTop: -5}}>
                                    <b>promo code:</b><br/>
                                    {promoCode}
                                </Text>

                                <br/><br/>
                                <Text style={{...paragraph,  textAlign: "center", marginTop: -5}}>
                                    You have successfully purchased your CRET tokens<br/><br/>
                                    Thank you for supporting this ICO
                                </Text>
                            </Column>
                        </Row>

                        <br/><br/>

                    </Section>

                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "rgb(0,0,0, 0.7)",
                        }}
                    >
                        © 2024 | Creator | www.creat-or.io
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default Web3TransactionReceiptEmail;

const main = {
    backgroundColor: "#fff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: "30px 20px",
};

const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
};

const boxInfos = {
    padding: "20px",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
};
