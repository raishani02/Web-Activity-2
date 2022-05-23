import React, { Component } from "react";
import InputField from "./input";
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Comments: [],
    };
  }

  handleCallback = (childData) => {
    this.setState({ Comments: childData });
  };

  render() {
    const { Comments } = this.state;
    return (
      <div>
        <div className="my-3">
          {Comments?.map((item, i) => (
            <div
              className=" my-0 d-flex justify-content-center flex-nowrap d-inline"
              key={i}
            >
              <div className="card py-0 w-25 d-inline">
                <div className="card-body">
                  <div className="d-inline">
                    <div className="justify-content-between d-inline">
                    {/* <i classNameName="bi bi-bootstrap-fill "></i> */}
                      <img
                        classNameName="d-inline px-auto py-auto"
                        src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="56"
                        height="45"
                      />
                      <p className="card-text d-inline ms-3">{`${item}`}</p>
                    </div>
                    <div className="d-inline" style={{ float: "right" }}>
                      <p className="card-text d-inline text-muted">now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-100">
          <InputField parentCallback={this.handleCallback} />
        </div>
      </div>
    );
  }
}
export default Comments;
