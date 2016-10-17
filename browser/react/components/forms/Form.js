import React from 'react';
import { connect } from 'react-redux';
import { addStory } from './action-creators';

class Form extends React.Component {

  render () {
    return (
      <form className="form-group" onSubmit={this.props.handleSubmit}>
        <label htmlFor="post">Say something great:</label>
        <input className="form-control" name="post" type="text" onChange={this.props.handleChange} />
        <button type="submit" className="btn btn-default">Post</button>
      </form>
    )
  }
}

function FormDecorator (InnerComponent) {

  return class StatefulForm extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitWithStatefulReactComponent = this.handleSubmitWithStatefulReactComponent.bind(this)
    }

    handleChange (evt) {
      this.setState({ input: evt.target.value });
    }

    handleSubmitWithStatefulReactComponent (evt) {
      evt.preventDefault();
      const formInput = this.state.input;
      this.props.handleSubmit(formInput);
    }


    render () {
      return (
        <InnerComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitWithStatefulReactComponent} />
      )
    }
  }
}

const mapDispatchToProps = function (dispatch) {

  return {
    handleSubmit: function (formInput) {
      const newStory = {
        id: formInput,
        title: formInput
      }
      const action = addStory(newStory);
      dispatch(action);
    }
  }
}

const statefulReduxComponentCreator = connect(null, mapDispatchToProps);

const StatefulForm = FormDecorator(Form);
const FormContainer = statefulReduxComponentCreator(StatefulForm);
export default FormContainer;
