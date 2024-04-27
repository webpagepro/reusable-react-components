// DPT-3792 - US December 2022 Cat Health & Wellness Landing Page Update - lu: 11.29.2022.MS
/*
 Structure of Pet landing page data
 data_container
    |
    |---- 1. Sections
            | 
            |---- 1. Header banner 
            |
            |---- 2. 6 tile, [variant] (Vitamins and Supplements)
            |
            |---- 3. Card - 2up, [variant] (stacked large?)
            |       |
            |       |---- 1. tileSections
            |
            |---- 4. Promo Banner - [small] (Promo/JBP)
            |
            |---- 5. Card - 6 tile up, [variant 2 rows stacked] (Health & Wellness)
            |       |
            |       |---- 1. tileSections
            |
            |---- 6. Product Carousel, [variant] (Favorites/Products Under $XX)
            |
            |---- 8. 6 tile, [variant] (Shop Top Brands)
            |
            |---- 3. Card - 4up, [variant] (Services)
            |       |
            |       |---- 1. tileSections
            |
            |---- 11. Card - 3up, [article] (Learning Center)
            |       |
            |       |---- 1. tileSections
*/
/* eslint-disable no-mixed-spaces-and-tabs */
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    { // HERO BANNER
        containerName: "heroBanner",
        title: "Health & Wellness Shop",
        description: "Anything for your cat's well-being",
        isInverted: true,
        backgroundColor: "",
        alt: "Anything for your cat's well-being",
        imageInfo: {
            url: imagelink("WEB-1474709-Aug22_MP-HB_HNW-Dog_MO"),// imagelink(""),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1474709-Aug22_MP-HB_HNW-Cat_DT"), // imagelink(""),
            },
        }
    },
    { // VITAMINS & SUPPLEMENTS
        containerName: "CategoryRow",
        title: "Shop Vitamins & Supplements",
        shouldCallApi: false,
        itemsPerView: 6,
        shopLink: "/cat/vitamins-and-supplements/?origin=hw-shop&desc=visualnav&type=shop-all",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Cat_DT"),
                alt: "Hip Joint",
                title: "Hip & Joint",
                link: "/cat/vitamins-and-supplements/hip-and-joint/?origin=hw-shop&desc=visualnav&type=vs-card1",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Cat_DT"),
                alt: "Probiotic and digestive",
                title: "Probiotic & Digestive",
                link: "/cat/vitamins-and-supplements/probiotic-and-digestive/?origin=hw-shop&desc=visualnav&type=vs-card2",


            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Cat_DT"),
                alt: "Stress and calming",
                title: "Stress & Calming",
                link: "/cat/vitamins-and-supplements/anxiety-and-calming/?origin=hw-shop&desc=visualnav&type=vs-card3",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Cat_DT"),
                alt: "Skin and coat",
                title: "Skin & Coat",
                link: "/cat/vitamins-and-supplements/skin-and-coat/?origin=hw-shop&desc=visualnav&type=vs-card4",


            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Cat_DT"),
                alt: "Immune system and allergy",
                title: "Immune Support & Allergies",
                link: "/cat/vitamins-and-supplements/immune-system-and-allergy/?origin=hw-shop&desc=visualnav&type=vs-card5",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Cat_DT"),
                alt: "Urinary and kidney",
                title: "Urinary & Kidney",
                link: "/cat/vitamins-and-supplements/urinary-and-kidney/?origin=hw-shop&desc=visualnav&type=vs-card6",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Cat_DT"),
                alt: "Hairball control",
                title: "Hairball Control",
                link: "/cat/vitamins-and-supplements/hairball-control/?origin=hw-shop&desc=visualnav&type=vs-card7",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Cat_DT"),
                alt: "Multivitamins",
                title: "Multivitamins",
                link: "/cat/vitamins-and-supplements/multivitamins/?origin=hw-shop&desc=visualnav&type=vs-card8",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Cat_DT"),
                alt: "Dietary supplements",
                title: "Dietary Supplements",
                link: "/cat/vitamins-and-supplements/dietary-supplements/?origin=hw-shop&desc=visualnav&type=vs-card9",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-10_HNW-Cat_DT"),
                alt: "Eye care",
                title: "Eye Care",
                link: "/cat/vitamins-and-supplements/eye-care/?origin=hw-shop&desc=visualnav&type=vs-card10",

            },

        ],

    },
    { //FEATURED CARDS - 2-4 up grid display of promocard
        containerName: "featuredTilesGrid",
        title: "",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "2up",
        // textAlign: "center",
        contentAlign: "left",
        tileSections: [
            {
                title: "Cat Stress & Calming Care",
                subTitle: "Bring calmness & relaxation during holiday festivities",
                readMoreText: "",
                readMoreLink: "/cat/health-and-wellness/anxiety-and-calming-care/?origin=landingpage&category=cat-hnw&type=2card1",
                imgContent: imagelink("WEB-1502500-Oct22_2COL1_HNW2-Dog_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1502500-Oct22_2COL1_HNW2-Dog_DT"),
                },
                alt: "Shop cat stress & calming care to bring calmness & relaxation during holiday festivities",


            },
            {
                title: "Earn 6X Treats points",
                subTitle: "on pharmacy orders, terms apply",
                readMoreText: "",
                readMoreLink: "/pharmacy/cat/?origin=hw-shop&desc=2-up&type=card2",
                imgContent: imagelink("WEB-1474709-Aug22_2COL-2_HNW-Dog_DT"),
                alt: "Shop pharmacy",
            },
        ],
    },
    { 
        containerName: "PromoBanner",
        size:'sm',
        className: "health-wellness",
        title: "Save up to 10% on select flea & tick prevention thru 12/27, terms apply",
        href: "/cat/flea-and-tick/?pmin=0.01&prefn1=customMoreWaystoShop&prefv1=Sale&srule=best-sellers&origin=hw-shop#tabs-1",
        imgContent: imagelink("WEB-1553753-Dec22_PROMO-SB2_HNW-Cat_MO"),
        desktop: {
            imgContent: imagelink("WEB-1553753-Dec22_PROMO-SB2_HNW-Cat_DT"),
        },
        ctaText: "Shop now",
        alt: "Save up to 10% on select flea & tick prevention thru 12/27, terms apply",
        isInverted: true,
    },
    { // SHOP HEALTH & WELLNESS
        containerName: "GridDisplay",
        variant: "3-6up",
        title: "Shop Health & Wellness",
        shouldCallApi: false,
        showShopAll: true,
        shopLink:"/cat/health-and-wellness/?origin=hw-shop&desc=visualnav&type=hw-shop-all",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Cat-Shop_DT"),
                alt: "Dental and breath care",
                title: "Dental & Breath Care",
                link: "/cat/health-and-wellness/dental-and-breath-care/?origin=hw-shop&desc=visualnav&type=hw-card-1",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Cat-Shop_DT"),
                alt: "Pill administration",
                title: "Pill Administration",
                link: "/cat/health-and-wellness/pill-administration/?origin=hw-shop&desc=visualnav&type=hw-card-2"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Cat-Shop_DT"),
                alt: "First aid and recovery",
                title: "First Aid",
                link: "/cat/health-and-wellness/first-aid-and-recovery/?origin=hw-shop&desc=visualnav&type=hw-card-3"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Cat-Shop_DT"),
                alt: "Stress and calming care",
                title: "Stress & Calming Care",
                link: "/cat/health-and-wellness/anxiety-and-calming-care/?origin=hw-shop&desc=visualnav&type=hw-card-4"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Cat-Shop_DT"),
                alt: "Dewormers",
                title: "Dewormers",
                link: "/cat/health-and-wellness/dewormers/?origin=hw-shop&desc=visualnav&type=hw-card-5"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Cat-Shop_DT"),
                alt: "Diarrhea and digestion relief",
                title: "Diarrhea & Digestion Care",
                link: "/cat/health-and-wellness/diarrhea-and-digestion-relief/?origin=hw-shop&desc=visualnav&type=hw-card-6"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Cat-Shop_DT"),
                alt: "Ear and eye care",
                title: "Ear & Eye Care",
                link: "/cat/health-and-wellness/ear-and-eye-care/?origin=hw-shop&desc=visualnav&type=hw-card-7"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Cat-Shop_DT"),
                alt: "Hot spot and itch relief",
                title: "Hot Spots & Itch Relief",
                link: "/cat/health-and-wellness/hot-spot-and-itch-relief/?origin=hw-shop&desc=visualnav&type=hw-card-8"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Cat-Shop_DT"),
                alt: "Milk replacers and nursing kits",
                title: "Milk Replacers & Nursing Kits",
                link: "/cat/health-and-wellness/milk-replacers-and-nursing-kits/?origin=hw-shop&desc=visualnav&type=hw-card-9"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-10_HNW-Cat-Shop_DT"),
                alt: "Flea and tick",
                title: "Flea & Tick",
                link: "/cat/flea-and-tick/?origin=hw-shop&desc=visualnav&type=hw-card-10"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-11_HNW-Cat-Shop_DT"),
                alt: "Specialized nutrition",
                title: "Specialized Nutrition",
                link: "/cat/food-and-treats/?pmin=0.01&prefn1=customFoodCategory&prefv1=Specialized%20Nutrition&origin=hw-shop/"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-12_HNW-Cat-Shop_DT"),
                alt: "Veterinary diet",
                title: "Veterinary Diet",
                link: "/cat/food-and-treats/veterinary-diets/?origin=hw-shop&desc=visualnav&type=hw-card-12"
            },
        ],
    },
    { // PET PARENT FAVORITES - Product Carousel
        containerName: "ProductCarousel",
        title: "Pet Parent Favorites",
        shopLink: "/cat/health-and-wellness/?origin=hw-shop&desc=product-carousel&type=shop-all",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5269889,5314041,5266168,5223998,5102586,5321208,5299250,5305588)", // comma without space between skus
        },
    },
    { // SHOP TOP BRANDS -
        containerName: "CategoryRow",
        title: "Shop Top Brands",
        shouldCallApi: false,
        showShopAll: true,
        shopLink: "/cat/health-and-wellness/?origin=hw-shop&desc=brandvisualnav&type=shop-all",
        itemsPerView: 6,
        // shopLink: "https://www.petsmart.com/",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Cat-Brand_DT"),
                alt: "FELIWAY®",
                title: "FELIWAY®",
                link: "/cat/health-and-wellness/feliway/?origin=hw-shop&desc=brandvisualnav&type=feliway",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Cat-Brand_DT"),
                alt: "Cat MX®",
                title: "Cat MX®",
                link: "/cat/health-and-wellness/cat-mx/?origin=hw-shop&desc=brandvisualnav&type=catmx",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Cat-Brand_DT"),
                alt: "PetAg®",
                title: "PetAg®",
                link: "/cat/health-and-wellness/petag/?origin=hw-shop&desc=brandvisualnav&type=petag",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Dog-Brand_DT"),
                alt: "Only Natural Pet",
                title: "Only Natural Pet",
                link: "/cat/vitamins-and-supplements/only-natural-pet/?origin=hw-shop&desc=brandvisualnav&type=onp",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Dog-Brand_DT"),
                alt: "Purina® Pro Plan®",
                title: "Purina Pro Plan",
                link: "/cat/vitamins-and-supplements/purina-pro-plan/?origin=hw-shop&desc=brandvisualnav&type=purinaproplan",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Dog-Brand_DT"),
                alt: "Cosequin® Nutramax",
                title: "Cosequin® Nutramax",
                link: "/cat/vitamins-and-supplements/nutramax-laboratories/?origin=hw-shop&desc=brandvisualnav&type=nutramax",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Dog-Brand_DT"),
                alt: "GREENIES™",
                title: "GREENIES™",
                link: "/cat/health-and-wellness/greenies/?origin=hw-shop&desc=brandvisualnav&type=greenies",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Dog-Brand_DT"),
                alt: "Zesty Paws®",
                title: "Zesty Paws®",
                link: "/cat/vitamins-and-supplements/zesty-paws/?origin=hw-shop&desc=brandvisualnav&type=zestypaws",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Cat-Brand_DT"),
                alt: "Vet Worthy®",
                title: "Vet Worthy®",
                link: "/cat/vitamins-and-supplements/vet-worthy/?origin=hw-shop&desc=brandvisualnav&type=vet-worthy",
            },
        ],
    },
    // { // SERVICES
    //     containerName: "Favorites",
    //     title: "Services",
    //     shouldCallApi: false,
    //     // shopLink: "https://www.petsmart.com/",
    //     tileSections: [
    //         {
    //             imgContent: imagelink("WEB-1323800-May22_HP-CAT1_GRM_DT"),
    //             alt: "Grooming Salon",
    //             title: "Grooming Salon",
    //             // description: "Grooming Salon",
    //             link: "https://services.petsmart.ca/grooming/?origin=home&desc=grooming&type=services"

    //         },
    //         {
    //             imgContent: imagelink("WEB-1323800-May22_HP-CAT2_PetsHotel_DT"),
    //             alt: "PetsHotel",
    //             title: "PetsHotel",
    //             // description: "PetsHotel",
    //             link: "https://services.petsmart.ca/petshotel/?origin=home&desc=petshotel&type=services"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1323800-May22_HP-CAT3_DDC_DT"),
    //             alt: "Doggie Day Camp",
    //             title: "Doggie Day Camp",
    //             // description: "Doggie Day Camp",
    //             link: "https://services.petsmart.ca/doggie-day-camp/?origin=home&desc=ddc&type=services"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1323800-May22_HP-CAT4_Training_DT"),
    //             alt: "Dog Training",
    //             title: "Dog Training",
    //             // description: "Dog Training",
    //             link: "https://services.petsmart.ca/training/?origin=home&desc=training&type=services"
    //         },
    //     ],
    // },
    { // LEARNING CENTER - PromoCardScroll/Card 3up - Article
        containerName: "PromoCardScroll",
        title: "Pet Parent Resources",
        desc: "",
        displayLink: true,
        truncateLines: 2,
        linkLabel: "Read more",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_3COL-LA1_HNW-Cat-Learn_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1474709-Aug22_3COL-LA1_HNW-Cat-Learn_DT"),
                },
                alt: "Close up of cat sitting",
                title: "How to Keep Your Cat Healthy",
                desc: "Five cat health and care tips from Banfield Pet Hospital. Feed your cat a nutritious diet. Nourish your cat with high-quality protein sources, found in most premium pet foods.",
                link: "/learning-center/cat-care/how-to-keep-your-cat-healthy/A0213.html"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_3COL-LA2_HNW-Cat-Learn_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1474709-Aug22_3COL-LA2_HNW-Cat-Learn_DT"),
                },
                alt: "Close up of cat with mouth open",
                title: "The Lowdown on Your Cat's Dental Health",
                desc: "Dental care actually helps overall well-being. Keep kitty’s choppers in top shape. Dental problems in cats begin with plaque, the bacterial film that builds up on teeth.",
                link: "/learning-center/cat-care/brushing-up-the-lowdown-on-your-cats-dental-health/A0041.html"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_3COL-LA3_HNW-Cat-Learn_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1474709-Aug22_3COL-LA3_HNW-Cat-Learn_DT"),
                },
                alt: "Cat being brushed",
                title: "How to Deal with Your Cat’s Hairballs",
                desc: "What causes hairballs? It’s no surprise that cats get hairballs like it’s part of their job. Cats are way into grooming — they spend up to half of their waking hours doing it.",
                link: "/learning-center/cat-care/how-to-deal-with-your-cats-hairballs/A0232.html?fdid=cat"
            },
        ],
    },
]
export default data_container;