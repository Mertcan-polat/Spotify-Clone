import React from "react";

import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "stores/player";

function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };
  return (
    <div>
      <NavLink
        className={
          "bg-footer rounded font-semibold text-sm text-white w-full hover:bg-active group"
        }
        key={item.id}
        to="/"
      >
        <div className="pt-[100%] relative">
          <img
            src={item.image}
            className="absolute inset-0 objective-cover w-full h-full rounded-lg "
          />
          <button
            onClick={updateCurrent}
            className="w-10 h-10 rounded-full bg-primary group-hover:flex group-focus:flex absolute bottom-2 right-2 flex items-center justify-center hidden"
          >
            <Icon name={current?.id === item.id ? "pause" : "play"} size={24} />
          </button>
        </div>

        {item.title}
        <p className="text-link text-m mt-1">{item.description}</p>
      </NavLink>
    </div>
  );
}

export default SongItem;
