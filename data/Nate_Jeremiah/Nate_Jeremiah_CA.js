// DPT-3784 - N+J Q&A Update - CA - lu: 11.03.2022-MS

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    // Hero banner Large
    {
        containerName: "ShoppableDrawer",
        hasDrawer: true,
        title: "Nate + Jeremiah",
        description: "Inspired designs that bring pets & people together.",
        isInverted: false,
        backgroundColor: "#F7F7F7",
        drawerTitle: "Shop Nate + Jeremiah",
        //contentData: '5252898,5252898,5252898,5252898,5252898,5252898',
        tileSections: {

            skuList: "(5329622,5329661,5329639,5329592,5329659,5329636)", // comma without space between skus

        },
        alt: "Nate and Jeremiah for PetSmart logo. Image of a fish tank and stand in neutral styled living room.",
        imageInfo: {
            url: imagelink("WEB-1413553-Sept22_LH-B_NJ-SP-Multispecies_MO"),// imagelink(""),
            // url: "https://via.placeholder.com/688x576/F7F7F7/000000?text=688x576@2x"
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1413553-Sept22_LH-B_NJ-SP-Multispecies_DT"),
                // url: 'https://via.placeholder.com/2480x1064/F7F7F7/000000?text=2480x1065@2x' // imagelink(""),
            },
        },
        shopAllUrl: "/featured-brands/nate-and-jeremiah/?origin=brandshop&desc=n+j&type=hero",
    },
    { // Collection by species
        containerName: "CategoryRow",
        title: "Shop by species",
        shouldCallApi: false,
        isQuickLink: true,
        variant: "sm",
        itemsPerView: 3,
        displaySettings: {
            desktop: 3,
            tablet: 3,
            mobile: 2.5
        },
        tileSections: [
            {
                imgContent: imagelink("WEB-1413553-Sept22_3CARD_NJ-SP-Fish_DT"),
                alt: "Fish iconography.",
                title: "Fish collection",
                link: "/featured-brands/nate-and-jeremiah/fish-collection/?origin=n-and-jbrandshop&type=card3up1&desc=fish"

            },
            {
                imgContent: imagelink("WEB-1413553-Sept22_3CARD_NJ-SP-Rep_DT"),
                alt: "Reptile iconography.",
                title: "Reptile collection",
                link: "/featured-brands/nate-and-jeremiah/reptile-collection/?origin=n-and-jbrandshop&type=card3up2&desc=reptile"
            },
            {
                imgContent: imagelink("WEB-1413553-Sept22_3CARD_NJ-SP-SmPet_DT"),
                alt: "Small pet iconography.",
                title: "Small pet collection",
                link: "/featured-brands/nate-and-jeremiah/small-pet-collection/?origin=n-and-jbrandshop&type=card3up3&desc=smallpet"
            },

        ],

    },
    // Featured Media
    {
        containerName: "featuredSection",
        title: "Experience the Nate + Jeremiah collection",
        subTitle: "Watch Nate + Jeremiah talking about their new collection, designed to bring pets and people together.",
        ctaText: "",
        ctaLink: "",
        isCTA: false,
        isInverted: false,
        mediaInfo: {
            url: "https://www.youtube.com/embed/2FfoBOalkpM?origin=n-and-jbrandshop&type=feature&desc=video",
            alt: "Nate and Jeremiah for PetSmart logo. Neutral background color.",
            type: "", // type can be any supported media like image, video etc
        },
    },
    {//1-3 up grid display of promocard
        containerName: "featuredTilesGrid",
        title: "Nate + Jeremiah for PetSmart",
        subTitle: "Thoughtfully designed environments and décor for your pets.",
        showAllText: "Shop all",
        showAllLink: "/featured-brands/nate-and-jeremiah/?origin=n-and-jbrandshop&type=card3up&desc=shopall",
        variant: "1-3up",
        textAlign: "left",
        tileSections: [
            {
                title: "Fish collection",
                subTitle: "Stylish water-resistant stands, ample storage with drawers & cord management.",
                readMoreText: "",
                readMoreLink: "/featured-brands/nate-and-jeremiah/fish-collection/?origin=n-and-jbrandshop&type=card3up1&desc=fishstand",
                imgContent: imagelink("WEB-1413553-Sept22_3COLFC-1_NJ-SP-Fish_DT"),
                alt: "Fish tank and stand.",


            },

            {
                title: "Reptile collection",
                subTitle: "Water-resistant finishes & beautiful statement décor for shelter & privacy .",
                readMoreText: "",
                readMoreLink: "/featured-brands/nate-and-jeremiah/reptile-collection/?origin=n-and-jbrandshop&type=card3up2&desc=reptilestand",
                imgContent: imagelink("WEB-1413553-Sept22_3COLFC-2_NJ-SP-Reptile_DT"),
                alt: "Reptile terrarium and stand.",
            },

            {
                title: "Small pet collection",
                subTitle: "Stylish stands, ample storage & functional décor for their natural instincts.",
                readMoreText: "",
                readMoreLink: "/featured-brands/nate-and-jeremiah/small-pet-collection/?origin=n-and-jbrandshop&type=card3up3&desc=spstand",
                imgContent: imagelink("WEB-1413553-Sept22_3COLFC-3_NJ-SP-SmPet_DT"),
                alt: "Small pet habitat and stand.",
            },

        ],
    },
    // Tabs Section
    {
        containerName: "tabSection",
        title: "Collections by pet",
        description: "Home collections designed for the needs of many species, merging style & function.",
        isInverted: false,
        tabs: [
            //Tab- 1 starts here
            {
                tabTitle: "Fish",
                sections: [
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Stands",
                        shopLink: "/featured-brands/nate-and-jeremiah/fish-collection/stands/?origin=n-and-jbrandshop&type=productcarousel&desc=fishstand​",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA1_NJ-SP-Fish-Stands_MO"),
                                promoTitle: "Sophisticated design",
                                promoCopy: "Easy-clean, water-resistant stands with cord management & ample storage space.",
                                promoAlt: "Fish stand in the Nate and Jeremiah collection.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA1_NJ-SP-Fish-Stands_DT"),
                                },
                            },
                            skuList: "(5329615,5329617,5329618,5329619,5329620,5329622,5329623)", // comma without space between skus
                        },

                    },
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Décor",
                        shopLink: "/featured-brands/nate-and-jeremiah/fish-collection/decor/?origin=n-and-jbrandshop&type=productcarousel&desc=fishdecor​",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA2_NJ-SP-Fish-Decor_MO"),
                                promoTitle: "Complement their space",
                                promoAlt: "Fish decor in the Nate and Jeremiah collection.",
                                promoCopy: "Attention to detail is the cornerstone of a well-designed habitat.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA2_NJ-SP-Fish-Decor_DT"),
                                },
                            },
                            skuList: "(5329638,5329524,5329522,5329639,5329637,5329636,5329659,5329592,5329635)", // comma without space between skus
                        },

                    },
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Artificial plants",
                        shopLink: "/featured-brands/nate-and-jeremiah/fish-collection/artificial-plants/?origin=n-and-jbrandshop&type=productcarousel&desc=fishplants",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA3_NJ-SP-Fish-Plants_MO"),
                                promoTitle: "Shelter & beauty in one",
                                promoAlt: "Fish artificial plants in the Nate and Jeremiah collection.",
                                promoCopy: "Thoughtful functionality is as important as thoughtful design.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA3_NJ-SP-Fish-Plants_DT"),
                                },
                            },
                            skuList: "(5329656,5329655,5329661,5330799,5329593)", // comma without space between skus
                        },

                    },

                ]
            },
            //Tab- 1 ends here

            //Tab- 2 starts here
            {
                tabTitle: "Reptile",
                sections: [
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Stands",
                        shopLink: "/featured-brands/nate-and-jeremiah/reptile-collection/stands/?origin=n-and-jbrandshop&type=productcarousel&desc=reptilestand​​",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA1_NJ-SP-Reptile-Stands_MO"),
                                promoTitle: "Sophisticated design",
                                promoCopy: "Easy-clean, water-resistant stands with cord management & ample storage space.",
                                promoAlt: "Reptile stand in the Nate and Jeremiah collection.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA1_NJ-SP-Reptile-Stands_DT"),
                                },
                            },
                            skuList: "(5329615,5329617,5329618,5329619,5329620,5329622,5329623)", // comma without space between skus
                        },

                    },
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Décor",
                        shopLink: "/featured-brands/nate-and-jeremiah/reptile-collection/decor/?origin=n-and-jbrandshop&type=productcarousel&desc=reptiledecor",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA2_NJ-SP-Reptile-Decor_MO"),
                                promoTitle: "Complement their space",
                                promoAlt: "Reptile decor in the Nate and Jeremiah collection.",
                                promoCopy: "Attention to detail is the cornerstone of a well-designed habitat.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA2_NJ-SP-Reptile-Decor_DT"),
                                },
                            },
                            skuList: "(5329519,5329664,5329663,5329656,5329655,5329661,5330799,5329593)", // comma without space between skus
                        },

                    },
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Hides",
                        shopLink: "/featured-brands/nate-and-jeremiah/reptile-collection/hides/?origin=n-and-jbrandshop&type=productcarousel&desc=reptilehides",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        itemsPerView: 3,
                        displaySettings: {
                            desktop: 3,
                            tablet: 3,
                            mobile: 2.5
                        },
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA3_NJ-SP-Reptile-Hides_MO"),
                                promoTitle: "Shelter & beauty in one",
                                promoAlt: "Reptiles hides in the Nate and Jeremiah collection.",
                                promoCopy: "Thoughtful functionality is as important as thoughtful design.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA3_NJ-SP-Reptile-Hides_DT"),
                                },
                            },
                            skuList: "(5329523,5329657,5329635)", // comma without space between skus
                        },

                    },

                ]
            },
            //Tab- 2 ends here

            //Tab- 3 starts here
            {
                tabTitle: "Small pet",
                sections: [
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Stands",
                        shopLink: "/featured-brands/nate-and-jeremiah/small-pet-collection/stands/?origin=n-and-jbrandshop&type=productcarousel&desc=spstand",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA1_NJ-SP-SmPet-Stands_MO"),
                                promoTitle: "Sophisticated design",
                                promoCopy: "Easy-clean, water-resistant stands with cord management & ample storage space.",
                                promoAlt: "Small pet stand in the Nate and Jeremiah collection.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA1_NJ-SP-SmPet-Stands_DT"),
                                },
                            },
                            skuList: "(5329615,5329617,5329618,5329619,5329620,5329622,5329623)", // comma without space between skus
                        },

                    },
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Décor",
                        shopLink: "/featured-brands/nate-and-jeremiah/small-pet-collection/decor/?origin=n-and-jbrandshop&type=productcarousel&desc=spdecor​",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA2_NJ-SP-SmPet-Decor_MO"),
                                promoTitle: "Complement their space",
                                promoAlt: "Small pet decor in the Nate and Jeremiah collection.",
                                promoCopy: "Attention to detail is the cornerstone of a well-designed habitat.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA2_NJ-SP-SmPet-Decor_DT"),
                                },
                            },
                            skuList: "(5329519,5329664,5329663,5329644,5329652,5329643,5329785)", // comma without space between skus
                        },

                    },
                    { // StoryTelling Carousel  (API CALL)
                        containerName: "ExclusiveOffer",
                        title: "Accessories",
                        shopLink: "/featured-brands/nate-and-jeremiah/small-pet-collection/accessories/?origin=n-and-jbrandshop&type=productcarousel&desc=spaccessories​​​​",
                        ctaText: "Shop all",
                        shouldCallApi: true,
                        tileSections: {
                            promoCard: { // promo card
                                imgContent: imagelink("WEB-1413553-Sept22_3COL-CA3_NJ-SP-SmPet-Acces_MO"),
                                promoTitle: "Easy-to-clean essentials",
                                promoAlt: "Small pet accessories in the Nate and Jeremiah collection.",
                                promoCopy: "Thoughtful functionality is as important as thoughtful design.",
                                desktop: {
                                    imgContent: imagelink("WEB-1413553-Sept22_3COL-CA3_NJ-SP-SmPet-Acces_DT"),
                                },
                            },
                            skuList: "(5329666,5329665,5329641,5329642)", // comma without space between skus
                        },

                    },

                ]
            },
            // Tab- 3 ends here

        ] // inner sections ends here
    }, // Tab section ends here
    // Accordion
    {
        containerName: "accordionSection",
        title: "Nate + Jeremiah Q&A",
        subTitle: "",
        isInverted: false,
        sections: [
            {
                title: "Why is this partnership with PetSmart important to you?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We love pets.<br/><br/>They’re an important part of our family and of other people’s families.<br/><br/>We’ll do anything for our pets, and we know that every pet parent feels that way.<br/><br/>Pets are integral parts of our family, and we love the challenge of creating spaces and atmospheres for them that not only feel rich with personality and texture but can also be layered into a wide variety of design aesthetics and styles.</p>"
            },
            {
                title: "Why did you choose PetSmart to partner with? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>PetSmart is dedicated to doing anything for pets and the people who love them. So, we wanted to design a collection for them that would help bring people and pets even closer together. We wanted to empower pet parents to showcase the pets in their family and create spaces where they can all live in style.<br/><br/>We knew that we could bring our design philosophy together with PetSmart’s expertise in pet care to produce a collection that’s every bit as functional as it is beautiful.</p>"
            },
            {
                title: "Tell us about your design philosophy and how it relates to pets? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Our design philosophy is rooted in making spaces feel warm/inviting/comfortable/family friendly/usable.<br/><br/>We think pets should have the same level of comfort and functionality as their humans. </p>"
            },
            {
                title: "What were your design inspirations? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We drew on the sleek lines of midcentury modern design. We used colors, materials, and textures that have an organic/natural feel.<br/><br/>The idea was to create furniture and decorations that are contemporary but also timeless--products that would fit into a wide range of homes and decorating styles. </p>"
            },
            {
                title: "Tell us about the materials and colors you used.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We believe in the power of natural, neutral colors that have textures that add personality. So, we used wood grains like oak and mahogany for stands.<br/><br/>For aquarium accessories, we created decorations that look like stone wood and pottery.<br/><br/>For small pets, we used pumice, which is good for them to chew on and designed places for them to hide made out a grass that they can actually eat. </p>"
            },
            {
                title: "As designers, what were your goals with this collection?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>As designers, we are always fascinated by how you can make your home more beautiful, more personal, more meaningful <br/><br/>The new Nate + Jeremiah collection at PetSmart was an opportunity to design environments and decor products that allow just that, so that pets and pet parents alike can live more beautifully, stylishly, and comfortably, together.</p>"
            },
            {
                title: "What do you hope the collection will provide for pet parents? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Our job as designers is to help everyone live better in their homes, including your pets.  <br/><br/>So we created a design-forward collection that combines the needs of your pets with a pet parent’s desire to have well-made, thoughtfully designed pieces that will elevate any space.<br/><br/>It was important for us to make sure that whatever we designed not only looked good but created the best environments for your pets.<br/><br/>We hope the collection will bring pet parents and the pets they love even closer together. </p>"
            },
            {
                title: "Aquariums often take center stage in a home. Why should pet parents consider bringing other pets into rooms where you might find an aquarium? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Aquariums add so much to a room. They have light, color, and movement. They’re not only beautiful to look at, but they’re also relaxing.<br/><br/>In some homes, small pets and reptiles don’t live in the main rooms of the house where the family spends most of their time. We hope our collection will encourage people to share their family rooms and dens with the pets they love. <br/><br/>Pets like hamsters and bearded dragons are just as cool and fun to look at as fish are and we’ve created accessories that can make their habitats design statements too.</p>"
            },
            {
                title: "One of the goals of interior design is to create beautiful spaces that people will use and love. How did you apply that thinking to pets? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We applied the same principles designing for pets that we do for people, because pets have many of the same needs. <br/><br/>Pets need homes where they can eat, drink, sleep, exercise, hang out and chill out.<br/><br/>And just like people, they need things to play with, to stimulate their bodies and their minds.<br/><br/>So, the Nate + Jeremiah Collection for PetSmart is designed to give pets everything they need in an environment that’s enjoyable for them and the people who love them.  </p>"
            },
            {
                title: "Let’s talk about the collection. Tell us about the stands.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>When we were thinking about the stands that people put aquariums, terrariums, and small pet habitats on, we wanted to make them look and feel like well-designed, furniture that can fit into a variety of home décor styles. <br/><br/>The stands are universal—they can be used for fish aquariums, reptile terrariums and small pet habitats.</p>"
            },
            {
                title: "What sets these stands apart from others?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>They look great, like a good piece of furniture. Our stands are available in a variety of finishes including spiced mahogany, raven oak and faux marble and contemporary brass hardware that adds a touch of sophistication/glamour.<br/><br/>And it was very important to merge function with style.<br/><br/>So, all of the stands have easy-to-clean, water-resistant finishes, and plenty of storage space and accessory hooks for supplies. Plus, there’s a management system for power cords. </p>"
            },
            {
                title: "You really went to town designing accessories and décor for aquariums.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Well, we’re interior designers! So why wouldn’t we create accessories and decorations for the interior of aquariums> Part of the fun of setting up an aquarium is decorating it to create a unique space that’s as beautiful as your fish.<br/><br/>But the accessories are more than just decorations—they help create an environment that echoes their native habitat and makes them feel comfortable.<br/><br/>Fish love to shelter in plants, they need places to hide if they’re feeling shy or territorial, and they like to play with accessories that they can swim through.</p>"
            },
            {
                title: "Walk me through the aquatic décor pieces. Plants?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>First off, fish love having plants to hang out in. We designed artificial plants that don’t require a green thumb and resemble garden plants we love like rosemary, olive, philodendron, and blue agave.<br/><br/>And you can also use these same plants in reptile terrariums. </p>"
            },
            {
                title: "Tell me about the aquarium decorations.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We love organic materials, so we looked at the textures and colors of stone and wood, which are things that fish live with in the wild.<br/><br/>The neutral colors not only look natural, but they also provide a background that really makes the colors of your fish pop.</p>"
            },
            {
                title: "Do I detect a kind of ancient, architectural feel to some of the pieces? ",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We thought it would be a dramatic contrast to have classical looking decorations for aquariums that sit on our contemporary stands. So, we referenced architectural shapes with a historical vibe. <br/><br/>There are decorations that look like ancient stone and marble Greek and Roman columns and structures where you fish can hide that have a Moorish feeling.<br/><br/>There’s an archway your fish will love swimming through that looks like a primitive carved wood totem.<br/><br/>There are jugs that look like old-timey pottery vessels that might’ve gotten swept out to sea and sunk on the ocean floor.<br/><br/>These designs are not only pleasing to our eyes, but the shapes and colors provide interest for your fish. </p>"
            },
            {
                title: "Tell us about your designs for reptiles.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Reptiles like bearded dragons, lizards and snakes come from all different climates and parts of the world, so we wanted to reference their environments with the colors and textures of nature.<br/><br/>They’re so cool and mysterious. They create interest and drama in a space and with the stands we’ve designed, you can bring your reptile’s terrarium into pretty much any room of the house.</p>"
            },
            {
                title: "Tell us about the artificial plants.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Many reptiles live among plants. So, we designed a range of artificial plants that are easy to take care of and really spruce up the look of terrariums. And these same plants can also be used in a fish tank.</p>"
            },
            {
                title: "Tell us about the hides.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Reptiles also need places to get exposed to and bask in warmth and light and have spaces where they can get a little privacy and relax.<br/><br/>So, we designed a tower that they can hide-out in and a hide that also has a basking spot on the top. Both of these products are easy-to-clean and have a wide entryway and enough space inside for your reptile to turn around and exit. </p>"
            },
            {
                title: "Tell us about the food and water dishes.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Reptiles also need places to get exposed to and bask in warmth and light and have spaces where they can get a little privacy and relax.<br/><br/>So, we designed a tower that they can hide-out in and a hide that also has a basking spot on the top. Both of these products are easy-to-clean and have a wide entryway and enough space inside for your reptile to turn around and exit. </p>"
            },
            {
                title: "Let’s talk about small pets.",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>Is there anything cuter than a hamster? Maybe a guinea pig? Or a bunny? Who wouldn’t want all that cuteness in their den or family room? That’s why we made sure that the stands we designed for aquariums and reptile terrariums can also be used for your small pet’s habitat.<br/><br/>And as parents, we know that small pets are fun for kids and can help teach them about responsibilities and caring. </p>"
            },
            {
                title: "How did you design with small pets in mind?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>They love to eat, and they need fresh water every day, so we designed easy-to-clean bowls in neutral colors that will go with any habitat and in every home.  Oh, and by the way, if you also have reptiles, they can use these dishes too. </p>"
            },
            {
                title: "What else did you learn about small pets when designing this collection?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>One thing we learned about small pets is that they love to chew, chew, chew.<br/><br/>Fun fact: Small pets have teeth that grow continuously throughout their lives.<br/><br/>So, they need toys and chews made from wood and pumice that satisfy their natural instincts to chew, which also helps keep their teeth in good shape.<br/><br/>They’re very friendly and smart—smart enough to know that sometimes they just want to chill out.<br/><br/>That’s why we designed an easy-to-clean lounger bed and a low-maintenance faux leather and Sherpa sofas for them to curl up on and relax.<br/><br/>Trust us, there is nothing more ridiculously adorable than seeing a hamster sleeping on a sofa.<br/><br/>And we even created a yurt that provides the perfect outlet for privacy and solitude. It allows them to come and go easily and offers them a place to nest and hide.</p>"
            },
            {
                title: "What were your inspirations?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>In the wild, small pets live in forests and fields, so we looked at nature for inspiration. We were able to design with a dried grass, which is an excellent material for foraging, and it also provides good nutrition for small pets.<br/><br/>So, they can literally have a place to hide and snack on it, too. </p>"
            },
            // {
            //     title: "What do pets mean to you?",
            //     subTitle: "",
            //     isActive: false,
            //     htmlContent: "<p>Nate and Jeremiah share fond memories about:<br/><br/>1)  the pets they grew up with and have loved through the years<br/><br/>2) the pets that they have now<br/><br/>3) the pets that their children are interested in</p>"
            // },
            {
                title: "Why do you love pets?",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>They’re a part of the family <br/><br/>They show us unconditional love<br/><br/>They bond with us<br/><br/>They teach us about patience, the value of friendship, the importance of having fun and getting exercise. </p>"
            },
            {
                title: "How does your collection say, “We’ll do anything for pets?”",
                subTitle: "",
                isActive: false,
                htmlContent: "<p>We know that pets help make a house a home. They’re part of the family.<br/><br/>As pet parents, we’ll do anything to make sure that pets have what they need to live their best lives. <br/><br/>As designers, we’ll do anything to make sure that pets and pet parents can live together with style and ease.  <br/><br/>With the Nate + Jeremiah collection, we’ve created design-forward products that combines what your pets need with what you want your home to look like. </p>"
            },
        ],
    },
    //SEO text
    {
        containerName: "SEOSection",
        title: "About Nate + Jeremiah",
        subTitle: "Pets are an integral part of the family, and we’ll do anything for pets. <br/><br/>We love creating spaces and atmospheres for their needs that not only feel rich with personality and texture, but also can be layered into a wide variety of home pet décor styles. As designers, we always focus on how you can make your home more beautiful, more personal, and more meaningful. The new Nate + Jeremiah collection at PetSmart offers thoughtfully designed stands, consoles, and home pet décor products that inspire you and your pets to live more beautifully, stylishly and comfortably together.<br/><br/>Your pets will love the décor and accessories, while you will love the functional and fashionable appeal the stands and consoles add to your home. From fish to reptiles, your décor desires will come to life in any style. Our new collection offers the best in pet furniture and accessories to match the décor trends you are striving to design around. With this one of a kind collection, you will find the perfect solution for the special guinea pig, hamster, fish, bearded dragon, leopard gecko, ball python, chinchilla or other small pets in your life.",
        showMoreText: "See more",
        showLessText: "See less",
        isInverted: false,
        linkText: "",
        link: "",
    },


]

export default data_container;