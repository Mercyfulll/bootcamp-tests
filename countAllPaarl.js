function countAllPaarl(regNumbers){
	var regNumber = regNumbers.split(",");
  
  	var regNumArray = [];
  	for(var i = 0; i < regNumber.length; i++){
      var regNum = regNumber[i].trim(); 
      
       if(regNum.startsWith("CJ")){
    	regNumArray.push(regNum);
    }
  }
		return regNumArray.length;
}