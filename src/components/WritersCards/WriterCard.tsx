import React from 'react';
import {Writer} from '../../types';

interface Props {
  writer: Writer;
}

const WriterCard: React.FC<Props> = ({writer}) => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${writer.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="card rounded-4 mb-2 shadow-sm border-0">
      <div className="row g-0">
        <div className="col-4">
          <div className="rounded-start-4" style={imageStyle}/>
        </div>
        <div className="col-md-8">
          <div className="card-body p-5">
            <h5 className="card-title">{writer.name}</h5>
            <p className="card-text text-secondary">{writer.year}</p>
            <p className="card-text">{writer.information}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterCard;