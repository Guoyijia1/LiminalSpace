
    document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();

  
  const q1Answer = document.querySelector('input[name="q1"]:checked').value;
  const q2Answer = document.querySelector('input[name="q2"]:checked').value;
  const q3Answer = document.querySelector('input[name="q3"]:checked').value;
  const q4Answer = document.querySelector('input[name="q4"]:checked').value;

  

  const resultData = {
    result1: {
      score: 0,
      link: 'https://tak.itch.io/tempres'
    },
    result2: {
      score: 0,
      link: 'https://anttihaavikko.itch.io/claustrowordia'
    },
    result3: {
      score: 0,
      link: 'https://olivierguillaume.itch.io/quantum-splitter-ld'
    },
    result4: {
      score: 0,
      link: 'https://visibleworld.itch.io/first-frog'
    }
  };


  const scores = {
    result1: 0,
    result2: 0,
    result3: 0,
    result4: 0
  };

  scores[q1Answer]++;
  scores[q2Answer]++;
  scores[q3Answer]++;
  scores[q4Answer]++;

  // Find the highest score (final result)
  let highestScore = 0;
let finalResult = '';

for (const result in scores) {
if (scores[result] > highestScore) {
highestScore = scores[result];
finalResult = result;
}
}

const finalResultLink = resultData[finalResult].link;


// Display the final result
//alert('Your final result is: ' + finalResult + '\n\nClick OK to visit the link: ' + finalResultLink);


const confirmation = confirm('Your final result is: ' + finalResult + '\n\nClick OK to visit the link.');

  if (confirmation) {
    window.open(finalResultLink, '_blank'); // Open link in a new tab
  }

});






