// DPT-3261 US Dog Health & Wellness 2022 main landing page, lu: 09.07.2022.JR
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
        title: "Training Shop",
        description: "Anything for training your dog",
        isInverted: true,
        // backgroundColor: "#DD2834",
        alt: "Shop anything for training your dog",
        imageInfo: {
            url: imagelink("WEB-1445100-Aug22_MP-HB_Training_MO"),// imagelink(""),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1445100-Aug22_MP-HB_Training_DT"), // imagelink(""),
            },
        }
    },
    { // Training & behavior supplies
        containerName: "CategoryRow",
        title: "Training & behavior supplies",
        shouldCallApi: false,
        itemsPerView: 6,
        shopLink: "",
        tileSections: [
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL1_Training_DT"),
                alt: "Potty Training",
                title: "Potty Training",
                link: "/dog/training-and-behavior/potty-training/?origin=training-shop&desc=visualnav&type=card1",

            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL2_Training_DT"),
                alt: "Training Treats",
                title: "Training Treats",
                link: "/dog/training-and-behavior/training-treats/?origin=training-shop&desc=visualnav&type=card2",


            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL3_Training_DT"),
                alt: "Training Collars, Leashes & Harnesses",
                title: "Training Collars, Leashes & Harnesses",
                link: "/dog/training-and-behavior/training-collars-leashes-and-harnesses/?origin=training-shop&desc=visualnav&type=card3",

            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL4_Training_DT"),
                alt: "Crate Training",
                title: "Crate Training",
                link: "/dog/crates-gates-and-containment/?origin=training-shop&desc=visualnav&type=card4",


            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL5_Training_DT"),
                alt: "Training and behavior accessories",
                title: "Accessories",
                link: "/dog/training-and-behavior/training-and-behavior-accessories/?origin=training-shop&desc=visualnav&type=card5",

            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL6_Training_DT"),
                alt: "Bark control",
                title: "Bark Control",
                link: "/dog/training-and-behavior/bark-control/?origin=training-shop&desc=visualnav&type=card6",

            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL7_Training_DT"),
                alt: "Deterrents",
                title: "Deterrents",
                link: "/dog/training-and-behavior/deterrents/?origin=training-shop&desc=visualnav&type=card7",

            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL8_Training_DT"),
                alt: "Cameras",
                title: "Cameras",
                link: "/dog/training-and-behavior/cameras-and-monitors/?origin=training-shop&desc=visualnav&type=card8",

            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_6COL9_Training_DT"),
                alt: "Interactive toys",
                title: "Interactive Toys",
                link: "/dog/toys/interactive-toys/?origin=training-shop&desc=visualnav&type=card9",

            },
            // {
            //     imgContent: imagelink("WEB-1474709-Aug22_6COL-10_HNW-Dog-Vitamins_DT"),
            //     alt: "Stool eating deterrent",
            //     title: "Stool Eating Deterrent",
            //     link: "/dog/vitamins-and-supplements/stool-eating-deterrent/?origin=hw-shop&desc=visualnav&type=vs-card10",

            // },
            // {
            //     imgContent: imagelink("WEB-1474709-Aug22_6COL-11_HNW-Dog-Vitamins_DT"),
            //     alt: "Heart and liver",
            //     title: "Heart & Liver",
            //     link: "/dog/vitamins-and-supplements/heart-and-liver/?origin=hw-shop&desc=visualnav&type=vs-card11",

            // },

        ],

    },
    { //FEATURED CARDS - 2-4 up grid display of promocard
        containerName: "featuredTilesGrid",
        title: "Training services",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "2up",
        // textAlign: "center",
        contentAlign: "left",
        tileSections: [
            {
                title: "In-Store Training",
                subTitle: "Group & private training classes with an Accredited Trainer held inside PetSmart stores",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.com/training/?origin=training-shop&desc=2-up&type=card1",
                imgContent: imagelink("WEB-1445100-Aug22_2COL1_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_2COL1_Training_DT"),
                },
                alt: "Trainer with pet and pet parent",


            },
            {
                title: "Virtual Dog Training",
                subTitle: "One-on-one training with an Accredited Trainer held online from the comfort of your own home",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.com/content/virtual-dog-training/?origin=training-shop&desc=2-up&type=card2",
                imgContent: imagelink("WEB-1445100-Aug22_2COL2_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_2COL2_Training_DT"),
                },
                alt: "Training with pet and pet parents at home",
            },
        ],
    },
    
    // { // SHOP HEALTH & WELLNESS
    //     containerName: "GridDisplay",
    //     variant: "3-6up",
    //     title: "Shop Health & Wellness",
    //     shouldCallApi: false,
    //     showShopAll: true,
    //     shopLink:"/dog/health-and-wellness/?origin=hw-shop&desc=visualnav&type=hw-shop-all",
    //     tileSections: [
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Dog-Shop_DT"),
    //             alt: "Dental and breath care",
    //             title: "Dental & Breath Care",
    //             link: "/dog/health-and-wellness/dental-care/?origin=hw-shop&desc=visualnav&type=hw-card1",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Dog-Shop_DT"),
    //             alt: "Pill administration",
    //             title: "Pill Administration",
    //             link: "/dog/health-and-wellness/pill-administration/?origin=hw-shop&desc=visualnav&type=hw-card2"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Dog-Shop_DT"),
    //             alt: "First aid and recovery",
    //             title: "First Aid",
    //             link: "/dog/health-and-wellness/first-aid-and-recovery/?origin=hw-shop&desc=visualnav&type=hw-card3"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Dog-Shop_DT"),
    //             alt: "Stress and calming care",
    //             title: "Stress & Calming Care",
    //             link: "/dog/health-and-wellness/anxiety-and-calming-care/?origin=hw-shop&desc=visualnav&type=hw-card4"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Dog-Shop_DT"),
    //             alt: "Dewormers",
    //             title: "Dewormers",
    //             link: "/dog/health-and-wellness/dewormers/?origin=hw-shop&desc=visualnav&type=hw-card5"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Dog-Shop_DT"),
    //             alt: "Nose and paw care",
    //             title: "Nose & Paw Care",
    //             link: "/dog/health-and-wellness/nose-and-paw-care/?origin=hw-shop&desc=visualnav&type=hw-card6"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Dog-Shop_DT"),
    //             alt: "Ear and eye care",
    //             title: "Ear & Eye Care",
    //             link: "/dog/health-and-wellness/ear-and-eye-care/?origin=hw-shop&desc=visualnav&type=hw-card7"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Dog-Shop_DT"),
    //             alt: "Test kits",
    //             title: "Test Kits",
    //             link: "/dog/health-and-wellness/test-kits/?origin=hw-shop&desc=visualnav&type=hw-card8"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Dog-Shop_DT"),
    //             alt: "Milk replacers and nursing kits",
    //             title: "Milk Replacers & Nursing Kits",
    //             link: "/dog/health-and-wellness/milk-replacers-and-nursing-kits/?origin=hw-shop&desc=visualnav&type=hw-card9"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-10_HNW-Dog-Shop_DT"),
    //             alt: "Diarrhea and digestion relief",
    //             title: "Diarrhea & Digestion Care",
    //             link: "/dog/health-and-wellness/diarrhea-and-digestion-relief/?origin=hw-shop&desc=visualnav&type=hw-card10"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-11_HNW-Dog-Shop_DT"),
    //             alt: "Specialized nutrition",
    //             title: "Specialized Nutrition",
    //             link: "/dog/food/?pmin=0.01&prefn1=customFoodCategory&prefv1=Specialized%20Nutrition&origin=hw-shop/"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-12_HNW-Dog-Shop_DT"),
    //             alt: "Veterinary diets",
    //             title: "Veterinary Diets",
    //             link: "/dog/food/veterinary-diets/?origin=hw-shop&desc=visualnav&type=hw-card12"
    //         },
    //     ],
    // },
    // {
    //     // 10/3/2022 - 1/1/2023, Winter Wellness Essentials - Product Carousel - Storytelling (API CALL)
    //     containerName: "ExclusiveOffer",
    //     title: "Winter Wellness",
    //     // shopLink: "",
    //     shouldCallApi: true,
    //     isCarouselOnly: false,
    //     tileSections: {
    //         promoCard: { // promo card
    //             imgContent: imagelink("WEB-1502500-Oct22_PC-S_HNW2-Dog_MO"),
    //             promoAlt: "Winter Wellness Essentials",
    //             promoTitle: "Winter Wellness Essentials",
    //             // promoCopy: "",
    //             desktop: {
    //                 imgContent: imagelink("WEB-1502500-Oct22_PC-S_HNW2-Dog_DT"),
    //             },
    //         },
    //         skuList: "(5246658,5288464,5296091,5204791,5295634​,5296091​,5288029,5313994​,5307177,5298477,5130648,5295651)", // comma without space between skus
    //     },
    // },
    { // evergreen, rever to this after 1/1/2023, PET PARENT FAVORITES - Product Carousel
        containerName: "ProductCarousel",
        title: "Pet parent favorites",
        shopLink: "/dog/training-and-behavior/?origin=training-shop&desc=visualnav&type=shopall",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5277156,5297667,5324684,5298862,5311315,5169732)", // comma without space between skus
        },
    },
    { // SALE PROMO BANNER - promo banner small
        containerName: "PromoBanner",
        size: 'sm',
        className: "health-wellness",
        title: "Anything for your new dog! Shop all the pet essentials you need.",
        href: "/new-pet.html/?origin=training-shop&desc=newpet&type=sm-promo-banner",
        imgContent: imagelink("WEB-1445100-Aug22_PROMO-SB_Training_MO"),
        desktop: {
            imgContent: imagelink("WEB-1445100-Aug22_PROMO-SB_Training_DT"),
        },
        ctaText: "Shop now",
        alt: "Close up of dog smiling",
        isInverted: true,
    },
    // { // SHOP TOP BRANDS -
    //     containerName: "CategoryRow",
    //     title: "Shop Top Brands",
    //     shouldCallApi: false,
    //     showShopAll: true,
    //     shopLink: "/dog/health-and-wellness/?origin=hw-shop&desc=brandvisualnav&type=shop-all",
    //     itemsPerView: 6,
    //     tileSections: [
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-1_HNW-Dog-Brand_DT"),
    //             alt: "Only Natural Pet",
    //             title: "Only Natural Pet",
    //             link: "/dog/vitamins-and-supplements/only-natural-pet/?origin=hw-shop&desc=brandvisualnav&type=onp",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-2_HNW-Dog-Brand_DT"),
    //             alt: "Zesty Paws®",
    //             title: "Zesty Paws®",
    //             link: "/dog/vitamins-and-supplements/zesty-paws/?origin=hw-shop&desc=brandvisualnav&type=zestypaws",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-3_HNW-Dog-Brand_DT"),
    //             alt: "Dog MX®",
    //             title: "Dog MX®",
    //             link: "/dog/health-and-wellness/dog-mx/?origin=hw-shop&desc=brandvisualnav&type=dogmx",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-4_HNW-Dog-Brand_DT"),
    //             alt: "Cosequin® Nutramax",
    //             title: "Cosequin® Nutramax",
    //             link: "/dog/vitamins-and-supplements/nutramax-laboratories/?origin=hw-shop&desc=brandvisualnav&type=nutramax",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-5_HNW-Dog-Brand_DT"),
    //             alt: "GREENIES™",
    //             title: "GREENIES™",
    //             link: "/dog/health-and-wellness/greenies/?origin=hw-shop&desc=brandvisualnav&type=greenies",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-6_HNW-Dog-Brand_DT"),
    //             alt: "ThunderShirt®",
    //             title: "ThunderShirt®",
    //             link: "/dog/health-and-wellness/thundershirt/?origin=hw-shop&desc=brandvisualnav&type=thundershirt",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-7_HNW-Dog-Brand_DT"),
    //             alt: "Purina® Pro Plan®",
    //             title: "Purina® Pro Plan®",
    //             link: "/dog/vitamins-and-supplements/purina-pro-plan/?origin=hw-shop&desc=brandvisualnav&type=purinaproplan",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-8_HNW-Dog-Brand_DT"),
    //             alt: "Zymox®",
    //             title: "Zymox®",
    //             link: "/dog/health-and-wellness/zymox/?origin=hw-shop&desc=brandvisualnav&type=zymox",
    //         },
    //         {
    //             imgContent: imagelink("WEB-1474709-Aug22_6COL-9_HNW-Dog-Brand_DT"),
    //             alt: "EverRoot™",
    //             title: "EverRoot™",
    //             link: "/dog/health-and-wellness/everroot/?origin=hw-shop&desc=brandvisualnav&type=everroot",
    //         },
    //     ],
    // },
    // { // SERVICES
    //     containerName: "Favorites",
    //     title: "Services",
    //     shouldCallApi: false,
    //     // shopLink: "https://www.petsmart.com/",
    //     tileSections: [
    //         {
    //             imgContent: imagelink("WEB-1466225-Sept22_HP-CAT1_SERV-GRM_DT"),
    //             alt: "Grooming Salon",
    //             title: "Grooming Salon",
    //             // description: "Grooming Salon",
    //             link: "https://services.petsmart.com/grooming/?origin=hw-shop&desc=services&type=4card1"

    //         },
    //         {
    //             imgContent: imagelink("WEB-1466225-Sept22_HP-CAT2_SERV-PSH_DT"),
    //             alt: "PetsHotel",
    //             title: "PetsHotel",
    //             // description: "PetsHotel",
    //             link: "https://services.petsmart.com/petshotel/?origin=hw-shop&desc=services&type=4card2"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1466225-Sept22_HP-CAT3_SERV-DDC_DT"),
    //             alt: "Doggie Day Camp",
    //             title: "Doggie Day Camp",
    //             // description: "Doggie Day Camp",
    //             link: "https://services.petsmart.com/doggie-day-camp/?origin=hw-shop&desc=services&type=4card3"
    //         },
    //         {
    //             imgContent: imagelink("WEB-1466225-Sept22_HP-CAT4_SERV-TRN_DT"),
    //             alt: "Dog Training",
    //             title: "Dog Training",
    //             // description: "Dog Training",
    //             link: "https://services.petsmart.com/training/?origin=hw-shop&desc=services&type=4card4"
    //         },
    //     ],
    // },
    { // LEARNING CENTER - PromoCardScroll/Card 3up - Article
        containerName: "PromoCardScroll",
        title: "Training resources",
        desc: "",
        displayLink: true,
        shopLink:"/learning-center/dog-care/?origin=training-shop&desc=training-resources&type=see=all",
        truncateLines: 2,
        linkLabel: "Read more",
        tileSections: [
            {
                imgContent: imagelink("WEB-1445100-Aug22_3COL-A1_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_3COL-A1_Training_DT"),
                },
                alt: "Dog sitting on large dog pad",
                title: "A Guide to Potty Training",
                desc: "The ups and downs of potty training your puppy. Everyone who has had to do it knows the challenges associated with potty training puppies. ",
                link: "/learning-center/dog-care/a-guide-to-potty-training-puppies/A0206.html"
            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_3COL-A2_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_3COL-A2_Training_DT"),
                },
                alt: "Close up of dog running and smiling",
                title: "How to Train a New Puppy",
                desc: "So you brought home a puppy? Congratulations and welcome to pet parenthood!",
                link: "/learning-center/dog-care/how-to-train-a-new-puppy/A0121.html"
            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_3COL-A3_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_3COL-A3_Training_DT"),
                },
                alt: "Close up of dog smiling indoors",
                title: "Indoor Activities & Tips",
                desc: "It isn’t always possible to enjoy the great outdoors with your pup. Sometimes it rains, snows, is too cold and sometimes, even when the weather is pleasant, you may just want to enjoy a day indoors.",
                link: "/learning-center/dog-care/indoor-dog-activities-and-training-tips-for-your-pup/A0138.html"
            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_3COL-A4_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_3COL-A4_Training_DT"),
                },
                alt: "Dog outside of open crate",
                title: "Using Crates & Gates",
                desc: "Many pet parents use dog crates and dog gates to train their pups, set boundaries, or contain them for their comfort/safety. Some pups love to sleep and relax in their crates, other pups might need a gate to protect them from dangers like stairs. ",
                link: "/learning-center/dog-care/benefits-and-tips-of-using-dog-crates-and-dog-gates-for-training/A0120.html"
            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_3COL-A5_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_3COL-A5_Training_DT"),
                },
                alt: "Close up of dog outside",
                title: '"Come Here" When Cued',
                desc: "The recall cue, most commonly known as the “come here” cue, is an incredibly important behavior that dogs need to know for their own safety and wellbeing.",
                link: "/learning-center/dog-care/how-to-train-my-dog-to-%E2%80%9Ccome-here%E2%80%9D-when-cued/A0104.html"
            },
            {
                imgContent: imagelink("WEB-1445100-Aug22_3COL-A6_Training_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1445100-Aug22_3COL-A6_Training_DT"),
                },
                alt: "Trainer with smiling dog",
                title: "Dog Training Classes",
                desc: "With every dog comes dog training. Whether you’ve adopted a new puppy who has a lot to learn, or you have a dog that just needs training in a few different areas, PetSmart dog training classes are here to help.",
                link: "/learning-center/dog-care/petsmart-dog-training-class-is-in-session/A0058.html"
            },
        ],
    },
]
export default data_container;