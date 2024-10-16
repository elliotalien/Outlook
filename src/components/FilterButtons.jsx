import React from "react";

function FilterButtons({ setFilter, currentFilter }) {
  const buttonClass = (isActive) =>
    `${
      isActive ? "bg-[#e1e4ea] text-gray border border-solid border-[#cfd2dc]" : "bg-transparent font-normal"
    }  rounded-full px-4 py-2 mx-1 cursor-pointer text-sm text-gray-600`;

  return (
    <div className="mb-5 p-2.5 rounded-full inline-flex items-center">
      <span className="mr-2.5 text-[17px] text-black">Filter By:</span>
      <button
        className={`text-[17px] text-black ${buttonClass(currentFilter === "unread" || currentFilter === "all")}`}
        onClick={() => setFilter("unread")}
      >
        Unread
      </button>
      <button
        className={`text-[17px] text-black ${buttonClass(currentFilter === "read")}`}
        onClick={() => setFilter("read")}
      >
        Read
      </button>
      <button
        className={`text-[17px] text-black ${buttonClass(currentFilter === "favorites")}`}
        onClick={() => setFilter("favorites")}
      >
        Favorites
      </button>
    </div>
  );
}

export default FilterButtons;
