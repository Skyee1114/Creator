interface Attribute {
    traitType?: string | null;
    value?: string | null;
}

interface NormalisedMetaData {
    name?: string | null;
    description?: string | null;
    animationUrl?: string | null;
    animationUrlIpfs?: boolean;
    externalUrl?: string | null;
    externalUrlIpfs?: boolean;
    imageUrl?: string | null;
    imageUrlIpfs?: boolean;
    attributes?: Attribute[] | null;
}

export interface Token {
    amount?: string | null;
    tokenId?: string | null;
    tokenAddress?: string | null;
    contractType?: string | null;
    ownerOf?: string | null;
    possibleSpam?: boolean;
    name?: string | null;
    symbol?: string | null;
    metaData?: string | null;
    normalisedMetaData?: NormalisedMetaData | null;
}