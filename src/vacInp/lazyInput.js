import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    value: PropTypes.any.isRequired,
    onChangeInp: PropTypes.func,
    nativProps: PropTypes.object,
  }

  nativeInput = React.createRef();

  componentDidUpdate(prevProps) {
    let inp = this.nativeInput.current;
    if (prevProps.value !== this.props.value ||
      this.props.value != inp.value) {
     
      inp.value = this.props.value;
    }
  }



  checkChange = (e) => {
    if (this.props.value.toString() !== event.target.value) {
      this.props.onChangeInp(event);
    }

  }
  checkKeyChange = (e) => {
    if (e.keyCode === 13) {
      this.checkChange(e);
    }
  }

  render() {

    return (
      <div>
        <input
          {...this.props.nativProps}
          defaultValue={this.props.value}
          onBlur={this.checkChange}
          onKeyUp={this.checkKeyChange}
          ref={this.nativeInput}
        />
      </div>
    )
  }
}









