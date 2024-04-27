// DPT- 3689 Injection 10/15 - 10/24, 2022 US Halloween main landing page, lu: 10.12.2022.JR
/*
 Structure of Pet landing page data
 data_container
    |
    |---- 1. Sections
            |
            |---- 1. Featured Banner (split-panel, video right)
            |
            |---- 2. Card- 4up, [variant] (Halloween Pet Shops)
            |       |
            |       |---- 1. tileSections
            |
            |---- 3. Product Carousel, [variant] (Top OTBs)
            |
            |---- 4. Card - 4up, [variant] (Shop costumees)
            |       |
            |       |---- 1. tileSections
            |
            |---- 5. Promo Banner - [small] (section title)
            |
            |---- 6. Card - 4up, [variant] (Halloween specials)
            |       |
            |       |---- 1. tileSections
            |
            |---- 7. Product Carousel, [variant] (Associate Picks)
            |
            |---- 8. Card - 4up, [variant] (Character shop)
            |       |
            |       |---- 1. tileSections
            |
            |---- 9. Card - 4up, [variant] (Halloween specials)
            |       |
            |       |---- 1. tileSections
            |
            |---- 10. Product carousel, [exclusive offers?] (section title)
            |
            |---- 11. Card - 3up, [article] (section title)
            |       |
            |       |---- 1. tileSections
*/
/* eslint-disable no-mixed-spaces-and-tabs */
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    {
        // 10.01 - 10.31 HAPPY HAUNTING - Featured Media
        containerName: "featuredSection",
        title: "The Halloween Shop",
        subTitle: "Tricks, treats, costumes & goodies for all your little monsters",
        isInverted: true,
        mediaInfo: {
            url: {
                imgContent: imagelink("WEB-1460294-Sept22_FBI_Halloween-v2_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_FBI_Halloween-V2_DT"),
                }
            },
            alt: "The Halloween Shop - tricks, treats, costumes & goodies for all your little monsters",
            type: "image", // type can be any supported media like image, video etc
        },
    },
    // {
    //     // 10.15 - 10.24 Extra 25% off all Halloween - Featured Media
    //     containerName: "featuredSection",
    //     title: "EXTRA 25% off all Halloween",
    //     subTitle: "Shop tricks, treats & more thru 10/23, terms apply*",
    //     isInverted: true,
    //     mediaInfo: {
    //         url: {
    //             imgContent: imagelink("WEB-1460294-Sept22_FBI_Halloween-v2_MO"),
    //             desktop: {
    //                 imgContent: imagelink("WEB-1460294-Sept22_FBI_Halloween-V2_DT"),
    //             }
    //         },
    //         alt: "Shop tricks, treats & more thru 10/23",
    //         type: "image", // type can be any supported media like image, video etc
    //     },
    // },
    {
        // HALLOWEEN PET SHOPS - Card 1-2-4up
        containerName: "GridDisplay",
        variant: "1-2-4up",
        title: "Halloween pet shops",
        // shopLink:"REPLACE TARGET URL",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_Halloween_DT"),
                },
                alt: "Devilish Dog Shop",
                title: "Devilish Dog Shop",
                link: "/featured-shops/halloween/dog-shop/?origin=halloween&desc=dogshop&type=petshops",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_Halloween_DT"),
                },
                alt: "Scaredy Cat Shop",
                title: "Scaredy Cat Shop",
                link: "/featured-shops/halloween/cat-shop/?origin=halloween&desc=catshop&type=petshops",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_Halloween_DT"),
                },
                alt: "Little Critter Shop",
                title: "Little Critter Shop",
                link: "/featured-shops/halloween/reptile-and-small-pet-shop/?origin=halloween&desc=reptileandsmallpetshop&type=petshops",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_Halloween_DT"),
                },
                alt: "Spooky Fish Shop",
                title: "Spooky Fish Shop",
                link: "/featured-shops/halloween/fish-shop/?origin=halloween&desc=fishshop&type=petshops",
                alignText: 'left',
            },
        ],
    },
    {
        // FAVORITE COSTUMES - Badged Product Carousel (API CALL)
        containerName: "ProductCarousel",
        title: "Favorite Costumes",
        shopLink: "",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5328820,5328947,5329187,5328832,5328948,5329182,5328826,5328951,5329185,5328514,5329477,5329217)", // comma without space between skus
        },
    },
    // {
    //     //  10/15 - 10/24 Hot costumes and toys - Badged Product Carousel (API CALL)
    //     containerName: "ProductCarousel",
    //     title: "Hot costumes and toys",
    //     shopLink: "",
    //     shouldCallApi: true,
    //     isCarouselOnly: true,
    //     displaySettings: {
    //         desktop: 6,
    //         tablet: 3.5,
    //         mobile: 2.5
    //     },
    //     tileSections: {
    //         skuList: "(5328514,5328400,5328947,5328397,5329217,5328826,5328398,5328951,5328399,5329182,5329185,5329477)", // comma without space between skus
    //     },
    // },
    {
        // SHOP COSTUMES - Card 1-2-4up
        containerName: "GridDisplay",
        variant: "1-2-4up",
        title: "Costume shops",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Costumes_DT"),
                },
                alt: "Dog costumes",
                title: "Dog costumes",
                link: "/featured-shops/halloween/dog-shop/costumes/?origin=halloween&desc=dogcostumes&type=costumes#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Costumes_DT"),
                },
                alt: "Cat costumes",
                title: "Cat costumes",
                link: "/featured-shops/halloween/cat-shop/costumes/?origin=halloween&desc=catcostumes&type=costumes#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Costumes_DT"),
                },
                alt: "Reptile costumes",
                title: "Reptile costumes",
                link: "/featured-shops/halloween/reptile-and-small-pet-shop/costumes/reptile/?origin=halloween&desc=reptilecostumes&type=costumes#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Costumes_DT"),
                },
                alt: "Small pet costumes",
                title: "Small pet costumes",
                link: "/featured-shops/halloween/reptile-and-small-pet-shop/costumes/small-pet/?origin=halloween&desc=smallpetcostumes&type=costumes#tabs-1",
                alignText: 'left',
            },
        ],
    },
    { // B-Y-SPOOKY-T - Promo banner - medium
        containerName: "PromoBanner",
        title: "Build a spooky tank to fright & delight!",
        href: "/build-your-tank-ca.html?origin=halloween&desc=byt&type=banner",
        imgContent: imagelink("WEB-1460294-Sept22_PROMO-MB_HLWN-BYT_MO"),
        desktop: {
            imgContent: imagelink("WEB-1460294-Sept22_PROMO-MB_HLWN-BYT_DT"),
        },
        ctaText: "Get started",
        alt: "Build a spooky tank to fright & delight!",
        isInverted: true,
    },
    {
        // HALLOWEEN SPECIALS - Card 1-2-4up
        containerName: "GridDisplay",
        title: "Halloween savings",
        variant: "1-2-4up",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Save_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Save_DT"),
                },
                alt: "Toys under $5",
                title: "Toys under $5",
                link: "/featured-shops/halloween/toys/?pmin=0.00&pmax=5.00&origin=halloween&desc=toys&type=specials#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Save_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Save_DT"),
                },
                alt: "Treats under $5",
                title: "Treats under $5",
                link: "/featured-shops/halloween/biscuits-and-bakery+treats/?pmin=0.00&pmax=5.00&origin=halloween&desc=treats&type=specials#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Save_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Save_DT"),
                },
                alt: "Gear under $15",
                title: "Gear under $15",
                link: "/featured-shops/halloween/collars+harnesses+leashes/?pmin=0.00&pmax=15.00&origin=halloween&desc=collars&type=specials#tabs-1",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Save-v2_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Save-v2_DT"),
                },
                alt: "Costumes under $20",
                title: "Costumes under $20",
                link: "/featured-shops/halloween/costumes/?pmin=0.00&pmax=20.00&origin=halloween&desc=costumes&type=specials#tabs-1",
                alignText: 'left',
            },
        ],
    },
    {
        // TRICKS & TREATS (API CALL) - Badged Product Carousel
        containerName: "ProductCarousel",
        title: "Tricks & treats",
        shopLink: "",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5328398,5329294,5327629,5328973,5328846,5328392,5326513,5328976,5328844,5328396,5326599,5328974)", // comma without space between skus
        },
    },
    {
        // CHARACTER SHOP - Card 1-2-4up
        containerName: "GridDisplay",
        variant: "1-2-4up",
        title: "Favorite Character Shop",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Character_DT"),
                },
                alt: "Disney Hocus Pocus",
                title: "Disney Hocus Pocus",
                link: "/featured-shops/fan-shop/disney/hocus-pocus/?origin=halloween&desc=hocuspocus&type=character",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Character_DT"),
                },
                alt: "Willy Wonka",
                title: "Willy Wonka",
                link: "/featured-shops/fan-shop/willy-wonka/?origin=halloween&desc=willywonka&type=character",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Character_DT"),
                },
                alt: "Star Wars&#8482;",
                title: "Star Wars&#8482;",
                link: "/featured-shops/fan-shop/star-wars/?origin=halloween&desc=starwars&type=character",
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Character_DT"),
                },
                alt: "Disney Villains",
                title: "Disney Villains",
                link: "/featured-shops/fan-shop/disney/disney-villains/?origin=halloween&desc=disneyvillians&type=character",
                alignText: 'left',
            },
        ],
    },
    {
        // FREE SAME-DAY DELIVERY - Product Carousel - Storytelling (API CALL)
        containerName: "ExclusiveOffer",
        title: "FREE Same-Day Delivery",
        shopLink: "/featured-shops/same-day-delivery/?origin=halloween&desc=freesdd&type=carousel",
        shouldCallApi: true,
        isCarouselOnly: false,
        tileSections: {
            promoCard: { // promo card
                imgContent: imagelink("WEB-1460294-Sept22_PC-S1_HLWN-Decor_MO"),
                promoAlt: "Get Halloween goodies in hair-raising speed with FREE Same-Day Delivery by DoorDash",
                promoTitle: "Get it now with FREE Same-Day Delivery",
                promoCopy: "Why wait? DoorDash gets you in the Halloween spirit with hair-raising speed.",
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_PC-S1_HLWN-Decor_DT"),
                },
            },
            skuList: "(5328543,5328397,5328514,5328494,5328742,5329294,5329295,5329284,5328980,5329217,5328483,5328947)", // comma without space between skus
        },
    },
    {
        // HALLOWEEN RESOURCES - PromoCardScroll/Card 3up - Article
        containerName: "PromoCardScroll",
        title: "Halloween resources",
        desc: "Tips & recipes for a safe & fun Halloween with your pet",
        displayLink: true,
        truncateLines: 2,
        linkLabel: "Read more",
        tileSections: [
            {
                imgContent: imagelink("WEB-1434702-Aug22_3COL-LA1_Halloween-SL-Tricks_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1434702-Aug22_3COL-LA1_Halloween-SL-Tricks_DT"),
                },
                alt: "Teach your dog some Halloween tricks",
                title: "Teach Your Dog Some Halloween Tricks",
                desc: "Do you dread Halloween, not because of ghosts and goblins, but because your dog barks at trick-or-treaters and guests approaching your door?",
                link: "/learning-center/dog-care/teach-your-dog-some-halloween-tricks/A0236.html?fdid=dog&origin=halloween&desc=tricks&type=article"
            },
            {
                imgContent: imagelink("WEB-1434702-Aug22_3COL-LA2_Halloween-SL-Safety_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1434702-Aug22_3COL-LA2_Halloween-SL-Safety_DT"),
                },
                alt: "Halloween food & decoration safety guide for pets",
                title: "Halloween Food & Decoration Safety Guide",
                desc: "We love including our pets in our holiday celebrations! Dressing them up in costumes, trick-or-treating, playing with holiday-themed toys, but it’s important to learn about the dangers associated with the holidays to ensure their safety.",
                link: "/learning-center/dog-care/halloween-food-and-decoration-safety-guide-for-pets/A0254.html?origin=halloween&desc=food&type=article"
            },
            {
                imgContent: imagelink("WEB-1434702-Aug22_3COL-LA3_Halloween-SL-Recipe_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1434702-Aug22_3COL-LA3_Halloween-SL-Recipe_DT"),
                },
                alt: "Pumpkin cookie recipe for dogs",
                title: "Pumpkin Cookie Recipe for Dogs",
                desc: "So good, it’s spooky. Celebrate fall and Halloween with your best friend and make these soft, dog-friendly cookies adapted by Bil-Jac® from Honey’s Soft Dog Treats.",
                link: "/learning-center/dog-care/pumpkin-cookie-recipe-for-dogs/A0253.html?origin=halloween&desc=cookie&type=article"
            },
        ],
    },
]
export default data_container;