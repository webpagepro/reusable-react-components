// DPT-4428 injection into DPT-4417 large promo banner fix - FW11 - 04.14 - 04.17 - lu: 04.12.2023-JenR

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}

let imagelinkPreset = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}?$HP3101$` //use when intrinsic sizes from scene 7 are original/large resolutions i.e. 2000x2000, etc
}

// If we have to use gif instead of images
let contentlink = (sku) => {
    return `https://s7d2.scene7.com/is/content/PetSmart/${sku}`
}


let data_container = [
    {
        containerName: "ProductCarousel",
        // containerBgColor: "#FFEBEF",
        // isMarketingCarousel: true,
        shouldDisplayHeader: true,
        title: "Dog essentials",
        // shopLink: "",
        // ctaText: "",
        shouldCallApi: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5286296,5286465,5336147,5269945,5323808,5288174,5277157,5154856,5272611,5309545,5192440,5252900)", // comma without space between skus
        },
    },
    // {
    //     containerName: "ProductCarousel",
    //     // containerBgColor: "#FFEBEF",
    //     // isMarketingCarousel: true,
    //     shouldDisplayHeader: true,
    //     title: "Cat essentials",
    //     // shopLink: "",
    //     // ctaText: "",
    //     shouldCallApi: true,
    //     displaySettings: {
    //         desktop: 6,
    //         tablet: 3.5,
    //         mobile: 2.5
    //     },
    //     tileSections: {
    //         skuList: "(5288001,5209028,5335679,5246512,5279455,5138932,5193932,5288003,5287899,5304795,5251777,5334469)", // comma without space between skus
    //     },
    // },
    
]

export default data_container;