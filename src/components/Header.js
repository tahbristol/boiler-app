import React from "react";

import Title from "./Title";

class Header extends React.Component {
  handleChange = (ev) => {
    const title = ev.target.value;
    this.props.changeTitle(title);
  }

  render() {

    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Header;
