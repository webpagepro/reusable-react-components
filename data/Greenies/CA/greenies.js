// DPT-4114 - CA Greenies Brand Shop Refresh  - lu: 01.23.2023-JenR

let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}
let dataContainer = [
    { // Top Banner
        containerName: "PromoBanner",
        imgContent: imagelink("CA-WEB_Jan23_Greenies-PSM-BrandPage-BrandHeader_MO"),
        desktop: {
            imgContent: imagelink("CA-WEB_Jan23_Greenies-PSM-BrandPage-BrandHeader_DT"),
        },
        alt: "Greenies Treats Dog and Cat Snuggling",
        isInverted: false,
    },
    {
        containerName: "CategoryRow",
        shouldCallApi: false,
        variant: "sm",
        tileVariant: "promo",
        displaySettings: { desktop: 4, tablet: 4, mobile: 2.5 },
        tileSections: [
            {
                alignText: "center",
                imgContent: imagelink("CA-WEB-6COL-1_Greenies_DentalDogTreats_DT"),
                alt: "Greenies Dental Treats for Dogs",
                title: "Dental Treats for Dogs",
                link: "/featured-brands/greenies/?pmin=0.01&prefn1=customCategory&prefv1=Dental%20Treats&prefn2=customPet&prefv2=Dog&srule=best-sellers?origin=greeniesbrand&type=4tile&desc=dentaldog"
            },
            {
                alignText: "center",
                imgContent: imagelink("CA-WEB-6COL-2_Greenies_DentalCatTreats_DT"),
                alt: "Greenies Dental Treats for Cats",
                title: "Dental Treats for Cats",
                link: "/featured-brands/greenies/?pmin=0.01&prefn1=customCategory&prefv1=Dental%20Treats&prefn2=customPet&prefv2=Cat&srule=best-sellers?origin=greeniesbrand&type=4tile&desc=cattreat",
            },
            {
                alignText: "center",
                imgContent: imagelink("CA-WEB-6COL-3_Greenies_PillPockets_DT"),
                alt: "Greenies Pill Pockets",
                title: "Pill Pockets for Dogs & Cats",
                link: "/featured-brands/greenies/?pmin=0.01&prefn1=customCategory&prefv1=Soft%20Treats%7CVitamins%20%26%20Supplements&srule=best-sellers?origin=greeniesbrand&type=4tile&desc=pillpockets"
            },
            {
                alignText: "center",
                imgContent: imagelink("CA-WEB-6COL-4_Greenies_SmartBites_DT"),
                alt: "Greenies Smart Bites for Cats",
                title: "Smart Bites for Cats",
                link: "/featured-brands/greenies/?pmin=0.01&prefn1=customCategory&prefv1=Crunchy%20Treats&prefn2=customPet&prefv2=Cat&srule=best-sellers?origin=greeniesbrand&type=4tile&desc=smartbites"
            },
        ],
    },
];

export default dataContainer;