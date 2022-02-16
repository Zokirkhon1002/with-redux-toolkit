import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { changeColor } from "../redux/color";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch()


  const handeChangeColor = ()=> {
    dispatch(changeColor(color))
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter a color name..."
        value={color}
        onKeyUp={handeChangeColor}
      />
    </div>
  );
};

export default ChangeColor;
