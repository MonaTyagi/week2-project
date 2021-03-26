import React, { useState } from "react";

export default function LikeCounter() {
  const [likes, setLikes] = useState(0);
  console.log(likes);
  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>👍</button>
      <button> {likes} </button>
      <button onClick={() => setLikes(likes - 1)}>👎</button>
    </div>
  );
}
