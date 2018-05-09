'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result=[];
  for(let itemA of collectionA){
      for(let itemB of collectionB){
          if (itemA==itemB) result.push(itemA);
      }
  }
  return result;
}