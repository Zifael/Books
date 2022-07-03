
export interface Items {
    accessInfo: any,
    etag: string,
    id: string,
    kind: string,
    saleInfo: {
        country: string,
        isEbook: boolean,
        saleability: string
    },
    searchInfo: {
        textSnippet: string
    },    
    selfLink: string,
    volumeInfo: iVolumeInfo

}

interface iVolumeInfo {
    allowAnonLogging: boolean,
    authors: Array<string>,
    canonicalVolumeLink: string,
    categories: Array<string>,
    contentVersion: string,
    description?: string,
    imageLinks?: {
        smallThumbnail: string,
        thumbnail: string
    },
    industryIdentifiers: Array<{type: string, identifier: string}>,
    infoLink: string,
    language: string,
    maturityRating: string,
    pageCount: number,
    panelizationSummary: {
        containsEpubBubbles: boolean,
        containsImageBubbles: boolean
    }
    previewLink: string,
    printType: string,
    publishedDate: string,
    publisher: string,
    readingModes: {
        text: boolean,
        image: boolean
    }
    title: string
}