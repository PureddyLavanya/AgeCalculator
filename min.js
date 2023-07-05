function get(){
    var nm=document.getElementById("name").value;
    var d1=document.getElementById("age").value;
   var d2=new Date();
   var d3=new Date(d1);
   var d4=new Date(d2);
   var d5=Math.floor(((d4.getTime()-d3.getTime())/(1000*3600*24))/365);
   if d5>=1
    {
   var str="Hi  "+nm+"\n"+"\n"+"Your Age is"+d5;
   alert(str);
    }
  else
    {
    alert('Enter a valid input');
    }    
}
