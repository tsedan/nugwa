import React, { Component } from 'react';
import Datum from "../data.js";
import SchedHandler from './SchedHandler.js';
import ClassCard from "./ClassCard.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const childFactoryMake = (classNames) => (
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )
);

class ClassView extends Component {
  state = {
    today:new Date(),
    direction: "slide-forwards",
    height: 0
  };

  render() {
    return (
      <div>
        <div className="heading-div">
          <h2 className="heading-float-left">{Datum.dayNames[this.state.today.getDay()]}</h2>
          <div className="heading-float-right">
            <img className="btn-outline-secondary glyph-icon" onClick={this.yesterday} alt="yesterday" src="assets/si-glyph-arrow-left.svg"/>
            <img className="btn-outline-secondary glyph-icon m-1" onClick={this.today} alt="today" src="assets/si-glyph-circle.svg"/>
            <img className="btn-outline-secondary glyph-icon" onClick={this.tomorrow} alt="tomorrow" src="assets/si-glyph-arrow-right.svg"/>
          </div>
        </div>
        <div className="non-header">
          <div className="heading-div">
            <div className="heading-float-left">
              <p className="month-p no-margin">{Datum.monthNames[this.state.today.getMonth()] + " " + this.state.today.getDate()}</p>
            </div>
            <div className="heading-float-right">
              {this.alternatesLoaded()}
            </div>
          </div>
          <div className="non-header">
            <TransitionGroup id="transGroup" childFactory={childFactoryMake(this.state.direction)}>
              <CSSTransition
                key={"Trans " + this.state.today.getDate()}
                classNames={this.state.direction}
                timeout={200}
                id="cssTrans"
                onEntering={() => {
                  this.child.doubleElement();
                }}
                onExited={() => { setTimeout(() => {
                  this.child.singleElement();
                },10) }}
                >
                {this.handleSchedule()}
              </CSSTransition>
            </TransitionGroup>
            <SchedHandler onRef={ref => (this.child = ref)} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.child.singleElement();
  }

  alternatesLoaded = () => {
    if (this.props.appState.events === undefined) {
      return <span className="assign-badge red">No Alts</span>;
    }

    return "";
  }

  yesterday = () => {
    this.setState({ direction: "slide-backwards" });
    let tm = new Date(this.state.today.getTime() - 86400000);
    this.setState({today: tm});
  }

  today = () => {
    if (!this.sameDay(this.state.today,new Date())) {
      if (this.before(this.state.today,new Date())) {
        this.setState({ direction: "slide-forwards" });
        let tm = new Date();
        this.setState({today: tm});
      } else {
        this.setState({ direction: "slide-backwards" });
        let tm = new Date();
        this.setState({today: tm});
      }
    }
  }

  before(d1, d2) {
    return d1.getFullYear() < d2.getFullYear() || (d1.getFullYear() === d2.getFullYear() && (d1.getMonth() < d2.getMonth() || (d1.getMonth() === d2.getMonth() && d1.getDate() < d2.getDate())));
  }

  tomorrow = () => {
    this.setState({ direction: "slide-forwards" });
    let tm = new Date(this.state.today.getTime() + 86400000);
    this.setState({today: tm});
  }

  handleSchedule() {
    return this.createCards(this.getSchedule(this.isAlternateSchedule(this.state.today),this.state.today));
  }

  isAlternateSchedule = (d) => {
    let filteredEvents = this.filterEventsByDate(d);

    return this.findAlternate(filteredEvents);
  }

  findAlternate(events) {
    for (let i in events) {
      for (let x in events[i].summary.split(" ")) {
        if (Datum.keywords.indexOf(events[i].summary.split(" ")[x].toLowerCase()) >= 0) {
          return events[i];
        }
      }
    }

    return null;
  }

  filterEventsByDate = date => {
    let x = 0;
    let datesEvents = [];
    for (let i in this.props.appState.events) {
      let startDate = (this.props.appState.events[i].start.date || (this.props.appState.events[i].start.dateTime.split("T"))[0]).split("-");
      startDate = new Date(startDate[0],(startDate[1] - 1),startDate[2]);
      if (this.sameDay(startDate, date)) {
        datesEvents[x] = this.props.appState.events[i];
        x++;
      }
    }
    return datesEvents;
  }

  sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  }

  getSchedule(alternate, date) {
    if (alternate == null) {
      return Datum.normalSchedules[date.getDay()];
    } else {
      if (alternate.description === "" || alternate.description == null) {
        return null;
      } else {
        let splitten = alternate.description.split(")");
        splitten.splice(-1,1);
        splitten = splitten.map(x => x.split(" (")[0]);
        for (let i in splitten) {
          splitten[i] = { name:splitten[i] };
        }
        return splitten;
      }
    }
  }

  createCards(schedule) {
    if (schedule != null) {
      let i;
      let cards = [];
      for (i in schedule) {
        cards[i] = <ClassCard appState={this.props.appState} period={schedule[i].name} key={"class " + i + " " + Math.random().toString()}/>
      }
      return <div id="cardHolder" className="card-holder" key={"cardHolder " + Math.random().toString()}>{cards}</div>;
    } else {
      return <div id="noSchool" className="no-school" key={"noSchoolImage " + Math.random().toString()} />
    }
  }
}

export default ClassView;
