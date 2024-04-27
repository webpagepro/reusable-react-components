//DPT-4615 AFCM week 1.1 - 06.26 - 7.03 lu: 06.22.2023-JR
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
    // {//Cat Food & Treats
    //     containerName: "promoBannerMain",
    //     size: "md",
    //     title: "Shop Cat Food & Treats",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR1_Cat-Food-Treats_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR1_Cat-Food-Treats_DT") },
    //     alt: "Shop Cat Food & Treats",
    //     isInverted: true,
    // },
    // {//Cat Dry food
    //     containerName: "promoBannerMain",
    //     size: "md",
    //     title: "Shop Dry Cat Food",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR2_Cat-Dry_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR2_Cat-Dry_DT") },
    //     alt: "Shop Dry Cat Food",
    //     isInverted: true,
    // },
    // {//Cat wet food
    //     containerName: "promoBannerMain",
    //     size: "md",
    //     title: "Shop Wet Cat Food",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR3_Cat-Wet_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR3_Cat-Wet_DT") },
    //     alt: "Shop Wet Cat Food",
    //     isInverted: true,
    // },
    // {//Cat Treats
    //     containerName: "promoBannerMain",
    //     size: "md",
    //     title: "Shop Cat Treats",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR4_Cat-Treats_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR4_Cat-Treats_DT") },
    //     alt: "Shop Cat Treats",
    //     isInverted: true,
    // },
    // {//Cat Food Toppers
    //     containerName: "promoBannerMain",
    //     size: "md",
    //     title: "Shop Cat Food Toppers",
    //     imgContent: imagelink("WEB-1853110_May23_LPB_Toppers_MO"),
    //     desktop: { imgContent: imagelink("WEB-1853110_May23_LPB_Toppers_DT") },
    //     alt: "Shop Cat Food Toppers",
    //     isInverted: true,
    // },
    {//Cat Kitten Food
        containerName: "promoBannerMain",
        size: "md",
        title: "Shop Kitten Food",
        imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR6_Kitten-Food_MO"),
        desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR6_Kitten-Food_DT") },
        alt: "Shop Kitten Food",
        isInverted: true,
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "Special offers",
        desc:"Activate & shop these Anything for Cats Month deals online & in stores.",
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
                title: "2X points on cat food toppers & treats",
                desc: "It's Anything for Cats Month! Earn 2X Treats points on cat food toppers and treats in stores or online thru 7/2/23 when you activate this offer.",
                imgContent: imagelink("WEB-1816855-Jul23_OCG1_AFCM-TK_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1816855-Jul23_OCG1_AFCM-TK_DT"),
                },
                alt: "Get 3 times Treats Points on Tiki Cat",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 7/2, see terms",
                offerId: "C2322LPNCATTT2XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/cat/food-and-treats/treats/?origin=consumables&desc=loyalty-card&type=toppers-treats",
                    skuList: "(5321198,5298891,5338053,5279756,5298945,5334051,5322009,5001028,5337994,5310403,5334053,5282018)",
                }
            },
            {
                title: "Earn 250 pts on Weruva singles or 2K pts on packs",
                desc: "It's Anything for Cats Month! Earn 250 Treats points on Weruva individual cans or pouches or 2,000 Treats points on multi-packs thru 7/31/23 when you activate this offer.",
                imgContent: imagelink("WEB-1816855-Jul23_OCG2_AFCM-TK_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1816855-Jul23_OCG2_AFCM-TK_DT"),
                },
                alt: "Get 3 times Treats Points on Full Cheeks",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 7/31, see terms",
                offerId: "C2317LPFWERUVAD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/weruva/?origin=consumables&desc=loyalty-card&type=weruva",
                    skuList: "(5338995,5339112,5339131,5339126,5339135,5339126,5338988,5339017,5338797,5339016,5339004,5339022)",
                }
            },
        ],
    },
    
]

export default data_container;

