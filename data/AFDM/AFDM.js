//DPT-4720 2023 AFDM Week 3 Dog Food 8/14 - 8/21 lu: 08.07.2023-RR

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
    {
        containerName: "promoBannerMain",
        className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
        size: "md",
        title: "Dog food",
        imgContent: imagelink("WEB-1652300-Feb23_CAT-BNR2_Dog-CONS-Dry_MO"),
        desktop: { imgContent: imagelink("WEB-1652300-Feb23_CAT-BNR2_Dog-CONS-Dry_DT") },
        alt: "Shop dog food",
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
                title: "3X pts on all Blue Buffalo dog food & treats",
                desc: "It's Anything for Dogs Month! Earn 3X Treats points on all Blue Buffalo dog food & treats in stores or online through 8/20/23 when you activate this offer.",
                imgContent: imagelink("WEB-1901150-Aug23_OCG2_AT4Dog-W1_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1901150-Aug23_OCG2_AT4Dog-W1_DT"),
                },
                alt: "3X pts on all Blue Buffalo dog food & treats",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 8/20, see terms",
                offerId: "C2329CPNBLUEBF3XD",
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/blue-buffalo/dog-and-cat/dog/?origin=consumables&desc=loyalty-card&type=3x-points-blue-buffalo#tabs-1",
                    skuList: "(5338760,5338763,5127109,5150012,5157105,5151357,5338786,5323234,5173389,5200131,5166811,5211977,5173366,5108736,5221703,5168390,5341592)",
                }
            },
            {
                title: "5X points on all Simply Nourish dog food & treats",
                desc: "It's Anything for Dogs Month! Earn 5X Treats points on all Simply Nourish dog food & treats in stores or online through 8/31/23 when you activate this offer.",
                imgContent: imagelink("WEB-1901150-Aug23_OCG3_AT4Dog-W1_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1901150-Aug23_OCG3_AT4Dog-W1_DT"),
                },
                alt: "5X points on all Simply Nourish dog food & treats",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 8/31, see terms",
                offerId: "C2329CPNSIMNOU5XD",
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/simply-nourish/dog/?origin=consumables&desc=loyalty-card&type=5x-points-simply-nourish",
                    skuList: "(5286960,5319719,5286937,5297667,5319678,5332988,5306421,5287441,5286046,5285953,5305527,5286374,5286474,5286153,5321653)",
                }
            },
        ],
    },

]

export default data_container;

