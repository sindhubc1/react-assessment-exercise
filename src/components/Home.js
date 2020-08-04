import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";

//Main Dashboard/Home page to view all products and other components(Header & Footer)

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="col-md-4" key={item.id}>
          <div className="thumbnail text-center">
            <a href={`#${item.id}`} onClick={(e) => this.handleClick(item.id)}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </a>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <button
              className="btn btn-primary"
              onClick={(e) => this.handleClick(item.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
