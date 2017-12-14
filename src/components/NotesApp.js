import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import './NoteApp.css';

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    let localNotes = JSON.parse(localStorage.getItem('notes'));

    if (localNotes) {
      this.setState({ notes: localNotes });
    }
  };

  componentDidUpdate = () => {
    this.updateLocalStorage();
  };

  handleNoteAdd = newNote => {
    let newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  handleNoteDelete = noteId => {
    let newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes: newNotes });
  };

  handleNoteDeleteAll = () => {
    const confirmDeleteAllNote = window.confirm('Delete all notes?');
    if (confirmDeleteAllNote) {
      localStorage.clear();
      this.setState({ notes: [] });
    }
  };

  updateLocalStorage = () => {
    let notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="notes-app">
        <h1 className="app-header">NotesApp</h1>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <a className="notes-delete-all" onClick={this.handleNoteDeleteAll}>
          Delete all notes
        </a>
        <NotesGrid notes={notes} onNoteDelete={this.handleNoteDelete} />
      </div>
    );
  }
}

export default NotesApp;
