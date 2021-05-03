import React from "react";

class FormMakeHastags extends React.Component {
  render() {
    return (
      <form className="form-hashtag" onSubmit={this.props.onSubmit}>
        <input
          className="container-form--input-hashtag"
          type="text"
          name="hashtag"
          required
        />
        <input value="add" className="container-form--btn-add" type="submit" />
      </form>
    );
  }
}

export default FormMakeHastags;
