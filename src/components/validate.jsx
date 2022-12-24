
function validate(obj){
      if(obj.x === obj.y && obj.y === obj.z){
            return "You win!!!";
      }
      else{
            return "You Lose";
      }
}

export default validate;
