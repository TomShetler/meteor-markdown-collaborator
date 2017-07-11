import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinEditor from './BinEditor';
import BinViewer from './BinViewer';
import BinShared from './BinShared';

class BinMain extends Component {
  render() {
    if (!this.props.bin) { return <div>Loading...</div> }
    return (
      <div>
        <BinEditor bin={this.props.bin}/>
        <BinViewer bin={this.props.bin}/>
        <BinShared bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bin: Bins.findOne(binId) };
}, BinMain);
