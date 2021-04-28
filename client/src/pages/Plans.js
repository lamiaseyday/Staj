import React from 'react';
import Date from '../images/date-01.jpg';

function Plans() {
  return (
    <div className="plans">
      <img className="plan-img" src={Date} />
      <div className="plan-text"><p>Son tarihleri veya anımsatıcıları olan görevler burada görüntülenir. </p></div>
    </div>
  );
}

export default Plans; 