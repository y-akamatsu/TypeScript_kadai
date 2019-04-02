function getHelloWithDate(): string {
  const date = new Date()
  const hours = date.getDate()
  if(hours <= 5 && hours < 12) {
    return 'おはようございます'
  } else if (12 <= hours && hours < 19)　{
    return 'こんにちわ'
  } else if (19 <= hours && hours < 24) {
    return 'こんばんわ'
  } else{
    return '夜更かしさん'
  }
}
console.log(getHelloWithDate())












// function getHelloWithDate(): string {
//   const date = new Date()
//   const hours = date.getHours()
//   if (5 <= hours && hours < 12) {
//     return 'おはようございます'
//   } else if (12 <= hours && hours < 18) {
//     return 'こんにちは'
//   } else if (18 <= hours && hours < 24) {
//     return 'こんばんは'
//   } else {
//     return '夜更かしさん'
//   }
// }