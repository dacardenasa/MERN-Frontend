import React, { Component } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom'

class NotesList extends Component {
  state = {
    notes: []
  }

  getNotes = async () => {
    const { data } = await axios.get("https://protected-brook-06855.herokuapp.com/api/notes");
    this.setState({
      notes: data,
    });
  }

  componentDidMount() {
    this.getNotes();
  }

  deleteNote = async (id) => {
    const option = window.confirm("¿Are you sure you want to delete this note?");
    if (option === true) {
      await axios.delete("https://protected-brook-06855.herokuapp.com/api/notes/" + id);
      this.getNotes();
    } 
  }

  render() {
    return (
      <div className="row">
        {
          this.state.notes.map( note => (
            <div className="col-md-4 p-2" key={note._id}>
              <div className="card">
                <div className="card-header">
                  <h5><strong>Title:</strong> {note.title}</h5>
                  <Link className="btn btn-secondary mr-2" to={"/edit/" + note._id}>Edit</Link>
                  <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>Delete</button>
                </div>
                <div className="card-body">
                  <h4>Content:</h4>
                  <p>{note.content}</p>
                </div>
                <div className="card-footer">
                  <p><strong>Author:</strong> {note.author}</p>
                  <p><strong>Date:</strong> {format(note.date)}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default NotesList;
