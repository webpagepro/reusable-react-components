//DPT-4340 injection into DPT-4318  - CA FW9 - 03.27 - 03.30 lu: 03.24.2023-JenR


let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}

let imagelinkPreset = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}?$HP3101$` //use when intrinsic sizes from scene 7 are original/large resolutions i.e. 2000x2000, etc
}

let data_container = [
    { //Landing Page Banner
        containerName: "MobileFlatImageBanner",
        title: "Farm & Backyard",
        subtitle: "For pets who rule the roost!",
        isInverted: false,
        backgroundColor: "#FFFFFF",
        alt: "Farm and backyard pets",
        imageInfo: { url: imagelink("WEB-1765201-Apr23_LPB_Farm_MO") },
        desktop: { imageInfo: { url: imagelink("WEB-1765201-Apr23_LPB_Farm_DT") } },
    },
    { // Shop by Farm Animal
        containerName: "CategoryRow",
        title: "Shop by farm animal",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS1_Farm_DT"),
                alt: "Chicken",
                title: "Chicken",
                link: "/farm-animal/chicken-and-poultry/?origin=FarmLandingPage&desc=6tile-shoppable1&type=chicken"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS2_Farm_DT"),
                alt: "Duck",
                title: "Duck",
                link: "/farm-animal/duck/?origin=FarmLandingPage&desc=6tile-shoppable2&type=duck"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS3_Farm_DT"),
                alt: "Goat",
                title: "Goat",
                link: "/farm-animal/goat/?origin=FarmLandingPage&desc=6tile-shoppable3&type=goat"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS4_Farm_DT"),
                alt: "Pig",
                title: "Pig",
                link: "/farm-animal/pig/?origin=FarmLandingPage&desc=6tile-shoppable4&type=pig"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS5_Farm_DT"),
                alt: "Horse",
                title: "Horse",
                link: "/farm-animal/horse/?origin=FarmLandingPage&desc=6tile-shoppable5&type=horse"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS6_Farm_DT"),
                alt: "Wild Bird",
                title: "Wild Bird",
                link: "/bird/bird-shops/wild-bird/?origin=FarmLandingPage&desc=6tile-shoppable6&type=wild-bird"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TS7_Farm_DT"),
                alt: "Pond",
                title: "Pond",
                link: "/fish/fish-shops/koi-and-pond/?origin=FarmLandingPage&desc=6tile-shoppable7&type=pond"
            },

        ],
    },
    { // Promo Banner Large
        containerName: "promoBannerLarge",
        className: "halloween-promo-banner",
        title: "Earn 10X Treats points thru 4/23",
        subTitle: "on all farm & backyard pet merchandise, online only, terms apply.",
        link: "/account/treats-offers/?origin=FarmLandingPage&desc=promobannerlg&type=treats-points",
        size: "lg",
        imgContent: imagelink("WEB-1765201-Apr23_PROMO-LB1_Farm_MO"),
        desktop: {
            imgContent: imagelink("WEB-1765201-Apr23_PROMO-LB1_Farm_DT")
        },
        ctaText: "Activate now",
        cta: true,
        alt: "Earn 10X Treats points on all farm and backyard items thru 4/23, see terms",
        isInverted: true,
    },
    { // 2 card up
        containerName: "featuredTilesGrid",
        title: "Convenience delivered!",
        subTitle: "35% OFF 1st Autoship order or FREE shipping over $49 so you can spend more time with your backyard pets! See terms.",
        variant: "2up",
        textAlign: "left",
        tileSections: [
            {
                title: "Save 35% 1st Autoship order, see terms.",
                subTitle: "Forget the hassle of last-minute shopping or running low on their farm faves.",
                readMoreText: "",
                readMoreLink: "/autoship.html/?origin=FarmLandingPage&desc=2Card1&type=autoship",
                imgContent: imagelink("WEB-1765201-Apr23_2CRD1_Farm_MO"),
                alt: "Save 35% on 1st Autoship order, terms apply",
                desktop: { imgContent: imagelink("WEB-1765201-Apr23_2CRD1_Farm_DT") },
            },
            {
                title: "FREE shipping $49+ for Treats members",
                subTitle: "Convenient savings that'll keep your farm & backyard pets happy! Terms apply.",
                readMoreText: "",
                readMoreLink: "/help/shipping-and-delivery-H0007d.html/?origin=FarmLandingPage&desc=2Card2&type=shipping-and-delivery",
                imgContent: imagelink("WEB-1765201-Apr23_2CRD2_Farm_MO"),
                alt: "FREE shipping over $49 for Treats members",
                desktop: { imgContent: imagelink("WEB-1765201-Apr23_2CRD2_Farm_DT") },
            },
        ],
    },
    { // Shop by Brand
        containerName: "CategoryRow",
        title: "Shop by brand",
        displaySettings: { desktop: 5 },
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TSB1_Farm_DT"),
                alt: "Eggland’s Best",
                title: "Eggland’s Best",
                link: "/featured-brands/egglands-best/?origin=FarmLandingPage&desc=6tile-shoppable1&type=egglands-best"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TSB2_Farm_DT"),
                alt: "Healthy Harvest",
                title: "Healthy Harvest",
                link: "/featured-brands/healthy-harvest/?origin=FarmLandingPage&desc=6tile-shoppable2&type=healthy-harvest"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TSB3_Farm_DT"),
                alt: "Kalmbach Feeds",
                title: "Kalmbach Feeds",
                link: "/featured-brands/kalmbach-feeds/?origin=FarmLandingPage&desc=6tile-shoppable3&type=kalmbach-feeds"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TSB4_Farm_DT"),
                alt: "Kruse's Perfection",
                title: "Kruse's Perfection",
                link: "/featured-brands/kruses-perfection/?origin=FarmLandingPage&desc=6tile-shoppable4&type=kruses-perfection"
            },
            {
                imgContent: imagelink("WEB-1765201-Apr23_6TSB5_Farm_DT"),
                alt: "Right Choice",
                title: "Right Choice",
                link: "/featured-brands/right-choice/?origin=FarmLandingPage&desc=6tile-shoppable6&type=right-choice"
            },

        ],
    },
]

export default data_container;