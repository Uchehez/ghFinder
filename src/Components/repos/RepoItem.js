import React from 'react'
import PropTypes from 'prop-types'


const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p><strong>Date created:</strong> {repo.created_at}</p>
    </div>
  )
}


RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem