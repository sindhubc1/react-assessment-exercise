import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Filter from "./components/Filter";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Link to="/">React Shopping Cart</Link>
          <Link to="/cart">My cart</Link>
        </header>
        <main>
          <div className="row">
            <div className="col-md-9">
              <Filter></Filter>
              {/* <Route exact path="/" component={Home} /> */}
            </div>

            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>

            {/* <div className="col-md-3">
              <Route path="/cart" component={Cart} />
            </div> */}
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
