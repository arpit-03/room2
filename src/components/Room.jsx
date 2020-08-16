import React, { Component } from "react";
import Seatmini from "./Seatmini";
class Room extends Component {
  state = {};
  render() {
    return (<div className="class-mini-head">
  <div className="container-mini">
       <div className="container-mini-sub">
        <Seatmini seat={this.props.seat} id={0} onclick={this.props.onClickData} />
        <Seatmini seat={this.props.seat} id={4} onclick={this.props.onClickData} />
        <Seatmini seat={this.props.seat} id={7} onclick={this.props.onClickData} />
        <Seatmini
          seat={this.props.seat}
          id={10}
          onclick={this.props.onClickData}
        />
        <Seatmini
          seat={this.props.seat}
          id={13}
          onclick={this.props.onClickData}
        />
        <Seatmini
          seat={this.props.seat}
          id={16}
          onclick={this.props.onClickData}
        />
        <Seatmini
          seat={this.props.seat}
          id={19}
          onclick={this.props.onClickData}
        />
        <Seatmini
          seat={this.props.seat}
          id={22}
          onclick={this.props.onClickData}
        />
        <Seatmini
          seat={this.props.seat}
          id={25}
          onclick={this.props.onClickData}
        />
        </div>
        <div className="instructor-mini">
          <p> </p>
        </div>
      </div>
    </div>);
  }
}

export default Room;
