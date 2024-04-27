// DPT-3820 - Today's Deals 0027 - 12.25 - 12.27 2:30am - lu: 12.13.2022-JR
// herobanner, categoryrow, sm promobanner, 6-tile promo / categoryrow with left aligned text, storytelling, featuredtileGrid, storytelling, featuredtileGrid
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    // Hero banner
    {
        containerName: "heroBanner",
        title: "December Deals",
        description: "Where joy meets savings!",
        isInverted: true,
        backgroundColor: "#F9F9F9",
        alt: "Super Saturday Sale",
        imageInfo: {
            url: imagelink("WEB-1325353-Dec22-CIRC-MP-HB_ML-MO"),// imagelink("string"),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1325353-Dec22-CIRC-MP-HB_ML-DT"), // imagelink("string"),
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
    // promo banner small
    {
        containerName: "PromoBanner",
        size: "sm",
        title: "Save $10 on any Training Package",
        href: "https://services.petsmart.com/training/?origin=todaysdeals&desc=smpromobanner&type=banner",
        imgContent: imagelink("WEB-1325353-Dec22_PROMO-SB_ML-Training_MO"),
        desktop: { imgContent: imagelink("WEB-1325353-Dec22_PROMO-SB_ML-Training_DT") },
        ctaText: "Book now",
        isInverted: true,
        alt: "Training package",
    },
    // category row
    {
        containerName: "CategoryRow",
        variant: "1-6up",
        title: "Top deals",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC1_ML-Deal_DT"),
                alt: "Dog cleanup",
                title: "Buy 1, get the 2nd 25% OFF dog cleanup essentials",
                link: "/sale/todays-deals-0027/dog-deals/deal-3/?origin=todaysdeals&desc=deal1&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC1_ML-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC2_ML-Deal_DT"),
                alt: "Natural cat food toppers",
                title: "Buy 10, get the 11th & 12th FREE all natural cat food toppers",
                link: "/sale/todays-deals-0027/cat-deals/deal-1/?origin=todaysdeals&desc=deal2&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC2_ML-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC3_ML-Deal_DT"),
                alt: "Flea and tick prevention",
                title: "Save up to 10% select dog & cat flea & tick prevention products",
                link: "/sale/todays-deals-0027/deal-1/?origin=todaysdeals&desc=deal3&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC3_ML-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC4_ML-Deal_DT"),
                alt: "Reptile terrarium",
                title: "Save up to $50 select reptile terrariums",
                link: "/sale/todays-deals-0027/reptile-deals/deal-1/?origin=todaysdeals&desc=deal4&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC4_ML-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC5_ML-Deal_DT"),
                alt: "Aquariums & starter kits",
                title: "Starting at $24.99 select aquariums & starter kits, 2.5-55 gal.",
                link: "/sale/todays-deals-0027/fish-deals/deal-4/?origin=todaysdeals&desc=deal5&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC5_ML-Deal_DT")
                },
                alignText: 'left',
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_6TPC6_ML-Deal_DT"),
                alt: "Aquatic ensemble",
                title: "Save up to $150 select aquarium & stand ensembles, 36-125 gal.",
                link: "/sale/todays-deals-0027/fish-deals/deal-5/?origin=todaysdeals&desc=deal6&type=visnav",
                desktop: {
                    imgContent: imagelink("WEB-1325353-Dec22_6TPC6_ML-Deal_DT")
                },
                alignText: 'left',
            },
        ],
    },
    // storytelling product carousel
    {
        containerName: "ExclusiveOffer",
        title: "Mix & match",
        shopLink: "/sale/todays-deals-0027/deal-2/?origin=todaysdeals&desc=carousel1&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325353-Dec22_PC-S_ML-DogCat-Toys_MO"),
                promoTitle: "Buy 3, get the 4th FREE",
                promoCopy: "all dog & cat toys, mix & match allowed",
                promoAlt: "Dog & cat toys",
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_PC-S_ML-DogCat-Toys_DT") },
            },
            skuList: "(5332852,5287659,5332699,5314858,5331848,5305543,5331756,5331751,5287982,5333257,5285648,5324082)",
        },
    },
    // card 4 up
    {
        containerName: "featuredTilesGrid",
        title: "Delicious treat deals",
        displayLink: false,
        truncateLines: 2,
        linkLabel: "",
        variant: "4up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-1_ML_Dog_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-1_ML_Dog_DT") },
                alt: "dog treats & chews",
                title: "Buy 3, get the 4th FREE",
                subTitle: "dog treats & chews",
                readMoreLink: "/sale/todays-deals-0027/dog-deals/deal-2/?origin=todaysdeals&desc=deal1&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-2_ML_Cat_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-2_ML_Cat_DT") },
                alt: "Cat treats",
                title: "Buy 3, get the 4th FREE",
                subTitle: "select cat treats",
                readMoreLink: "/sale/todays-deals-0027/cat-deals/deal-2/?origin=todaysdeals&desc=deal2&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-3_ML_Bird_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-3_ML_Bird_DT") },
                alt: "Bird treats",
                title: "Buy 3, get the 4th FREE",
                subTitle: "all bird treats",
                readMoreLink: "/sale/todays-deals-0027/bird-deals/deal-2/?origin=todaysdeals&desc=deal3&type=card4up",
            },
            {
                imgContent: imagelink("WEB-1325353-Dec22_4CRD-4_ML_SmPet_MO"),
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_4CRD-4_ML_SmPet_DT") },
                alt: "Small pet treats & chews ",
                title: "Buy 3, get the 4th FREE",
                subTitle: "all small pet treats & chews",
                readMoreLink: "/sale/todays-deals-0027/small-pet-deals/deal-3/?origin=todaysdeals&desc=deal4&type=card4up",
            },
        ],
    },
    // storytelling product carousel
    {
        containerName: "ExclusiveOffer",
        title: "Dive in & save!",
        shopLink: "/sale/todays-deals-0027/fish-deals/deal-2/?origin=todaysdeals&desc=carousel2&type=carousel",
        ctaText: "Shop all",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1325353-Dec22_PC-S_ML-AquaticOrnaments_MO"),
                promoTitle: "Buy 1, get the 2nd 50% OFF",
                promoCopy: "all aquatic ornaments & plastic plants",
                promoAlt: "Aquatic ornaments & plastic plants",
                desktop: { imgContent: imagelink("WEB-1325353-Dec22_PC-S_ML-AquaticOrnaments_DT") },
            },
            skuList: "(5332565,5332567,5332052,5332053,5330259,5330260,5332569,5332566,5261818,5276243,5254800,5161518)",
        },
    },
    // card 2 up
    {
        containerName: "featuredTilesGrid",
        title: "Treats members get more!",
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
                subTitle: "Complete your profile to receive personalized offers & exclusive discounts! Terms apply.",
                readMoreLink: "/account/?origin=todaysdeals&desc=deal2&type=card2up",
            },
        ],
    }
]

export default data_container;