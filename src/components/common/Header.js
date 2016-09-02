import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
					<div className="collapse navbar-collapse">

						<IndexLink role="button"className="navbar-brand" to="/" activeClassName="active">
							<img style={{float:'left',height:'100%'}} src={'http://www.arlefur.se/wp-content/uploads/2015/09/react-logo-1000-transparent.png'}/>
							Home
						</IndexLink>

						<ul className="nav navbar-nav">
							<li><Link to="/about" activeClassName="active">About</Link></li>
							<li><Link to="/twitts" activeClassName="active">Twitts</Link></li>
						</ul>
					</div>

			</div>
		</nav>
	);
};



export default Header;
