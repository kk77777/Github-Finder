import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      login,
      avatar_url,
      location,
      bio,
      blog,
      public_repos,
      hireable,
      html_url,
      followers,
      following
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>
        Hirable:{' '}
        {hireable === true ? (
          <i className='fas fa-check text-success ' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Github Profile
            </a>
            <ul>
              <li>
                <strong>Username : </strong>
                {login}
              </li>
              <li>
                <strong>Website : </strong>
                {blog}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers : {followers}</div>
          <div className='badge badge-light'>Following : {following}</div>
          <div className='badge badge-dark'> Public Repos: {public_repos}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
