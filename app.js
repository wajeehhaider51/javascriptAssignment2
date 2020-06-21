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
