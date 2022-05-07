import SongItem from "components/SongItem";
import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import Title from "components/Title";

function Section({ title, more = false, items }) {
  return (
    <section>
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
      <div className="grid grid-cols-5 gap-x-6 ">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Section;
