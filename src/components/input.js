import React, { Component } from "react";

class input_field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Comments: [],
      input_value: ""
    };
  }

  handleChange = (event) => {
    this.setState({ input_value: event.target.value });
    
  };

  onCallback = () => {
    this.props.parentCallback(this.state.Comments);
  };

  report = () => {
    if(this.state.input_value.trim().length>0){
      this.setState(
        { Comments: [...this.state.Comments, this.state.input_value] },
        () => {
          this.onCallback();
        }
      );
      this.setState(this.state.input_value="")
    }
  };

  render() {
    
    return (
      <div>
        <div id="myInput1">
          <input
            type="text"
            className="form-control m-auto"
            value={this.state.input_value}
            onChange={this.handleChange}
            style={{"width":"80%"}}
          />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="button" className="btn btn-success" onClick={this.report}>
            Post
          </button>
        </div>
      </div>
    );
  }
}
export default input_field;
