import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class King extends Component {
  constructor() {
    super();

    this.deleteKing = this.deleteKing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.state = {
      king: "",
      deleted: false,
      newKingName: ""
    };
  }

  async king() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:9000/kings/${id}`);
    this.setState({
      king: res.data
    });
  }

  componentDidMount() {
    this.king();
  }

  async deleteKing() {
    const id = this.props.match.params.id;
    const res = await axios.delete(`http://localhost:9000/kings/${id}`);
    this.setState({
      deleted: true
    });
  }
  async handleUpdate() {
    const newKingName = this.state.newKingName;
    const id = this.props.match.params.id;
    const res = await axios.put(`http://localhost:9000/kings/${id}`, {
      name: newKingName
    });

    this.king();
  }

  handleChange(e) {
    this.setState({
      newKingName: e.target.value
    });
  }

  render() {
    if (this.state.deleted) {
      return <Redirect to="/kings" />;
    }
    const king = this.state.king;
    return (
      <div>
        <p>{king.name}</p>
        <br />
        <input onChange={this.handleChange} placeholder="new king name here" />
        <br />
        <button onClick={this.handleUpdate}>change bloodlines</button>
        <button onClick={this.deleteKing}>REGICIDE</button>
      </div>
    );
  }
}

export default King;
