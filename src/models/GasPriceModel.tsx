export class GasPriceModel {
    constructor(
        public EthGasEstimate: number,
        public EthGasEstimateTimeStampUtc: Date,
        public EthGasPrice: string,
        public EthGasPriceTimeStampUtc: Date,
        public ArbGasEstimate: number,
        public ArbGasEstimateTimeStampUtc: Date,
        public ArbGasPrice: string,
        public ArbGasPriceTimeStampUtc: Date
    ) {}
}