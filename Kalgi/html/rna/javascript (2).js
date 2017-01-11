function convert(text) {
    var i ;
    var c = text;
    var d = c.split("");
    
    for(i=0;i<d.length;i++) {
        if(d[i] == "G") {
            d[i] = "C";
        }
        else if(d[i] == "C") {
            d[i] = "G";
        }
        else if(d[i] == "T") {
            d[i] = "A";
        }
        else if(d[i] == "A") {
            d[i] = "U";
        }
        else {
            alert("invalid inpiut");
            return;
        }
    }
    document.getElementById("result").innerHTML = d.join("");
}