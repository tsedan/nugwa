import React, { Component } from 'react';
import Datum from "../data.js";

class ClassCard extends Component {
  render() {
    const divClass = "class-card-div";
    return (
      <div className={divClass} style={{ background: "#" + this.getClassColor(this.props.period) }}>
        <p className="card-identifier">{this.getDataClassName(this.props.period)}</p>
        <p className="card-name">{this.getClassName(this.props.period)}</p>
      </div>
    );
  }

  getClassColor(period) {
    if (this.props.appState.colors[period] != null) {
      return this.props.appState.colors[period];
    } else {
      return this.props.appState.colors["Other"];
    }
  }

  getClassName(period) {
    if (this.props.appState.classNames[period] != null) {
      return this.props.appState.classNames[period];
    } else {
      if (period !== "Lunch" && period !== "Brunch" && period !== "FlexTime") {
        const newPeriod = period.split(" ");
        let newP = "";

        for (let i = 0; i < 4; i++) {
          if (newPeriod[i] != null) {
            newP += newPeriod[i] + " ";
          }
        }

        return newP;
      }
      return null;
    }
  }

  getDataClassName(period) {
    if (Datum.classNames[period] != null) {
      return Datum.classNames[period];
    } else {
      return null;
    }
  }

}

export default ClassCard;
