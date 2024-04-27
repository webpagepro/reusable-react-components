//DPT-4832 CA HP FW33 - 09.11 - 09.18 lu: 09.05.2023-JenR


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
        headline: "SAVE",
        titleXL: "15%",
        title: "OFF",
        description: "when you spend $45 or more with FREE Same-Day Delivery",
        caption: "thru 9/17",
        isOffer: true,
        isInverted: true,
        bgColor: "#DD2834",
        alt: "",
        alt2: "",
        href: "/featured-shops/same-day-delivery/?origin=home&desc=SDD&type=hpbanner",
        cta: true,
        ctaText: "Shop now",
        imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO2_FreeSDD_MO"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO2_FreeSDD_MO") },
        desktop: {
            imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO2_FreeSDD_DT"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO2_FreeSDD_DT") }
        },
    },
    /**
    * Campaign 4up Grid - Stacked recipe https://xd.adobe.com/view/4a57665a-bb23-456c-9cc6-f2acaf867be5-1f04/specs/
    * Example data object reference:
    * NOTE: MARGIN Between Campaign Hero Banner & 4Up Card Requires Custom Styling
    */
    {
        containerName: "campaignCard4UpStacked",
        variant: "2-4up",
        containerBgColor: "#EEEEEE",
        shouldCallApi: false,
        showShopAll: false,
        isInverted: false,
        tileSections: [
            {
                href: '/dog/food/dry-food/?origin=home&desc=spot1&type=hpstory',
                imgAlt: 'Dry Dog Food',
                imgContent: imagelink("WEB-23-1935158-CA_August_Homepage_App-dryfood_DT"),
                title: 'Dry Dog Food',
                // bodyCopy: "Premium cat food & treats",
            },
            {
                href: '/cat/food-and-treats/wet-food/?origin=home&desc=spot2&type=hpstory',
                imgAlt: 'Wet Cat Food',
                imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS2_CONS_DT"),
                title: 'Wet Cat Food',
                // bodyCopy: "Feed healthy for life",
            },
            {
                href: '/dog/bowls-and-feeders/?origin=home&desc=spot3&type=hpstory',
                imgAlt: 'Dog Bowls & Feeders',
                imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS3_HG_DT"),
                title: 'Dog Bowls & Feeders',
                // bodyCopy: "Treat them well",
            },

            {
                href: '/small-pet/food-treats-and-hay/?origin=home&desc=spot4&type=hpstory',
                imgAlt: '',
                imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS4_CONS_DT"),
                title: 'Small Pet food, treats & hay',
                // bodyCopy: "Making healthy taste good",
            },
        ],
    },
]

export default data_container;