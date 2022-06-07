import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function Addcolor() {
  //  const color = "skyblue";
  const [color, setColor] = useState("skyblue");
  // const colorList=["orange","yellow","red"];
  const [colorList, setColorList] = useState(["orange", "yellow", "red"]);


  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color} />
        <button onClick={() => setColorList([...colorList, color])}
        >
          AddColor
        </button>
      </div>


      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox />
            <ColorBox /> */}
    </div>
  );
}
