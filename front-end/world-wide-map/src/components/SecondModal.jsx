import React from "react";
import miniCardImage from "../assets/miniCardImage.png";

export default function SecondModal() {
  return (
    
    <div>
      <p style={{fontWeight: "bold"}}>그 외의 기사들은 지도 아래에서 확인하실 수 있습니다!</p>
      <p style={{fontWeight: "bold"}}>세계 각국의 소식을 접해보세요</p>
      <img src={miniCardImage} alt="" style={{borderRadius: "10px"}}/>
    </div>
  );
}
