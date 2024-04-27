// Commerce Cloud Category Slot: sale/S100026/cs-blp-content-placeholder
// DPT-4091 - Todays Deals 0026 - Feb. '23  Planner - Sale Shop Critical Updates - lu: 01.26.2023.JC
// Live Dates: 01/30 - 02/17

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    { // HERO BANNER
        containerName: "heroBanner",
        title: "Show Your Love",
        description: "Fall for our February deals!",
        isInverted: true,
        backgroundColor: "",
        alt: "Fall for our February deals!",
        imageInfo: {
            url: imagelink("WEB-1621359-Feb23-CIRC-MP-HB_ML-MO"),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1621359-Feb23-CIRC-MP-HB_ML-DT"),
            },
        }
    },
    {
        // Deals by pet
        containerName: "CategoryRow",
        title: "Deals by pet",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1621359-Feb23-CAT1_ML-Dog_DT"),
                alt: "Dog image",
                title: "Dog deals",
                link: "/sale/todays-deals-0026/dog-deals/?origin=todaysdeals&desc=dogdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23-CAT2_ML-Cat_DT"),
                alt: "Cat image",
                title: "Cat deals",
                link: "/sale/todays-deals-0026/cat-deals/?origin=todaysdeals&desc=catdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23-CAT3_ML-Fish_DT"),
                alt: "Fish image",
                title: "Fish deals",
                link: "/sale/todays-deals-0026/fish-deals/?origin=todaysdeals&desc=fishdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23-CAT4_ML-Bird_DT"),
                alt: "Bird image",
                title: "Bird deals",
                link: "/sale/todays-deals-0026/bird-deals/?origin=todaysdeals&desc=birddeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23-CAT5_ML-Reptile_DT"),
                alt: "Reptile image",
                title: "Reptile deals",
                link: "/sale/todays-deals-0026/reptile-deals/?origin=todaysdeals&desc=reptiledeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1621359-Feb23-CAT6_ML-SmPet_DT"),
                alt: "Small pet image",
                title: "Small pet deals",
                link: "/sale/todays-deals-0026/small-pet-deals/?origin=todaysdeals&desc=smallpetdeals&type=visnav"
            },
        ],
    },
    {
        containerName: "PromoBanner",
        size: 'sm',
        title: "Get 2,000 Treats points when you spend $25+ on Blue Buffalo® Tastefuls™",
        href: "/account/treats-offers/?origin=todaysdeals&desc=smpromobanner&type=banner",
        imgContent: imagelink("WEB-1621359-Feb23_PROMO-SB_ML-2000_Pts_MO"),
        desktop: {
            imgContent: imagelink("WEB-1621359-Feb23_PROMO-SB_ML-2000_Pts_DT"),
        },
        ctaText: "Activate now",
        alt: "Blue Tastefuls",
        isInverted: true,
    },
    {
        // Top deals
        containerName: "CategoryRow",
        title: "Top deals",
        tileVariant: "promo",
        tileSections: [
            {
                title: "Buy 2, get the 3rd FREE all stain & odor products",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC1_ML-Deal_DT"),
                link: "/sale/todays-deals-0026/deal-1/?origin=todaysdeals&desc=deal1&type=visnav",
                alt: "Stain and odor",
                alignText: 'left',
            },
            {
                title: "Sale starting at $24.99 select wire crates",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC2_ML-Deal_DT"),
                link: "/sale/todays-deals-0026/deal-2/?origin=todaysdeals&desc=deal2&type=visnav",
                alt: "Wire crates",
                alignText: 'left',
            },
            {
                title: "Buy 1, get the 2nd 50% OFF select corrugate cat scratchers",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC7_ML-BUDeal-1_DT"),
                link: "/sale/todays-deals-0026/cat-deals/deal-3/?origin=todaysdeals&desc=deal3&type=visnav",
                alt: "Corrugate cat scratchers",
                alignText: 'left',
            },
            {
                title: "Sale 2 / $51 Purina® Tidy Cats® Lightweight cat litter, 17 lb. pails",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC4_ML-Deal_DT"),
                link: "/sale/todays-deals-0026/cat-deals/deal-6/?origin=todaysdeals&desc=deal4&type=visnav",
                alt: "Lightweight litter",
                alignText: 'left',
            },
            {
                title: "Sale starting at $34.99 select aquariums & starter kits, 3-55 gal.",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC5_ML-Deal_DT"),
                link: "/sale/todays-deals-0026/fish-deals/deal-1/?origin=todaysdeals&desc=deal5&type=visnav",
                alt: "Aquariums and starter kits",
                alignText: 'left',
            },
            {
                title: "Buy 1, get the 2nd 50% OFF all small pet diets",
                imgContent: imagelink("WEB-1621359-Feb23_6TPC6_ML-Deal_DT"),
                link: "/sale/todays-deals-0026/small-pet-deals/deal-3/?origin=todaysdeals&desc=deal6&type=visnav",
                alt: "Small pet diets",
                alignText: 'left',
            },
        ],
    },
    {
        containerName: "ExclusiveOffer",
        title: "Share the love",
        shopLink: "/sale/todays-deals-0026/deal-3/?origin=todaysdeals&desc=carousel1&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1621359-Feb23_PC-S_ML-Toys_MO"),
                promoTitle: "Buy 3, get the 4th FREE",
                promoCopy: "all dog & cat toys",
                promoAlt: "Dog and cat toys",
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_PC-S_ML-Toys_DT") },
            },
            skuList: "(5334789,5334441,5331848,5331745,5325498,1811625,5257778,5247173,5305510,5261017,5305090,5299516,5324084,5308443,5305815,5313782)",
        },
    },
    {
        // Sweet deals - 1-2-4up
        containerName: "featuredTilesGrid",
        title: "Sweet deals",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "1-2-4up",
        gap: "sm",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Buy 1, get the 2nd 25% OFF ",
                subTitle: "dog treats & chews",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/dog-deals/deal-4/?origin=todaysdeals&desc=deal1&type=card4up",
                imgContent: imagelink("WEB-1621359-Feb23_4CRD-1_ML_DogTreatsChews_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_4CRD-1_ML_DogTreatsChews_DT"),
                },
                alt: "dog treats & chews",
            },
            {
                title: "Buy 2, get the 3rd 50% OFF ",
                subTitle: "all dog food toppers",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/dog-deals/deal-2/?origin=todaysdeals&desc=deal2&type=card4up",
                imgContent: imagelink("WEB-1621359-Feb23_4CRD-2_ML_DogFoodToppers_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_4CRD-2_ML_DogFoodToppers_DT"),
                },
                alt: "Dog food toppers",
            },
            {
                title: "Buy 3, get the 4th FREE ",
                subTitle: "all small pet treats & chews",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/small-pet-deals/deal-1/?origin=todaysdeals&desc=deal3&type=card4up",
                imgContent: imagelink("WEB-1621359-Feb23_4CRD-3_ML_SmPetTreatsChews_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_4CRD-3_ML_SmPetTreatsChews_DT"),
                },
                alt: "Small pet treats and chews",
            },
            {
                title: "Buy 10, get the 11th & 12th FREE",
                subTitle: "select cat food toppers",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/cat-deals/deal-5/?origin=todaysdeals&desc=deal4&type=card4up",
                imgContent: imagelink("WEB-1621359-Feb23_4CRD-4_ML_CatToppers_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_4CRD-4_ML_CatToppers_DT"),
                },
                alt: "Cat food toppers",
            },
        ],
    },
    {
        containerName: "ExclusiveOffer",
        title: "Splashy deals",
        shopLink: "/sale/todays-deals-0026/fish-deals/deal-4/?origin=todaysdeals&desc=carousel2&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1621359-Feb23_PC-S_ML-AquaticOrnaments_MO"),
                promoTitle: "Buy 1, get the 2nd 50% OFF ",
                promoCopy: "all aquatic ornaments",
                promoAlt: "Aquatic ornaments",
                desktop: { imgContent: imagelink("WEB-1621359-Feb23_PC-S_ML-AquaticOrnaments_DT") },
            },
            skuList: "(5330259,5330260,5261818,5276243,5123133,5018180,5295371,5139572,5331862,5332026,5332030,5331887)",
        },
    },
    {
        // 2 up grid display of promocard
        containerName: "featuredTilesGrid",
        title: "Treats members get more!",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "2up",
        contentAlign: "left",
        tileSections: [
            {
                title: "Earn 4X Treats points",
                subTitle: "on Valentine's Day goodies valid thru 2/26, sign in to activate, terms apply",
                readMoreText: "",
                readMoreLink: "/account/treats-offers/?origin=todaysdeals&desc=deal1&type=card2up",
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-1_ML_DT"),
                },
                alt: "",
            },
            {
                title: "Earn 3X Treats points",
                subTitle: "on all supplements with offer activation, thru 2/26, terms apply",
                readMoreText: "",
                readMoreLink: "/account/treats-offers/?origin=todaysdeals&desc=deal2&type=card2up",
                imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-2_ML_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1621359-Feb23_2COL-SC-2_ML_DT"),
                },
                alt: "",
            },
        ],
    },
]
export default dataContainer;
