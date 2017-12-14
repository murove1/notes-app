import React, { Component } from 'react';
import './ColorPicker.css';
import cx from 'classnames';

const COLORS = ['#FECB00', '#11CD86', '#E5989B', '#D0A727', '#CED3DC'];

class ColorPicker extends Component {
  handleChange = color => () => {
    const { onChange } = this.props;
    onChange(color);
  };

  render() {
    const { value } = this.props;

    return (
      <div className="color-picker-panel">
        {COLORS.map(color => (
          <div
            key={color}
            className={cx('color-picker-choose', { selected: value === color })}
            style={{ backgroundColor: color }}
            onClick={this.handleChange(color)}
          />
        ))}
      </div>
    );
  }
}

export default ColorPicker;
