//DPT-4896 injection into DPT-4831  CA HP FW32 - 09.07 - 09.11 lu: 08.28.2023-JenR


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
        headline: "This weekend only!",
        titleXL: "Save $10",
        title: "PLUS 5K Bonus pts",
        description: "when you spend $99 or more",
        caption: "Terms and exclusions apply. Valid thru 9/10/2023",
        isOffer: false,
        isInverted: false,
        bgColor: "",
        alt: "dog crate and aquarium",
        alt2: "various pet essentials",
        href: "/account/?origin=home&desc=sitewide&type=hpbanner",
        cta: true,
        ctaText: "Activate now",
        imageInfo: { url: imagelink("CAN-1986100_SEPT7_SPEND_&_GET_CHO_L_Sitewide_MO"), url2: imagelink("CAN-1986100_SEPT7_SPEND_&_GET_CHO_R_Sitewide_MO") },
        desktop: {
            imageInfo: { url: imagelink("CAN-1986100_SEPT7_SPEND_&_GET_CHO_L_Sitewide_DT"), url2: imagelink("CAN-1986100_SEPT7_SPEND_&_GET_CHO_R_Sitewide_DT") }
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
        containerBgColor: "#EEE",
        shouldCallApi: false,
        showShopAll: false,
        isInverted: false,
        tileSections: [
            {
                href: '/dog/treats/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'dog treats',
                imgContent: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_4stk_dogtreats_DT"),
                title: 'Dog treats',
                // bodyCopy: "Premium cat food & treats",
            },
            {
                href: '/featured-shops/top-picks/collars+harnesses+leashes/?origin=home&desc=spot2&type=hpstory#tabs-1',
                imgAlt: 'dog and cat collars and leashes',
                imgContent: imagelink("WEB-1954050-Sep23_HP-4CCS2_Card_DT"),
                title: 'Collars, leashes & harnesses',
                // bodyCopy: "Treat them well",
            },
            {
                href: '/cat/food-and-treats/treats/?origin=home&desc=spot3&type=hpstory',
                imgAlt: 'cat treats',
                imgContent: imagelink("WEB-23-2002100-CA_Sept-Homepage-App_4stk_cattreats_DT"),
                title: 'Cat treats',
                // bodyCopy: "Feed healthy for life",
            },
            {
                href: '/reptile/habitats-and-decor/terrariums/?origin=home&desc=spot4&type=hpstory',
                imgAlt: 'Reptile Terrariums',
                imgContent: imagelink("WEB-1954050-Sep23_HP-4CCS4_Card_DT"),
                title: 'Reptile Terrariums',
                // bodyCopy: "Making healthy taste good",
            },
        ],
    },
]

export default data_container;