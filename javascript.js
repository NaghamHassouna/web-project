var form=document.getElementById("form2");
var table=document.getElementById("table");
var submit=document.getElementById("submit");

submit.addEventListener("click",addelementintable);

function addelementintable(){
    event.preventDefault();
    var name=form.elements.username.value;
    var email=form.elements.email.value;
    var BankAccountName=form.elements.BankAccountName.value;
    var IBAN=form.elements.IBAN.value;
    var banknumber=form.elements.banknumber.value;
    var pass=form.elements.psw.value;
    var rpass=form.elements.pswrepeat.value;

    if (rpass !==pass) {
     alert("Password does not match!")
    }
    else{
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
  
    td1.textContent=name;
    td2.textContent=email;
    td3.textContent=BankAccountName;
    td4.textContent=IBAN;
    td5.textContent=banknumber;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
}}

