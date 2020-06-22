/*
//CHAPTER 21-25
//Task 1
var firstName=["ali","Akber","Abdullah","Saad"];
var lastName=["Haider","Abbas"];
var fullName=[];
for(var i=0;i<firstName.length;i++)
{
    for(var j=0;j<lastName.length;j++)
    {
        fullName.push(firstName[i]+lastName[j]);
    }
}
for(i=0;i<firstName.length;i++)
{document.write(fullName[i]+",");}
//Task 2
var mobileChoice=prompt("Enter your fav Mobile fone");
var mobileChoiceLength=mobileChoice.length;
document.write("<br>"+"My Favorite phone is: "+mobileChoice+"<br>"+"Length of String : "+mobileChoiceLength);
//Task 3
var nationality="Pakistani";
var indexOfN=nationality.indexOf('n');
document.write("<br>"+"String: "+nationality+"<br>"+"Index of 'n' : "+indexOfN);
//Task 4
var sanitation="Hello World";
var indexOfL=sanitation.lastIndexOf('l');
document.write("<br>"+"String: "+sanitation+"<br>"+"Index of 'l' : "+indexOfL);
//Task 5
var thirdNumChar=nationality.charAt(3);
document.write("<br>"+"String: "+nationality+"<br>"+"Character at index 3 : "+nationality[thirdNumChar]);
//Task 6
for(var i=0;i<firstName.length;i++)
{
    for(var j=0;j<lastName.length;j++)
    {
        fullName.push(firstName[i].concat(lastName[j]));
    }
}
for(i=0;i<firstName.length;i++)
{document.write(fullName[i]+",");}
//Task 7
var city="Hyderabad";
var replacement=city;
replacement=replacement.replace("Hyder","Islam");
document.write("<br>"+"String: "+city+"<br>"+"After Replacement : "+replacement);
//Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newText=message.replace(/and/g,"&");
document.write(newText);
//Task 9
var num1="472";
var num2=parseInt(num1);
document.write("<br>"+"Value: "+num1+"<br>"+"Type: "+"String"+"<br>"+"Value: "+num2+"<br>"+"Type: "+"Number"+"<br>");
//Task 10
var nuts=prompt("enter your favorite nut");
var nuts1=nuts.toUpperCase();
document.write("<br>"+"user input : "+nuts+"<br>"+"Upper Case : "+nuts1);
//Task 11
var inputtext=prompt("enter your favorite nut");
var firstChar=inputtext.slice(0,1);
firstChar.toUpperCase();
var otherChars=inputtext.slice(1);
var titleCase=firstChar.concat(otherChars);
document.write("<br>"+"user input : "+inputtext+"<br>"+"Title Case : "+titleCase);
//Task 12
var numStr=35.36;
numStr=numStr.toString();
document.write("br"+"Number: "+ numStr);
decIndex=numStr.indexOf('.');
numStr=numStr.splice(decIndex,1);
document.write("br"+"Result: "+ numStr);
//Task 13
var password=prompt("Please enter password without special characters places");
password=password.toString();
for(var z=0;z<password.length;z++)
var flag=false;
{
    if(password[z]== "@" || password[z]== "." || password[z]== "!" || password[z]== ",")
    {
        flag=true;
        break;
    }
}
if(flag==true)
{alert("Please enter Valid Password");}
else
{
    alert("You entered correct password");
}
//Task 14
var listofItems=["cake","apple pie","cookie","chips","patties"]
var userChoice=prompt("Welcome to ABC Bakary. What do you Want to order");
userChoice=userChoice.toLowerCase();
flag=false;
for(z=0;z<listofItems.length;z++)
{
    if(userChoice==listofItems[z])
    {
        flag=true;
        document.write("<br>"+userChoice+" is available at index "+z+ " in our Bakery");
    }
}
if(flag==false)
{
    document.write("<br>"+" We are sorry "+userChoice+ " is not available in our Bakery");
}
//Task 16
var uni="university of karachi";
var charsplit=uni.split(' ');
var first=charsplit[0],second=charsplit[1],third=charsplit[2];
for(z=0;z<first.length;z++)
{
    document.write("<br>"+first[z])
}
document.write("<br>"+" ");
for(z=0;z<second.length;z++)
{
    document.write("<br>"+second[z])
}
document.write("<br>"+" ");
for(z=0;z<third.length;z++)
{
    document.write("<br>"+third[z])
}
//Task 17
var userinput="Pakistan";
document.write("<br>"+"user Input: "+userinput);
document.write("<br>"+"Last character of input: "+userinput[userinput.length-1]);
//Task 18
var text="The quick brown fox jumps over the lazy dog";
text=text.toLowerCase();
var count=0;
for (var i = 0; i < text.length; i++) {
if (text.slice(i, i + 3) === "the") {
count++;
}
}
document.write("<br>"+"Text : "+text);
document.write("<br>"+"There are "+count+" occurence of word 'The'");
*/
/*
//CHAPTER 26-30
//Task 1
var numberOne=3.45214;
var r=Math.round(numberOne);
var c=Math.ceil(numberOne);
var f=Math.floor(numberOne);
document.write("<br>"+ "Number : "+ numberOne);
document.write("<br>"+ "Round of Value : "+ r);
document.write("<br>"+ "Floor Value : "+ f);
document.write("<br>"+ "Ceil Value : "+ c);
//Task 2
var numberOne=-3.45214;
var r=Math.round(numberOne);
var c=Math.ceil(numberOne);
var f=Math.floor(numberOne);
document.write("<br>"+ "Number : "+ numberOne);
document.write("<br>"+ "Round of Value : "+ r);
document.write("<br>"+ "Floor Value : "+ f);
document.write("<br>"+ "Ceil Value : "+ c);
//Task 3
var num4= -4;
var absolute=Math.abs(num4);
document.write("<br>"+"The absolute value of "+num4+" is "+absolute);
//Task 4
var randNum=Math.random();
var diceValueRaw=(randNum*6)+1;
var diceValue=Math.floor(diceValueRaw);
document.write("<br>"+ "Random Dice Value : "+ diceValue);
//Task 5
var randNum1=Math.random();
var coinValueRaw=(randNum1*2)+1;
var coinValue=Math.floor(coinValueRaw);
if(coinValue==1)
{
document.write("<br>"+ "Random Coin Value is : Tails");
}
else
{
document.write("<br>"+ "Random Coin Value is  : Heads");
}
//Task 6
var randNum3=Math.random();
var ValueRaw=(randNum3*100)+1;
var Value=Math.floor(ValueRaw);
document.write("<br>"+ "Random Number between 1 and 100 : "+ Value);
//Task 8
var randNum4=Math.random();
var num4Raw=(randNum4*10)+1;
var num4Value=Math.floor(num4Raw);
var userNumber=prompt("Enter your guess");
userNumber=Number(userNumber);
if(userNumber==num4Value)
{
    alert("<br>"+ "You had the right guess"); 
}
else
{
    alert("<br>"+ "Try again please"); 
}
*/
/*
//CHAPTER 31-34
//Task 1
var currentDate=new Date();
currentDate=currentDate.toString();
document.write("<br>"+ "Date : "+ currentDate);
//Task 2
var indexMonth= currentDate.getMonth();
var months=["january","february","march","april","may","june","july","august","september","octuber","november","december"];
document.write("<br>"+ "Current Month : "+ months[indexMonth]);
//Task 3
var indexday= currentDate.getDay();
var days=["sun","mon","tue","wed","thu","fri","sat"];
document.write("<br>"+ "Today is "+ days[indexday]);
//Task 4
if(days[indexday]=="sat"|| days[indexday]=="sun")
{
    document.write("<br>"+ "Today is Fun Day");
}
//Task 5
var currentDate1=new Date();
var date=currentDate1.getDate();
if(date<16)
{
    document.write("<br>"+ "First 15 days of the month");
}
//Task 6
var millsec=currentDate1.getTime();
var mint=(millsec/1000)/60;
document.write("<br>"+ "Current Date: "+currentDate1);
document.write("<br>"+ "Elapsed Miliseconds since January 1, 1970 : "+millsec);
document.write("<br>"+ "Elapsed Minutes since January 1, 1970 : "+mint);
//Task 7
var hours=currentDate1.getHours();
if(hours<=12)
{
    document.write("<br>"+ "Its AM");
}
else
{
    document.write("<br>"+ "Its PM");  
}
//Task 8
var ldate=new Date("Dec 31, 2020");
var ldateStr=ldate.toString();
document.write("<br>"+ "Later Date: "+ldateStr);
//Task 9
var ramazandate=new Date("June 18, 2015");
var ramazanMillsec=ramazandate.getTime();
var diff=millsec-ramazanMillsec;
var days=(((diff/1000)/60)/60)/24;
document.write("<br>"+days+ "Days are passed since 1st Ramzan, 2015 ");
//Task 10
var ramazandate=new Date("Jan 1, 2015");
var ramazanMillsec=ramazandate.getTime();
var diff=millsec-ramazanMillsec;
var secPassed=diff/1000;
document.write("<br>"+secPassed+ "seconds are passed since 1 January, 2015 ");
//Task 11
*/
/*
//CHAPTER 38-38
//Task 1
function dateTime(){
    var curdate=new Date();
    curdate=curdate.toString();
    document.write("<br>"+curdate);
}
dateTime();
//Task 2
function greet(a,b){
    document.write("<br>"+"Hello :"+ (a+b));
}
greet("Ali","Abbas");
//Task 3
var numb1=prompt("Enter first number");
var numb2=prompt("Enter Second number");
function sum(a,b){
    return a+b;
}
var resultant=sum(numb1,numb2);
//Task 4
var operator=prompt("please provide operator");
function calculator(a,b,op){
    if(op=="+")
    {
        return a+b;
    }
    else if(op=="-")
    {
        return a-b;
    }
    else if(op=="*")
    {
        return a*b;
    }
    else if(op=="/")
    {
        return a/b;
    }
    else
    {
        return "Please provide proper value";
    }
}
calculator(numb1,numb2,operator);
//Task 5
function square(a){
return Math.sqrt(a);
}
square(numb1);
//Task 6
function factorial(a){
    var n;
    var result=a;
    for(n=a-1;n>0;n--)
    {
        result=result*n;
    }
    return result;
}
factorial(numb1);
//Task 7
var start=1
var end=10
function counting(s,e){
    for(var i=s;i<=e;i++)
    {
        document.write("<br>"+i);
    }
}
counting(start,end);
//Task 8
var base=2;
var perpandicular=2;
function hypotenuse(ba,perp){
    var a1=ba;
    var b1=perp;
    function squr(t){
        s1=t*t;
        return s1;
    }
    var res=squr(a1)+squr(b1);
    return res;
}
hypotenuse(base,perpandicular);
//Task 9
var height=22;
function area(w,h){
    var are=w*h;
    return are;
}
area(34,height);
//Task 10
var words="madam";
function palindrome(w){
    var word1="";
    for(var c=w.length-1;c>=0;c--)
    {
        word1=word1+w[c];
    }
    if(w==word1)
    {
       document.write("<br>"+"word is palindrome");
    }
    else
    {
        document.write("<br>"+"word is not palindrome");
    }
    
}
palindrome(words);
//Task 11
var words = "the quick brown fox";
function upcase(wor){
for(var ww=0;ww<wor.length;ww++)
    {
        if(wor[i]==" ")
        {wor[i+1].toUpperCase()}
    }
    return wor;    
}
upcase(words);
//Task 12
var word2="Web Development Tutorial";
function expbreak(wor2){
    var word3=wor2.split(' ');
    var bigWord;
    for(var ic=0;ic<word3.length;ic++)
    {
        if(word3[i].length>word3[i+1])
        {
            bigWord==word3[i]
        }
    }
    return bigWord;
}
document.write("<br>"+"EXAMPLE STRING : ' "+word2 +"'");
document.write("<br>"+"EXPECTED OUTPUT : ' "+expbreak(word2)+ +"'");
//Task 13
var string1="JSResourceS.com"
var ltr1="o";
function check(x,y)
{
    var counter=0;
    for(iz=0;iz<x.length;iz++)
    {
        if(x[iz]==y)
        {
            counter++;
        }
    }
    return counter;
}
document.write("The letter" + ltr1+ "occured "+ check(string1,ltr1)+"Times in expression"+string1);
//Task 14
var radius=3;
function calcCircumference(ra){
    return 2*3.14*ra;
}
function calcArea(rai){
    return 3.14*(rai*rai);
}
document.write("<br>"+"The circumference is: "+calcCircumference(radius));
document.write("<br>"+"The circumference is: "+calcArea(radius));
*/
