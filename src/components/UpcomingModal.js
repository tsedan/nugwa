import React, { Component } from 'react';
import $ from "jquery";

class UpcomingModal extends Component {
  state = {
    name: "",
    periodDue: ""
  }

  createEvent = () => {
    const item = {};

    item.classDue = document.getElementById('controlPeriod').value;
    item.name = this.state.name;
    item.completed = false;

    this.props.onCreate(item);
  }

  handleChange = event => {
    const target = event.target;
    if (event.target.id === "inputName") {
      const value = target.value;
      this.setState({ name : value });
    }
  }

  componentDidMount() {
    $('#upcomingModal').on('hidden.bs.modal', function(e) {
      $(this).find('#eventForm')[0].reset();
    });
  }

  render() {
    return (
      <div className="modal fade" id="upcomingModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add An Event</h5>
              <button type="button" className="close exit-button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="container-fluid">
                <form id="eventForm">
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Event Name" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="controlPeriod">Relevant Period</label>
                    <select className="form-control" id="controlPeriod" onChange={this.handleChange}>
                      <option>Period A</option>
                      <option>Period B</option>
                      <option>Period C</option>
                      <option>Period D</option>
                      <option>Period E</option>
                      <option>Period F</option>
                      <option>Period G</option>
                      <option>Non school</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Nevermind</button>
              <button type="button" className="btn btn-primary" onClick={this.createEvent} data-dismiss="modal">Create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default UpcomingModal;
