import React, { useRef } from "react";

interface ProgressBarProps {
  duration: number;
  curruntTime: number;
  playerRef: React.MutableRefObject<any>;
}

const getProgress = (
  curruntTime: number,
  duration: number,
  progressBarRef: React.RefObject<HTMLSpanElement>
): number => {
  const rect = progressBarRef.current?.getBoundingClientRect();
  console.log(rect);
  if (rect) {
    return rect.x;
  } else {
    return 0;
  }
};

const ProgressBar = ({
  duration,
  curruntTime,
  playerRef,
}: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLSpanElement>(null);
  const progress = (curruntTime / duration) * 100;
  const breakPoint = (700 / duration) * 100;

  const moveProgress = (e: React.MouseEvent<HTMLSpanElement>) => {
    const event = e.target as HTMLSpanElement;

    const progressBarWidth =
      event.getBoundingClientRect().right! - event.getBoundingClientRect().x!;
    const point = e.clientX - event.getBoundingClientRect().x;
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
        ref={progressBarRef}
      >
        <span
          className=" w-1 h-3 bg-white absolute z-10"
          style={{ left: `${breakPoint + 1}%`, top: -6 }}
        ></span>
        <span
          className="rounded-full w-3 h-3 bg-white absolute"
          style={{ left: `${progress}%`, top: -6 }}
        ></span>
        <span
          className="w-3 h-3 text-white absolute text-xl"
          style={{ left: `${progress - 0.5}%`, top: 3 }}
        >
          ▲
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
