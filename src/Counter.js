import { useState } from "react";

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  return (
    <div>
      <button className="btn-like" onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button className="btn-dislike" onClick={() => setdisLike(disLike + 1)}>👎 {disLike}</button>

      {/* <P>{like}</p>
            <p>{like}</p>
            <p>{dislike}</p>
            <p>{dislike}</p> */}
    </div>
  );
}
