import React, { Component } from "react";
import "./App.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";
import Select from "react-select";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      jsonList: []
    };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/bVDxTQSDQO?indent=2", {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonList: json
        });
      })
      .catch(error => console.log(error));
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption: selectedOption ? selectedOption : "" });
  }

  render() {
    const { selectedOption } = this.state;

    const selectList = this.state.jsonList.map(json => {
      return {
        value: json.name,
        label: json.name
      };
    });

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Fernanda's Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Data Views" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">List</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Search</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col sm={12}>
              <h1>Fernanda's Page</h1>
              <p>lorem lorem lorem</p>

              <Row>
                <Col sm={3}>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange.bind(this)}
                    options={selectList}
                  />
                </Col>
              </Row>

              <hr />

              <Row>
                <Col sm={9}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.jsonList.map(item => {
                        if (
                          this.state.selectedOption === "" ||
                          item.name === this.state.selectedOption
                        ) {
                          
                          return (
                            <tr>
                              <td>{item.name}</td>
                              <td>{item.address}</td>
                              <td>{item.age}</td>
                              <td>{item.company}</td>
                            </tr>
                          )
                        }
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
