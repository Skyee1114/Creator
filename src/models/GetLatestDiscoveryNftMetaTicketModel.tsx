export class GetLatestDiscoveryNftMetaTicketModel {
    constructor(
        public guidId: string,
        public createdTimeStampUtc: Date,
        public walletNftCollectionsProcessCompleted: boolean,
        public walletNftAssetsProcessCompleted: boolean,
        public walletNftCollectionEmpty: boolean,
    ) {}
}