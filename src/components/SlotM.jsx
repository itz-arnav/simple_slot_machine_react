import React from "react";
import validate from "./validate";

function SlotM(props){

      let obj = props.gen();
      let message = validate(obj);

      return (
            <>
            <h2 className="emojis">{obj.x} , {obj.y} , {obj.z}</h2>
            <h2 className="text_msg">{message}</h2>
            </>
      );
}

export default SlotM;