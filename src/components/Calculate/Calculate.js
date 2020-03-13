import React from "react";

const Calculate = (props) => {
  return (
    <div>
      <h4>Added to follow : {props.celibrity.length} </h4>
      <h5>
        Celibrity Points (5 Multiplied with ID value) :{props.celibrity.reduce((total, celib) => total + celib.id*5, 0)}
      </h5>
      
    </div>
    
  );
};

export default Calculate;
