function getToken() {
  const token = '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(r => showResults(r));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = json.html_url;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let titleContent = document.getElementById('title').value;
  let bodyContent = document.getElementById('body').value;
  fetch('https://api.github.com/repos/hkleindl/js-ajax-fetch-lab/issues', {
    method: 'POST',
    title: titleContent,
    body: bodyContent,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  )
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/hkleindl/js-ajax-fetch-lab/issues', {
    method: 'GET'
  }).then(res => res.json())
    .then(json => document.getElementById('issues').innerHTML = json);
}
