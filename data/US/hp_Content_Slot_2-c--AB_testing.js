// DPT-4182 FW3 Loyalty Card - 02.17 - 02.20 - lu: 02.15.2023-JC
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    {
        containerName: "GridDisplay",
        variant: "2-4up",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1645004-Feb23_HP-CAT5_Story_DT"),
                alt: "Dog Food",
                title: "Dog Food",
                link: "/sale/save-10-with-same-day-delivery/canned-food+dry-food+food+fresh-food+frozen-food/dog/?origin=home&desc=spot1&type=hpstory#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1645004-Feb23_HP-CAT6_Story_DT"),
                alt: "Cat Litter",
                title: "Cat Litter",
                link: "/sale/save-10-with-same-day-delivery/litter/cat/?origin=home&desc=spot2&type=hpstory#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1645004-Feb23_HP-CAT7_Story_DT"),
                alt: "Dog Essentials",
                title: "Dog Essentials",
                link: "/sale/save-10-with-same-day-delivery/beds+toys+vitamins-and-supplements/dog/?origin=home&desc=spot3&type=hpstory#tabs-1",
            },
            {
                imgContent: imagelink("WEB-1645004-Feb23_HP-CAT8_Story_DT"),
                alt: "Wild Bird",
                title: "Wild Bird",
                link: "/sale/save-10-with-same-day-delivery/bird-baths+feeders+food/bird/?origin=home&desc=spot4&type=hpstory#tabs-1",
            },
        ],
    },
    {
        containerName: "CategoryRow",
        title: "Shop by pet",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1178113-Jan22_DEAL1_Dog"),
                alt: "",
                title: "Dog",
                link: "/dog/?origin=home&desc=dog&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1178113-Jan22_DEAL2_Cat"),
                alt: "",
                title: "Cat",
                link: "/cat/?origin=home&desc=cat&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1178113-Jan22_DEAL3_Fish"),
                alt: "",
                title: "Fish",
                link: "/fish/?origin=home&desc=fish&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1178113-Jan22_DEAL4_Bird"),
                alt: "",
                title: "Bird",
                link: "/bird/?origin=home&desc=bird&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1178113-Jan22_DEAL5_Reptile"),
                alt: "",
                title: "Reptile",
                link: "/reptile/?origin=home&desc=reptile&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1178113-Jan22_DEAL6_SmPet"),
                alt: "",
                title: "Small pet",
                link: "/small-pet/?origin=home&desc=smallpet&type=shopbypet"
            },
        ],
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "Activate top Treats offers!",
        desc:"",
        displayLink: true,
        optionalText: true,
        truncateLines: 0,
        linkLabel: "",
        variant: "2up",
        activateOffers: true,
        truncateSetting: {
            lineBreak: 2,
            desktop: { lineBreak: 2, }
        },
        tileSections: [
            {
                title: "Earn 3,000 PTS when you spend $35+ online only",
                desc: "Show your pet some love every day, but especially on National Love Your Pet Day! Activate this offer and earn 3,000 Treats points (worth $7.50 in savings) when you spend $35 or more online only through 2/20/23.",
                imgContent: imagelink("WEB-1734450-Feb23_OC2U1_LoyaltyCard"),
                desktop: {
                    imgContent: imagelink("WEB-1734450-Feb23_OC2U1_LoyaltyCard"),
                },
                alt: "Love Your Pet Day! Get 3,000 points when you spend $35 or more, see terms**",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 2/20, terms apply**",
                offerId: "C1921MKTJULY50DIG", //
                hasCarousel: false
            },
            // {
            //     title: "Earn 5X PTS on dental treats & other dental care",
            //     desc: "Prioritize your pet's healthy dental habits during National Pet Dental Health Month! Activate this offer and earn 5X Treats points on dental treats and other dental care products now through 2/26/23.",
            //     imgContent: imagelink("WEB-1734450-Feb23_OC2U2_LoyaltyCard"),
            //     desktop: {
            //         imgContent: imagelink("WEB-1734450-Feb23_OC2U2_LoyaltyCard"),
            //     },
            //     alt: "Earn 5X Treats points on dental treats through 2/26, terms apply†",
            //     // badges: [
            //     //     { title: "Badge", size: "sm", variant: "primary" },
            //     //     // {title:"Urgent care", size:"sm", variant:"primary"}
            //     // ],
            //     offerExp: "Valid thru 2/26, terms apply†",
            //     offerId: "C1921MKTJULY50DIG",
            //     hasCarousel: false,
            //     isInfoOnly: true,
            // },
            {
                title: "Earn 5X PTS on dental treats & other dental care",
                desc: "Prioritize your pet's healthy dental habits during National Pet Dental Health Month! Activate this offer and earn 5X Treats points on dental treats and other dental care products now through 2/26/23.",
                imgContent: imagelink("WEB-1734450-Feb23_OC2U2_LoyaltyCard"),
                desktop: {
                    imgContent: imagelink("WEB-1734450-Feb23_OC2U2_LoyaltyCard"),
                },
                alt: "Earn 5X Treats points on dental treats through 2/26, terms apply†",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid thru 2/26, terms apply†",
                offerId: "C1916MK2XMEMUS", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible Items",
                    ctaText: "Shop all",
                    shopLink: "/",
                    skuList: "(5266411,5306142,5304954,5308332,5175183,5323438,5175180,5322319,5291898,5203878,5221680,5118526)",
                }
            },
        ],
    },
    {
        containerName: "CategoryRow",
        title: "New Pet",
        shouldCallApi: false,
        displaySettings: { desktop: 4, tablet: 3.5, mobile: 2.5 },
        tileSections: [
            {
                imgContent: imagelink("WEB-1600452-Jan23_HP-CAT17_Story_DT"),
                alt: "New Dog",
                title: "New Dog",
                link: "/new-pet-dog.html?origin=home&desc=spot1&type=trending"
            },
            {
                imgContent: imagelink("WEB-1600452-Jan23_HP-CAT18_Story_DT"),
                alt: "New Cat",
                title: "New Cat",
                link: "/new-pet-cat.html?origin=home&desc=spot2&type=trending",
            },
            {
                imgContent: imagelink("WEB-1600452-Jan23_HP-CAT19_Story_DT"),
                alt: "New Fish",
                title: "New Fish",
                link: "/fish/?origin=home&desc=spot3&type=trending"
            },
            {
                imgContent: imagelink("WEB-1600452-Jan23_HP-CAT21_Story_DT"),
                alt: "New Small Pet",
                title: "New Small Pet",
                link: "/small-pet/?origin=home&desc=spot4&type=trending"
            },
        ],
    },
    {
        containerName: "PromoBanner",
        size: "sm",
        title: "Love Your Pet Day! Get 3,000 points when you spend $35 or more, see terms**",
        href: "/account/treats-offers/?origin=home&desc=lovepet&type=tertiary1",
        imgContent: imagelink("WEB-1645004-Feb23_HP-PROMO-SB5_Treats_MO"),
        desktop: { imgContent: imagelink("WEB-1645004-Feb23_HP-PROMO-SB5_Treats_DT") },
        ctaText: "Activate now",
        isInverted: true,
        alt: "Love Your Pet Day! Get 3,000 points when you spend $35 or more, see terms**",
    },
    {
        containerName: "ExclusiveOffer",
        title: "It's Dental Health Month",
        shopLink: "/account/treats-offers/?origin=home&desc=dental&type=offer",
        ctaText: "Activate now",
        shouldCallApi: true,
        tileSections: {
            promoCard: {
                imgContent: imagelink("WEB-1645004-Feb23_HP-3COL2_Exclusive_MO"),
                promoTitle: "Earn 5X Treats points",
                promoCopy: "on dental treats through 2/26, terms apply†",
                promoAlt: "Earn 5X Treats points on dental treats",
                desktop: { imgContent: imagelink("WEB-1645004-Feb23_HP-3COL2_Exclusive_DT") },
            },
            skuList: "(5266411,5306142,5304954,5308332,5175183,5323438,5175180,5322319,5291898,5203878,5221680,5118526)",
        },
    },
    {
        containerName: "PromoBanner",
        title: "Hill's® Science Diet® Perfect Weight - Over 70% of dogs lost weight within 10 weeks*",
        href: "/featured-brands/hills-science-diet/dog/?pmin=0.01&prefn1=customSeries&prefv1=Hill%27s%20Science%20Diet%20Perfect%20Weight&origin=home&desc=hills&type=tertiary2",
        imgContent: imagelink("WEB-1645004-Feb23_HP-PROMO-MB2_Hills_MO"),
        desktop: { imgContent: imagelink("WEB-1645004-Feb23_HP-PROMO-MB2_Hills_DT") },
        ctaText: "Shop now",
        alt: "Hill's® Science Diet® Perfect Weight - Over 70% of dogs lost weight within 10 weeks*",
        isInverted: false,
    },
    {
        containerName: "GridDisplay",
        variant: "3-6up",
        title: "Pet parent favorites",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            { imgContent: imagelink("5302717"), alt: "Dog Beds & Furniture", title: "Dog Beds & Furniture", link: "/dog/beds-and-furniture/?origin=home&desc=spot1&type=favorites", desktop: { imgContent: imagelink("5302717") } },
            { imgContent: imagelink("5321448"), alt: "Dog Carriers & Crates", title: "Dog Carriers & Crates", link: "/dog/crates-gates-and-containment/crates-and-kennels/?origin=home&desc=spot2&type=favorites" },
            { imgContent: imagelink("5320220"), alt: "Cat Furniture & Towers", title: "Cat Furniture & Towers", link: "/cat/beds-and-furniture/furniture-and-towers/?origin=home&desc=spot3&type=favorites" },
            { imgContent: imagelink("5313014"), alt: "Litter Boxes", title: "Litter Boxes", link: "/cat/litter-and-waste-disposal/litter-boxes/?origin=home&desc=spot4&type=favorites" },
            { imgContent: imagelink("5118487"), alt: "Dog Treats", title: "Dog Treats", link: "/dog/treats/?origin=home&desc=spot5&type=favorites" },
            { imgContent: imagelink("5278424"), alt: "Dog Fresh Food", title: "Dog Fresh Food", link: "/dog/food/fresh-food/?origin=home&desc=spot6&type=favorites" },
            { imgContent: imagelink("5246606"), alt: "Cat Wet Food", title: "Cat Wet Food", link: "/cat/food-and-treats/wet-food/?origin=home&desc=spot7&type=favorites" },
            { imgContent: imagelink("5263596"), alt: "Cat Litter", title: "Cat Litter", link: "/cat/litter-and-waste-disposal/litter/?origin=home&desc=spot8&type=favorites" },
            { imgContent: imagelink("5306082"), alt: "Aquariums", title: "Aquariums", link: "/fish/tanks-aquariums-and-nets/?origin=home&desc=spot9&type=favorites" },
            { imgContent: imagelink("5290937"), alt: "Reptile Starter Kits", title: "Reptile Starter Kits", link: "/reptile/starter-kits/?origin=home&desc=spot10&type=favorites" },
            { imgContent: imagelink("5174852"), alt: "Small Pet Hay", title: "Small Pet Hay", link: "/small-pet/food-treats-and-hay/hay/?origin=home&desc=spot11&type=favorites" },
            { imgContent: imagelink("5287074"), alt: "Bird Food", title: "Bird Food", link: "/bird/food-and-treats/?origin=home&desc=spot12&type=favorites" },
        ],
    },
    {
        containerName: "promoBannerLarge",
        className: "halloween-promo-banner",
        title: "Pennington Bird Food",
        subTitle: "Attract beautiful songbirds to your yard with new food varieties ",
        link: "/featured-brands/pennington/?origin=home&desc=pennington&type=largepromo",
        size: "lg",
        imgContent: imagelink("WEB-1600452-Jan23_HP-PROMO-LB4_Bird_MO"),
        desktop: {
            imgContent: imagelink("WEB-1600452-Jan23_HP-PROMO-LB4_Bird_DT")
        },
        ctaText: "Shop now",
        cta: true,
        alt: "",
        isInverted: true,
    },
    {
        containerName: "Favorites",
        title: "Services",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT1_SERV-GRM_DT"),
                alt: "Grooming Salon",
                title: "Grooming Salon",
                link: "https://services.petsmart.com/grooming/?origin=home&desc=grooming&type=services"
            },
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT2_SERV-PSH_DT"),
                alt: "PetsHotel",
                title: "PetsHotel",
                link: "https://services.petsmart.com/petshotel/?origin=home&desc=petshotel&type=services"
            },
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT3_SERV-DDC_DT"),
                alt: "Doggie Day Camp",
                title: "Doggie Day Camp",
                link: "https://services.petsmart.com/doggie-day-camp/?origin=home&desc=ddc&type=services"
            },
            {
                imgContent: imagelink("WEB-1466225-Sept22_HP-CAT4_SERV-TRN_DT"),
                alt: "Dog Training",
                title: "Dog Training",
                link: "https://services.petsmart.com/training/?origin=home&desc=training&type=services"
            },
        ],
    },
    {
        containerName: "PromoBanner",
        title: "Treats Rewards members always get more!",
        href: "/treats-rewards.html?origin=home&desc=treats&type=treatsbanner",
        imgContent: imagelink("WEB-1425010-June22_PROMO-MB_Evergreen-Treats_MO"),
        desktop: { imgContent: imagelink("WEB-1425010-June22_PROMO-MB_Evergreen-Treats_DT") },
        ctaText: "Learn more",
        alt: "Treats Rewards members always get more!",
        isInverted: true,
    },
    {
        containerName: "GridDisplay",
        variant: "3-6up",
        title: "Featured brands",
        shouldCallApi: false,
        showShopAll: true,
        tileSections: [
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB7_NNJ_DT"),
                alt: "Nate + Jeremiah",
                title: "Nate + Jeremiah",
                link: "/nate-and-jeremiah.html/?origin=home&desc=spot1&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB8_Joyhound_DT"),
                alt: "Joyhound",
                title: "Joyhound",
                link: "/featured-brands/joyhound/?origin=home&desc=spot2&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB9_SimplyNourish_DT"),
                alt: "Simply Nourish®",
                title: "Simply Nourish®",
                link: "/featured-brands/simply-nourish/?origin=home&desc=spot3&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB10_ExquisiCat_DT"),
                alt: "ExquisiCat",
                title: "ExquisiCat",
                link: "/featured-brands/exquisicat/?origin=home&desc=spot4&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB11_FullCheeks_DT"),
                alt: "Full Cheeks",
                title: "Full Cheeks",
                link: "/featured-brands/full-cheeks/?origin=home&desc=spot5&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB12_Thrive_DT"),
                alt: "Thrive",
                title: "Thrive",
                link: "/featured-brands/thrive/?origin=home&desc=spot6&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB1_Canidae_DT"),
                alt: "Canidae®",
                title: "Canidae®",
                link: "/featured-brands/canidae/?origin=home&desc=spot7&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1645004-Feb23_HP-FB_Hills_DT"),
                alt: "Hill's® Science Diet®",
                title: "Hill's® Science Diet®",
                link: "/featured-brands/hills-science-diet/dog/?origin=home&desc=spot8&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1645004-Feb23_HP-FB_TidyCats_DT"),
                alt: "Purina® Tidy Cats®",
                title: "Purina® Tidy Cats®",
                link: "/featured-brands/tidy-cats/?origin=home&desc=spot9&type=featuredbrands"
            },
            // {
            //     imgContent: imagelink("WEB-1600452-Jan23_HP-FB_NutroMax_DT"),
            //     alt: "NutroMax",
            //     title: "NutroMax",
            //     link: "/search/nutro-max/?origin=home&desc=spot8&type=featuredbrands"
            // },
            // {
            //     imgContent: imagelink("WEB-1500201-Oct22_HP-FB3_LIVECLEAR_DT"),
            //     alt: "Purina Live Clear",
            //     title: "Purina Live Clear",
            //     link: "/featured-shops/purina-pro-plan-liveclear/?origin=home&desc=spot9&type=featuredbrands"
            // },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB4_NomNom_DT"),
                alt: "Nom Nom",
                title: "Nom Nom",
                link: "/featured-brands/nom-nom/?origin=home&desc=spot10&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB5_MadeByNacho_DT"),
                alt: "Made By Nacho™",
                title: "Made By Nacho™",
                link: "/featured-brands/made-by-nacho/?origin=home&desc=spot11&type=featuredbrands"
            },
            {
                imgContent: imagelink("WEB-1500201-Oct22_HP-FB6_Seresto_DT"),
                alt: "Seresto®",
                title: "Seresto®",
                link: "/featured-brands/elanco/dog-flea-and-tick/?origin=home&desc=spot12&type=featuredbrands"
            },
        ],
    },
    {
        containerName: "featuredTilesGrid",
        title: "Ways to shop",
        subTitle: "Get all your pet essentials right when you need them!",
        variant: "1-2-4up",
        textAlign: "left",
        tileSections: [
            {
                title: "FREE In-Store & Curbside Pickup",
                subTitle: "Buy online & pick up in 3 hours or less",
                readMoreText: "",
                readMoreLink: "/featured-shops/curbside-and-in-store-pickup/?origin=home&desc=spot1&type=waystoshop",
                imgContent: imagelink("WEB-1515501-Oct22_4CRD1_HP-CS-ISPU_MO"),
                alt: "Buy online & pick up in 3 hours or less in store or curbside",
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_4CRD1_HP-CS-ISPU_DT") },
            },
            {
                title: "FREE Same-Day Delivery",
                subTitle: "Powered by DoorDash®",
                readMoreText: "",
                readMoreLink: "/featured-shops/same-day-delivery/?origin=home&desc=spot2&type=waystoshop",
                imgContent: imagelink("WEB-1515501-Oct22_4CRD2_HP-FREE-SDD_MO"),
                alt: "FREE Same-Day Delivery powered by DoorDash",
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_4CRD2_HP-FREE-SDD_DT") },
            },
            {
                title: "Autoship",
                subTitle: "SAVE 35% on first order with repeat delivery, terms apply",
                readMoreText: "",
                readMoreLink: "/autoship.html/?origin=home&desc=spot3&type=waystoshop",
                imgContent: imagelink("WEB-1515501-Oct22_4CRD3_HP-AutoShip_MO"),
                alt: "Repeat delivery with 5% OFF every order with autoship",
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_4CRD3_HP-AutoShip_DT") },
            },
            {
                title: "Ship to Home",
                subTitle: "FREE shipping over $49 for Treats Members",
                readMoreText: "",
                readMoreLink: "/help/shipping-and-delivery-H0007d.html?origin=home&desc=spot4&type=waystoshop",
                imgContent: imagelink("WEB-1515501-Oct22_4CRD4_HP-Ship2Home_MO"),
                alt: "Treats members get FREE shipping over $49 with ship to home",
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_4CRD4_HP-Ship2Home_DT") },
            },
        ],
    },
    {
        containerName: "PromoCardScroll",
        title: "Pet parent resources",
        displayLink: true,
        truncateSetting: {
            lineBreak: 3,
            desktop: { lineBreak: 2, }
        },
        linkLabel: "Read more",
        tileSections: [
            {
                imgContent: imagelink("WEB-1531901-Nov22_HP-LCA2_Winter-Safety_MO"),
                desktop: { imgContent: imagelink("WEB-1531901-Nov22_HP-LCA2_Winter-Safety_DT") },
                alt: "",
                title: "Winter Pet Safety",
                desc: "Winter is magical. The snow falling from the sky and forming a soft blanket on the ground is beautiful. Even our pets love to play in the snow when that time of year comes around.",
                link: "/learning-center/dog-care/winter-pet-safety-keeping-warm-and-healthy/A0264.html?fdid=dog&origin=home&desc=article1&type=learning",
            },
            {
                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP_MO"),
                desktop: { imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP_DT") },
                alt: "",
                title: "Bringing Home a New Dog",
                desc: "So you’ve decided to get a new dog?! Bringing home a new dog can be very exciting, but it also requires a lot of preparation, commitment and responsibility.",
                link: "/learning-center/dog-care/so-you-want-a-dog/A0075.html?origin=home&desc=article2&type=learning",
            },
            {
                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_MO"),
                desktop: { imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_DT") },
                alt: "",
                title: "Taking Care of My New Cat",
                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member!",
                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=home&desc=article3&type=learning",
            },
            {
                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Adult_MO"),
                desktop: { imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Adult_DT") },
                alt: "",
                title: "What Should I Feed My Dog?",
                desc: "There are so many kinds of dog food on the market that choosing the right one can seem confusing. To narrow down your choices, ask these three questions:",
                link: "/learning-center/dog-care/what-should-i-feed-my-dog/A0209.html?origin=home&desc=article4&type=learning",
            },
            {
                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_MO"),
                desktop: { imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_DT") },
                alt: "",
                title: "How to Kitten-Proof Your Home",
                desc: "Learning how to kitten-proof your home is a lot like baby proofing. While a kitten might not bump their head on tables or try to stick their fingers in things they shouldn’t, they sure do know how to get into trouble around the house.",
                link: "/learning-center/cat-care/kitty-proof-your-home/A0149.html?origin=home&desc=article5&type=learning",
            },
            {
                imgContent: imagelink("WEB-1600452-Jan23_HP-LCA_SmallPet_MO"),
                desktop: { imgContent: imagelink("WEB-1600452-Jan23_HP-LCA_SmallPet_DT") },
                alt: "",
                title: "Feeding Your Small Pet",
                desc: "Nutrition-packed foods for guinea pigs, rabbits, hamsters and more. Hay should make up about 75% of the diet of guinea pigs, chinchillas and rabbits.",
                link: "/learning-center/small-pet-care/feeding-your-small-pet/A0024.html?origin=home&desc=article6&type=learning",
            },
        ],
    },
    {
        containerName: "PromoBanner",
        size: "sm",
        title: "Download our FREE mobile app to shop for your pet anytime, anywhere!",
        href: "/mobile-app-landing-page/mobile-app.html?origin=home&desc=app&type=smallpromo",
        imgContent: imagelink("WEB-1515501-Oct22_PROMO-SB_HP-MobileAP_MO"),
        desktop: { imgContent: imagelink("WEB-1515501-Oct22_PROMO-SB_HP-MobileAP_DT") },
        ctaText: "Learn more",
        isInverted: true,
        alt: "Download our FREE mobile app to shop for your pet anytime, anywhere!",
    },
    {
        containerName: "featuredTilesGrid",
        title: "What's happening",
        displayLink: true,
        truncateLines: 2,
        linkLabel: "",
        variant: "3up",
        tileSections: [
            {
                imgContent: imagelink("WEB-1515501-Oct22_3COL-FC1_HP-InStoreEvents_MO"),
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_3COL-FC1_HP-InStoreEvents_DT") },
                alt: "Discover holiday photos, adoptions, playdates & more at our in-store events",
                title: "In-Store Events",
                subTitle: "Discover holiday photos, adoptions, playdates & more at your local store.",
                readMoreLink: "/ca-PetSmart-Events.html?origin=home&desc=spot1&type=wh",
            },
            {
                imgContent: imagelink("WEB-1515501-Oct22_3COL-FC2_HP-Charities_MO"),
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_3COL-FC2_HP-Charities_DT") },
                alt: "Find a new best friend & adopt a pet near you with PetSmart Charities",
                title: "PetSmart Charities®",
                subTitle: "Find a new best friend & adopt a pet near you.",
                readMoreLink: "https://petsmartcharities.org/adopt-a-pet?origin=home&desc=spot2&type=wh",
            },
            {
                imgContent: imagelink("WEB-1515501-Oct22_3COL-FC4_HP-Hiring_MO"),
                desktop: { imgContent: imagelink("WEB-1515501-Oct22_3COL-FC4_HP-Hiring_DT") },
                alt: "We're hiring - Love pets? Check out available positions in our stores & pet services!",
                title: "We're Hiring",
                subTitle: "Love pets? Check out available positions in our stores & pet services!",
                readMoreLink: "https://careers.petsmart.com/?origin=home&desc=spot3&type=wh",
            },
        ],
    }
]

export default data_container;