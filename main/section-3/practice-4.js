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
function handleStr(str) {
    let data={};
    if(str.length >1){
        let elemtentInfo=str.split('-');
        data.key=elemtentInfo[0];
        data.num=parseInt(elemtentInfo[1]);

    }else{
        data.key=str;
        data.num=1;
    }
    return data;
}
function countSameElements(collection) {
    let result=[];
    for(let item of collection){
        let data=handleStr(item);
        let obj=findKeyInArr(data.key,result);
        if(obj){
            obj.count+=data.num;

        }else{
            result.push({key:data.key,count:data.num});
        }
    }
    return result;
}
function updateCollection(collectionA,objectB) {
    for(let obj of collectionA){
        for(let item of objectB.value){
            if(obj.key===item){
                obj.count -= Math.floor(obj.count / 3);
            }
        }
    }
    return collectionA;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionACount=countSameElements(collectionA);
    return updateCollection(collectionACount,objectB)
}