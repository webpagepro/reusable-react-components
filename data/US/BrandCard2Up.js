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
        containerName: "BrandCard2Up",
        variant: "1-2up",
        containerBgColor: "USE HEX",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                hasCTA: true,
                ctaCopy: "Shop now",
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                mediaAlt: 'img alt',
                mediaContent: "https://www.youtube.com/embed/4EA6Vs5q3w4?si=1euEkrbLqLeQVDEk",
                inverted: true,
                title: 'Mr. Chicken Toys',
                bodyCopy: "If there is one toy that will stand against all terrain.",
                mediaType: "youtubeVideo",
                // isTextBottom: true;
            },
            {
                hasCTA: true,
                ctaCopy: "Shop now",
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                mediaAlt: 'img alt',
                mediaContent: imagelink("5266808"),
                inverted: true,
                title: 'Lorem ipsum dolor sit',
                bodyCopy: "Lorem ipsum dolor sit",
                mediaType: "",
                isTextBottom: true,
            },
        ],
    },
    {
        containerName: "BrandCard2Up",
        variant: "1-2up",
        containerBgColor: "USE HEX",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                hasCTA: false,
                // ctaCopy: "Shop now",
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                mediaAlt: 'img alt',
                mediaContent: "https://www.youtube.com/embed/4EA6Vs5q3w4?si=1euEkrbLqLeQVDEk",
                inverted: true,
                title: 'Mr. Chicken Toys',
                bodyCopy: "If there is one toy that will stand against all terrain.",
                mediaType: "youtubeVideo",
                // isTextBottom: true;
            },
            {
                hasCTA: false,
                // ctaCopy: "Shop now",
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                mediaAlt: 'img alt',
                mediaContent: imagelink("5266808"),
                inverted: true,
                title: 'Lorem ipsum dolor sit',
                bodyCopy: "Lorem ipsum dolor sit",
                mediaType: "",
                isTextBottom: true,
            },
        ],
    },
]

export default data_container;