const operation = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

let result = "Resultado: "


switch (operation) {
  case "add":
    result += valor1 + valor2
    break
  case "sub":
    result += valor1 - valor2
    break
  case "mult":
    result += valor1 * valor2
    break
  case "div":
    result += valor1 / valor2
    break
  default:

    result += "Invalid operation"
}

