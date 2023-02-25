import React from "react";

interface ProgressBarProps {
  duration: number;
  curruntTime: number;
  playerRef: React.MutableRefObject<any>;
}

const ProgressBar = ({
  duration,
  curruntTime,
  playerRef,
}: ProgressBarProps) => {
  const progress = (curruntTime / duration) * 84;
  const breakPoint = (700 / duration) * 84;

  const moveProgress = (e: React.MouseEvent<HTMLSpanElement>) => {
    const progressBarWidth =
      e.target.getBoundingClientRect().right -
      e.target.getBoundingClientRect().x;
    const point = e.clientX - e.target.getBoundingClientRect().x;
    const selectTime = (point / progressBarWidth) * duration;
    playerRef.current.seekTo(selectTime);
  };

  return (
    <div className="w-full pb-11 relative">
      <p className="absolute text-white left-3 ">
        {curruntTime > 700 ? "2/2" : "1/2"}
      </p>
      <span
        className="border-white border-solid border-t-2 cursor-pointer top-3 z-10 w-10/12 h-1 absolute left-12"
        onClick={moveProgress}
      ></span>
      <span
        className=" w-1 h-3 bg-white absolute top-2"
        style={{ left: `${breakPoint + 9}%` }}
      ></span>
      <span
        className="rounded-full w-3 h-3 bg-white absolute top-2"
        style={{ left: `${progress + 8}%` }}
      ></span>
      <span
        className="w-3 h-3 text-white absolute text-xl top-6"
        style={{ left: `${progress + 7.7}%` }}
      >
        ▲
      </span>
    </div>
  );
};

export default ProgressBar;
