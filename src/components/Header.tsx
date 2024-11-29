import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex gap-4 items-center">
      <h1 className="text-blue-900 font-bold text-[32px]">To-Do List</h1>
      <img src="../src/assets/page.svg" alt="" className="w-[32px] h-[32px]" />
    </header>
  );
};

export default Header;
