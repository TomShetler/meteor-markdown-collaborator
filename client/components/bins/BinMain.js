import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinEditor from './BinEditor';

class BinMain extends Component {
  render() {
    return (
      <BinEditor bin={this.props.bin}/>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');

  return { bin: Bins.findOne(binId) };
}, BinMain);
