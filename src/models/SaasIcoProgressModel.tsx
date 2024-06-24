export class SaasIcoProgressModel {
    constructor(
        public TokensSoldAmount: number,
        public TokensSoldTimeStampUtc: Date,
        public ConversionUsdEth: number,
        public ConversionUsdEthTimeStampUtc: Date,
        public SingleTokenEthAmount: number,
        public TokensAvailableAmount: number,
        public TokenIcoPhaseTotalAmount: number,
    ) {}
}
