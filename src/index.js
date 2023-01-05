
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined||matrix.length == 0)  {return []}
    else {
    const arr = matrix.map((el, index) => (index%2===0) ?el:el.reverse())
    const sortArr = arr.reduce((acc, element) => acc.concat(element))
  return sortArr;}
}
