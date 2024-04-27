// DPT-3434 - CA Wellness Brand Shop Refresh  - lu: 10.31.2022-MS

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    { // Top Banner
        containerName: "PromoBanner",
        title: "",
        href: "",
        imgContent: imagelink("CAN_WEB_Wellness_Nov22_Banner_ShopRefresh_MO"),
        desktop: {
            imgContent: imagelink("CAN_WEB_Wellness_Nov22_Banner_ShopRefresh_DT"),
        },
        ctaText: "",
        alt: "Wellness Enjoy a Lifetime of Wellbeing Together. Dog and Cat being pet.",
        isInverted: false,
    },
    {
        // Card 1-2-4up
        containerName: "GridDisplay",
        variant: "1-2-4up",
        title: "",
        shopLink: "",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_CatCore_4Up_Category1"),
                alt: "Wellness Complete Health Dry Cat Food Bag, Wellness Complete Health Wet Cat Food Variety Pack, & Wellness CORE Wet Cat Food Packet",
                title: "Cat Complete Health + CORE",
                link: "/featured-brands/wellness/cat/?pmin=0.01&prefn1=customPet&prefv1=Cat&prefn2=customSeries&prefv2=Wellness%20CORE%7CWellness%20Complete%20Health&srule=best-sellers?origin=wellnessbrandshop&type=card4up&desc=catcore#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogCore_4Up_Category2"),
                alt: "Wellness CORE Dry Dog Food Bags & Wellness CORE Wet Cat Food Can",
                title: "Dog CORE",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customPet&prefv1=Dog&prefn2=customSeries&prefv2=Wellness%20CORE&srule=best-sellers?origin=wellnessbrandshop&type=card4up&desc=dogcore#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogBowlBoost_4Up_Category3"),
                alt: "Wellness Dog Bowl Boosters Bag",
                title: "Dog Bowl Boosters",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customCategory&prefv1=Food%20Toppers&prefn2=customPet&prefv2=Dog&srule=best-sellers?origin=wellnessbrandshop&type=card4up&desc=dogbowlboost#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogCH_4Up_Category4"),
                alt: "Wellness Complete Health Dry Dog Food Bags & Wellness Complete Health Wet Dog Food Variety Pack",
                title: "Dog Complete Health",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customPet&prefv1=Dog&prefn2=customSeries&prefv2=Wellness%20Complete%20Health&srule=best-sellers?origin=wellnessbrandshop&type=card4up&desc=dogcomphealth#tabs-1",
                alignText: 'left',
            },
        ],
    },
    { // Shop by pet
        containerName: "CategoryRow",
        title: "",
        shouldCallApi: false,

        tileSections: [
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogDry_6COL_Category1"),
                alt: "Wellness Dry Dog Food",
                title: "Dog Dry",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customCategory&prefv1=Dry%20Food&prefn2=customPet&prefv2=Dog&srule=best-sellers?origin=wellnessbrandshop&type=6tile&desc=dogdry#tabs-1"
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogWet_6COL_Category2"),
                alt: "Wellness Wet Dog Food",
                title: "Dog Wet",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customCategory&prefv1=Canned%20Food&prefn2=customPet&prefv2=Dog&srule=best-sellers?origin=wellnessbrandshop&type=6tile&desc=dogwet#tabs-1"
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogTopper_6COL_Category3"),
                alt: "Wellness Dog Toppers",
                title: "Dog Toppers",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customCategory&prefv1=Food%20Toppers&prefn2=customPet&prefv2=Dog&srule=best-sellers?origin=wellnessbrandshop&type=6tile&desc=dogtopper#tabs-1"
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_DogTreat_6COL_Category4"),
                alt: "Wellness Dog Treats",
                title: "Dog Treats",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customCategory&prefv1=Biscuits%20%26%20Bakery%7CChewy%20Treats&srule=best-sellers?origin=wellnessbrandshop&type=6tile&desc=dogtreat#tabs-1"
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_CatWet_6COL_Category5"),
                alt: "Welllness Wet Cat Food Cans and Pouch",
                title: "Cat Wet",
                link: "/featured-brands/wellness/cat/?pmin=0.01&prefn1=customCategory&prefv1=Canned%20Food&prefn2=customPet&prefv2=Cat&srule=best-sellers?origin=wellnessbrandshop&type=6tile&desc=catwet#tabs-1"
            },
            {
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_CatDry_6COL_Category6"),
                alt: "Wellnesss Dry Cat Food Bags",
                title: "Cat Dry",
                link: "/featured-brands/wellness/cat/?pmin=0.01&prefn1=customCategory&prefv1=Dry%20Food&prefn2=customPet&prefv2=Cat&srule=best-sellers?origin=wellnessbrandshop&type=6tile&desc=catdry#tabs-1"
            },

        ],

    },
    {
        // Card 1-2up
        containerName: "featuredTilesGrid",
        title: "",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "1-2up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Whimzees",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-brands/whimzees/?origin=wellnessbrandshop&type=2cardup&desc=whimzee",
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_WhimzeesBanner_ShopRefresh_MO"),
                desktop: {
                    imgContent: imagelink("CAN_WEB_Wellness_Nov22_WhimzeesBanner_ShopRefresh_DT"),
                },
                alt: "Whimzees by Wellness Treat Them Well. Dental disease affects 80% of adult dogs.",
            },
            {
                title: "Old Mother Hubbard",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-brands/old-mother-hubbard/?origin=wellnessbrandshop&type=2cardup&desc=omh",
                imgContent: imagelink("CAN_WEB_Wellness_Nov22_OMHBanner_ShopRefresh_MO"),
                desktop: {
                    imgContent: imagelink("CAN_WEB_Wellness_Nov22_OMHBanner_ShopRefresh_DT"),
                },
                alt: "Old Mother Hubbard : Treats Well Made Because Moments Matter. Treat Them Well.",
            },
        ],
    },
];

export default dataContainer;