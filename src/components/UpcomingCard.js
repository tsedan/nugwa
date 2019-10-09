import React, { Component } from 'react';

class UpcomingCard extends Component {
  getCompletion = () => {
    if (this.props.config.completed) {
      return <span className="badge badge-success text-white">COMPLETED</span>;
    }
    return <span className="badge badge-warning text-white">NOT DONE</span>;
  }

  getClassDue = () => {
    if (this.props.config.classDue === "Non school") {
      return "";
    }
    return <React.Fragment>Due <span className={"class-badge"} style={{ background: "#" + this.getClassColor(this.props.config.classDue) }}>{this.props.appState.classNames[this.props.config.classDue]}</span></React.Fragment>;
  }

  getClassColor(period) {
    if (this.props.appState.colors[period] != null) {
      return this.props.appState.colors[period];
    } else {
      return this.props.appState.colors["Other"];
    }
  }

  sameDay(d1, d2) {
    d1 = new Date(d1);
    d2 = new Date(d2);
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  }

  render() {
    const divClass = "upcoming-div";

    return (
      <div className="upcoming-card-div">
        <div className={divClass} style={{ background: "#545454" }}>
          <p className="card-name">{this.props.config.name}</p>
          <p className="card-done">{this.getCompletion()}</p>
          <p className="card-due-class">{this.getClassDue()}</p>
        </div>
        {this.completeDiv()}
      </div>
    );
  }

  completeDiv() {
    if (!this.props.config.completed) {
      return (<div className="finish-div badge-success">
        <button className="close center-exit" onClick={this.props.onComplete}>
          <img className="sched-set btn-outline-success glyph-icon" alt="finish" src="assets/si-glyph-checked.svg"/>
        </button>
      </div>);
    }

    return (<div className="finish-div badge-warning">
      <button className="close center-exit" onClick={this.props.onComplete}>
        <img className="sched-set btn-outline-warning glyph-icon" alt="finish" src="assets/si-glyph-delete.svg"/>
      </button>
    </div>);
  }

}

export default UpcomingCard;
