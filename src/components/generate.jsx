let arr = [
      "🍎",
      "🍑",
      "🍇",
      "🍐",
      "🍌",
      "🥝"
]

let obj = {}
function generate(){
      let x = arr[Number(Math.random()*6, 10)];
      let y = arr[Number(Math.random()*6, 10)];
      let z = arr[Number(Math.random()*6, 10)];

      
      obj = {
            x : x,
            y : y,
            z : z
      }
}

export {obj ,generate};