import React from "react";

class ListHashtags extends React.Component {
  render() {
    return (
      <ul className="container-list--list-hashtags">
        {this.props.itemList.map((item, index) => {
          return (
            <li onClick={() => this.props.onClickDelete(item)} key={index}>
              #{item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListHashtags;
