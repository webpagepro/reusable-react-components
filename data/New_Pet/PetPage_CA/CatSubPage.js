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
        title: "Anything for \nYour New Cat",
        description: "",
        isInverted: true,
        backgroundColor: "#F7F7F7",
        imageInfo: {
            url: imagelink("WEB-1337901-Jun22_MP-HB_NPP-Cat_MO"),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1337901-Jun22_MP-HB_NPP-Cat_DT"), // imagelink(""),
            },
        },
        alt: "Cat with owner",
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
                        isInverted: false,
                        tileSections: [
                            {
                                title: "Food & Treats",
                                subTitle: "",
                                link: "/cat/food-and-treats/?pmin=0.01&prefn1=customCatLifestage&prefv1=Kitten%200-12%20mos&origin=newkitten&desc=foodandtreats&type=checklist",
                                imgContent: imagelink("5153753"),
                                alt: "Food & Treats",
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/cat/toys/?origin=newkitten&desc=toys&type=checklist",
                                imgContent: imagelink("5287715"),
                                alt: "Toys",
                            },
                            {
                                title: "Litter & Accessories",
                                subTitle: "",
                                link: "/cat/litter-and-waste-disposal/?origin=newkitten&desc=litter&type=checklist",
                                imgContent: imagelink("5124261"),
                                alt: "Litter & Accessories",
                            },
                            {
                                title: "Calming",
                                subTitle: "",
                                link: "/featured-shops/safe-travels/?pmin=0.01&prefn1=customPet&prefv1=Cat&srule=best-sellers?origin=newkitten&desc=calming&type=checklist",
                                imgContent: imagelink("5294544"),
                                alt: "Calming",
                            },
                            {
                                title: "Bed & Furniture",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/?origin=newkitten&desc=beds&type=checklist",
                                imgContent: imagelink("5294916"),
                                alt: "Bed & Furniture",
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/cat/bowls-and-feeders/?origin=newkitten&desc=bowls&type=checklist",
                                imgContent: imagelink("5320396"),
                                alt: "Bowls & Storage",
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/cat/cleaning-and-repellents/?origin=newkitten&desc=care&type=checklist",
                                imgContent: imagelink("5266473"),
                                alt: "Care & Cleanup",
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
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Cat-Car_DT"),
                                alt: "Icon of cat in a travel bag",
                            },
                            {
                                title: "Be patient & give time to adjust to new surroundings.​",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Cat-Meet_DT"),
                                alt: "Silhouette icon of two cats",
                            },
                            {
                                title: "Familiar food, litter & hiding places can ease the home transition.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Cat-Boost_DT"),
                                alt: "Icon of a cat scratcher",
                            },
                            {
                                title: "Scratching is a behaviour that releases stress & exercise muscles. ",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Cat-Fun_DT"),
                                alt: "Icon of cat sctraching a post",
                            },
                            {
                                title: "Keep your cat up-to-date on routine shots with your vet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Cat-Vaccine_DT"),
                                alt: "Icon of a needle",
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
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_MO"),
                                alt: "Image of a kitten under a blanket",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_DT"),
                                }
                            },
                            {
                                title: "What Should I Feed My Kitten?",
                                desc: "Bouncing, pouncing, chasing bugs, climbing the curtains — kittens are little activity machines. It’s no wonder they needs lots of protein, calcium, vitamins and minerals. Choose a high-quality food made especially for kittens. It will be easier for your kitty to digest, which means they’ll get more of the nutrients they need.",

                                link: "/learning-center/cat-care/what-should-i-feed-my-kitten/A0060.html?origin=newkitten&desc=feed&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Kitten_MO"),
                                alt: "Image of a cat with a bowl of cat food",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Kitten_DT"),
                                }
                            },
                            {
                                title: "Taking Care of My New Cat",
                                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",

                                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newkitten&desc=care&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_MO"),
                                alt: "Image of a cat in a basket of yarn",
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
                        isInverted: false,
                        tileSections: [
                            {
                                title: "Food & Treats",
                                subTitle: "",
                                link: "/cat/food-and-treats/?pmin=0.01&prefn1=customCatLifestage&prefv1=Adult%201-10%20yrs&origin=newadultcat&desc=foodandtreats&type=checklist",
                                imgContent: imagelink("5304200"),
                                alt: "Food & Treats",
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/cat/toys/?origin=newadultcat&desc=toys&type=checklist",
                                imgContent: imagelink("5287880"),
                                alt: "Toys",
                            },
                            {
                                title: "Litter & Accessories",
                                subTitle: "",
                                link: "/cat/litter-and-waste-disposal/?origin=newadultcat&desc=litter&type=checklist",
                                imgContent: imagelink("5219991"),
                                alt: "Litter & Accessories",
                            },
                            {
                                title: "Calming",
                                subTitle: "",
                                link: "/featured-shops/safe-travels/?pmin=0.01&prefn1=customPet&prefv1=Cat&srule=best-sellers?origin=newadult&desc=calming&type=checklist",
                                imgContent: imagelink("5294537"),
                                alt: "Calming",
                            },
                            {
                                title: "Bed & Furniture",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/?origin=newadultcat&desc=beds&type=checklist",
                                imgContent: imagelink("5305518"),
                                alt: "Bed & Furniture",
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/cat/bowls-and-feeders/?origin=newadultcat&desc=bowls&type=checklist",
                                imgContent: imagelink("5304712"),
                                alt: "Bowls & Storage",
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/cat/cleaning-and-repellents/?origin=newadultcat&desc=care&type=checklist",
                                imgContent: imagelink("5275294"),
                                alt: "Care & Cleanup",
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
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Cat-Car_DT"),
                                alt: "Icon of cat in a travel bag",
                            },
                            {
                                title: "Be patient & give time to adjust to new surroundings.​",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Cat-Meet_DT"),
                                alt: "Silhouette icon of two cats",
                            },
                            {
                                title: "Familiar food, litter & hiding places can ease the home transition.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Cat-Boost_DT"),
                                alt: "Icon of a cat scratcher",
                            },
                            {
                                title: "Scratching is a behaviour that releases stress & exercise muscles. ",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Cat-Fun_DT"),
                                alt: "Icon of cat sctraching a post",
                            },
                            {
                                title: "Keep your cat up-to-date on routine shots with your vet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Cat-Vaccine_DT"),
                                alt: "Icon of a needle",
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
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Adult_MO"),
                                alt: "Image of a cat licking its paw",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Adult_DT"),
                                }
                            },
                            {
                                title: "How to Choose the Right Cat Food",
                                desc: "There is a lot of information out there about what pet parents should or should not feed their pet cat. This can make it difficult to know what food to buy or what will help your cat thrive. There are tons of products on the market from dry cat food to wet cat food, limited ingredient cat food to natural cat food, and freeze-dried to frozen cat food, the options truly are endless. Keep reading to find out how to narrow down those choices to something that is perfect for your feline friend. ",

                                link: "/learning-center/cat-care/how-to-choose-the-right-cat-food/A0210.html?origin=newadultcat&desc=food&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Adult_MO"),
                                alt: "image of cat with bowl",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Adult_DT"),
                                }
                            },
                            {
                                title: "Taking Care of My New Cat",
                                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",

                                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newadultcat&desc=care&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Adult_MO"),
                                alt: "image of cat ",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Adult_DT"),
                                }
                            },
                            {
                                title: "How to Get Rid of Cat Fleas ",
                                desc: "Fleas are unwelcome critters that love to make homes on our pets and feed on their blood. In addition to that, these pesky insects can cause many problems for our cats. Anyone with a kitty must understand how fleas show up, how to get rid of them and how to prevent them from coming back in the future. This can save your pet from a ton of discomfort and flea-related issues. ",

                                link: "/learning-center/cat-care/how-to-get-rid-of-cat-fleas-and-keep-them-away/A0130.html?origin=newadultcat&desc=fleas&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Cat-Adult_MO"),
                                alt: "image of cat in flowers",
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
                        isInverted: false,
                        tileSections: [
                            {
                                title: "Food & Treats",
                                subTitle: "",
                                link: "/cat/food-and-treats/?pmin=0.01&prefn1=customCatLifestage&prefv1=Senior%2010%20yrs%20%26%20older&origin=newseniorcat&desc=foodandtreats&type=checklist",
                                imgContent: imagelink("5261197"),
                                alt: "Food & Treats",
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/cat/toys/?origin=newseniorcat&desc=toys&type=checklist",
                                imgContent: imagelink("5264311"),
                                alt: "Toys",
                            },
                            {
                                title: "Litter & Accessories",
                                subTitle: "",
                                link: "/cat/litter-and-waste-disposal/?origin=newseniorcat&desc=litter&type=checklist",
                                imgContent: imagelink("5140112"),
                                alt: "Litter & Accessories",
                            },
                            {
                                title: "Calming",
                                subTitle: "",
                                link: "/featured-shops/safe-travels/?pmin=0.01&prefn1=customPet&prefv1=Cat&srule=best-sellers?origin=newsenior&desc=calming&type=checklist",
                                imgContent: imagelink("5294537"),
                                alt: "Calming",
                            },
                            {
                                title: "Bed & Furniture",
                                subTitle: "",
                                link: "/cat/beds-and-furniture/?origin=newseniorcat&desc=beds&type=checklist",
                                imgContent: imagelink("5142003"),
                                alt: "Bed & Furniture",
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/cat/bowls-and-feeders/?origin=newseniorcat&desc=bowls&type=checklist",
                                imgContent: imagelink("5320986"),
                                alt: "Bowls & Storage",
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/cat/cleaning-and-repellents/?origin=newseniorcat&desc=care&type=checklist",
                                imgContent: imagelink("5139138"),
                                alt: "Care & Cleanup",
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
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Cat-Car_DT"),
                                alt: "Icon of cat in a travel bag",
                            },
                            {
                                title: "Be patient & give time to adjust to new surroundings.​",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Cat-Meet_DT"),
                                alt: "Silhouette icon of two cats",
                            },
                            {
                                title: "Familiar food, litter & hiding places can ease the home transition.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Cat-Boost_DT"),
                                alt: "Icon of a cat scratcher",
                            },
                            {
                                title: "Scratching is a behaviour that releases stress & exercise muscles. ",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Cat-Fun_DT"),
                                alt: "Icon of cat sctraching a post",
                            },
                            {
                                title: "Keep your cat up-to-date on routine shots with your vet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Cat-Vaccine_DT"),
                                alt: "Icon of a needle",
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
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Senior_MO"),
                                alt: "Image of a cat licking its paw",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Cat-Senior_DT"),
                                }
                            },
                            {
                                title: "How to Choose the Right Cat Food",
                                desc: "There is a lot of information out there about what pet parents should or should not feed their pet cat. This can make it difficult to know what food to buy or what will help your cat thrive. There are tons of products on the market from dry cat food to wet cat food, limited ingredient cat food to natural cat food, and freeze-dried to frozen cat food, the options truly are endless. Keep reading to find out how to narrow down those choices to something that is perfect for your feline friend. ",

                                link: "/learning-center/cat-care/how-to-choose-the-right-cat-food/A0210.html?origin=newseniorcat&desc=food&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Senior_MO"),
                                alt: "image of cat with bowl",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Cat-Senior_DT"),
                                }
                            },
                            {
                                title: "Taking Care of My New Cat",
                                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",

                                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newseniorcat&desc=care&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Senior_MO"),
                                alt: "image of cat ",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Cat-Senior_DT"),
                                }
                            },
                            {
                                title: "How to Get Rid of Cat Fleas ",
                                desc: "Fleas are unwelcome critters that love to make homes on our pets and feed on their blood. In addition to that, these pesky insects can cause many problems for our cats. Anyone with a kitty must understand how fleas show up, how to get rid of them and how to prevent them from coming back in the future. This can save your pet from a ton of discomfort and flea-related issues. ",

                                link: "/learning-center/cat-care/how-to-get-rid-of-cat-fleas-and-keep-them-away/A0130.html?origin=newseniorcat&desc=fleas&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Cat-Senior_MO"),
                                alt: "image of cat in flowers",
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
                readMoreLink: "https://services.petsmart.ca/grooming?origin=newcat&desc=grooming&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC1_NPP-Cat-GRM_DT"),
                alt: "Image of cat being brushed",
            },
            {
                title: "PetsHotel",
                subTitle: "Reserve their overnight stay with us.",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/petshotel?origin=newcat&desc=petshotel&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC2_NPP-Cat-HOTEL_DT"),
                alt: "Image of cat laying in a blue bed",
            },

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
        imgContent: imagelink("WEB-1337901-Jun22_PROMO-BL_NPP-Cat-AdoptKit_MO"),// imagelink(""),
        alt: "Image of cat with toys and of adoption kit",
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
        variant: "1-3up",
        displaySettings: {
            columnCount: 1,
            rowCount: 3,
        },
        desktop: {
            displaySettings: {
                columnCount: 3,
                rowCount: 1,
            },
        },
        isInverted: false,
        tileSections: [
            {
                title: "Adopt with PetSmart Charities of Canada",
                subTitle: "Find a pet, pet adoption events and more.",
                readMoreText: "", // linkLabel
                readMoreLink: "https://petsmartcharities.ca/adopt-a-pet?origin=newcat&desc=charities&type=anything", // link
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC1_NPP-Charities_CAN_MO"),
                alt: "PetSmart Charities of Canada",
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC1_NPP-Charities_CAN_DT"),
                }
            },
            {
                title: "Same-Day Delivery",
                subTitle: "Get it when you need it. Powered by DoorDash.",
                readMoreText: "", // linkLabel
                readMoreLink: "https://www.petsmart.ca/featured-shops/same-day-delivery/?origin=newcat&desc=sameday&type=anything", // link
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC2_NPP-Doordash_CAN_MO"),
                alt: "Same-Day Delivery",
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC2_NPP-Doordash_CAN_DT"),
                }
            },
            {
                title: "Autoship",
                subTitle: "Never run out of their essentials with convenient automatic delivery.",
                readMoreText: "Read more", // linkLabel
                readMoreLink: "/featured-shops/auto-ship/?origin=newcat&desc=autoship&type=anything", // link
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC3_NPP-Cat-AdoptShip_MO"),
                alt: "Image of a cat laying in a box",
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC3_NPP-Cat-AutoShip_DT"),
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

