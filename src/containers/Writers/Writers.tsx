import WritersCards from '../../components/WritersCards/WritersCards';
import {writers} from '../../constants';

const Writers = () => {
  const bcgUrl = 'https://sun6-21.userapi.com/impf/c851336/v851336082/1536f4/jHiId-uB0ak.jpg?size=1133x850&quality=96&sign=7295626c385111429211fd78de180f5a&type=album';

  const imageStyle = {
    background: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
      url(${bcgUrl}) no-repeat center center / cover
    `,
  };

  return (
    <>
      <div className="container-fluid text-center pt-4 pb-5 text-light" style={imageStyle}>
        <div className="container pt-5 pb-3 px-4">
          <h1 className="mb-4">Великие писатели</h1>
          <h4 className="mb-2 pt-4 px-5">30 имен, которые изменили литературу</h4>
        </div>
      </div>
      <div className="container px-4">
        <div className="flex-column d-flex">
          <WritersCards writers={writers} />
        </div>
      </div>
    </>
  );
};

export default Writers;