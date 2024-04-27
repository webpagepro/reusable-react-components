//DPT-4721 2023 AFDM Week 4 Dry Dog Food 8/21 - 8/28 lu: 08.10.2023-RR

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}

let imagelinkPreset = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}?$HP3101$` //use when intrinsic sizes from scene 7 are original/large resolutions i.e. 2000x2000, etc
}

// If we have to use gif instead of images
let contentlink = (sku) => {
    return `https://s7d2.scene7.com/is/content/PetSmart/${sku}`
}

let data_container = [
    {// Dog dry food - Category Banner
        containerName: "promoBannerMain",
        className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
        size: "md",
        title: "Dry dog food",
        imgContent: imagelink("WEB-1652300-Feb23_CAT-BNR2_Dog-CONS-Dry_MO"),
        desktop: { imgContent: imagelink("WEB-1652300-Feb23_CAT-BNR2_Dog-CONS-Dry_DT") },
        alt: "Shop dry dog food",
        isInverted: true,
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "Anything for Dogs Month",
        desc: "Get more bark for your buck when you activate & shop throughout August.",
        displayLink: true,
        optionalText: true,
        truncateLines: 0,
        linkLabel: "",
        variant: "2up",
        activateOffers: true,
        cardType: "reward",
        truncateSetting: {
            lineBreak: 2,
            desktop: { lineBreak: 2, }
        },
        tileSections: [
            {
                title: "5X pts on all Wellness dog food & treats",
                desc: "It's Anything for Dogs Month! Earn 5X Treats points on all Wellness dog food & treats in stores or online through 8/27/23 when you activate this offer.",
                imgContent: imagelink("WEB-1901150-Aug23_OCG3_AT4Dog-W1_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1901150-Aug23_OCG3_AT4Dog-W1_DT"),
                },
                alt: "5X pts on all Wellness dog food & treats",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 8/27, see terms",
                offerId: "C2330CPNWELL5XD", // "C1910MK2XRCANUS",
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/wellness/dog/?origin=consumables&desc=loyalty-card&type=5x-points-wellness",
                    skuList: "(5153469,5249049,5306054,5153906,5153720,5322981,5153537,5249052,5326123,5220090,5266170,5255832)",
                }
            },
            {
                title: "3X points on Hill's Science Diet dog food & treats",
                desc: "It's Anything for Dogs Month! Earn 3X points on Hill's Science Diet dog food & treats through 8/31/23 when you activate this offer.",
                imgContent: imagelink("WEB-1901150-Aug23_OCG2_AT4Dog-W1_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1901150-Aug23_OCG2_AT4Dog-W1_DT"),
                },
                alt: "3X points on Hill's Science Diet dog food & treats",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 8/31, see terms",
                offerId: "C2327CPNHILLS3XD", // "C1915CRMREPACQD",
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/hills-science-diet/dog/?desc=tile6up&type=dog/?origin=consumables&desc=loyalty-card&type=3x-points-hills",
                    skuList: "(5242066,5266809,5286296,5166487,5221586,5202877,5266810,5210085,5246994,5117274,5237820,5209634,1011752,5151450,5221588,5092281,5166489)",
                }
            },
            
        ],
    },

]

export default data_container;
