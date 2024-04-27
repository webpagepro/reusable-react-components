// DPT-4244 US Treats Members Month Landing Week 3 - 07.21 - 04.23 - lu: 04.11.2023-RR
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
  /* {
        containerName: "PromoBannerLarge",
        className: "halloween-promo-banner",
        title: "Exclusive April Deals",
        subTitle: "30 days, thousands of points!",
        size: "lg",
        imgContent: imagelink("WEB-1722652-Apr23_LPB_Treats-ML_MO"),
        desktop: {
            imgContent: imagelink("WEB-1722652-Apr23_LPB_Treats-ML_DT")
        },
        ctaText: "",
        cta: false,
        alt: "Treats Members Month logo",
        isInverted: true,
    },
    */
     {
        containerName: "MobileFlatImageBanner",
        title: "Exclusive April Deals",
        subtitle: "30 days, thousands of points!",
        isInverted: true,
        backgroundColor: "#FFFFFF",
        alt: "Treats Members Month logo",
        imageInfo: { url: imagelink("WEB-1722652-Apr23_LPB_Treats-ML_MO") },
        desktop: { imageInfo: { url: imagelink("WEB-1722652-Apr23_LPB_Treats-ML_DT") } },
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "This week only!",
        desc:"Activate & shop special deals online & in stores this week only thru 4/23",
        displayLink: true,
        optionalText: true,
        truncateLines: 0,
        linkLabel: "",
        variant: "1-2-4up",
        activateOffers: true,
        truncateSetting: {
            lineBreak: 2,
            desktop: { lineBreak: 2, }
        },
        tileSections: [
            {
                title: "Weekend only! 5X points on any purchase",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD1_Treats-WK2_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD1_Treats-WK2_DT"),
                },
                alt: "Weekend only! 5X points on any purchase",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid 4/21-4/23, terms apply",
                offerId: "C2312LPNMMBIG5XD", //
                hasCarousel: false,
            },
            {
                title: "5X points on Canidae food",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD1_Treats-WK3_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD1_Treats-WK3_DT"),
                },
                alt: "5X points on Canidae food",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid 4/17-4/23, terms apply",
                offerId: "C2311LPNMMCANID5XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/canidae/?origin=TreatsMembersMonth&type=offercarddrawer&desc=canidae",
                    skuList: "(5288787,5288705,5300505,5299235,5288768,5288801,5299243,5288664,5288697,5288699,5299113,5288738,5300383,5288774,5288786,5288741,5288790,5288704)",
                }
            },
            {
                title: "5X points on ExquisiCat litter",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD2_Treats-WK3_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD2_Treats-WK3_DT"),
                },
                alt: "5X points on ExquisiCat litter",
                offerExp: "Valid 4/17-4/23, terms apply",
                offerId: "C2312LPNEXQUCAT5XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/exquisicat/?origin=TreatsMembersMonth&type=offercarddrawer&desc=exquisicat",
                    skuList: "(5219991,5212427,5266480,5219990,5197993,5319983,5237338,5219089,5219992,5304048,5212426,5319984,5211660,5304120,5197992,5333394,5319982,5333393)",
                }
            },
            {
                title: "5X points on Joyhound toys",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD3_Treats-WK3_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD3_Treats-WK3_DT"),
                },
                alt: "5X points on Joyhound toys",
                offerExp: "Valid 4/17-4/23, terms apply",
                offerId: "C2312LPNJOYHOU5XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/joyhound/?origin=TreatsMembersMonth&type=offercarddrawer&desc=joyhound",
                    skuList: "(5308443,5292673,5288253,5313782,5288599,5313875,5323849,5308436,5313819,5313792,5325793,5292672,5288528,5323834,5323859,5296842,5323861,5323839)",
                }
            },
            {
                title: "5X points on Dentley's treats & chews",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD4_Treats-WK3_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD4_Treats-WK3_DT"),
                },
                alt: "5X points on Dentley's treats & chews",
                offerExp: "Valid 4/17-4/23, terms apply",
                offerId: "C2312LPNDENT5XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/dentleys/?origin=TreatsMembersMonth&type=offercarddrawer&desc=dentleys#tabs-1",
                    skuList: "(5276237,5277022,5299407,5277392,5299034,5286210,5289028,5291356,5276870,5277241,5299617,5277812,5286208,5277811,5291363,5276926,5277165,5277309)",
                }
            },
            {
                title: "5X points on Wiggles & Wags treats",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD5_Treats-WK3_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD5_Treats-WK3_DT"),
                },
                alt: "5X points on Wiggles & Wags treats",
                offerExp: "Valid 4/17-4/23, terms apply",
                offerId: "C2312LPNWIGWAG5XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/wiggles-and-wags/?origin=TreatsMembersMonth&type=offercarddrawer&desc=wiggles-and-wags",
                    skuList: "(5303649,5305476,5303654,5303653,5303648,5303647,5305358,5303650,5303651,5303745,5321602,5305420,5320987,5322322,5322323,5305421,5320988,5322324)",
                }
            },
            {
                title: "3X points on Thrive food, habitats & more",
                desc: "",
                imgContent: imagelink("WEB-1722652-Apr23_OCD6_Treats-WK3_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD6_Treats-WK3_DT"),
                },
                alt: "3X points on Thrive food, habitats & more",
                offerExp: "Valid 4/17-4/23, terms apply",
                offerId: "C2312LPNTHRV3XD", //
                hasCarousel: true,
                displaySettings: { desktop: 3, tablet: 2.5, mobile: 2.5 },
                tileSections: {
                    title: "Eligible products",
                    ctaText: "Shop all",
                    shopLink: "/featured-brands/thrive/?origin=TreatsMembersMonth&type=offercarddrawer&desc=thrive",
                    skuList: "(5315113,5311996,5315227,5315110,5290747,5290981,5290988,5314805,5290747,5290974,5314732,5291029,5290811,5290876,5314733,5291055,5290754,5290987)",
                }
            },
        ],
    },
    {
        containerName: "PromoBanner",
        size: "md",
        title: "BONUS! Earn 1,000 points when you complete your Treats Member profile",
        href: "/account/about-you/",
        imgContent: imagelink("WEB-1722652-Apr23_PROMO-MB1_Treats-ML_MO"),
        desktop: { imgContent: imagelink("WEB-1722652-Apr23_PROMO-MB1_Treats-ML_DT") },
        ctaText: "Update now",
        isInverted: true,
        alt: "Image of a girl holding her cat",
    },
    {
        // 2 up grid display of promocard
        containerName: "offerCardGrid",
        title: "Month-long offers",
        desc:"",
        displayLink: true,
        optionalText: true,
        truncateLines: 0,
        linkLabel: "",
        variant: "1-2-4up",
        activateOffers: true,
        truncateSetting: {
            lineBreak: 2,
            desktop: { lineBreak: 2, }
        },
        tileSections: [
            {
                title: "Super Giveaway: Enter for a chance to win 1M pts",
                desc: "Activate the offer and enter for a chance to win 1 million Treats points. Plus, 10 runners-up will win 20,000 points. Bonus: Complete your profile for 15 extra entries, download the app for 10 extra entries plus more ways to enter!",
                imgContent: imagelink("WEB-1722652-Apr23_OCD5_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD5_Treats-ML_DT"),
                },
                alt: "Super Giveaway: Enter for a chance to win 1M pts",
                offerExp: "Enter 4/1-4/30, see rules",
                offerId: "C2309LDOT1MTSGD", //
                hasCarousel: false,
            },
            {
                title: "Redeem 100 pts for 20 add'l Super Giveaway entries",
                desc: "It’s April Treats Members Month and we’re celebrating with this great deal all month long! Activate this offer and then redeem 100 Treats points and receive 20 additional entries for the Treats Super Giveaway through 4/30/23.",
                imgContent: imagelink("WEB-1722652-Apr23_OCD9_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD9_Treats-ML_DT"),
                },
                alt: "Redeem 100 pts for 20 add'l Super Giveaway entries",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid 4/1-4/30, terms apply",
                offerId: "C2309LDOTBONTSGD", //
                hasCarousel: false,
            },
            {
                title: "2X points on PetSmart Charities donations",
                desc: "It’s April Treats Members Month and we’re celebrating with this great deal all month long! Activate this offer and earn 2X Treats points on all donations to PetSmart Charities® online and in stores through 4/30/23.",
                imgContent: imagelink("WEB-1722652-Apr23_OCD1_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD1_Treats-ML_DT"),
                },
                alt: "2X points on PetSmart Charities donations",
                offerExp: "Valid 4/1-4/30, terms apply",
                offerId: "C2309LPNDON2XD", //
                hasCarousel: false,
            },
            {
                title: "Enjoy a FREE photo book by Mixbook",
                desc: "It’s April Treats Members Month! Enjoy a FREE 19-page photo book sponsored by Mixbook through 5/3/23. Must be opted-in to receive marketing emails from PetSmart or see a store associate to receive promotional code.",
                imgContent: imagelink("WEB-1722652-Apr23_OCD6_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD6_Treats-ML_DT"),
                },
                alt: "Enjoy a FREE photo book by Mixbook",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid 4/1-5/3, terms apply",
                offerId: "C2309LDOMIXBKD",
                hasCarousel: false,
                isInfoOnly: true,
            },
            {
                title: "3X points on all pet services",
                desc: "It’s April Treats Members Month and we’re celebrating with this great deal all month long! Activate this offer and earn 3X Treats points on all Grooming Salon, PetsHotel, Doggie Day Camp and Training services through 4/30/23.",
                imgContent: imagelink("WEB-1722652-Apr23_OCD10_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD10_Treats-ML_DT"),
                },
                alt: "3X points on all pet services",
                offerExp: "Valid 4/1-4/30, terms apply",
                offerId: "C2309LPNSERV3XD", //
                hasCarousel: false,
            },
            {
                title: "3,000 points when you spend $50+ using Afterpay",
                desc: "It’s April Treats Members Month! This weekend only, activate this offer and earn 10X Treats points on any in-store or online purchase through 4/9/23.",
                imgContent: imagelink("WEB-1722652-Apr23_OCD3_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD3_Treats-ML_DT"),
                },
                alt: "3,000 points when you spend $50+ using Afterpay",
                offerExp: "Valid 4/1-4/30, terms apply",
                offerId: "C2309LODAFTIMPOD", //
                hasCarousel: false,
            },
            {
                title: "Save $10 later when you spend $100+ in gift cards",
                desc: "It’s April Treats Members Month and we’re celebrating with this great deal all month long! Save $10 later when you spend $100 or more in gift cards in stores only now through 4/30/23.",
                imgContent: imagelink("WEB-1722652-Apr23_OCD4_Treats-ML_DT"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_OCD4_Treats-ML_DT"),
                },
                alt: "Save $10 later when you spend $100+ in gift cards",
                // badges: [
                //     { title: "Badge", size: "sm", variant: "primary" },
                //     // {title:"Urgent care", size:"sm", variant:"primary"}
                // ],
                offerExp: "Valid 4/1-4/30, in stores only",
                offerId: "C2310LONGCIMPOD",
                hasCarousel: false,
                isInfoOnly: true,
            },
        ],
    },
    {
        // Reversed Featured Media banner
        containerName: "featuredSectionTestimonials",
        sectionTitle: "Treats in the news!",
        sectionDescription: "",
        title: "Three lucky Treats members won a trip to the Big Game in Phoenix, Arizona on February 12 after entering the Treats Super Giveaway: Big Game Sweeps!",
        subTitle: "Big Game Sweeps Winners",
        isInverted: false,
        isReversed: true,
        backgroundColor: "#FFFFFF",
        titleVariant: "headline",
        mediaInfo: {
            url: {
                imgContent: imagelink("WEB-1722652-Apr23_FBI1_Treats-Test-ML_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_FBI1_Treats-Test-ML_DT"),
                }
            },
            alt: "Image of the Treats Super Giveaway winners at the Big Game",
            type: "image", // type can be any supported media like image, video etc
        },
    },
    {
        // Featured Media banner
        containerName: "featuredSection",
        title: "Our Treats Rewards Program proudly honored Veterans & their families with a $25K donation from PetSmart to K9s For Warriors on Veterans Day 2022. K9s For Warriors is the largest provider of service dogs for Veterans.",
        subTitle: "K9s For Warriors",
        isInverted: false,
        backgroundColor: "#FFFFFF",
        titleVariant:"headline",
        mediaInfo: {
            url: {
                imgContent: imagelink("WEB-1722652-Apr23_FBI2_Treats-Test-ML_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1722652-Apr23_FBI2_Treats-Test-ML_DT"),
                }
            },
            alt: "Image of PetSmart presenting a donation to K9s For Warriors",
            type: "image", // type can be any supported media like image, video etc
        },
    },
    // {
    //     // Reversed Featured Media banner
    //     containerName: "featuredSection",
    //     title: "Three lucky Treats members won a trip to the Big Game in Phoenix, Arizona on February 12 after entering the Treats Super Giveaway: Big Game Sweepstakes!",
    //     subTitle: "Big Game Sweepstakes Winners",
    //     isInverted: false,
    //     isReversed: true,
    //     titleVariant: "headline",
    //     mediaInfo: {
    //         url: {
    //             imgContent: imagelink("WEB-1722652-Apr23_FBI1_Treats-Test-ML_MO"),
    //             desktop: {
    //                 imgContent: imagelink("WEB-1722652-Apr23_FBI1_Treats-Test-ML_DT"),
    //             }
    //         },
    //         alt: "Image of the Treats Super Giveaway winners at the Big Game",
    //         type: "image", // type can be any supported media like image, video etc
    //     },
    // },
    {
        containerName: "promoBannerLarge",
        size: "md",
        title: "We're proud to be awarded by Newsweek as one of America's Best Loyalty Programs of 2023!",
        // href: "/account/about-you/",
        imgContent: imagelink("WEB-1765069-Mar23_PROMO-MB_TreatsProgram_MO"),
        desktop: { imgContent: imagelink("WEB-1765069-Mar23_PROMO-MB_TreatsProgram_DT") },
        // ctaText: "Update now",
        isInverted: false,
        alt: "2023 America's best loyalty programs award recipient",
    },
    {
        containerName: "columnTips",
        title: "Treats Members get more!",
        subTitle: "Loyalty has never been so rewarding! Sign up, earn points, get treats.",
        // shouldCallApi: false,
        isInverted: false,
        tipSections: [
            {
                imgContent: imagelink("WEB-1722652-Apr23_5CT1_Treats-ML_DM"),
                alt: "Heart icon",
                title: "Earn points for purchases or donations in stores or online",
                // link: "/dog/?origin=home&desc=dog&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1722652-Apr23_5CT2_Treats-ML_DM"),
                alt: "Shopping cart icon",
                title: "Redeem points for discounts on any product or service",
                // link: "/cat/?origin=home&desc=cat&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1722652-Apr23_5CT3_Treats-ML_DM"),
                alt: "Price tag icon",
                title: "Unlock exclusive offers, event notices, bonus offers & more",
                // link: "/fish/?origin=home&desc=fish&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1722652-Apr23_5CT4_Treats-ML_DM"),
                alt: "Truck icon",
                title: "Enjoy FREE shipping on select orders over $49",
                // link: "/bird/?origin=home&desc=bird&type=shopbypet"
            },
            {
                imgContent: imagelink("WEB-1722652-Apr23_5CT5_Treats-ML_DM"),
                alt: "Gift icon",
                title: "Get a surprise treat for your pet's Birthday or \"Gotcha Day\"",
                // link: "/reptile/?origin=home&desc=reptile&type=shopbypet"
            },
        ],
    },
    {
        containerName: "PromoBanner",
        title: "Not a Treats member? Sign up for FREE & start treating your pet (& yourself) today!",
        href: "/account/",
        imgContent: imagelink("WEB-1722652-Apr23_PROMO-MB2_Treats-ML_MO"),
        desktop: { imgContent: imagelink("WEB-1722652-Apr23_PROMO-MB2_Treats-ML_DT") },
        ctaText: "Sign up",
        alt: "Image of a man holding a dog",
        isInverted: true,
    },
    {
        containerName: "ProductCarousel",
        title: "Featured products",
        shopLink: "",
        ctaText: "",
        shouldCallApi: true,
        isCarouselOnly: true,
        displaySettings: {
            desktop: 6,
            tablet: 3.5,
            mobile: 2.5
        },
        tileSections: {
            skuList: "(5288787,5333393,5308443,5276237,5303649,5315113,5288705,5292673,5219991,5305476,5311996,5277022,5333394,5288253,5300505,5299407,5315227,5303654)", // comma without space between skus
        },
    },
    {
        containerName: "PromoBanner",
        size: "sm",
        title: "It's all in the app! Download our FREE mobile app to access all April deals",
        href: "/mobile-app-landing-page/mobile-app.html",
        imgContent: imagelink("WEB-1722652-Apr23_PROMO-SB1_Treats-ML_MO"),
        desktop: { imgContent: imagelink("WEB-1722652-Apr23_PROMO-SB1_Treats-ML_DT") },
        ctaText: "Download app",
        isInverted: true,
        alt: "It's all in the app! Download our FREE mobile app to access all April deals",
    },
    {
        containerName: "accordionSection",
        title: "Frequently asked questions",
        subTitle: "",
        isInverted: false,
        sections: [
            {
                title: "How do I join the program?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>You can sign up in stores at the register, online at petsmart.com or through our mobile app. To download the PetSmart App, visit your App Store.</p>"
            },
            {
                title: "Who is eligible to join the program?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>You must be age 18 years or older and a resident of the United States or Puerto Rico to be eligible for Treats membership. It’s also limited to individuals only and one account per individual.</p>"
            },
            {
                title: "What information will I need to provide?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>To join Treats, you will need to provide your first and last name, your phone number, the phone type and your email address. When signing up in our stores, you will need to confirm your information on the pin pad. When signing up online or through our mobile app, you will need to validate your email address for security reasons.</p>"
            },
            {
                title: "Why do members need to validate their email account for their online profile?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>For security reasons, we need to make sure the email used to create the online profile belongs to the correct person. The pet parent will receive an email with a call-to-action that directs them to validate the email belongs to them.</p>"
            },
            {
                title: "Why join Treats?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>PetSmart Treats Program offers valuable benefits<br/><ul><li>Earn 8 points for every $1 spent in stores & online</li><li>Earn 8 points for every $1 spent on pet services including Grooming Salon, PetsHotel, Doggie Day Camp & Dog Training</li><li>Earn 8 points for every $1 donated to PetSmart Charities® in stores at the pin pad or online</li><li>Redeem points or rewards for discounts on any product or pet service</li><li>Get a surprise on your pet’s birthday</li><li>Receive exclusive member-only deals & discounts</li><li>Buy 10 Doggie Day Camp sessions & get 1 FREE session</li><li>Enjoy FREE shipping on orders over $49</li></ul></p>"
            },
            {
                title: "Is Treats a credit card?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>No, Treats is a free loyalty program that offers you benefits for all the pets you love! Earn points every time you shop at PetSmart and redeem points or rewards on thousands of products and pet services.</p>"
            },
            {
                title: "Does it cost anything to be a member?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>No - enrollment in the Treats program is FREE!</p>"
            },
            {
                title: "Will I receive a card when I sign up for Treats?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>No, a physical card is not issued. After you join Treats, we will assign a Treats account ID that is printed on your receipts and viewable at petsmart.com/rewards and on the mobile app. To earn or redeem points, you only need to provide your phone number or email address during checkout in store or make sure to be signed in when shopping online. Additionally, you can add your Treats account ID to your mobile wallet (if equipped on your smartphone) or open the PetSmart mobile app and scan the digital card during checkout.</p>"
            },
            {
                title: "What are the rules of the program?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Rules appear in the <a href=\"/help/H0016b_treats_terms.html?origin=help&type=termsandconditions&dec=treatsterms\">Program Terms & Conditions</a>, or you can contact us <a href=\"/account/contact/?origin=help&type=contact&dec=treatscontact\">here</a></p>"
            },
            {
                title: "Can I share my membership with a family member or friend?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Yes, but make sure they provide your information at checkout.</p>"
            },
            {
                title: "How can I check to see if I have any offers or points?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>To check your points balance and offers, go online at petsmart.com/rewards or visit the treats page on the mobile app.</p>"
            },
            {
                title: "I forgot my password to access my account at petsmart.com or the mobile App. What do I do?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>During the sign-in process, click the \"forgot password?\" link. An email to reset your password will be sent to the email address provided.</p>"
            },
            {
                title: "Can I change my online profile email address?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Yes, just login to your account on petsmart.com or on the mobile app and go to “about you” to update your email address. To make this update, your email must be validated, or you can call Customer Care at 1-888-839-9638 to process the update.</p>"
            },
            {
                title: "I forgot the user name I used when I signed up. What do I do?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Your user name is your email address that you used to create the account.</p>"
            },
            {
                title: "If a family has more than one PetSmart shopper, can they have additional Treats accounts? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Yes, every family member can have an individual account, but transactions will earn points for the account being used during the transaction and accounts cannot be combined.</p>"
            },
            {
                title: "How does it work?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>In Stores: when checking out in stores, you can provide your Treats account ID from the mobile app or mobile wallet to scan or give them your phone number or email address to look up your account.<br/>Online: when checking out online, be sure you are logged-in before you check out, and your purchases will automatically be credited to your Treats account once your items have shipped.</p>"
            },
            {
                title: "How are points calculated?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Members earn 8 points for every $1 spent on products, pet services (Grooming Salon, PetsHotel, Doggie Day Camp, Dog Training), and donations made to PetSmart Charities® in stores at the pin pad or online at checkout. Gift cards, shipping charges, discounts from vendor coupons (or other similar discount coupons), taxes, and tips are not eligible for points. 1,000 points can be redeemed for $2.50 in savings. See the Program Terms & Conditions for complete details.</p>"
            },
            {
                title: "How long are points and rewards valid?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Points will expire at the end of the month one year after the date they were earned. For example, if a member earned 100 points on March 15, 2019, the points will expire by March 31, 2020 if the points are not used.</p>"
            },
            {
                title: "How do I know if I have points expiring?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We will communicate to you via email when you have points that are about to expire.</p>"
            },
            {
                title: "When do my points appear in my Treats account?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p><ul><li>For in-store purchases, you earn points immediately.</li><li>For online purchases, points will be credited to your account within 24 hours after your order has shipped.</li></ul></p>"
            },
            {
                title: "What happens if an uneven amount is spent? Is there credit for the change?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Yes, every penny counts, if you spent $35.55 you will earn 284.4 points (8x35.55). In some places we won’t be able to display the points decimals, but we will be tracking them for you!</p>"
            },
            {
                title: "Where can I find my points balance?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p><ul><li><strong>Mobile App:</strong> Log in & see your points on the homepage<li><strong>Online:</strong> Visit petsmart.com/rewards & log into your account to see your points</li><li><strong>In Stores:</strong> Check the bottom of your receipt for points or ask a cashier</li><li><strong>Email:</strong> View your points at the top of your emails</li></ul></p>"
            },
            {
                title: "Can I earn base & bonus points on the same item/transaction?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Yes, members can earn base and bonus points on the same product/transaction.</p>"
            },
            {
                title: "Can bonus points offers be combined?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Sometimes, you will have the chance to combine two or more bonus offers on a qualifying purchase. When this occurs, base points are earned only once.</p>"
            },
            {
                title: "How can I check to see if I have any offers or points?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Most of bonus points promotions will be delivered via email, so make sure to opt-in to receive PetSmart emails. You can also check your offers and points balance on the PetSmart mobile app.</p>"
            },
            {
                title: "What is “offer activation”?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Some offers require “activation”. You can activate offers in email or on the offer section of your online account. To activate an offer and earn bonus points, just click the “activate” button and then go shop.</p>"
            },
            {
                title: "What happens to my points when I return an item?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Any points earned on the returned merchandise are deducted from your points balance. A negative points balance can result if you return a product with a point value greater than the amount of points in your account balance. If you have a negative points balance, you may not be able to participate in certain aspects of the program, e.g., you will not be able to activate offers.</p>"
            },
            {
                title: "If I have more than one membership, can I transfer points between them?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>No, if you have opened more than one membership by mistake, please call our Customer Care Team to address this issue.</p>"
            },
            {
                title: "What if I forgot to use my Treats account during an in-store purchase or during online checkout? How do I apply a missing transaction to my account?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Please call our Customer care at 1-888-839-9638, just have your receipt handy and our customer service representative will be happy to help you.</p>"
            },
            {
                title: "How do I redeem my points/rewards in stores?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>If you have points or rewards available to redeem, tell the associate at the register that you want to redeem your points/rewards.</p>"
            },
            {
                title: "How do I redeem my points/rewards online?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Make sure you are logged in to your PetSmart account. If you have points or rewards available to redeem, you can request to redeem your points in cart or during checkout. Where applicable, look for “treats available,” select amount, and click apply.</p>"
            },
            {
                title: "Can I use my points/rewards with other discounts & specials offered by PetSmart?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Yes, unless otherwise specified, your points or rewards can be combined with other discounts and special offers, as well as any form of payment accepted at PetSmart.</p>"
            },
            {
                title: "What items do not qualify for points/rewards redemption?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Most products are eligible for points or rewards redemption. However, donations, gift cards, taxes, tips, cash back, recurring autoship orders, and shipping fees are excluded. See <a href=\"/help/H0016b_treats_terms.html?origin=help&type=termsandconditions&dec=treatsterms\">Program Terms & Conditions</a> for complete details.</p>"
            },
            {
                title: "What happens if I return a product I bought using points/rewards redemption?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>When you redeem your points or rewards for a product purchase, please make sure you will keep the product as once points are redeemed they are forfeited for good and will not be reinstated to your account if you return the product you redeemed your points on.</p>"
            },
            {
                title: "Can I give my points to a friend or family member?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>No, Treats points are not transferable.</p>"
            },
            {
                title: "What emails will I receive as a member?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>By providing us with a valid email address, you agree to the <a href=\"/help/H0016b_treats_terms.html?origin=help&type=termsandconditions&dec=treatsterms\">Program’s Terms & Conditions</a> and you will receive key program benefits such as bonus point promotions, birthday offers and other great offers that are only available via email.</p>"
            },
            {
                title: "How do I stop receiving PetSmart emails?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>To opt out of promotional email communications, log into your account and go to My Account and uncheck the box to receive emails. Or, you can click the \"unsubscribe\" link at the bottom of any PetSmart email you receive. However, if you opt out, you’ll no longer receive exclusive member-only deals and discounts. If unsubscribed by accident or wish to receive emails again, just go online to resubscribe.</p>"
            },
            {
                title: "How do I stop receiving other PetSmart promotional communications?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>To opt out of promotional postal mail, SMS or push notifications, please contact Customer care at 1-888-839-9638.</p>"
            },
            {
                title: "What special offers can I get as a member?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>The Treats program rewards you with special offers based on the products and services you love. You'll receive custom offers sent via email, text message, mobile app notifications, and postal mail. Examples are coupons for discounts on specially selected products or services, double or triple bonus points offers, and much more.</p>"
            },
            {
                title: "How do I get the special offer that my friend received?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Treats is designed to give you offers tailored to you. Not all offers are available to all members. To receive offers more relevant to you, keep your profile updated and remember to log in when you shop online or provide your phone number or email address in store at the register.</p>"
            },
        ],
    },
]

export default data_container;