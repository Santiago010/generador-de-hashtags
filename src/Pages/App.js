import { Component, Fragment } from "react";
import ListHashtags from "../Components/ListHashtags";
import FormMakeHastags from "../Components/FormMakeHastags";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHashtags: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.target);
    this.setState({
      listHashtags: [].concat(
        this.state.listHashtags,
        newFormData.get("hashtag")
      ),
    });
  };

  handleCickDelete = (indexId) => {
    console.log(indexId);
    const filterId = this.state.listHashtags.filter(
      (hashtag) => hashtag !== indexId
    );
    this.setState({
      listHashtags: filterId,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-principal">
          <h1 className="container-principal--title">Hashtags Generator</h1>
          <div className="container-principal--container-list">
            <ListHashtags
              onClickDelete={this.handleCickDelete}
              itemList={this.state.listHashtags}
            />
            <p className="container-list--paragraph-length-hashtags">
              {this.state.listHashtags.length} Hashtags
            </p>
          </div>
          <div className="container-principal--container--form">
            <p className="container-form--paragraph-ad-hashtag">
              Please enter your Hashtags
            </p>
            <FormMakeHastags onSubmit={this.handleSubmit} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
