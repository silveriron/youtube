import React, { useEffect, useState } from "react";

const page1 = (
  <div className="bg-gray-800 w-5/6 mx-auto p-4 rounded-md">
    <h2 className="text-center m-8 text-2xl">전체요약</h2>
    <div>
      <h3 className="font-bold text-lg mb-3">
        1) 4~5% 나스닥 다시 최저점으로 하락 중
      </h3>
      <p className="mb-2">
        - 소비자 물가 상승률이 시장의 예상보다 별로 안떨어져서 물가쇼크가 남
      </p>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-3">
        2) 원유가격 전월 대비 10% 이상 하락
      </h3>
      <p className="mb-2">- 조금밖에 내려 가지 못함 즉, 쇼크가 두 배가 됨</p>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-3">
        3) 미국 월세가격이 매우 높고 한국도 월세선호가 아주 크게 증가
      </h3>
      <p className="mb-2">
        - 월세 가격이 굉장히 많이 올랐다는 게 미국에서 충격으로 받아들여짐
      </p>
    </div>
  </div>
);

const page2 = (
  <div className="bg-gray-800 w-5/6 mx-auto p-4 rounded-md">
    <div>
      <h3 className="font-bold text-xl mb-3">
        보통 실업률 감소를 목표했던 중앙은행 이번엔 다르다.
      </h3>
      <ul>
        <li>
          일반적으로는 중앙은행은 실업률을 낮춰야 되는 게 최대의 목표였는데
        </li>
        <li>
          <span>물가상승률이라는 더 앞선 목표</span>가 워낙에 많이 가다 보니까
        </li>
      </ul>
    </div>
  </div>
);

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
