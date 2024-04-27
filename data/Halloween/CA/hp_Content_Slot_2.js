// DPT- 3436, 2617  CA Halloween 2022 main landing page, lu: 08.22.2022.JR
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
        // HAPPY HAUNTING - Featured Media
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
                link: "/featured-shops/halloween/dog-shop/?origin=halloween&type=visnav&desc=devilish dog",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_Halloween_DT"),
                },
                alt: "Scaredy Cat Shop",
                title: "Scaredy Cat Shop",
                link: "/featured-shops/halloween/cat-shop/?origin=halloween&type=visnav&desc=scaredy cat",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_Halloween_DT"),
                },
                alt: "Little Critter Shop",
                title: "Little Critter Shop",
                link: "/featured-shops/halloween/reptile-and-small-pet-shop/?origin=halloween&type=visnav&desc=litter critter",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_Halloween_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_Halloween_DT"),
                },
                alt: "Spooky Fish Shop",
                title: "Spooky Fish Shop",
                link: "/featured-shops/halloween/fish-shop/?origin=halloween&type=visnav&desc=spooky fish",
            },
        ],
    },
    {
        // FAVORITE COSTUMES - Badged Product Carousel (API CALL)
        containerName: "ProductCarousel",
        title: "Favourite Costumes",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5328820,5328947,5329187,5328832,5328948,5328901,5328826,5328951,5329185,5328514,5329477,5329217)", // comma without space between skus
        },
    },
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
                link: "/featured-shops/halloween/dog-shop/bandanas-bows-and-hats+costumes+dresses+harnesses+hoodies+pajamas+t-shirts-and-tank-tops/?origin=halloween&type=visnav&desc=dog%20costumes#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Costumes_DT"),
                },
                alt: "Cat costumes",
                title: "Cat costumes",
                link: "/featured-shops/halloween/cat-shop/costumes+hoodies/?origin=halloween&type=visnav&desc=cat%20costumes#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Costumes_DT"),
                },
                alt: "Reptile costumes",
                title: "Reptile costumes",
                link: "/featured-shops/halloween/reptile-and-small-pet-shop/costumes/?prefn1=customPet&prefv1=Reptile&origin=halloween&type=visnav&desc=reptile costumes",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Costumes_DT"),
                },
                alt: "Small pet costumes",
                title: "Small pet costumes",
                link: "/featured-shops/halloween/reptile-and-small-pet-shop/costumes/?prefn1=customPet&prefv1=Small%20Pet&origin=halloween&type=visnav&desc=small pet costumes",
            },
        ],
    },
    { // B-Y-SPOOKY-T - Promo banner - medium
        containerName: "PromoBanner",
        title: "Build a spooky tank to fright & delight!",
        href: "/build-your-tank-ca.html?origin=halloween&type=promobanner&desc=buildyourtank",
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
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Save_CA_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-1_HLWN-Save_CA_DT"),
                },
                alt: "Treats from $3.99",
                title: "Treats from $3.99",
                link: "/featured-shops/halloween/biscuits-and-bakery+chewy-treats+treats/?pmin=3.99?origin=halloween&type=visnav&desc=treats%20special#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Save_CA_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Save_CA_DT"),
                },
                alt: "Toys from $4.99",
                title: "Toys from $4.99",
                link: "/featured-shops/halloween/toys/?pmin=4.99&origin=halloween&type=visnav&desc=toys special#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Save_CA_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Save_CA_DT"),
                },
                alt: "Collars, harnesses & leashes from $9.99",
                title: "Collars, harnesses & leashes from $9.99",
                link: "/featured-shops/halloween/collars+harnesses+leashes/?pmin=9.99&origin=halloween&type=visnav&desc=gear special#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Save_CA_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Save_CA_DT"),
                },
                alt: "Costumes & apparel from $15.99",
                title: "Costumes & apparel from $15.99",
                link: "/featured-shops/halloween/bandanas-bows-and-hats+costumes+dresses+hoodies+pajamas+t-shirts-and-tank-tops/?pmin=15.99&origin=halloween&type=visnav&desc=apparel%20special#tabs-1",
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
            skuList: "(5328398,5329294,5328973,5328846,5328392,5326513,5328976,5328844,5328396,5328974)", // comma without space between skus
        },
    },
    {
        // SERVICES PROMO - Promo Banner - Large
        // 10.01 - continuous
        containerName: "promoBannerLarge",
        className: "halloween-promo-banner", // Temporary Halloween class style to align to creative recieved
        title: "Halloween Salon Special",
        subTitle: "Add our wicked upgrade with lots of goodies to your pup's bath or groom",
        link: "https://services.petsmart.ca/grooming/?origin=halloween&desc=special&type=services",
        ctaText: "Book now",
        cta: true,
        isInverted: false,
        imageInfo: {
            url: imagelink("WEB-1460294-Sept22_PROMO-LB_HLWN-Salon_CA_MO"),// imagelink(""),
            alt: "Halloween Salon Special Only $30 - add wicked goodies to your pup's bath or groom",
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1460294-Sept22_PROMO-LB_HLWN-Salon_CA_DT"),// imagelink(""),
                alt: "Halloween Salon Special Only $30 - add wicked goodies to your pup's bath or groom",
            },
        }
    },
    {
        // FREE SAME-DAY DELIVERY - Product Carousel - Storytelling (API CALL)
        containerName: "ExclusiveOffer",
        title: "FREE Same-Day Delivery",
        shopLink: "/featured-shops/same-day-delivery/?origin=halloween&type=carousel&desc=same day delivery",
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
            skuList: "(5329028,5331882, 5328406,5328529,5328361,5331483,5328310,5328693,5328621,5329217)", // comma without space between skus
        },
    },
    {
        // FAVOURITE CHARACTER SHOP - Card 1-2-4up
        containerName: "GridDisplay",
        variant: "1-2-4up",
        title: "Favourite Character Shop",
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
                link: "/featured-shops/fan-shop/disney/hocus-pocus/?origin=halloween&type=character&desc=disney hocus pocus",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-2_HLWN-Character_DT"),
                },
                alt: "Willy Wonka",
                title: "Willy Wonka",
                link: "/featured-shops/fan-shop/willy-wonka/?origin=halloween&type=character&desc=willywonka",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-3_HLWN-Character_DT"),
                },
                alt: "Star Wars&#8482;",
                title: "Star Wars&#8482;",
                link: "/featured-shops/fan-shop/star-wars/?origin=halloween&type=character&desc=starwars",
            },
            {
                imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Character_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1460294-Sept22_4CRD-4_HLWN-Character_DT"),
                },
                alt: "Disney Villains",
                title: "Disney Villains",
                link: "/featured-shops/fan-shop/disney/disney-villains/?origin=halloween&type=character&desc=disney villains",
            },
        ],
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