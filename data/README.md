# Creating Data Structure for Homepage-React app
hp_Content_Slot_2.js has data for both deals by pet and whats new section together.If one is not present we can make that specific block {} and it will not be displayed inthe homepage
All the  data content slots are merged into a single country specific data object
## data structure break up
tileContainer : the contaienr consisiting of section tilte, shopall display and list of tiles
tileSections : consisitng of the list of items to display which can be repititve tiles or tiles and banners combined
desktop : any attribute mentioned under desktop is going to overrride the default attribute value