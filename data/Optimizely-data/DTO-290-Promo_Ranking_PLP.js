//Variation 1

var utils = window.optimizely.get('utils');
var $ = window.jQuery;

//$.fn.verifyValue = function(value) {
// return $(this).is('[data-campaign-rank~=' + content + ']'); 
//};

$(document).ready(function () {
  let parent = document.getElementById("search-result-items");
  if(parent){
   HideRanking(parent);
  }
});

$(document).on( "ajaxComplete", function(event, xhr, settings) {
  let parent = document.getElementById("search-result-items");
  if(parent){
   HideRanking(parent);
  }
 });

function verifyValue(element, val) {
  let x = element.getAttribute("data-campaign-rank"); 
  return x.includes(val);
}

//utils.waitForElement('#search-result-items').then(
function HideRanking () {
  let parent = document.getElementById("search-result-items");
	let allRankParentList = parent.getElementsByClassName("product-promo");
	//console.log("TEST0", allRankParentList.length);
  for(let rankList = 0; rankList < allRankParentList.length; rankList++){
    let productRankList = allRankParentList[rankList].children;
    //console.log("TEST1", rankList, rankList < allRankParentList.length);
    for(let promoRank = 0; promoRank < productRankList.length; promoRank++){
      //console.log("TEST2", promoRank, promoRank < productRankList.length);
    	if(!verifyValue(productRankList[promoRank],"20") && !verifyValue(productRankList[promoRank],"10")){
        //console.log("TEST NO 10 or 20", promoRank);
      	productRankList[promoRank].setAttribute("style","display: none;");
      }
      else if(verifyValue(productRankList[promoRank],"10")){
        //console.log("TEST3",productRankList[promoRank].innerHTML);
        //console.log("TEST4",productRankList[promoRank].parentElement.parentElement.getElementsByClassName("product-name")[0].innerText);
        //console.log("TEST5",productRankList[promoRank].nextElementSibling.attributes[0].value);
        if(productRankList[promoRank].nextElementSibling){
        	productRankList[promoRank].nextElementSibling.setAttribute("style","display: none;");
        }
        break;
      }
    }
  }
}
//);


// Variation 2

var utils = window.optimizely.get('utils');
var $ = window.jQuery;

//$.fn.verifyValue = function(value) {
// return $(this).is('[data-campaign-rank~=' + content + ']'); 
//};

$(document).ready(function () {
  let parent = document.getElementById("search-result-items");
  if(parent){
   HideRanking(parent);
  }
});

$(document).on( "ajaxComplete", function(event, xhr, settings) {
  let parent = document.getElementById("search-result-items");
  if(parent){
   HideRanking(parent);
  }
 });

function verifyValue(element, val) {
  let x = element.getAttribute("data-campaign-rank"); 
  return x.includes(val);
}

//utils.waitForElement('#search-result-items').then(
function HideRanking (parent) {
	let allRankParentList = parent.getElementsByClassName("product-promo");
	//console.log("TEST", allRankParentList);
  for(let rankList = 0; rankList < allRankParentList.length; rankList++){
    let productRankList = allRankParentList[rankList].children;
    //console.log("TEST1", productRankList);
    for(let promoRank = 1; promoRank < productRankList.length; promoRank++){
      	productRankList[promoRank].setAttribute("style","display: none;");
    }
  }
}
//);