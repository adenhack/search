import { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class App extends Component {
  state = { data: [], arr: ["mesut", "yusuf", "berk", "enes", "hikmet"] }

  renderArray() {
    return (
      <div>
        <ListGroup>
          {
            this.state.data.map((array, index) => (
              <ListGroupItem key={index}>
                {array}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    )
  }

  fullArrayRender() {
    return (
      <div>
        <ListGroup>
          {
            this.state.arr.map((array, index) => (
              <ListGroupItem key={index}>
                {array}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    )
  }

  render() {
    const setOnChange = (e) => {
      this.setState({ data: this.state.arr.filter(filtre => filtre.includes(e.target.value)) })
    }

    return (
      <div className="App" style={{ width: "300px", textAlign: "center" }}>
        <input type="text" onChange={setOnChange} style={{ width: "300px", height: "40px", borderRadius: "5px",textAlign:"center" }} />
        {this.state.data.length > 0 ? this.renderArray() : this.fullArrayRender()}
      </div>
    );
  }
}

