import React, { useState } from "react";
import { Icon } from "Icons";

function Player() {
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const finalVolume = muted ? 0 : volume ** 2;
  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]"></div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-black hover:scale-[1.06] bg-white rounded-full">
            <Icon size={16} name="play" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div>
          <main className="w-full">
            <section>
              <input
                className="bg-primary"
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={volume}
                onChange={(event) => {
                  setVolume(event.target.valueAsNumber);
                }}
              />
              <button
                className="bg-primary"
                onClick={() => setMuted((m) => !m)}
              ></button>
            </section>
          </main>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] items-center flex justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="lyrics" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="queue" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="device" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="volumeFull" />
        </button>
        <main>
          <section>
            <input
              className="bg-primary"
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={volume}
              onChange={(event) => {
                setVolume(event.target.valueAsNumber);
              }}
            />
            <button
              className="bg-primary"
              onClick={() => setMuted((m) => !m)}
            ></button>
          </section>
        </main>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="fullScreen" />
        </button>
      </div>
    </div>
  );
}

export default Player;
