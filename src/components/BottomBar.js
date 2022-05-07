import Player from "./BottomBar/Player";

function BottomBar() {
  return (
    <div className="h-24  bg-footer text-white absolute inset-x-0 bottom-0 border-t border-white border-opacity-5">
      <Player />
    </div>
  );
}

export default BottomBar;
