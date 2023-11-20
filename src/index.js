import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import FindShow from './api-service';

async function getStreamInfo(titleQuery) {
  const response = await FindShow.searchShow(titleQuery);
  if (response.result) {
    printElements(response, titleQuery);
  } else {
    printError(response, titleQuery);
  }
}
//UI
function printElements(response, titleQuery) {
  const responseDiv = document.querySelector('#result');
  responseDiv.innerHTML = '';
  const h3 = document.createElement('h3');
  h3.innerText = `Results for ${titleQuery}: `;

  const listResults = document.createElement('ul');

  const resultsArray = response.result;
  console.log(resultsArray);
  resultsArray.forEach((result) => {
    console.log(result);
    const listItem = document.createElement('li');
    listItem.innerText = `Title: ${result.title},
    Year: ${result.year},
    Type: ${result.type}`;
    listResults.append(listItem);
  });
  responseDiv.append(h3, listResults);
}

function printError(error, titleQuery) {
  document.querySelector('#result').innerText = `Error for ${titleQuery}: ${error.message}`;
}

function handleForm(e) {
  e.preventDefault();
  document.querySelector('#movieInput').innerText = null;
  const titleQuery = document.querySelector('#movieInput').value;
  getStreamInfo(titleQuery);
}

window.addEventListener("load", function () {
  this.document.querySelector('#search-form').addEventListener("submit", handleForm);
});