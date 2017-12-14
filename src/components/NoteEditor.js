import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import './NoteEditor.css';

const DEFAULT_COLOR = '#FECB00';

class NoteEditor extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: '',
      color: DEFAULT_COLOR
    };
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleColorChange = color => {
    this.setState({
      color: color
    });
  };

  handleNoteAdd = () => {
    const { title, text, color } = this.state;

    let newNote = {
      title: title,
      text: text,
      color: color,
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);
    this.setState({ title: '', text: '' });
  };

  render() {
    const { title, text, color } = this.state;

    return (
      <div className="note-editor">
        <textarea
          className="editor-textarea textarea-title"
          placeholder="Enter your title"
          value={title}
          onChange={this.handleTitleChange}
        />
        <textarea
          className="editor-textarea textarea-text"
          placeholder="Enter your note text."
          value={text}
          onChange={this.handleTextChange}
        />
        <div className="editor-bottom-panel">
          <ColorPicker value={color} onChange={this.handleColorChange} />
          <button
            className="editor-button"
            disabled={!text}
            onClick={this.handleNoteAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default NoteEditor;
