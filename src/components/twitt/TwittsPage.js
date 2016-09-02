import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twittActions from '../../actions/twittActions';
import TwittList from './TwittList';
import {browserHistory} from 'react-router';

class TwittsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddTwittPage = this.redirectToAddTwittPage.bind(this);
  }

  twittRow(twitt, index) {
    return <div key={index}>{twitt.title}</div>;
  }

  redirectToAddTwittPage() {
    browserHistory.push('/twitt');
  }

  render() {
    const {twitts} = this.props;

    return (
      <div>
        <div className="col-md-12">
          <TwittList twitts={twitts}/>
        </div>
        <div className="col-md-offset-1 col-md-10">
          <input type="submit"
                   value="Add Twitt"
                   className="btn btn-primary"
                   onClick={this.redirectToAddTwittPage}/>
        </div>
      </div>
    );
  }
}

TwittsPage.propTypes = {
  twitts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    twitts: state.twitts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(twittActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TwittsPage);
