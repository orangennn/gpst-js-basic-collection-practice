'use strict';


function findKeyInArr(key,arr) {
    let obj;
    for(let item of arr){
        if(item.name===key){
            obj=item;
        }
    }
    return obj;
}
function handleStr(str) {
    let data={};
    data.key=str[0];
    if(str.length ==1){
        data.num=1;
    }else{
       let startIndex=2
       let endIndex=str.length;
       if(str.indexOf('[')>=0 && str.indexOf(']')>=0){
         startIndex=str.indexOf('[')+1;
         endIndex=str.indexOf(']');
       }
       data.num=parseInt(str.substring(startIndex,endIndex));
    }
    return data;
}

module.exports=function countSameElements(collection) {
    let result=[];
    for(let item of collection){
        let data=handleStr(item);
        let obj=findKeyInArr(data.key,result);
        if(obj){
            obj.summary+=data.num;

        }else{
            result.push({name:data.key,summary:data.num});
        }
    }
    return result;
}