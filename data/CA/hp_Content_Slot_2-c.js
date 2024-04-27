//DPT-4833 CA HP FW34 - 09.21 - 09.25 lu: 09.08.2023-JC


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
        headline: "ONLINE ONLY",
        titleXL: "20%",
        title: "OFF",
        description: "a regular priced item using promo code SAVE20 (excludes food)",
        caption: "Terms and exclusions apply. Valid thru 9/24*",
        isOffer: true,
        isInverted: true,
        bgColor: "#AF212F",
        alt: "Corgi playing in a pile of leaves",
        alt2: "Cat running on ground covered in leaves",
        href: "/featured-shops/limited-time-offers?origin=home&desc=sitewide&type=hpbanner",
        cta: true,
        ctaText: "Shop now",
        imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO3_Online_MO"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO3_Online_MO") },
        desktop: {
            imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO3_Online_DT"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO3_Online_DT") }
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
                href: '/dog/toys/?origin=home&desc=spot1&type=hpstory',
                imgAlt: 'dog plush toys',
                imgContent: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_4card_dogtoys_DT"),
                title: 'Dog Toys',
                // bodyCopy: "Premium cat food & treats",
            },
            {
                href: '/dog/bowls-and-feeders/?origin=home&desc=spot2&type=hpstory',
                imgAlt: 'Dog Bowls & Feeders',
                imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS3_HG_DT"),
                title: 'Dog Bowls & Feeders',
                // bodyCopy: "Feed healthy for life",
            },
            {
                href: '/small-pet/food-treats-and-hay/?origin=home&desc=spot4&type=hpstory',
                imgAlt: 'Pictures of small pet items',
                imgContent: imagelink("WEB-1908601-Aug23-HP-4CCS4_CONS_DT"),
                title: 'Small Pet food, treats & hay',
                // bodyCopy: "Treat them well",
            },

            {
                href: '/fish/tanks-aquariums-and-nets/aquariums/?origin=home&desc=spot4&type=hpstory',
                imgAlt: 'Two fish tanks',
                imgContent: imagelink("WEB-1954050-Sep23_HP-4CCS12_Card_DT"),
                title: 'Aquariums',
                // bodyCopy: "Making healthy taste good",
            },
        ],
    },
]

export default data_container;