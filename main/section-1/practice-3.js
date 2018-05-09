'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result=[];
    for(let itemA of collectionA
        ){
        for(let itemB of objectB.value){
            if (itemA==itemB) result.push(itemA);
        }
    }
    return result;
}
