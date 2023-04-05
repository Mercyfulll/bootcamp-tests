function findItemsOver(itemList, threshold){
    var result = []
  for(var i = 0; i < itemList.length;i++){
      if(itemList[i].qty > threshold){
        result.push(itemList[i])
      }
  }	
return result; 
}

function findItemsOver(itemList2, threshold){
    var result2 = []
  for(var i = 0; i < itemList2.length;i++){
      if(itemList2[i].qty > threshold){
        result2.push(itemList2[i])
      }
  }	
return result2; 
}

function findItemsOver(itemList3, threshold){
    var result3 = []
  for(var i = 0; i < itemList3.length;i++){
      if(itemList3[i].qty > threshold){
        result3.push(itemList3[i])
      }
  }	
return result3; 
}