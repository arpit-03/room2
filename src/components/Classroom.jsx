import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Room from "./Room";
class Classroom extends Component {
  state = {};
  render() {
    return (<div className="class-mini-s" > 
<Link to="/seatselection">
<div className="full-mini-div">
<div>
<Room />
</div>
<p> Apocolypse</p>
</div>
</Link>

<Link to="/seatselection">
<div className="full-mini-div">
<div>
<Room />
</div>
<p>Mediasoup</p>
</div>
</Link>

<Link to="/seatselection">
<div className="full-mini-div">
<div className="roominvert">
<Room />
</div>
<p>Kurento</p>
</div>
</Link>

<Link to="/seatselection">
<div className="full-mini-div">
<div className="roominvert">
<Room />
</div>
<p>WebRTC</p>
</div>
</Link>
</div>);
  }
}

export default Classroom;
