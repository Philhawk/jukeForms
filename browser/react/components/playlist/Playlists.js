import React from 'react';
import { connect } from 'react-redux';

class Playlists extends React.Component {
  render(){

  return (
    <div className="well">
      <form className="form-horizontal"  onSubmit={this.props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group" >
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={this.props.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" >Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )};
}


function FormDecorator (InnerComponent) {

  return class StatefulForm extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitWhatever = this.handleSubmitWhatever.bind(this)
    }

    handleChange (evt) {
      this.setState({ input: evt.target.value });
    }

    handleSubmitWhatever (evt) {
      evt.preventDefault();
      const formInput = this.state.input;
      console.log(formInput)
      this.props.handleSubmit(formInput);
    }


    render () {
      return (
        <InnerComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitWhatever} />
      )
    }
  }
}

export default FormDecorator(Playlists)
