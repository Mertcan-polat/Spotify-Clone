import React from "react";
import categories from "../data/categories";
import favotireCategories from "../data/favorite-categories";
import ScrollContainer from "react-indiana-drag-scroll";

function Category({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative"
    >
      <div className="absolute inset-0 overflow-hidden ">
        <h3 className="p-4 text-2xl font-semibold tracking-tighter">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"
        ></img>
      </div>
    </div>
  );
}

function WideCategory({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]"
    >
      <div className="absolute inset-0 overflow-hidden ">
        <h3 className="p-4 text-[2.5rem] font-semibold tracking-tighter">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"
        ></img>
      </div>
    </div>
  );
}

function Search() {
  return (
    <>
      <section className="mb-4">
        <h1 className="font-semibold text-xl">EN ÇOK DİNLEDİKLERİN</h1>
        <ScrollContainer className="flex overflow-x gap-x-6 scroll-smooth">
          {favotireCategories.map((category) => (
            <WideCategory key={category.id} category={category} />
          ))}
        </ScrollContainer>
      </section>

      <section>
        <h2 className="font-semibold text-xl underline m-2">HEPSİNE GÖZ AT</h2>
        <div>
          <div className="grid grid-cols-5 gap-6">
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
