'use strict';
function findKeyInArr(key,arr) {
  let obj;
    for(let item of arr){
      if(item.key===key){
        obj=item;
      }
    }
    return obj;
}
module.exports=function countSameElements(collection) {
  let result=[];
  for(let item of collection){
    let obj=findKeyInArr(item,result);
    if(obj){
        obj.count++;

    }else{
        result.push({key:item,count:1});
    }
  }
  return result;
}
