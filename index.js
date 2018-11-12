const fineness = 100

// const points = [[50, 50], [450, 50], [50, 450], [450, 450]]
const points = [[50,0], [450,100], [50,200], [450,300],[50,400], [450,500]]

module.exports = (points, fineness) => {
  let lines = []
  for (let i = 0; i < points.length - 1; i++) lines.push(lineSplit(points[i][0], points[i][1],points[i+1][0], points[i+1][1], fineness))

  const bezier = []
  [...Array(fineness)].forEach((n, index) => {
    let l = lines.map(e => e[index])
    while(l.length > 1) l = [...Array(l.length - 1)].map((x,i) => lineSplit(l[i][0], l[i][1],l[i+1][0], l[i+1][1], fineness)[index])
    bezier.push([l[0][0], l[0][1]])
  })

  const lineSplit = (x1,y1,x2,y2, split) => [...Array(split)]
    .map((e,i) => ([x1 + ((x2 - x1) / (split+1)) * (i+1), y1 + ((y2 - y1) / (split+1)) * (i+1)]))
}
