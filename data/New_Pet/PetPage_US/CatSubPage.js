// DPT-4178 Injection into DPT-3977 New Pet Experience Dog/Cat Link updates - lu:02/10/2023 - JenR
// Live: 02/15
/*
 Structure of Cat sub page data

 CatSubPageData
    |
    |---- 1. Sections
            |
            |---- 1. HeroBanner
            |
            |---- 2. TextPassage (Details text)
            |
            |---- 3. TabSection
            |       |
            |       |---- 1. sections
            |           |
            |           |---- 1. TileCarousel
            |           |       |
            |           |       |---- 1. tileSections
            |           |
            |           |---- 2. ColumnTips (Tips section)
            |           |       |
            |           |       |---- 1. tipSections
            |           |
            |           |---- 3. FeaturedTiles (Featured resources)
            |                   |
            |                   |---- 1. tileSections
            |
            |---- 4. FeaturedSection (Featured Media)
            |
            |---- 5. FeaturedTiles (Services)
            |       |
            |       |---- 1. tileSections
            |
            |---- 6. PromoBannerLarge
            |
            |---- 7. FeaturedTiles (Book a service)
            |       |
            |       |---- 1. tileSections
            |
            |---- 8. AccrodionSection
            |       |
            |       |---- 1. sections
            |
            |---- 9. SEOSection

*/

/* eslint-disable no-mixed-spaces-and-tabs */

