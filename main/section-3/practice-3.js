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
function countSameElemnts(collection){
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
    let collectionACount=countSameElemnts(collectionA);
    return updateCollection(collectionACount,objectB)
}