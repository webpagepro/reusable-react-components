// DPT-3782 - CA Holiday Bug 11.01 - 12.26 - lu: 10.31.2022-JC
/*
 Structure of Holiday 2022 landing page data
 data_container
    |
    |---- 1. Feature Banner (split-panel, image right)
    |
    |---- 2. Tile- 6up
    |       |
    |       |---- 1. tileSections
    |
    |---- 3. Promo Banner, medium
    |
    |---- 4. Card - 1-2-4up
    |       |
    |       |---- 1. tileSections
    |
    |---- 5. Product Carousel
    |
    |---- 6. Card - 1-3up
    |       |
    |       |---- 1. tileSections
    |
    |---- 7. Promo Banner, medium
    |
    |---- 8. Card - 1-2-4up
    |       |
    |       |---- 1. tileSections
    |
    |---- 9. Product carousel
    |
    |---- 10. Promo Banner, small
    |
    |---- 11. Card - 1-2up
    |       |
    |       |---- 1. tileSections
    |
    |---- 12. Promo Banner, medium (After specific date)
    |
    |---- 13. Card - 1-2up
    |       |
    |       |---- 1. tileSections
    |

*/
/* eslint-disable no-mixed-spaces-and-tabs */

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    { // Promo Banner Large
        containerName: "promoBannerLarge",
        title: "Share the Joy & Save",
        subTitle: "Deals you'll love. Gifts they'll love.",
        href: "",
        size: "lg",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO-LB_HolidayExp_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO-LB_HolidayExp_DT"),
        },
        ctaText: "",
        alt: "Deals you'll love. Gifts they'll love.",
        isInverted: true,
    },
    { // Shop by pet
        containerName: "CategoryRow",
        title: "Shop by Pet",
        shouldCallApi: false,
        displaySettings: {
            desktop: 5,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: [
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC1_HolidayExp-Dog_DT"),
                alt: "Dog",
                title: "Dog",
                link: "/featured-shops/holiday/dog-shop/?origin=holiday&type=shopbypet&desc=dog"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC2_HolidayExp-Cat_DT"),
                alt: "Cat",
                title: "Cat",
                link: "/featured-shops/holiday/cat-shop/?origin=holiday&type=shopbypet&desc=cat"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC3_HolidayExp-Fish_DT"),
                alt: "Fish",
                title: "Fish",
                link: "/featured-shops/holiday/fish-shop/?origin=holiday&type=shopbypet&desc=fish"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC4_HolidayExp-Rep_DT"),
                alt: "Reptile",
                title: "Reptile",
                link: "/featured-shops/holiday/reptile-shop/?origin=holiday&type=shopbypet&desc=reptile"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC5_HolidayExp-SmPet_DT"),
                alt: "Small Pet",
                title: "Small Pet",
                link: "/featured-shops/holiday/small-pet-shop/?origin=holiday&type=shopbypet&desc=smallpet"
            },

        ],

    },
    // { // Promo Banner Medium 11/1 - 11/24
    //     containerName: "PromoBanner",
    //     title: "Monthly deals",
    //     href: "/featured-shops/month-long-savings-with-treats-membership/?origin=holiday&type=deals&desc=monthlongnov",
    //     imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-MD_MO"),
    //     desktop: {
    //         imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-MD_DT"),
    //     },
    //     ctaText: "Shop now",
    //     alt: "Monthly deals",
    //     isInverted: true,
    // },
    // { // Promo Banner Medium 11/24 - 11/28
    //     containerName: "PromoBanner",
    //     title: "Don't miss out!",
    //     href: "/sale/black-friday/?origin=holiday&type=deals&desc=blackfriday",
    //     imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-BFD_MO"),
    //     desktop: {
    //         imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-BFD_DT"),
    //     },
    //     ctaText: "Shop now",
    //     alt: "Black Friday Deals",
    //     isInverted: true,
    // },
    // { // Promo Banner Medium 11/28 - 12/05
    //     containerName: "PromoBanner",
    //     title: "Don't miss out!",
    //     href: "/featured-shops/our-favourites/?origin=holiday&type=deals&desc=cyberweek1",
    //     imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-CWD_MO"),
    //     desktop: {
    //         imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-CWD_DT"),
    //     },
    //     ctaText: "Shop now",
    //     alt: "Cyber Week Deals",
    //     isInverted: true,
    // },
    { // Promo Banner Medium 12/05 - 12/26
        containerName: "PromoBanner",
        title: "Monthly deals",
        href: "/featured-shops/month-long-deals-with-treats-membership/?origin=holiday&type=deals&desc=monthlongdec",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-MD_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-MD_DT"),
        },
        ctaText: "Shop now",
        alt: "Monthly deals",
        isInverted: true,
    },
    { // 4up cards
        containerName: "GridDisplay",
        variant: "1-2-4up",
        title: "Great Gifts for Your Pet",
        description: "Stuff their stockings with delightful surprises.",
        // shopLink: "#",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-1A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-1A_HolidayExp-Gifts_DT"),
                },
                alt: "Toys under $10.99",
                title: "Toys under $10.99",
                link: "/featured-shops/holiday/toys+toys-and-habitat-accessories/?pmin=0.00&pmax=10.99&origin=holiday&type=shopbyprice&desc=toys#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-2A_HolidayExp-Gifts-CAN_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-2A_HolidayExp-Gifts-CAN_DT"),
                },
                alt: "Treats under $10.99",
                title: "Treats under $10.99",
                link: "/featured-shops/holiday/biscuits-and-bakery+bones-and-rawhide+chewy-treats+dental-treats+training-treats+treats/?pmin=0.00&pmax=10.99&origin=holiday&type=shopbyprice&desc=treats#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-3A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-3A_HolidayExp-Gifts_DT"),
                },
                alt: "Décor from $10.99 ",
                title: "Décor from $10.99 ",
                link: "/featured-shops/holiday/accessories+background+ornaments/?pmin=10.99&srule=best-sellers&prefn1=customPet&prefv1=Fish%7CReptile&?origin=holiday&type=shopbyprice&desc=ornaments#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_4CRD-4A_HolidayExp-Gifts_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD-4A_HolidayExp-Gifts_DT"),
                },
                alt: "More gifts under $10.99",
                title: "More gifts under $10.99",
                link: "/featured-shops/holiday/accessories+bandanas-bows-and-hats+colognes-and-deodorant+gifts+shampoo-and-conditioner+shoes-and-socks+waste-disposal/?pmin=0.00&pmax=10.99&origin=holiday&type=shopbyprice&desc=goodies#tabs-1",
                alignText: 'left',
            },
        ],
    },
    { // Product Carousel
        containerName: "ProductCarousel",
        title: "Advent Calendars",
        shopLink: "/featured-shops/holiday/?pmin=0.01&prefn1=customSeries&prefv1=Holiday%20Advent%20Calendars&srule=best-sellers&?origin=holiday&type=carousel&desc=advent#tabs-1",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5331884,5334014,5332922,5331810,5333586,5332921,5333453,5332291,5332597)", // comma without space between skus
        },
    },
    { //3up cards
        containerName: "GridDisplay",
        variant: "1-3up",
        title: "Jolly Treats & Chews",
        description: "A taste of the holidays for every pet!",
        shopLink: "",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1509151-Nov22_3CRD1_HolidayExp-Jolly-CAN_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_3CRD1_HolidayExp-Jolly-CAN_DT"),
                },
                alt: "Dog",
                title: "Dog",
                link: "/featured-shops/holiday/dog-shop/biscuits-and-bakery+bones-and-rawhide+chewy-treats+dental-treats+jerky+training-treats+treats/?origin=holiday&type=treatsandchews&desc=dog#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_3CRD2_HolidayExp-Jolly-CAN_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_3CRD2_HolidayExp-Jolly-CAN_DT"),
                },
                alt: "Cat",
                title: "Cat",
                link: "/featured-shops/holiday/cat-shop/treats/?origin=holiday&type=treatsandchews&desc=cat#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_3CRD3_HolidayExp-Jolly_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_3CRD3_HolidayExp-Jolly_DT"),
                },
                alt: "Small Pet",
                title: "Small Pet",
                link: "/featured-shops/holiday/toys-and-habitat-accessories/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&?origin=holiday&type=treatesandchews&desc=smallpet#tabs-1",
                alignText: 'left',
            },
        ],
    },
    { // Promo Banner Medium
        containerName: "PromoBanner",
        title: "Build A Festive Tank",
        href: "/build-your-tank-ca.html?origin=holiday&type=banner&desc=byt",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-BYT_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-BYT_DT"),
        },
        ctaText: "Start now",
        alt: "Build a Festive Tank",
        isInverted: true,
    },
    {// 4up cards with subtext
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
                readMoreLink: "/featured-shops/holiday/beds+food-and-water-bowls+gifts+scratchers+storage-and-scoops/?origin=holiday&type=holidayfun&desc=forthehome#tabs-1",
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
                readMoreLink: "/featured-shops/holiday/bandanas-bows-and-hats+costumes+dresses+sweaters-and-coats+t-shirts-and-tank-tops/?origin=holiday&type=holidayfun&desc=clothing#tabs-1",
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
                readMoreLink: "/featured-shops/holiday/toys+toys-and-habitat-accessories/?origin=holiday&type=holidayfun&desc=toys#tabs-1",
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
                readMoreLink: "/featured-shops/holiday/biscuits-and-bakery/?origin=holiday&type=holidayfun&desc=bakedgoods#tabs-1",
                imgContent: imagelink("WEB-1509151-Nov22_4CRD4_HolidayExp-Fun-CAN_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_4CRD4_HolidayExp-Fun-CAN_DT"),
                },
                alt: "Holiday Bakery",
            },
        ],
    },
    { // Exclusive Offer
        containerName: "ExclusiveOffer",
        title: "Chance & Friends",
        shopLink: "/featured-shops/holiday/chance-and-friends/?origin=holiday&type=carousel&desc=chance",
        ctaText: "Shop now",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1509151-Nov22_PRD-C_HolidayExp-Chance-CAN_MO"),
                promoTitle: "Chance & Friends Only $5",
                promoCopy: "$1 donation to PetSmart Charities® for every Chance & Friends plush purchase",
                promoAlt: "Chance & Friends only $5",
                desktop: { imgContent: imagelink("WEB-1509151-Nov22_PRD-C_HolidayExp-Chance-CAN_DT") },
            },
            skuList: "(5328755,5328666,5328667,5328668,5328669,5328670)",
        },
    },
    { // Promo Banner Small
        containerName: "PromoBanner",
        title: "Gift now. Pay later.",
        href: "/help/payment-afterpay-H0004g.html?origin=holiday&type=banner&desc=afterpay",
        imgContent: imagelink("WEB-1509151-Nov22_PROMO-SB_HolidayExp-Afterpay_MO"),
        desktop: {
            imgContent: imagelink("WEB-1509151-Nov22_PROMO-SB_HolidayExp-Afterpay_DT"),
        },
        ctaText: "Learn more",
        alt: "Afterpay",
        size: 'sm',
        isInverted: true,
    },
    {// 2up cards
        containerName: "featuredTilesGrid",
        title: "Treats Members Get More",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "2up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "2X Treats points on Merry & Bright holiday gear",
                subTitle: "Sign in & activate 2X points on Merry & Bright holiday gear.",
                readMoreText: "",
                readMoreLink: "/account/?origin=holiday&type=treats&desc=merryandbright",
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
    // { // Promo Banner Medium 12/05 - 12/19
    //     containerName: "PromoBanner",
    //     title: "FREE Santa Photo Days with your pet are back!",
    //     href: "/2022-photos-with-santa.html/?origin=holiday&type=banner&desc=santa",
    //     imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-Santa_MO"),
    //     desktop: {
    //         imgContent: imagelink("WEB-1509151-Nov22_PROMO_MB_HolidayExp-Santa_DT"),
    //     },
    //     ctaText: "Book now",
    //     alt: "FREE Santa Photo Days with your pet are back!",
    //     isInverted: true,
    // },
    {// 2up cards
        containerName: "featuredTilesGrid",
        title: "Services & Charities",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "2up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Holiday Special",
                subTitle: "Add to your Salon or Hotel visit & get coupons with $200+ in savings!",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/grooming/?origin=holiday&type=services&desc=salon",
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
                readMoreLink: "https://www.canadahelps.org/en/dn/56305?origin=holiday&type=charities&desc=donate",
                imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC2_HolidayExp-SERV_CA_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1509151-Nov22_2CRD-SC2_HolidayExp-SERV_CA_DT"),
                },
                alt: "Headline",
            },
        ],
    },
];

export default data_container;