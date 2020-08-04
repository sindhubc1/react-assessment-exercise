import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Dropdown } from "materialize-css";

// Description: Filter component: Price filter slider & Sort Dropdown 

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  margin: {
    height: theme.spacing(7),
  },
}));

const price = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}
 class Filter extends Component {
   
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
         <div className="filter">
        {/* <div className="filter-result">{`${this.props.filteredProducts.length} products found.`}</div> */}
        <div className="price-slider">
        <Typography id="discrete-slider-custom" gutterBottom>
        Price Filters
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={price}
      />
      <button className="btn btn-primary" >Apply</button>
      </div>
      
        <div className="filter-sort">
          <label>
            Sort by   
            <select
              className="form-control"
              value={this.props.sort}
              // onChange={(event) => {
              //   this.props.sortProducts(
              //     this.props.filteredProducts,
              //     event.target.value
              //   );
              // }}
            >
              <option value="">Select</option>
              <option value="nameAsc">Sort by name Ascending</option>
              <option value="nameDesc">Sort by name Desecending</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Filter;