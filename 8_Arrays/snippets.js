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
