    var cartypeInp=document.getElementById("cartype");
    var kmInp= document.getElementById("DistanceInKm");
    var pickuplocationInp= document.getElementById("PickupLocation");
    var droplocationInp= document.getElementById("DropLocation");
    var journydateInp= document.getElementById("JournyDate");
    var journytimeInp= document.getElementById("JournyTime");
    var gstpercentageInp= document.getElementById("GSTpercentage");
    var calculatefareButton= document.getElementById("Button");
    var priceInp= document.getElementById("price");
    var DOBInp=document.getElementById("DOB");
    var seniorcitizenInp=document.getElementById("seniorcitizen");

    //global variable create
    var CarType,noOfKm,TotalPrice,GstPercentage,PickupLocation,DropLocation,JournyDate,JournyTime,dob,SeniorCitizen = false,age;
    
    
    //when click the button, it shows the what action want to do
    calculatefareButton.addEventListener('click',function(){
        CarType=cartypeInp.value;
        noOfKm=kmInp.value;
        GstPercentage=gstpercentageInp.value;
        PickupLocation=pickuplocationInp.value;
        DropLocation=droplocationInp.value;
        JournyDate=journydateInp.value;
        JournyTime=journytimeInp.value;
        dob=DOBInp.value;
        SeniorCitizen=seniorcitizenInp.value;

      

    //    to give car type
        // these console are used to check the variable
        // console.log(CarType);
        // console.log(noOfKm);
        // console.log(GstPercentage);
        if(CarType==="Mini"){
            let amt=10;
            TotalPrice=noOfKm*amt;

        }
        else if(CarType==="Micro"){
            let amt=15;
            TotalPrice=noOfKm*amt;

        }
        else if(CarType==="Macro"){
            let amt=20;
            TotalPrice=noOfKm*amt;
        }
    // for senior citizen discount
        age=calculateage(dob);
        TotalPrice=TotalPrice+calculateGST(TotalPrice);
        if(age >= 60){
            TotalPrice /= 2;
            seniorcitizen = true;
        }
         priceInp.innerText = TotalPrice;  
         if(seniorcitizen){
            seniorcitizenInp.innerText="Yes";
         }
         else{
             seniorcitizenInp.innerText= "NO";
         }
    });






    function calculateGST(price){
        let finalprice= (GstPercentage/100)*TotalPrice;
        return finalprice;

    }





    function calculateage(dob) { 
        let dobyear=new Date(dob).getFullYear();
        let today = new Date();
        let currentyear=today.getFullYear();
        let age = currentyear-dobyear;
        return age;
    }
    
    // console.log(calculate_age(new Date(1982, 11, 4)));
    
    // console.log(calculate_age(new Date(1962, 1, 1)));
    
    // function calculateAge(price1){
        // let age = 60; 
        // let result =(age > 39)? 
            // "Pass":"Fail"; 
      
        // document.write(result); 
        // if(result===pass)
        // let Totalamount=finalprice/2;
        // return Totalamount;

    function submitvalue()
        {
            event.preventDefault();
            localStorage.setItem("CarType",CarType);
            localStorage.setItem("noOfKm",noOfKm);
            localStorage.setItem("GstPercentage", GstPercentage);
            localStorage.setItem("PickupLocation",PickupLocation);
            localStorage.setItem("DropLocation",  DropLocation);
            localStorage.setItem("JournyDate",JournyDate);
            localStorage.setItem("JournyTime",JournyTime);
            localStorage.setItem("TotalPrice", TotalPrice);
            // localStorage.setItem("SeniorCitizen",SeniorCitizen);
            localStorage.setItem("dateofbirth",dob);
            localStorage.setItem("SeniorCitizen",SeniorCitizen);
            window.location.assign("journydetails.html");
        }

















// calc.addEventListener('click', function(){
//     switch(selected)
//     {
//     case "Mini":
//     type="Mini";
//     amt=10;
//     result=km*amt;
//     gstprice=gst(result);
//     myGeeks(type,result,getprice);
//     break;
    
//     case "Micro":
//     type="Micro";
//     amt=15;
//     result=km*amt;
//     gstprice=gst(result);
//     myGeeks(type,result,getprice);
//     break;
    
//     case "Macro":
//     type="Macro";
//     amt=20;
//     result=km*amt;
//     gstprice=gst(result);
//     myGeeks(type,result,getprice);
//     break;
// }
// priceField.innerText = result;
// });  
    

// function gst(result){
//     gstprice=(result*0.07)+result;
//     return gstprice;

// }
// function pricedisplay(type,results){
//     documents.getElementById('bill').innerHTML
//     ='The Price For TravellingIN '+ type + "is Rs:"+results;

// }
// function gstdisplay(type,gstprice){
//    document.getElementById('gst').innerText ="The TotalPrice Include GST " + type + "Car is Rs:" + gstprice;
// }
