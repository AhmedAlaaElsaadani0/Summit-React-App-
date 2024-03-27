import React, { Component } from "react";

async function sendErrorDetailsToAPI(errorDetails) {
  try {
    let response = await fetch("https://projects.izitechs.com/Exceptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProjectId: "8d4ba975-4ae7-48d0-9c68-b0e5d66c4516",
        Source: 2,
        Message: JSON.stringify(errorDetails.error),
        StackTrace: JSON.stringify(errorDetails.errorInfo),
      }),
      redirect: "follow",
    });

    console.log(response);
  } catch (error) {
    console.error("Error sending error details to API:", error);
  }
}

class ErrorTracking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  componentDidMount() {
    window.onerror = (msg, url, lineNo, columnNo, error) => {
      alert("An error occurred:"+
        "Error: " + msg+
        "URL: " + url+
        "Line: " + lineNo+
        "Column: " + columnNo+
        "Stack: " + error);
      sendErrorDetailsToAPI({
        error: "Error: " + msg,
        errorInfo: "URL: " + url + " Line: " + lineNo + " Column: " + columnNo + " Stack: " + error,
      });
    }
  }
  componentWillUnmount() {
    window.onerror = null;
  }
  render() {
    return this.props.children;
  }

}

export default ErrorTracking;