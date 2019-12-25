import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import axios from "axios";

export default class Medication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      id: this.props.id,
      name: this.props.name,
      importantInfo: this.props.importantInfo,
      usage: this.props.usage,
      initialCount: this.props.initialCount,
      promised: this.props.promised,
      refillInfo: this.props.refillInfo,
      pharmacyNotes: this.props.pharmacyNotes
    };
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      isOpen,
      id,
      name,
      importantInfo,
      usage,
      initialCount,
      promised,
      refillInfo,
      pharmacyNotes
    } = this.state;

    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2 ">
          <h6>{this.props.name}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={this.toggle}>
              <i className="fas fa-pen"></i>
            </span>
            <span
              className="mx-2 text-danger"
              onClick={this.props.handleDelete}
            >
              <i className="fas fa-trash"></i>
            </span>
            <div>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    <form onSubmit={this.handleSubmit}>
                      <div className="modal-body">
                        <div className="form-group">
                          <label className="text-uppercase">Id</label>
                          <input
                            type="text"
                            name="id"
                            className="form-control"
                            onChange={this.handleChange}
                            value={id}
                          />
                        </div>
                        <div className="form-group">
                          <label>Name</label>
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
                      // type="submit"
                      // onClick={this.toggle}
                      // className={
                      //   editItem
                      //     ? "btn btn-block btn-success mt-3"
                      //     : "btn btn-block btn-primary mt-3"
                      // }
                      >
                        add
                        {/* {editItem ? "edit item" : "add item"} */}
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
