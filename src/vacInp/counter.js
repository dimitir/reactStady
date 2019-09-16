import React from 'react';
// import PropTypes from 'prop-types';
import InputLazy from './lazyInput';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imp1: 'start',
      imp2: ''
    }

  }

  render() {
    return (
      <div>
        <h2>this.state.imp1</h2>
        <h4>{this.state.imp1}</h4>
        <InputLazy
          nativProps={{ type: 'text', className: 'same' }}
          value={this.state.imp1}
          onChange={(e) => this.setState({ imp1: event.target.value })}
        />
        <button onClick={(e) => { this.setState({ imp1: 'test' }) }}>
          Unreal chenge
        </button>
      </div>
    )
  }
}









