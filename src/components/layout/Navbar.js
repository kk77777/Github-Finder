import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github-Finder',
    icon: 'fab fa-github fa-2x'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav class='bg-primary'>
        <h1>
          <i class={this.props.icon}> {this.props.title}</i>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
