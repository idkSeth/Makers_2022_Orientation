function myFunction() {
    t = t + 1
    let pw_in = document.getElementById("pw_in").value;
    if (guess == true) {
        t = t - 1
        document.getElementById("g_out").innerHTML = "You already got it right!" + "<br />" + "Attempts: " + t.toString();
    }
    else if (pw_in == pw) {
        guess = true
        document.getElementById("g_out").innerHTML = "Wow you guessed it right!" + "<br />" + "Attempts: " + t.toString();
    } else {
        document.getElementById("g_out").innerHTML = "You guess wrongly lah!" + "<br />" + "Attempts: " + t.toString();
    }
  }