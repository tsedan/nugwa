import React, { Component } from 'react';
import ScheduleHeader from "./components/ScheduleHeader";
import ClassView from "./components/ClassView";
import SettingsModal from "./components/SettingsModal";
import UpcomingModal from "./components/UpcomingModal";
import TodayDescriptor from "./components/TodayDescriptor";
import UpcomingView from "./components/UpcomingView";
import Datum from "./data.js";
import './App.css';

const pic = Datum.pictureNums[Math.floor(Math.random() * Datum.pictureNums.length)];
const url = navigator.onLine ? "url('https://www.gstatic.com/prettyearth/assets/full/" + pic + ".jpg')" : "url('./assets/backgrounds/bg" + Math.ceil(Math.random() * 15) + ".jpg')";

const original = {
  classNames: {
    "Period A":"Period A",
    "Period B":"Period B",
    "Period C":"Period C",
    "Period D":"Period D",
    "Period E":"Period E",
    "Period F":"Period F",
    "Period G":"Period G"
  },
  name: "Anonymous Duck",
  events: {},
  upcoming: [],
  message: "Supercalifragilisticexpialidocious",
  todosEnabled: true,
  colors: {
    "Period A":"F46D6D",
    "Period B":"5585B5",
    "Period C":"0B8457",
    "Period D":"F59D2A",
    "Period E":"6A3CBC",
    "Period F":"E8BA5F",
    "Period G":"916131",
    "Brunch":"545454",
    "Lunch":"545454",
    "FlexTime":"545454",
    "Other":"818D97"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    const vstate = JSON.parse(localStorage.getItem('state'));
    if (vstate !== null) {
      this.state = this.repair(vstate);
    } else {
      this.state = original;
    }
    this.getEvents({
      calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/u5mgb2vlddfj70d7frf3r015h0@group.calendar.google.com/events?key=AIzaSyDtCp1eV5JlY_Smx8wNbXKngun9HZ5J9Ik',
      recurringEvents: true,
      timeMin: Datum.firstDay,
      timeMax: Datum.lastDay
    });
    window.addEventListener("beforeunload", (ev) => {
      localStorage.setItem('state', JSON.stringify(this.state));
      clearInterval();
    });
  }

  resetAll = () => {
    this.setState(original);
  }

  repair(obj) {
    for (let i in original) {
      if (obj[i] === null || obj[i] === undefined) {
        obj[i] = original[i];
      }
    }
    return obj;
  }

  arrayRemove(arr, value) {
    return arr.filter( function (ele) {
      return ele !== value;
    });
  }

  onComplete = index => {
    let vupcoming = this.state.upcoming;
    if (vupcoming[index].completed) {
      vupcoming = this.arrayRemove(vupcoming, vupcoming[index]);
    } else {
      vupcoming[index].completed = true;
    }
    this.setState({ upcoming : vupcoming });
  }

  getEvents(settings) {
    let finalURL = settings.calendarUrl;
    if (settings.recurringEvents) {
      finalURL = finalURL + '&singleEvents=true&orderBy=starttime';
    } if (settings.timeMin) {
      finalURL = finalURL + '&timeMin=' + settings.timeMin;
    } if (settings.timeMax) {
      finalURL = finalURL + '&timeMax=' + settings.timeMax;
    }

    fetch(finalURL).then(res => {
      return res.json();
    }).then(res => {
      const data = renderList(res, settings);
      this.setState({ events : data });
    });
  }

  handleSave = settings => {
    const sett = this.copy(settings);
    this.setState({classNames: sett.classNames});
    this.setState({name: sett.name});
    this.setState({message: sett.message});
    this.setState({todosEnabled: sett.todosEnabled});
    this.setState({colors: sett.colors});
  }

  handleCreate = item => {
    const vupcoming = this.copy(this.state.upcoming);
    vupcoming.push(item);
    this.setState({ upcoming : vupcoming });
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

  getUpcomingView = () => {
    if (!this.state.todosEnabled) { return null; }
    return <UpcomingView appState={this.state} onComplete={this.onComplete}/>;
  }

  render() {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w <= 600) {
      return (
        <div>
          <div className="app">
            <div className="bg-image" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), " + url }}/>
            <div className="mobile-panel">
              <ScheduleHeader userName={this.state.name} />
              <div className="non-header">
                <hr className="horizontal-rule" />
                <TodayDescriptor classNames={this.state.classNames} todosEnabled={this.state.todosEnabled} colors={this.state.colors} upcoming={this.state.upcoming} events={this.state.events} isMobile={true}/>
                <ClassView appState={this.state} />
                {this.getUpcomingView()}
              </div>
            </div>
          </div>
          <SettingsModal appState={this.state} onReset={this.resetAll} onSave={this.handleSave} isMobile={true}/>
          <UpcomingModal onCreate={this.handleCreate} />
        </div>
      );
    }
    return (
      <div>
        <div className="app">
          <div className="bg-image" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), " + url }}/>
          <div className="holderFilter"/>
          <h2 className="name-header m-3">{this.state.message}</h2>
          <div className="today-info">
            <h3 className="m-3">It's {Datum.dayNames[(new Date()).getDay()]}, {Datum.monthNames[(new Date()).getMonth()]} {(new Date()).getDate()}</h3>
            <TodayDescriptor classNames={this.state.classNames} todosEnabled={this.state.todosEnabled} colors={this.state.colors} upcoming={this.state.upcoming} events={this.state.events} isMobile={false}/>
          </div>
          <div className="hover-div">
            <div className="movement-div">
              <div className="schedule-panel">
                <ScheduleHeader userName={this.state.name} />
                <div className="non-header">
                  <hr className="horizontal-rule" />
                  <ClassView appState={this.state} />
                  {this.getUpcomingView()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SettingsModal appState={this.state} onReset={this.resetAll} onSave={this.handleSave} isMobile={false}/>
        <UpcomingModal onCreate={this.handleCreate} />
      </div>
    );
  }
}

function comp(a, b) {
  return new Date(a.start.dateTime || a.start.date).getTime() - new Date(b.start.dateTime || b.start.date).getTime();
}

function renderList(data, settings) {
  let result = [];

  result = data.items.filter(function (item) {
    return item && item.hasOwnProperty('status') && item.status !== 'cancelled';
  }).sort(comp);

  return parseEvents(result);
}

function parseEvents(events) {
  let i;
  let newEvents = [];

  for (i in events) {
    let event = events[i];
    let newEvent = {"summary":parseSumm(event.summary), "description":parseDesc(event.description), "start":event.start, "end":event.end}
    newEvents[i] = newEvent;
  }

  return newEvents;
}

function parseDesc(desc) {
  if (desc !== undefined) {
    const newD = desc.replace(/<(?:.|\n)*?>/gm, '').split(',').join('').split(') ').join(')').split('\n').join('').split('.').join('').replace(/&nbsp;/g, '');
    return newD;
  }
  return "";
}

function parseSumm(summary) {
  if (summary !== undefined) {
    const newS = summary.replace(/<(?:.|\n)*?>/gm, '').replace('(','').replace(')','').split('.').join('').replace(/&nbsp;/g, '');
    return newS;
  }
  return "";
}

export default App;
