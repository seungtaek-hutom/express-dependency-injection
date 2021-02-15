function getMetadata() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 0);
  })
}

async function main() {
  const seriesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const metaDatas = await Promise.all(
    seriesArray.map(series => 
      new Promise((resolve, reject) => {
        Promise.all([
          getMetadata(series.files),
          getMetadata(series.files),
        ])
        .then(resolve)
        .catch(reject)
      })
    )
  )
}