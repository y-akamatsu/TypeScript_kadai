function showHundred2() {
    let result = "";
    for (let i = 0; i <= 100; i++) {
        result += `${i}`;
        if (0 < i && i % 5 === 0) {
            result += `\n`;
        }
    }
    console.log(result);
}
console.log(showHundred2());
// function showHundred1(): void {
//  let result: string = ""
//  for(let i = 0; i <= 100; i++){
//    result += `${i} `
//  }
//  console.log(result)
// }
// console.log(showHundred1())
// function getHelloWithData(): string {
//   const data = new Date(10) //ここに時間を入力
//   const hours = data.getHours()
//   if (5 >= hours && hours < 12) {
//     return "おはようございます"
//   } else if (12 >= hours && hours < 19) {
//     return "こんにちわ"
//   } else if (19 >= hours && hours < 1) {
//     return "こんばんわ"
//   } else {
//     return "夜更かしさん"
//   }
// }
// console.log(getHelloWithData())
//# sourceMappingURL=app.js.map