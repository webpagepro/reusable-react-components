
/*
 Structure of Dog sub page data

 DogSubPageData
    |
    |---- 1. Sections
            |
            |---- 1. HeroBanner
            |
            |---- 2. TextPassage (Details text)
            |
            |---- 3. TabSection
            |       |
            |       |---- 1. sections
            |           |
            |           |---- 1. CategoryRow
            |           |       |
            |           |       |---- 1. tileSections
            |           |
            |           |---- 2. PromoBanner
            |           |
            |           |---- 3. ColumnTips (Tips section)
            |           |       |
            |           |       |---- 1. tipSections
            |           |
            |           |---- 4. FeaturedTiles (Featured resources)
            |                   |
            |                   |---- 1. tileSections
            |
            |---- 4. FeaturedSection (Featured Media)
            |
            |---- 5. FeaturedTiles (Services)
            |       |
            |       |---- 1. tileSections
            |
            |---- 6. PromoBannerLarge
            |
            |---- 7. FeaturedTiles (Book a service)
            |       |
            |       |---- 1. tileSections
            |
            |---- 8. AccrodionSection
            |       |
            |       |---- 1. sections
            |
            |---- 9. SEOSection

*/

/* eslint-disable no-mixed-spaces-and-tabs */

let imagelink = (imageId) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${imageId}`
}

let dogSubPageData = [
    // general settings, if any goes here.

    // each section in the landing page will be an entry in the sections array
    // Hero banner
    {
        containerName: "heroBanner",
        title: "Anything for \nYour New Dog",
        description: "",
        isInverted: true,
        backgroundColor: "#F7F7F7",
        imageInfo: {
            url: imagelink("WEB-1337901-Jun22_MP-HB_NPP-Dog_MO"),

        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1337901-Jun22_MP-HB_NPP-Dog_DT"),
            },
        },
        alt: "Dog held by owner",
    },
    // Details text
    // {
    //     containerName: "TextPassage",
    //     title: "Checklist by dog lifestage",
    //     description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    //     isInverted: false,
    // },

    // Tabs Section
    {
        containerName: "tabSection",
        title: "What's your dog's age?",
        description: "Shop dog checklist by lifestage.",
        isInverted: false,
        tabs: [
            //Tab- 1 starts here
            {
                tabTitle: "Puppy \nUnder 1 year",
                sections: [
                    // tile carousel
                    {
                        containerName: "CategoryRow",
                        title: "",
                        subTitle: "",
                        isInverted: false,
                        tileSections: [
                            {
                                title: "Anything for your puppy",
                                subTitle: "",
                                link: "/dog/training-and-behavior/petsmart-puppy-guide-71872.html?cgid=100412?origin=newpuppy&desc=guide&type=checklist",
                                imgContent: imagelink("WEB-1337901-Jun22_6COL_NPP-Puppy_DT"),
                                alt: "Image of a puppy",
                            },
                            {
                                title: "Food",
                                subTitle: "",
                                link: "/dog/food/?prefn1=customDogLifestage&prefv1=Puppy%200-12%20mos&origin=newpuppy&desc=food&type=checklist",
                                imgContent: imagelink("5286976"),
                                alt: "Food",
                            },
                            {
                                title: "Treats",
                                subTitle: "",
                                link: "/dog/treats/?origin=newpuppy&desc=treats&type=checklist",
                                imgContent: imagelink("5148035"),
                                alt: "Treats",
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/dog/toys/?pmin=0.00&prefn1=customDogLifestage&prefv1=Puppy%200-12%20mos&origin=newpuppy&desc=toys&type=checklist",
                                imgContent: imagelink("5059017"),
                                alt: "Toys",
                            },
                            {
                                title: "Collars & Leashes",
                                subTitle: "",
                                link: "/dog/collars-harnesses-and-leashes/?origin=newpuppy&desc=collars&type=checklist",
                                imgContent: imagelink("5322660"),
                                alt: "Collars & Leashes",
                            },
                            {
                                title: "Crates",
                                subTitle: "",
                                link: "/dog/crates-gates-and-containment/?origin=newpuppy&desc=crates&type=checklist",
                                imgContent: imagelink("5298862"),
                                alt: "Crates",
                            },
                            {
                                title: "Beds",
                                subTitle: "",
                                link: "/dog/beds-and-furniture/?origin=newpuppy&desc=beds&type=checklist",
                                imgContent: imagelink("5291562"),
                                alt: "Beds",
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/dog/bowls-and-feeders/?origin=newpuppy&desc=bowls&type=checklist",
                                imgContent: imagelink("5309676"),
                                alt: "Bowls & Storage",
                            },
                            {
                                title: "Flea & Tick",
                                subTitle: "",
                                link: "/dog/flea-and-tick/?origin=newpuppy&desc=flea&type=checklist",
                                imgContent: imagelink("5295458"),
                                alt: "Flea & Tick",
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/dog/cleaning-supplies/?origin=newpuppy&desc=care&type=checklist",
                                imgContent: imagelink("5270618"),
                                alt: "Care & Cleanup",
                            },
                        ],
                    },
                    // promo banner
                    {
                        containerName: "PromoBanner", // Promo banner small
                        title: "Puppy Guide $19.99: Save $300+ on treats, services & more!",
                        href: "/dog/training-and-behavior/petsmart-puppy-guide-71872.html?cgid=100412?origin=newpuppy&desc=guide&type=banner",
                        ctaText: "Shop now",
                        size: "sm",
                        cta: true, // TODO added to give option of showing button
                        isInverted: true,
                        imgContent: imagelink("WEB-1337901-Jun22_PB-S_NPP-AK_MO"),
                        alt: "Red background",
                        desktop: {
                            imgContent: imagelink("WEB-1337901-Jun22_PB-S_NPP-AK_DT"),
                        }
                    },
                    // tips section
                    {
                        containerName: "columnTips",
                        title: "Tips for getting started",
                        subTitle: "Want to make the transition to their new home easy for everyone? We're here to help. ",
                        isInverted: false,
                        tipSections: [
                            {
                                title: "Dogs need a place to call their own to sleep & relax. ",
                                subTitle: "", // TODO maybe not needed as title is taking on role of subtitle
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Dog-Safe_DT"),
                                alt: "Icon of a dog house",
                            },
                            {
                                title: "Introduce the smells of people & pets on items before they meet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Dog-Nosey_DT"),
                                alt: "Icon of a dog sniffing",
                            },
                            {
                                title: "They may be shy for a few days. Patience is key.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Dog-Hide_DT"),
                                alt: "Icon of a dog hiding",
                            },

                            {
                                title: "Positive reinforcement can help their confidence. ",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Dog-Socializing_DT"),
                                alt: "Icon of two dogs facing eachother",
                            },
                            {
                                title: "Keep them up-to-date on routine shots with your vet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Dog-Vaccines_DT"),
                                alt: "Icon of a needle",
                            },
                        ],
                    },
                    // Featured resources
                    {
                        containerName: "PromoCardScroll",
                        title: "All about your new puppy",
                        desc: "",
                        showAllText: "See all",
                        shopLink: "/learning-center/search/?fdid=dog&origin=newdog&desc=puppy&type=learningcenter",
                        linkLabel: "Read more",
                        displaySettings: {
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
                                title: "4 Tips for Choosing the Best Puppy Food",
                                desc: "Before you bring home your new puppy, you should choose a food that’s right for them. Perhaps choosing the best puppy food doesn’t seem like a task that should require much thought, but there are a few things to consider before you purchase puppy food. ",
                                link: "/learning-center/dog-care/what-should-i-feed-my-puppy/A0062.html?origin=newpuppy&desc=feed&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Puppy_MO"),
                                alt: "Image of a puppy eating out of a red bowl",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Puppy_DT"),
                                }
                            },
                            {
                                title: "Secrets of Puppy Behaviour",
                                desc: "When a pup is first born, their life is all about a warm and furry mom. But puppies grow up fast. By the time your puppy is three months old, think of them as a teenager versus a toddler. Welcome to the juvenile phase, when their instincts are focused on the big wide world — seeing the sights and smelling the smells!",
                                link: "/learning-center/dog-care/unleashing-the-secrets-of-puppy-behavior/A0011.html?origin=newpuppy&desc=behavior&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A2_NPP-Puppy_MO"),
                                alt: "Image of a dog sitting outside with a red harness",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A2_NPP-Puppy_DT"),
                                }
                            },
                            {
                                title: "Get Through Your Puppy's Teething Phase",
                                desc: "Your puppy’s impulse to gnash and gnaw is not entirely a bad thing. Puppies are born almost blind but with a strong sense of taste. So that’s the sense they use to start learning about the world.",
                                link: "/learning-center/dog-care/get-through-your-puppys-teething-phase/A0172.html?origin=newpuppy&desc=teething&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Puppy_MO"),
                                alt: "image of puppy with toy",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Puppy_DT"),
                                }
                            },
                            {
                                title: "Containing Your Canine",
                                desc: "Some dogs need boundaries. Here are some recommendations.",
                                link: "/learning-center/dog-care/containing-your-canine-dog-gates-and-pens/A0008.html?origin=newpuppy&desc=containing&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Puppy_MO"),
                                alt: "image of puppy in crate",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Puppy_DT"),

                                }
                            },
                            {
                                title: "Dental Health for Puppies",
                                desc: "Here’s a statistic that may not make you smile: 80 percent of dogs show signs of gum disease by the time they’re two years old. The best cure for dental problems is prevention. Once plaque has formed on the teeth, they only way to remove it is with mechanical cleaning.",
                                link: "/learning-center/dog-care/dental-health-for-puppies/A0122.html?origin=newpuppy&desc=dental&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Puppy_MO"),
                                alt: "image of puppy chewing on toy",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Puppy_DT"),
                                }
                            },
                            {
                                title: "How to Train a New Puppy",
                                desc: "So you brought home a puppy? Congratulations and welcome to pet parenthood! Puppies can be a great source of joy and happiness, not to mention warmth with all those snuggles and cuddles. But they also require a ton of attention, commitment and training. Never raised a puppy before? Not to worry! With a little patience, a dash of grace, and a whole lot of love, you’ll have a star student and a well-behaved pup. Remember, your new four-legged friend has never done this before, so give them the space and time they need to learn. Keep these puppy training tips in mind when training a puppy, and you’ll have a well-behaved doggie in no time. (Pro tip: a few treats will go a long way when it comes to motivation.)",
                                link: "/learning-center/dog-care/raising-your-new-puppy/A0121.html?origin=newpuppy&desc=raising&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A7_NPP-Puppy_MO"),
                                alt: "image of puppy with treat",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A7_NPP-Puppy_DT"),
                                }
                            },
                        ],
                    },

                ]
            },
            //Tab- 1 ends here

            //Tab- 2 starts here
            {
                tabTitle: "Adult dog \n1-6 years",
                sections: [
                    // tile carousel
                    {
                        containerName: "CategoryRow",
                        title: "",
                        subTitle: "",
                        showAllText: "",
                        showAllLink: "",
                        isInverted: false,
                        tileSections: [
                            {
                                title: "Food",
                                subTitle: "",
                                link: "/dog/food/?prefn1=customDogLifestage&prefv1=Adult%201-7%20yrs&origin=newadultdog&desc=food&type=checklist",
                                imgContent: imagelink("5286975"),
                                alt: "Food",
                            },
                            {
                                title: "Treats",
                                subTitle: "",
                                link: "/dog/treats/?origin=newadultdog&desc=treats&type=checklist",
                                imgContent: imagelink("5234774"),
                                alt: "Treats",
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/dog/toys/?origin=newadultdog&desc=toys&type=checklist",
                                imgContent: imagelink("5323836"),
                                alt: "Toys",
                            },
                            {
                                title: "Collars & Leashes",
                                subTitle: "",
                                link: "/dog/collars-harnesses-and-leashes/?origin=newadultdog&desc=collars&type=checklist",
                                imgContent: imagelink("5323076"),
                                alt: "Collars & Leashes",
                            },
                            {
                                title: "Beds",
                                subTitle: "",
                                link: "/dog/beds-and-furniture/?origin=newadultdog&desc=beds&type=checklist",
                                imgContent: imagelink("5302901"),
                                alt: "Beds",
                            },
                            {
                                title: "Crates",
                                subTitle: "",
                                link: "/dog/crates-gates-and-containment/?origin=newadultdog&desc=crates&type=checklist",
                                imgContent: imagelink("5309334"),
                                alt: "Crates",
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/dog/bowls-and-feeders/?origin=newadultdog&desc=bowls&type=checklist",
                                imgContent: imagelink("5320520"),
                                alt: "Bowls & Storage",
                            },
                            {
                                title: "Flea & Tick",
                                subTitle: "",
                                link: "/dog/flea-and-tick/?origin=newadultdog&desc=flea&type=checklist",
                                imgContent: imagelink("5295460"),
                                alt: "Flea & Tick",
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/dog/cleaning-supplies/?origin=newadultdog&desc=care&type=checklist",
                                imgContent: imagelink("5245966"),
                                alt: "Care & Cleanup",
                            },
                            {
                                title: "Vitamins & Supplements",
                                subTitle: "",
                                link: "/dog/dental-care-and-wellness/vitamins-and-supplements/?prefn1=customDogLifestage&prefv1=Adult%201-7%20yrs&origin=newadultdog&desc=supplements&type=checklist",
                                imgContent: imagelink("5313502"),
                                alt: "Vitamins & Supplements",
                            },
                        ],
                    },
                    // promo banner - comment this block if not used
                    // {
                    //     containername: "promoBanner",
                    //     title: "Book your pet's Fourth of July stay with us! (fireworks not included)",
                    //     link: "#",
                    //     ctaText: "Small button",
                    //     cta: true, // TODO added to give option of showing button
                    //     isInverted: false,
                    //     imageInfo: {
                    //         url: imagelink("WEB-1373002_June22_PROMO-SB_PetsHotel_MO"),
                    //         alt: "placeholder",
                    //     },
                    //     desktop: {
                    //         imageInfo: {
                    //             url: imagelink("WEB-1373002_June22_PROMO-SB_PetsHotel_DT"),
                    //             alt: "placeholder",
                    //         },
                    //     }
                    // },
                    // tips section
                    {
                        containerName: "columnTips",
                        title: "Tips for getting started",
                        subTitle: "Want to make the transition to their new home easy for everyone? We're here to help. ",
                        isInverted: false,
                        tipSections: [
                            {
                                title: "Dogs need a place to call their own to sleep & relax. ",
                                subTitle: "", // TODO maybe not needed as title is taking on role of subtitle
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Dog-Safe_DT"),
                                alt: "Icon of a dog house",
                            },
                            {
                                title: "Introduce the smells of people & pets on items before they meet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Dog-Nosey_DT"),
                                alt: "Icon of a dog sniffing",
                            },
                            {
                                title: "They may be shy for a few days. Patience is key.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Dog-Hide_DT"),
                                alt: "Icon of a dog hiding",
                            },

                            {
                                title: "Positive reinforcement can help their confidence. ",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Dog-Socializing_DT"),
                                alt: "Icon of two dogs facing eachother",
                            },
                            {
                                title: "Keep them up-to-date on routine shots with your vet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Dog-Vaccines_DT"),
                                alt: "Icon of a needle",
                            },
                        ],
                    },
                    // Featured resources
                    {
                        containerName: "PromoCardScroll",
                        title: "All about your adult dog",
                        desc: "",
                        showAllText: "See all",
                        shopLink: "/learning-center/search/?fdid=dog&origin=newdog&desc=adult&type=learningcenter",
                        linkLabel: "Read more",
                        displaySettings: {
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
                                title: "Benefits & Tips of Using Crates & Gates",
                                desc: "Many pet parents use dog crates and dog gates to train their pups, set boundaries, or contain them for their comfort/safety. Some pups love to sleep and relax in their crates, other pups might need a gate to protect them from dangers like stairs. There are a ton of reasons why a family might be looking into the use of dog crates and gates for training. ",
                                link: "/learning-center/dog-care/benefits-and-tips-of-using-dog-crates-and-dog-gates-for-training/A0120.html?origin=newadultdog&desc=crates&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Dog-Adult_MO"),
                                alt: "Image of a dog standing in a crate",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Dog-Adult_DT"),
                                }
                            },
                            {
                                title: "Introducing Your Dog to a New Puppy",
                                desc: "Patience, commitment and consistency are the keys to introducing a new puppy to your current dog. Not to worry, we’ll help you make the new arrangement a happy one.",
                                link: "/learning-center/dog-care/introducing-your-dog-to-a-new-puppy/A0178.html?origin=newadultdog&desc=introduce&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A2_NPP-Dog-Adult_MO"),
                                alt: "Image of an adult and puppy husky laying down",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A2_NPP-Dog-Adult_DT"),
                                }
                            },
                            {
                                title: "What Should I Feed My Dog?",
                                desc: "There are so many kinds of dog food on the market that choosing the right one can seem confusing. To narrow down your choices, ask these three questions:",
                                link: "/learning-center/dog-care/what-should-i-feed-my-dog/A0209.html?origin=newadultdog&desc=feed&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Adult_MO"),
                                alt: "Image of a dog standing in the kitchen with its food bowl",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Adult_DT"),
                                }
                            },
                            {
                                title: "Protect Your Dog's Dental Health",
                                desc: "Dental problems in dogs begin with plaque, the bacterial film that builds up on teeth. Over time, plaque can cause gum infection, tooth decay and infections that can affect your pet’s heart, liver and kidneys.",
                                link: "/learning-center/dog-care/protect-your-dogs-dental-health/A0070.html?origin=newadultdog&desc=dental&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Dog-Adult_MO"),
                                alt: "image of dog with chew toy",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Dog-Adult_DT"),
                                }
                            },
                        ],
                    },

                ]
            },
            //Tab- 2 ends here

            //Tab- 3 starts here
            {
                tabTitle: "Senior dog\n 7+ years",
                sections: [
                    // tile carousel
                    {
                        containerName: "CategoryRow",
                        title: "",
                        subTitle: "",
                        showAllText: "",
                        showAllLink: "",
                        isInverted: false,
                        tileSections: [
                            {
                                title: "Food",
                                subTitle: "",
                                link: "/dog/food/?prefn1=customDogLifestage&prefv1=Senior%208%20yrs%20%26%20older&origin=newseniordog&desc=food&type=checklist",
                                imgContent: imagelink("5182763"),
                                alt: "Food",
                            },
                            {
                                title: "Treats",
                                subTitle: "",
                                link: "/dog/treats/?origin=newseniordog&desc=treats&type=checklist",
                                imgContent: imagelink("5331965"),
                                alt: "Treats",
                            },
                            {
                                title: "Toys",
                                subTitle: "",
                                link: "/dog/toys/?origin=newseniordog&desc=toys&type=checklist",
                                imgContent: imagelink("5323594"),
                                alt: "Toys",
                            },
                            {
                                title: "Collars & Leashes",
                                subTitle: "",
                                link: "/dog/collars-harnesses-and-leashes/?origin=newseniordog&desc=collars&type=checklist",
                                imgContent: imagelink("5322988"),
                                alt: "Collars & Leashes",
                            },
                            {
                                title: "Beds",
                                subTitle: "",
                                link: "/dog/beds-and-furniture/?origin=newseniordog&desc=beds&type=checklist",
                                imgContent: imagelink("5303390"),
                                alt: "Beds",
                            },
                            {
                                title: "Crates",
                                subTitle: "",
                                link: "/dog/crates-gates-and-containment/?origin=newseniordog&desc=crates&type=checklist",
                                imgContent: imagelink("5309334"),
                                alt: "Crates",
                            },
                            {
                                title: "Bowls & Storage",
                                subTitle: "",
                                link: "/dog/bowls-and-feeders/?origin=newseniordog&desc=bowls&type=checklist",
                                imgContent: imagelink("5309259"),
                                alt: "Bowls & Storage",
                            },
                            {
                                title: "Dental Care & Wellness",
                                subTitle: "",
                                link: "/dog/dental-care-and-wellness/?prefn1=customDogLifestage&prefv1=Senior%208%20yrs%20%26%20older&origin=newseniordog&desc=dental&type=checklist",
                                imgContent: imagelink("5320046"),
                                alt: "Dental Care & Wellness",
                            },
                            {
                                title: "Care & Cleanup",
                                subTitle: "",
                                link: "/dog/cleaning-supplies/?origin=newseniordog&desc=care&type=checklist",
                                imgContent: imagelink("5299945"),
                                alt: "Care & Cleanup",
                            },
                            {
                                title: "Flea & Tick",
                                subTitle: "",
                                link: "/dog/flea-and-tick/?origin=newseniordog&desc=flea&type=checklist",
                                imgContent: imagelink("5295453"),
                                alt: "Flea & Tick",
                            },
                        ],
                    },
                    // {
                    //     containername: "promoBanner",
                    //     title: "Book your pet's Fourth of July stay with us! (fireworks not included)",
                    //     link: "#",
                    //     ctaText: "Small button",
                    //     cta: true, // TODO added to give option of showing button
                    //     isInverted: false,
                    //     imageInfo: {
                    //         url: imagelink("WEB-1373002_June22_PROMO-SB_PetsHotel_MO"),
                    //         alt: "placeholder",
                    //     },
                    //     desktop: {
                    //         imageInfo: {
                    //             url: imagelink("WEB-1373002_June22_PROMO-SB_PetsHotel_DT"),
                    //             alt: "placeholder",
                    //         },
                    //     }
                    // },
                    // tips section
                    {
                        containerName: "columnTips",
                        title: "Tips for getting started",
                        subTitle: "Want to make the transition to their new home easy for everyone? We're here to help. ",
                        isInverted: false,
                        tipSections: [
                            {
                                title: "Dogs need a place to call their own to sleep & relax. ",
                                subTitle: "", // TODO maybe not needed as title is taking on role of subtitle
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T1_NPP-Dog-Safe_DT"),
                                alt: "Icon of a dog house",
                            },
                            {
                                title: "Introduce the smells of people & pets on items before they meet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T2_NPP-Dog-Nosey_DT"),
                                alt: "Icon of a dog sniffing",
                            },
                            {
                                title: "They may be shy for a few days. Patience is key.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T3_NPP-Dog-Hide_DT"),
                                alt: "Icon of a dog hiding",
                            },

                            {
                                title: "Positive reinforcement can help their confidence. ",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T4_NPP-Dog-Socializing_DT"),
                                alt: "Icon of two dogs facing eachother",
                            },
                            {
                                title: "Keep them up-to-date on routine shots with your vet.",
                                subTitle: "",
                                imgContent: imagelink("WEB-1337901-Jun22_5COL-T5_NPP-Dog-Vaccines_DT"),
                                alt: "Icon of a needle",
                            },
                        ],
                    },
                    // Featured resources
                    {
                        containerName: "PromoCardScroll",
                        title: "All about your senior dog",
                        desc: "",
                        showAllText: "See all",
                        shopLink: "/learning-center/search/?fdid=dog&origin=newdog&desc=senior&type=learningcenter",
                        linkLabel: "Read more",
                        displaySettings: {
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
                                title: "What Should I Feed My Senior Dog?",
                                desc: "Starting around eight years old, dogs can develop age-related conditions, including putting on weight. If that is the case for your senior buddy, it may be time to switch to a diet dog food. ",
                                link: "/learning-center/dog-care/what-should-i-feed-my-senior-dog/A0057.html?origin=newseniordog&desc=feed&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Dog-Senior_MO"),
                                alt: "Image of senior dog standing in a field",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A1_NPP-Dog-Senior_DT"),
                                }
                            },
                            {
                                title: "Protect Your Dog's Dental Health",
                                desc: "Dental problems in dogs begin with plaque, the bacterial film that builds up on teeth. Over time, plaque can cause gum infection, tooth decay and infections that can affect your pet’s heart, liver and kidneys.",
                                link: "/learning-center/dog-care/protect-your-dogs-dental-health/A0070.html?origin=newseniordog&desc=dental&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A2_NPP-Dog-Senior_MO"),
                                alt: "Image of dog laying with a bone",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A2_NPP-Dog-Senior_DT"),
                                }
                            },
                            {
                                title: "Supporting Your Dog's Hip & Joint Health",
                                desc: "As much as we want them to stay their spunky, playful selves, senior dogs can sometimes develop aches and pains caused by aging. Just like humans, our four legged friends’ bodies can deteriorate over time, leaving them with uncomfortable and often painful joints. So, is there anything you can do to help your dog? Well, as much as we wish you could travel back in time and reverse all the risk factors that have led to an arthritis diagnosis, there’s no way to completely cure your pup’s disease and eliminate discomfort. However, switching them to a dog food that specifically aims to support your dog’s joint health can help them live their best life. Learn about canine arthritis as well as how dog food for joint health not only nourish their body, but help support their joints as well.",
                                link: "/learning-center/dog-care/a-guide-to-supporting-your-dogs-hip-and-joint-health/A0148.html?origin=newseniordog&desc=hipandjoint&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Senior_MO"),
                                alt: "Image of dog playing with a red tennis ball",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A3_NPP-Dog-Senior_DT"),
                                }
                            },
                            {
                                title: "Vitamins and Remedies for Dogs​",
                                desc: "Premium dog food usually has all the nutrients your pooch needs. But some pets benefit from a little extra nutritional boost. That’s where vitamins, minerals and supplements come in.",
                                link: "/learning-center/dog-care/vitamins-minerals-and-herbal-remedies-for-dogs/A0229.html?origin=newseniordog&desc=vitamins&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Dog-Senior_MO"),
                                alt: "image of two dogs",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A4_NPP-Dog-Senior_DT"),
                                }
                            },
                            {
                                title: "How to Choose the Best Dog Bed",
                                desc: "Every pup deserves a comfy dog bed to lounge around on, take naps on, and enjoy. No matter if your dog is big or small, every pup needs a cozy spot to call their own. There are so many different types of beds designed for dogs...but which one is best? Is there one that will work better for the type of dog you have? Where should you start? ",
                                link: "/learning-center/dog-care/what-kind-of-dog-bed-should-i-buy/A0063.html?origin=newseniordog&desc=bed&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Dog-Senior_MO"),
                                alt: "image of dog on bed with kong",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A5_NPP-Dog-Senior_DT"),
                                }
                            },
                            {
                                title: "Crates, Carriers, Gates and Kennels",
                                desc: "Your dog is your best friend, but sometimes you both need some alone time. These containment choices can help keep your dog corralled and comfortable:",
                                link: "/learning-center/dog-care/crates-carriers-gates-and-kennels-whats-best-for-my-dog/A0124.html?origin=newseniordog&desc=crates&type=article",
                                imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Dog-Senior_MO"),
                                alt: "image of dog in crate",
                                desktop: {
                                    imgContent: imagelink("WEB-1337901-Jun22_3COL-A6_NPP-Dog-Senior_DT"),
                                }
                            },
                        ],
                    },

                ]
            },
            // Tab- 3 ends here

        ] // inner sections ends here
    }, // Tab section ends here

    // Featured Media
    // {
    //     containername: "featuredSection",
    //     title: "Lorem ipsum",
    //     subTitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    //     ctaText: "Button",
    //     ctaLink: "#",
    //     isCTA: true,
    //     isInverted: false,
    //     mediaInfo: {
    //         url: "https://www.youtube.com/embed/JotTqpiOFFA",
    //         alt: "videoAlt",
    //         type: "video", // type can be any supported media like image, video etc
    //     },
    // },

    // Fetured tiles - 2 Services
    {
        containerName: "featuredTilesGrid",
        title: "Services",
        subTitle: "PetSmart is at your service.",
        showAllText: "Book a service",
        showAllLink: "https://services.petsmart.ca?origin=newdog&desc=services&type=services",
        variant: "2-4up",
        displaySettings: { // TODO not sure if needed
            columnCount: 2,
            rowCount: 2,
        },
        desktop: {
            displaySettings: {
                columnCount: 4,
                rowCount: 1,
            },
        },
        isInverted: false,
        tileSections: [
            {
                title: "Grooming",
                subTitle: "Bring in your dog for a fresh new 'do!",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/grooming/?origin=newdog&desc=grooming&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC1_NPP-Dog-GRM_DT"),
                alt: "Image of a dog being dried off after a bath",
            },
            {
                title: "PetsHotel",
                subTitle: "Reserve their overnight stay with us.",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/petshotel/?origin=newdog&desc=petshotel&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC2_NPP-Dog-HOTEL_DT"),
                alt: "Image of dog laying on a cot with a PetsHotel staff member",
            },
            {
                title: "Doggie Day Camp",
                subTitle: "A great new way to play!",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/doggie-day-camp/?origin=newdog&desc=ddc&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC3_NPP-Dog-DDC_DT"),
                alt: "Image of two dogs playing with a red toy ",
            },
            {
                title: "Training",
                subTitle: "Group, private & virtual classes.",
                readMoreText: "",
                readMoreLink: "https://services.petsmart.ca/training/?origin=newdog&desc=training&type=services",
                imgContent: imagelink("WEB-1337901-Jun22_4COL-FC4_NPP-Dog-TRAIN_DT"),
                alt: "Image of dog and trainer",
            },
        ],
    },
    //Dummy Test of Horizontal promo card data
    // {
    //     containerName: "featuredTilesGrid",
    //     title: "Services",
    //     subTitle: "PetSmart is at your service.",
    //     showAllText: "Book a service",
    //     textAlign: "center",
    //     showAllLink: "",
    //     variant: "1-3up",
    //     displayPattern: "horizontal",
    //     displaySettings: { // TODO not sure if needed
    //         columnCount: 2,
    //         rowCount: 2,
    //     },
    //     desktop: {
    //         displaySettings: {
    //             columnCount: 4,
    //             rowCount: 1,
    //         },
    //     },
    //     isInverted: false,
    //     tileSections: [
    //         {
    //             title: "Step 1",
    //             subTitle: "Shop your pet’s favorites and select Autoship",
    //             readMoreText: "",
    //             readMoreLink: "https://services.petsmart.com/grooming/?origin=newdog&desc=grooming&type=services",
    //             imgContent: imagelink("WEB-1178113-Jan22_DEAL1_Dog"),
    //             alt: "Image of a dog being dried off after a bath",

    //         },
    //         {
    //             title: "Step 2",
    //             subTitle: "Select the frequency that you want your subscription to ship",
    //             readMoreText: "",
    //             readMoreLink: "https://services.petsmart.com/petshotel/?origin=newdog&desc=petshotel&type=services",
    //             imgContent: imagelink("WEB-1178113-Jan22_DEAL2_Cat"),
    //             alt: "Image of dog laying on a cot with a PetsHotel staff member",

    //         },
    //         {
    //             title: "Step 3",
    //             subTitle: "Checkout & sit back. Your first order will ship immediately",
    //             readMoreText: "",
    //             readMoreLink: "https://services.petsmart.com/doggie-day-camp/?origin=newdog&desc=ddc&type=services",
    //             imgContent: imagelink("WEB-1178113-Jan22_DEAL3_Fish"),
    //             alt: "Image of two dogs playing with a red toy ",
    //         },
    //     ],
    // },
    // promo banner - Large
    {
        containerName: "promoBannerLarge",
        size: "lg",
        title: "Get our FREE Adoption Kit!",
        subTitle: "Includes a FREE bag of food & over $300 in savings; available in stores.",
        link: "/store-locator/?origin=newdog&desc=adoptionkit&type=banner",
        ctaText: "Find a store",
        cta: true, // TODO added to give option of showing button
        isInverted: false,
        imgContent: imagelink("WEB-1337901-Jun22_PROMO-BL_NPP-Dog-AdoptKit_MO"),// imagelink(""),
        alt: "Dog chewing ball and adoption kit image.",
        desktop: {
            imgContent: imagelink("WEB-1337901-Jun22_PROMO-BL_NPP-Dog-AdoptKit_DT"),
        }
    },

    // Featured tiles - 3
    {
        containerName: "featuredTilesGrid",
        title: "More resources",
        subTitle: 'PetSmart has all the many "anythings" your pup needs.',
        showAllText: "Book a service",
        showAllLink: "",
        variant: "1-3up",
        displaySettings: {
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
                readMoreLink: "https://petsmartcharities.ca/adopt-a-pet?origin=newdog&desc=charities&type=anything", // link
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC1_NPP-Charities_CAN_MO"),
                alt: "PetSmart Charities of Canada",
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC1_NPP-Charities_CAN_DT"),
                }
            },
            {
                title: "Same-Day Delivery",
                subTitle: "Get it when you need it. Powered by DoorDash.",
                readMoreText: "", // linkLabel
                readMoreLink: "/featured-shops/same-day-delivery/?origin=newdog&desc=sameday&type=anything", // link
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC2_NPP-Doordash_CAN_MO"),
                alt: "Same-Day Delivery",
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC2_NPP-Doordash_CAN_DT"),
                }
            },
            {
                title: "Autoship",
                subTitle: "Never run out of their essentials with convenient & flexible Autoship.",
                readMoreText: "Read more", // linkLabel
                readMoreLink: "/featured-shops/auto-ship/?origin=newdog&desc=autoship&type=anything", // link
                imgContent: imagelink("WEB-1337901-Jun22_3COL-FC3_NPP-Dog-AdoptShip_MO"),
                alt: "Image of a dog sitting in a box",
                desktop: { // TODO is this needed?
                    imgContent: imagelink("WEB-1337901-Jun22_3COL-FC3_NPP-Dog-AutoShip_DT"),
                }
            },
        ],
    },

    // Accordion
    // {
    //     containername:"accordionSection",
    //     title: "Frequently asked questions",
    //     subTitle: "",
    //     isInverted: false,
    //     sections: [
    //         {
    //             title: "Accordion title 1",
    //             subTitle: "",
    //             isActive: false,
    //             htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    //         },
    //         {
    //             title: "Accordion title 2",
    //             subTitle: "",
    //             isActive: false,
    //             htmlContent: "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
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
    // {
    //     containername: "SEOSection",
    //     title: "",
    //     subTitle: "Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. ",
    //     isInverted: false,
    //     linkText: "",
    //     link: "",
    // },


]

export default dogSubPageData;

