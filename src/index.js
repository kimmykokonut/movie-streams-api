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
  responseDiv.append(h3);
  const results = response.result;
  console.log(results);
  
  const p = document.createElement('p');
  responseDiv.append(p);
  p.innerText = `Search term: ${titleQuery}, 
  Title found: ${response.result[0].title}; 
  Streaming option: ${response.result[0].streamingInfo.us[0].service}, 
  Streaming type: ${response.result[0].streamingInfo.us[0].streamingType}, 
  Price: $${response.result[0].streamingInfo.us[0].price.amount}`; //some things don't have a price and it errors.
}

function printError(error, titleQuery) {
  document.querySelector('#result').innerText = `Error for ${titleQuery}: ${error.message}`;
  console.log(error);
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