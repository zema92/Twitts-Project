import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TwittListRow = ({twitt}) => {
  return (
	<li className="list-group-item">
		<div className="row">
			<div className="col-md-7">
				<p><Link to={'/twitt/' + twitt.id}>{twitt.text}</Link></p>
			</div>
			<div className="col-md-5">
				<p>By:<strong> {twitt.authorId}</strong></p>
			</div>
		</div>
	</li>
  );
};

TwittListRow.propTypes = {
  twitt: PropTypes.object.isRequired
};

export default TwittListRow;
