var CC, YY, MM, DD, dayValue;
var dayNames = ["SUnday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames =["Kwasi", "Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames =["Akosu", "adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function confirm() {
    var genders = document.getElementsByName("gender");
    if (document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value >2100 || document.myForm.year.value<=1900) {
        alert("please provide a valid year of birth!");
        document.myForm.year.focus();
        return false
    }
    else if (DocumentFragment.myForm.moth.value== ""|| isNaN(document.myForm.month.value ) || document.myForm.month.value.length !=2 || document.myForm.month.value > 12 || document.myForm.month.value <= 0) {
        alert("please provide your month of birth!");
        document.myForm,year.focus();
        return false
    }
    else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
        document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
        alert( "Please provide a valid date that you were born in!" );
        document.myForm.day.focus() ;
        return false;
    }
    else if (genders(0).cheecked==false && genders(1).checked==false){
        alert("you must select male or female");
        return false
    }
    else{
        return true
    }
}