import React, { useEffect, useState } from "react";
import { page1, page2 } from "../mockup/script";

interface ScriptProps {
  curruntTime: number;
}

const Script = ({ curruntTime }: ScriptProps) => {
  const [script, setScript] = useState(page1);
  useEffect(() => {
    if (curruntTime > 700) {
      setScript(page2);
    } else {
      setScript(page1);
    }
  }, [curruntTime]);

  return <div>{script}</div>;
};

export default Script;
