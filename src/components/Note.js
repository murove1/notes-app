import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { title, color, children } = this.props;

    return (
      <div className="note" style={{ backgroundColor: color }}>
        <h2 className="note-title">{title}</h2>
        <button className="note__delete-icon" onClick={this.handleDelete}>
          X
        </button>
        {children}
      </div>
    );
  }
}

export default Note;
