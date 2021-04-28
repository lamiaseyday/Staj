import React from 'react';
import fav from '../images/fav-01.jpg';

function Fav() {
  return (
    <div className="favs">
      <img className="fav-img" src={fav} />
      <div className="fav-text"><p>Burada görüntülemek için bazı görevlere yıldız eklemeyi deneyin </p></div>
    </div>
  );
}

export default Fav;