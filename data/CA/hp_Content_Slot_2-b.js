//DPT-4833 CA HP FW34 - 09.18 - 09.21 lu: 09.08.2023-JC


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
        isInverted: true,
        bgColor: "#DD2834",
        alt: "Image of white and brown dog",
        alt2: "Image of white, black and brown cat",
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
    //     isInverted: false,
    //     tileSections: [
    //         {
    //             href: '/dog/food/dry-food/?origin=home&desc=spot1&type=hpstory',
    //             imgAlt: 'Dry Dog Food',
    //             imgContent: imagelink("WEB-23-1935158-CA_August_Homepage_App-dryfood_DT"),
    //             title: 'Dry Dog Food',
    //             // bodyCopy: "Premium cat food & treats",
    //         },
    //         {
    //             href: '/cat/food-and-treats/wet-food/?origin=home&desc=spot2&type=hpstory',
    //             imgAlt: 'Wet Cat Food',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS2_CONS_DT"),
    //             title: 'Wet Cat Food',
    //             // bodyCopy: "Feed healthy for life",
    //         },
    //         {
    //             href: '/dog/bowls-and-feeders/?origin=home&desc=spot3&type=hpstory',
    //             imgAlt: 'Dog Bowls & Feeders',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS3_HG_DT"),
    //             title: 'Dog Bowls & Feeders',
    //             // bodyCopy: "Treat them well",
    //         },

    //         {
    //             href: '/small-pet/food-treats-and-hay/?origin=home&desc=spot4&type=hpstory',
    //             imgAlt: '',
    //             imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS4_CONS_DT"),
    //             title: 'Small Pet food, treats & hay',
    //             // bodyCopy: "Making healthy taste good",
    //         },
    //     ],
    // },
]

export default data_container;