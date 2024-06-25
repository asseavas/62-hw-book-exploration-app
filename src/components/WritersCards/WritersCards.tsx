import React from 'react';
import {Writer} from '../../types';
import WriterCard from './WriterCard';

interface Props {
  writers: Writer[];
}

const WritersCards: React.FC<Props> = ({writers}) => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-between py-5 gap-4">
        {writers.map((writer, index) => (
          <WriterCard key={index} writer={writer}/>
        ))}
      </div>
    </>
  );
};

export default WritersCards;