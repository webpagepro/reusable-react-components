let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let birdDealsPageData = [

    // promo banner
    {
        containerName: "PromoBanner",
        title: "Bird deals",
        imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_BirdDeal_MO"),
        desktop: { imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_BirdDeal_DT") },
        alt: "Bird deals",
        isInverted: true,
    },
    {
        containerName: "CategoryRow",
        title: "Top bird deals",
        shouldCallApi: false,
        variant: "sm",
        tileVariant: "promo",
        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
        tileSections: [
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_BirdDeal_DT"),
                alt: "Bird treats",
                title: "Buy 2, get the 3rd 50% OFF all bird treats",
                link: "/sale/todays-deals-0026/bird-deals/deal-1/?origin=birddeals&desc=deal1&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1325351-Oct22_6COL3_ML-BirdDeal_DT"),
                alt: "Autoship",
                title: "SAVE 35% first Autoship order + 5% off future orders, see terms",
                link: "/featured-shops/auto-ship/bird/?origin=birddeals&desc=deal2&type=visnav#tabs-1",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1325351-Oct22_6COL_ML-BackUpDeal-1_DT"),
                alt: "Bird deals under $10",
                title: "Bird deals under $10",
                link: "/sale/todays-deals-0026/bird-deals/?pmin=0.00&pmax=10.00&origin=birddeals&desc=deal3&type=visnav#tabs-1"
            },
        ],
    },
]


export default birdDealsPageData;