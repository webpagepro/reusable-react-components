// DPT-3948 INJECTION to DPT-3862 - Autoship (using Autoship_Educational build) - lu: 12.07.2022-SU
/* eslint-disable no-mixed-spaces-and-tabs */

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    {
        containerName: "heroBanner",
        title: "35% OFF first Autoship",
        description: "plus 5% OFF future orders",
        isInverted: true,
        backgroundColor: "#F9F9F9",
        alt: "35% off first Autoship order plus 5% off future orders",
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
                subTitle: "Never run out of your favorite pet essentials",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Reason1_DT"),
                alt: "Convenience - never run out of your favorite pet essentials",
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
                subTitle: "35% off your first order + 5% off future orders",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Reason3_DT"),
                alt: "Save 35% on your first order + 5% off future orders",
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
                subTitle: 'Select "Autoship" when you add products to the cart',
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("WEB-1442405-Aug22_CID_Autoship-Step1_DT"),
                alt: "Shop & select Autoship when you add products to the cart",
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
                alt: "Your first order will be placed immediately",
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
                        shopLink: "/featured-shops/auto-ship/canned-food+dry-food+food+food-toppers+freeze-dried+veterinary-diet/dog/?origin=autoship&type=dog-food&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Dog_MO"),
                                promoTitle: "Kibble, canned food, toppers & more",
                                promoAlt: "Kibble, canned food, toppers & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Dog_DT") },
                            },
                            skuList: "(5286365,5279157,5286960,5154856,5066968,5147443,5180496,5299994,5288787,5153469,5231512)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Treats",
                        shopLink:
                            "/featured-shops/auto-ship/biscuits-and-bakery+bones-and-rawhide+chewy-treats+crunchy-treats+dental-treats+jerky+soft-treats+training-treats+treats/dog/?origin=autoship&type=dog-treats&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Dog_MO"),
                                promoTitle: "Dental, chewy, jerky & more",
                                promoAlt: "Dental, chewy, jerky & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Dog_DT") },
                            },
                            skuList: "(5286211,5266411,5303240,5297667,5306142,5281767,5252065,5203802,5163262,5299645,5304954)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Waste Disposal",
                        shopLink:
                            "/featured-shops/auto-ship/cleaners-and-brushes+pet-hair-removers+potty-training+repellents+stain-and-odor-removers+stain-and-urine-removers+vacuums+waste-disposal+waste-removers/dog/?origin=autoship&type=waste&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Dog_MO"),
                                promoTitle: "Waste bags, scoopers, pads & more",
                                promoAlt: "Waste bags, scoopers, pads & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Dog_DT") },
                            },
                            skuList: "(5277157,5270624,5235231,5300007,5311552,5268788)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Wellness",
                        shopLink: "/featured-shops/auto-ship/collars+health-and-wellness+pills+spot-ons+vitamins-and-supplements/dog/?origin=autoship&type=supplements&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Dog_MO"),
                                promoTitle: "Vitamins, supplements, calming & more",
                                promoAlt: "Vitamins, supplements, calming & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Dog_DT") },
                            },
                            skuList: "(5192440,5214339,5156120,5162161,5271677,5301729,5296091,5303164,5212368,5246658,5254108)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favorite brands",
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
                                link: "/featured-shops/auto-ship/royal-canin/dog/?origin=autoship&type=rcdog&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog2_DT"), alt: "Nulo", title: "Nulo", link: "/featured-shops/auto-ship/nulo/dog/?origin=autoship&type=nulodog&dec=learnmore#tabs-1" },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog3_DT"),
                                alt: "Eukanuba",
                                title: "Eukanuba\u2122",
                                link: "/featured-shops/auto-ship/eukanuba/?origin=autoship&type=eukanuba&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog4_DT"),
                                alt: "Instinct",
                                title: "Instinct®",
                                link: "/featured-shops/auto-ship/instinct/dog/?origin=autoship&type=instinctdog&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog9_DT"),
                                alt: "Hill's® Science Diet",
                                title: "Hill's Science Diet®",
                                link: "/featured-shops/auto-ship/hills-science-diet/?origin=autoship&type=hills&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog5_DT"),
                                alt: "Milk-Bone",
                                title: "Milk-Bone®",
                                link: "/featured-shops/auto-ship/milk-bone/?origin=autoship&type=milkbone&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog6_DT"),
                                alt: "Nylabone Healthy Edibles",
                                title: "Nylabone® Healthy Edibles",
                                link: "/featured-shops/auto-ship/nylabone/?origin=autoship&type=nylabone&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog7_DT"),
                                alt: "Himalayan Dog Chew",
                                title: "Himalayan Dog Chew®",
                                link: "/featured-shops/auto-ship/himalayan/?origin=autoship&type=himalayan&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Dog8_DT"),
                                alt: "Tiki Dog",
                                title: "Tiki Dog®",
                                link: "/featured-shops/auto-ship/tiki-dog/?origin=autoship&type=tikidog&dec=learnmore#tabs-1",
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
                        shopLink: "/featured-shops/auto-ship/canned-food+dry-food+food+food-toppers+freeze-dried+veterinary-diet/cat/?origin=autoship&type=catfood&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Cat_MO"),
                                promoTitle: "Dry, wet, toppers, frozen & more",
                                promoCopy: "",
                                promoAlt: "Dry, wet, toppers, frozen & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Cat_DT") },
                            },
                            skuList: "(5303566,5279240,5162799,5299096,5267332,5289308,5286748,5178580,5310403,5236228,5173536)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Litter",
                        shopLink: "/featured-shops/auto-ship/litter/cat/?origin=autoship&type=catlitter&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Cat_MO"),
                                promoTitle: "Deodorizing, lightweight, flushable & more",
                                promoAlt: "Deodorizing, lightweight, flushable & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Cat_DT") },
                            },
                            skuList: "(5219991,5197822,5212427,5288001,5237338,5293270,5308031,5276505,5199203,5237561,5294572)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Waste Disposal",
                        shopLink:
                            "/featured-shops/auto-ship/cleaners-and-brushes+pet-hair-removers+potty-training+repellents+stain-and-odor-removers+stain-and-urine-removers+vacuums+waste-disposal+waste-removers/cat/?origin=autoship&type=waste&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Cat_MO"),
                                promoTitle: "Litter systems, scoops, refills & more",
                                promoAlt: "Litter systems, scoops, refills & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Cat_DT") },
                            },
                            skuList: "(5138932,5211285,5276501,5279847,5286667,5131329)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Wellness",
                        shopLink:
                            "/featured-shops/auto-ship/collars+dental-sprays-and-rinses+dental-treats+pills+spot-ons+stress-and-anxiety-relief+toothbrushes-and-toothpaste+vitamins-and-supplements/cat/?origin=autoship&type=wellness&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Cat_MO"),
                                promoTitle: "Hairball remedies, dental treats & more",
                                promoAlt: "Hairball remedies, dental treats & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Cat_DT") },
                            },
                            skuList: "(5191472,5214367,5287159,5286901,5309918,5296089,5289016,5246658,5102586,5223998,5305451)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favorite brands",
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
                                link: "/featured-shops/auto-ship/royal-canin/cat/?origin=autoship&type=rccat&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat2_DT"), alt: "Nulo", title: "Nulo", link: "/featured-shops/auto-ship/nulo/cat/?origin=autoship&type=nulocat&dec=learnmore#tabs-1" },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat3_DT"), alt: "Applaws", title: "Applaws", link: "/featured-shops/auto-ship/applaws/?origin=autoship&type=applaws&dec=learnmore#tabs-1" },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat4_DT"),
                                alt: "Instinct",
                                title: "Instinct®",
                                link: "/featured-shops/auto-ship/instinct/cat/?origin=autoship&type=instinctcat&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat5_DT"),
                                alt: "Tiki Cat",
                                title: "Tiki Cat®",
                                link: "/featured-shops/auto-ship/tiki-cat/?origin=autoship&type=tikicat&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Cat6_DT"), alt: "Inaba", title: "Inaba", link: "/featured-shops/auto-ship/inaba/?origin=autoship&type=inaba&dec=learnmore#tabs-1" },
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
                        shopLink: "/featured-shops/auto-ship/bedding+litter/small-pet/?origin=autoship&type=bedding&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-SmPet_MO"),
                                promoTitle: "Natural, scented, colorful & more",
                                promoCopy: "",
                                promoAlt: "Natural, scented, colorful & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-SmPet_DT") },
                            },
                            skuList: "(5223213,5318527,5233099,5293735,5319159,5272245,5175722,5319060)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Hay",
                        shopLink: "/featured-shops/auto-ship/hay/small-pet/?origin=autoship&type=hay&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-SmPet_MO"),
                                promoTitle: "Natural, alfalfa, botanical & more",
                                promoAlt: "Natural, alfalfa, botanical & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-SmPet_DT") },
                            },
                            skuList: "(5174852,5236556,5318774,5271550,5271490)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Treats & Chews",
                        shopLink: "/featured-shops/auto-ship/treats/small-pet/?origin=autoship&type=smallpet-treats&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-SmPet_MO"),
                                promoTitle: "Crunchy, freeze-dried, fruity & more",
                                promoAlt: "Crunchy, freeze-dried, fruity & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-SmPet_DT") },
                            },
                            skuList: "(5073166,5318576,5318573,5174990,5301077,5319360)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food",
                        shopLink: "/featured-shops/auto-ship/food/small-pet/?origin=autoship&type=smallpet-food&dec=learnmore/#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-SmPet_MO"),
                                promoTitle: "Pellet, grain-free, forage diet & more",
                                promoAlt: "Pellet, grain-free, forage diet & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-SmPet_DT") },
                            },
                            skuList: "(5202828,5202825,5045302,5175721,5258411,5312209,5251724,5216957)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favorite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet1_DT"), alt: "Oxbow", title: "Oxbow", link: "/featured-shops/auto-ship/oxbow/?origin=autoship&type=oxbow&dec=learnmore#tabs-1" },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet2_DT"),
                                alt: "Full Cheeks",
                                title: "Full Cheeks\u2122",
                                link: "/featured-shops/auto-ship/full-cheeks/?origin=autoship&type=fullcheeks&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet3_DT"),
                                alt: "KAYTEE",
                                title: "KAYTEE®",
                                link: "/featured-shops/auto-ship/kaytee/small-pet/?origin=autoship&type=kaytee&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet4_DT"),
                                alt: "carefresh",
                                title: "carefresh®",
                                link: "/featured-shops/auto-ship/carefresh/?origin=autoship&type=carefresh&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet5_DT"),
                                alt: "Vitakraft",
                                title: "Vitakraft®",
                                link: "/featured-shops/auto-ship/vitakraft/small-pet/?origin=autoship&type=vitakraft&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet6_DT"),
                                alt: "Science Selective",
                                title: "Science Selective",
                                link: "/featured-shops/auto-ship/science-selective/?origin=autoship&type=scienceselective&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet7_DT"),
                                alt: "Marshall",
                                title: "Marshall",
                                link: "/featured-shops/auto-ship/marshall/?origin=autoship&type=marshall&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet8_DT"),
                                alt: "Tropical Carnival",
                                title: "Tropical Carnival®",
                                link: "/search/small-pet/?q=tropical%20carnival&pmin=0.01&srule=relevance/?origin=autoship&type=tropicalcarnival&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet9_DT"), alt: "Mazuri", title: "Mazuri", link: "/featured-shops/auto-ship/mazuri/?origin=autoship&type=mazuri&dec=learnmore#tabs-1" },
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
                        shopLink: "/featured-shops/auto-ship/water-care-and-conditioners+water-conditioners/fish/?origin=autoship&type=watercare&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Fish_MO"),
                                promoTitle: "Conditioners, salts, cleaners & more",
                                promoCopy: "",
                                promoAlt: "Conditioners, salts, cleaners & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Fish_DT") },
                            },
                            skuList: "(5291594,5291854,2031114,5006506,5272978,2031130,5272861,5098502)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Filter Media",
                        shopLink: "/featured-shops/auto-ship/filter-media+filters/fish/?origin=autoship&type=filtermedia&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Fish_MO"),
                                promoTitle: "Bio-foam, carbon, infused pads & more",
                                promoAlt: "Bio-foam, carbon, infused pads & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Fish_DT") },
                            },
                            skuList: "(5300983,5282041,5262322,5073694,5073693,5120426,1832675,5081998)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Food",
                        shopLink: "/featured-shops/auto-ship/food/fish/?origin=autoship&type=fishfood&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Fish_MO"),
                                promoTitle: "Flakes, frozen worms, pellets & more",
                                promoAlt: "Flakes, frozen worms, pellets & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Fish_DT") },
                            },
                            skuList: "(5267255,5014957,5164004,5037862,5300535)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favorite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish1_DT"), alt: "Top Fin", title: "Top Fin®", link: "/featured-shops/auto-ship/top-fin/?origin=autoship&type=topfin&dec=learnmore#tabs-1" },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish5_DT"), alt: "Fluval", title: "Fluval®", link: "/featured-shops/auto-ship/fluval/?origin=autoship&type=fluval&dec=learnmore#tabs-1" },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish3_DT"),
                                alt: "Marineland",
                                title: "Marineland®",
                                link: "/featured-shops/auto-ship/marineland/fish/?origin=autoship&type=marineland&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish4_DT"), alt: "API", title: "API®", link: "/featured-shops/auto-ship/api/?origin=autoship&type=api&dec=learnmore#tabs-1" },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish2_DT"), alt: "Tetra", title: "Tetra®", link: "/featured-shops/auto-ship/tetra/?origin=autoship&type=tetra&dec=learnmore#tabs-1" },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish6_DT"),
                                alt: "Instant Ocean",
                                title: "Instant Ocean",
                                link: "/featured-shops/auto-ship/instant-ocean/?origin=autoship&type=instantocean&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish7_DT"), alt: "Seachem", title: "Seachem®", link: "/featured-shops/auto-ship/seachem/?origin=autoship&type=seachem&dec=learnmore#tabs-1" },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Fish9_DT"),
                                alt: "Omega One",
                                title: "Omega\u2122 One",
                                link: "/featured-shops/auto-ship/omega-one/?origin=autoship&type=omegaone&dec=learnmore#tabs-1",
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
                        shopLink: "/featured-shops/auto-ship/food+vitamins-and-supplements/reptile/?origin=autoship&type=reptilefood&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Reptile_MO"),
                                promoTitle: "Crickets, mealworms, frozen food & more",
                                promoCopy: "",
                                promoAlt: "Crickets, mealworms, frozen food & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Reptile_DT") },
                            },
                            skuList: "(5163010,5131437,5049927,5284933,5290744,5071678,5176902,5290847,5312205)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Substrate",
                        shopLink: "/featured-shops/auto-ship/substrate-and-bedding/reptile/?origin=autoship&type=substrate&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Reptile_MO"),
                                promoTitle: "Carpet, natural bedding, moss, sand & more",
                                promoAlt: "Carpet, natural bedding, moss, sand & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Reptile_DT") },
                            },
                            skuList: "(5037116,5159947,5229836,5290804,5238596,5290974,5263218,5229836,5290988,5120348)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Heating & Lighting",
                        shopLink:
                            "/featured-shops/auto-ship/bulbs-and-lamps+humidity-and-temperature-controls+light-fixtures+lighting-and-heaters+lights/reptile/?origin=autoship&type=reptileheat&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Reptile_MO"),
                                promoTitle: "Bulbs, lamps & temperature controls",
                                promoAlt: "Bulbs, lamps & temperature controls",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Reptile_DT") },
                            },
                            skuList: "(5123303,5152635,5312305,5314805,5290810)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Water Care",
                        shopLink: "/featured-shops/auto-ship/filter-media+filters+water-care-and-conditioners+water-conditioners/reptile/?origin=autoship&type=reptilecare&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Reptile_MO"),
                                promoTitle: "Filters, conditioners, sponges & more",
                                promoAlt: "Filters, conditioners, sponges & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Reptile_DT") },
                            },
                            skuList: "(2051087,5210628,5210626)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favorite brands",
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
                                link: "/featured-shops/auto-ship/zoo-med/reptile/?origin=autoship&type=zoomed&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile2_DT"),
                                alt: "Thrive",
                                title: "Thrive\u2122",
                                link: "/featured-shops/auto-ship/thrive/?origin=autoship&type=thrive&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile3_DT"),
                                alt: "Tetra",
                                title: "Tetra",
                                link: "/featured-shops/auto-ship/tetra/reptile/?origin=autoship&type=tetrareptile&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile4_DT"),
                                alt: "Exo Terra",
                                title: "Exo Terra®",
                                link: "/featured-shops/auto-ship/exo-terra/?origin=autoship&type=exo-terra&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile5_DT"),
                                alt: "Fluker's",
                                title: "Fluker's",
                                link: "/featured-shops/auto-ship/flukers/?origin=autoship&type=flukers&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile6_DT"), alt: "Arcadia", title: "Arcadia", link: "/featured-shops/auto-ship/arcadia/?origin=autoship&type=arcadia&dec=learnmore#tabs-1" },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Reptile7_DT"), alt: "Repashy", title: "Repashy", link: "/reptile/food/repashy/?origin=autoship&type=repashy&dec=learnmore#tabs-1" },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet9_DT"), alt: "Mazuri", title: "Mazuri", link: "/featured-shops/auto-ship/mazuri/?origin=autoship&type=mazuri&dec=learnmore#tabs-1" },
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
                        shopLink: "/bird/wild-bird-food-and-supplies/wild-bird-food/?origin=autoship&type=wildbirdfood&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Bird_MO"),
                                promoTitle: "Seeds, nectar, mealworms & more",
                                promoCopy: "",
                                promoAlt: "Seeds, nectar, mealworms & more",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-1_AS-Bird_DT") },
                            },
                            skuList: "(5287074,5287072,5193787,5295047,5271560,5300492,5309879,5285229)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Pet Bird Food",
                        shopLink: "/bird/food-and-treats/pet-bird-food/?origin=autoship&type=petbirdfood&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Bird_MO"),
                                promoTitle: "Seeds, pellets, treats & more",
                                promoAlt: "Seeds, pellets, treats & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-2_AS-Bird_DT") },
                            },
                            skuList: "(5261392,1041187,5137728,5146788,5232669,5110439,1041187,5094600,5109037,5313916,5291007)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Toys & Accessories",
                        shopLink: "/featured-shops/auto-ship/toys+toys-and-habitat-accessories/bird/?origin=autoship&type=toys&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Bird_MO"),
                                promoTitle: "Swings, mirrors, ladders, toys & more",
                                promoAlt: "Swings, mirrors, ladders, toys & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-3_AS-Bird_DT") },
                            },
                            skuList: "(5110962,5142324,5161308,5247961,5142480,5110945,5142322)",
                        },
                    },
                    {
                        containerName: "ExclusiveOffer",
                        title: "Treats & Supplements",
                        shopLink: "/featured-shops/auto-ship/treats+vitamins-and-supplements/bird/?origin=autoship&type=birdtreats&dec=learnmore#tabs-1",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: {
                                imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Bird_MO"),
                                promoTitle: "Crunchy sticks, cookies, treats & more",
                                promoAlt: "Crunchy sticks, cookies, treats & more",
                                promoCopy: "",
                                desktop: { imgContent: imagelink("WEB-1442405-Aug22_3COL-4_AS-Bird_DT") },
                            },
                            skuList: "(5290113,5159039,5291051,5271798,5075801,5094693,5271663)",
                        },
                    },
                    {
                        containerName: "CategoryRow",
                        title: "5% OFF favorite brands",
                        shouldCallApi: false,
                        isQuickLink: true,
                        itemsPerView: 6,
                        variant: "",
                        displaySettings: { desktop: 6, tablet: 3.5, mobile: 2.5 },
                        tileSections: [
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet3_DT"),
                                alt: "KAYTEE",
                                title: "KAYTEE®",
                                link: "/featured-shops/auto-ship/kaytee/bird/?origin=autoship&type=kaytee&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird9_DT"),
                                alt: "All Living Things",
                                title: "All Living Things®",
                                link: "/featured-shops/auto-ship/all-living-things/bird/?origin=autoship&type=alllivingthings&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird7_DT"),
                                alt: "ZuPreem",
                                title: "ZuPreem®",
                                link: "/featured-shops/auto-ship/zupreem/bird/?origin=autoship&type=zupreem&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird5_DT"),
                                alt: "Lafeber's",
                                title: "Lafeber's®",
                                link: "/featured-shops/auto-ship/lafebers/bird/?origin=autoship&type=lafebers&dec=learnmore#tabs-1",
                            },
                            {
                                imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-SmPet8_DT"),
                                alt: "Tropical Carnival",
                                title: "Tropical Carnival®",
                                link: "/featured-shops/auto-ship/browns/?origin=autoship&type=tropicalcarnival&dec=learnmore#tabs-1",
                            },
                            { imgContent: imagelink("WEB-1442405-Aug22_PCI_AS-Bird2_DT"), alt: "Brown's", title: "Brown's®", link: "/featured-shops/auto-ship/browns/?origin=autoship&type=browns&dec=learnmore#tabs-1" },
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
                    "<p>Yes. Autoship customers can change the frequency, the items and the order date of their subscription at anytime. Customers can choose to skip their upcoming order or cancel their order. Please allow up to 24 hours for modifications to be processed.</p>",
            },
            {
                title: "How do I cancel my Autoship subscription?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    '<p>Sign into your account and go to "Manage Autoship" under the Treats page. Select "Cancel Subscription." You\'ll be prompted to submit a cancel reason to finalize your cancellation, and then you\'ll receive an email confirming your cancellation.</p>',
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
                    '<p>All Autoship orders require a credit card payment. To change your credit card or add a new credit card, sign into your Treats account on the "Manage Autoship" page and select "Change Billing." This will direct you to the credit card page, where you can add or update credit cards. Alternative payments, such as, Afterpay, PayPal and gift cards cannot be accepted on Autoship subscriptions.</p>',
            },
            {
                title: "How will I know when my next Autoship order is getting delivered?",
                subTitle: "",
                isActive: false,
                htmlContent:
                    "<p>We'll send you an email reminder that includes the upcoming order date with the items on subscription and the most up-to-date price. You will have 5 days to review and make changes to your order before the order is placed. You can also sign in to your account and manage your Autoship to see your next order date to change the date, send the order immediately or skip that order. </p>",
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