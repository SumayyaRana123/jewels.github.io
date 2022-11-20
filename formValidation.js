function ValidateForm()
{
    let fname = document.forms["contact-form"]["fname"].value;
    let lname = document.forms["contact-form"]["lname"].value;
    let email=document.forms["contact-form"]["email"].value;
    let phoneNo=document.forms["contact-form"]["PhoneNumber"].value;

    
    if(FirstIsUpperCase(fname)!=true)
    {
        alert("First letter of your first name must be Capital");
        return false;
    }
    if(FirstIsUpperCase(lname)!=true)
    {
        alert("First letter of your last name must be Capital");
        return false;
    }
    if(ValidateEmail(email)!=true)
    {
        alert(" email should be valid");
    }
    // if(IsEmailValid(email)!=true)
    // {
    //     alert("email address is invalid");
    //     return false;

        
    // }
    if((IsPhoneNumberValid(phoneNo)!= true))
    {
        alert("Phone Number Format should be: XXXX-XXXXXXX");
        return false;
    }
   
}

                        // Function for Checking upper case of first letter
function FirstIsUpperCase(str)
{
if(typeof str !=='string' || str.length==0){
    return false;
}
if(str[0].toUpperCase()==str[0])
{
    return true;
}
else{
    return false;
}
}

                        // Function for email validation
function IsEmailValid(emailText)
{
var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailText.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
{
    return true
}
else{
    return false;
}
}
                       // Function for Phone Number validation
function IsPhoneNumberValid(phoneNo)
{
    
    ///^\(?([0-9]{4})\)?[-. ]?([0-9]{7})$/
    // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
if(phoneNo.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
{
    return true;
}
else{
    return false;
}
}

function ValidateEmail(inputText)
{

if(inputText.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
{

return true;
}
else
{
alert("You have entered an invalid email address!");

return false;
}
}