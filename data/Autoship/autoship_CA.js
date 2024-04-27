// DPT-5130 CA Remove Autoship Cyber Week Updates 12.4 - cont. - lu: 12.01.2023-JenR
/* eslint-disable no-mixed-spaces-and-tabs */

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    {
        containerName: "heroBanner",
        title: "15% OFF first Autoship",
        description: "+ 5% OFF future orders, see terms",
        isInverted: true,
        backgroundColor: "#F9F9F9",
        alt: "15% OFF first Autoship order plus 5% off future orders",
        imageInfo: { url: imagelink("WEB-1442405-Aug22_MP-HB_Autoship-LearnMore_MO") },
        desktop: { imageInfo: { url: imagelink("WEB-1442405-Aug22_MP-HB_Autoship-LearnMore_DT") } },
    },
    {
        containerName: "featuredTilesGrid",
        title: "Autoship Program",
        subTitle: "Sign up & save on every Autoship order",
        showAllText: "",
        showAllLink: "",
        variant: "2-4up",
        cardVariant: "sm",
        textAlign: "center",
        contentAlign: "center",
        tileSections: [
            {
                title: "Convenience",
                subTitle: "Never run out of your favourite pet essentials",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Reason1_DT"),
                alt: "Convenience - never run out of your favourite pet essentials",
            },
            {
                title: "Planning",
                subTitle: "Schedule orders & choose the frequency",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Reason2_DT"),
                alt: "Planning - schedule orders & choose the frequency",
            },
            {
                title: "Save",
                subTitle: "15% off your first order + 5% off future orders",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Reason3_DT"),
                alt: "Save 15% on your first Autoship order + 5% off future orders",
            },
            {
                title: "Flexibility",
                subTitle: "Update, modify or pause orders at any time",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Reason4_DT"),
                alt: "Flexibility - update, modify or pause orders at any time",
            },
        ],
    },
    {
        containerName: "featuredTilesGrid",
        title: "How to Enroll",
        subTitle: "It's easy! Just sign up when shopping.",
        showAllText: "",
        showAllLink: "",
        variant: "1-3up",
        textAlign: "center",
        contentAlign: "left",
        displayPattern: "horizontal",
        tileSections: [
            {
                title: "Shop",
                subTitle: 'Select \"Autoship\" when you add to cart',
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Step1_DT"),
                alt: "Shop & select Autoship when you add products to cart",
            },
            {
                title: "Schedule",
                subTitle: "Choose the frequency of your repeat delivery",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Step2_DT"),
                alt: "Schedule & choose the frequency of your repeat delivery",
            },
            {
                title: "Ship",
                subTitle: "We\u2019ll ship out your first order automatically",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Step3_DT"),
                alt: "We'll ship out your first order automatically",
            },
        ],
    },
    {
        containerName: "tabSection",
        title: "Shop savings by pet",
        description: "",
        isInverted: false,
        tabs: [
            {
                tabTitle: "Dog",
                sections: [
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food",
                        shopLink: "/featured-shops/auto-ship/canned-food+dry-food+food-pouches/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format/?origin=autoship&desc=dogfood&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Dog_MO"),
                                promoTitle: "Kibble, canned food, toppers & more",
                                promoAlt: "Food - Kibble, canned food, toppers & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Dog_DT") },
                            },
                            skuList: "(5269778,5279157,5286960,5242067,5288680,5199270,5282548,5299994,5288787,5153469,5231510)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Treats",
                        shopLink:
                            "/featured-shops/auto-ship/chewy-treats+dental-treats+jerky+treats/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=dogtreats&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Dog_MO"),
                                promoTitle: "Dental, chewy, jerky & more",
                                promoAlt: "Treats - Dental, chewy, jerky & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Dog_DT") },
                            },
                            skuList: "(5299034,5266411,5280729,5285988,5306142,5148035,5147492,5203802,5163262,5257586,5298217)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Waste Disposal",
                        shopLink:
                            "/featured-shops/auto-ship/deodorizers+potty-training+stain-and-odor-removers+waste-disposal/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/origin=autoship&desc=dogwastemanagement&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Dog_MO"),
                                promoTitle: "Waste bags, scoopers, pads & more",
                                promoAlt: "Waste Disposal - Waste bags, scoopers, pads & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Dog_DT") },
                            },
                            skuList: "(5277157,5270624,5235231,5299945,5245854,5154728)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Wellness",
                        shopLink: "/featured-shops/auto-ship/skin-and-coat-care+stress-and-anxiety-relief+toothbrushes-and-toothpaste+vitamins-and-supplements/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=dogwellness&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Dog_MO"),
                                promoTitle: "Vitamins, supplements, calming & more",
                                promoAlt: "Wellness - Vitamins, supplements, calming & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Dog_DT") },
                            },
                            skuList: "(5212368,5295460,5313502,5246658,5294227,5170582,5320045,5209012,5272963,5310772,5273620)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favourite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog1_DT"),
                                alt: "Royal Canin",
                                title: "Royal Canin®",
                                link: "/featured-shops/auto-ship/royal-canin/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog2_DT"), alt: "Nulo", title: "Nulo", link: "/featured-shops/auto-ship/nulo/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=dognulo&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Dog3_DT"),
                                alt: "Purina Pro Plan",
                                title: "Purina® Pro Plan®",
                                link: "/featured-shops/auto-ship/purina-pro-plan/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=dogpurina&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog4_DT"),
                                alt: "Instinct",
                                title: "Instinct®",
                                link: "/featured-shops/auto-ship/instinct/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=doginstinct&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Dog5_DT"),
                                alt: "WHIMZEES",
                                title: "WHIMZEES",
                                link: "/featured-shops/auto-ship/whimzees/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=dogwhimzees&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Dog6_DT"),
                                alt: "Simply Nourish",
                                title: "Simply Nourish®",
                                link: "/featured-shops/auto-ship/simply-nourish/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax//?origin=autoship&desc=dogsimplynourish&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Dog7_DT"),
                                alt: "Nutrience",
                                title: "Nutrience®",
                                link: "/featured-shops/auto-ship/nutrience/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax//?origin=autoship&desc=dognutrience&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog8_DT"),
                                alt: "Tiki Dog",
                                title: "Tiki Dog®",
                                link: "/featured-shops/auto-ship/tiki-dog/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=dogtiki&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog9_DT"),
                                alt: "Hill's Science Diet",
                                title: "Hill's® Science Diet®",
                                link: "/featured-shops/auto-ship/hills-science-diet/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Dog&format=ajax/?origin=autoship&desc=doghills&type=visnav#tabs-1",
                            },
                        ],
                    },
                ],
            },
            {
                tabTitle: "Cat",
                sections: [
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food",
                        shopLink: "/featured-shops/auto-ship/canned-food+dry-food+food-toppers+freeze-dried/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catfood&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Cat_MO"),
                                promoTitle: "Dry, wet, toppers, frozen & more",
                                promoCopy: "",
                                promoAlt: "Food - Dry, wet, toppers, frozen & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Cat_DT") },
                            },
                            skuList: "(5279240,5291493,5115578,5301174,5237900,5070374,5286752,5153753,5237395,5217041,5284731)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Litter",
                        shopLink: "/featured-shops/auto-ship/litter/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catlitter&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Cat_MO"),
                                promoTitle: "Deodorizing, lightweight, flushable & more",
                                promoAlt: "Litter - Deodorizing, lightweight, flushable & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Cat_DT") },
                            },
                            skuList: "(5178276,5219089,5309522,2621253,5165282,5237907,5219991,5237344,5199203,5212427,5294423)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Waste Disposal",
                        shopLink:
                            "/featured-shops/auto-ship/deodorizers+litter-boxes+litter-pans+stain-and-odor-removers+waste-disposal/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catwastemanagement&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Cat_MO"),
                                promoTitle: "Litter systems, scoops, refills & more",
                                promoAlt: "Waste Disposal - Litter systems, scoops, refills & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Cat_DT") },
                            },
                            skuList: "(5138932,5256722,5108708,5279847,5286667,5308402)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Wellness",
                        shopLink:
                            "/featured-shops/auto-ship/dental-treats+hairball-remedy+hip-and-joint-health+stress-and-anxiety-relief+vitamins-and-supplements/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catwellness&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Cat_MO"),
                                promoTitle: "Hairball remedies, dental treats & more",
                                promoAlt: "Wellness - Hairball remedies, dental treats & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Cat_DT") },
                            },
                            skuList: "(5294536,5102585,5295440,5313501,5191065,5251828,5303573,5279577,5296005,5303840,5294538)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favourite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat1_DT"),
                                alt: "Royal Canin",
                                title: "Royal Canin®",
                                link: "/featured-shops/auto-ship/royal-canin/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catrc&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Cat2_DT"), alt: "BLUE Buffalo", title: "BLUE Buffalo®", link: "/featured-shops/auto-ship/blue-buffalo/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catbluebuffalo&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Cat3_DT"), alt: "Wellness", title: "Wellness®", link: "/featured-shops/auto-ship/wellness/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax//?origin=autoship&desc=catbrandwellness&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat4_DT"),
                                alt: "Instinct",
                                title: "Instinct®",
                                link: "/featured-shops/auto-ship/instinct/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catinstinct&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat5_DT"),
                                alt: "Tiki Cat",
                                title: "Tiki Cat®",
                                link: "/featured-shops/auto-ship/tiki-cat/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=cattiki&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat6_DT"),
                                alt: "Inaba",
                                title: "Inaba",
                                link: "/featured-shops/auto-ship/inaba/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catinaba=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Cat7_DT"),
                                alt: "Simply Nourish",
                                title: "Simply Nourish®",
                                link: "/featured-shops/auto-ship/simply-nourish/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Cat8_DT"),
                                alt: "ExquisiCat",
                                title: "ExquisiCat®",
                                link: "/featured-shops/auto-ship/exquisicat/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=catexquisicat&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Cat9_DT"),
                                alt: "Hill's Science Diet",
                                title: "Hill's® Science Diet®",
                                link: "/featured-shops/auto-ship/hills-science-diet/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Cat&format=ajax/?origin=autoship&desc=cathills&type=visnav#tabs-1",
                            },
                        ],
                    },
                ],
            },
            {
                tabTitle: "Small pet",
                sections: [
                    {
                        containerName: "ExclusiveOffer",
                        title: "Bedding",
                        shopLink: "/featured-shops/auto-ship/full-cheeks/bedding/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpetbeddings&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-SmPet_MO"),
                                promoTitle: "Natural, scented, colourful & more",
                                promoCopy: "",
                                promoAlt: "Bedding - Natural, scented, colourful & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-SmPet_DT") },
                            },
                            skuList: "(5223213,5223236,5319248,5319251,5167190,5174331,5233370)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Hay",
                        shopLink: "/featured-shops/auto-ship/hay/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpethay&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-SmPet_MO"),
                                promoTitle: "Natural, alfalfa, botanical & more",
                                promoAlt: "Hay - Natural, alfalfa, botanical & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-SmPet_DT") },
                            },
                            skuList: "(5174852,5318774,5271552,5134288,5236556)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Treats & Chews",
                        shopLink: "/featured-shops/auto-ship/treats/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpettreats&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-SmPet_MO"),
                                promoTitle: "Crunchy, freeze-dried, fruity & more",
                                promoAlt: "Treats & Chews - Crunchy, freeze-dried, fruity & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-SmPet_DT") },
                            },
                            skuList: "(5257992,5174990,5056492,5318578,5157159,5122438)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food",
                        shopLink: "/featured-shops/auto-ship/food/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpetfood&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-SmPet_MO"),
                                promoTitle: "Pellet, grain-free, forage diet & more",
                                promoAlt: "Food - Pellet, grain-free, forage diet & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-SmPet_DT") },
                            },
                            skuList: "(5202828,5202825,5045302,5319420,5173695,5319423,5283505,5175721)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favourite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet1_DT"), alt: "Oxbow", title: "Oxbow", link: "/featured-shops/auto-ship/oxbow/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax//?origin=autoship&desc=smallpetoxbow&type=visnav#tabs-1d-shops/auto-ship/oxbow/?origin=autoship&type=oxbow&dec=learnmore#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet2_DT"),
                                alt: "Full Cheeks",
                                title: "Full Cheeks™ ",
                                link: "/featured-shops/auto-ship/full-cheeks/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpetfullcheeks&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet3_DT"),
                                alt: "KAYTEE",
                                title: "KAYTEE®",
                                link: "/featured-shops/auto-ship/kaytee/?pmin=5.00&pmax=10.00&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpetkaytee&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet4_DT"),
                                alt: "carefresh",
                                title: "carefresh®",
                                link: "/featured-shops/auto-ship/carefresh/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpetcarefresh&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet5_DT"),
                                alt: "Vitakraft",
                                title: "Vitakraft®",
                                link: "/featured-shops/auto-ship/vitakraft/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax//?origin=autoship&desc=smallpetvitakraft&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-SmPet6_DT"),
                                alt: "Living World",
                                title: "Living World®",
                                link: "/featured-shops/auto-ship/living-world/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpetlivingworld&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-SmPet7_DT"),
                                alt: "Tropical Carnival",
                                title: "Tropical Carnival®",
                                link: "/featured-shops/auto-ship/browns/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Small%20Pet&format=ajax/?origin=autoship&desc=smallpettropicalcarnival&type=visnav#tabs-1",
                            },

                        ],
                    },
                ],
            },
            {
                tabTitle: "Fish",
                sections: [
                    {
                        containerName: "ExclusiveOffer",
                        title: "Water Care",
                        shopLink: "/featured-shops/auto-ship/ammonia-testers+cycling-aids%2Fbacteria+dechlorinators+ph-adjusters+salt+water-clarifiers+water-quality-testers/?origin=autoship&desc=fishwatercare&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Fish_MO"),
                                promoTitle: "Conditioners, salts, cleaners & more",
                                promoCopy: "",
                                promoAlt: "Water Care - Conditioners, salts, cleaners & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Fish_DT") },
                            },
                            skuList: "(5291594,5291854	2031114,5006506,5068002	2031130,5174629,5139990)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Filter Media",
                        shopLink: "/featured-shops/auto-ship/filter-media/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax/?origin=autoship&desc=fishfilters&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Fish_MO"),
                                promoTitle: "Bio-foam, carbon, infused pads & more",
                                promoAlt: "Filter Media - Bio-foam, carbon, infused pads & moree",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Fish_DT") },
                            },
                            skuList: "(5300983,5282041,5262322,5073694,5160033,5120426,1832675,5296630)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food",
                        shopLink: "/featured-shops/auto-ship/flakes+food+freeze-dried+pellets%2Fcrisp+treats/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax/?origin=autoship&desc=fishfood&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Fish_MO"),
                                promoTitle: "Flakes, frozen worms, pellets & more",
                                promoAlt: "Food - Flakes, frozen worms, pellets & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Fish_DT") },
                            },
                            skuList: "(5267255,5248726,5251303,5298546,5267232)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favourite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish1_DT"), alt: "Top Fin", title: "Top Fin®", link: "/featured-shops/auto-ship/top-fin/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax/?origin=autoship&desc=fishtopfin&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish2_DT"), alt: "Tetra", title: "Tetra®", link: "/featured-shops/auto-ship/tetra/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax/?origin=autoship&desc=fishtetra&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish3_DT"),
                                alt: "Marineland",
                                title: "Marineland®",
                                link: "/featured-shops/auto-ship/marineland/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax/?origin=autoship&desc=fishmarineland&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish4_DT"), alt: "API", title: "API®", link: "/featured-shops/auto-ship/api/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax/?origin=autoship&desc=fishapi&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish5_DT"), alt: "Fluval", title: "Fluval®", link: "/featured-shops/auto-ship/fluval/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax?origin=autoship&desc=fishfluval&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish6_DT"),
                                alt: "Instant Ocean",
                                title: "Instant Ocean",
                                link: "/featured-shops/auto-ship/instant-ocean/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax?origin=autoship&desc=fishinstantocean&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish7_DT"), alt: "Seachem", title: "Seachem®", link: "/featured-shops/auto-ship/seachem/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax?origin=autoship&desc=fishwseac"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Fish8_DT"), alt: "Laguna", title: "Laguna", link: "/featured-shops/auto-ship/laguna/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax?origin=autoship&desc=fishlaguna&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish9_DT"),
                                alt: "Omega One",
                                title: "Omega™ One",
                                link: "/featured-shops/auto-ship/omega-one/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Fish&format=ajax?origin=autoship&desc=fishomegaone&type=visnav#tabs-1",
                            },
                        ],
                    },
                ],
            },
            {
                tabTitle: "Reptile",
                sections: [
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food & Supplements",
                        shopLink: "/featured-shops/auto-ship/food+freeze-dried+vitamins-and-supplements/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptilefood&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Reptile_MO"),
                                promoTitle: "Crickets, mealworms, frozen food & more",
                                promoCopy: "",
                                promoAlt: "Food & Supplements - Crickets, mealworms, frozen food & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Reptile_DT") },
                            },
                            skuList: "(5163010,5131437,5289134,5284933,5164698,5311705,5176846,5290847,5047843)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Substrate",
                        shopLink: "/featured-shops/auto-ship/substrate-and-bedding/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptilesubstrate&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Reptile_MO"),
                                promoTitle: "Carpet, natural bedding, moss, sand & more",
                                promoAlt: "Substrate - Carpet, natural bedding, moss, sand & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Reptile_DT") },
                            },
                            skuList: "(5037116,5095840,5229836,1851800,5159948,5291031,5311999,5290990,5290988,5210906)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Heating & Lighting",
                        shopLink:
                            "/featured-shops/auto-ship/bulbs-and-lamps+heaters+humidity-and-temperature-controls+light-fixtures+lighting-and-heaters/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptileheating&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Reptile_MO"),
                                promoTitle: "Bulbs, lamps & temperature controls",
                                promoAlt: "Heating & Lighting - Bulbs, lamps & temperature controls",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Reptile_DT") },
                            },
                            skuList: "(5123303,5314823,5312302,5152636,5058888)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Water Care",
                        shopLink: "/featured-shops/auto-ship/cleaners-and-brushes+filter-media+filters+water-care-and-conditioners+water-conditioners/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptilewatercare&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Reptile_MO"),
                                promoTitle: "Filters, conditioners, sponges & more",
                                promoAlt: "Water Care - Filters, conditioners, sponges & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Reptile_DT") },
                            },
                            skuList: "(2051087,5210628,5152464)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favourite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile1_DT"),
                                alt: "Zoo Med",
                                title: "Zoo Med\u2122",
                                link: "/featured-shops/auto-ship/zoo-med/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax?origin=autoship&desc=reptilezoomed&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile2_DT"),
                                alt: "Thrive",
                                title: "Thrive\u2122",
                                link: "/featured-shops/auto-ship/thrive/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax?origin=autoship&desc=reptilethrive&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile3_DT"),
                                alt: "Tetra",
                                title: "Tetra",
                                link: "/featured-shops/auto-ship/tetra/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax?origin=autoship&desc=freptiletetra&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile4_DT"),
                                alt: "Exo Terra",
                                title: "Exo Terra®",
                                link: "/featured-shops/auto-ship/exo-terra/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptileexoterra&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile5_DT"),
                                alt: "Fluker's",
                                title: "Fluker's",
                                link: "/featured-shops/auto-ship/flukers/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptileflukers&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile6_DT"), alt: "Arcadia", title: "Arcadia", link: "/featured-shops/auto-ship/arcadia/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptilearcadia&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile7_DT"), alt: "Repashy", title: "Repashy", link: "/featured-shops/auto-ship/repashy/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptilerepashy&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet9_DT"), alt: "Mazuri", title: "Mazuri", link: "/featured-shops/auto-ship/mazuri/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Reptile&format=ajax/?origin=autoship&desc=reptilemazuri&type=visnav#tabs-1"
                            },
                        ],
                    },
                ],
            },
            {
                tabTitle: "Bird",
                sections: [
                    {
                        containerName: "ExclusiveOffer",
                        title: "Wild Bird Food",
                        shopLink: "/bird/wild-bird-food-and-supplies/wild-bird-food/#page_name=flyout&link_name=wildbirdfood&template_type=bird/?origin=autoship&desc=birdtropicalcarnival&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Bird_MO"),
                                promoTitle: "Seeds, nectar, mealworms & more",
                                promoCopy: "",
                                promoAlt: "Wild Bird Food - Seeds, nectar, mealworms & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1-CAN_AS-Bird_DT") },
                            },
                            skuList: "(5256561,5309879,5281658,5281657,5236217,5281760,5281718,5285180,5281757)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Pet Bird Food",
                        shopLink: "/bird/food-and-treats/pet-bird-food/#page_name=flyout&link_name=petbirdfood&template_type=bird/?origin=autoship&desc=birdpetfood&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Bird_MO"),
                                promoTitle: "Seeds, pellets, treats & more",
                                promoAlt: "Pet Bird Food - Seeds, pellets, treats & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2-CAN_AS-Bird_DT") },
                            },
                            skuList: "(5037216,5133739,5094600,5289768,5291007,5261887,5290726,5261392,1041185,1041532,1041451)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Toys & Accessories",
                        shopLink: "/featured-shops/auto-ship/toys/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdtoys&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Bird_MO"),
                                promoTitle: "Swings, mirrors, ladders, toys & more",
                                promoAlt: "Toys & Accessories - Swings, mirrors, ladders, toys & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3-CAN_AS-Bird_DT") },
                            },
                            skuList: "(5110962,5161308,5311287,5282417,5310033,5110945)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Treats & Supplements",
                        shopLink: "/featured-shops/auto-ship/stress-and-anxiety-relief+treats+vitamins-and-supplements/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax?origin=autoship&desc=birdtreats&type=visnav#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Bird_MO"),
                                promoTitle: "Crunchy sticks, cookies, treats & more",
                                promoAlt: "Treats & Supplements - Crunchy sticks, cookies, treats & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4-CAN_AS-Bird_DT") },
                            },
                            skuList: "(5290113,5193167,5300807,5134275,5217238,5217237,5285009,5315116)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favourite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Bird1_DT"),
                                alt: "Scotts",
                                title: "Scotts®",
                                link: "/featured-shops/auto-ship/scotts/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdscotts&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Bird2_DT"),
                                alt: "Morning Melodies",
                                title: "Morning Melodies™",
                                link: "/featured-shops/auto-ship/morning-melodies/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdmorningmelodies&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet3_DT"),
                                alt: "KAYTEE",
                                title: "KAYTEE®",
                                link: "/featured-shops/auto-ship/kaytee/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdkaytee&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-Bird4_DT"),
                                alt: "Armstrong™",
                                title: "Armstrong™",
                                link: "/featured-shops/auto-ship/armstrong/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdarmstrong&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird5_DT"),
                                alt: "Lafeber",
                                title: "Lafeber®",
                                link: "/featured-shops/auto-ship/lafebers/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdlafebers&type=visnav#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird7_DT"),
                                alt: "ZuPreem",
                                title: "ZuPreem®",
                                link: "/featured-shops/auto-ship/zupreem/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdzupreem&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI-CAN_AS-SmPet7_DT"),
                                alt: "Tropical Carnival",
                                title: "Tropical Carnival®",
                                link: "/featured-shops/auto-ship/browns/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdtropicalcarnival&type=visnav#tabs-1"
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird9_DT"),
                                alt: "All Living Things",
                                title: "All Living Things®",
                                link: "/featured-shops/auto-ship/all-living-things/?pmin=0.01&srule=best-sellers&prefn1=customPet&prefv1=Bird&format=ajax/?origin=autoship&desc=birdalllivingthings=visnav#tabs-1"
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        containerName: "accordionSection",
        title: "Frequently asked questions",
        subTitle: "",
        isInverted: false,
        sections: [
            {
                title: "What is the Autoship Program?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    "<p>Autoship allows you to have your pet essentials delivered to your home on a regular schedule based on the frequency you choose. There are many options for how often your subscription can be delivered, such as, every 4-8 weeks. We will send you a reminder of your Autoship order 5 days before the order is placed. Autoship customers can cancel their subscription at anytime. Once you enroll in Autoship, you can change your frequency, future order date or items in your order.</p>",
            },
            {
                title: "How do I enroll in the Autoship Program?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>To enroll in Autoship, visit our Autoship page to see eligible items. Add items to your cart and select "Autoship." You will then be prompted to choose the frequency of your delivery. Check out with your Treats membership and your first Autoship order will ship immediately. Your future Autoship orders will ship based on the frequency selected. You can view your Autoship subscription and future orders by signing into your account and selecting "Autoship" on the account page.</p>',
            },
            {
                title: "Can I change my Autoship subcription after I enroll?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    "<p>Yes. Autoship customers can change the frequency, the items and the order date of their subscription at anytime. Customers can choose to skip their upcoming order or cancel their order. Please allow up to 24 hours for modifications to be processed.",
            },
            {
                title: "How do I cancel my Autoship subscription?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>Sign into your account and go to \"Manage Autoship\" under the Treats page. Select \"Cancel Subscription.\" You\'ll be prompted to submit a cancel reason to finalize your cancellation, and then you\'ll receive an email confirming your cancellation.</p>',
            },
            {
                title: "How do I reactivate an old Autoship subscription?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>Sign into your Treats account and go to "Manage Autoship." Your previous subscriptions will be listed and you can select "Reactivate subscription." Your next order will ship based on the previous frequency you had selected. You can change your order date or frequency when you reactivate.</p>',
            },
            {
                title: "How do I change my shipping address?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>To change your shipping address, sign into your Treats account and go to the Autoship page to select "Change Shipping." Select an alternate shipping address or create a new address to add to your account. </p>',
            },
            {
                title: "How do I change the delivery date of future orders?",
                subTitle: "",
                isActive: false,
                htmlContent: '<p>When signed into your Treats account on the Autoship page, select "Change Order Date." A calendar will pop up for you to select a future order date.</p>',
            },
            {
                title: "How do I add items to an upcoming order?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>Add items to future orders as either a new subscription or a one-time item and save 5% on the whole order. To add items to your upcoming order, sign into your Treats account and go to the Autoship account page. Next to your current subscription, select "Shop Now for More Items." When you find the items you want to shop, you can either add to your upcoming order for one-time purchase or on a subscription basis.</p>',
            },
            {
                title: "How do I update my credit card information?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>All Autoship orders require a credit card payment. To change your credit card or add a new credit card, sign into your Treats account on the "Manage Autoship" page and select "Change Billing." This will direct to you to the credit card page, where you can add or update credit cards. Alternative payments, such as, Afterpay, PayPal and gift cards cannot be accepted on Autoship subscriptions. </p>',
            },
            {
                title: "How will I know when my next Autoship order is getting delivered?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    "<p>We'll send you an email reminder that includes the upcoming order date with the items on subscription and the most up-to-date price. You will have 5 days to review and make changes to your order before the order is placed. You can also sign in to your account and manage your Autoship to see your next order date to change the date, send the order immediately or skip that order.</p>",
            },
            {
                title: "What should I do if an item(s) is out of stock?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    "<p>We'll notify you if an item(s) is out of stock and cannot be shipped. We'll continue to try to place your order until the item is available. We'll follow up within 15 days to inform you if your item is back in stock. You can always add a new item to your Autoship subscription for one-time purchase or on a subscription and remove the item(s) that is out of stock for your next order. </p>",
            },
            {
                title: "Will I receive a 5% discount on future orders?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    "<p>Yes. As an Autoship customer, you will receive 5% off your future Autoship orders as well as when you add items to your subscription for either one-time purchase or on a subscription.</p>",
            },
            {
                title: "How can I get more help?", subTitle: "", isActive: false, htmlContent: "<p>If you have additional questions, please contact Customer Care at 1-888-839-9638 or customercare@petsmart.com</p>"
            },
        ],
    },
]

export default data_container;