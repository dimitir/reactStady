import React from 'react';
import PropTypes from 'prop-types';
import InputLazy from './../vacInp/lazyInput';
import styles from './appMinMax.module.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.reduce = this.reduce.bind(this);

  }

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func,
  }


  static defaultProps = {
    onChange: function (cnt) { }
  }

  setCnt(newCnt) {
    console.log('newCnt', newCnt);
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    console.log(cnt);

    this.props.onChange(cnt);
  }

  increase() {
    this.setCnt(this.props.cnt + 1);
  }
  reduce() {
    this.setCnt(this.props.cnt - 1);
  }


  onChangeInp = (e) => {
    console.log((isNaN('dasfasfasd')));
    let cnt = parseInt(e.target.value);
    this.setCnt(isNaN(cnt) ? this.props.min : cnt);
  }

  render() {
    return (
      <div>
        <label>
          <button onClick={this.reduce}>-</button>
          <InputLazy
            nativProps={{ type: 'text', className: styles.same }}
            value={this.props.cnt}
            onChangeInp={this.onChangeInp}
          />
        </label>
        <button onClick={this.increase}>+</button>

      </div>
    )
  }
}









