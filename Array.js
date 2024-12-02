let arr=["Fan", "Camera", 34,null, true];
//ARRAY METHOD
console.log(arr.lngth)
 arr.pop(); //detete last ele of array
 arr.push("Alex");
 arr.shift(); //remove fist ele and shift all ele in forward
 console.log(arr)  //add elemeent at last


                      // inizalition of Array
 const cars = []; 
 cars[0]= "Saab";
 cars[1]= "Volvo";
 cars[2]= "BMW";
 let car = cars[0];  // accessing the inidivdual element of array
 

                         //ARRAY ITERATION
 arr.forEach(function(ele,idx){               // forEach mthod return a callback function for each ele once
    console.log( idx+":"+ele);
 })

 // map function
 /*
 map() creates a new array from calling a function for every array element.

 map() does not execute the function for empty elements.

 map() does not change the original array. 
 */
 const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2);
  
                                //Callback function
                                // A callback is a function passed as an argument to another function

                                // This technique allows a function to call another function
                                
                                // A callback function can run after another function has finishe




                                // FILTER METHOD

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);
                       // indexOf

//The indexOf() method returns the first index (position) of a specified value.
console.log(ages.indexOf(32));

                           //isArray();

//The isArray() method returns true if an object is an array, otherwise false.


// Array function
 sum=(a,b)=>{
  return a*b;
 }
 console.log(a,b);
 console.log("hello");
 console.log("hello");
 