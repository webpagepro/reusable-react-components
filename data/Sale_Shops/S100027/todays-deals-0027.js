// DPT-3965 - Today's Deals 0027 - Super Saturday Sale - 12.17 - 12.19 - lu: 12.14.2022-JR
// herobanner, categoryrow, sm promobanner, categoryrow with left aligned text, storytelling, featuredtileGrid, storytelling, featuredtileGrid
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    // Hero banner
    {
        containerName: "heroBanner",
        title: "Super Saturday Sale",
        description: "Last-minute savings thru 12/18",
        isInverted: true,
        backgroundColor: "#F9F9F9",
        alt: "Super Saturday Sale",
        imageInfo: {
            url: imagelink("WEB-1325353-Dec22-CIRC-MP-HB_ML-MO"),// imagelink(""),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1325353-Dec22-CIRC-MP-HB_SUPSAT-DT"), // imagelink(""),
            },
        }
    },
    // category row
    {
        containerName: "CategoryRow",
        title: "Deals by pet",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC1_HolidayExp-Dog_DT"),
                alt: "Dog image",
                title: "Dog deals",
                link: "/sale/todays-deals-0027/dog-deals/?origin=todaysdeals&desc=dogdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC2_HolidayExp-Cat_DT"),
                alt: "Cat image",
                title: "Cat deals",
                link: "/sale/todays-deals-0027/cat-deals/?origin=todaysdeals&desc=catdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC3_HolidayExp-Fish_DT"),
                alt: "Fish image",
                title: "Fish deals",
                link: "/sale/todays-deals-0027/fish-deals/?origin=todaysdeals&desc=fishdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1325352-Nov22-6TPC4_ML-Bird_DT"),
                alt: "Bird image",
                title: "Bird deals",
                link: "/sale/todays-deals-0027/bird-deals/?origin=todaysdeals&desc=birddeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC4_HolidayExp-Rep_DT"),
                alt: "Reptile image",
                title: "Reptile deals",
                link: "/sale/todays-deals-0027/reptile-deals/?origin=todaysdeals&desc=reptiledeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-1509151-Nov22_6TPC5_HolidayExp-SmPet_DT"),
                alt: "Small pet image",
                title: "Small pet deals",
                link: "/sale/todays-deals-0027/small-pet-deals/?origin=todaysdeals&desc=smallpetdeals&type=visnav"
            },
        ],
    },
    // storytelling product carousel
    {
        containerName: "ExclusiveOffer",
        title: "Tasty treats",
        shopLink: "/sale/todays-deals-0027/dog-deals/deal-8/?origin=todaysdeals&desc=carousel2&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325353-Dec22_PC-S_SUPSAT-DogTreats_MO"),
                promoTitle: "Buy 3, get the 4th & 5th FREE",
                promoCopy: "dog treats & chews",
                promoAlt: "Dog treats & chews",
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_PC-S_SUPSAT-DogTreats_DT") },
            },
            skuList: "(5332336,5329735,5330212,5335593,5298219,5303236,5116751,5293630,5272515,5309846,5306142,5333803)",
        },
    },
    // category row
    {
        containerName: "CategoryRow",
        variant: "1-6up",
        title: "Stocking stuffers",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC1_SUPSAT-Deal_DT"),
                alt: "Dog toys",
                title: "Save 50% all Merry & Bright™ dog toys",
                link: "/sale/todays-deals-0027/dog-deals/deal-9/?origin=todaysdeals&desc=deal1&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC1_SUPSAT-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC2_SUPSAT-Deal_DT"),
                alt: "Toys and scratchers",
                title: "Save 50% all Merry & Bright™ cat toys & scratchers",
                link: "/sale/todays-deals-0027/cat-deals/deal-6/?origin=todaysdeals&desc=deal2&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC2_SUPSAT-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC3_SUPSAT-Deal_DT"),
                alt: "Dog and cat holiday gear",
                title: "Save 50% all Merry & Bright™ dog & cat clothing, collars & leashes",
                link: "/sale/todays-deals-0027/deal-3/?origin=todaysdeals&desc=deal3&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC3_SUPSAT-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC4_SUPSAT-Deal_DT"),
                alt: "Aquatic holiday ornaments",
                title: "Save 50% all Merry & Bright™ aquatic decor",
                link: "/sale/todays-deals-0027/fish-deals/deal-12/?origin=todaysdeals&desc=deal4&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC4_SUPSAT-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC5_SUPSAT-Deal_DT"),
                alt: "Holiday for reptiles",
                title: "Save 50% all Merry & Bright™ for reptiles",
                link: "/sale/todays-deals-0027/reptile-deals/deal-5/?origin=todaysdeals&desc=deal5&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC5_SUPSAT-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC6_SUPSAT-Deal_DT"),
                alt: "Holiday for small pets",
                title: "Save 30% all Merry & Bright™ for small pets",
                link: "/sale/todays-deals-0027/small-pet-deals/deal-7/?origin=todaysdeals&desc=deal6&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC6_SUPSAT-Deal_DT")
                },
                alignText: 'left',
            },
        ],
    },
    // storytelling product carousel
    {
        containerName: "ExclusiveOffer",
        title: "Save 40% on beds",
        shopLink: "/sale/todays-deals-0027/deal-4/?origin=todaysdeals&desc=carousel1&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325353-Dec22_PC-S_SUPSAT-DogCat-Beds_MO"),
                promoTitle: "Save 40%",
                promoCopy: "select dog & cat beds",
                promoAlt: "Dog & cat beds",
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_PC-S_SUPSAT-DogCat-Beds_DT") },
            },
            skuList: "(5305228,5327985,5302715,5310217,5301167,5301168,5290503,5291562,5325735,5325737,5321111,5320632)",
        },
    },
    // card 4 up
    {
        containerName: "featuredTilesGrid",
        title: "Save now, pay later!",
        subTitle: "Select Afterpay at checkout to pay in 4 installments, see terms***",
        displayLink: false,
        truncateLines: 2,
        linkLabel: "",
        variant: "4up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-1_SUPSAT_Fish_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-1_SUPSAT_Fish_DT") },
                alt: "Aquarium & stand ensemble",
                title: "Save up to $250",
                subTitle: "select aquarium & stand ensemble",
                readMoreLink: "/sale/todays-deals-0027/fish-deals/deal-9/?origin=todaysdeals&desc=deal1&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-2_SUPSAT_Reptile_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-2_SUPSAT_Reptile_DT") },
                alt: "Reptile kits",
                title: "Save $75",
                subTitle: "all Thrive & Zoo Med™ starter kits, 40 gal.",
                readMoreLink: "/sale/todays-deals-0027/reptile-deals/deal-4/?origin=todaysdeals&desc=deal2&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-3_SUPSAT_SmPet_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-3_SUPSAT_SmPet_DT") },
                alt: "Habitats",
                title: "Save 30%",
                subTitle: "Full Cheeks™ habitats",
                readMoreLink: "/sale/todays-deals-0027/deal-8/?origin=todaysdeals&desc=deal3&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-4_SUPSAT_Bird_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-4_SUPSAT_Bird_DT") },
                alt: "Bird starter kits",
                title: "Save 50%",
                subTitle: "All Living Things® bird starter kits",
                readMoreLink: "/sale/todays-deals-0027/bird-deals/deal-4/?origin=todaysdeals&desc=deal4&type=card4up",
            },
        ],
    },
    // promo banner small
    {
        containerName: "PromoBanner",
        size: "sm",
        title: "Save $10 when you spend $50+ using FREE Same-Day Delivery",
        href: "/sale/save-10-off-50-free-same-day-delivery/?origin=todaysdeals&desc=smpromobanner&type=banner",
        imgContent: imagelink("WEB-1325353-Dec22_PROMO-SB_ML-FREE-Delivery_MO"),
        desktop: { imgContent: imagelink("WEB-1325353-Dec22_PROMO-SB_ML-FREE-Delivery_DT") },
        ctaText: "Shop now",
        isInverted: true,
        alt: "FREE Same-Day Delivery",
    },
    // card 2 up
    {
        containerName: "featuredTilesGrid",
        title: "Meow-y holidays",
        subTitle: "Save on kitty's seasonal favorites",
        displayLink: false,
        truncateLines: 2,
        linkLabel: "",
        variant: "2up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_2COL-SC-1_SUPSAT_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_2COL-SC-1_SUPSAT_DT") },
                alt: "Cat treats",
                title: "Buy 2, get the 3rd 50% OFF",
                subTitle: "select cat treats",
                readMoreLink: "/sale/todays-deals-0027/cat-deals/deal-7/?origin=todaysdeals&desc=deal1&type=card2up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_2COL-SC-12_SUPSAT_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_2COL-SC-12_SUPSAT_DT") },
                alt: "Litter deals",
                title: "Litter deals",
                subTitle: "Tis the season to stock up & save on Arm & Hammer™, Fresh Step®, & Great Choice® cat litter",
                readMoreLink: "/sale/todays-deals-0027/deal-5/?origin=todaysdeals&desc=deal2&type=card2up",
            },
        ],
    }
]

export default data_container;