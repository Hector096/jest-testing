 const stringCount = (string)=>{
     if(string.split("").length>1 && string.split("").length<10){
    return string.split("").length}else{
        return 'Character length invalid: it should be more than 1 and less than 10'
    }
  }

  
  module.exports = stringCount
 

