let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let smallPetDealsPageData = [

    // Category banner
    {
        containerName: "PromoBanner",
        title: "Small pet deals",
        imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_SmPetDeal_MO"),
        desktop: { imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_SmPetDeal_DT") },
        alt: "Small pet deals",
        isInverted: true,
    },
    {
        containerName: "CategoryRow",
        title: "Top small pet deals",
        shouldCallApi: false,
        // variant: "sm",
        // tileVariant: "promo",
        // displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
        tileSections: [
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_SmPetDeal_DT"),
                alt: "Small pet treats and chews",
                title: "Buy 3, get the 4th FREE all small pet treats & chews",
                link: "/sale/todays-deals-0026/small-pet-deals/deal-1/?origin=smallpetdeals&desc=deal1&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-SP-S_SmPetDeal_DT"),
                alt: "Small pet bedding",
                title: "Buy 1, get the 2nd 50% OFF all Full Cheeks™ small pet bedding",
                link: "/sale/todays-deals-0026/small-pet-deals/deal-2/?origin=smallpetdeals&desc=deal2&type=visnav",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC3_ML-SP-S_SmPetDeal_DT"),
                alt: "Small pet diets",
                title: "Buy 1, get the 2nd 50% OFF all small pet diets",
                link: "/sale/todays-deals-0026/small-pet-deals/deal-3/?origin=smallpetdeals&desc=deal3&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_SmPetDeal_DT"),
                alt: "Small pet habitats",
                title: "Save 20% select Full Cheeks™ habitats",
                link: "/sale/todays-deals-0026/small-pet-deals/deal-4/?origin=smallpetdeals&desc=deal4&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1325150-June22_6COL3_ML-SPDeal_DT"),
                alt: "Autoship",
                title: "Save 35% first Autoship order + 5% off future orders, see terms",
                link: "/featured-shops/auto-ship/small-pet/?origin=smallpetdeals&desc=deal5&type=visnav#tabs-1"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1325351-Oct22_6COL_ML-BackUpDeal-1_DT"),
                alt: "Small pet deals under $10",
                title: "Small pet deals under $10",
                link: "/sale/todays-deals-0026/small-pet-deals/?pmin=0.00&pmax=10.00&origin=smallpetdeals&desc=deal6&type=visnav#tabs-1"
            },
        ],
    },
]


export default smallPetDealsPageData;