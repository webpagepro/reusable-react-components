//DPT-4702 + 4703 AFCM Week 5 - 07.24 - 08.01 lu: 07.14.2023-JR

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
    // {//Cat Food & Treats - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop Cat Food & Treats",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR1_Cat-Food-Treats_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR1_Cat-Food-Treats_DT") },
    //     alt: "Shop Cat Food & Treats",
    //     isInverted: true,
    // },
    // {//Cat Dry food - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop Dry Cat Food",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR2_Cat-Dry_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR2_Cat-Dry_DT") },
    //     alt: "Shop Dry Cat Food",
    //     isInverted: true,
    // },
    // {//Cat wet food - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop Wet Cat Food",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR3_Cat-Wet_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR3_Cat-Wet_DT") },
    //     alt: "Shop Wet Cat Food",
    //     isInverted: true,
    // },
    // {//Cat Treats - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop Cat Treats",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR4_Cat-Treats_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR4_Cat-Treats_DT") },
    //     alt: "Shop Cat Treats",
    //     isInverted: true,
    // },
    // {//Cat Food Toppers - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop Cat Food Toppers",
    //     imgContent: imagelink("WEB-1853110_May23_LPB_Toppers_MO"),
    //     desktop: { imgContent: imagelink("WEB-1853110_May23_LPB_Toppers_DT") },
    //     alt: "Shop Cat Food Toppers",
    //     isInverted: true,
    // },
    // {//Cat Kitten Food - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop Kitten Food",
    //     imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR6_Kitten-Food_MO"),
    //     desktop: { imgContent: imagelink("WEB-1580213-Nov22_CAT-BNR6_Kitten-Food_DT") },
    //     alt: "Shop Kitten Food",
    //     isInverted: true,
    // },
    // {   //Litter and Waste Disposal - Category Banner
    //     containerName: "promoBannerMain",
    //     className: "c-promo-banner--category",      //category banner class style overrides for promoBannerMain
    //     size: "md",
    //     title: "Shop cat litter",
    //     imgContent: imagelink("WEB-1457159-Aug22_CAT-BNR_Litter-LP_MO"),
    //     desktop: { imgContent: imagelink("WEB-1457159-Aug22_CAT-BNR_Litter-LP_DT") },
    //     alt: "Shop cat litter",
    //     isInverted: false,
    // },
    {   
        //Landing Page Banner
        containerName: "LPBanner",
        title: "Shop Cat Food Toppers",
        // subtitle: "Litter, boxes, liners & more",
        textCentered: false,     //centers text for centered banner variant default?: left
        isInverted: true,
        backgroundColor: "#FFFFFF",
        alt: "Cat litter & supplies",
        imageInfo: { url: imagelink("WEB-1853110_May23_LPB_Toppers_MO") },
        desktop: { imageInfo: { url: imagelink("WEB-1853110_May23_LPB_Toppers_DT") } },
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "Special offers",
        desc: "Activate & shop these Anything for Cats Month deals online & in stores.",
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
                title: "Earn 5X points on Cat Made by Nacho & more",
                desc: "It's Anything for Cats Month! Earn 5X Treats points on favorite brands: Made by Nacho, Wellness, Tiki Cat, BLUE Buffalo, and Hill's Science Diet in stores or online thru 7/31/23 when you activate this offer.",
                imgContent: imagelink("WEB-1816855-Jul23_OCG6_AFCM-TK_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1816855-Jul23_OCG6_AFCM-TK_DT"),
                },
                alt: "Earn 5X points on Cat Made by Nacho & more",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 7/31, see terms",
                offerId: "C2326LPNFAVBR5XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/cat/food-and-treats/blue-buffalo+hills-science-diet+made-by-nacho+tiki-cat+wellness/?pmin=0.01&srule&origin=consumables&desc=loyalty-card&type=5x-treats-points#tabs-1",
                    skuList: "(5209028,5307826,5280619,5298959,5322031,5200112,5298952,5173161,5312835,5253229,5310401,5322943)",
                }
            },
            {
                title: "Spend $20+ on Simply Nourish/Authority, earn 2K pts",
                desc: "It's Anything for Cats Month! Spend $20 or more on Simply Nourish and Authority treats and food in stores or online, earn 2,000 Treats points thru 7/31/23 when you activate this offer. One-time only.",
                imgContent: imagelink("WEB-1816855-Jul23_OCG9_AFCM-TK_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1816855-Jul23_OCG9_AFCM-TK_DT"),
                },
                alt: "Spend $20+ on Simply Nourish/Authority, earn 2K pts",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 7/31, see terms",
                offerId: "C2326LPFPB202KD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/cat/food-and-treats/authority+simply-nourish/?pmin=0.01&srule&origin=consumables&desc=loyalty-card&type=simply-nourish-authority-2k-treats-points#tabs-1",
                    skuList: "(5279240,5278732,5287616,5286749,5309039,5278723,5286924,5287806,5309311,5278734,5286512,5304202,5278964)",
                }
            },
        ],
    },

]

export default data_container;

