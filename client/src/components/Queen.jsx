import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Queen extends Component {
  constructor() {
    super();

    this.deleteQueen = this.deleteQueen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.state = {
      queen: "",
      deleted: false,
      newQueenName: ""
    };
  }

  async queen() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:9000/queens/${id}`);
    this.setState({
      queen: res.data
    });
  }

  componentDidMount() {
    this.queen();
  }

  async deleteQueen() {
    const id = this.props.match.params.id;
    const res = await axios.delete(`http://localhost:9000/queens/${id}`);
    this.setState({
      deleted: true
    });
  }
  async handleUpdate() {
    const { newQueenName } = this.state;
    const { id } = this.props.match.params;
    const res = await axios.put(`http://localhost:9000/queens/${id}`, {
      name: newQueenName
    });

    this.queen();
  }

  handleChange(e) {
    this.setState({
      newQueenName: e.target.value
    });
  }

  render() {
    if (this.state.deleted) {
      return <Redirect to="/queens" />;
    }
    const queen = this.state.queen;
    return (
      <div>
        <p>{queen.name}</p>
        <br />
        <input onChange={this.handleChange} placeholder="new queen name here" />
        <br />
        <button onClick={this.handleUpdate}>change bloodlines</button>
        <button onClick={this.deleteQueen}>REGICIDE</button>
      </div>
    );
  }
}

export default Queen;
