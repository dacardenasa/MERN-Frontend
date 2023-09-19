import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'dotenv/config';
import "react-datepicker/dist/react-datepicker.css";
class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: "",
    redirect: false,
  };
  async componentDidMount() {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    this.setState({
      users: data.map((user) => user.username),
      userSelected: data[0]?.username ?? '',
    });

    if (this.props.match.params.id) {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/notes/${this.props.match.params.id}`);
      this.setState({
        userSelected: data.author,
        title: data.title,
        content: data.content,
        date: new Date(data.date),
        editing: true,
        _id: this.props.match.params.id,
      });
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const newNote = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.userSelected,
      date: this.state.date,
    }

    if (this.state.editing) {
      await axios.put(`${process.env.REACT_APP_API_URL}/notes/` + this.state._id, newNote)
        .then(() => this.setState({ redirect: true }));
    } else {
      await axios.post(`${process.env.REACT_APP_API_URL}/notes`, newNote)
        .then(() => this.setState({ redirect: true }));
    }

  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date,
    });
  };

  render() {
    if (this.state.redirect) return <Redirect to='/'/>;

    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create a Note</h4>
            <form onSubmit={this.onSubmit}>
              {/** SELECT USER */}
              <div className="form-group">
                <select
                  className="form-control"
                  name="userSelected"
                  onChange={this.onInputChange}
                  value={this.state.userSelected}
                >
                  {this.state.users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Content"
                  value={this.state.content}
                  onChange={this.onInputChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <DatePicker
                  className="form-control"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>

              <div className="form-group"></div>
              <button type="submit" className="btn btn-primary" disabled={!this.state.users.length}>
                { this.props.match.params.id ? "Update" : "Save" }
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNote;
