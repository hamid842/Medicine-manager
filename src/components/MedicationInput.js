import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import axios from "axios";

class MedicationInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      importantInfo: "",
      usage: "",
      initialCount: "",
      promised: "",
      refillInfo: "",
      pharmacyNotes: ""
    };
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/medicin-infos", this.state)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      name,
      importantInfo,
      usage,
      initialCount,
      promised,
      refillInfo,
      pharmacyNotes
    } = this.state;
    return (
      <div className="card card-body my-3">
        <Button
          color="info"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          add medication
        </Button>

        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label className="text-uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={this.handleChange}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Important Information</label>
                    <input
                      type="text"
                      name="importantInfo"
                      className="form-control"
                      onChange={this.handleChange}
                      value={importantInfo}
                    />
                  </div>
                  <div className="form-group">
                    <label>Usage</label>
                    <input
                      type="text"
                      name="usage"
                      className="form-control"
                      onChange={this.handleChange}
                      value={usage}
                    />
                  </div>
                  <div className="form-group">
                    <label>Initial Count</label>
                    <input
                      type="text"
                      name="initialCount"
                      className="form-control"
                      onChange={this.handleChange}
                      value={initialCount}
                    />
                  </div>
                  <div className="form-group">
                    <label>Promised</label>
                    <input
                      type="text"
                      name="promised"
                      className="form-control"
                      onChange={this.handleChange}
                      value={promised}
                    />
                  </div>
                  <div className="form-group">
                    <label>Refill Information</label>
                    <input
                      type="text"
                      name="refillInfo"
                      className="form-control"
                      onChange={this.handleChange}
                      value={refillInfo}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pharmacy Notes</label>
                    <input
                      type="text"
                      name="pharmacyNotes"
                      className="form-control"
                      onChange={this.handleChange}
                      value={pharmacyNotes}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  color="primary"
                  className="btn btn-block "
                  onClick={this.toggle}
                >
                  Add
                </Button>
              </form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default MedicationInput;
