function pw_check() {
    if (t <= 10) {
        t = t + 1;
    }
    else {
        window.location.href = "final.html";
    }
    var pw_in = CryptoJS.MD5(document.getElementById("pw_in").value.toLowerCase()).toString();
    document.getElementById("pw_in").value=null;
    if (pw_in == pw) {
        setCookie("Success");
        window.location.href = "final.html";
    } else {
        document.getElementById("g_out").innerHTML = "You guess wrongly lah!";
        document.getElementById("attempts").innerHTML = "Attempts: " + t.toString();
        setCookie("Reset..");
        if (t == 9) {
            createClass('.attempt',"color: #ff0000;");
            window.confirm("Attempt 9: Last Attempt!")
        }
        else if (4 <= t < 7) {
            createClass('.attempt',"color: #c7a002");
        }
        else if (t >= 7) {
            createClass('.attempt',"color: #ff9808");
        }
        else if (t == 10) {
            setCookie("Failed.");
            window.location.href = "final.html";
        }
    }
  }

function setCookie(cvalue) {
    d = new Date();
    let time = d.getTime();
    let chash = hash(cvalue, time.toString());
    document.cookie = "main =" + cvalue + "," + chash + "," + time.toString() + ";path=/";
  }

function hash(hvalue,time) {    
    passhash = CryptoJS.MD5(CryptoJS.MD5(hvalue).toString()+CryptoJS.MD5(time).toString()).toString();
    return passhash
}   

function expired(time) {
    d = new Date();
    let currentTime = Number(d.getTime());
    if (Number(time) + 120000 <= currentTime) {
        return true
    }
    else {
        return false
    }
}

function pass() {
    text = document.cookie;
    let time = text.slice(46);
    let cookieHash = text.slice(13,45);
    let result = text.slice(5, 12);
    if (result == "Failed.") {
        return false
    }
    else if (expired(time) == true) {
        return false
    }
    else {
        value = "Success";
        if (hash(value,time) == cookieHash) {
            return true
        }
        else {
            return false
        }
    }

}

function fResult() {
    if (pass() == false) {
        document.getElementById("out").innerHTML = "Locked out.";
        createClass('.outColor',"color: #b30707;");
    }
    else if (pass() == true) {
        document.getElementById("out").innerHTML = "You Win!";
        createClass('.outColor',"color: #2ff56d;");
    }
}

function createClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}
