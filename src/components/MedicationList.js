import React, { Component } from "react";
import Medication from "./Medication";
import axios from "axios";

export default class MedicationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/medicin-infos")
      .then(response => {
        console.log(response.data);
        this.setState({ list: response.data });
      })

      .catch(error => console.log(error));
    console.log(this.state);
  }

  handleDelete = id => {
    const filteredItems = this.state.list.filter(item => item.id !== id);
    this.setState({
      list: filteredItems
    });
    axios
      .delete(`http://localhost:8080/api/medicin-infos/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">medication list</h3>
          {list.map(item => {
            return (
              <Medication
                key={item.id}
                name={item.name}
                list={this.state.list}
                handleDelete={() => this.handleDelete(item.id)}
                id={item.id}
                name={item.name}
                importantInfo={item.importantInfo}
                usage={item.usage}
                initialCount={item.initialCount}
                promised={item.promised}
                refillInfo={item.refillInfo}
                pharmacyNotes={item.pharmacyNotes}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
