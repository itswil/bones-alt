import alt from '../alt';

class GithubRepoActions {
  updateGithubRepos(GithubRepos) {
    this.dispatch(GithubRepos);
  }

  updateGithubReposError(error) {
    console.log(error);
  }

  fetchGithubRepos() {
    this.dispatch();

    var url = '//api.github.com/users/itswil/repos';
    // var url = '//localhost:3003/db';

    fetch(url, {
        method: 'GET'
      })
    .then(function(response) {
      return response.json();
    })
    .then(this.actions.updateGithubRepos)
    .catch(this.actions.updateGithubReposError);

  }
}

module.exports = alt.createActions(GithubRepoActions);
