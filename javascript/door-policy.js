export function frontDoorResponse(line) {
  return line[0]
}
export function frontDoorPassword(word) {
  return frontDoorResponse(word).toUpperCase() + word.slice(1).toLowerCase()
}
export function backDoorResponse(line) {
  return line.trim()[line.trim().length-1]
}
export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please'
}
