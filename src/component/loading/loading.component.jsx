import React from 'react';

import "./loading.styles.scss";

class Loading extends React.Component {
  constructor(props) {
    super ();
    this.isLoading = props.isLoading;
  }

  render() {
    if (this.isLoading) {
      return (
        <div className="loading">
          <div className="backdrop">
            <div className="dual-ring"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Loading;