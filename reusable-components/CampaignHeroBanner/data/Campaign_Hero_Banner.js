// DPT-4558 - Campaign Hero Banner Recipe - ASAP - lu: 05.23.2023-SU


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
        headline: "DoorDash deliveries",
        titleXL: "$10",
        title: "% Off",
        description: "Through May 21st receive $10 off on all DoorDash deliveries",
        caption: "Offer appplies 5/01 - 5/21",
        isOffer: true,
        isInverted: false,
        backgroundColor: "",
        alt: "left alt",
        alt2: "right alt",
        href: "/sale/extra-10-off-50-same-day-delivery/?origin=home&desc=freesamedaydelivery&type=hpbanner ",
        cta: true,
        ctaText: "Shop products",
        imageInfo: { url: imagelink("188x188_left"), url2: imagelink("188x188_right") },
        desktop: {
            imageInfo: { url: imagelink("392x392_left"), url2: imagelink("392x392_right")}
        },
    },
]

export default data_container;