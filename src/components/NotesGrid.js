import React, { Component } from 'react';
import Note from './Note';
import './NotesGrid.css';
import Masonry from 'react-masonry-component';

const masonryOptions = { columnWidth: 200, gutter: 15, isFitWidth: true };

class NotesGrid extends Component {
  render() {
    const { notes, onNoteDelete } = this.props;

    return (
      <div>
        <Masonry className="notes-grid" options={masonryOptions}>
          {notes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              color={note.color}
              title={note.title}
              onDelete={onNoteDelete}
            >
              {note.text}
            </Note>
          ))}
        </Masonry>
      </div>
    );
  }
}

export default NotesGrid;
