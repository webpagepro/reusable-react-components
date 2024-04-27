/*
 Structure of Pet landing page data

 LandingPageData
    |
    |---- 1. Sections
            |
            |---- 1. HeroBanner
            |
            |---- 2. TileCarousel (Deals by pet)
            |       |
            |       |---- 1. tileSections
            |
            |---- 3. PromoBanner
            |
            |---- 4. FeaturedTiles (Featured resources)
            |       |
            |       |---- 1. tileSections
            |
            |---- 5. FeaturedSection (Featured Media)
            |
            |---- 6. FeaturedTiles (New pet services)
            |       |
            |       |---- 1. tileSections
            |
            |---- 7. AccrodionSection
            |       |
            |       |---- 1. sections
            |
            |---- 8. SEOSection

*/

/* eslint-disable no-mixed-spaces-and-tabs */

let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let landingPageData = [
    // general settings, if any goes here.

    // each section in the landing page will be an entry in the sections array
    // Hero banner
    {
        containerName: "heroBanner",
        title: "Anything for\n your new pet",
        subTitle: "",
        isInverted: true,
        backgroundColor: "#F7F7F7",
        imageInfo: {
            url: imagelink("WEB-1337901-Jun22_MP_HB_NPP_MO"),
            alt: "Image of dog and cat held by owners",
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1337901-Jun22_MP-HB_NPP_DT"),
                alt: "Image of dog and cat held by owners",
            },
        }
    },

    // Deals by pet
    {
        containerName: "CategoryRow",
        title: "Who's your new BFF?",
        subTitle: "",
        showAllText: "",
        showAllLink: "",
        tileSections: [
            {
                title: "Dog",
                subTitle: "",
                link: "/new-pet-dog.html?origin=newpet&desc=dog&type=newbff",
                alt: "Image of a puppy in a blue circle",
                imgContent: imagelink("WEB-1337901-Jun22_6COL-1_NPP-Dog_DT"),
            },
            {
                title: "Cat",
                subTitle: "",
                link: "/new-pet-cat.html?origin=newpet&desc=cat&type=newbff",
                alt: "Image of a kitten in a blue circle",

                imgContent: imagelink("WEB-1337901-Jun22_6COL-2_NPP-Cat_DT"),
            },
            {
                title: "Fish",
                subTitle: "",
                link: "/build-your-tank-ca.html?origin=newpet&desc=fish&type=newbff",
                alt: "Image of a fish in a blue circle",

                imgContent: imagelink("WEB-1337901-Jun22_6COL-3_NPP-Fish_DT"),
            },
            {
                title: "Bird",
                subTitle: "",
                link: "/bird/?origin=newpet&desc=bird&type=newbff",
                alt: "Image of an orange bird in blue circle",

                imgContent: imagelink("WEB-1337901-Jun22_6COL-4_NPP-Bird_DT"),
            },
            {
                title: "Reptile",
                subTitle: "",
                link: "/reptile/?origin=newpet&desc=reptile&type=newbff",
                alt: "Image of a snake in a blue circle",

                imgContent: imagelink("WEB-1337901-Jun22_6COL-5_NPP-Reptile_DT"),
            },
            {
                title: "Small Pet",
                subTitle: "",
                link: "/small-pet/?origin=newpet&desc=smallpet&type=newbff",
                alt: "Image of a guinea pig in a blue circle",

                imgContent: imagelink("WEB-1337901-Jun22_6COL-6_NPP-SmPet_DT"),
            },
        ],
    },

    // banner
    {
        containerName: "PromoBanner",
        title: "Get a FREE Adoption Kit: FREE bag of food & $300+ in savings",
        link: "/store-locator/?origin=newpet&desc=adoptionkit&type=banner",
        ctaText: "Find a store",
        size: "sm",
        cta: true, // TODO added to give option of showing button
        isInverted: true,
        alt: "Red background",

        imgContent: imagelink("WEB-1337901-Jun22_PB-S_NPP-AK_MO"),
        desktop: {
            imgContent: imagelink("WEB-1337901-Jun22_PB-S_NPP-AK_DT"),
        }
    },

    // Featured resources/ Article carousel
    {
        containerName: "PromoCardScroll",
        title: "Featured resources",
        desc: "The expertise you need to help you prepare for the unexpected.",
        showAllText: "See all",
        shopLink: "/learning-center/?origin=newpet&desc=learningcenter&type=featuredresources",
        linkLabel: "Read more",
        displaySettings: { // TODO ask mijesh for clarification
            columnCount: 3,
            rowCount: 1,
        },
        truncateSetting: {
            lineBreak: 3,
            desktop: { lineBreak: 2, }
        },
        isInverted: false,
        tileSections: [
            {
                title: "Bringing Home a New Dog",
                desc: "So you’ve decided to get a new dog?! Bringing home a new dog can be very exciting, but it also requires a lot of preparation, commitment and responsibility. Dogs have provided love and...",
                link: "/learning-center/dog-care/so-you-want-a-dog/A0075.html?origin=newpet&desc=newdog&type=learningcenter", // link
                alt: "Image of dog and owner sitting on steps",
                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP_MO"),
                desktop: { // TODO alternative might not be needed, leave option?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP_DT"),
                }
            },
            {
                title: "What Should I Feed My Dog?",
                desc: "There are so many kinds of dog food on the market that choosing the right one can seem confusing. To narrow down your choices, ask these three questions:",
                link: "/learning-center/dog-care/what-should-i-feed-my-dog/A0209.html?origin=newpet&desc=feed&type=article",
                alt: "Image of a dog standing in the kitchen with its food bowl",

                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Adult_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Adult_DT"),
                }
            },
            {
                title: "How to Kitten-Proof Your Home",
                desc: "Learning how to kitten-proof your home is a lot like baby proofing. While a kitten might not bump their head on tables or try to stick their fingers in things they shouldn’t, they sure do know how to get into trouble around the house. Learning how to kitten-proof is an important step to take before bringing home a new pet. Cats are naturally curious creatures who love to explore their environment. Keeping your cat safe is your number one priority and proofing your house is a part of their safety. ",
                link: "/learning-center/cat-care/kitty-proof-your-home/A0149.html?origin=newpet&desc=kittenproof&type=article",
                alt: "Image of a kitten under a blanket",

                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Kitten_DT"),
                }
            },
            {
                title: "Taking Care of My New Cat",
                desc: "Bringing home a new cat or kitten is a big deal for both you and your new feline friend but in different ways. For you, you’re excited to be gaining a new family member! However, for the cat, the transition to a brand new home with new surroundings can cause some stress and anxiety. Because of this, you should prepare your home beforehand if possible, so you can provide your new cat or kitten with all the space and essentials they need to adjust to their new home. ",
                link: "/learning-center/cat-care/what-do-i-need-to-take-care-of-my-new-cat/A0066.html?origin=newpet&desc=newcat&type=article",
                alt: "Image of a cat in a basket of yarn",
                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Kitten_DT"),
                }
            },
        ],
    },

    // Featured Media
    // {
    //     containerName: "featuredSection",
    //     title: "Lorem ipsum",
    //     subTitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    //     ctaText: "Button",
    //     ctaLink: "#",
    //     isCTA: true,
    //     isInverted: false,
    //     mediaInfo: {
    //         url: "https://www.youtube.com/embed/JotTqpiOFFA",
    //         alt: "videoAlt",
    //         containerName: "video", // type can be any supported media like image, video etc
    //     },
    // },

    // Fetured tiles - 2
    {
        containerName: "featuredTilesGrid",
        title: "Anything you need.",
        subTitle: "However you need it.",
        showAllText: "", // TODO should add to parameters if it is needed in future for most recipes with a section?
        showAllLink: "",
        variant: "1-3up",
        displaySettings: { // TODO display settings might not be needed, get clarification from mijesh
            columnCount: 1,
            rowCount: 3,
        },
        desktop: {
            displaySettings: {
                columnCount: 3,
                rowCount: 1,
            },
        },
        isInverted: false,
        tileSections: [
            {
                title: "Adopt with PetSmart Charities of Canada",
                subTitle: "Find a pet, pet adoption events and more.",
                readMoreText: "", // linkLabel
                readMoreLink: "https://petsmartcharities.ca/adopt-a-pet?origin=newpet&desc=charities&type=anythingyouneed", // link
                alt: "PetSmart Charities of Canada",

                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC1_NPP-Charities_CAN_MO"),
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC1_NPP-Charities_CAN_DT"),
                }
            },
            {
                title: "Services",
                subTitle: "Pamper your new pet with spa visits, playdates, sleepovers, training and more.",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/?origin=newpet&desc=services&type=anythingyouneed",

                alt: "PetSmart Services",
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC2_NPP-SERV_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC2_NPP-SERV_DT"),
                }
            },
            {
                title: "Autoship",
                subTitle: "Never run out of their essentials with convenient & flexible Autoship.",
                readMoreText: "",
                readMoreLink: "/featured-shops/auto-ship/?origin=newpet&desc=autoship&type=anythingyouneed",
                alt: "Image of a dog, cat, and bird laying on a hardwood floor",

                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC3_NPP-AutoShip_MO"),
                desktop: {
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC3_NPP-AutoShip_DT"),
                }
            },
        ],
    },

    // Accordion
    // {
    //     containerName: "accordionSection",
    //     title: "Frequently asked questions",
    //     subTitle: "",
    //     isInverted: false,
    //     sections: [
    //         {
    //             title: "Accordion title 1",
    //             subTitle: "",
    //             isActive: false, // TODO is this needed? clarification
    //             htmlContent: "<p> Lorem ipsum dolor sit amet, 1 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //         },
    //         {
    //             title: "Accordion title 2",
    //             subTitle: "",
    //             isActive: false,
    //             htmlContent: "<p> Lorem ipsum dolor sit amet, 2consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //         },
    //         {
    //             title: "Accordion title 3",
    //             subTitle: "",
    //             isActive: false,
    //             htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //         },
    //         {
    //             title: "Accordion title 4",
    //             subTitle: "",
    //             isActive: false,
    //             htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //         },
    //     ],
    // },

    // SEO text
    // { // TODO buttonText in seo recipe maybe should be in data?
    //     containerName: "SEOSection",
    //     title: "", // TODO only takes in whole paragraph, check to see if names should change or keep convention
    //     subTitle: "Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. ",
    //     isInverted: false,
    //     linkText: "",
    //     link: "",
    // },
]

export default landingPageData;

