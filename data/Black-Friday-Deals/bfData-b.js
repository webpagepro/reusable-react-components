// DPT- 3738 11/25 - 11/26 @2:30am, 2022 US Black Friday Deals main landing page, lu: 11.22.2022.RR
/*
 Structure of landing page data
 data_container
    |
    |---- 1. Sections
            |
            |---- 1. Featured Banner (split-panel, image/gif/video right)
            |
            |---- 2. category nav - [six] (Deals by pet)
            |
            |---- 3. Product Carousel - [sku] (Hot Essentials)
            |
            |---- 4. Card- 4up, [variant] (Dog and cat deals)
            |
            |---- 5. Promo Banner - [large] (Save up to 50%)
            |
            |---- 6. Card - 3up, [variant] (Cat deals)
            |
            |---- 7. Promo Banner - [large] (Save 50%)
            |
            |---- 8. Card - 4up, [variant] (Deals Starting at 30% Off)
            |
            |---- 9. Promo Banner - [medium/default] (Earn 2X on Merry & Bright holiday collection)
*/
/* eslint-disable no-mixed-spaces-and-tabs */
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    {
        // 11.08 - 11.24 - 2:30am Featured Media banner
        containerName: "featuredSection",
        title: "Last chance for Exclusive Black Friday Deals",
        subTitle: "Shop online, pickup today! Terms apply.*",
        isInverted: true,
        backgroundColor: "#050708",
        mediaInfo: {
            url: {
                imgContent: imagelink("WEB-1491464-Nov22_FB-I_KFri-Deals_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1491464-Nov22_FB-I_KFri-Deals_DT"),
                }
            },
            alt: "Last chance for Exclusive Black Friday Deals",
            type: "image", // type can be any supported media like image, video etc
        },
    },
    { // DEALS BY PET - category nav
        containerName: "CategoryRow",
        title: "Deals by pet",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1491464-Nov22_6TPC1_KFri_DBP_DT"),
                alt: "Dog image",
                title: "Dog deals",
                link: "/sale/todays-deals-0026/dog-deals/?origin=blackfridaydeals&desc=dogdeals&type=visnav"

            },
            {
                imgContent: imagelink("WEB-1491464-Nov22_6TPC2_KFri_DBP_DT"),
                alt: "Cat deals",
                title: "Cat deals",
                link: "/sale/todays-deals-0026/cat-deals/?origin=blackfridaydeals&desc=catdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1491464-Nov22_6TPC3_KFri_DBP_DT"),
                alt: "Fish image",
                title: "Fish deals",
                link: "/sale/todays-deals-0026/fish-deals/?origin=blackfridaydeals&desc=fishdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1491464-Nov22_6TPC4_KFri_DBP_DT"),
                alt: "Bird image",
                title: "Bird deals",
                link: "/sale/todays-deals-0026/bird-deals/?origin=blackfridaydeals&desc=birddeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1491464-Nov22_6TPC5_KFri_DBP_DT"),
                alt: "Reptile image",
                title: "Reptile deals",
                link: "/sale/todays-deals-0026/reptile-deals/?origin=blackfridaydeals&desc=reptiledeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1491464-Nov22_6TPC6_KFri_DBP_DT"),
                alt: "Small pet image",
                title: "Small pet deals",
                link: "/sale/todays-deals-0026/small-pet-deals/?origin=blackfridaydeals&desc=smallpetdeals&type=visnav"
            },
        ],
    },
    {
        // HOT ESSENTIALS - Product Carousel
        containerName: "ProductCarousel",
        title: "Hot deals",
        // shopLink: "#",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5306082,5320220,5300502,5174852,5160475,5270618,5298860,5332906,5329618,5332760,5332648,5264309)", // comma without space between skus
        },
    },
    { // Dog & Cat deals - 4card up grid display of promocarddw
        containerName: "featuredTilesGrid",
        title: "Dog & cat deals",
        subTitle: "Gifts they'll love and deals you'll love, too!",
        showAllText: "",
        showAllLink: "",
        variant: "4up",
        // textAlign: "center",
        contentAlign: "left",
        tileSections: [
            {
                title: "Buy 3, get the 4th & 5th FREE",
                subTitle: "dog treats & chews",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/dog-deals/deal-7/?origin=blackfridaydeals&desc=deal1&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-1_K-FRI-PREV_Dog-treat_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-1_K-FRI-PREV_Dog-treat_DT"),
                },
                alt: "'Dog treats and chews",
            },
            {
                title: "Save 50%",
                subTitle: "all Merry & Bright™ advent calendars",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/dog-deals/deal-8/?origin=blackfridaydeals&desc=deal2&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-2_K-FRI-PREV_Dog-calendar_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-2_K-FRI-PREV_Dog-calendar_DT"),
                },
                alt: "Advent calendars",
            },
            {
                title: "Buy 2, get 30% OFF",
                subTitle: "select dog & cat beds",
                readMoreText: "",
                readMoreLink: "/sale/black-friday-deals/deal-1/?origin=blackfridaydeals&desc=deal3&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-3_K-FRI-PREV_DogCat-beds_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-3_K-FRI-PREV_DogCat-beds_DT"),
                },
                alt: "Dog and cat beds",
            },
            {
                title: "Save 50%",
                subTitle: "Merry & Bright™ dog and cat collars & leads ",
                readMoreText: "",
                readMoreLink: "/sale/black-friday-deals/deal-5/?origin=blackfridaydeals&desc=deal4&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-4_K-FRI-PREV_DogCat-collars_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-4_K-FRI-PREV_DogCat-collars_DT"),
                },
                alt: "Holiday dog and cat collars and leads",
            },
        ],
    },
    {   // Save 50% Merry- Promo Banner - Large
        // 11.24 - 11.25
        containerName: "promoBannerLarge",
        size: "lg",
        className: "blackfriday-promo-banner",
        title: "Save up to 50%",
        subTitle: "all Merry & Bright toys, clothing, collars, beds & more",
        link: "/sale/black-friday-deals/deal-2/?origin=blackfridaydeals&desc=lgbanner1&type=banner",
        imgContent: imagelink("WEB-1325352-Nov22_PROMO-LG-B_K-FRI-PREV-MerryBrightClothing_MO"),
        desktop: {
            imgContent: imagelink("WEB-1325352-Nov22_PROMO-LG-B_K-FRI-PREV-MerryBrightClothing_DT"),
        },
        ctaText: "Shop now",
        cta: true,
        alt: "Merry and Bright holiday toys, clothing, collars, beds",
        isInverted: true,
    },
    { // CAT DEALS - 3card up grid display of promocard
        containerName: "featuredTilesGrid",
        title: "Cat deals",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "1-3up",
        // textAlign: "center",
        contentAlign: "left",
        tileSections: [
            {
                title: "Buy 3, get the 4th & 5th FREE",
                subTitle: "select cat treats",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/cat-deals/deal-8/?origin=todaysdeals&desc=deal1&type=card3up",
                imgContent: imagelink("WEB-1325352-Nov22_3CRD-1_K-FRI-PREV_CatTreats_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_3CRD-1_K-FRI-PREV_CatTreats_DT"),
                },
                alt: "Cat treats",
                // link: "/sale/todays-deals-0026/cat-deals/deal-8/?origin=todaysdeals&desc=deal1&type=card3up",
            },
            {
                title: "Buy 1, get the 2nd 50% OFF",
                subTitle: "select cat meal toppers",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/cat-deals/deal-7/?origin=todaysdeals&desc=deal2&type=card3up",
                imgContent: imagelink("WEB-1325352-Nov22_3CRD-2_K-FRI-PREV_CatMealToppers_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_3CRD-2_K-FRI-PREV_CatMealToppers_DT"),
                },
                alt: "Cat meal toppers",
                // link: "/sale/todays-deals-0026/cat-deals/deal-7/?origin=todaysdeals&desc=deal2&type=card3up",
            },
            {
                title: "Cat litter deals",
                subTitle: "savings on your favorite brands",
                readMoreText: "",
                readMoreLink: "/sale/black-friday-deals/deal-3/?origin=todaysdeals&desc=deal3&type=card3up",
                imgContent: imagelink("WEB-1325352-Nov22_3CRD-3_K-FRI-PREV_Litter_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_3CRD-3_K-FRI-PREV_Litter_DT"),
                },
                alt: "Cat litter deals",
                // link: "/sale/black-friday-deals/deal-3/?origin=todaysdeals&desc=deal3&type=card3up",
            },
        ],
    },
    {   // Save 50% - Promo Banner - Large
        // 11.24 - 11.25
        containerName: "promoBannerLarge",
        size: "lg",
        className: "blackfriday-promo-banner",
        title: "Save 50%",
        subTitle: "guinea pigs, hamsters, parakeets, reptiles, & cichlids in stores only thru 11/27, terms apply",
        link: "/store-locator/?origin=blackfridaydeals&desc=lgbanner2&type=banner",
        imgContent: imagelink("WEB-1325352-Nov22_PROMO-LG-B_K-FRI-PREV-Guineapigs-bettas_MO"),
        desktop: {
            imgContent: imagelink("WEB-1325352-Nov22_PROMO-LG-B_K-FRI-PREV-Guineapigs-bettas_DT"),
        },
        ctaText: "Find your store",
        cta: true,
        alt: "Small pets, birds, reptiles, and fish",
        isInverted: true,
    },
    { // Deals starting at 30% OFF - 4card up grid display of promocarddw
        containerName: "featuredTilesGrid",
        title: "Deals starting at 30% OFF",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        variant: "4up",
        // textAlign: "center",
        contentAlign: "left",
        tileSections: [
            {
                title: "Save up to 50%",
                subTitle: "select aquariums & starter kits, 3.5-55 gal.",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/fish-deals/deal-6/?origin=blackfridaydeals&desc=deal5&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-1_K-FRI-PREV_Aquariums_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-1_K-FRI-PREV_Aquariums_DT"),
                },
                alt: "Aquarium starter kits",
            },
            {
                title: "Save 30%",
                subTitle: "select Full Cheeks® small pet habitats ",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/small-pet-deals/deal-6/?origin=blackfridaydeals&desc=deal6&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-2_K-FRI-PREV_SmPetHabitats_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-2_K-FRI-PREV_SmPetHabitats_DT"),
                },
                alt: "Small pet habitats",
            },
            {
                title: "Save 30%",
                subTitle: "Merry & Bright™ small pet & reptile costumes",
                readMoreText: "",
                readMoreLink: "/sale/black-friday-deals/deal-4/?origin=blackfridaydeals&desc=deal7&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-3_K-FRI-PREV_SmPet-Reptile-Costumes_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-3_K-FRI-PREV_SmPet-Reptile-Costumes_DT"),
                },
                alt: "Small pet & reptile costumes",
            },
            {
                title: "Save 50%",
                subTitle: "select bird starter kits",
                readMoreText: "",
                readMoreLink: "/sale/todays-deals-0026/bird-deals/deal-4/?origin=blackfridaydeals&desc=deal8&type=card4up",
                imgContent: imagelink("WEB-1325352-Nov22_4CRD-4_K-FRI-PREV_BirdStarterKits_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1325352-Nov22_4CRD-4_K-FRI-PREV_BirdStarterKits_DT"),
                },
                alt: "bird starter kits",
            },
        ],
    },
    { // Earn 2x Points - Promo banner - medium
        containerName: "PromoBanner",
        title: "Earn 2X points on all Merry & Bright™ holiday gear, terms apply",
        subTitle: "",
        href: "/account/treats-offers/?origin=blackfridaydeals&desc=medbanner1&type=banner",
        ctaText: "Activate offer",
        imgContent: imagelink("WEB-1325352-Nov22_PROMO-MED-B_K-FRI-PREV-MerryBrightHolidaygear_MO"),
        desktop: {
            imgContent: imagelink("WEB-1325352-Nov22_PROMO-MED-B_K-FRI-PREV-MerryBrightHolidaygear_DT"),
        },
        alt: "Earn 2X on Merry & Bright holiday collection",
        isInverted: true,
    },
]
export default data_container;