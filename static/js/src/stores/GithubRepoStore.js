import alt from '../alt';
import GithubRepoActions from '../actions/GithubRepoActions';

class GithubRepoStore {
  constructor() {
    this.GithubRepos = [];

    this.bindListeners({
      handleUpdateGithubRepos: GithubRepoActions.UPDATE_GITHUB_REPOS,
    });
  }

  handleUpdateGithubRepos(GithubRepos) {
    this.GithubRepos = GithubRepos;
  }
}

module.exports = alt.createStore(GithubRepoStore, 'GithubRepoStore');
