const init = () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',e => {
    e.preventDefault()
    let input = e.target.searchByID.value
    fetchIt(input)
    form.reset()

    function fetchIt(inpt) {
        fetch(`http://localhost:3000/movies/${inpt}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
            
            title.innerText = data.title;
            summary.innerText = data.summary;
          });
    }
  })
}

document.addEventListener('DOMContentLoaded', init);