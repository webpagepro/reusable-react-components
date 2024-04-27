// DPT-4365 US - Update Wellness Link In Brand Shop - lu: 04.07.2023-JenR

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    { // Top Banner
        containerName: "PromoBanner",
        title: "",
        href: "",
        imgContent: imagelink("WEB-1484150-Aug22_NHDR-BNR_Wellness-Refresh_MO"),
        desktop: {
            imgContent: imagelink("WEB-1484150-Aug22_NHDR-BNR_Wellness-Refresh_DT"),
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
                imgContent: imagelink("WEB-1484150-Aug22_4COL-FC1_Wellness-Refresh-Cat_DT"),
                alt: "Wellness Complete Health Dry Cat Food Bag, Wellness Complete Health Wet Cat Food Variety Pack, & Wellness CORE Wet Cat Food Packet",
                title: "Cat Complete Health + CORE",
                link: "/featured-brands/wellness/cat/?pmin=0.01&prefn1=customSeries&prefv1=Wellness%20Complete%20Health%7CWellness%20CORE%2F%3Forigin%3Dwellnessfeatbrand%7CWellness%20CORE&srule/?origin=wellnessfeatbrand&type=card4up&desc=CatCompHealthCore/#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_4COL-FC2_Wellness-Refresh-Dog_DT"),
                alt: "Wellness Freshly Food Bag & Wellness Boosters Bag",
                title: "Dog Bowl Boosters + Freshly",
                link: "/featured-brands/wellness/dog/food-toppers+fresh-and-frozen-food+fresh-food/?origin=wellnessfeatbrand&type=card4up&desc=dogbwlboostfreshly#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_4COL-FC3_Wellness-Refresh-Dog_DT"),
                alt: "Wellness Complete Health Dry Dog Food Bags & Wellness Complete Health Wet Dog Food Variety Pack",
                title: "Dog Complete Health",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customSeries&prefv1=Wellness%20Complete%20Health&srule/?origin=wellnessfeatbrand&type=card4up&desc=dogcomphealth/#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_4COL-FC4_Wellness-Refresh-Dog_DT"),
                alt: "Wellness CORE Dry Dog Food Bags & Wellness CORE Wet Cat Food Can",
                title: "Dog CORE",
                link: "/featured-brands/wellness/dog/?pmin=0.01&prefn1=customSeries&prefv1=Wellness%20CORE&srule/?origin=wellnessfeatbrand&type=card4up&desc=dogcore/#tabs-1",
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
                imgContent: imagelink("WEB-1484150-Aug22_6COL1_Wellness-Refresh-Dog_DT"),
                alt: "Wellness Dry Dog Food",
                title: "Dog Dry",
                link: "/featured-brands/wellness/dog/dry-food/dog/?origin=wellnessfeatbrand&type=6tile&desc=dogdry/#tabs-1"
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_6COL2_Wellness-Refresh-Dog_DT"),
                alt: "Wellness Wet Dog Food",
                title: "Dog Wet",
                link: "/featured-brands/wellness/dog/canned-food/dog/?origin=wellnessfeatbrand&type=6tile&desc=dogwet/#tabs-1"
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_6COL3_Wellness-Refresh-Dog_DT"),
                alt: "Wellness Dog Toppers and Wellness Fresh and Frozen Dog Food",
                title: "Dog Toppers + Fresh Frozen",
                link: "/featured-brands/wellness/dog/food-toppers+fresh-and-frozen-food+fresh-food+frozen-food/dog/?origin=wellnessfeatbrand&type=6tile&desc=dogtopfrshfroz#tabs-1"
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_6COL4_Wellness-Refresh-DogCat_DT"),
                alt: "Wellness Dog and Cat Treats",
                title: "Dog & Cat Treats",
                link: "/featured-brands/wellness/biscuits-and-bakery+chewy-treats+crunchy-treats+soft-treats+training-treats/?origin=wellnessfeatbrand&type=6tile&desc=dogcattreats/#tabs-1"
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_6COL5_Wellness-Refresh-Cat_DT"),
                alt: "Welllness Wet Cat Food Cans and Pouch",
                title: "Cat Wet",
                link: "/featured-brands/wellness/cat/canned-food/?origin=wellnessfeatbrand&type=6tile&desc=catwet/#tabs-1"
            },
            {
                imgContent: imagelink("WEB-1484150-Aug22_6COL6_Wellness-Refresh-Cat_DT"),
                alt: "Wellnesss Dry Cat Food Bags",
                title: "Cat Dry",
                link: "/featured-brands/wellness/cat/dry-food/?origin=wellnessfeatbrand&type=6tile&desc=catdry/#tabs-1"
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
                readMoreLink: "/featured-brands/whimzees/?origin=wellnessfeatbrand&type=2cardup&desc=whimzees",
                imgContent: imagelink("WEB-1484150-Aug22_2COL1_Wellness-Refresh_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1484150-Aug22_2COL1_Wellness-Refresh_DT"),
                },
                alt: "Whimzees by Wellness Treat Them Well. Dental disease affects 80% of adult dogs.",
            },
            {
                title: "Old Mother Hubbard",
                subTitle: "",
                readMoreText: "",
                readMoreLink: "/featured-brands/old-mother-hubbard/?origin=wellnessfeatbrand&type=2cardup&desc=omh",
                imgContent: imagelink("WEB-1484150-Aug22_2COL2_Wellness-Refresh_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1484150-Aug22_2COL2_Wellness-Refresh_DT"),
                },
                alt: "Old Mother Hubbard : Treats Well Made Because Moments Matter. Treat Them Well.",
            },
        ],
    },
];

export default dataContainer;