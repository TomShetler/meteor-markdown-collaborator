import React, { Component } from 'react';

export default class BinShared extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email);
  }
  renderShareList() {
    return this.props.bin.sharedWith.map((email) => {
      return <button
        key={email}
        className="btn btn-default">
        {email}
      </button>
    });
  }
  render() {
    return (
      <footer className="bin-shared">
        <div className="input-group">
          <input
            ref="email"
            className="form-control" />
        <div className="input-group-btn">
          <button
            onClick={this.onShareClick.bind(this)}
            className="btn btn-default">
            Share Bin
          </button>
        </div>
      </div>
      <div>
        Shared With:
      </div>
      <div className="btn-group">
        {this.renderShareList()}
      </div>
      </footer>
    );
  }
}
