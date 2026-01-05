import React from "react";

const RagTile = ({ label, rag }) => {
  const color = rag === "Red" ? "bg-red-500" : rag === "Amber" ? "bg-yellow-500" : "bg-green-500";
  return (
    <div className={`p-4 text-white rounded ${color} m-2`}>
      {label}: {rag}
    </div>
  );
};

export default RagTile;
