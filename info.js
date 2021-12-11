function validateForm() {

    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("ast_").value;
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confp").value;
    var educationalStatus = document.querySelector(`input[type="radio"][name=educationalStatus]:checked`).value;
    var emails = document.getElementById("emails").value;
    var age = document.getElementById("age").value;

    if (first_name == "") 
    {
        document.getElementById("fName").innerHTML = "Required Field";
        return false;
    }   else 
        {
            document.getElementById("fName").innerHTML = "";
        }


    if (first_name.charAt(0) != first_name.charAt(0).toUpperCase()) 
    {
        document.getElementById("fName").innerHTML = "First letter must be Uppercase";
        return false;
    }   else
        {
            document.getElementById("fName").innerHTML = "";
        }

        if (!/^[a-zA-Z]*$/g.test(document.signup.first_name.value)) {
         document.getElementById("fName").innerHTML = "Only alphabet allowed";
          return false;
      }

      
    if (ast_ == "") 
    {
        document.getElementById("lName").innerHTML = "Required Field";
        return false;
    }   else
        {
            document.getElementById("lName").innerHTML = "";
        }


    if (ast_.charAt(0) != ast_.charAt(0).toUpperCase()) 
    {
        document.getElementById("lName").innerHTML = "First letter must be Uppercase";
        return false;
    }   else
        {
            document.getElementById("lName").innerHTML = "";
        }

        if (!/^[a-zA-Z]*$/g.test(document.signup.ast_.value)) {
          document.getElementById("lName").innerHTML = "Only alphabet allowed";
           return false;
       }


    if (user == "") 
    {
        document.getElementById("username").innerHTML = "Required Field";
        return false;
    }   else
        {
            document.getElementById("username").innerHTML = "";
        }


    if (user.length < 6) 
    {
        document.getElementById("username").innerHTML = " Username must have at least 6 characters";
        return false;
    }   else
        {
            document.getElementById("username").innerHTML = "";
        }

        
    if (!/^[A-Za-z][A-Za-z0-9]+$/.test(document.signup.user.value)) {
          document.getElementById("username").innerHTML = "Must start with an alphabet";
           return false;
       }



    if (password == "") 
    {
        document.getElementById("passwords").innerHTML = "Required Field";
        return false;
    }   else
        {
            document.getElementById("passwords").innerHTML = "";
        }

    if (password.length < 6) 
    {
        document.getElementById("passwords").innerHTML = "Password must be at least 6 characters long";
        return false;
    }   else
        {
          document.getElementById("passwords").innerHTML = "";
        }

    if (!/^[A-Za-z][A-Za-z0-9]+$/.test(document.signup.password.value)) 
    {
      document.getElementById("passwords").innerHTML = "Password must start with an alphabet";
      return false;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/.test(document.signup.password.value)) 
    {
      document.getElementById("passwords").innerHTML = "Password must have at least 1 digit and 1 uppercase";
      return false;
    }
          
        
    if (password != confirm_password) 
    {
      document.getElementById("confirmpassword").innerHTML = "Password Mismatch";
      return false;
    } else
      {
      document.getElementById("confirmpassword").innerHTML = "";
      }


    if (confirm_password == "") 
    {
      document.getElementById("confirmpassword").innerHTML = "Re-enter Password";
      return false;
    } else
      {
      document.getElementById("confirmpassword").innerHTML = "";
      }


    if (educationalStatus == "") 
    {
        document.getElementById("edids").innerHTML = "Select an option";
        return false;
    }   else
        {
          document.getElementById("edids").innerHTML = "";
        }




        
    if ((age < 18) || (age > 60))
    {
        document.getElementById("ageids").innerHTML = "Age must be in between 18 to 60";
        return false;
    }   else
        {
          document.getElementById("ageids").innerHTML = "";
        }
    
    if (age == "") 
    {
        document.getElementById("ageids").innerHTML = "Required Field";
        return false;
    }   else
        {
          document.getElementById("ageids").innerHTML = "";
        }     

  }