//DPT-4930 Injection into DPT-4840 US HP FW 34 - 09.18 - 09.25 lu: 09.11.2023-JenR

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
        titleXL: "20%",
        title: "OFF",
        description: "thousands of pet favorites online only with code: SAVE20",
        caption: "thru 9/24, see terms",
        isOffer: true,
        isInverted: true,
        bgColor: "#AF212F",
        alt: "Dog playing in a pile of leaves",
        alt2: "Cat running through a pile of leaves",
        href: "/sale/save-20p-online-only/?origin=home&desc=save20p&type=hpbanner",
        cta: true,
        ctaText: "Shop now",
        imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO3_Online_MO"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO3_Online_MO") },
        desktop: {
            imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO3_Online_DT"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO3_Online_DT") }
        },
    }
]

export default data_container;