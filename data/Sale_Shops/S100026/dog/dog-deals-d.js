//  DPT-4161 Injection into DPT-4124 - Todays Deals 0026 - Feb '23 Planner Dog Sale Shop - 02.21 - 02.27 - lu: 02.07.2023-JenR 
let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let dogDealsPageData = [

    // Category banner
    {
        containerName: "PromoBanner",
        title: "Dog deals",
        imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_DogDeal_MO"),
        desktop: { imgContent: imagelink("WEB-1621359-Feb23_CAT-BNR_ML-SP-S_DogDeal_DT") },
        alt: "Dog deals",
        isInverted: true,
    },
    {
        containerName: "CategoryRow",
        title: "Top dog deals",
        shouldCallApi: false,
        // variant: "sm",
        // tileVariant: "promo",
        displaySettings: { desktop: 6, tablet: 6, mobile: 2.5 },
        tileSections: [
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-SP-S_DogDeal_DT"),
                alt: "Stain and odor products",
                title: "Buy 2, get the 3rd FREE all stain & odor products",
                link: "/sale/todays-deals-0026/deal-1/dog/?origin=dogdeals&desc=deal1&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-SP-S_DogDeal_DT"),
                alt: "Dog food toppers",
                title: "Buy 2, get the 3rd 50% OFF all dog food toppers",
                link: "/sale/todays-deals-0026/dog-deals/deal-2/?origin=dogdeals&desc=deal2&type=visnav",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-Deal_DT"),
                alt: "Wire crates",
                title: "Sale starting at $24.99 select wire crates",
                link: "/sale/todays-deals-0026/deal-2/?origin=dogdeals&desc=deal3&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_DogDeal_DT"),
                alt: "Dog treats and chews",
                title: "Buy 1, get the 2nd 25% OFF dog treats & chews",
                link: "/sale/todays-deals-0026/dog-deals/deal-4/?origin=dogdeals&desc=deal4&type=visnav"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-SP-S_DogDeal_DT"),
                alt: "Dog supplements",
                title: "Save up to $10 select dog supplements",
                link: "/sale/todays-deals-0026/dog-deals/deal-5/?origin=dogdeals&desc=deal5&type=visnav",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC7_ML-SP-S_BUDeal-1-DogDeal_DT"),
                alt: "Authority dog food",
                title: "Save $4 select Authority® dog food, 30-34 lb. bags",
                link: "/sale/todays-deals-0026/dog-deals/deal-6/?origin=dogdeals&desc=deal6&type=visnav"
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
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML-SP-S_TEST-Dog_MO"),
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML-SP-S_TEST-Dog_DT") },
                alt: "Specialized nutrition",
                title: "Specialized Nutrition",
                subTitle: "Nutrition designed for your dog's unique needs",
                readMoreLink: "/sale/todays-deals-0026/dog-deals/category-1/?origin=dogdeals&desc=category1&type=visnav",
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-3_ML-SP-S_TEST-Dog-_MO"),
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-3_ML-SP-S_TEST-Dog-_DT") },
                alt: "St. Patty's Day",
                title: "Seasonal must-haves",
                subTitle: "Be ready for St. Patty's Day!",
                readMoreLink: "/sale/todays-deals-0026/dog-deals/category-2/?origin=dogdeals&desc=category2&type=visnav",
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
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-SP-S_TEST_DogDeal_ToysUnder5_DT"),
                alt: "Toys under $5",
                title: "Toys under $5",
                link: "/sale/todays-deals-0026/dog-deals/toys/?pmin=0.00&pmax=5.00&origin=dogdeals&desc=pricepoint1&type=visnav#tabs-1"
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-SP-S_TEST_DogDeal_TreatsUnder5_DT"),
                alt: "Treats under $5",
                title: "Treats under $5",
                link: "/sale/todays-deals-0026/dog-deals/biscuits-and-bakery+bones-and-rawhide+chewy-treats+crunchy-treats+dental-treats+jerky+soft-treats+training-treats+treats/?pmin=0.00&pmax=5.00&origin=dogdeals&desc=pricepoint2&type=visnav#tabs-1",
            },
            {
                alignText: "left",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC6_ML-SP-S_TEST_DogDeal_CleanupUnder15_DT"),
                alt: "Cleanup under $15",
                title: "Cleanup under $15",
                link: "/sale/todays-deals-0026/dog-deals/stain-and-odor-removers+stain-and-urine-removers+waste-disposal/?pmin=0.00&pmax=15.00&origin=dogdeals&desc=pricepoint3&type=visnav#tabs-1"
            },
        ],
    },
]


export default dogDealsPageData;