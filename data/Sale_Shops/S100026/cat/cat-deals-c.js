//  DPT-4123 - Todays Deals 0026 - Feb '23 Planner Cat Sale Shop - 02.21 - 02.27 - lu: 01.26.2022-RR 
let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let catDealsPageData = [

    // Category banner
    {
        containerName: "PromoBanner",
        title: "Cat deals",
        imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_CatDeal_MO"),
        desktop: { imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_CatDeal_DT") },
        alt: "Cat deals",
        isInverted: true,
    },
    {
        containerName: "CategoryRow",
        title: "Top cat deals",
        shouldCallApi: false,
        // variant: "sm",
        // tileVariant: "promo",
        displaySettings: { desktop: 6, tablet: 6, mobile: 2.5 },
        tileSections: [
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_CatDeal_DT"),
                alt: "Litter box liners",
                title: "Buy 1, get the 2nd 25% OFF select cat litter box liners",
                link: "/sale/todays-deals-0026/cat-deals/deal-1/?origin=catdeals&desc=deal1&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-SP-S_CatDeal_DT"),
                alt: "Scoop Free litter boxes",
                title: "Save up to $20 PetSafe® ScoopFree® litter boxes",
                link: "/sale/todays-deals-0026/cat-deals/deal-2/?origin=catdeals&desc=deal2&type=visnav",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC3_ML-SP-S_CatDeal_DT"),
                alt: "Corrugate cat scratchers",
                title: "Buy 1, get the 2nd 50% OFF select corrugate cat scratchers",
                link: "/sale/todays-deals-0026/cat-deals/deal-3/?origin=catdeals&desc=deal3&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_CatDeal_DT"),
                alt: "Genius litter",
                title: "Sale $24.99 Alpha Paw Genius Litter with Health Indicator, 6 lb. bags",
                link: "/sale/todays-deals-0026/cat-deals/deal-4/?origin=catdeals&desc=deal4&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-SP-S_CatDeal_DT"),
                alt: "Cat food toppers",
                title: "Buy 10, get the 11th & 12th FREE select cat food toppers",
                link: "/sale/todays-deals-0026/cat-deals/deal-5/?origin=catdeals&desc=deal5&type=visnav",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC6_ML-SP-S_CatDeal_DT"),
                alt: "Lightweight litter",
                title: "Sale 2/$51 Purina® Tidy Cats® Lightweight cat litter, 17 lb. pails",
                link: "/sale/todays-deals-0026/cat-deals/deal-6/?origin=catdeals&desc=deal6&type=visnav"
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
        variant: "2up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML-SP-S_TEST-Cat_MO"),
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML-SP-S_TEST-Cat_DT") },
                alt: "Wet cat food savings",
                title: "Wet cat food savings",
                subTitle: "Please their picky tastebuds for less!",
                readMoreLink: "/sale/todays-deals-0026/cat-deals/category-1/?origin=catdeals&desc=category1&type=visnav",
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-2_ML-SP-S_TEST-Cat_MO"),
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-2_ML-SP-S_TEST-Cat_DT") },
                alt: "Stain & Odor Savings",
                title: "Stain & odor savings",
                subTitle: "Leave the stress of mess to us",
                readMoreLink: "/sale/todays-deals-0026/cat-deals/category-2/?origin=catdeals&desc=category2&type=visnav",
            },
        ],
    },
    {
        containerName: "CategoryRow",
        title: "Shop by price",
        shouldCallApi: false,
        variant: "sm",
        tileVariant: "promo",
        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
        tileSections: [
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_TEST_CatDeal_ToysUnder5_DT"),
                alt: "Toys under $5",
                title: "Toys under $5",
                link: "/sale/todays-deals-0026/cat-deals/toys/?pmin=0.00&pmax=5.00&origin=catdeals&desc=pricepoint1&type=visnav#tabs-1"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-SP-S_TEST_CatDeal_LitterUnder25_DT"),
                alt: "Litter under $25",
                title: "Litter under $25",
                link: "/sale/todays-deals-0026/cat-deals/liners+litter/?pmin=0.00&pmax=25.00&origin=catdeals&desc=pricepoint2&type=visnav#tabs-1",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC6_ML-SP-S_TEST_CatDeal_FoodUnder30_DT"),
                alt: "Food under $30",
                title: "Food under $30",
                link: "/sale/todays-deals-0026/cat-deals/dry-food+food+food-pouches+canned-food/?pmin=0.00&pmax=30.00&origin=catdeals&desc=pricepoint3&type=visnav#tabs-1"
            },
        ],
    },
]


export default catDealsPageData;