import React from 'react';
import ReactDOM from 'react-dom/client';
import jewelData from './jewel.json';

import './index.css';
import './jewel.json';

class SelectOption extends React.Component {
  render() {
    return (
      <option value = {this.props.value}>{this.props.value}</option>
    )
  }
}

class TypeInput extends React.Component {
	render() {
      const rows = [];
      for (const jewel in this.props.jewelTypes) {
        rows.push(
          <SelectOption
            value={jewel}
          />     
        )
      }

		return (
      <div>
          <label>type</label>
					<select type="text">
          {rows}
          </select>
      </div>
		)
	}
}

const typeInputRoot = ReactDOM.createRoot(document.getElementById('typeInput'));
typeInputRoot.render(
  <TypeInput
    jewelTypes = {jewelData}
  />
)