'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(let obj of collectionA){
        for(let item of objectB.value){
            if(obj.key===item){
                obj.count -= Math.floor(obj.count / 3);
            }
        }
    }
    return collectionA;
}
