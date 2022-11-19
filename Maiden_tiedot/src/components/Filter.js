import React from "react";

function Filter({ value, changeHandler }) {
  return (
    <div>
      Search: <input value={value} onChange={changeHandler} />
    </div>
  );
}

export default Filter