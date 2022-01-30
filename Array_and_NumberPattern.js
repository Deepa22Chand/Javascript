// let array = [
//   {
//     name: 'xyz',
//     age: 10
//   },
//    {
//     name: 'ert',
//     age: 4
//   },
//     {
//     name: 'mvm',
//     age: 45
//   },
//    {
//     name: 'rere',
//     age: 56
//   },
// ]


// let arraytwo = [
//   {
//     name: 'fdcd',
//     age: 32
//   },
//    {
//     name: 'ter',
//     age: 1
//   },
//     {
//     name: 'fdfg',
//     age: 3
//   },
//    {
//     name: 'gfdgd',
//     age: 15
//   },
// ]
// console.log(array,arraytwo);
// array =array.concat(arraytwo);

// console.log(array);
// array.sort(function (a,b){
// return a.age - b.age;
// });
// console.log(array);


for (var input = 1; input <= 30; input++) {
 if (input %3 == 0 & input % 15 !=0){
   console.log("Hello");
 }
 else if( input % 5==0 & input % 15 !=0){
   console.log("World");
 }
 else if (input % 15 == 0){
   var text="Hello World";
   console.log(text);
 }
 else 
{ console.log(input);}
}
