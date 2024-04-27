// <!-- DPT-5321 PVS Store Card Update lu:01.31.24 - RR -->
/* eslint-disable no-mixed-spaces-and-tabs*/

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let data_container = [
    // Breadcrumbs
    {
        containerName: "breadcrumbContainer",
        breadcrumbs: [
            { text: "Services", href: "https://services.petsmart.com/ " },
            { text: "Veterinary care", href: "/pet-services/petsmart-veterinary-care.html" },
            { text: "PetSmart veterinary services", href: "#" },
        ]
    },
    // Hero banner
    {
        containerName: "heroBanner",
        // title: "Veterinary Services",
        // description: "Monthly small pet essentials",
        isInverted: true,
        backgroundColor: "#FFFFFF",
        alt: "Brown hamster, brown and white guinea pig, grey chinchilla, brown rabbit",
        imageInfo: {
            url: imagelink("WEB-1637000-Dec22_PVS-Site-Images_MO"),// imagelink(""),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-1637000-Dec22_PVS-Site-Images_DT"), // imagelink(""),
            },
        }
    },
    //Featured Media
    {
        containerName: "featuredSection",
        title: "Find comprehensive care for your pet at a local practice",
        subTitle: "From wellness checks to vaccines to urgent care, there's a PetSmart Veterinary Services hospital for your pet's health needs",
        isInverted: false,
        backgroundColor: '#E2F2FF', //'#f2e2ff',
        ctaText: "Book now",
        ctaLink: "#pet-services-store-locations", // link leads to anchor tag at bottom of page, to the Store locations accordion
        isCTA: true,
        mediaInfo: {
            url: {
                imgContent: imagelink("PVS_Site-Images_Feature_750x422"),
                desktop: {
                    imgContent: imagelink("PVS_Site-Images_Feature_1420x800"),
                }
            },
            alt: "Find comprehensive care for your pet at a local practice",
            type: "image", // type can be any supported media like image, video etc
        },
        dataLayerParams: {
            event: "content_clicked",
            content_type: "button",
            content_location: "petsmart-veterinary-services.html",
            content_label: "Main: Book Now",
        },
    },
    //2-4 up grid display of promocard
    {
        containerName: "featuredTilesGrid",
        title: "Why PetSmart Veterinary Services",
        subTitle: "High-quality veterinary care, located in select PetSmart stores",
        showAllText: "",
        showAllLink: "",
        variant: "3up",
        className: "restrain-height",
        textAlign: "left",
        contentAlign: "center",
        tileSections: [
            {
                title: "Veterinarian-owned",
                subTitle: "Our clinics are doctor-owned and staffed by passionate veterinary teams",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("PVS_Site-Images_Card1_208x208"),
                alt: "Brown and white guinea pig in colorful bedding",


            },
            {
                title: "Online booking",
                subTitle: "View schedules and book routine vet care online for many of our hospital locations",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("PVSSiteImages_5"),
                alt: "Two brown guinea pigs sharing a snack",
            },
            {
                title: "Conveniently located",
                subTitle: "Bring your pet in for a checkup, grab some essentials (and maybe a treat or two) - all in one trip!",
                readMoreText: "",
                readMoreLink: "",
                imgContent: imagelink("PVS_Site-Images_Card4_208x208"),
                alt: "Image of dog and trainer",
            },
        ],
    },
    // Info card scroll Accordion
    {
        containerName: "accordionContainer",
        // anchor tag is there because they want the feature banner to link to the bottom of the page to show the locations
        title: '<div><a id="pet-services-store-locations"></a></div>Our veterinary clinic locations',
        desc: "Find your local clinic & make an appointment",
        // shopLink: "https://www.petsmart.com/",
        displayLink: true,
        optionalText: true,
        truncateLines: 0,
        linkLabel: "",
        accordSections: [
            // ARIZONA
            {
                title: "Arizona",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Buckeye",
                        desc: "466 S Watson Rd. \nBuckeye, AZ 85326\n(623) 900-1787",
                        link: "https://kiosk.rhapsody.vet/?businessId=mVMn9x1e&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" },
                        //     // {title:"Urgent care", size:"sm", variant:"primary"}
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1268_Buckeye",
                            store_state_zip_city: "AZ_85326_Buckeye",
                        }
                    },
                    {
                        title: "Casa Grande",
                        desc: "986 N Mission Pkwy, \nCasa Grande, AZ 85194\n(520) 503-5624",
                        link: "tel:5205035624",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" },
                            // {title:"Urgent care", size:"sm", variant:"primary"}
                        ],
                        buttonText: "Call now",
                            dataLayerParams:
                            {
                                event: "content_clicked",
                                content_type: "button",
                                content_location: "petsmart-veterinary-services.html",
                                content_label: "Call Now",
                                store_id_name: "1714_Casa Grande",
                                store_state_zip_city: "AZ_85194_Casa Grande",
                            }
                    },
                    {
                        title: "Gilbert",
                        desc: "857 N Val Vista Dr, \nSuite 106\nGilbert, AZ 85234\n(480) 571-6793",
                        link: "tel:4805716793",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" },
                            // {title:"Urgent care", size:"sm", variant:"primary"}
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "1900_Gilbert",
                            store_state_zip_city: "AZ_85234_Gilbert",
                        }
                    },
                    {
                        title: "Lake Pleasant",
                        desc: "25372 N Lake Pleasant Pkwy, \nPeoria, AZ 85383\n(623) 303-7003",
                        link: "https://kiosk.rhapsody.vet/?businessId=m1K0dMEZ&embed=true&language=en-US",
                        // badges: [
                        //     {title:"Coming soon", size:"sm", variant:"primary"},
                        //     {title:"Urgent care", size:"sm", variant:"primary"},
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1267_Lake Pleasant",
                            store_state_zip_city: "AZ_85383_Peoria",
                        }
                    },
                    {
                        title: "North Scottsdale (Frank Lloyd Wright)",
                        desc: "16257 N. Scottsdale Rd\nScottsdale, AZ 85254\n(480) 992-5153",
                        link: "https://kiosk.rhapsody.vet/?businessId=ZOyzd5VR&embed=true&language=en-US",
                        // badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        // //    {title:"Urgent care", size:"sm", variant:"primary"},
                        //  ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0130_North Scottsdale (Frank Lloyd Wright)",
                            store_state_zip_city: "AZ_85254_Scottsdale",
                        }
                    },
                    {
                        title: "Oro Valley",
                        desc: "10625 N Oracle Rd\nOro Valley, AZ 85737\n(520) 521-2183",
                        link: "https://kiosk.rhapsody.vet/?businessId=W193PlOw&embed=true&language=en-US",
                        // badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        //     // {title:"Urgent care", size:"sm", variant:"primary"}
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "",
                            content_label: "Book Now",
                            store_id_name: "1003_Oro Valley",
                            store_state_zip_city: "AZ_85737_Oro Valley",
                        }
                    },
                    {
                        title: "Phoenix Metro Center",
                        desc: "10405 N 31st. Ave\nPhoenix AZ 85051\n(602) 345-9174",
                        link: "https://kiosk.rhapsody.vet/?businessId=ZEdXyYE6&embed=true&language=en-US",
                        // badges: [
                        // { title: "Coming soon", size: "sm", variant: "primary" },
                        //     // {title:"Urgent care", size:"sm", variant:"primary"}
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book now",
                            store_id_name: "1099_Phoenix Metro Center",
                            store_state_zip_city: "AZ_85051_Phoenix",
                        }
                    },
                    {
                        title: "Tempe (Elliot Rd)",
                        desc: "1140 W. Elliot Rd.\nTempe, AZ 85284\n(480) 571-6860",
                        link: "https://kiosk.rhapsody.vet/?businessId=RVkrpmOe&embed=true&language=en-US",
                        // badges: [
                        // { title: "Coming soon", size: "sm", variant: "primary" },
                        //     // {title:"Urgent care", size:"sm", variant:"primary"}
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book now",
                            store_id_name: "2256_Tempe (Elliot Rd)",
                            store_state_zip_city: "AZ_85284_Tempe",
                        }
                    },
                    {
                        title: "Tucson",
                        desc: "4374 N. Oracle Road\nTucson, AZ 85705\n(520) 487-3520",
                        link: "https://kiosk.rhapsody.vet/?businessId=3O8eZNVr&embed=true&language=en-US",
                        badges: [
                            // {title:"Coming soon", size:"sm", variant:"primary"},
                            // {title:"Urgent care", size:"sm", variant:"primary"}
                        ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1196_Tucson (Oracle & Wetmore)",
                            store_state_zip_city: "AZ_85705_Tucson",
                        }
                    },
                    // {
                    //     title: "Phoenix",
                    //     desc: "10405 N 31st Ave.\nPhoenix, AZ 85051\n(602) 331-0131",
                    //     link: "tel:6023310131",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" },
                    //         // {title:"Urgent care", size:"sm", variant:"primary"}
                    //     ],
                    //     buttonText: "Call now"
                    // },
                    // {
                    //     title: "Tucson (El Con Mall)",
                    //     desc: "3695 E. Broadway Blvd. \nTucson, AZ 85716\n(520) 541-9254",
                    //     link: "tel:5205419254",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" },
                    //         // {title:"Urgent care", size:"sm", variant:"primary"}
                    //     ],
                    //     buttonText: "Call now"
                    // },

                ]
            },
            // ARKANSAS
            {
                title: "Arkansas",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Fayetteville",
                        desc: "3585 N Shiloh Dr \nFayetteville, AR 72703\n(479) 405-4188",
                        link: "https://kiosk.rhapsody.vet/?businessId=YORYjNE7&embed=true&language=en-US",
                        //  badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" },
                        // //     // {title:"Urgent care", size:"sm", variant:"primary"}
                        //  ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1119_Fayetteville",
                            store_state_zip_city: "AR_72703__Fayetteville",
                        }
                    },
                ]
            },
            // CALIFORNIA
            {
                title: "California",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Costa Mesa",
                        desc: "620 West 17th St.\nCosta Mesa, CA 92627\n(949) 519-2123",
                        link: "tel:9495192123",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" },
                            // {title:"Urgent care", size:"sm", variant:"primary"},
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call now",
                            store_id_name: "",
                            store_state_zip_city: "CA_92627_Costa Mesa",
                        }
                    },
                    {
                        title: "Dublin",
                        desc: "6960 Amador Plaza Rd.\nDublin, CA 94568\n(925) 644-3114",
                        link: "https://kiosk.rhapsody.vet/?businessId=9VQqMdVq&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0059_Dublin",
                            store_state_zip_city: "CA_94568_Dublin",
                        }
                    },
                    {
                        title: "Fountain Valley",
                        desc: "17940 Newhope St\nFountain Valley, CA 94568\n(657) 359-0981",
                        link: "tel:6573590981",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Call now",
                        datdaLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call now",
                            store_id_name: "0090_Fountain Valley",
                            store_state_zip_city: "CA_92708_Dublin",
                        }
                    },
                    // {
                    //     title: "Folsom",
                    //     desc: "2705 E Bidwell St.\nFolsom, CA 95630\n(916) 984-4748",
                    //     link: "tel:9169844748",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" }
                    //     ],
                    //     buttonText: "Call now"
                    // },

                    {
                        title: "N Huntington Beach",
                        desc: "7600 Edinger Ave. \nHuntington Beach, CA 92647\n(657) 331-9481",
                        link: "tel:6573319481",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" },
                            // {title:"Urgent care", size:"sm", variant:"primary"},
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "1452_N Huntington Beach",
                            store_state_zip_city: "CA_92647_Huntington Beach",
                        }
                    },
                    // {
                    //     title: "Oceanside",
                    //     desc: "3420 Marron Rd.\nOceanside, CA 92056\n(760) 729-4546",
                    //     link: "tel:7607294546",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" }
                    //     ],
                    //     buttonText: "Call now"
                    // },
                    {
                        title: "Palm Springs",
                        desc: "5601 Ramon Rd E\nPalm Springs, CA 92264\n(760) 517-7081",
                        // link: "tel:7603259711",
                        link: "https://kiosk.rhapsody.vet/?businessId=lVqDLmO7&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1380_Palm Springs",
                            store_state_zip_city: "CA_92264_Palm Springs",
                        }
                    },
                    {
                        title: "San Carlos",
                        desc: "1225 Industrial Rd\nSan Carlos, CA 94070\n(650) 609-2399",
                        link: "https://kiosk.rhapsody.vet/?businessId=zVDKaPOR&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1691_San Carlos",
                            store_state_zip_city: "CA_94070_San Carlos",
                        }
                    },
                    {
                        title: "San Diego",
                        desc: "3610 Rosecrans St\nSan Diego, CA 92110\n(619) 768-8278",
                        link: "https://kiosk.rhapsody.vet/?businessId=YORYvWE7&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0143_San Diego",
                            store_state_zip_city: "CA_92110_San Diego",
                        }
                    },
                    {
                        title: "San Juan Capistrano",
                        desc: "33963 Doheny Park Rd.\nSan Juan Capistrano, CA 92675\n(949) 620-4151",
                        link: "https://kiosk.rhapsody.vet/?businessId=L1J8pwOa&embed=true&language=en-US",
                        // link: "https://kiosk.rhapsody.vet/?businessId=L1J8pwOa&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0099_San Juan Capistrano",
                            store_state_zip_city: "CA_92675_San Juan Capistrano",
                        }
                    },
                    {
                        title: "Tujunga",
                        desc: "6348 Foothill Blvd. \nTujunga, CA 91042\n(747) 237-8598",
                        link: "https://kiosk.rhapsody.vet/?businessId=QOGeMr15&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1796_Tujunga",
                            store_state_zip_city: "CA_91042_Tujunga",
                        }
                    },
                    {
                        title: "Victorville",
                        desc: "12624 Amargosa Rd. \nVictorville, CA 92392\n(760) 531-2225",
                        link: "tel:7605312225",
                        badges: [
                            // { title: "Coming soon", size: "sm", variant: "primary" },
                            // {title:"Urgent care", size:"sm", variant:"primary"},
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "0087_Victorville",
                            store_state_zip_city: "CA_92392_Victorville",
                        }
                    },
                    // {
                    //     title: "Yorba Linda",
                    //     desc: "5521 Mirage St. \nYorba Linda, CA 92887\n(714) 637-8088",
                    //     link: "tel:7146378088",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" },
                    //         // {title:"Urgent care", size:"sm", variant:"primary"},
                    //     ],
                    //     buttonText: "Call now"
                    // },
                ]
            },
            // CONNECTICUT
            {
                title: "Connecticut",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Norwalk",
                        desc: "525 Connecticut Ave\nNorwalk, CT 06854\n(475) 284-5025",
                        link: "https://kiosk.rhapsody.vet/?businessId=JOaGBy1p&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1173_Norwalk",
                            store_state_zip_city: "CT_06854_Norwalk",
                        }
                    },
                    {
                        title: "Stamford",
                        desc: "288 West Ave\nStamford, CT 06902\n(475) 291-3023",
                        link: "https://kiosk.rhapsody.vet/?businessId=wO7BZ4EN&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        datdaLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book now",
                            store_id_name: "1867_Stamford",
                            store_state_zip_city: "CT_06902_Stamford",
                        }
                    },
                ]
            },
            // FLORIDA
            {
                title: "Florida",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Boca Raton",
                        desc: "20861 FL-7 \nBoca Raton, FL 33428\n(561) 510-9485",
                        link: "tel:5615109485",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" }
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "0335_Boca Raton",
                            store_state_zip_city: "FL_33428_Boca Raton",
                        }
                    },
                    {
                        title: "Coral Gables",
                        desc: "3301 SW 22nd St.\nCoral Gables, FL 33145\n(786) 761-5950",
                        link: "https://kiosk.rhapsody.vet/?businessId=bVnNWgVd&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1411_Coral Gables",
                            store_state_zip_city: "FL_33145_Coral Gables",
                        }
                    },
                    {
                        title: "Delray Beach",
                        desc: "510 Linton Boulevard Ste 101\nDelray Beach, FL 33444\n(561) 468-2501",
                        link: "https://kiosk.rhapsody.vet/?businessId=e1NobMEx&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "2113_Delray Beach",
                            store_state_zip_city: "FL_33444_Delray Beach",
                        }
                    },
                    {
                        title: "Kendall Lakes",
                        desc: "14025 SW 88th St. \nMiami, FL 33186\n(786) 785-4735",
                        link: "https://kiosk.rhapsody.vet/?businessId=XEeDwK1z&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0356_Kendall Lakes",
                            store_state_zip_city: "FL_33186_Miami",
                        }
                    },
                    {
                        title: "Kissimmee Fl",
                        desc: "601 Centerview Blvd.\nKissimmee, FL 34741\n(321) 270-6941",
                        link: "tel:3212706941",
                        badges: [
                            { title: "Urgent care", size: "sm", variant: "primary" },
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "2454_Kissimmee Fl",
                            store_state_zip_city: "FL_34741_Kissimmee",
                        }
                    },
                    // {
                    //     title: "Orlando (East Colonial)",
                    //     desc: "6134 E Colonial Dr.\nOrlando, FL 32807\n(407) 658-7710",
                    //     link: "tel:4076587710",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" }
                    //     ],
                    //     buttonText: "Call now"
                    // },
                    {
                        title: "Orlando (Fashion Square Mall)",
                        desc: "3232 E Colonial Dr. \nOrlando, FL 32803\n(689) 223-4050",
                        // link: "tel:8502971500",
                        link: "https://kiosk.rhapsody.vet/?businessId=NEvQL51q&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1325_Orlando (Fashion Square Mall)",
                            store_state_zip_city: "FL_32803_Orlando",
                        }
                    },
                    // {
                    //     title: "Spring Hill",
                    //     desc: "1345 Wendy Ct.\nSpring Hill, FL 34607\n(352) 683-9893",
                    //     link: "tel:3526839893",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" }
                    //     ],
                    //     buttonText: "Call now"
                    // },
                    // {
                    //     title: "Tallahassee",
                    //     desc: "3220 Capital Cir NE.\nTallahassee, FL 32308\n(850) 297-1500",
                    //     link: "tel:8502971500",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" }
                    //     ],
                    //     buttonText: "Call now"
                    // },
                    // {
                    //     title: "Tallahassee S",
                    //     desc: "1759 Apalachee Pkwy.\nTallahassee, FL 32301\n(850) 688-1002",
                    //     link: "tel:8506881002",
                    //     badges: [
                    //         { title: "Coming soon", size: "sm", variant: "primary" }
                    //     ],
                    //     buttonText: "Call now"
                    // },
                    {
                        title: "Wesley Chapel",
                        desc: "6001 Wesley Grove Blvd. \nWesley Chapel, FL 33544\n(813) 761-1241",
                        link: "https://kiosk.rhapsody.vet/?businessId=L1J8peOa&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1609_Wesley Chapel",
                            store_state_zip_city: "FL_33544_Wesley Chapel",
                        }
                    },
                    //   {
                    //   title: "West Kendall",
                    //   desc: "16514 SW 88th Street\nMiami, FL 33196\n(786) 761-7523",
                    //   link: "https://kiosk.rhapsody.vet/?businessId=PEwQ0pVb&embed=true&language=en-US",
                    // badges: [
                    //     { title: "Coming soon", size: "sm", variant: "primary" }
                    // ],
                    //  buttonText: "Book now",
                    // dataLayerParams:
                    //    {
                    //        event: "content_clicked",
                    //        content_type: "button",
                    //       content_location: "petsmart-veterinary-services.html",
                    //       content_label: "Book Now",
                    //       store_id_name: "1526_West Kendall",
                    //      store_state_zip_city: "FL_33196_Miami",
                    //  }
                    //     },
                ]
            },
            // GEORGIA
            {
                title: "Georgia",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    // {
                    //     title: "Alpharetta",
                    //     desc: "6370 North Point Pkwy. \nAlpharetta, GA 30022\n(770) 759-0692",
                    //     // link: "tel:7703438511",
                    //     link: "https://kiosk.rhapsody.vet/?businessId=2Obn2BO4&embed=true&language=en-US",
                    //     // badges: [
                    //     //     { title: "Coming soon", size: "sm", variant: "primary" }
                    //     // ],
                    //     buttonText: "Book now",
                    //     dataLayerParams:
                    //     {
                    //         event: "content_clicked",
                    //         content_type: "button",
                    //         content_location: "petsmart-veterinary-services.html",
                    //         content_label: "Book Now",
                    //         store_id_name: "0289_Alpharetta",
                    //         store_state_zip_city: "GA_30022_Alpharetta",
                    //     }
                    // },
                    {
                        title: "Smyrna",
                        desc: "2540 Cumberland Blvd. \nSmyrna, GA 30080\n(770) 759-1124",
                        link: "tel:7707591124",
                        link: "https://kiosk.rhapsody.vet/?businessId=JEXlW6E7&embed=true&language=en-US",
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0291_Smyrna",
                            store_state_zip_city: "GA_30080_Smyrna",
                        }
                    },
                    {
                        title: "Warner Robins",
                        desc: "2730 Watson Boulevard \nWarner Robins, GA 31093\n(478) 338-9660",
                        link: "https://kiosk.rhapsody.vet/?businessId=NEvQDk1q&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" },
                        //     // {title:"Urgent care", size:"sm", variant:"primary"},
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1038_N Warner Robins",
                            store_state_zip_city: "A_31093_Warner Robins",
                        }
                    },
                ]
            },
            // ILLINOIS
            {
                title: "Illinois",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    // {
                    //     title: "Chicago (South Loop)",
                    //     desc: "1101 S. Canal Street\nChicago, IL 60607\n(872) 245-9790",
                    //     link: "tel:8722459790",
                    //     badges: [
                    //         { title: "Urgent care", size: "sm", variant: "primary" },
                    //     ],
                    //     buttonText: "Call now",
                    //     dataLayerParams:
                    //     {
                    //         event: "content_clicked",
                    //         content_type: "button",
                    //         content_location: "petsmart-veterinary-services.html",
                    //         content_label: "Call Now",
                    //         store_id_name: "not available_Chicago (South Loop)",
                    //         store_state_zip_city: "IL_60607_Chicago",
                    //     }
                    // },
                    {
                        title: "Northbrook",
                        desc: "291 Skokie Blvd.\nNorthbrook, IL 60062\n(847) 999-6741",
                        link: "tel:8479996741",
                        badges: [
                            { title: "Urgent care", size: "sm", variant: "primary" },
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "0431_Northbrook",
                            store_state_zip_city: "IL_60062_Northbrook",
                        }
                    },
                ]
            },
            // LOUISIANA
            {
                title: "Louisiana",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Houma",
                        desc: "1743 Martin Luther King Jr Blvd,\nHouma, LA, 70360\n(985) 319-2024",
                        link: "https://kiosk.rhapsody.vet/?businessId=JOaGpy1p&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Urgent care", size: "sm", variant: "primary" },
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0431_Houma",
                            store_state_zip_city: "LA_70360_Houma",
                        }
                    },
                ]
            },
            // MARYLAND
            {
                title: "Maryland",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Oxon Hill",
                        desc: "6005 Oxon Hill Rd. \nOxon Hill, MD 20745\n(301) 479-5781",
                        link: "https://kiosk.rhapsody.vet/?businessId=ZOyzwgVR&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "0454_Oxon Hill",
                            store_state_zip_city: "MD_20745_Oxon Hill",
                        }
                    },
                ]
            },
            // MICHIGAN
            {
                title: "Michigan",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Kalamazoo",
                        desc: "5200 W Main St.\nKalamazoo, MI 49009\n(269) 263-2955",
                        link: "https://kiosk.rhapsody.vet/?businessId=QEPKpl1N&embed=true&language=en-US",
                        //  badges: [
                        //      { title: "Coming soon", size: "sm", variant: "primary" }
                        //  ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1431_Kalamazoo",
                            store_state_zip_city: "MI_49009_Kalamazoo",
                        }
                    },
                    {
                        title: "Troy",
                        desc: "734 E Big Beaver Rd.\nTroy, MI 48083\n(947) 225-0071",
                        link: "https://kiosk.rhapsody.vet/?businessId=2ObnpeO4&language=en-US",
                        //  badges: [
                        //      { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1637_Troy",
                            store_state_zip_city: "MI_48083_Troy",
                        }
                    }]
            },
            // NEVADA
            {
                title: "Nevada",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Carson City",
                        desc: "250 Fairview Drive\nCarson City, NV 89701\n(775) 362-1820",
                        link: "tel:7753621820",
                        buttonText: "Call now",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" },
                            //     {title:"Urgent care", size:"sm", variant:"primary"},
                        ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "1113_Carson City",
                            store_state_zip_city: "NV_89701_Carson City",
                        }
                    },
                    {
                        title: "Las Vegas",
                        desc: "5915 S. Eastern Avenue \nLas Vegas, NV 89119\n(725) 238-4481",
                        link: "https://kiosk.rhapsody.vet/?businessId=P1L5XwEA&embed=true&language=en-US",
                        buttonText: "Book now",
                        //  badges: [
                        //          {title:"Coming soon", size:"sm", variant:"primary"},
                        //     //     {title:"Urgent care", size:"sm", variant:"primary"},
                        //      ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1394_Las Vegas",
                            store_state_zip_city: "NV_89119_Las Vegas",
                        }
                    },
                    {
                        title: "N Las Vegas",
                        desc: "1321 W Craig Rd \nN Las Vegas, NV 89032\n(725) 238-6856",
                        link: "https://kiosk.rhapsody.vet/?businessId=LVAKzaEd&embed=true&language=en-US",
                        buttonText: "Book now",
                        // badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        //     //     {title:"Urgent care", size:"sm", variant:"primary"},
                        //  ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1027_N Las Vegas",
                            store_state_zip_city: "NV_89032_N Las Vegas",
                        }
                    },
                    {
                        title: "W Las Vegas (Ft Apache)",
                        desc: "5160 S Fort Apache Rd\nLas Vegas, NV 89148\n(725) 238-6870",
                        link: "https://kiosk.rhapsody.vet/?businessId=W12k8JEA&embed=true&language=en-US",
                        buttonText: "Book now",
                        // badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        // //     {title:"Urgent care", size:"sm", variant:"primary"},
                        // ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1153_W Las Vegas (Ft Apache)",
                            store_state_zip_city: "NV_89148_Las Vegas",
                        }
                    },
                    {
                        title: "W Las Vegas (S Decatur)",
                        desc: "1261 S Decatur Blvd \nLas Vegas, NV 89102\n(702) 870-8200",
                        link: "tel:7028708200",
                        buttonText: "Call now",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" },
                            //     {title:"Urgent care", size:"sm", variant:"primary"},
                        ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "0152_W Las Vegas (S Decatur)",
                            store_state_zip_city: "NV_89102_Las Vegas",
                        }
                    },
                ]
            },

            // New York
            {
                title: "New York",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Commack",
                        desc: "2160 Jericho Turnpike \nCommack, NY 11725\n(631) 489-6184",
                        link: "https://kiosk.rhapsody.vet/?businessId=lVqDdwO7&language=en-US",
                        buttonText: "Book now",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" },
                        //     //         {title:"Urgent care", size:"sm", variant:"primary"},
                        // ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1705_Commack",
                            store_state_zip_city: "NY_11725_New York",
                        }
                    },
                ]
            },

            // NORTH CAROLINA
            {
                title: "North Carolina",
                variant: "1-2-4up", // Grid variant
                tileSections: [

                    {
                        title: "Southern Pines",
                        desc: "11088 N US Hwy 15 501 Ste 600\nAberdeen, NC 28315\n(910) 631-0225",
                        link: "https://kiosk.rhapsody.vet/?businessId=QOGe7B15&embed=true&language=en-US",
                        buttonText: "Book now",
                        // badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        // //     {title:"Urgent care", size:"sm", variant:"primary"},
                        // ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "1392_Southern Pines",
                            store_state_zip_city: "NC_28315_Aberdeen",
                        }
                    },

                ]
            },
            // PENNSYLVANIA
            {
                title: "Pennsylvania",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Collegeville",
                        desc: "300 Water Loop Drive\nCollegeville, PA 19426\n(484) 289-5401",
                        link: "https://kiosk.rhapsody.vet/?businessId=lV0o2pO0&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" },
                        //     // {title:"Urgent care", size:"sm", variant:"primary"}
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1934_Collegeville",
                            store_state_zip_city: "PA_19426_Collegeville",
                        }
                    },
                    {
                        title: "S Springfield",
                        desc: "641 Baltimore Pike,\nSpringfield, PA, 19064\n(484) 285-8631",
                        link: "https://kiosk.rhapsody.vet/?businessId=nE6eD21g&language=en-US",
                        buttonText: "Book now",
                        // badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        // //     {title:"Urgent care", size:"sm", variant:"primary"},
                        //  ],
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "3051_S Springfield",
                            store_state_zip_city: "PA_19064_Springfield",
                        }
                    },
                ]
                // {
                //     title: "Pottstown",
                //     desc: "1112 Town Square Road\nPottstown, PA 19465\n(484) 289-0102",
                //     link: "https://kiosk.rhapsody.vet/?businessId=ZEdXl7E6&embed=true&language=en-US",
                //     buttonText: "Book now",
                //     dataLayerParams:
                //     {
                //         event: "content_clicked",
                //         content_type: "button",
                //         content_location: "petsmart-veterinary-services.html",
                //         content_label: "Book Now",
                //         store_id_name: "1481_Pottstown",
                //         store_state_zip_city: "PA_19465_Pottstown",
                //     }
                // },
                // {
                //     title: "Willow Grove",
                //     desc: "3995 Welsh Rd. \nWillow Grove, PA 19090\n(267) 669-1690",
                //     link: "tel:2676691690",
                //     badges: [
                //         { title: "Coming soon", size: "sm", variant: "primary" }
                //     ],
                //     buttonText: "Call now",
                //     dataLayerParams:
                //     {
                //         event: "content_clicked",
                //         content_type: "button",
                //         content_location: "petsmart-veterinary-services.html",
                //         content_label: "Call Now",
                //         store_id_name: "not available_Willow Grove",
                //         store_state_zip_city: "PA_19090_Willow Grove",
                //     }
                // },
            },
            // PUERTO RICO
            {
                title: "Puerto Rico",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Mayaguez",
                        desc: "252 Calle Dr Ramon E Betances,\nMayaguez, PR, 00680\n(787) 936-3301",
                        link: "tel:7879363301",
                        badges: [
                              {title:"Coming soon", size:"sm", variant:"primary"},
                            //     {title:"Urgent care", size:"sm", variant:"pssssrimary"},
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "2354_Mayaguez",
                            store_state_zip_city: "PR_00680_Mayaguez",
                        }

                    },
                    {
                        title: "Ponce",
                        desc: "2643 Ponce Bypass\nSte. 148\nPonce, PR 00728\n(787) 936-3285",
                        link: "tel:7879363285",
                        badges: [
                            //    { title: "Coming soon", size: "sm", variant: "primary" },
                            //     {title:"Urgent care", size:"sm", variant:"primary"},
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call now",
                            store_id_name: "2308_Ponce",
                            store_state_zip_city: "PR_00728_Ponce",
                        }

                    },
                ]
            },
            // TEXAS
            {
                title: "Texas",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Georgetown",
                        desc: "1013 W University Ave Bldg B \nGeorgetown, TX 78628\n(737) 284-2040",
                        link: "https://kiosk.rhapsody.vet/?businessId=m1K0GWEZ&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1243_Georgetown",
                            store_state_zip_city: "TX_78628_Georgetown",
                        }
                    },
                    {
                        title: "N Round Rock",
                        desc: "201 University Oaks Blvd. \nRound Rock, TX 78665\n(737) 284-2161",
                        link: "tel:7372842161",
                        badges: [
                            { title: "Coming soon", size: "sm", variant: "primary" }
                        ],
                        buttonText: "Call now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Call Now",
                            store_id_name: "1772_N Round Rock",
                            store_state_zip_city: "TX_78665_Round Rock",
                        }
                    },
                    {
                        title: "Westheimer (Dunvale)",
                        desc: "8380 Westheimer Rd. \nHouston, TX 77063\n(346) 385-5010",
                        link: "https://kiosk.rhapsody.vet/?businessId=bVnNprVd&embed=true&language=en-US",
                        // badges: [
                        //     { title: "Coming soon", size: "sm", variant: "primary" }
                        // ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1611_Westheimer (Dunvale)",
                            store_state_zip_city: "TX_77063_Houston",
                        }
                    },
                ]
            },
            // WISCONSIN
            {
                title: "Wisconsin",
                variant: "1-2-4up", // Grid variant
                tileSections: [
                    {
                        title: "Wausau",
                        desc: "226641 Rib Mountain Dr\nWausau, WI 54401\n(715) 390-4070",
                        link: "https://kiosk.rhapsody.vet/?businessId=wO7BbLEN&embed=true&language=en-US",
                        //  badges: [
                        //      {title:"Coming soon", size:"sm", variant:"primary"},
                        // //     {title:"Urgent care", size:"sm", variant:"primary"},
                        //  ],
                        buttonText: "Book now",
                        dataLayerParams:
                        {
                            event: "content_clicked",
                            content_type: "button",
                            content_location: "petsmart-veterinary-services.html",
                            content_label: "Book Now",
                            store_id_name: "1415_Wisconsin",
                            store_state_zip_city: "WI_54401_Wausau",
                        }

                    },
                ]
            },
        ],

    },

    {
        containerName: "elementContainer",
        title: "",
        desc: "",
        textAlign: "",
        showAllLink: "",
        showAllText: "",
        description: "We're putting veterinary doctors back in charge. Learn more about owning your practice ",
        linkText: "here",
        htmlElement: `<div>We're putting veterinary doctors back in charge. Learn more about owning your practice <a id="button" href="#" >here</a></div>`,
        href: "/veterinary-ownership.html",
        dataLayerParams:
        {
            event: "content_clicked",
            content_type: "Vet Info: Link",
            content_location: "petsmart-veterinary-services.html",
            content_label: "Vet Practice Info : here"
        }


    },
];


export default data_container;