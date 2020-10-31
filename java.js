
//       Задача 1

const users = [1,2,3,4,5,6,7];
const someFunc_1 = (number) => {
if (!Array.isArray(number)) return;
return number.map(x =>x*2)
}
console.log(someFunc_1(users));

//       Задача 2

const users2 = [1.3,2,3,4,5,6,7,9];
const someFunc_2 = (number) => {
 if (!Array.isArray(number)) return;
 return number.map ((x,y,z) =>{
   (y==0 || y== users.length-1) ? x=x**2 : x=x+1;
return x
  })
}
console.log(someFunc_2(users2));

//       Задача 3 

const str = [`hello`,`kek`,`avs`,`wold`,`i love javascript`];
const someFunc_3 = (string) => {
 if (!Array.isArray(string)) return;
  return string.filter((x,y,z) =>{
     if (x.length>3){
return x ;}
  })
}
  console.log(someFunc_3(str));

  //       Задача 4

  const users3 = [1,2,3,4,5];
  const someFunc_4 = ( numbersArray ) => {
    let result = 0 
    if (!Array.isArray( numbersArray )) return;
    numbersArray.forEach((number, index) => { 
    return  result += number ;
    });
    return result  
  }
  console.log(someFunc_4(users3));


  const users4 = [1,2,3,4,5,6,7];
  const someFunc_5 = (number) => {
    if (!Array.isArray(number)) return;
    return number.reduce((summ,current) => {
return summ+current;},0)}
console.log(someFunc_5(users4));
 
  //       Задача 5

  const users5 = [1,2,null,`hello`,5,undefined];
  const someFunc_6 = (users) => {
    if (!Array.isArray(users)) return;
    return users.map((item,index) => {
     if (typeof item == `number` ) {
        item = item*2;
     return item; }
    else if  ( typeof item == `string`) {
        item= item.toUpperCase();
      return  item};
    }).filter((item,index) => {
      if (typeof item == `number` || typeof item == `string`)
      return item
      });     
};
console.log(someFunc_6(users5));

jggjjffj jfjfjfjffjfjfjkkkkkkkkkkk
hgggggggggggggggggkdkddk