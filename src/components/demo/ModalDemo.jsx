import React from "react";
import { dataProduct } from "@/constants";

export default function ModalDemo({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="modal"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-72">
        {dataProduct.map((item, i) => (
          <h1 key={i}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
}
