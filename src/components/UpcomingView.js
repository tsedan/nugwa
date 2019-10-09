import React, { Component } from 'react';
import UpcomingCard from "./UpcomingCard";

class UpcomingView extends Component {

  render() {
    return (
      <div>
        <div className="heading-div">
          <h2 className="heading-float-left">Upcoming</h2>
          <div className="heading-float-right">
            <img className="btn-outline-secondary glyph-icon m-1" alt="addEvent" src="assets/si-glyph-circle-plus.svg" data-toggle="modal" data-target="#upcomingModal"/>
          </div>
        </div>
        <div className="non-header">
          <div className="heading-div">
            {this.handleUpcoming()}
          </div>
        </div>
      </div>
    );
  }

  handleUpcoming = () => {
    const upcoming = this.props.appState.upcoming;
    const listUpcoming = [];
    for (let i = 0; i < upcoming.length; i++) {
      listUpcoming.push(<UpcomingCard appState={this.props.appState} config={upcoming[i]} onComplete={() => { this.props.onComplete(i) }} key={"Upcoming " + i}/>);
    }
    if (listUpcoming.length === 0) {
      return "All tasks completed.";
    }
    return listUpcoming;
  }

}

export default UpcomingView;
