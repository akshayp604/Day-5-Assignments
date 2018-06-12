
//wap to add data at desire location in array with any inbuild function.
var val = 9;
var loc=6;

var arr =[20,45,63,85,74,13];
console.log("Before insert");
console.log(arr);

for(var i=0; i>=loc; i++ )
 {
	arr[i+1] =arr[i];
}
arr[loc]=val;
console.log("After Insert");
console.log(arr);


//wap to Delete data in array with any inbuild function.

var val = 9;
var loc;

var arr =[20,45,63,85,74,13];
console.log("Before insert");
console.log(arr);

for(var i=0; i<=4; i++)
 

console.log(arr[i]);


//wap to reverse data in array with any inbuild function.

var val = 9;
var loc;

var arr =[20,45,63,85,74,13];
console.log("Before insert");
console.log(arr);

for(var i=5; i>=0; i--)
 

console.log(arr[i]);


//wap to Sort data in array with any inbuild function.
var arr =[20,45,63,85,74,13];
console.log("Before sort");
console.log(arr);
for (var i = 1; i < arr.length; i++)
    for (var j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
          var x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
console.log("After sort");
console.log(arr);