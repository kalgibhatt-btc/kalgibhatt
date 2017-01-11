function pana()
  {
   var regex = /([a-z])(?!.*\1)/g;
   var str=document.getElementById('text').value.toLowerCase();
   if(str=="")
   {
    alert("Enter String first!!");
   }
   else
   {
    if(str.match(regex).length == 26)
    {
     alert("pangram");
    }
    else
    {
     alert("Not Pangram");
    }
    document.getElementById('str').focus();
   }
  }