var raj = {
    "Name": "Raj",
    "Age" : 23,
    "Address":{
        "city":"Nagpur",
        "street":"ABC street",
        "building":02,
        "pin":12345,
    },
    "Education":{
        "College": "SVPCET Nagpur",
        "Degree":"BE(IT)",
        "YOP":2021
    },
    "TechnicalSkills":{
        "FrontEnd":{
            "Language":"HTML, CSS",
            "Framework":"Bootstrap"    
        },
        "BackEnd":{
            "Language":"PHP",
        },
        "Database":"MySQL"
    }

}


var result = document.querySelector(".result");
result.style.display = "block";
var statement = "Hello My name is " + raj.Name + ", I live in Beautiful Orange city " + raj.Address.city + ", My address is "+raj.Address.street + ", "
        +"I completed my degree from " + raj.Education.College + " College. " + " My technical Skills are: " +raj.TechnicalSkills.BackEnd.Language+ ", "
        +raj.TechnicalSkills.Database+" ," +raj.TechnicalSkills.FrontEnd.Framework;

result.innerHTML = statement;
//console.log(statement);
