import React from "react";
import { NavLink } from "react-router-dom";

function Title({ more = false, title }) {
  return (
    <div>
      <header className="flex item-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold hover:underline">
          {title}
        </h3>
        {more && (
          <NavLink
            className={"text-xs font-sanserif text-link hover:underline  "}
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
    </div>
  );
}

export default Title;
