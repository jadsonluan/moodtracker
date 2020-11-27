import React from 'react';
import Flower from '../Flower';

function MoodFlower({ mood }) {
  const size = 32;
  let style = { fill: mood.tag.color };
  return <Flower height={size} width={size} style={style}/>
}

export default MoodFlower;