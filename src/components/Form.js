import React  from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
      <form autoComplete="off">
        <label>username</label>
        <input
          type="text"
          value={this.state.username}
          onChange={(event) => {this.handleChange(event)}}
        />
        <label>password</label>
        <input
          type="password"
          value={this.state.value}
          onChange={(event) => {this.handleChange(event)}}
        />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Form;

