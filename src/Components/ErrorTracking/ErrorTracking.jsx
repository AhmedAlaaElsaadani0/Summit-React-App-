import React, { Component } from "react";

async function sendErrorDetailsToAPI(errorDetails) {
  try {
    let response = await fetch("https://projects.izitechs.com/Exceptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProjectId: "e31b412d-258c-4ef7-ba62-14379fc64df7",
        Source: 2,
        Message: JSON.stringify(errorDetails.error),
        StackTrace: JSON.stringify(errorDetails.errorInfo),
      }),
      redirect: "follow",
    });
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