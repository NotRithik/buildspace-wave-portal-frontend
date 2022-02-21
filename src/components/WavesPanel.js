import React from "react";
import ReactDOM from "react-dom";

import WaveCard from "./WaveCard"

class WavesPanel extends React.Component {
  render() {
    return (
      <div className="waves-panel">
        {
          this.props.addresses == null ? <></> :
            this.props.addresses.map((address) => {
              return (<WaveCard address={address} />);
            })
        }
      </div>
    );
  }
};

export default WavesPanel;