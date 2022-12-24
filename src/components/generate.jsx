let items = [
      "🍎",
      "🍑",
      "🍇",
      "🍐",
      "🍌",
      "🥝"
]


function generate(){
      let a = items[Math.floor(Math.random()*items.length)];
      let b = items[Math.floor(Math.random()*items.length)];
      let c = items[Math.floor(Math.random()*items.length)];
      let obj = {
            x : a,
            y : b,
            z : c
      }
      return obj;
}

export {generate};