import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      login,
      avatar_url,
      location,
      bio,
      public_repos,
      hirable,
      html_url,
      message
    } = this.props.user;

    const { loading } = this.props;
    console.log(message);
    return <div>{name}</div>;
  }
}

export default User;
