//Example fetch using pokemonapi.co

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  fetch('https://cat-fact.herokuapp.com/facts')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('p').innerText = data[Math.floor(Math.random() * 5)].text
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

 fetch('https://cataas.com/cat?json=true')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = 'https://cataas.com/cat?' + data.url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


