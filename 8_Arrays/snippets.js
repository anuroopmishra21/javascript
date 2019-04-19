//Part-1 Basics of Arrays
const arr1=[1,2,3]; //array with numbers only
const arr2=["one",2,"three"];// nonhomogeneous array with numbers and strings
const arr3=[[1,5,7],["one", "two", 3]]; //array with arrays as elements
const arr4=[{ name:"Fred" , type:"object" , luckynumbers:[5,7,13]},[{ name:"Susan" , type:"object"} , {name:"Anthony" , type:"object"}],1,function(){ return "arrays can return functions too";},"three"]; //a non homogeneous array with objects, numbers, strings, arrays with objects and functions as elements
//now we can access the elements
arr1[1]; //will give you 2
arr2[0]; // will give "one"
arr3[1][2]; // will give "two"
arr4[0]; //will give {name:"Fred".....}
arr4[0]["luckynumbers"][0]; //this will go inside {name:"Fred".....}, find the object named luckynumbers and give the value at its 0 position i.e.,5
arr4[9]; //will give undefined as there is no value assigned to the index 9 of arr4
//.length function can be used to find the length of a given array
arr4.length; //5
arr1.length; //3
arr4[1].length; //2
//incresing array size
arr1[4]=5; //this will assign 5 at 4th index of the arr1 so now arr1=[1,2,3, undefined, 5]
arr1.length; //5
//push and pop and unshift and shift
const arr=[2,3,4,5];
arr.push(6); // this adds a '6' at the end of the array arr and returns the new length of arr i.e, 5
//arr=[2,3,4,5,6]
arr.unshift(1); //this adds a '1' at the begining of the array arr and returns the new length of arr i.e., 6
//arr=[1,2,3,4,5,6]
arr.pop(); //this removes the elemnet at the last index of the array arr and returns its value i.e, 6
//arr=[1,2,3,4,5]
arr.shift(); //this removes the element at the begining of the array arr and returns its value i.e., 1
//arr=[2,3,4,5]
//array concat-to add mutiple values at the end
const arr=[1,2,3]; //assigns new values to arr
arr.concat(4,5,6); //returns [1,2,3,4,5,6];but arr remains unmodified
arr.concat([4,5,6]); //returns [1,2,3,4,5,6];but arr remains unmodified
arr.concat(4,[5,6]); //returns [1,2,3,4,5,6];but arr remains unmodified
arr.concat([4,[5,6]]) //returns [1,2,3,4,[5,6]];but arr remains unmodified
// getting a subarray
const arr=[1,2,3,4,5];
arr.slice(3); //gives a subarray form arr starting after 3rd index to the end but arr remains unmodified
//[4,5]
arr.slice(2,4) // gives all the element from the firt index till the index specified after the comma
//[3,4]
arr.slice(-2) //gives the two elements from the back of the array
//[4,5]
arr.slice(1,-2) //gives element from the index 1 to (last index - 2 )
//[2,3]
arr.slice(-2,-1) //all the elemnets after (last index - 2) till (last index -1)
//[4]
// adding or removing elements at any position using splice
const arr=[1,5,7];
arr.splice(1,0,2,3,4); //the first parameter give the index form which adding or removing has to start, the second gives the number of elements that has to be removed from that index whaich can be 0 if we don't want to remove any element and after that we write the elements that we have to add
//[1,2,3,4,5,7]
arr.splice(5,0,6); //this specifies that at '5'th index remove '0' element(s) and then add 6
//[1,2,3,4,5,6,7]
arr.splice(1,2); //this will remove 2 elements starting from 1st index
//[1,4,5,6,7]
arr.splice(2,1,'a','b'); //this will remove the element at 2 and add 'a' and 'b'
//[1,4,'a','b',6,7]
//cutting and replacing within an array
// using copyWithin argument takes one part or an array and copies is to another replacing the pre-existing elements at that place
//the first argument states the position of where to copy, the second gives where to start copying from and the last one gives where to end
const arr=[1,2,3,4];
arr.copyWithin(1,2); //this tells to copy everything from index 2 onwards to index 1
//[1,3,4,4]
arr.copyWithin(2,0,2); //this copies from index 0 to 2 to index 2
//[1,3,1,3]
arr.copyWithin(0,-3,-1); //this copies from the (last index - 3) to (last index - 1) to index 0
//[3,1,1,3]
