// DPT-3914 - Today's Deals 0026 - Fish Deals 0263 - 02.21 - 02.27 - lu: 01.17.2022-JR
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    { // Deals Banner
        containerName: "PromoBanner",
        title: "Fish deals",
        imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_FishDeal_MO"),
        desktop: {
            imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_FishDeal_DT"),
        },
        alt: "Fish deals",
        isInverted: true,
    },
    // 6-tile promo nav
    {
        containerName: "CategoryRow",
        variant: "1-6up",
        title: "Top fish deals",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            {
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_FishDeal_DT"),
                alt: "Aquatic starter kits",
                title: "Sale starting at $34.99 select aquariums & starter kits, 3-55 gal.",
                link: "/sale/todays-deals-0026/fish-deals/deal-1/?origin=fishdeals&desc=deal1&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_FishDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-SP-S_FishDeal_DT"),
                alt: "Aquatic ensembles",
                title: "Save up to $150 select aquarium & stand ensembles, 36-125 gal.",
                link: "/sale/todays-deals-0026/fish-deals/deal-2/?origin=fishdeals&desc=deal2&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-SP-S_FishDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_6TPC3_ML-SP-S_FishDeal_DT"),
                alt: "Water care",
                title: "Buy 1, get the 2nd 50% OFF all API® watercare",
                link: "/sale/todays-deals-0026/fish-deals/deal-3/?origin=fishdeals&desc=deal3&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_6TPC3_ML-SP-S_FishDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_FishDeal_DT"),
                alt: "Aquatic ornaments",
                title: "Buy 1, get the 2nd 50% OFF all aquatic ornaments",
                link: "/sale/todays-deals-0026/fish-deals/deal-4/?origin=fishdeals&desc=deal4&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_FishDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-SP-S_FishDeal_DT"),
                alt: "Aquatic plastic plants",
                title: "Buy 1, get the 2nd 50% OFF all aquatic plastic plants",
                link: "/sale/todays-deals-0026/fish-deals/deal-5/?origin=fishdeals&desc=deal5&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-SP-S_FishDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_6TPC6_ML-SP-S_FishDeal_DT"),
                alt: "Filtration media",
                title: "Buy 1, get the 2nd 50% OFF all aquatic filtration media",
                link: "/sale/todays-deals-0026/fish-deals/deal-6/?origin=fishdeals&desc=deal6&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_6TPC6_ML-SP-S_FishDeal_DT")
                },
                alignText: 'left',
            },
        ],
    },
    // card 2 up
    {
        containerName: "featuredTilesGrid",
        title: "Top categories",
        subTitle: "",
        displayLink: false,
        truncateLines: 2,
        linkLabel: "",
        variant: "1-2up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML-SP-S_TEST-Fish_DT"),
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML-SP-S_TEST-Fish_MO") },
                alt: "Aquatic tank deals",
                title: "Aquatic tank deals",
                subTitle: "Create a waterscape for less",
                readMoreLink: "/sale/todays-deals-0026/fish-deals/category-1/?origin=fishdeals&desc=category1&type=visnav",
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-2_ML-SP-S_TEST-Fish_MO"),
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-2_ML-SP-S_TEST-Fish_DT") },
                alt: "Aquatic decor",
                title: "Savings on Aquatic Decor",
                subTitle: "Give their aquarium a signature style",
                readMoreLink: "/sale/todays-deals-0026/fish-deals/category-2/?origin=fishdeals&desc=category2&type=visnav",
            },
        ],
    },

    // 6-tile promo nav - 3 categories
    {
        containerName: "CategoryRow",
        variant: "sm",
        tileVariant: "promo",
        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
        title: "Shop by price",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            {
                imgContent: imagelink("WEB-1325351-Oct22_6COL_ML-BackUpDeal-1_DT"),
                alt: "Fish deals under $10",
                title: "Fish deals under $10",
                link: "/sale/todays-deals-0026/fish-deals/?pmin=0.00&pmax=10.00&origin=fishdeals&desc=pricepoint1&type=visnav#tabs-1",
                desktop: {
                    imgContent: imagelink("WEB-1325351-Oct22_6COL_ML-BackUpDeal-1_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23_6TPC2_ML-SP-S_TEST_FishDeal_DT"),
                alt: "Fish deals under $50",
                title: "Fish deals under $50",
                link: "/sale/todays-deals-0026/fish-deals/?pmin=0.00&pmax=50.00&origin=fishdeals&desc=pricepoint2&type=visnav#tabs-1",
                desktop: {
                    imgContent: imagelink("WEB-1325354-Jan23_6TPC2_ML-SP-S_TEST_FishDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23_6TPC3_ML-SP-S_TEST_FishDeal_DT"),
                alt: "Fish deals under $100",
                title: "Fish deals under $100",
                link: "/sale/todays-deals-0026/fish-deals/?pmin=0.00&pmax=100.00&origin=fishdeals&desc=pricepoint3&type=visnav#tabs-1",
                desktop: {
                    imgContent: imagelink("WEB-1325354-Jan23_6TPC3_ML-SP-S_TEST_FishDeal_DT")
                },
                alignText: 'left',
            },
        ],
    },
]

export default data_container;