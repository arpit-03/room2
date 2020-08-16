import React, { Component } from "react";
import AvailableList from "./AvailableList";
import ReservedList from "./ReservedList";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import Table from "./Table";

class DrawGrid extends Component {
  render() {
    return (
      <div className="container">
       
        <Table seat={this.props.seat} id={0} onclick={this.props.onClickData} />
        <Table seat={this.props.seat} id={4} onclick={this.props.onClickData} />
        <Table seat={this.props.seat} id={7} onclick={this.props.onClickData} />
        <Table
          seat={this.props.seat}
          id={10}
          onclick={this.props.onClickData}
        />
        <Table
          seat={this.props.seat}
          id={13}
          onclick={this.props.onClickData}
        />
        <Table
          seat={this.props.seat}
          id={16}
          onclick={this.props.onClickData}
        />
        <Table
          seat={this.props.seat}
          id={19}
          onclick={this.props.onClickData}
        />
        <Table
          seat={this.props.seat}
          id={22}
          onclick={this.props.onClickData}
        />
        <Table
          seat={this.props.seat}
          id={25}
          onclick={this.props.onClickData}
        />
        <div className="instructor">
          <p>Instructor</p>
        </div>
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
export default DrawGrid;
