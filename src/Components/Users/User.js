import React, { Fragment, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Spiner from '../layouts/Spiner'
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom'
import { getUserAndRepos } from '../../context/github/actions'
import githubContext from '../../context/github/githubContext'
import { SET_LOADING, GET_USER_AND_REPO } from '../../context/type'



const User = () => {

  const {
    user: {
      name,
      location,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      avatar_url,
      html_url,
      bio,
      company,
      blog
    },
    loading,
    dispatch,
    repos
  } = useContext(githubContext);

  const { login } = useParams();

  useEffect(() => {
    dispatch({ type: SET_LOADING })
    getUserAndRepos(login).then(res => {
      dispatch({ type: GET_USER_AND_REPO, payload: res })
    })
  }, [dispatch, login]);



  if (loading) return <Spiner />;




  return (
    <Fragment>
      <Link to='/' className="btn btn-light">Back to Search</Link>

      Hireable:{' '}
      {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p><strong>Location:</strong> {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );

}


export default User;