let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let catSubPageData = [
    // general settings, if any goes here.

    // each section in the landing page will be an entry in the sections array
    // Hero banner
    {
        containerName: "heroBanner",
        title: "A Brand-New Love",
        description: "We have anything for every first.",
        isInverted: true,
        backgroundColor: "#F7F7F7",
        alt: "A brand new love: anything for every first with your new pet.",
        imageInfo: {
            url: imagelink("WEB-1608400-Jan23_MP-HB_NPP_MO"),// imagelink(""),
            alt: "A brand new love: anything for every first with your new pet.",
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1608400-Jan23_MP-HB_NPP-Cat_DT"), // imagelink(""),
                alt: "A brand new love: anything for every first with your new pet.",
            },
        }
    },
    // Details text
    // {
    //     containerName: "TextPassage",
    //     title: "Checklist by cat lifestage",
    //     description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    //     isInverted: false,
    // },
    {
        containerName: "tabSection",
        title: "What's your cat's age?",
        description: "Shop cat checklist by lifestage.",
        isInverted: false,
        tabs: [
            //Tab- 1 starts here
            {
                tabTitle: "Kitten \nUnder 1 year",
                sections: [
                    // tile carousel
                    {
                        containerName: "CategoryRow",
                        title: "",
                        subTitle: "",
                        showAllText: "",
                        showAllLink: "",
                        tileSections: [
                            {
                                title: "Food & Treats",
                                subTitle: "",
                                link: "/cat/food-and-treats/kitten-food/?origin=newkitten&desc=foodandtreats&type=checklist",
                                alt: "Food & Treats",

                                imgContent: imagelink("5092574"),
                            },
                            {
                                title: "Litter & Accessories",
                                subTitle: "",
                                link: "/cat/litter-and-waste-disposal/?origin=newkitten&desc=litter&type=checklist",
                                alt: "Litter & Accessories",
                                imgContent: imagelink("5124261"),
                            },
                            {
                                title: "Furniture & Towers",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/furniture-and-towers/?origin=newkitten&desc=furniture-and-towers&type=checklist",
                                alt: "Furniture & Towers",
                                imgContent: imagelink("5320220"),
                            },
                            {
                                title: "Flea & Tick",
                                subTitle: "",
                                link: "/cat/flea-and-tick/?origin=newkitten&desc=flea-and-tick&type=checklist",
                                alt: "Flea & Tick",
                                imgContent: imagelink("5285872"),
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/cat/toys/?origin=newkitten&desc=toys&type=checklist",
                                alt: "Toys",
                                imgContent: imagelink("5324072"),
                            },
                            {
                                title: "Calming",
                                subTitle: "",
                                link: "/cat/health-and-wellness/anxiety-and-calming-care/?origin=newkitten&desc=calming&type=checklist",
                                alt: "Calming",
                                imgContent: imagelink("5297126"),
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/cat/bowls-and-feeders/?origin=newkitten&desc=bowls&type=checklist",
                                alt: "Bowls & Storage",
                                imgContent: imagelink("5277660"),
                            },
                            {
                                title: "Scratchers",
                                subTitle: "",
                                link: "/cat/toys/scratchers/?origin=newkitten&desc=scratchers&type=checklist",
                                alt: "Scratchers",
                                imgContent: imagelink("5320281"),
                            },
                            {
                                title: "Beds & Furniture",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/?origin=newkitten&desc=beds&type=checklist",
                                alt: "Beds & Furniture",
                                imgContent: imagelink("5305228"),
                            },
                            {
                                title: "Collars & Leashes",
                                subTitle: "",
                                link: "/cat/collars-harnesses-and-leashes/?origin=newkitten&desc=collars&type=checklist",
                                alt: "Collars & Leashes",
                                imgContent: imagelink("5265145"),
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/cat/cleaning-and-repellents/?origin=newkitten&desc=care&type=checklist",
                                alt: "Care & Cleanup",
                                imgContent: imagelink("5268776"),
                            },
                        ],
                    },
                    // tips section
                    {
                        containerName: "columnTips",
                        title: "Tips for getting started",
                        subTitle: "Want to make the transition to their new home easy for everyone? We're here to help. ",
                        isInverted: false,
                        tipSections: [
                            {
                                title: "For their safety & yours, please use a carrier.",
                                subTitle: "", // TODO maybe not needed as title is taking on role of subtitle
                                alt: "Icon of cat in a travel bag",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Cat-Car_DT"),

                            },
                            {
                                title: "Be patient & give time to adjust to new surroundings.​",
                                subTitle: "",
                                alt: "Silhouette icon of two cats",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Cat-Meet_DT"),

                            },
                            {
                                title: "Familiar food, litter & hiding places can ease the home transition.",
                                subTitle: "",
                                alt: "Icon of a cat scratcher",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Cat-Boost_DT"),

                            },
                            {
                                title: "Scratching is a behavior that releases stress & exercise muscles. ",
                                subTitle: "",
                                alt: "Icon of cat sctraching a post",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Cat-Fun_DT"),

                            },
                            {
                                title: "Keep your cat up-to-date on routine shots with your vet.",
                                subTitle: "",
                                alt: "Icon of a needle",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Cat-Vaccine_DT"),

                            },
                        ],
                    },
                    // Featured resources
                    {
                        containerName: "PromoCardScroll",
                        title: "All about your new kitty",
                        desc: "",
                        showAllText: "See all",
                        shopLink: "/learning-center/search/?fdid=cat&origin=newcat&desc=kitten&type=learningcenter",
                        linkLabel: "Read more",
                        displaySettings: {
                            columnCount: 3,
                            rowCount: 1,
                        },
                        truncateSetting: {
                            lineBreak: 3,
                            desktop: { lineBreak: 2, }
                        },
                        isInverted: false,
                        tileSections: [
                            {
                                title: "How to Kitten-Proof Your Home",
                                desc: "Learning how to kitten-proof your home is a lot like baby proofing. While a kitten might not bump their head on tables or try to stick their fingers in things they shouldn’t, they sure do know how to get into trouble around the house. Learning how to kitten-proof is an important step to take before bringing home a new pet. Cats are naturally curious creatures who love to explore their environment. Keeping your cat safe is your number one priority and proofing your house is a part of their safety. ",
                                link: "/learning-center/cat-care/kitty-proof-your-home/A0149.html?origin=newkitten&desc=home&type=article",
                                alt: "Image of a kitten under a blanket",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_DT"),
                                }
                            },
                            {
                                title: "What Should I Feed My Kitten?",
                                desc: "Bouncing, pouncing, chasing bugs, climbing the curtains — kittens are little activity machines. It’s no wonder they needs lots of protein, calcium, vitamins and minerals. Choose a high-quality food made especially for kittens. It will be easier for your kitty to digest, which means they’ll get more of the nutrients they need.",
                                link: "/learning-center/cat-care/what-should-i-feed-my-kitten/A0060.html?origin=newkitten&desc=feed&type=article",
                                alt: "Image of a cat with a bowl of cat food",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Kitten_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Kitten_DT"),
                                }
                            },
                            {
                                title: "Taking Care of My New Cat",
                                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",
                                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newkitten&desc=care&type=article",
                                alt: "Image of a cat in a basket of yarn",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_DT"),
                                }
                            },
                        ],
                    },

                ]
            },
            //Tab- 1 ends here

            //Tab- 2 starts here
            {
                tabTitle: "Adult cat \n1 - 10 years",
                sections: [
                    // tile carousel
                    {
                        containerName: "CategoryRow",
                        title: "",
                        subTitle: "",
                        showAllText: "",
                        showAllLink: "",

                        tileSections: [
                            {
                                title: "Food & Treats",
                                subTitle: "",
                                link: "/cat/food-and-treats/?pmin=0.01&prefn1=customCatLifestage&prefv1=Adult%201-10%20yrs&srule=best-sellers&format&origin=newadult&desc=foodandtreats&type=checklist",
                                alt: "Food & Treats",
                                imgContent: imagelink("5154810"),
                            },
                            {
                                title: "Litter & Accessories",
                                subTitle: "",
                                link: "/cat/litter-and-waste-disposal/?origin=newadultcat&desc=litter&type=checklist",
                                alt: "Litter & Accessories",
                                imgContent: imagelink("5219991"),
                            },
                            {
                                title: "Furniture & Towers",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/furniture-and-towers/?origin=newadultcat=furniture-and-towers&type=checklist",
                                alt: "Furniture & Towers",
                                imgContent: imagelink("5305280"),
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/cat/toys/?origin=newadultcat&desc=toys&type=checklist",
                                alt: "Toys",
                                imgContent: imagelink("5324079"),
                            },
                            {
                                title: "Vitamins & Supplements",
                                subTitle: "",
                                link: "/cat/vitamins-and-supplements/?pmin=0.01&prefn1=customCatLifestage&prefv1=Adult%201-10%20yrs&srule&origin=newadultcat&desc=vitamins-and-supplements&type=checklist",
                                alt: "Vitamins & Supplements",
                                imgContent: imagelink("5269889"),
                            },
                            {
                                title: "Flea & Tick",
                                subTitle: "",
                                link: "/cat/flea-and-tick/?origin=newadultcat&desc=flea-and-tick&type=checklist",
                                alt: "Flea & Tick",
                                imgContent: imagelink("5214373"),
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/cat/bowls-and-feeders/?origin=newadultcat&desc=bowls&type=checklist",
                                alt: "Bowls & Storage",
                                imgContent: imagelink("5271613"),
                            },
                            {
                                title: "Scratchers",
                                subTitle: "",
                                link: "/cat/toys/scratchers/?origin=newadultcat&desc=scratchers&type=checklist",
                                alt: "Scratchers",
                                imgContent: imagelink("5287659"),
                            },
                            {
                                title: "Beds & Furniture",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/?origin=newadultcat&desc=beds&type=checklist",
                                alt: "Beds & Furniture",
                                imgContent: imagelink("5320676"),
                            },
                            {
                                title: "Collars & Leashes",
                                subTitle: "",
                                link: "/cat/collars-harnesses-and-leashes/?origin=newadultcat&desc=collars&type=checklist",
                                alt: "Collars & Leashes",
                                imgContent: imagelink("5261433"),
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/cat/cleaning-and-repellents/?origin=newadultcat&desc=care&type=checklist",
                                alt: "Care & Cleanup",

                                imgContent: imagelink("5268776"),
                            },
                        ],
                    },
                    // tips section
                    {
                        containerName: "columnTips",
                        title: "Tips for getting started",
                        subTitle: "Want to make the transition to their new home easy for everyone? We're here to help. ",
                        isInverted: false,
                        tipSections: [
                            {
                                title: "For their safety & yours, please use a carrier.",
                                subTitle: "", // TODO maybe not needed as title is taking on role of subtitle
                                alt: "Icon of cat in a travel bag",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Cat-Car_DT"),

                            },
                            {
                                title: "Be patient & give time to adjust to new surroundings.​",
                                subTitle: "",
                                alt: "Silhouette icon of two cats",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Cat-Meet_DT"),

                            },
                            {
                                title: "Familiar food, litter & hiding places can ease the home transition.",
                                subTitle: "",
                                alt: "Icon of a cat scratcher",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Cat-Boost_DT"),

                            },
                            {
                                title: "Scratching is a behavior that releases stress & exercise muscles. ",
                                subTitle: "",
                                alt: "Icon of cat sctraching a post",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Cat-Fun_DT"),

                            },
                            {
                                title: "Keep your cat up-to-date on routine shots with your vet.",
                                subTitle: "",
                                alt: "Icon of a needle",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Cat-Vaccine_DT"),

                            },
                        ],
                    },
                    // Featured resources
                    {
                        containerName: "PromoCardScroll",
                        title: "All about your adult cat",
                        desc: "",
                        showAllText: "See all",
                        shopLink: "/learning-center/search/?fdid=cat&origin=newcat&desc=adultcat&type=learningcenter",
                        linkLabel: "Read more",
                        displaySettings: {
                            columnCount: 3,
                            rowCount: 1,
                        },
                        truncateSetting: {
                            lineBreak: 3,
                            desktop: { lineBreak: 2, }
                        },
                        isInverted: false,
                        tileSections: [
                            {
                                title: "How to Deal with Your Cat’s Hairballs",
                                desc: "What causes hairballs? It’s no surprise that cats get hairballs like it’s part of their job. Cats are way into grooming — they spend up to half of their waking hours doing it. In the process, they inadvertently swallow a lot of their own fur — some of which comes back up later.",
                                link: "/learning-center/cat-care/how-to-deal-with-your-cats-hairballs/A0232.html?origin=newadultcat&desc=hairballs&type=article",
                                alt: "Image of a cat licking its paw",

                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Adult_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Adult_DT"),
                                }
                            },
                            {
                                title: "How to Choose the Right Cat Food",
                                desc: "There is a lot of information out there about what pet parents should or should not feed their pet cat. This can make it difficult to know what food to buy or what will help your cat thrive. There are tons of products on the market from dry cat food to wet cat food, limited ingredient cat food to natural cat food, and freeze-dried to frozen cat food, the options truly are endless. Keep reading to find out how to narrow down those choices to something that is perfect for your feline friend. ",
                                link: "/learning-center/cat-care/how-to-choose-the-right-cat-food/A0210.html?origin=newadultcat&desc=food&type=article",
                                alt: "image of cat with bowl",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Adult_MO"),

                            },
                            {
                                title: "Taking Care of My New Cat",
                                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",
                                readMoreLink: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newadultcat&desc=care&type=article",
                                alt: "image of cat ",

                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Adult_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Adult_DT"),
                                }
                            },
                            {
                                title: "How to Get Rid of Cat Fleas ",
                                desc: "Fleas are unwelcome critters that love to make homes on our pets and feed on their blood. In addition to that, these pesky insects can cause many problems for our cats. Anyone with a kitty must understand how fleas show up, how to get rid of them and how to prevent them from coming back in the future. This can save your pet from a ton of discomfort and flea-related issues. ",
                                link: "/learning-center/cat-care/how-to-get-rid-of-cat-fleas-and-keep-them-away/A0130.html?origin=newadultcat&desc=fleas&type=article",
                                alt: "image of cat in flowers",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Cat-Adult_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Cat-Adult_DT"),
                                }
                            },
                        ],
                    },

                ]
            },
            //Tab- 2 ends here

            //Tab- 3 starts here
            {
                tabTitle: "Senior cat \n11+ years",
                sections: [
                    // tile carousel
                    {
                        containerName: "CategoryRow",
                        title: "",
                        subTitle: "",
                        showAllText: "",
                        showAllLink: "",

                        tileSections: [
                            {
                                title: "Food & Treats",
                                subTitle: "",
                                link: "/cat/food-and-treats/?pmin=0.01&prefn1=customCatLifestage&prefv1=Senior%2010%20yrs%20%26%20older&srule=best-sellers&format&origin=newsenior&desc=foodandtreats&type=checklist",
                                alt: "Food & Treats",

                                imgContent: imagelink("5306240"),
                            },
                            {
                                title: "Litter & Accessories",
                                subTitle: "",
                                link: "/cat/litter-and-waste-disposal/?origin=newseniorcat&desc=litter&type=checklist",
                                alt: "Litter & Accessories",

                                imgContent: imagelink("5140112"),
                            },
                            {
                                title: "Furniture & Towers",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/furniture-and-towers/?pmin=0.01&prefn1=customFurnitureHeight&prefv1=1-Level%7C2-Level&srule&origin=newseniorcat&desc=furniture-and-towers&type=checklist",
                                alt: "Furniture & Towers",

                                imgContent: imagelink("5305495"),
                            },
                            {
                                title: "Vitamins & Supplements",
                                subTitle: "",
                                link: "/cat/vitamins-and-supplements/?origin=newseniorcat&desc=vitamins-and-supplements&type=checklist",
                                alt: "Vitamins & Supplements",

                                imgContent: imagelink("5305452"),
                            },
                            {
                                title: "Brushes & Combs",
                                subTitle: "",
                                link: "/cat/grooming-supplies/brushes-combs-and-blowdryers/?origin=newseniorcat&desc=brushes-and-combs&type=checklist",
                                alt: "Brushes & Combs",

                                imgContent: imagelink("5295510"),
                            },
                            {
                                title: "Plush Toys",
                                subTitle: "",
                                link: "/cat/toys/plush-balls-and-mice/?origin=newseniorcat&desc=plush-toys&type=checklist",
                                alt: "Plush Toys",

                                imgContent: imagelink("5287900"),
                            },
                            {
                                title: "Bed & Furniture",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/?origin=newseniorcat&desc=beds&type=checklist",
                                alt: "Beds & Furniture",

                                imgContent: imagelink("5305055"),
                            },
                            {
                                title: "Elevated Bowls",
                                subTitle: "",
                                link: "/cat/bowls-and-feeders/elevated-stands/?origin=newseniorcat&desc=bowls&type=checklist",
                                alt: "Elevated Bowls",

                                imgContent: imagelink("5270215"),
                            },
                            {
                                title: "Collars & Leashes",
                                subTitle: "",
                                link: "/cat/collars-harnesses-and-leashes/?origin=newseniorcat&desc&desc=collars&type=checklist",
                                alt: "Collars & Leashes",

                                imgContent: imagelink("5265129"),
                            },
                            {
                                title: "Dental Care",
                                subTitle: "",
                                link: "/cat/health-and-wellness/dental-and-breath-care/?origin=newseniorcat&desc&desc=dental-care&type=checklist",
                                alt: "Dental Care",

                                imgContent: imagelink("5309897"),
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/cat/cleaning-and-repellents/?origin=newseniorcat&desc=care&type=checklist",
                                alt: "Care & Cleanup",

                                imgContent: imagelink("5311553"),
                            },
                        ],
                    },
                    // tips section
                    {
                        containerName: "columnTips",
                        title: "Tips for getting started",
                        subTitle: "Want to make the transition to their new home easy for everyone? We're here to help. ",
                        isInverted: false,
                        tipSections: [
                            {
                                title: "For their safety & yours, please use a carrier.",
                                subTitle: "", // TODO maybe not needed as title is taking on role of subtitle
                                alt: "Icon of cat in a travel bag",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Cat-Car_DT"),

                            },
                            {
                                title: "Be patient & give time to adjust to new surroundings.​",
                                subTitle: "",
                                alt: "Silhouette icon of two cats",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Cat-Meet_DT"),

                            },
                            {
                                title: "Familiar food, litter & hiding places can ease the home transition.",
                                subTitle: "",
                                alt: "Icon of a cat scratcher",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Cat-Boost_DT"),

                            },
                            {
                                title: "Scratching is a behavior that releases stress & exercise muscles. ",
                                subTitle: "",
                                alt: "Icon of cat sctraching a post",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Cat-Fun_DT"),

                            },
                            {
                                title: "Keep your cat up-to-date on routine shots with your vet.",
                                subTitle: "",
                                alt: "Icon of a needle",

                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Cat-Vaccine_DT"),

                            },
                        ],
                    },
                    // Featured resources
                    {
                        containerName: "PromoCardScroll",
                        title: "All about your senior cat",
                        desc: "",
                        showAllText: "See all",
                        shopLink: "/learning-center/search/?fdid=cat&origin=newcat&desc=seniorcat&type=learningcenter",
                        linkLabel: "Read more",
                        displaySettings: {
                            columnCount: 3,
                            rowCount: 1,
                        },
                        truncateSetting: {
                            lineBreak: 3,
                            desktop: { lineBreak: 2, }
                        },
                        isInverted: false,
                        tileSections: [
                            {
                                title: "How to Deal with Your Cat’s Hairballs",
                                desc: "What causes hairballs? It’s no surprise that cats get hairballs like it’s part of their job. Cats are way into grooming — they spend up to half of their waking hours doing it. In the process, they inadvertently swallow a lot of their own fur — some of which comes back up later.",
                                link: "/learning-center/cat-care/how-to-deal-with-your-cats-hairballs/A0232.html?origin=newseniorcat&desc=hairballs&type=article",
                                alt: "Image of a cat licking its paw",

                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Senior_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Senior_DT"),
                                }
                            },
                            {
                                title: "How to Choose the Right Cat Food",
                                desc: "There is a lot of information out there about what pet parents should or should not feed their pet cat. This can make it difficult to know what food to buy or what will help your cat thrive. There are tons of products on the market from dry cat food to wet cat food, limited ingredient cat food to natural cat food, and freeze-dried to frozen cat food, the options truly are endless. Keep reading to find out how to narrow down those choices to something that is perfect for your feline friend. ",
                                link: "/learning-center/cat-care/how-to-choose-the-right-cat-food/A0210.html?origin=newseniorcat&desc=food&type=article",
                                alt: "image of cat with bowl",

                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Senior_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Senior_DT"),
                                }
                            },
                            {
                                title: "Taking Care of My New Cat",
                                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",
                                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newseniorcat&desc=care&type=article",
                                alt: "image of cat ",

                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Senior_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Senior_DT"),
                                }
                            },
                            {
                                title: "How to Get Rid of Cat Fleas ",
                                desc: "Fleas are unwelcome critters that love to make homes on our pets and feed on their blood. In addition to that, these pesky insects can cause many problems for our cats. Anyone with a kitty must understand how fleas show up, how to get rid of them and how to prevent them from coming back in the future. This can save your pet from a ton of discomfort and flea-related issues. ",
                                link: "/learning-center/cat-care/how-to-get-rid-of-cat-fleas-and-keep-them-away/A0130.html?origin=newseniorcat&desc=fleas&type=article",
                                alt: "image of cat in flowers",

                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Cat-Senior_MO"),
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Cat-Senior_DT"),
                                }
                            },
                        ],
                    },

                ]
            },
            // Tab- 3 ends here

        ] // inner sections ends here
    }, // Tab section ends here

    // Featured Media
    // {
    //     containerName: "featuredSection",
    //     title: "Lorem ipsum",
    //     subTitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    //     ctaText: "Button",
    //     ctaLink: "#",
    //     isCTA: true,
    //     isInverted: false,
    //     mediaInfo: {
    //         url: "https://www.youtube.com/embed/JotTqpiOFFA",
    //         alt: "videoAlt",
    //         type: "video", // type can be any supported media like image, video etc
    //     },
    // },

    // Fetured tiles - 2
    {
        containerName: "featuredTilesGrid",
        title: "Services",
        subTitle: "PetSmart is at your service.",
        showAllText: "Book a service",
        showAllLink: "",
        variant: "2up",
        displaySettings: { // TODO not sure if needed
            columnCount: 1,
            rowCount: 2,
        },
        desktop: {
            displaySettings: {
                columnCount: 2,
                rowCount: 1,
            },
        },
        isInverted: false,
        tileSections: [
            {
                title: "Grooming",
                subTitle: "Yes, we groom cats, too!",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.com/grooming?origin=newcat&desc=grooming&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC1_NPP-Cat-GRM_DT"),
                alt: "Image of cat being brushed",

            },
            {
                title: "PetsHotel",
                subTitle: "Reserve their overnight stay with us.",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.com/petshotel?origin=newcat&desc=petshotel&type=services",
                alt: "Image of cat laying in a blue bed",

                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC2_NPP-Cat-HOTEL_DT"),
            }

        ],
    },

    // promo banner - Large
    {
        containerName: "promoBannerLarge",
        size: "lg",
        title: "Get our FREE Adoption Kit!",
        subTitle: "Includes a FREE bag of food & over $300 in savings; available in stores.",
        link: "/store-locator/?origin=newcat&desc=adoptionkit&type=banner",
        ctaText: "Find a store",
        cta: true, // TODO added to give option of showing button
        isInverted: false,
        alt: "Image of cat with toys and of adoption kit",
        imgContent: imagelink("WEB-1337901-Jun22_PROMO-BL_NPP-Cat-AdoptKit_MO"),// imagelink(""),
        desktop: {
            imgContent: imagelink("WEB-1337901-Jun22_PROMO-BL_NPP-Cat-AdoptKit_DT"),
        }
    },

    // Fetured tiles - 3
    {
        containerName: "featuredTilesGrid",
        title: "More resources",
        subTitle: 'PetSmart has all the many "anythings" your cat needs.',
        showAllText: "",
        showAllLink: "",
        variant: "1-2-4up",
        // displaySettings: {
        //     columnCount: 1,
        //     rowCount: 3,
        // },
        // desktop: {
        //     displaySettings: {
        //         columnCount: 3,
        //         rowCount: 1,
        //     },
        // },
        isInverted: false,
        tileSections: [
            {
                title: "Veterinary Care",
                subTitle: "Find the right veterinary service at your local PetSmart.",
                readMoreText: "", // linkLabel
                readMoreLink: "/pet-services/petsmart-veterinary-care.html/?origin=newcat&desc=vet-care&type=card1", // link
                alt: "",

                imgContent: imagelink("WEB-1608400-Jan23_4CRD1_NPP-Dog-Vet_MO"),
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1608400-Jan23_4CRD1_NPP-Dog-Vet_DT"),
                }
            },
            {
                title: "Adopt with PetSmart Charities®",
                subTitle: "Find a pet, pet adoption events and more.",
                readMoreText: "", // linkLabel
                readMoreLink: "https://petsmartcharities.org/adopt-a-pet/?origin=newcat&desc=charities&type=card2", // link
                alt: "PetSmart Charities",

                imgContent: imagelink("WEB-1608400-Jan23_4CRD2_NPP-Dog-Adopt_MO"),
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1608400-Jan23_4CRD2_NPP-Dog_Adopt_DT"),
                }
            },
            {
                title: "The Pharmacy at PetSmart",
                subTitle: "Shop 1,000+ dog & cat medications at low prices.",
                readMoreText: "Read more", // linkLabel
                readMoreLink: "/pharmacy/dog/?origin=newcat&desc=pharmacy&type=card3", // link
                alt: "The Pharmacy at PetSmart",

                imgContent: imagelink("WEB-1608400-Jan23_4CRD3_NPP-Dog-RX_MO"),
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1608400-Jan23_4CRD3_NPP-Dog-RX_DT"),
                }
            },
            {
                title: "Autoship",
                subTitle: "Never run out of their essentials with convenient automatic delivery.",
                readMoreText: "Read more", // linkLabel
                readMoreLink: "/featured-shops/auto-ship/dog/?origin=newcat&desc=autoship&type=card4", // link
                alt: "Image of a dog sitting in a box",

                imgContent: imagelink("WEB-1515501-Oct22_4CRD3_HP-AutoShip_MO"),
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1515501-Oct22_4CRD3_HP-AutoShip_DT"),
                }
            },
        ],
    },

    // Accrodion
    // {
    //   containerName: "accordionSection",
    //   title: "Frequently asked questions",
    //   subTitle: "",
    //   isInverted: false,
    //   sections: [
    //     {
    //       title: "Accordion title 1",
    //       subTitle: "",
    //       isActive: false,
    //       htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //     },
    //     {
    //       title: "Accordion title 2",
    //       subTitle: "",
    //       isActive: false,
    //       htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //     },
    //     {
    //       title: "Accordion title 3",
    //       subTitle: "",
    //       isActive: false,
    //       htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //     },
    //     {
    //       title: "Accordion title 4",
    //       subTitle: "",
    //       isActive: false,
    //       htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //     },
    //   ],
    // },

    // SEO text
    // {
    //     containerName: "SEOSection",
    //     title: "",
    //     subTitle: "Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. ",
    //     isInverted: false,
    //     linkText: "",
    //     link: "",
    // },
]


export default catSubPageData;

