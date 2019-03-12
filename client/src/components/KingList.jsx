import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class KingList extends Component {
  constructor() {
    super();

    this.kings = this.kings.bind(this);
    this.addKing = this.addKing.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      kings: [],
      newKing: ""
    };
  }

  async kings() {
    const res = await axios.get(`http://localhost:9000/kings`);
    this.setState({
      kings: res.data
    });
  }

  componentDidMount() {
    this.kings();
  }

  async addKing() {
    const newKing = this.state.newKing;
    const res = await axios({
      method: "post",
      url: "http://localhost:9000/kings",
      headers: {
        name: newKing
      }
    });

    this.kings();
  }

  handleChange(e) {
    this.setState({
      newKing: e.target.value
    });
  }

  render() {
    const kings = this.state.kings;
    return (
      <div>
        <div>
          <ul className="kings-list-container">
            {kings.map(king => (
              <Link to={`/kings/${king.id}`}>
                <li className="all-kings-list">{king.name} </li>
              </Link>
            ))}
          </ul>
        </div>

        <br />
        <input onChange={this.handleChange} />
        <br />
        <button onClick={this.addKing}>Add King</button>
      </div>
    );
  }
}

export default KingList;
