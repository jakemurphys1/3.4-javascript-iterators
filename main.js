

//Use the reduce function to reduce the object's prices to just one value. Then log it to the console.
var totalprice = items.reduce(function(total, current){
  return {price: (total.price+current.price)};
})
console.log("The average price is " + totalprice.price/items.length);

//declare an array to contain all the titles of the items that costs between 14 and 18.
var cheapones = [];

//use a forEach to go through each object in the item array and add the objects that cost between 14 and 18.
items.forEach(function(value, index,array){
  if(array[index].price<=18 && array[index].price>=14){
    cheapones.push(array[index])
  }
});
//log the array cheapones.
console.log(cheapones);

//declare a variable to contain the title of the item that has currency_code GBP.
//There is only one, so I used a variable instead of an array.
var answercur;

//use a forEach to go through each object of the item array to check if it's currency_code is "GBP".
// If it is, it defines the answercur as that item's title.
items.forEach(function(value, index,array){
    if(array[index].currency_code=="GBP"){
      answercur= array[index].title + " Costs: " + array[index].price;
    }
  })
console.log(answercur)

//declare an array to contain the titles of all the objects that contain wood in it's materials
var woodones = [];


//Used a foreach to look through each object in the array for ones that have "wood" listed as one of the materials.
items.forEach(function(value, index,array){
  var havewood=false
  //use another foreach to determine if the current index's material has wood in it
  array[index].materials.forEach(function(value, index,array){
    if(array[index]=="wood"){
      havewood=true;
    }
  })
  //add the title of current index if the above test proved true.
  if(havewood==true){
    woodones.push(array[index].title)
  }
});
//log woodones which contains all the titles of the objects that use wood
console.log(woodones);



//This is the material one I did with forEach. Below is the filter one instead.
// var lotsofmaterials = [];
//
// items.forEach(function(value, index,array){
//   if(array[index].materials.length>=8){
//     lotsofmaterials.push(array[index].title)
//     array[index].materials.forEach(function(value, index,array){
//       lotsofmaterials.push(array[index])
//     })
//   }
// });
// console.log(lotsofmaterials);


//Below uses the filter method to eliminate all the objects in the item array that use 7 or less materials
var lotsofmaterials = items.filter(function(value,index, array){
  return array[index].materials.length>=8;
});
//log the objects that use 8 or more materials.
console.log(lotsofmaterials);




//declare a number variable that starts with 0.
var selfmade = 0;

//use a foreach that will increment selfmade variable if
items.forEach(function(value, index,array){
  if(array[index].who_made=="i_did"){
    selfmade+=1;
  }
});
console.log(selfmade + " were made by their sellers");
