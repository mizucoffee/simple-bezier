module.exports = (points, fineness) => {
  if(points.length < 3) return []
  if(fineness <= 0) return []
  if(points.some(p => p.length < 2 || !Number.isFinite(p[0]) || !Number.isFinite(p[1]))) return []

  let lines = []
  for (let i = 0; i < points.length - 1; i++) lines.push(lineSplit(points[i][0], points[i][1],points[i+1][0], points[i+1][1], fineness))

  const bezier = [];
  bezier.push([points[0][0],points[0][1]]);
  [...Array(fineness)].forEach((n, index) => {
    let l = lines.map(e => e[index])
    while(l.length > 1) {
      let t = []
      for (let i = 0; i < l.length - 1; i++) {
        t.push(lineSplit(l[i][0], l[i][1],l[i+1][0], l[i+1][1], fineness)[index])
      }
      l = t.slice()
    }
    bezier.push([l[0][0], l[0][1]])
  })
  bezier.push([points[points.length-1][0],points[points.length-1][1]])
  return bezier
}

const lineSplit = (x1,y1,x2,y2, split) => [...Array(split)]
  .map((e,i) => ([x1 + ((x2 - x1) / (split+1)) * (i+1), y1 + ((y2 - y1) / (split+1)) * (i+1)]))
