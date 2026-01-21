let num = prompt("Enter marks");

if (num >= 90 && num <= 100) {
    console.log("grade A")
}
else if (num >= 70 && num <= 89) {
    console.log("grade B");
}
else if (num >= 60 && num <= 69) {
    console.log("grade C");
}
else if (num >= 50 && num <= 59) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}