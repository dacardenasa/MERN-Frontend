import React, { Component } from "react";
import axios from "axios";
import 'dotenv/config';

class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  getUsers = async () => {
    const users = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    this.setState({
      users: users.data,
    });
  }

  async componentDidMount() {
    this.getUsers();
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
      username: this.state.username
    });
    this.setState({ username: "" });
    this.getUsers();
  }

  deleteUser = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
    this.getUsers();
  }

  render() {
    return (
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form onSubmit={ this.onSubmit }>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.username}
                  className="form-control"
                  onChange={this.onChangeUsername}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                key={user._id}
                className="list-group-item list-group-item-action"
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CreateUser;
