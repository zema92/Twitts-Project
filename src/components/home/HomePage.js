import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
		  <div className="jumbotron">
			  <div className="row">
				  <div className="col-md-7">
					<h1> ReactJS Project</h1>
				  </div>
				  <div className="col-md-5">
						<img style={{height:"200px"}} src={'http://3.bp.blogspot.com/-RJTx3JUnDo4/VN2Bulym9qI/AAAAAAAAa4Q/hAWWZ6yYxWo/s1600/js.png'}/>
				  </div>
			  </div>
		  </div>
		);
	}
}

export default HomePage;
