// DPT-3950 - Jan. '23  Planner - Sale Shop Updates - lu: 12.21.2022.LJ
// Live: 12/27 - 01/30
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    { // HERO BANNER
        containerName: "heroBanner",
        title: "New Year, New Deals!",
        description: "Shop fresh savings for your pet.",
        isInverted: true,
        backgroundColor: "",
        alt: "New Year, New Deals!",
        imageInfo: {
            url: imagelink("WEB-1325354-Jan23-CIRC-MP-HB_ML-MO"),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1325354-Jan23-CIRC-MP-HB_ML-DT"),
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
                imgContent: imagelink("WEB-1325354-Jan23-CAT1_ML-Dog_DT"),
                alt: "Dog image",
                title: "Dog deals",
                link: "/sale/todays-deals-0030/dog-deals/?origin=todaysdeals&desc=dogdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23-CAT2_ML-Cat_DT"),
                alt: "Cat image",
                title: "Cat deals",
                link: "/sale/todays-deals-0030/cat-deals/?origin=todaysdeals&desc=catdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23-CAT3_ML-Fish_DT"),
                alt: "Fish image",
                title: "Fish deals",
                link: "/sale/todays-deals-0030/fish-deals/?origin=todaysdeals&desc=fishdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23-CAT4_ML-Bird_DT"),
                alt: "Bird image",
                title: "Bird deals",
                link: "/sale/todays-deals-0030/bird-deals/?origin=todaysdeals&desc=birddeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23-CAT5_ML-Reptile_DT"),
                alt: "Reptile image",
                title: "Reptile deals",
                link: "/sale/todays-deals-0030/reptile-deals/?origin=todaysdeals&desc=reptiledeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1325354-Jan23-CAT6_ML-SmPet_DT"),
                alt: "Small pet image",
                title: "Small pet deals",
                link: "/sale/todays-deals-0030/small-pet-deals/?origin=todaysdeals&desc=smallpetdeals&type=visnav"
            },
        ],
    },
    {
        containerName: "PromoBanner",
        size: 'sm',
        title: "$10 OFF any Training package thru 1/29",
        href: "https://services.petsmart.com/training/?origin=todaysdeals&desc=smpromobanner&type=banner",
        imgContent: imagelink("WEB-1325354-Jan23_PROMO-SB_ML-Services_MO"),
        desktop: {
            imgContent: imagelink("WEB-1325353-Dec22_PROMO-SB_ML-Training_DT"),
        },
        ctaText: "Book now",
        alt: "$10 off any Training package",
        isInverted: true,
    },
    {
        // Top deals
        containerName: "CategoryRow",
        title: "Top deals",
        tileVariant: "promo",
        tileSections: [
            {
                title: "Buy 3, get the 4th FREE select dog treats & chews",
                imgContent: imagelink("WEB-1325354-Jan23_6TPC1_ML-Deal_DT"),
                link: "/sale/todays-deals-0030/dog-deals/deal-1/?origin=todaysdeals&desc=deal1&type=visnav",
                alt: "Dog treats and chews",
                alignText: 'left',
            },
            {
                title: "Buy 2, get the 3rd 50% OFF all dog toppers",
                imgContent: imagelink("WEB-1325354-Jan23_6TPC2_ML-Deal_DT"),
                link: "/sale/todays-deals-0030/dog-deals/deal-3/?origin=todaysdeals&desc=deal2&type=visnav",
                alt: "Dog toppers",
                alignText: 'left',
            },
            {
                title: "Sale $24.99 Genius cat litter",
                imgContent: imagelink("WEB-1325354-Jan23_6TPC3_ML-Deal_DT"),
                link: "/sale/todays-deals-0030/cat-deals/deal-2/?origin=todaysdeals&desc=deal3&type=visnav",
                alt: "Cat litter",
                alignText: 'left',
            },
            {
                title: "Buy 3, get the 4th 50% OFF select cat treats",
                imgContent: imagelink("WEB-1325354-Jan23_6TPC4_ML-Deal_DT"),
                link: "/sale/todays-deals-0030/cat-deals/deal-1/?origin=todaysdeals&desc=deal4&type=visnav",
                alt: "Cat treats",
                alignText: 'left',
            },
            {
                title: "Save up to $150 select aquarium & stand ensembles, 36-125 gal.",
                imgContent: imagelink("WEB-1325354-Jan23_6TPC5_ML-Deal_DT"),
                link: "/sale/todays-deals-0030/fish-deals/deal-1/?origin=todaysdeals&desc=deal5&type=visnav",
                alt: "Aquarium and stand ensembles",
                alignText: 'left',
            },
            {
                title: "Save up to $50 select reptile terrariums, 10-40 gal.",
                imgContent: imagelink("WEB-1325354-Jan23_6TPC6_ML-Deal_DT"),
                link: "/sale/todays-deals-0030/reptile-deals/deal-1/?origin=todaysdeals&desc=deal6&type=visnav",
                alt: "Terrarium",
                alignText: 'left',
            },
        ],
    },
    {
        containerName: "ExclusiveOffer",
        title: "Playtime essentials",
        shopLink: "/sale/todays-deals-0030/deal-2/?origin=todaysdeals&desc=carousel1&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325354-Jan23_PC-S_ML-Toys_MO"),
                promoTitle: "Buy 2, get 3rd 50% OFF",
                promoCopy: "select dog & cat toys",
                promoAlt: "Dog and cat toys",
                desktop: { imgContent: imagelink("WEB-1325354-Jan23_PC-S_ML-Toys_DT") },
            },
            skuList: "(5323859,5323851,5288495,5313874,5287880,5331647,5287900,5323968,5287723,5323861,5287722,5287878)",
        },
    },
    {
        // New puppy love - 1-2-4up
        containerName: "featuredTilesGrid",
        title: "New puppy love",
        subTitle: 'Essentials for all their "firsts"!',
        showAllText: "",
        showAllLink: "",
        variant: "1-2-4up",
        textAlign: "left",
        contentAlign: "left",
        tileSections: [
            {
                title: "Save 15%",
                subTitle: "all dog beds",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0030/deal-1/dog/?origin=todaysdeals&desc=deal1&type=card4up",
                imgContent: imagelink("WEB-1325354-Jan23_4CRD-1_ML_DogBeds_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325354-Jan23_4CRD-1_ML_DogBeds_DT"),
                },
                alt: "Dog beds",
            },
            {
                title: "Sale starting at $24.99",
                subTitle: "select wire crates",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0030/dog-deals/deal-4/?origin=todaysdeals&desc=deal2&type=card4up",
                imgContent: imagelink("WEB-1325354-Jan23_4CRD-2_ML_Crates_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325354-Jan23_4CRD-2_ML_Crates_DT"),
                },
                alt: "Wire crates",
            },
            {
                title: "Buy 1, get the 2nd 25% OFF",
                subTitle: "potty & behavior aids",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0030/dog-deals/deal-2/?origin=todaysdeals&desc=deal3&type=card4up",
                imgContent: imagelink("WEB-1325354-Jan23_4CRD-3_ML_DogPads_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325354-Jan23_4CRD-3_ML_DogPads_DT"),
                },
                alt: "Potty and behavior aids",
            },
            {
                title: "Save $2",
                subTitle: "select puppy & small breed dog food, 12-14 lb. bags",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0030/deal-3/?origin=todaysdeals&desc=deal4&type=card4up",
                imgContent: imagelink("WEB-1325354-Jan23_4CRD-4_ML_DogFood_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325354-Jan23_4CRD-4_ML_DogFood_DT"),
                },
                alt: "Dog food",
            },
        ],
    },
    {
        containerName: "ExclusiveOffer",
        title: "Dive into savings",
        shopLink: "/sale/todays-deals-0030/fish-deals/deal-2/?origin=todaysdeals&desc=carousel2&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325354-Jan23_PC-S_ML-Aquariums_MO"),
                promoTitle: "Sale starting at $34.99",
                promoCopy: "select aquariums & starter kits, 3-55 gal.",
                promoAlt: "Tanks and starter kits",
                desktop: { imgContent: imagelink("WEB-1325354-Jan23_PC-S_ML-Aquariums_DT") },
            },
            skuList: "(5262267,5262353,5262256,5262265,5262164,5262266,5253507,5321019,5321024,5253372,5308096,5308097)",
        },
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "Treats members get more!",
        desc:"",
        displayLink: true,
        optionalText: true,
        truncateLines: 0,
        linkLabel: "",
        variant: "2up",
        activateOffers: true,
        tileSections: [
            {
                title: "Earn 4X Treats points",
                desc: "on Valentine's Day goodies valid thru 2/26, sign in to activate, terms apply",
                imgContent: imagelink("WEB-23-1720602-FebMar_OC1_Deals-4XOfferCard_Test_DT"),
                desktop: {
                    imgContent: imagelink("WEB-23-1720602-FebMar_OC1_Deals-4XOfferCard_Test_DT"),
                },
                alt: "4X Treats points on Valentine gear ",
                badges: [
                    { title: "Badge", size: "sm", variant: "primary" },
                    // {title:"Urgent care", size:"sm", variant:"primary"}
                ],
                offerExp: "02/26/2023",
                offerId: "C2247LPNVAL4XD",
            },
            {
                title: "Earn 3X Treats points",
                desc: "on all supplements with offer activation, thru 2/26, terms apply",
                imgContent: imagelink("WEB-23-1720602-FebMar_OC2_Deals-3XOfferCard_Test_DT"),
                desktop: {
                    imgContent: imagelink("WEB-23-1720602-FebMar_OC2_Deals-3XOfferCard_Test_DT"),
                },
                alt: "3X Treats points on supplements",
                badges: [
                    { title: "Badge", size: "sm", variant: "primary" },
                    // {title:"Urgent care", size:"sm", variant:"primary"}
                ],
                offerExp: "02/26/2023",
                offerId: "C2249LPNSUPP3XD",
            },
        ],
    },
]
export default dataContainer;