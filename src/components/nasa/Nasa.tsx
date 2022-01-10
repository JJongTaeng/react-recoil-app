import React, {useEffect} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {fetchNasaInfo, nasaInfoState} from "../../state/state";

const Nasa = () => {

  const [nasaInfo, setNasaInfo] = useRecoilState(fetchNasaInfo);
  let value = useRecoilValue(nasaInfoState);

  useEffect(() => {
    console.log(value)
    setNasaInfo(nasaInfo);
  }, [])

  console.log(value);

  return (
      <div>
        HELLO Nasa
      </div>
  );
};

export default Nasa;