let member = () => {
    console.log("Member")
    let element = document.getElementById("agency")
    element.classList.remove("btnCol");
    element.classList.add("selbtnCol");
    let element1 = document.getElementById("member")
    element1.classList.add("btnCol")
    element1.classList.remove("selbtnCol")
    let form1 = document.getElementById("myForm")
    form1.classList.remove("dnone")
    let form2 = document.getElementById("myForm1")
    form2.classList.add("dnone")
}

let agency = () => {
    console.log("Agency")
    let element = document.getElementById("agency")
    element.classList.add("btnCol");
    element.classList.remove("selbtnCol");
    let element1 = document.getElementById("member")
    element1.classList.remove("btnCol")
    element1.classList.add("selbtnCol")
    element1.classList.add("border")
    let form1 = document.getElementById("myForm")
    form1.classList.add("dnone")
    let form2 = document.getElementById("myForm1")
    form2.classList.remove("dnone")
}