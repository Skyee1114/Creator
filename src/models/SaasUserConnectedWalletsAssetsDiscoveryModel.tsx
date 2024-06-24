export class SaasUserConnectedWalletsAssetsDiscoveryModel {
    constructor(
        public guidId: string,
        public chainArbitrumEnabled: boolean,
        public chainAvalancheEnabled: boolean,
        public chainBaseEnabled: boolean,
        public chainBinanceEnabled: boolean,
        public chainCronosEnabled: boolean,
        public chainEthereumEnabled: boolean,
        public chainFantomEnabled: boolean,
        public chainGnosisEnabled: boolean,
        public chainPolygonEnabled: boolean,
        public chainArbitrumDiscoveryTicketGuidId?: string,
        public chainAvalancheDiscoveryTicketGuidId?: string,
        public chainBaseDiscoveryTicketGuidId?: string,
        public chainBinanceDiscoveryTicketGuidId?: string,
        public chainCronosDiscoveryTicketGuidId?: string,
        public chainEthereumDiscoveryTicketGuidId?: string,
        public chainFantomDiscoveryTicketGuidId?: string,
        public chainGnosisDiscoveryTicketGuidId?: string,
        public chainPolygonDiscoveryTicketGuidId?: string
    ) {}
}

export type ChainType = {
    value: string;
    label: string;
    enabled: boolean;
};