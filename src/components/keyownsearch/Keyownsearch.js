import React from "react";
import TransferList from "../../hooks/pickList/TransferList";
import TransferlistWithAll from "../../hooks/pickList/TransferlistWithAll";

export default function Keyownsearch() {
  const leftData = ["Ashutosh","Mohit","2Mano","Manohar"];
  const rightData = ["Chandra","Bad boy"];

  return (
    <div>
      <TransferList
        rightData={rightData}
        leftData={leftData}   
      /> 
      <br/>
        <TransferlistWithAll
        rightData={rightData}
        leftData={leftData}   
      />     
    </div>
  );
}


