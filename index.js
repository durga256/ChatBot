$(function(){
  var message = `welcome
  I am a ABC`;
 chat_add_message(message,false);
 choice_1();
});
function choice_1() {
  //trigger feed data
  contractInstance.feedData(function(err,result){
      console.log(err,result);
  })
  var c1= $('<button id="getstarted">Get Started</button>');
  $("#toappend").append(c1);
  var c2= $('<button id="policy">Look for Specific Policy/Company</button>');
  $("#toappend").append(c2);
  var c3= $('<button id="compare">Compare Policies</button>');
  $("#toappend").append(c3);
  $("#getstarted").click(function(){
    chat_add_message("Get Started",true);
    $(this).hide();
    $("#policy").hide();
    $("#compare").hide();
    var message1 = "define type of insurance";
    var message2 = "define factors to look for insurance";
    var message3 = "what type of insurance are you looking for?";
    chat_add_message(message1,false);
    chat_add_message(message2,false);
    chat_add_message(message3,false);
    //types of insurance
    var r1= $('<button id="child">Child Plans</button>');
    $("#toappend").append(r1);
    $("#child").click(function(){
      chat_add_message("Child Plans",true);
      type_of_insurance_remove();
      factors();
      // trigger basedOnType(0) in main.sol done
      contractInstance.basedOnType(0, (err, result) => {
      console.log(err, result)
      })
    });
    var r2= $('<button id="endowment">Endowment Plans</button>');
    $("#toappend").append(r2);
    $("#endowment").click(function(){
      chat_add_message("Endowment Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(1) in main.sol done
      factors();
      contractInstance.basedOnType(1, (err, result) => {
      console.log(err, result)
      })
    });
    var r3= $('<button id="moneyback">MoneyBack Plans</button>');
    $("#toappend").append(r3);
    $("#moneyback").click(function(){
      chat_add_message("MoneyBack Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(2) in main.sol done
      factors();
      contractInstance.basedOnType(2, (err, result) => {
      console.log(err, result)
      })
    });
    var r4= $('<button id="pension">Retirement Plans</button>');
    $("#toappend").append(r4);
    $("#pension").click(function(){
      chat_add_message("Retirement Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(3) in main.sol done
      factors();
      contractInstance.basedOnType(3, (err, result) => {
      console.log(err, result)
      })
    });
    var r5= $('<button id="term">Term Insurance</button>');
    $("#toappend").append(r5);
    $("#term").click(function(){
      chat_add_message("Term Insurance",true);
      type_of_insurance_remove();
      // trigger basedOnType(4) main.sol done
      factors();
      contractInstance.basedOnType(4, (err, result) => {
      console.log(err, result)
      })
    });
    var r6= $('<button id="ULIP">ULIP</button>');
    $("#toappend").append(r6);
    $("#ULIP").click(function(){
      chat_add_message("ULIP",true);
      type_of_insurance_remove();
      // trigger basedOnType(5) in main.sol done
      factors();
      contractInstance.basedOnType(5, (err, result) => {
      console.log(err, result)
      })
    });
    var r7= $('<button id="wholelife">WholeLife Plans</button>');
    $("#toappend").append(r7);
    $("#wholelife").click(function(){
      chat_add_message("WholeLife Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(6) in main.sol done
      factors();
      contractInstance.basedOnType(6, (err, result) => {
      console.log(err, result)
      })
    });
  });


  $("#policy").click(function(){
    chat_add_message("Look for Specific Policy/Company",true);
    $(this).hide();
    $("#getstarted").hide();
    $("#compare").hide();
    //display insurance Companies
    var _label = display_companies();
    //choice - types of insurance or diplay all policies
    chat_add_message("Looking for specific type or display all policies?",false);
    var f1= $('<button id="typeofinsurance">Type of Insurance</button>');
    $("#toappend").append(f1);
    $("#typeofinsurance").click(function(){
      chat_add_message("Type of Insurance",true);
      chat_add_message("What type of insurance?",false);
      onlyoneChoice_remove();
      //types of insurance
      var _type2;
      var r1= $('<button id="child">Child Plans</button>');
      $("#toappend").append(r1);
      $("#child").click(function(){
        chat_add_message("Child Plans",true);
        _type2 = 0;
        type_of_insurance_remove();
      });
      var r2= $('<button id="endowment">Endowment Plans</button>');
      $("#toappend").append(r2);
      $("#endowment").click(function(){
        chat_add_message("Endowment Plans",true);
        _type2 = 1;
        type_of_insurance_remove();
      });
      var r3= $('<button id="moneyback">MoneyBack Plans</button>');
      $("#toappend").append(r3);
      $("#moneyback").click(function(){
        chat_add_message("MoneyBack Plans",true);
         _type2 = 2;
         type_of_insurance_remove();
      });
      var r4= $('<button id="pension">Retirement Plans</button>');
      $("#toappend").append(r4);
      $("#pension").click(function(){
        chat_add_message("Retirement Plans",true);
        _type2 = 3;
        type_of_insurance_remove();
      });
      var r5= $('<button id="term">Term Insurance</button>');
      $("#toappend").append(r5);
      $("#term").click(function(){
        chat_add_message("Term Insurance",true);
        _type2 = 4;
        type_of_insurance_remove();
      });
      var r6= $('<button id="ULIP">ULIP</button>');
      $("#toappend").append(r6);
      $("#ULIP").click(function(){
        chat_add_message("ULIP",true);
        _type2 = 5;
        type_of_insurance_remove();
      });
      var r7= $('<button id="wholelife">WholeLife Plans</button>');
      $("#toappend").append(r7);
      $("#wholelife").click(function(){
        chat_add_message("WholeLife Plans",true);
        _type2 = 6;
        type_of_insurance_remove();
      });
      //trigger basedOnTypeandLabel(_type2,_label) in main.sol done
      contractInstance.basedOnTypeandLabel(_type2, _label, (err, result) => {
      console.log(err, result)
      })
    });
    var f2= $('<button id="displayallpolicies">Display all Policies</button>');
    $("#toappend").append(f2);
    $("#displayallpolicies").click(function(){
      chat_add_message("Display all Policies",true);
      onlyoneChoice_remove();
      //trigger basedOnLabel(_label) in main.sol done
      contractInstance.basedOnLabel(_label, (err, result) => {
      console.log(err, result)
      })
    });
  });


  $("#compare").click(function(){
    $(this).hide();
    $("#policy").hide();
    $("#getstarted").hide();
    var message3 = "what type of insurance are you looking for?";
    chat_add_message(message3,false);
    //types of insurance
    var r1= $('<button id="child">Child Plans</button>');
    $("#toappend").append(r1);
    $("#child").click(function(){
      chat_add_message("Child Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(0) in functions.sol done
      factors();
      contractInstance.basedOnType(0, (err, result) => {
      console.log(err, result)
      })
    });
    var r2= $('<button id="endowment">Endowment Plans</button>');
    $("#toappend").append(r2);
    $("#endowment").click(function(){
      chat_add_message("Endowment Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(1); in functions.sol done
      factors();
      contractInstance.basedOnType(1, (err, result) => {
      console.log(err, result)
      })
    });
    var r3= $('<button id="moneyback">MoneyBack Plans</button>');
    $("#toappend").append(r3);
    $("#moneyback").click(function(){
      chat_add_message("MoneyBack Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(2) in functions.sol done
      factors();
      contractInstance.basedOnType(2, (err, result) => {
      console.log(err, result)
      })
    });
    var r4= $('<button id="pension">Retirement Plans</button>');
    $("#toappend").append(r4);
    $("#pension").click(function(){
      chat_add_message("Retirement Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(3); in functions.sol done
      factors();
      contractInstance.basedOnType(3, (err, result) => {
      console.log(err, result)
      })
    });
    var r5= $('<button id="term">Term Insurance</button>');
    $("#toappend").append(r5);
    $("#term").click(function(){
      chat_add_message("Term Insurance",true);
      type_of_insurance_remove();
      // trigger basedOnType(4); in functions.sol done
      factors();
      contractInstance.basedOnType(4, (err, result) => {
      console.log(err, result)
      })
    });
    var r6= $('<button id="ULIP">ULIP</button>');
    $("#toappend").append(r6);
    $("#ULIP").click(function(){
      chat_add_message("ULIP",true);
      type_of_insurance_remove();
      // trigger basedOnType(5); in functions.sol done
      factors();
      contractInstance.basedOnType(5, (err, result) => {
      console.log(err, result)
      })
    });
    var r7= $('<button id="wholelife">WholeLife Plans</button>');
    $("#toappend").append(r7);
    $("#wholelife").click(function(){
      chat_add_message("WholeLife Plans",true);
      type_of_insurance_remove();
      // trigger basedOnType(6); in functions.sol
      factors();
      contractInstance.basedOnType(6, (err, result) => {
      console.log(err, result)
      })

    });
  });
}
function onlyoneChoice_remove() {
  $("#typeofinsurance").hide();
  $("#displayallpolicies").hide();
}
function type_of_insurance(){
  //types of insurance
  var _type2 = 0;

  return _type2;
}
function display_policies(){
  var narrowedDownPolicyNumbers = contractInstance.get_oneFactor();
}
function type_of_insurance_remove(){
  $("#child").hide();
  $("#endowment").hide();
  $("#moneyback").hide();
  $("#pension").hide();
  $("#term").hide();
  $("#ULIP").hide();
  $("#wholelife").hide();
  $("#goback1").hide();
}
function factors () {
  type_of_insurance_remove();
  chat_add_message("What factors do you wanna decide your Insurance plans on?",false);
  var a1= $('<button id="affordability">Affordability</button>');
  $("#toappend").append(a1);
  $("#affordability").click(function(){
    chat_add_message("Affordability",true);
    factors_layer_remove();
    fn_affordability();
  // trigger layer_Factors(0) in functions.sol done
  contractInstance.layer_Factors(0, (err, result) => {
  console.log(err, result)
  })
  });
  var a2= $('<button id="convenience">Convenience</button>');
  $("#toappend").append(a2);
  $("#convenience").click(function(){
    chat_add_message("Convenience",true);
  factors_layer_remove();
  // trigger layer_Factors(1) in functions.sol done
  contractInstance.layer_Factors(1, (err, result) => {
  console.log(err, result)
  })
  });
  var a3= $('<button id="coverage">Coverage years</button>');
  $("#toappend").append(a3);
  $("#coverage").click(function(){
    chat_add_message("Coverage years",true);
  factors_layer_remove();
    // trigger layer_Factors(2) in functions.sol done
    contractInstance.layer_Factors(2, (err, result) => {
    console.log(err, result)
    })
  });
  var a4= $('<button id="csr">Claim settlment ratio</button>');
  $("#toappend").append(a4);
  $("#csr").click(function(){
    chat_add_message("Claim settlement ratio",true);
  factors_layer_remove();
    // trigger layer_Factors(3) in functions.sol done
    contractInstance.layer_Factors(3, (err, result) => {
    console.log(err, result)
    })
  });
  var a5= $('<button id="payouttype">Claim Payment type</button>');
  $("#toappend").append(a5);
  $("#payouttype").click(function(){
    chat_add_message("Claim Payment type",true);
    factors_layer_remove();
    fn_payouttype();
  // trigger layer_Factors(4) in functions.sol done
  contractInstance.layer_Factors(4, (err, result) => {
  console.log(err, result)
  })
  });
  var a6= $('<button id="other">Other(loan,Paid-up Plans)</button>');
  $("#toappend").append(a6);
  $("#other").click(function(){
    chat_add_message("Other",true);
    factors_layer_remove();
    fn_other();
    // trigger layer_Factors(5) in functions.sol done
    contractInstance.layer_Factors(5, (err, result) => {
    console.log(err, result)
    })
  });
}
function factors_layer_remove() {
  $("#affordability").hide();
  $("#convenience").hide();
  $("#coverage").hide();
  $("#csr").hide();
  $("#payouttype").hide();
  $("#other").hide();
}
function fn_affordability(){
  chat_add_message("What kind of frequency are you looking for premium payment?",false);
  var b1= $('<button id="single">Single</button>');
  $("#toappend").append(b1);
  var b2= $('<button id="annual">Annual</button>');
  $("#toappend").append(b2);
  var b3= $('<button id="semiannual">Semi-Annual</button>');
  $("#toappend").append(b3);
  $("#single").click(function(){
    chat_add_message("Single",true);
  // trigger setaff_type(0) from functions.sol done
  contractInstance.setaff_type(0, (err, result) => {
  console.log(err, result)
  })
  aff_layer_remove();
  });
  $("#annual").click(function(){
    chat_add_message("Annual",true);
    // trigger setaff_type(1) from functions.sol done
    contractInstance.setaff_type(1, (err, result) => {
    console.log(err, result)
    })
  aff_layer_remove();
  });
  $("#semiannual").click(function(){
    chat_add_message("Semi-Annual",true);
  // trigger setaff_type(2) from functions.sol done
  contractInstance.setaff_type(2, (err, result) => {
  console.log(err, result)
  })
  aff_layer_remove();
  });
}
function aff_layer_remove() {
  $("#single").hide();
  $("#annual").hide();
  $("#semiannual").hide();
}
function fn_payouttype() {
  chat_add_message("What kind of claim settlement are you looking for?",false);
  var d1= $('<button id="lumpsum">Lump Sum</button>');
  $("#toappend").append(d1);
  var d2= $('<button id="installments">Installments</button>');
  $("#toappend").append(d2);
  var d3= $('<button id="lumpinstall">Lump Sum and Installments</button>');
  $("#toappend").append(d3);
  $("#lumpsum").click(function(){
    chat_add_message("Lump Sum",true);
    payout_layer_remove();
  // trigger setpayout_type(0) from functions.sol done
  contractInstance.setpayout_type(0, (err, result) => {
  console.log(err, result)
  })
  });
  $("#installments").click(function(){
    chat_add_message("Installments",true);
    payout_layer_remove();
    // trigger setpayout_type(1) from functions.sol done
    contractInstance.setpayout_type(1, (err, result) => {
    console.log(err, result)
    })
  });
  $("#lumpinstall").click(function(){
    chat_add_message("Lump Sum and Installments",true);
    payout_layer_remove();
  // trigger setpayout_type(2) from functions.sol done
  contractInstance.setpayout_type(2, (err, result) => {
  console.log(err, result)
  })
  });
}
function payout_layer_remove(){
  $("#lumpsum").hide();
  $("#installments").hide();
  $("#lumpinstall").hide();
}
function fn_other() {
  chat_add_message("Loan or Paid-up Plan benefit?",false);
  var e1= $('<button id="loan">Loan benefit</button>');
  $("#toappend").append(e1);
  var e2= $('<button id="paidup">Paid-up Plan benefit</button>');
  $("#toappend").append(e2);
  $("#loan").click(function(){
    chat_add_message("Loan benefit",true);
    other_layer_remove();
    // trigger setother_type(0) from functions.sol done
    contractInstance.setother_type(0, (err, result) => {
    console.log(err, result)
    })
  });
  $("#paidup").click(function(){
    chat_add_message("Paid-up Plan benefit",true);
    other_layer_remove();
    // trigger setother_type(1) from functions.sol done
    contractInstance.setother_type(1, (err, result) => {
    console.log(err, result)
    })
  });
}
function other_layer_remove(){
  $("#loan").hide();
  $("#paidup").hide();
}
// Add a message to the chat history
function chat_add_message(message, isUser) {
    var class_suffix = isUser ? '_user' : '';
    var html = '\
    <div class="chat_line">\
        <div class="chat_bubble'+class_suffix+'">\
          <div class="chat_triangle'+class_suffix+'"></div>\
            '+message+'\
        </div>\
    </div>\
    ';
    chat_add_html(html);
}
// Add HTML to the chat history
function chat_add_html(html) {
    $("#chat_log").append(html);
    chat_scrolldown();
}
// Scrolls the chat history to the bottom
function chat_scrolldown() {
    $("#chat_log").animate({ scrollTop: $("#chat_log")[0].scrollHeight }, 500);
}
