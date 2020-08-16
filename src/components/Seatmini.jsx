import React, { Component } from "react";
import { faChair, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Seatmini extends Component {
render(){
	return (<div>
  <div className="fulltable-mini">
        <div className="chairs-mini">
          <div
            id={this.props.id}
            
          >
            <FontAwesomeIcon icon={faStop} />
          </div>
          <div
            id={this.props.id + 1}
            
          >
            <FontAwesomeIcon icon={faStop} />
          </div>
          <div
            id={this.props.id + 2}
            
          >
            <FontAwesomeIcon icon={faStop} />
          </div>
        </div>
        <div className="table-mini"></div>
      </div>
	</div>);
}
}
export default Seatmini;