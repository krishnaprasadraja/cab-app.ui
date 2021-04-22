let cartype=document.getElementById("cartypefield");
let noofKm=document.getElementById("noofkm");
let pickuplocation=document.getElementById("pickuplocationfield");
let droplocation=document.getElementById("droplocationfield");
let journydate=document.getElementById("journydatefield");
let journytime=document.getElementById("journytimefield");
let gstpercentage=document.getElementById("gstpercentagefield");
let price=document.getElementById("pricefield");
let dob1=document.getElementById("DOBfield");
let seniorcitizen=document.getElementById("seniorcitizenfield");

// let seniorcitizen=document.getElementById("seniorcitizenfield")



var CarType,PickUpLocation,DropLocation,JournyDate,JournyTime,GSTpercentage,Price,NoOfKM,seniorCitizen,Dob;



        CarType=localStorage.getItem("CarType");
        NoOfKM=localStorage.getItem("noOfKm");
        PickUpLocation=localStorage.getItem("PickupLocation");
        DropLocation=localStorage.getItem("DropLocation");
        JournyDate=localStorage.getItem("JournyDate");
        JournyTime=localStorage.getItem("JournyTime");
        GstPercentage=localStorage.getItem("GstPercentage");
        Price=localStorage.getItem("TotalPrice");
        seniorCitizen=localStorage.getItem("SeniorCitizen");
        Dob=localStorage.getItem("dateofbirth");
cartype.innerText=CarType;
pickuplocation.innerText=PickUpLocation;
droplocation.innerText=DropLocation;
journydate.innerText=JournyDate;
journytime.innerText=JournyTime;
gstpercentage.innerText=GstPercentage;
price.innerText=Price;
noofKm.innerText=NoOfKM;
// seniorcitizen.innerText=seniorCitizen;
dob1.innerText=Dob;
