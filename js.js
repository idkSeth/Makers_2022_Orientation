function pw_check() {
    t = t + 1
    let pw_in = document.getElementById("pw_in").value;
    if (pw_in == pw) {
        setCookie("Success");
        window.location.href = "success.html";
    } else {
        document.getElementById("g_out").innerHTML = "You guess wrongly lah!" + "<br />" + "Attempts: " + t.toString();
        if (t == 9) {
            window.confirm("Last Attempt!")
        }
        else if (t == 10) {
            setCookie("Failed.");
            window.location.href = "fail.html";
        }
    }
  }

function setCookie(cvalue) {
    const d = new Date();
    let time = d.getTime();
    chash = hash(cvalue, time);
    document.cookie = "main =" + cvalue + "," + chash + "," + time + ";path=/";
  }

function hash(cvalue,time) {    
    var passhash = CryptoJS.MD5(CryptoJS.MD5(cvalue).toString()+CryptoJS.MD5(time).toString()).toString();
    return passhash
}   

function expired(time) {
    const d = new Date();
    let currentTime = Number(d.getTime());
    if (time + 700000 <= currentTime) {
        return true
    }
    else {
        return false
    }
}

function pass() {
    text = document.cookie
    let result = text.slice(5, 12)
    window.confirm(text)
    if (result == "Failed.") {
        return false
    }
    else {
        value = "Success";  
        let time = text.slice(45);
        let cookieHash = text.slice(12,45);
        if (hash(value,time) == cookieHash) {
            return true
        }
        else {
            return false
        }
    }

}
