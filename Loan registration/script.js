function validateEmployeeId() {

    var employeeIdInput = document.getElementById("employeeId");

    var employeeIdError = document.getElementById("employeeIdError");



    if (!employeeIdInput.checkValidity()) {

      employeeIdError.textContent = "Employee ID must start with 'E' and be at least 4 characters long.";

      return false;

    } else {

      employeeIdError.textContent = "";

      return true;

    }

  }



  function calculateLoan() {

    // Validate Employee ID

    if (!validateEmployeeId()) {

      return;

    }



    // Retrieve values from the form

    var designation = document.getElementById("designation").value.toLowerCase();

    var loanAmount = parseFloat(document.getElementById("loanAmount").value);

    var interestRate = parseFloat(document.getElementById("interestRate").value);



    // Calculate loan amount and interest based on designation

    var loanAmountPayable = loanAmount;

    var interestPayable = (interestRate / 100) * loanAmount;



    if (designation === "manager") {

      interestPayable += 500; // Additional amount for managers

    }



    // Display the result

    var resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "<h2>Loan Details</h2>" +

      "<p>Loan Amount Payable: Rs" + loanAmountPayable.toFixed(2) + "</p>" +

      "<p>Interest Payable: Rs" + interestPayable.toFixed(2) + "</p>";

  }