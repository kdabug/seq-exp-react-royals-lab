import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class QueenList extends Component {
  constructor() {
    super();

    this.queens = this.queens.bind(this);
    this.addQueen = this.addQueen.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      queens: [],
      newQueen: ""
    };
  }

  async queens() {
    const res = await axios.get(`http://localhost:9000/queens`);
    this.setState({
      queens: res.data
    });
  }

  componentDidMount() {
    this.queens();
  }

  async addQueen() {
    const newQueen = this.state.newQueen;
    const res = await axios({
      method: "post",
      url: "http://localhost:9000/queens",
      headers: {
        name: newQueen
      }
    });

    this.queens();
  }

  handleChange(e) {
    this.setState({
      newQueen: e.target.value
    });
  }

  render() {
    const queens = this.state.queens;
    return (
      <div>
        <div>
          <ul className="queens-list-container">
            {queens.map(queen => (
              <li className="all-queens-list">
                <Link to={`/queens/${queen.id}`}>{queen.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <br />
        <input onChange={this.handleChange} />
        <br />
        <button onClick={this.addQueen}>Add Queen</button>
      </div>
    );
  }
}

export default QueenList;
