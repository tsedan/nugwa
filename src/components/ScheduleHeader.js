import React, { Component } from 'react';

class ScheduleHeader extends Component {
  render() {
    return (
      <div className="schedule-header heading-div">
        <div className="planner-header">{this.props.userName}'s Planner</div>
        <div className="settings-div">
          <img className="sched-set btn-outline-warning glyph-icon" alt="settings" src="assets/si-glyph-dial-number.svg" data-toggle="modal" data-target="#settingsModal"/>
        </div>
      </div>
    );
  }
}

export default ScheduleHeader;
