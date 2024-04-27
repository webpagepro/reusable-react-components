//DPT-4851 US HP FW 35 - 09.25 - 10.02 lu: 09.12.2023-JenR

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
        description: "when you spend $35 or more on Same-Day Delivery orders",
        caption: "thru 10/1, see terms",
        isOffer: true,
        isInverted: true,
        bgColor: "#DD2834",
        alt: "Cat sitting outside a front door next to a PetSmart delivery bag",
        alt2: "Dog sitting outside a front door next to a PetSmart delivery bag",
        href: "/sale/15p-off-35-same-day-delivery/?origin=home&desc=sdd&type=hpbanner",
        cta: true,
        ctaText: "Shop now",
        imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO2_FreeSDD_MO"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO2_FreeSDD_MO") },
        desktop: {
            imageInfo: { url: imagelink("WEB-1954050-Sep23_HP-LCHO2_FreeSDD_DT"), url2: imagelink("WEB-1954050-Sep23_HP-RCHO2_FreeSDD_DT") }
        },
    }
]

export default data_container;