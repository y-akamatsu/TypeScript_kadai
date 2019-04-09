function calc(a, b, type) {
    switch (type) {
        case CalcType.Add:
            return a + b;
        case CalcType.Sub:
            return a - b;
        case CalcType.Multi:
            return a * b;
        case CalcType.Div:
            return a / b;
    }
}
var CalcType;
(function (CalcType) {
    CalcType[CalcType["Add"] = 0] = "Add";
    CalcType[CalcType["Sub"] = 1] = "Sub";
    CalcType[CalcType["Multi"] = 2] = "Multi";
    CalcType[CalcType["Div"] = 3] = "Div";
})(CalcType || (CalcType = {}));
const a = 10;
const b = 2;
console.log("Add", calc(a, b, CalcType.Add));
console.log("sub", calc(a, b, CalcType.Sub));
console.log("Muliti", calc(a, b, CalcType.Multi));
console.log("Div", calc(a, b, CalcType.Div));
// function calc(a: number, b: number, type: CalcType): number {
//   switch (type) {
//     case CalcType.Add:
//       return a + b
//     case CalcType.Sub:
//       return a - b
//     case CalcType.Multi:
//       return a * b
//     case CalcType.Div:
//       return a / b
//   }
// }
// enum CalcType {
//   Add, Sub, Multi, Div
// }
// const a = 10;
// const b = 2;
// console.log("Add", calc(a,b, CalcType.Add))
// console.log("sub", calc(a,b, CalcType.Sub))
// console.log("Multi", calc(a,b, CalcType.Multi))
// console.log("Div", calc(a, b, CalcType.Div))
// function getArrayString(str1: string, str2: string, str3: string): string[] {
//   return [str1, str2, str3]
// }
// console.log(getArrayString('俺は', '明日', '勉強する'))
// console.log(getArrayString('明日', '気温', '下がるってよ'))
// console.log(getArrayString('明日', '東京', '雪降るらしい'))
// function mergeString(str1: string, str2: string, str3: string): string {
//   return str1 + str2 + str3
// }
// console.log(mergeString("俺は", "明日", "勉強をする"))
// function showHundred2(): void {
//   let result: string = ""
//   for (let i = 0; i <= 100; i++) {
//     result += `${i}`
//     if (0 < i && i % 5 === 0) {　//　iが1以上かつ５で割れる数字を改行する
//       result += `\n`
//     }
//   }
//   console.log(result)
// }
// console.log(showHundred2())
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