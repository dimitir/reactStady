import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curent: 10,
      inputValue: '',
    }
    this.increase = this.increase.bind(this);
    this.reduce = this.reduce.bind(this);
  }

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func,
  }


  /*  static defaultProps = {
     min: 10,
     max: 15,
   } */

  /*  increase = () => {
     // console.log(this);
     this.state.curent++;
     console.log(this.state.curent);
     this.setState({
       curent: this.state.curent++
     })
   } */


  setCnt(newCnt) {
    let curent = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.setState({
      curent,
      inputValue: curent
    });
  }

  increase() {
    this.setCnt(this.state.curent + 1);
  }

  reduce() {
    this.setCnt(this.state.curent - 1);
  }

  tempChange(newStr) {
    /*  let valFille = parseInt(newStr);
     this.setCnt(isNaN(valFille) ? this.props.min : valFille); */
    this.setState({ inputValue: newStr });
  }

  setVal(newStr) {
    let valFille = parseInt(newStr);
    this.setCnt(isNaN(valFille) ? this.props.min : valFille);
  }


  render() {

    return (
      <div>
        <button onClick={this.reduce}>reduce</button>

        <label>
          {this.state.curent}
          <br></br>
          {this.state.inputValue}
          <input id='counter' type="text" name="name"
            value={this.state.inputValue}
            onChange={(e) => { this.tempChange(event.target.value) }}
            onBlur={(e) => { this.setVal(event.target.value) }}
          />
        </label>
        <button onClick={this.increase}>increase</button>

      </div>
    )
  }
}

// export default Counter; onChange={this.reduce} 








