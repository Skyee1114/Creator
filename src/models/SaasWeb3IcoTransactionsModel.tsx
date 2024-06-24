export class SaasWeb3IcoTransactionsModel {
    constructor(
        public GuidId: string,
        public CreatedTimeStampUtc: Date,
        public ToAddress: string,
        public FromAddress: string,
        public TransactionHash: string,
        public ChainGuidId: string,
        public TokenCurrency: string,
        public TokenPurchaseEthAmount: number,
        public TokenItemEthAmount: number,
        public TokenItemPurchaseNumber: number,
    ) {}
}
