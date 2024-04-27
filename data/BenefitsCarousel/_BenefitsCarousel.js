// DPT-5303 - Treats Benefits Carousel - lu: 02.01.2023 - SU


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
        containerName: "benefitsCarousel",
        title: "Members unlock amazing benefits",
        isInverted: false,
        gridItemWrap: "center",
        variant: "2-4up",
        tipSections: [
            {
                imgContent: contentlink("desktop-logged-out-earn-points-svg"),
                alt: "Heart icon",
                title: "Earn & redeem points when you \nshop.",
                // link: "/dog/?origin=home&desc=dog&type=shopbypet"
            },
            {
                imgContent: contentlink("desktop-logged-out-personalized-svg"),
                alt: "Shopping cart icon",
                title: "Enjoy offers personalized for you.",
                // link: "/cat/?origin=home&desc=cat&type=shopbypet"
            },
            {
                imgContent: contentlink("desktop-logged-out-complete-account-svg"),
                alt: "Price tag icon",
                title: "Receive 1,000 points for profile \ncompletion.",
                // link: "/fish/?origin=home&desc=fish&type=shopbypet"
            },
            {
                imgContent: contentlink("desktop-logged-out-status-svg"),
                alt: "Truck icon",
                title: "Get more benefits with Bestie & VIPP status.",
                // link: "/bird/?origin=home&desc=bird&type=shopbypet"
            },

            //ROW TWO

            {
                imgContent: contentlink("Member_MemberOnly-svg"),
                alt: "Truck icon",
                title: "Access members-only in-store \npricing.",
                // link: "/bird/?origin=home&desc=bird&type=shopbypet"
            },
            {
                imgContent: contentlink("desktop-logged-out-free-shipping-svg"),
                alt: "Truck icon",
                title: "FREE Shipping on select orders \n$49+†",
                // link: "/bird/?origin=home&desc=bird&type=shopbypet"
            },
            {
                imgContent: contentlink("desktop-logged-out-birthday-gifts-svg"),
                alt: "Gift icon",
                title: "Feel the love with gifts for your \npets.",
                // link: "/reptile/?origin=home&desc=reptile&type=shopbypet"
            },
        ]
    }
]

export default data_container;