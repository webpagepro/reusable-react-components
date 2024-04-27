// DPT-1969 - PreXmas Sale Shop - 12.19 - 12.25 - lu: 12.08.2022-SU
// herobanner, categoryrow, sm promobanner, categoryrow with left aligned text, storytelling, featuredtileGrid, storytelling, featuredtileGrid
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    // Hero banner
    {
        containerName: "heroBanner",
        title: "Jolly Good Deals",
        description: "This week only thru 12/24",
        isInverted: true,
        backgroundColor: "#F9F9F9",
        alt: "Pre Christmas Sale",
        imageInfo: {
            url: imagelink("WEB-1325353-Dec22-CIRC-MP-HB_ML-MO"),// imagelink(""),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1325353-Dec22-CIRC-MP-HB_PRE-XMAS-DT"), // imagelink(""),
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
        title: "Toys to treasure",
        shopLink: "/sale/todays-deals-0027/deal-7/?origin=todaysdeals&desc=carousel1&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325353-Dec22_PC-S_PRE-XMAS-DogCat-Toys_MO"),
                promoTitle: "Buy 3, get the 4th & 5th FREE",
                promoCopy: "all dog & cat toys",
                promoAlt: "Dog & cat toys",
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_PC-S_PRE-XMAS-DogCat-Toys_DT") },
            },
            skuList: "(5324080,5333034,5331645,5305553,5332641,5332934,5331123,5332848,5332824,5167329,5247173,5264309)",
        },
    },
    // category row
    {
        containerName: "CategoryRow",
        variant: "1-6up",
        title: "Santa's top picks",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC8_PRE-XMAS-DogDeal_DT"),
                alt: "Build-A-Bear toys and apparel",
                title: "Save 30% Build-A-Bear toys and apparel",
                link: "/sale/todays-deals-0027/dog-deals/deal-23/?origin=todaysdeals&desc=deal1&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC8_PRE-XMAS-DogDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC2_PRE-XMAS-DogDeal_DT"),
                alt: "Orthopedic bed",
                title: "Save 30% orthopedic dog beds",
                link: "/sale/todays-deals-0027/dog-deals/deal-19/?origin=todaysdeals&desc=deal2&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC2_PRE-XMAS-DogDeal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC3_PRE-XMAS-Deal_DT"),
                alt: "Cat treats",
                title: "Buy 2, get the 3rd 50% OFF select cat treats",
                link: "/sale/todays-deals-0027/cat-deals/deal-7/?origin=todaysdeals&desc=deal3&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC3_PRE-XMAS-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC4_PRE-XMAS-Deal_DT"),
                alt: "Cat furniture towers",
                title: "Save up to 30% select cat furniture towers",
                link: "/sale/todays-deals-0027/cat-deals/deal-17/?origin=todaysdeals&desc=deal4&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC4_PRE-XMAS-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC5_PRE-XMAS-Deal_DT"),
                alt: "Aquatic starter kits",
                title: "Save 40% select aquatic starter kits, 2.5 - 55 gal.",
                link: "/sale/todays-deals-0027/fish-deals/deal-13/?origin=todaysdeals&desc=deal5&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC5_PRE-XMAS-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC6_PRE-XMAS-Deal_DT"),
                alt: "Aquatic ensembles",
                title: "Save up to $200 select aquatic ensembles",
                link: "/sale/todays-deals-0027/fish-deals/deal-14/?origin=todaysdeals&desc=deal6&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC6_PRE-XMAS-Deal_DT")
                },
                alignText: 'left',
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
    // card 4 up
    {
        containerName: "featuredTilesGrid",
        title: "Season's savings",
        subTitle: "",
        displayLink: false,
        truncateLines: 2,
        linkLabel: "",
        variant: "4up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-1_PRE-XMAS_Dog_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-1_PRE-XMAS_Dog_DT") },
                alt: "Dog beds",
                title: "Save 50%",
                subTitle: "select Merry & Bright™ dog beds",
                readMoreLink: "/sale/todays-deals-0027/dog-deals/deal-21/?origin=todaysdeals&desc=deal1&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-2_PRE-XMAS_MB-Clothing_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-2_PRE-XMAS_MB-Clothing_DT") },
                alt: "Holiday apparel",
                title: "Save 50%",
                subTitle: "all Merry & Bright™ apparel",
                readMoreLink: "/sale/todays-deals-0027/dog-deals/deal-22/?origin=todaysdeals&desc=deal2&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-5_PRE-XMAS_BU-MB-Sweaters_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-5_PRE-XMAS_BU-MB-Sweaters_DT") },
                alt: "Ugly sweaters and holiday costumes",
                title: "Save 50%",
                subTitle: "all Merry & Bright™ ugly sweaters & costumes",
                readMoreLink: "/sale/todays-deals-0027/dog-deals/deal-24/?origin=todaysdeals&desc=deal3&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-4_PRE-XMAS_Fish_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-4_PRE-XMAS_Fish_DT") },
                alt: "Holiday aquatic décor",
                title: "Save 50%",
                subTitle: "all Merry & Bright™ aquatic décor",
                readMoreLink: "/sale/todays-deals-0027/fish-deals/deal-12/?origin=todaysdeals&desc=deal4&type=card4up",
            },
        ],
    },
    // storytelling product carousel
    {
        containerName: "ExclusiveOffer",
        title: "Winter wonder-walks",
        shopLink: "/sale/todays-deals-0027/deal-6/?origin=todaysdeals&desc=carousel2&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325353-Dec22_PC-S_PRE-XMAS-DogCat-Collars-Leashes_MO"),
                promoTitle: "Save 50%",
                promoCopy: "all Merry & Bright™ dog & cat collars & leashes ",
                promoAlt: "Holiday collars and leashes",
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_PC-S_PRE-XMAS-DogCat-Collars-Leashes_DT") },
            },
            skuList: "(5332654,5332901,5332884,5332972,5331982,5332047,5332648,5332008,5332906,5332974,5333028,5332014)",
        },
    },
    { // Promo Banner Medium
        containerName: "PromoBanner",
        title: "Earn 5X points on all Hill's® Science Diet® dog & cat purchases thru 12/31, see terms.***",
        href: "/account/treats-offers/?origin=todaysdeals&desc=Hills&type=mediumbanner",
        imgContent: imagelink("WEB-1600452-Jan23_HP-PROMO-MB2_Treats_MO"),
        desktop: {
            imgContent: imagelink("WEB-1600452-Jan23_HP-PROMO-MB2_Treats_DT"),
        },
        ctaText: "Activate now",
        alt: "Earn 5X points on all Hill's® Science Diet® dog & cat purchases thru 12/31, see terms.***",
        isInverted: false,
    },
    // card 2 up
    {
        containerName: "featuredTilesGrid",
        title: "Treats members get more!",
        subTitle: "",
        displayLink: false,
        truncateLines: 2,
        linkLabel: "",
        variant: "2up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_2COL-SC-1_ML_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_2COL-SC-1_ML_DT") },
                alt: "Earn 2X pts on Merry & Bright holiday gear",
                title: "Earn 2X points",
                subTitle: "on Merry & Bright holiday gear. Sign in to your Treats account to activate offer. Terms apply.",
                readMoreLink: "/account/treats-offers/?origin=todaysdeals&desc=deal1&type=card2up",
            },
            {
                imgContent: imagelink("WEB-1325351-Oct22_2COL-SC-2_ML_MO"),
                desktop: { imgContent: imagelink("WEB-1325351-Oct22_2COL-SC-2_ML_DT") },
                alt: "Get 1,000 Treats points with profile completion",
                title: "Get 1,000 points",
                subTitle: "Complete your profile to receive personalized offers & exclusive discounts! Terms apply. ",
                readMoreLink: "/account/?origin=todaysdeals&desc=deal2&type=card2up",
            },
        ],
    }
]

export default data_container;
