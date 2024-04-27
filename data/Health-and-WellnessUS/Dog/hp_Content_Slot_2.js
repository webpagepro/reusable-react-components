// DPT-3793 - December 2022 Dog Health & Wellness Landing Page Update - lu: 11.29.2022.MS
/*
 Structure of Pet landing page data
 data_container
    |
    |---- 1. Sections
            | 
            |---- 1. Header banner (split-panel, video right)
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
        description: "Anything for your dog's well-being",
        isInverted: true,
        backgroundColor: "",
        alt: "Anything for your dog's well-being",
        imageInfo: {
            url: imagelink("WEB-1474709-Aug22_MP-HB_HNW-Dog_MO"),// imagelink(""),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1474709-Aug22_MP-HB_HNW-Dog_DT"), // imagelink(""),
            },
        }
    },
    { // VITAMINS & SUPPLEMENTS
        containerName: "CategoryRow",
        title: "Shop Vitamins & Supplements",
        shouldCallApi: false,
        itemsPerView: 6,
        shopLink: "/dog/vitamins-and-supplements/?origin=hw-shop&desc=visualnav&type=vs-shop-all",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Dog-Vitamins_DT"),
                alt: "Hip and Joint",
                title: "Hip & Joint",
                link: "/dog/vitamins-and-supplements/hip-and-joint/?origin=hw-shop&desc=visualnav&type=vs-card1",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Dog-Vitamins_DT"),
                alt: "Probiotic and digestive",
                title: "Probiotic & Digestive",
                link: "/dog/vitamins-and-supplements/probiotic-and-digestive/?origin=hw-shop&desc=visualnav&type=vs-card2",


            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Dog-Vitamins_DT"),
                alt: "Stress and calming",
                title: "Stress & Calming",
                link: "/dog/vitamins-and-supplements/anxiety-and-calming/?origin=hw-shop&desc=visualnav&type=vs-card3",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Dog-Vitamins_DT"),
                alt: "Skin and coat",
                title: "Skin & Coat",
                link: "/dog/vitamins-and-supplements/skin-and-coat/?origin=hw-shop&desc=visualnav&type=vs-card4",


            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Dog-Vitamins_DT"),
                alt: "Immune system and allergy",
                title: "Immune Support & Allergies",
                link: "/dog/vitamins-and-supplements/immune-system-and-allergy/?origin=hw-shop&desc=visualnav&type=vs-card5",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Dog-Vitamins_DT"),
                alt: "Urinary and kidney",
                title: "Urinary & Kidney",
                link: "/dog/vitamins-and-supplements/urinary-and-kidney/?origin=hw-shop&desc=visualnav&type=vs-card6",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Dog-Vitamins_DT"),
                alt: "Multivitamins",
                title: "Multivitamins",
                link: "/dog/vitamins-and-supplements/multivitamins/?origin=hw-shop&desc=visualnav&type=vs-card7",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Dog-Vitamins_DT"),
                alt: "Dietary supplements",
                title: "Dietary Supplements",
                link: "/dog/vitamins-and-supplements/dietary-supplements/?origin=hw-shop&desc=visualnav&type=vs-card8",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Dog-Vitamins_DT"),
                alt: "Eye care",
                title: "Eye Care",
                link: "/dog/vitamins-and-supplements/eye-care/?origin=hw-shop&desc=visualnav&type=vs-card9",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-10_HNW-Dog-Vitamins_DT"),
                alt: "Stool eating deterrent",
                title: "Stool Eating Deterrent",
                link: "/dog/vitamins-and-supplements/stool-eating-deterrent/?origin=hw-shop&desc=visualnav&type=vs-card10",

            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-11_HNW-Dog-Vitamins_DT"),
                alt: "Heart and liver",
                title: "Heart & Liver",
                link: "/dog/vitamins-and-supplements/heart-and-liver/?origin=hw-shop&desc=visualnav&type=vs-card11",

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
                title: "Dog Stress & Calming Care",
                subTitle: "Bring calmness & relaxation during holiday festivities",
                readMoreText: "",
                readMoreLink: "/dog/health-and-wellness/anxiety-and-calming-care/?origin=landingpage&category=dog-hnw&type=2card1",
                imgContent: imagelink("WEB-1502500-Oct22_2COL1_HNW2-Dog_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1502500-Oct22_2COL1_HNW2-Dog_DT"),
                },
                alt: "Shop dog stress & calming care to bring calmness & relaxation during holiday festivities",


            },
            {
                title: "Earn 6X Treats points",
                subTitle: "on pharmacy orders, terms apply",
                readMoreText: "",
                readMoreLink: "/pharmacy/dog/?origin=hw-shop&desc=2-up&type=card2",
                imgContent: imagelink("WEB-1474709-Aug22_2COL-2_HNW-Dog_DT"),
                alt: "Shop pharmacy",
            },
        ],
    },
    { // SALE PROMO BANNER - promo banner small
        containerName: "PromoBanner",
        size: 'sm',
        className: "health-wellness",
        title: "Save up to 10% on select flea & tick prevention thru 12/27, terms apply",
        href: "/dog/flea-and-tick/?pmin=0.01&prefn1=customMoreWaystoShop&prefv1=Sale&srule=best-sellers&origin=hw-shop#tabs-1",
        imgContent: imagelink("WEB-1553753-Dec22_PROMO-SB2_HNW-Dog_MO"),
        desktop: {
            imgContent: imagelink("WEB-1553753-Dec22_PROMO-SB2_HNW-Dog_DT"),
        },
        ctaText: "Shop now",
        alt: "Save up to 10% on select dog & cat flea & tick prevention thru 12/27, terms apply",
        isInverted: true,
    },
    {
        // 10/3/2022 - 1/1/2023, Winter Wellness Essentials - Product Carousel - Storytelling (API CALL)
        containerName: "ExclusiveOffer",
        title: "Winter Wellness",
        // shopLink: "",
        shouldCallApi: true,
        isCarouselOnly: false,
        tileSections: {
            promoCard: { // promo card
                imgContent: imagelink("WEB-1502500-Oct22_PC-S_HNW2-Dog_MO"),
                promoAlt: "Winter Wellness Essentials",
                promoTitle: "Winter Wellness Essentials",
                // promoCopy: "",
                desktop: {
                    imgContent: imagelink("WEB-1502500-Oct22_PC-S_HNW2-Dog_DT"),
                },
            },
            skuList: "(5246658,5288464,5296091,5204791,5295634​,5296091​,5288029,5313994​,5307177,5298477,5130648,5295651)", // comma without space between skus
        },
    },
    { // SHOP HEALTH & WELLNESS
        containerName: "GridDisplay",
        variant: "3-6up",
        title: "Shop Health & Wellness",
        shouldCallApi: false,
        showShopAll: true,
        shopLink:"/dog/health-and-wellness/?origin=hw-shop&desc=visualnav&type=hw-shop-all",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Dog-Shop_DT"),
                alt: "Dental and breath care",
                title: "Dental & Breath Care",
                link: "/dog/health-and-wellness/dental-and-breath-care/?origin=hw-shop&desc=visualnav&type=hw-card-1",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Dog-Shop_DT"),
                alt: "Pill administration",
                title: "Pill Administration",
                link: "/dog/health-and-wellness/pill-administration/?origin=hw-shop&desc=visualnav&type=hw-card2"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Dog-Shop_DT"),
                alt: "First aid and recovery",
                title: "First Aid",
                link: "/dog/health-and-wellness/first-aid-and-recovery/?origin=hw-shop&desc=visualnav&type=hw-card3"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Dog-Shop_DT"),
                alt: "Stress and calming care",
                title: "Stress & Calming Care",
                link: "/dog/health-and-wellness/anxiety-and-calming-care/?origin=hw-shop&desc=visualnav&type=hw-card4"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Dog-Shop_DT"),
                alt: "Dewormers",
                title: "Dewormers",
                link: "/dog/health-and-wellness/dewormers/?origin=hw-shop&desc=visualnav&type=hw-card5"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Dog-Shop_DT"),
                alt: "Nose and paw care",
                title: "Nose & Paw Care",
                link: "/dog/health-and-wellness/nose-and-paw-care/?origin=hw-shop&desc=visualnav&type=hw-card6"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Dog-Shop_DT"),
                alt: "Ear and eye care",
                title: "Ear & Eye Care",
                link: "/dog/health-and-wellness/ear-and-eye-care/?origin=hw-shop&desc=visualnav&type=hw-card7"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Dog-Shop_DT"),
                alt: "Test kits",
                title: "Test Kits",
                link: "/dog/health-and-wellness/test-kits/?origin=hw-shop&desc=visualnav&type=hw-card8"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Dog-Shop_DT"),
                alt: "Milk replacers and nursing kits",
                title: "Milk Replacers & Nursing Kits",
                link: "/dog/health-and-wellness/milk-replacers-and-nursing-kits/?origin=hw-shop&desc=visualnav&type=hw-card9"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-10_HNW-Dog-Shop_DT"),
                alt: "Diarrhea and digestion relief",
                title: "Diarrhea & Digestion Care",
                link: "/dog/health-and-wellness/diarrhea-and-digestion-relief/?origin=hw-shop&desc=visualnav&type=hw-card10"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-11_HNW-Dog-Shop_DT"),
                alt: "Specialized nutrition",
                title: "Specialized Nutrition",
                link: "/dog/food/?pmin=0.01&prefn1=customFoodCategory&prefv1=Specialized%20Nutrition&origin=hw-shop/"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-12_HNW-Dog-Shop_DT"),
                alt: "Veterinary diets",
                title: "Veterinary Diets",
                link: "/dog/food/veterinary-diets/?origin=hw-shop&desc=visualnav&type=hw-card12"
            },
        ],
    },
    // { // evergreen, rever to this after 1/1/2023, PET PARENT FAVORITES - Product Carousel
    //     containerName: "ProductCarousel",
    //     title: "Pet Parent Favorites",
    //     shopLink: "/dog/health-and-wellness/?origin=hw-shop&desc=product-carousel&type=shop-all",
    //     shouldCallApi: true,
    //     isCarouselOnly: true,
    //     displaySettings: {
    //         desktop: 6,
    //         tablet: 3.5,
    //         mobile: 2.5
    //     },
    //     tileSections: {
    //         skuList: "(5271677,5296089,5322906,5212368,5303164,5301729,5319528,5261650)", // comma without space between skus
    //     },
    // },
    { // SHOP TOP BRANDS -
        containerName: "CategoryRow",
        title: "Shop Top Brands",
        shouldCallApi: false,
        showShopAll: true,
        shopLink: "/dog/health-and-wellness/?origin=hw-shop&desc=brandvisualnav&type=shop-all",
        itemsPerView: 6,
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Dog-Brand_DT"),
                alt: "Only Natural Pet",
                title: "Only Natural Pet",
                link: "/dog/vitamins-and-supplements/only-natural-pet/?origin=hw-shop&desc=brandvisualnav&type=onp",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Dog-Brand_DT"),
                alt: "Zesty Paws®",
                title: "Zesty Paws®",
                link: "/dog/vitamins-and-supplements/zesty-paws/?origin=hw-shop&desc=brandvisualnav&type=zestypaws",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Dog-Brand_DT"),
                alt: "Dog MX®",
                title: "Dog MX®",
                link: "/dog/health-and-wellness/dog-mx/?origin=hw-shop&desc=brandvisualnav&type=dogmx",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Dog-Brand_DT"),
                alt: "Cosequin® Nutramax",
                title: "Cosequin® Nutramax",
                link: "/dog/vitamins-and-supplements/nutramax-laboratories/?origin=hw-shop&desc=brandvisualnav&type=nutramax",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Dog-Brand_DT"),
                alt: "GREENIES™",
                title: "GREENIES™",
                link: "/dog/health-and-wellness/greenies/?origin=hw-shop&desc=brandvisualnav&type=greenies",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Dog-Brand_DT"),
                alt: "ThunderShirt®",
                title: "ThunderShirt®",
                link: "/dog/health-and-wellness/thundershirt/?origin=hw-shop&desc=brandvisualnav&type=thundershirt",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Dog-Brand_DT"),
                alt: "Purina® Pro Plan®",
                title: "Purina® Pro Plan®",
                link: "/dog/vitamins-and-supplements/purina-pro-plan/?origin=hw-shop&desc=brandvisualnav&type=purinaproplan",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Dog-Brand_DT"),
                alt: "Zymox®",
                title: "Zymox®",
                link: "/dog/health-and-wellness/zymox/?origin=hw-shop&desc=brandvisualnav&type=zymox",
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Dog-Brand_DT"),
                alt: "EverRoot™",
                title: "EverRoot™",
                link: "/dog/health-and-wellness/everroot/?origin=hw-shop&desc=brandvisualnav&type=everroot",
            },
        ],
    },
    { // SERVICES
        containerName: "Favorites",
        title: "Services",
        shouldCallApi: false,
        // shopLink: "https://www.petsmart.com/",
        tileSections: [
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT1_SERV-GRM_DT"),
                alt: "Grooming Salon",
                title: "Grooming Salon",
                // description: "Grooming Salon",
                link: "https://services.petsmart.com/grooming/?origin=hw-shop&desc=services&type=4card1"

            },
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT2_SERV-PSH_DT"),
                alt: "PetsHotel",
                title: "PetsHotel",
                // description: "PetsHotel",
                link: "https://services.petsmart.com/petshotel/?origin=hw-shop&desc=services&type=4card2"
            },
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT3_SERV-DDC_DT"),
                alt: "Doggie Day Camp",
                title: "Doggie Day Camp",
                // description: "Doggie Day Camp",
                link: "https://services.petsmart.com/doggie-day-camp/?origin=hw-shop&desc=services&type=4card3"
            },
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT4_SERV-TRN_DT"),
                alt: "Dog Training",
                title: "Dog Training",
                // description: "Dog Training",
                link: "https://services.petsmart.com/training/?origin=hw-shop&desc=services&type=4card4"
            },
        ],
    },
    { // LEARNING CENTER - PromoCardScroll/Card 3up - Article
        containerName: "PromoCardScroll",
        title: "Pet Parent Resources",
        desc: "",
        displayLink: true,
        truncateLines: 2,
        linkLabel: "Read more",
        tileSections: [
            {
                imgContent: imagelink("WEB-1474709-Aug22_3COL-LA1_HNW-Dog-Learn_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1474709-Aug22_3COL-LA1_HNW-Dog-Learn_DT"),
                },
                alt: "Close up of dog smiling",
                title: "Help Your Puppy With Separation Anxiety",
                desc: "Puppies need some time to understand that even though you sometimes leave them alone, you will always come back. It’s up to you as a pet parent to help them learn.",
                link: "/learning-center/dog-care/help-your-puppy-with-separation-anxiety/A0207.html/"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_3COL-LA2_HNW-Dog-Learn_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1474709-Aug22_3COL-LA2_HNW-Dog-Learn_DT"),
                },
                alt: "Dog outside in field",
                title: "Supporting Your Dog's Hip & Joint Health",
                desc: "As much as we want them to stay their spunky, playful selves, senior dogs can sometimes develop aches and pains caused by aging. Just like humans, our four legged friends’ bodies can deteriorate over time, leaving them with uncomfortable and often painful joints.",
                link: "/learning-center/dog-care/a-guide-to-supporting-your-dogs-hip-and-joint-health/A0148.html?fdid=dog/"
            },
            {
                imgContent: imagelink("WEB-1474709-Aug22_3COL-LA3_HNW-Dog-Learn_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1474709-Aug22_3COL-LA3_HNW-Dog-Learn_DT"),
                },
                alt: "Close up of dog with mouth open",
                title: "How to Brush Your Dog's Teeth",
                desc: "Learning how to brush your dog’s teeth is important for a long list of reasons. It can help your dog’s teeth stay whiter and freshen your dog’s breath.",
                link: "/learning-center/dog-care/how-to-brush-your-dogs-teeth/A0246.html?fdid=dog/"
            },
        ],
    },
]
export default data_container;