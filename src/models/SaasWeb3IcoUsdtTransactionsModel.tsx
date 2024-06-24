export class SaasWeb3IcoUsdtTransactionsModel {
    constructor(
        public GuidId: string,
        public CreatedTimeStampUtc: Date,
        public AddressConnectedWallet: string,
        public AddressReceiving: string,
        public CoinRemitterTransactionGuidId: string,
        public NotifyInvoiceResponse: string,
    ) {}
}
