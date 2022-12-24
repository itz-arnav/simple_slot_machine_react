import React from "react";

function SlotM(props){
      props.generate();
      return (
            <>
            <h2 className="emojis">{props.obj.x} {props.obj.y} {props.obj.z}</h2>
            </>
      );
}

export default SlotM;