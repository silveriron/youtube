import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import ProgressBar from "./ProgressBar";
import Script from "./Script";

const YoutubePlayer = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [curruntTime, setCurruntTime] = useState<number>(0);
  const playerRef = useRef<any>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const getCurruntTime = (state: OnProgressProps) => {
    setCurruntTime(state.playedSeconds);
  };

  const getDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <div className="relative">
      {hasWindow && (
        <>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eYTGN1JUVoQ"
            onProgress={getCurruntTime}
            onDuration={getDuration}
            controls={true}
            progressInterval={500}
            style={{ maxWidth: "100%" }}
            ref={playerRef}
            playing={true}
          />
          <ProgressBar
            duration={duration}
            curruntTime={curruntTime}
            playerRef={playerRef}
          />
          <Script curruntTime={curruntTime} />
        </>
      )}
    </div>
  );
};

export default YoutubePlayer;
