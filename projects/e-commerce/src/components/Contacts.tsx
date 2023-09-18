import React from "react";

export default function Contacts() {
  return (
    <>
      <h1 className="px-12 mt-10 font-bold text-2xl text-gray-600">Contacts</h1>
      <div className="px-12 mt-10 text-lg flex flex-col">
        <p>
          <span className="hover:underline">+7(999)-999-99-99</span>
        </p>
        <p>
          <span className="hover:underline">example@example.com</span>
        </p>
      </div>
    </>
  );
}
