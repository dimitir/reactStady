import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import AppMinMax from './counter/appMinMax'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.changeCnt = this.changeCnt.bind(this);
    this.state = {
      formDane: true,
      products: [
        {
          id: 100,
          title: 'Ipnone 200',
          price: 12000,
          rest: 10,
          current: 1
        },
        {
          id: 101,
          title: 'Samsung AAZ8',
          price: 22000,
          rest: 5,
          current: 1
        },
        {
          id: 103,
          title: 'Nokia 3310',
          price: 5000,
          rest: 2,
          current: 1
        },
        {
          id: 105,
          title: 'Huawei ZZ',
          price: 15000,
          rest: 8,
          current: 1
        }
      ]
    }

  }


  deleteProduct(i) {
    let newProducts = [...this.state.products];
    newProducts.splice(i, 1);
    this.setState({ products: newProducts });
  }

  changeCnt(i, cnt) {
    console.log('1cnt', cnt);
    let newProducts = [...this.state.products];
    let newProduct = { ...newProducts[i] };
    newProduct.current = cnt;
    newProducts[i] = newProduct;
    this.setState({ products: newProducts });
  }

  sendForm = () => {
    this.setState({
      formDane: false
    })
  }


  pageUsual = () => {
    return (
      <div>
        <h2>Cart</h2>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
            </tr>
            {productsRows}
          </tbody>
        </table>
        <span>{sum}</span>
        <button onClick={() => this.deleteProduct(i)}>x</button>
      </div>
    )

  }




  render() {

    let productsRows = this.state.products.map((product, i) => {
      return (
        <tr key={product.id} >
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.current}
              onChange={(cnt) => this.changeCnt(i, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td><button onClick={() => this.deleteProduct(i)}>x</button></td>
        </tr>
      )
    });

    // нужно менять setState
    let sum = 0;
    for (let val of this.state.products) {
      sum += (Number(val.price) * Number(val.current));
    }


    let page = this.state.formDane ? showForm(productsRows, sum, this.sendForm, this.changeCnt) : congrats();

    return (
      < div >
        {page}
        {/*  <h2>Cart</h2>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
            </tr>
            {productsRows}
          </tbody>
        </table>
        <span>{sum}</span>
         */}
      </div >
    )
  }
}


function showForm(productsRows, sum, onSend, changeCnt) {
  return (
    <div>
      <h2>Cart</h2>
      <table>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
          </tr>
          {productsRows}
        </tbody>
      </table>
      <span>{sum}</span>
      <br></br>
      <button onClick={onSend}>onSend</button>
      <button onClick={() => changeCnt(1, 50)}>changeCnt</button>
    </div>
  )
}

function congrats() {
  return (
    <div>
      <h2>Congratulation!</h2>
    </div>
  )
}
// export default Counter; onChange={this.reduce}








