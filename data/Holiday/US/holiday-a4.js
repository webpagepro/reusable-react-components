// DPT-3973 - Holiday 2022 Shop - 12.17 - 12.26 - lu: 12.12.2022-LJ

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    {
        // Promo Banner - Large
        containerName: "promoBannerLarge",
        className: "halloween-promo-banner", // Temporary Halloween class style to align to creative recieved
        title: "Share the Joy & Save",
        subTitle: "Deals you'll love. Gifts they'll love.",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO-LB_HolidayExp_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO-LB_HolidayExp_DT"),
        },
        alt: "Deals you'll love. Gifts they'll love.",
        isInverted: true,
    },
    { // Shop by pet
        containerName: "CategoryRow",
        title: "Shop by Pet",
        shouldCallApi: false,
        displaySettings:
        {
            desktop: 5,
            tablet: 5,
            mobile: 2.5
        },

        tileSections: [
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC1_HolidayExp-Dog_DT"),
                alt: "Dog",
                title: "Dog",
                link: "/featured-shops/holiday/dog-shop/?origin=holiday&desc=dog&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC2_HolidayExp-Cat_DT"),
                alt: "Cat",
                title: "Cat",
                link: "/featured-shops/holiday/cat-shop/?origin=holiday&desc=cat&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC3_HolidayExp-Fish_DT"),
                alt: "Fish",
                title: "Fish",
                link: "/featured-shops/holiday/fish-shop/?origin=holiday&desc=fish&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC4_HolidayExp-Rep_DT"),
                alt: "Reptile",
                title: "Reptile",
                link: "/featured-shops/holiday/reptile-shop/?origin=holiday&desc=reptile&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC5_HolidayExp-SmPet_DT"),
                alt: "Small Pet",
                title: "Small Pet",
                link: "/featured-shops/holiday/small-pet-shop/?origin=holiday&desc=smallpet&type=shopbypet"
            },

        ],

    },
    { // Deals Banner
        containerName: "PromoBanner",
        title: "Monthly Deals",
        href: "/sale/todays-deals-0027/?origin=holiday&desc=deals&type=banner",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-MD_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-MD_DT"),
        },
        ctaText: "Shop now",
        alt: "Monthly Deals",
        isInverted: true,
    },
    {
        // Gifts $10 & Under - 1-2-4up
        containerName: "featuredTilesGrid",
        title: "Gifts $10 & Under",
        subTitle: "Stuff their stockings with delightful surprises.",
        showAllText: "",
        showAllLink: "",
        variant: "1-2-4up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Toys under $10",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/toys+toys-and-habitat-accessories/?pmin=0.00&pmax=10.00&origin=holiday&desc=toys&type=gifts10#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-1A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-1A_HolidayExp-Gifts_DT"),
                },
                alt: "Toys under $10",
            },
            {
                title: "Treats under $10",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/biscuits-and-bakery+bones-and-rawhide+chewy-treats+dental-treats+training-treats+treats/?pmin=0.00&pmax=10.00&origin=holiday&desc=treats&type=gifts10#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-2A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-2A_HolidayExp-Gifts_DT"),
                },
                alt: "Treats under $10",
            },
            {
                title: "Décor under $10",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/ornaments/fish/?pmin=0.00&pmax=10.00&origin=holiday&desc=ornaments&type=gifts10#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-3A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-3A_HolidayExp-Gifts_DT"),
                },
                alt: "Decor under $10",
            },
            {
                title: "More gifts under $10",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/colognes-and-deodorant+gifts+shampoo-and-conditioner+stain-and-odor-removers+waste-disposal/?pmin=0.00&pmax=10.00&origin=holiday&desc=more&type=gifts10#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-4A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-4A_HolidayExp-Gifts_DT"),
                },
                alt: "More gifts under $10",
            },
        ],
    },
    {
        // Product Carousel
        containerName: "ProductCarousel",
        title: "Advent Calendars",
        shopLink: "/featured-shops/holiday/?prefn1=customSeries&prefv1=Holiday%20Advent%20Calendars&origin=holiday&desc=advent&type=carousel#tabs-1",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5329222,5332291,5332597,5329216,5337112,5328253,5329203,5331810)", // comma without space between skus
        },
    },
    {
        // Jolly Treats & Chews - 1-3up
        containerName: "featuredTilesGrid",
        title: "Jolly Treats & Chews",
        subTitle: "A taste of the holidays for every pet!",
        showAllText: "",
        showAllLink: "",
        variant: "1-3up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Dog",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/dog-shop/biscuits-and-bakery+bones-and-rawhide+chewy-treats+dental-treats+jerky+training-treats+treats/?origin=holiday&desc=dog&type=treatschews#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_3CRD1_HolidayExp-Jolly_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_3CRD1_HolidayExp-Jolly_DT"),
                },
                alt: "Dog",
            },
            {
                title: "Cat",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/cat-shop/crunchy-treats+dental-treats+soft-treats+treats/?origin=holiday&desc=cat&type=treatschews#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_3CRD2_HolidayExp-Jolly_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_3CRD2_HolidayExp-Jolly_DT"),
                },
                alt: "Cat",
            },
            {
                title: "Small Pet",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/small-pet-shop/toys-and-habitat-accessories/?origin=holiday&desc=smallpet&type=treatschews#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_3CRD3_HolidayExp-Jolly_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_3CRD3_HolidayExp-Jolly_DT"),
                },
                alt: "Small Pet",
            },
        ],
    },
    { // Second Banner
        containerName: "PromoBanner",
        title: "Build A Festive Tank",
        href: "/build-your-tank-ca.html?origin=holiday&desc=byt&type=banner",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-BYT_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-BYT_DT"),
        },
        ctaText: "Start now",
        alt: "Build a Festive Tank",
        isInverted: true,
    },
    {
        // Share the Holiday Fun - 1-2-4up
        containerName: "featuredTilesGrid",
        title: "Share the Holiday Fun",
        subTitle: "We'll help you keep the season warm, merry, & delicious.",
        showAllText: "",
        showAllLink: "",
        variant: "1-2-4up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Cozy Home Essentials",
                subTitle: "Sleep in heavenly fleece.",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/beds+food-and-water-bowls+gifts+scratchers+storage-and-scoops/?origin=holiday&desc=home&type=holidayfun#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD1_HolidayExp-Fun_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD1_HolidayExp-Fun_DT"),
                },
                alt: "Cozy Home Essentials",
            },
            {
                title: "Festive Clothing",
                subTitle: "Stay chic all season long.",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/bandanas-bows-and-hats+clothing-and-accessories+costumes+dresses+sweaters-and-coats+sweatshirts+t-shirts-and-tank-tops/?origin=holiday&desc=clothing&type=holidayfun#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD2_HolidayExp-Fun_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD2_HolidayExp-Fun_DT"),
                },
                alt: "Festive Clothing",
            },
            {
                title: "Merry Toys",
                subTitle: "Ready for stockings & under the tree.",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/toys+toys-and-habitat-accessories/?origin=holiday&desc=toys&type=holidayfun#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD3_HolidayExp-Fun_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD3_HolidayExp-Fun_DT"),
                },
                alt: "Merry Toys",
            },
            {
                title: "Holiday Bakery",
                subTitle: "Their fave flavors of the season.",
                readMoreText: "",
                readMoreLink: "/featured-shops/holiday/biscuits-and-bakery/?origin=holiday&desc=baking&type=holidayfun#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD4_HolidayExp-Fun_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD4_HolidayExp-Fun_DT"),
                },
                alt: "Holiday Bakery",
            },
        ],
    },
    { // Chance & friends
        containerName: "ExclusiveOffer",
        title: "Chance & Friends",
        shopLink: "/featured-shops/holiday/chance-and-friends/?origin=home&desc=chance&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: { // promo card
                imgContent: imagelink("WEB-1509151-Nov22_PRD-C_HolidayExp-Chance_MO"),
                promoTitle: "Chance & Friends Only $5",
                promoCopy: "$1 donation to PetSmart Charities® for every Chance & Friends plush purchase",
                promoAlt: "Chance & Friends only $5",
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_PRD-C_HolidayExp-Chance_DT"),
                },
            },
            skuList: "(5328755,5328665,5328666,5328667,5328668,5328669,5328670)", // comma without space between skus
        },

    },
    { // Teritiary Banner
        containerName: "PromoBanner",
        title: "New Afterpay customers save $10 on $50+ (discount at Afterpay checkout)**",
        href: "/help/payment-afterpay-H0004g.html?origin=holiday&desc=afterpay&type=banner",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO-SB_HolidayExp-Afterpay_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO-SB_HolidayExp-Afterpay_DT"),
        },
        ctaText: "Learn more",
        alt: "Afterpay",
        size: 'sm',
        isInverted: true,
    },
    {
        // Treats members get more - 1-2up
        containerName: "featuredTilesGrid",
        title: "Treats Members Get More",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "1-2up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "2X Treats points on Merry & Bright holiday gear",
                subTitle: "Sign in & activate 2X points on Merry & Bright holiday gear.",
                readMoreText: "",
                readMoreLink: "/account/treats-offers/?origin=holiday&desc=merryandbright&type=treats",
                imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC1_HolidayExp-Treats_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC1_HolidayExp-Treats_DT"),
                },
                alt: "2X Treats points on Merry & Bright holiday gear",
            },
            {
                title: "Get 1,000 Treats points!",
                subTitle: "Msg & Data Rates May Apply; Consent Not Required for Purchase, See Terms Below.",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC2_HolidayExp-Treats_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC2_HolidayExp-Treats_DT"),
                },
                alt: "Text JOY to 704704 to sign up to receive recurring automated marketing offers by text.",
            },
        ],
    },
    {
        // Stocking Stuffers
        containerName: "ProductCarousel",
        title: "Stocking Stuffers",
        shopLink: "",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5332762,5332335,5332292,5332757,5330207,5331961,5322120,5332833,5332336,5332506,5332759,5332337,5332758,5322007,5332273,5332761,5332274,5332755)", // comma without space between skus
        },
    },
    // { // Final Banner
    //     containerName: "PromoBanner",
    //     title: "FREE Santa Photo Days with your pet are back!",
    //     href: "/2022-photos-with-santa.html/?origin=holiday&desc=santaphoto&type=banner",
    //     imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-Santa_MO"),
    //     desktop: {
    //         imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-Santa_DT"),
    //     },
    //     ctaText: "Book now",
    //     alt: "FREE Santa Photo Days with your pet are back!",
    //     isInverted: true,
    // },
    {
        // Services / Charities - 1-2up
        containerName: "featuredTilesGrid",
        title: "Services & Charities",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "1-2up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Holiday Special",
                subTitle: "Add to your Salon or Hotel visit & get coupons with $200+ in savings!",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.com/grooming/?origin=holiday&desc=salon&type=services",
                imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC1_HolidayExp-SERV_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC1_HolidayExp-SERV_DT"),
                },
                alt: "Add holiday special to Salon or Hotel visit",
            },
            {
                title: "Give More Than Gifts",
                subTitle: "Donate to help pets in need.",
                readMoreText: "",
                readMoreLink: "https://www.petsmartcharities.org/donate/?origin=holiday&desc=donate&type=charities",
                imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC2_HolidayExp-SERV_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC2_HolidayExp-SERV_DT"),
                },
                alt: "",
            },
        ],
    },

];

export default dataContainer;