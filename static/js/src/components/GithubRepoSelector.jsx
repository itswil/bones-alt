import React from 'react';
import AltContainer from 'alt/AltContainer';
import GithubRepoActions from '../actions/GithubRepoActions';
import GithubRepoStore from '../stores/GithubRepoStore';

class GithubRepoList extends React.Component {
  render() {
    return (
      <ul className="github-repo-list">
        {this.props.GithubRepos.map(function(GithubRepo) {
          return <li key={GithubRepo.id}>{GithubRepo.name}</li>;
        })}
      </ul>
    )
  }
};

class GithubRepoSelector extends React.Component {
  componentDidMount() {
    GithubRepoActions.fetchGithubRepos();
  }

  render() {
    return (
      <div className="github-repo-selector">
        <AltContainer store={GithubRepoStore}>
          <GithubRepoList />
        </AltContainer>
      </div>
    );
  }
};

module.exports = GithubRepoSelector;
