//DPT-4831  CA HP FW32 - 09.05 - 09.07 lu: 08.24.2023-SU


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
        containerName: "CampaignHeroBanner",
        headline: "Get ready for our",
        titleXL: "September sale",
        title: "all month long",
        description: "Shop new deals!",
        caption: "On now through 10/1.",
        isOffer: false,
        isInverted: false,
        bgColor: "#DD2834",
        alt: "Monthlong Deals",
        alt2: "Monthlong Deals",
        href: "/featured-shops/month-long-deals-with-treats-membership/?origin=home&desc=monthlong&type=hpbanner",
        cta: true,
        ctaText: "Shop deals",
        imageInfo: { url: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_CHO_L_Monthlong_MO"), url2: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_CHO_R_Monthlong_MO") },
        desktop: {
            imageInfo: { url: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_CHO_L_Monthlong_DT"), url2: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_CHO_R_Monthlong_DT") }
        },
    },
    /**
    * Campaign 4up Grid - Stacked recipe https://xd.adobe.com/view/4a57665a-bb23-456c-9cc6-f2acaf867be5-1f04/specs/
    * Example data object reference:
    * NOTE: MARGIN Between Campaign Hero Banner & 4Up Card Requires Custom Styling
    */
    // {
    //     containerName: "campaignCard4UpStacked",
    //     variant: "2-4up",
    //     containerBgColor: "#EEEEEE",
    //     shouldCallApi: false,
    //     showShopAll: false,
    //     inverted: false,
    //     tileSections: [
    //         {
    //             href: '/sale/10-off-50-same-day-delivery/dry-food/dog/?origin=home&desc=spot1&type=hpstory#tabs-1',
    //             imgAlt: 'Dry dog food bags',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS1_CONS_DT"),
    //             title: 'Dry Dog Food',
    //             // bodyCopy: "Premium cat food & treats",
    //         },
    //         {
    //             href: '/sale/10-off-50-same-day-delivery/canned-food/cat/?origin=home&desc=spot2&type=hpstory#tabs-1',
    //             imgAlt: 'Cans of wet cat food',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS2_CONS_DT"),
    //             title: 'Wet Cat Food',
    //             // bodyCopy: "Treat them well",
    //         },
    //         {
    //             href: '/sale/10-off-50-same-day-delivery/automatic-feeders+food-and-water-bowls/dog/?origin=home&desc=spot3&type=hpstory#tabs-1',
    //             imgAlt: 'Dog waterer and bowl',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS3_HG_DT"),
    //             title: 'Dog Bowls & Feeders',
    //             // bodyCopy: "Feed healthy for life",
    //         },
    //         {
    //             href: '/sale/10-off-50-same-day-delivery/food+hay+treats/small-pet/?origin=home&desc=spot4&type=hpstory#tabs-1',
    //             imgAlt: 'Small pet hay',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS4_CONS_DT"),
    //             title: 'Small Pet Food, Treats & Hay',
    //             // bodyCopy: "Making healthy taste good",
    //         },
    //     ],
    // },
]

export default data_container;