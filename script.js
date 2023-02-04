window.onload = () => {
  const container = document.querySelector('#characters-container')
  let arr = []

  for (i = 4; i <= 44; i++) {
    arr.push(
      fetch(
        `https://gateway.marvel.com/v1/public/series/${i}?ts=1&apikey=d8c3803ccd948ebabbc4da84fda16dd0&hash=57bc55842c425353bd5b9e88e262c7fc&limit=20`
      ).then((response) => {
        return response.json()
      })
    )
  }

  let fetchSeries = Promise.all(arr)

  fetchSeries.then((data) => {
    data.map((serie) => {
      let div = document.createElement('div')
      div.innerHTML = `<img src="${serie.data.results[0].thumbnail.path}.${serie.data.results[0].thumbnail.extension}" alt="" />
      `
      container.append(div)
    })
  })
}
