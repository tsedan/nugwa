import React, { Component } from 'react';
import Datum from "../data.js";

class TodayDescriptor extends Component {
  state = {
    now: new Date()
  }

  componentDidMount() {
    this.dateUpdate = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dateUpdate);
  }

  render() {
    if (this.props.isMobile === false) {
      return (
        <h4 className="m-3">
          {this.handleClass()}
          {this.props.todosEnabled ? this.handleAssignments() : null}
        </h4>
      );
    } else {
      return (
        <h4 className="mobile-desc">
          {this.handleClass()}
          {this.props.todosEnabled ? this.handleAssignments() : null}
        </h4>
      );
    }
  }

  handleAssignments = () => {
    const assin = this.props.upcoming;
    let finalL = [];
    for (let i = 0; i < assin.length; i++) {
      if (assin[i].completed === false) {
        finalL.push(assin[i]);
      }
    }

    if (finalL.length === 0) {
      return <div>All tasks completed</div>;
    } else if (finalL.length === 1) {
      return <div><span className="assign-badge" style={{ background: "#545454" }}>1</span> task to complete</div>;
    }
    return <div><span className="assign-badge" style={{ background: "#545454" }}>{finalL.length}</span> tasks to complete</div>;
  }

  handleClass = () => {
    const nextClass = this.findNext(this.state.now);
    if (nextClass != null) {
      document.title = (this.props.classNames[nextClass.name] != null ? this.props.classNames[nextClass.name] : nextClass.name) + " " + nextClass.suffix + " in " +this.formatTime(nextClass.time);
      return <div className="p-b-10">{this.formatClass(nextClass.name)} {nextClass.suffix} in <strong>{this.formatTime(nextClass.time)}</strong></div>
    }

    document.title = "NUGWA";
    return <div className="p-b-10">School's Out for the Day</div>;
  }

  findNext = date => {
    const schedule = this.parseSchedule(this.getAlternateSchedule(date), date);
    const timeNow = [date.getHours(), date.getMinutes()];

    for (let i in schedule) {
      const startTime = [parseInt(schedule[i].start.split(":")[0], 10), parseInt(schedule[i].start.split(":")[1], 10)];
      if ((timeNow[0] < startTime[0]) || ((timeNow[0] === startTime[0]) && (timeNow[1] < startTime[1]))) {
        let differenceHours = startTime[0] - timeNow[0];
        let differenceMinutes = startTime[1] - timeNow[1];

        if (differenceMinutes < 0) {
          differenceHours -= 1;
          differenceMinutes = 60 + differenceMinutes;
        }

        let diffString = differenceHours + ":" + differenceMinutes;

        return { name:schedule[i].name, time:diffString, suffix:"starts" };
      }
      const endTime = [parseInt(schedule[i].end.split(":")[0], 10), parseInt(schedule[i].end.split(":")[1], 10)];
      if ((timeNow[0] < endTime[0]) || ((timeNow[0] === endTime[0]) && (timeNow[1] < endTime[1]))) {
        let differenceHours = endTime[0] - timeNow[0];
        let differenceMinutes = endTime[1] - timeNow[1];

        if (differenceMinutes < 0) {
          differenceHours -= 1;
          differenceMinutes = 60 + differenceMinutes;
        }

        let diffString = differenceHours + ":" + differenceMinutes;

        if (i < schedule.length) {
          return { name:schedule[i].name, time:diffString, suffix:"ends" };
        }

        return { name:"School", time:diffString, suffix:"ends" };
      }
    }

    return null;
  }

  copy(o) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
      v = o[key];
      output[key] = (typeof v === "object") ? this.copy(v) : v;
    }
    return output;
  }

  formatTime = (time) => {
    let hrs = parseInt(time.split(":")[0], 10)
    let mins = parseInt(time.split(":")[1], 10)

    if (hrs === 0) {
      return mins + " min" + this.isPlural(mins);
    } else {
      if (mins === 0) {
        return hrs + " hr" + this.isPlural(hrs);
      } else {
        return hrs + " hr" + this.isPlural(hrs) + " " + mins + " min" + this.isPlural(mins);
      }
    }
  }

  isPlural(num) {
    if (num !== 1) {
      return "s";
    }

    return "";
  }

  formatClass = theClass => {
    if (theClass != null) {
      const classClass = "class-badge";
      return <span className={classClass} style={{ background: "#" + this.getClassColor(theClass) }}>{(this.props.classNames[theClass] != null ? this.props.classNames[theClass] : theClass)}</span>
    }

    return null;
  }

  getClassColor(period) {
    if (this.props.colors[period] != null) {
      return this.props.colors[period];
    } else {
      return this.props.colors["Other"];
    }
  }

  parseSchedule = (sched, date) => {
    if (sched == null) {
      return Datum.normalSchedules[date.getDay()];
    } else {
      let splitten = sched.description.split(")");
      splitten.splice(-1,1);
      let names = splitten.map(x => x.split(" (")[0]);
      let times = splitten.map(x => x.split(" (")[1]);

      times = times.map(x => x.split("-"));

      let convertNext = false;
      for (let x in times) {
        if (convertNext) {
          times[x][0] = String(parseInt(times[x][0].split(":")[0], 10) + 12) + ":" + times[x][0].split(":")[1]
          times[x][1] = String(parseInt(times[x][1].split(":")[0], 10) + 12) + ":" + times[x][1].split(":")[1]
          continue;
        }
        if (parseInt(times[x][0].split(":")[0], 10) > parseInt(times[x][1].split(":")[0], 10)) {
          convertNext = true;
          times[x][1] = String(parseInt(times[x][1].split(":")[0], 10) + 12) + ":" + times[x][1].split(":")[1]
        }
      }

      let i;
      for (i in splitten) {
        splitten[i] = { name:names[i], start:times[i][0], end:times[i][1] };
      }
      return splitten;
    }
  }

  getAlternateSchedule = date => {
    let filteredEvents = this.filterEventsByDate(date);

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
    let datesEvents = [];
    for (let i = 0; i < this.props.events.length; i++) {
      let startDate = (this.props.events[i].start.date || (this.props.events[i].start.dateTime.split("T"))[0]).split("-");
      startDate = new Date(startDate[0],(startDate[1] - 1),startDate[2]);
      if (this.sameDay(startDate, date)) {
        datesEvents.push(this.props.events[i]);
      }
    }
    return datesEvents;
  }

  sameDay(d1, d2) {
    d1 = new Date(d1);
    d2 = new Date(d2);
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  }

}

export default TodayDescriptor;
