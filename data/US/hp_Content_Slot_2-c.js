// DPT-4887 Injection into DPT-4837 US HP FW 31  - 09.01 - 09.04 - lu: 08.24.2023-JenR

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
        headline: "EXTRA",
        titleXL: "15%",
        title: "OFF",
        description: "thousands of pet favorites online only with code: SAVE15",
        caption: "thru 9/4, see terms",
        isOffer: true,
        isInverted: true,
        bgColor: "#DD2834", /*add background color using the following psuedo-class to your template, for both desktop & mobile:
        .campaign-hero-banner:nth-child(2){background-color: #xxxxxx;} */
        alt: "White and tan cat",
        alt2: "White and tan dog running with a rope in their mouth",
        href: "/sale/save-15p-online-only/?origin=home&desc=save15p&type=hpbanner",
        cta: true,
        ctaText: "Shop now",
        imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO1_Treats_MO"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO1_Treats_MO") },
        desktop: {
            imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO1_Treats_DT"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO1_Treats_DT") }
        },
    },
]

export default data_container;