import { MainModal } from "../components";
import React, { useState } from "react";

export default function Modal() {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => {
    setIsModal(!isModal);
  };

  const mainModal = <MainModal isModal={openModal} />;

  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100vh",
        filter: "blue(2px)",
      }}
    >
      <button
        onClick={openModal}
        className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
      >
        Click ME
      </button>
      {isModal ? mainModal : null}
    </div>
  );
}

/*

1. blur background 
2. popup 
3. close popup button 
4. if is subscribe - close popup.

*/
