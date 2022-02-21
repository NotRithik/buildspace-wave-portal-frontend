import React from "react";
import ReactDOM from "react-dom";

class WaveCard extends React.Component {
  render() {
    return (
      <div className="wave-card">
        {this.props.address == null ? <></> : this.props.address}
      </div>
    );
  }
};

export default WaveCard;