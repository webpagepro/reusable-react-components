//DPT-4688 Article Copy block - lu: 08.01.2023-JR
let imagelink = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}`
}

let imagelinkPreset = (sku) => {
    return `https://s7d2.scene7.com/is/image/PetSmart/${sku}?$HP3101$` //use when intrinsic sizes from scene 7 are original/large resolutions i.e. 2000x2000, etc
}

let data_container = [
    { //Article Heading w/ paragraph
        containerName: "ArticleCopyBlock",
        title: "How to Manage Your Dog’s Weight",
        paragraphs: ["As pet parents, our tendency is to shower our four-legged friends with treats to show them how much we care about them. There’s nothing inherently wrong with treating your dog with a treat as a reward for good behavior as long as they’re at a healthy weight. However, too much of a good thing can sometimes be detrimental to their overall health and wellbeing. According to the American Animal Hospital Association (AAHA), more than half of all adult dogs seen in Banfield Pet Hospitals across America were overweight in 2019. If you suspect that your pup may be overweight, consider taking them to a vet to determine whether or not their weight is in the healthy range."],
    },
    { // Article orderedlist
        containerName: "ArticleCopyBlock",
        subtitle: "Helping Your Dog Shed the Extra Pounds",
        paragraphs: ["If you’ve noticed your pet gaining some extra weight, your first stop should be a visit to your vet. Ruling out health conditions that could be causing your dog’s weight gain is extremely important. Once your vet has determined that there aren’t any underlying medical issues, you should consult with them about the best weight management strategy for helping your overweight dog get back to a healthy size., sed diam nonumy eirmod tempor invidunt ut labore et dolore..."],
        // {
        //     size: "md", // 14px
        //     paragraphs: ["lorem impsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."],
        // },
        // {
        //     size: "lg", // 16px
        //     paragraphs: ["lorem impsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."],
        // },,
        orderedList: [{
            title: "Physical Exercise",
            paragraphs: ["Just like in humans, a combination of physical exercise and a change in diet typically brings about the most success when it comes to weight loss in dogs. Since your dog can’t just get up in the morning and drive on over to a doggie gym, the exercise part will largely depend on your commitment to staying involved with their physical activity level. This is a great time to bond, so get out there and have fun with it! If your furry best friend has a hard time getting around, try low-impact exercises like swimming or taking a walk to start out. Fetch is always a favorite activity that can keep your pup engaged for longer amounts of time to increase physical fitness."],
        },
        {
            title: "Doggie Diet",
            paragraphs: ["If your vet has expressed concern over your four-legged friend’s weight, they may recommend that you consider changing your dog’s diet to help control their weight. When it comes to their doggie diet, the answer can be as simple as switching their regular dog food to specialized weight management dog food. Formulated specifically to help your canine companion reach their health goals, this specialized food makes it easy for you to control their diet. You can also trade out their old treats for new low-calorie favorites. Or, simply decrease the amount of treats you give them to help cut down on unnecessary calories throughout the day."],
        },
        {
            title: "Set Boundaries",
            paragraphs: ["Setting boundaries around food can be beneficial to your cuddly canine companion’s weight loss journey as well. First, try a feeding schedule. If their food is not constantly available to your dog, they will be less likely to overeat and snack all day long. Simply put their food bowl out of their reach once they finish a meal, then offer it again when it’s time for another meal. Measuring out portion size and limiting snacks are also effective ways to control your pet’s food intake and help manage their weight.", "Always follow guidelines and treatment plans that have been recommended by your vet. Help your furry friend live their best life by giving them the highest standard of care. By feeding them weight management dog food, making sure they get plenty of exercise, and limiting their intake, you can combat dog obesity and manage your pup’s weight effectively.",],
        }],
        // alt: "Farm and backyard pets",
        // imageInfo: { url: imagelink("WEB-1765201-Apr23_LPB_Farm_MO") },
        // desktop: { imageInfo: { url: imagelink("WEB-1765201-Apr23_LPB_Farm_DT") } },
    },
    // { // Shop by Farm Animal
    //     containerName: "ArticleCopyBlock",
    //     paragraphSections: [
    //         {
    //             size: "sm", // 12px
    //             paragraphs: ["lorem impsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."],
    //         },
    //         {
    //             size: "md", // 14px
    //             paragraphs: ["lorem impsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."],
    //         },
    //         {
    //             size: "lg", // 16px
    //             paragraphs: ["lorem impsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."],
    //         },

    //     ],
    // },
    { // Article unordered list
        containerName: "ArticleCopyBlock",
        // title: "",
        subtitle: "How Your Dog’s Weight Affects Their Health",
        paragraphs: ["It’s no secret that unhealthy weight in humans, whether overweight or underweight, can lead to health concerns. But did you know the same thing can happen to your dog? According to an article published by the American Kennel Club, dog obesity can contribute to health conditions such as:"],
        unorderedList: ["Osteoarthritis", "Orthopedic Problems", "Cranial Cruciate Ligament Injuries", "Skin Disease", "Heart and Respiratory Disease",],
        paragraphs: ["If your dog’s weight gets too out of control, it can even lead to decreased life expectancy. Since our canine companions are part of the family, we want to get as much time as we can with them."],
    },
    { // Article Paragraph
        containerName: "ArticleCopyBlock",
        paragraphs: ["If your dog’s weight gets too out of control, it can even lead to decreased life expectancy. Since our canine companions are part of the family, we want to get as much time as we can with them."],
    }


]

export default data_container;