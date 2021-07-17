function getAccountDetails() {
    let name=nme.value;
    let account_number=acc_no.value;
    let balance=bal.value;
    let mobile=mob.value;
    let password=pwd.value;

    let account={name,account_number,balance,mobile,password}
    console.log(account);
    if(account_number in localStorage){
        error.innerHTML="Account number already exist"
    }
    else{
        localStorage.setItem(account.account_number,JSON.stringify(account))
        alert("Account added success")
        location.href="./login.html"
    }
}

function login() {
    let user_name=uname.value;
    let password=pwd.value;
    let login_account={user_name,password}
    console.log(login_account);

    let user=JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if(user_name in localStorage){
        if(user.password== password){
            alert("Login Success");
            sessionStorage.setItem("user",user_name);//Session Storage user==>1002
            location.href="home.html";
        }
        else{
            error.innerHTML="*please enter a valid password"
        }
    }
    else{
        error.innerHTML="*invalid username"
    }
    
}


function balanceEnquiry(){
    let user=sessionStorage.getItem("user");//1002
    let account=JSON.parse(localStorage.getItem(user));
    alert(account.balance);

}

var req=sessionStorage.getItem("user");
if (req){
    litem.innerHTML=`logout ${req}`;

}

function logout(){
    sessionStorage.removeItem("user");
    location.href="login.html";
}

function fundTransfer(){
    let to_accno=toacno.value;
    let confirm_acno=ctoano.value;
    let amt=amount.value;
    let logged_user=JSON.parse(localStorage.getItem(req));
    if(logged_user.balance<amt){
        alert("Insufficient balance");

    }
    else{
        logged_user.balance=Number(logged_user.balance)-Number(amt);
        localStorage.setItem(logged_user.account_number,JSON.stringify(logged_user));
        if(to_accno in localStorage){
            let user=JSON.parse(localStorage.getItem(to_accno));
            user.balance=Number(user.balance)+Number(amt);
            localStorage.setItem(user.account_number,JSON.stringify(user));
            alert("Transaction completed");
        }
    }
}


