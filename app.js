let baho = 3
if (baho >= 5) {
    console.log("Zo'r")
}
else if (baho >= 4) {
    console.log("Yaxshi")
}
else if (baho >= 3) {
    console.log("Harakat qil")
}
else {
    console.log("Yana o'qi")
}

let yosh = 17
if (yosh < 18) {
    console.log("Senga multfilm ko'rish mumkin")
} else {
    console.log("Senga jangovar kino ko'rish mumkin")
}

let harorat = 14
if (harorat <= 15) {
    console.log("Issiq kiyin")
}
else {
    console.log("Yengil kiyinishing mumkin")
}

let parol = "12345"
if (parol === "12345") {
    console.log("Xush kelibsiz")
}
else {
    console.log("Eshik yopiq")
}

let bolish = 4
if (bolish % 2 === 0) {
    console.log("Juft")
}
else {
    console.log("Toq")
}

let hafta = 3
switch (hafta) {
    case 1:
        console.log("dushanba")
        break;
    case 2:
        console.log("Seshanba")
        break;
    case 3:
        console.log("Chorshanba")
        break;
    case 4:
        console.log("Payshanba")
        break;
    case 5:
        console.log("Juma")
        break;
    case 6:
        console.log("Shanba")
        break;
    case 7:
        console.log("Yakshanba")
        break;
    default:
        console.log("Noto'g'ri hafta kiritildi")
}

let svetofor = 2
switch (svetofor) {
    case 1:
        console.log("To'xta")
        break;
    case 2:
        console.log("Tayyorlan")
        break;
    case 3:
        console.log("Yur")
        break;
}

let fasl = 12
switch (fasl) {
    case 12:
    case 1:
    case 2:
        console.log("Qish")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Bahor")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Yoz")
        break;
    case 9:
    case 10:
    case 11:
        console.log("Kuz")
        break;
    default:
        console.log("Bunday oy yo'q")
}

let narx = 1
switch (narx) {
    case "olma":
        console.log("Olma: 5000 so'm")
        break;
    case "banan":
        console.log("Banan: 9000 so'm")
        break;
    case "nok":
        console.log("Nok: 8000 so'm")
        break;
    default:
        console.log("Bizda bunaqa meva yo'q")
}

let son1 = 10
let son2 = 5
let belgi = "+"
switch (belgi) {
    case "+":
        console.log("Natija: " + (son1 + son2))
        break;
    case "-":
        console.log("Natija: " + (son1 - son2))
        break;
    case "*":
        console.log("Natija: " + (son1 * son2))
        break;
    case "/":
        console.log("Natija: " + (son1 / son2))
        break;
    default:
        console.log("Noma'lum belgi kiritldi!")
}

