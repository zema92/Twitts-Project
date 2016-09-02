import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twittActions from '../../actions/twittActions';
import TwittForm from './TwittForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageTwittPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      twitt: Object.assign({}, props.twitt),
      errors: {},
      saving: false
    };

    this.updateTwittState = this.updateTwittState.bind(this);
    this.saveTwitt = this.saveTwitt.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.twitt.id != nextProps.twitt.id) {
      // Necessary to populate form when existing twitt is loaded directly.
      this.setState({twitt: Object.assign({}, nextProps.twitt)});
    }
  }

  updateTwittState(event) {
    const field = event.target.name;
    let twitt = this.state.twitt;
    twitt[field] = event.target.value;
    return this.setState({twitt: twitt});
  }

  twittFormIsValid() {
    let formIsValid = true;
    let errors = {};

    console.log(this.state.twitt);
    if (this.state.twitt.text.length < 5) {
      errors.text = 'Text must be at least 5 characters.';
      formIsValid = false;
    }
    if (!this.state.twitt.authorId) {
      errors.authorId = 'Please select author.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveTwitt(event) {
    event.preventDefault();

    if (!this.twittFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveTwitt(this.state.twitt)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Your twitt is saved');
    this.context.router.push('/twitts');
  }

  render() {
    return (
      <TwittForm
        allAuthors={this.props.authors}
        onChange={this.updateTwittState}
        onSave={this.saveTwitt}
        twitt={this.state.twitt}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageTwittPage.propTypes = {
  twitt: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageTwittPage.contextTypes = {
  router: PropTypes.object
};

function getTwittById(twitts, id) {
  const twitt = twitts.filter(twitt => twitt.id == id);
  if (twitt) return twitt[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const twittId = ownProps.params.id; // from the path `/twitt/:id`

  let twitt = {id: '', authorId: '', text: ''};
  if (twittId && state.twitts.length > 0) {
    twitt = getTwittById(state.twitts, twittId);
  }

  return {
    twitt: twitt,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(twittActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageTwittPage);
