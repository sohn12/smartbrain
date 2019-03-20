import React from "react";
import "./FaceRecognition.css";

// <div className="bounding-box"
//           style={{
//             top: box.topRow,
//             right: box.rightCol,
//             bottom: box.bottomRow,
//             left: box.leftCol
//           }}
//         />

// box.region_info.bounding_box

const FaceRecognition = ({ boxArray, imageUrl }) => {
  const faceArray = boxArray.map((box, key) => {
    return (
      <div
        key={key}
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }}
      />
    );
  });
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {faceArray}
      </div>
    </div>
  );
};

export default FaceRecognition;
