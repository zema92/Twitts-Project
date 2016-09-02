import React, {PropTypes} from 'react';
import TwittListRow from './TwittListRow';

const TwittList = ({twitts}) => {
  return (
    <div>
        <div className="col-md-offset-1 col-md-10">
        <h1>TWITTS</h1>
        <ul className="list-group text-center">
        {twitts.map(twitt =>
          <TwittListRow key={twitt.id} twitt={twitt}/>
        )}
        </ul>
        </div>
    </div>
  );
};

TwittList.propTypes = {
  twitts: PropTypes.array.isRequired
};

export default TwittList;
