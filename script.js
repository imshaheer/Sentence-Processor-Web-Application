var sentenceInput = document.getElementById('sentenceInput');
var processButton = document.getElementById('processButton');
var resultDiv = document.getElementById('result');

processButton.addEventListener('click', processSentence);

function processSentence() {
  var sentence = sentenceInput.value;

  mockServerProcess(sentence)
    .then(function(result) {

      displayResult(result);
    })
    .catch(function(error) {
      displayResult('Error: ' + error.message);
    });
}

function mockServerProcess(sentence) {
  return new Promise(function(resolve, reject) {

    setTimeout(function() {

      var processedResult = sentence.toUpperCase();
      resolve(processedResult);
    
    }, 2000);
  });
}

function displayResult(result) {
  resultDiv.textContent = 'Processed Result: ' + result;
}

