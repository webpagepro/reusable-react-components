let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let reptileDealsPageData = [

    // Category banner
    {
        containerName: "PromoBanner",
        title: "Reptile deals",
        imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_ReptileDeal_MO"),
        desktop: { imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_ReptileDeal_DT") },
        alt: "Reptile deals",
        isInverted: true,
    },
    {
        containerName: "CategoryRow",
        title: "Top reptile deals",
        shouldCallApi: false,
        variant: "sm",
        tileVariant: "promo",
        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
        tileSections: [
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_ReptileDeal_DT"),
                alt: "Reptile terrariums",
                title: "Save up to $50 select reptile terrariums",
                link: "/sale/todays-deals-0026/reptile-deals/deal-1/?origin=reptiledeals&desc=deal1&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1325150-June22_6COL2_ML-ReptileDeal_DT"),
                alt: "Autoship",
                title: "SAVE 35% first Autoship order + 5% off future orders, see terms",
                link: "/featured-shops/auto-ship/reptile/?origin=reptiledeals&desc=deal2&type=visnav#tabs-1",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1325351-Oct22_6COL_ML-BackUpDeal-1_DT"),
                alt: "Reptile deals under $10",
                title: "Reptile deals under $10",
                link: "/sale/todays-deals-0026/reptile-deals/?pmin=0.00&pmax=10.00&origin=reptiledeals&desc=deal3&type=visnav#tabs-1"
            },
        ],
    },
]


export default reptileDealsPageData;