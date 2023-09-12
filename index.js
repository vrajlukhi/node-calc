let number=process.argv

let opr=number[2]
let a=number[3]
let b=number[4]

switch (opr) {
    case "add":
        console.log(`sum of number ${Number(a)+Number(b)}`);
        break;
    case "sub":
        console.log(`Sub of number ${a-b}`);
        break;
    case "multi":
        console.log(`multiply of number ${a*b}`);
        break;
    case "div":
        console.log(`division of number ${a/b}`);
        break;
    case "mod":
        console.log(`module of number ${a%b}`);
        break;
    default:
        break;
}