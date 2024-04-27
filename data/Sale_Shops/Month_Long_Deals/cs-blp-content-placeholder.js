// DPT-3950 - Jan. '23  Planner - Sale Shop Updates - lu: 12.21.2022.LJ
// Live: 12/27 - 01/30
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    { // HERO BANNER
        containerName: "heroBanner",
        title: "",
        description: "",
        isInverted: true,
        backgroundColor: "",
        alt: "March savings on now thru 4/3",
        imageInfo: {
            url: imagelink("WEB-23-1686551-CA_MarchMLShop_HEADER_688x640_MO"),
        },
        desktop: {
            imageInfo: {
                url: imagelink("WEB-23-1686551-CA_MarchMLShop_HEADER_1240x256_DT"),
            },
        }
    },
    {
        // Deals by pet
        containerName: "CategoryRow",
        title: "Deals by pet",
        shouldCallApi: false,
        tileSections: [
            {
                imgContent: imagelink("WEB-23-1686551-CA_MarchMLShop_CATEGORY1_360x360_DT"),
                alt: "Dog image",
                title: "Dog deals",
                link: "/featured-shops/month-long-deals-with-treats-membership/dog/?origin=MLshop&desc=dogdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-23-1686551-CA_MarchMLShop_CATEGORY2_360x360_DT"),
                alt: "Cat image",
                title: "Cat deals",
                link: "/featured-shops/month-long-deals-with-treats-membership/cat/?origin=MLshop&desc=catdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-23-1686551-CA_MarchMLShop_CATEGORY3_360x360_DT"),
                alt: "Fish image",
                title: "Fish deals",
                link: "/featured-shops/month-long-deals-with-treats-membership/fish/?origin=MLshop&desc=fishdeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-23-1686551-CA_MarchMLShop_CATEGORY4_360x360_DT"),
                alt: "Bird image",
                title: "Bird deals",
                link: "/featured-shops/month-long-deals-with-treats-membership/bird/?origin=MLshop&desc=birddeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-23-1686551-CA_MarchMLShop_CATEGORY5_360x360_DT"),
                alt: "Reptile image",
                title: "Reptile deals",
                link: "/featured-shops/month-long-deals-with-treats-membership/reptile/?origin=MLshop&desc=reptiledeals&type=visnav"
            },
            {
                imgContent: imagelink("WEB-23-1686551-CA_MarchMLShop_CATEGORY6_360x360_DT"),
                alt: "Small pet image",
                title: "Small pet deals",
                link: "/featured-shops/month-long-deals-with-treats-membership/small-pet/?origin=MLshop&desc=reptiledeals&type=visnav"
            },
        ],
    },
]
export default dataContainer;