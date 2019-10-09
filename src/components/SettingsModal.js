import React, { Component } from 'react';
import $ from "jquery";

class SettingsModal extends Component {
  constructor(props) {
    super(props);

    const appState = this.copy(props.appState);

    this.state = {
      classNames: appState.classNames,
      name: appState.name,
      message: appState.message,
      todosEnabled: appState.todosEnabled,
      colors: appState.colors,
      resetText: "Reset"
    };
  }

  componentDidMount() {
    $('#settingsModal').on('hidden.bs.modal', function(e) {
      $(this).find('#settingsForm')[0].reset();
    });
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

  saveSettings = () => {
    this.props.onSave(this.state);
  }

  resetSettings = () => {
    if (this.state.resetText === "Reset") {
      this.setState({ resetText: "Confirm" });
    } else {
      this.props.onReset();
      const appState = this.copy(this.props.appState);

      this.setState({
        classNames: appState.classNames,
        name: appState.name,
        message: appState.message,
        todosEnabled: appState.todosEnabled,
        colors: appState.colors,
        resetText: "Reset"
      });
    }
  }

  handleChange = event => {
    const target = event.target;
    if (event.target.id === "inputName") {
      const value = target.value;

      this.setState({ name : value });
    } else if (event.target.id === "inputMessage") {
      const value = target.value;

      this.setState({ message : value });
    } else if (event.target.id === "toggleTodos") {
      this.setState({ todosEnabled : !this.state.todosEnabled });
    } else if (event.target.id === "inputColor") {
      const value = target.value;
      const name = target.dataset.name;

      let tempClassC = this.state.colors;
      tempClassC[name] = value;

      this.setState({
        colors: tempClassC
      });
    } else {
      const value = target.value;
      const name = target.dataset.name;

      let tempClassN = this.state.classNames;
      tempClassN[name] = value;

      this.setState({
        classNames: tempClassN
      });
    }
  }

  render() {
    return (
      <div className="modal fade" id="settingsModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Settings</h5>
              <button type="button" className="close exit-button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="container-fluid">
                <form id="settingsForm">
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="inputPeriodA">Period A</label>
                      <input type="text" className="form-control" id="inputPeriodA" data-name="Period A" placeholder={this.state.classNames["Period A"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period A"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period A" placeholder={this.state.colors["Period A"]} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="inputPeriodB">Period B</label>
                      <input type="text" className="form-control" id="inputPeriodB" data-name="Period B" placeholder={this.state.classNames["Period B"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                        <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period B"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period B" placeholder={this.state.colors["Period B"]} onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="inputPeriodC">Period C</label>
                      <input type="text" className="form-control" id="inputPeriodC" data-name="Period C" placeholder={this.state.classNames["Period C"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                        <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period C"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period C" placeholder={this.state.colors["Period C"]} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="inputPeriodD">Period D</label>
                      <input type="text" className="form-control" id="inputPeriodD" data-name="Period D" placeholder={this.state.classNames["Period D"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                        <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period D"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period D" placeholder={this.state.colors["Period D"]} onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="inputPeriodE">Period E</label>
                      <input type="text" className="form-control" id="inputPeriodE" data-name="Period E" placeholder={this.state.classNames["Period E"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                        <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period E"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period E" placeholder={this.state.colors["Period E"]} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="inputPeriodF">Period F</label>
                      <input type="text" className="form-control" id="inputPeriodF" data-name="Period F" placeholder={this.state.classNames["Period F"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                        <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period F"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period F" placeholder={this.state.colors["Period F"]} onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="inputPeriodG">Period G</label>
                      <input type="text" className="form-control" id="inputPeriodG" data-name="Period G" placeholder={this.state.classNames["Period G"]} onChange={this.handleChange} />
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                        <div className="input-group-text text-white" style={{ background: "#" + this.state.colors["Period G"] }}>#</div>
                        </div>
                        <input type="text" className="form-control" id="inputColor" data-name="Period G" placeholder={this.state.colors["Period G"]} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="inputName">Name</label>
                      <input type="text" className="form-control" id="inputName" placeholder={this.state.name} onChange={this.handleChange} />
                    </div>
                  </div>
                  {this.getMessage()}
                </form>
              </div>
            </div>

            <div className="modal-footer">
              <div className="force-left form-check">
                <div className="inline-block">
                  <input type="checkbox" className="form-check-input" id="toggleTodos" defaultChecked={this.state.todosEnabled} onChange={this.handleChange} />
                  <label className="form-check-label" htmlFor="toggleTodos">Upcoming</label>
                </div>
                <div className="inline-block">
                  <input type="checkbox" className="form-check-input" id="toggleShortcuts" />
                  <label className="form-check-label" htmlFor="toggleShortcuts">Shortcuts</label>
                </div>
              </div>
              <button type="button" className={"btn btn-outline-" + (this.state.resetText !== "Reset" ? "warning" : "danger")} onClick={this.resetSettings} data-dismiss={this.state.resetText !== "Reset" ? "modal" : ""}>{this.state.resetText}</button>
              <button type="button" className="btn btn-primary" onClick={this.saveSettings} data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getMessage = () => {
    if (!this.props.isMobile) {
      return (<div className="row">
          <div className="col form-group">
            <label htmlFor="inputMessage">Welcome Message</label>
            <input type="text" className="form-control" id="inputMessage" placeholder={this.state.message} onChange={this.handleChange} />
          </div>
        </div>);
    }
    return null;
  }
}

export default SettingsModal;
