import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinList extends Component {
  render() {
    console.log(this.props.bins);
    return (
      <div>BinList</div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');

  return { bins: Bins.find({}).fetch() };
}, BinList);
