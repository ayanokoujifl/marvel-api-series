window.onload = async () => {
  const container = document.querySelector('#characters-container')
  let arr = []

  for (i = 4; i <= 44; i++) {
    arr.push(
      await fetch(
        `https://gateway.marvel.com/v1/public/series/${i}?ts=1&apikey=d8c3803ccd948ebabbc4da84fda16dd0&hash=57bc55842c425353bd5b9e88e262c7fc`
      ).then((response) => {
        return response.json()
      })
    )
  }

  let fetchSeries = Promise.all(arr)

  fetchSeries.then((data) => {
    data.map((serie) => {
      let div = document.createElement('div')
      div.innerHTML = `<img src="${serie.data.results[0].thumbnail.path}.${
        serie.data.results[0].thumbnail.extension
      }" alt="" />
        <p>
        ${serie.data.results[0].title}<br>${
        serie.data.results[0].description
          ? serie.data.results[0].description
          : serie.data.results[0].resourceURI
      }
      </p>
      `

      container.append(div)
    })
  })
}
