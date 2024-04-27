// DPT-4850 September Sale - 08.14 - cont - lu: 04.12.2023-SU

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}

let imagelinkPreset = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}?$HP3101$` //use when intrinsic sizes from scene 7 are original/large resolutions i.e. 2000x2000, etc
}

// If we have to use gif instead of images
let contentlink = (sku) => {
    return `https://s7d2.scene7.com/is/content/PetSmart/${sku}`
}


let data_container = [
    {
        containerName: "CategoryRow",
        title: "Dog deals",
        // tileVariant: "promo",
        shopLink: "/sale/september/dog-sale/",
        displaySettings: { desktop: 4, tablet: 4, mobile: 2.5 },
        variant:"sm",
        tileSections: [
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP1_Sale-LP-Dog_DMA"),
                alt: "Dog chewing on toy",
                title: "Toy deals",
                link: "/sale/september/dog-sale/toys/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP2_Sale-LP-Dog_DMA"),
                alt: "Dog eating from bowl",
                title: "Food deals",
                link: "/sale/september/dog-sale/food/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP3_Sale-LP-Dog_DMA"),
                alt: "Dog being fed treat ",
                title: "Treat deals",
                link: "/sale/september/dog-sale/treats/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP4_Sale-LP-Dog_DMA"),
                alt: "Dog chewing blanket",
                title: "Cleaning & potty deals",
                link: "/sale/september/dog-sale/cleaning-and-potty/"
            },
        ],
    },
    {
        containerName: "CategoryRow",
        title: "Cat deals",
        // tileVariant: "promo",
        shopLink: "/sale/september/cat-sale/",
        displaySettings: { desktop: 4, tablet: 4, mobile: 2.5 },
        variant:"sm",
        tileSections: [
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP1_Sale-LP-Cat_DMA"),
                alt: "Cat with feather toy",
                title: "Toy deals",
                link: "/sale/september/cat-sale/toys/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP2_Sale-LP-Cat_DMA"),
                alt: "Cat eating from bowl",
                title: "Food deals",
                link: "/sale/september/cat-sale/food/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP3_Sale-LP-Cat_DMA"),
                alt: "Cat being fed treat",
                title: "Treat deals",
                link: "/sale/september/cat-sale/treats/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP4_Sale-LP-Cat_DMA"),
                alt: "Cat behind litter box",
                title: "Litter deals",
                link: "/sale/september/cat-sale/litter-and-litter-boxes/litter/"
            },
        ],
    },
    {
        containerName: "CategoryRow",
        title: "Fish deals",
        // tileVariant: "promo",
        shopLink: "/sale/september/fish-sale/",
        displaySettings: { desktop: 3, tablet: 3, mobile: 2.5 },
        variant:"sm",
        tileSections: [
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP1_Sale-LP-Fish_DMA"),
                alt: "Aquarium ensemble",
                title: "Tank & stands deals",
                link: "/sale/september/fish-sale/tanks-and-stands/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP2_Sale-LP-Fish_DMA"),
                alt: "Goldfish swimming",
                title: "Décor deals",
                link: "/sale/september/fish-sale/decor/"
            },
            {
                imgContent: imagelink("WEB-1852077-Jul23_6TUP3_Sale-LP-Fish_DMA"),
                alt: "Aquatic tank",
                title: "Filters & pumps deals",
                link: "/sale/september/fish-sale/filters-and-pumps/"
            },
            // {
            //     imgContent: imagelink("WEB-1852077-Jul23_6TUP4_Sale-LP-Fish_DMA"),
            //     alt: "Hand sprinkling fish flakes",
            //     title: "Food & care deals",
            //     link: "/sale/august/fish-sale/food-and-care/"
            // },
        ],
    },
]

export default data_container;