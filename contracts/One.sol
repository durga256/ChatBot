pragma solidity >=0.4.22 <0.6.0;

contract Functions{
    struct Policy {
        uint rank;
        uint24[5] _bytes;
        uint24[7] ints;
        bool online;
        bool loan; bool paidup;
    }
    struct PolicyStr {
        string name; string deathBenefit; string maturityBenefit; string websiteURL; string riders;
    }
    mapping(uint => Policy) public policyToNumber;
    mapping(uint => PolicyStr) public policyStrToNumber;

  uint[] public _oneType;
  uint[] public _oneFactor;
  uint8 aff_type = 5;
  uint8 payout_type = 0;
  uint8 other_type = 0;
  function basedOnType(uint _type) public payable {
  delete _oneType;
    for(uint8 i=1; i <= 10 ; i++)
    {
      if (policyToNumber[i].ints[4] == _type)
        _oneType.push(i);
    }
  }

  function basedOnTypeandLabel(uint _type, uint _label) public payable{
  delete _oneType;
    for(uint8 i=1; i <= 10 ; i++){
        if (policyToNumber[i].ints[4] == _type && policyToNumber[i].rank == _label )
        _oneType.push(i);
    }
  }
  function basedOnLabel(uint _label) public payable{
  delete _oneType;
  for(uint8 i=1; i <= 10 ; i++){
      if (policyToNumber[i].rank == _label )
      _oneType.push(i);
  }
  }

  function layer_Factors(uint factor) public payable {
  delete _oneFactor;
     if (factor == 0) {
     if(aff_type == 0){
        for(uint8 i=0 ; i < _oneType.length ; i++){
           if (policyToNumber[_oneType[i]].ints[6] == 0 || policyToNumber[_oneType[i]].ints[6] == 3 || policyToNumber[_oneType[i]].ints[6] == 4 )
            _oneFactor.push(_oneType[i]);
            }
      }
      else if (aff_type == 1){
           for(uint8 i=0 ; i < _oneType.length ; i++){
             if (policyToNumber[_oneType[i]].ints[6] != 0 && policyToNumber[_oneType[i]].ints[6] != 2 )
                 _oneFactor.push(_oneType[i]);
           }
     }
   else if (aff_type == 2){
     for(uint8 i=0 ; i < _oneType.length ; i++){
         if (policyToNumber[_oneType[i]].ints[6] == 2 && policyToNumber[_oneType[i]].ints[6] == 5)
               _oneFactor.push(_oneType[i]);
               }
       }
    }//affordability
     else if (factor == 1) {
          for(uint8 i=0 ; i < _oneType.length && _oneFactor.length <=10 ; i++){
              if (policyToNumber[_oneType[i]].online == true)
                _oneFactor.push(_oneType[i]);
            }
    }// convenience

     else if(factor == 3) {
        for(uint8 i=0 ; i < _oneType.length && _oneFactor.length <=10 ; i++){
              if (policyToNumber[_oneType[i]]._bytes[0] == 1)
                _oneFactor.push(_oneType[i]);
            }
     }//CSR
     else if (factor == 4) {
        for(uint8 i=0 ; i < _oneType.length  && _oneFactor.length <=10 ; i++){
          if (policyToNumber[_oneType[i]].ints[5] ==  payout_type )
              _oneFactor.push(_oneType[i]);
        }
     }//payouttype
     else if (factor == 5) {
     if(other_type == 0)
        for(uint8 i=0 ; i < _oneType.length  && _oneFactor.length <=10 ; i++){
          if (policyToNumber[_oneType[i]].loan ==  true )
              _oneFactor.push(_oneType[i]);
        }
        else
        for(uint8 i=0 ; i < _oneType.length  && _oneFactor.length <=10 ; i++){
          if (policyToNumber[_oneType[i]].paidup ==  true )
              _oneFactor.push(_oneType[i]);
        }
     }//other
  }
  function get_policytonum(uint8 number) public view returns(uint24[7] memory, uint24[5] memory, bool){
       return (policyToNumber[number].ints , policyToNumber[number]._bytes, policyToNumber[number].online);
  }
  function get_policystrtonum(uint8 number) public view returns(string memory, string memory, string memory , string memory, string memory){
       return (policyStrToNumber[number].name , policyStrToNumber[number].deathBenefit, policyStrToNumber[number].maturityBenefit,policyStrToNumber[number].websiteURL, policyStrToNumber[number].riders);
  }
  function get_oneFactor()public view returns (uint[] memory){
     return _oneFactor;
  }
  function get_oneType()public view returns (uint[] memory){
     return _oneType;
  }
  function setaff_type (uint8 _ttype) public {
    aff_type = _ttype;
  }
  function setpayout_type (uint8 _ttype) public {
    payout_type = _ttype;
  }
  function setother_type (uint8 _ttype) public {
    other_type = _ttype;
  }

 function feedData() public payable {
  //MaxLife
  policyToNumber[1].rank = 1;
  policyToNumber[1]._bytes = [9826,40,0,24425,123456];
  policyToNumber[1].ints = [8,150000,1500,65,1,0,4];
  policyToNumber[1].online = false;
  policyToNumber[1].loan = false;
  policyToNumber[1].paidup = true;
  policyStrToNumber[1].name = "Max Life Savings Advantage Plan";
  policyStrToNumber[1].deathBenefit = "In case of death of the life insured on or before completion of 10 policy years, Guaranteed Death Benefit along with accrued Guaranteed Additions, Paid Up Additions (if any) & Terminal Bonus (if any) shall be payable.";
  policyStrToNumber[1].maturityBenefit = "You enjoy 110% of Guaranteed Sum Assured on Maturity along with Accrued Guaranteed Additions, Accrued Paid Up Additions (if any) and Terminal Bonus (if any).";
  policyStrToNumber[1].websiteURL = "https://www.maxlifeinsurance.com/savings-and-income-plans/savings-advantage-plan";
  policyStrToNumber[1].riders = "Max Life Term Plus Rider, Max Life Waiver of Premium Plus (WOP) Rider, Max Life Accidental Death & Dismemberment Rider";

  policyToNumber[2].rank = 1;
  policyToNumber[2]._bytes = [9826,12,0,462960,0];
  policyToNumber[2].ints = [6,150000,75000,67,1,1,1];
  policyToNumber[2].online = false;
  policyToNumber[2].loan = false;
  policyToNumber[2].paidup = true;
  policyStrToNumber[2].name = "Max Life Guaranteed Income Plan";
  policyStrToNumber[2].deathBenefit = "On death during the policy term, the nominee will receive a guaranteed lumpsum payout with an option to convert it into monthly income for 10 years.";
  policyStrToNumber[2].maturityBenefit = "On completion of Policy Term/Premium Payment Term, you will get a Terminal Benefit and start getting guaranteed monthly income for 10 years";
  policyStrToNumber[2].websiteURL = "https://www.maxlifeinsurance.com/savings-and-income-plans/guaranteed-income-plan";
  policyStrToNumber[2].riders = "No riders available";

  policyToNumber[3].rank = 1;
  policyToNumber[3]._bytes = [9826,25,0,50000,123456];
  policyToNumber[3].ints = [15,150000,1500,70,1,0,4];
  policyToNumber[3].online = true;
  policyToNumber[3].loan = true;
  policyToNumber[3].paidup = true;
  policyStrToNumber[3].name = "Max Life Life Gain Premier";
  policyStrToNumber[3].deathBenefit = "Guaranteed Death Benefit, Accrued Paid up Additions (if any), Terminal Bonus (if any)";
  policyStrToNumber[3].maturityBenefit = "Total Maturity Benefit = Guaranteed Maturity Benefit + Accrued Paid Up Additions (if any) + Terminal Bonus (if any)";
  policyStrToNumber[3].websiteURL = "https://www.maxlifeinsurance.com/savings-and-income-plans/life-gain-premier";
  policyStrToNumber[3].riders = "Max Life Term Plus Rider, Max Life Accidental Death & Dismemberment Rider, Max Life Waiver Of Premium Plus Rider";

  policyToNumber[4].rank = 1;
  policyToNumber[4]._bytes = [9826,50,0,500000,0];
  policyToNumber[4].ints = [10,150000,1000000,75,4,2,5];
  policyToNumber[4].online = true;
  policyToNumber[4].loan = false;
  policyToNumber[4].paidup = true;
  policyStrToNumber[4].name = "Max Life Smart Term Plan";
  policyStrToNumber[4].deathBenefit = "higher of: For Single Pay variant - 1.25 times the Single Premium; For Other variants - 10 times the Annualised Premium *, 105% of all premiums paid as on the date of death, Guaranteed Sum Assured on Maturity **, Any absolute amount assured to be paid on death";
  policyStrToNumber[4].maturityBenefit = "No maturity benefit is payable";
  policyStrToNumber[4].websiteURL = "https://www.maxlifeinsurance.com/term-insurance-plans/smart-term-plan";
  policyStrToNumber[4].riders = "Max Life Waiver of Premium Plus Rider";

  policyToNumber[5].rank = 1;
  policyToNumber[5]._bytes = [9826,20,0,125000,0];
  policyToNumber[5].ints = [10,150000,25000,70,5,0,4];
  policyToNumber[5].online = false;
  policyToNumber[5].loan = false;
  policyToNumber[5].paidup = true;
  policyStrToNumber[5].name = "Max Life Fast Track Super Plan";
  policyStrToNumber[5].deathBenefit = "The product has Level Death Benefit. On death of the Life Insured, higher of Sum Assured or Fund Value (as on the date of death), subject to a minimum of 105% of all premiums paid, shall be payable.";
  policyStrToNumber[5].maturityBenefit = "Fund Value = Summation of [Accumulated Units in Fund(s) X NAV of respective Fund(s) as on the Maturity Date]";
  policyStrToNumber[5].websiteURL = "https://www.maxlifeinsurance.com/ulip-plans/fast-track-super-plan";
  policyStrToNumber[5].riders = "No riders available";

  policyToNumber[6].rank = 1;
  policyToNumber[6]._bytes = [9826,30,440400,500000,10000000];
  policyToNumber[6].ints = [20,150000,8500,75,4,0,5];
  policyToNumber[6].online = false;
  policyToNumber[6].loan = false;
  policyToNumber[6].paidup = true;
  policyStrToNumber[6].name = "Max Life Premium Return Protection Plan";
  policyStrToNumber[6].deathBenefit = "higher of: 10 times the Annualised Premium; 105% of total premiums paid; Guaranteed Maturity Sum Assured (GMSA); Guaranteed Death Sum Assured (GDSA);";
  policyStrToNumber[6].maturityBenefit = "Guaranteed Maturity Sum Assured (GMSA) is defined as the Total Premium payable over the Premium Payment Term.";
  policyStrToNumber[6].websiteURL = "https://www.maxlifeinsurance.com/term-insurance-plans/premium-return-protection-plan";
  policyStrToNumber[6].riders = "No riders available";

  policyToNumber[7].rank = 1;
  policyToNumber[7]._bytes = [9826,0,0,0,123456];
  policyToNumber[7].ints = [10,150000,25000,60,3,0,4];
  policyToNumber[7].online = false;
  policyToNumber[7].loan = false;
  policyToNumber[7].paidup = true;
  policyStrToNumber[7].name = "Max Life Forever Young Pension Plan";
  policyStrToNumber[7].deathBenefit = "Higher of Fund Value or 105% of the cumulative premiums paid (including top up premiums, if any).";
  policyStrToNumber[7].maturityBenefit = "No maturity";
  policyStrToNumber[7].websiteURL = "https://www.maxlifeinsurance.com/retirement-plans/forever-young-pension-plan";
  policyStrToNumber[7].riders = "No riders available";

  policyToNumber[8].rank = 1;
  policyToNumber[8]._bytes = [9826,21,0,212000,0];
  policyToNumber[8].ints = [13,100000,20000,66,0,0,5];
  policyToNumber[8].online = false;
  policyToNumber[8].loan = false;
  policyToNumber[8].paidup = true;
  policyStrToNumber[8].name = "Max Life Future Genius Education Plan";
  policyStrToNumber[8].deathBenefit = "refer brochure";
  policyStrToNumber[8].maturityBenefit = "The accrued Paid Up Additions (if any) and Terminal Bonus (if any) are payable at the end of Policy Term to provide for a seed capital or to ensure financial planning for higher studies.";
  policyStrToNumber[8].websiteURL = "https://www.maxlifeinsurance.com/child-insurance-plans/future-genius-education-plan";
  policyStrToNumber[8].riders = "Max Life Term Plus Rider, Max Life Accidental Death & Dismemberment Rider, Max Life Waiver Of Premium Plus Rider.";

  policyToNumber[9].rank = 1;
  policyToNumber[9]._bytes = [9826,25,0,324000,0];
  policyToNumber[9].ints = [12,150000,25000,75,2,1,5];
  policyToNumber[9].online = false;
  policyToNumber[9].loan = true;
  policyToNumber[9].paidup = true;
  policyStrToNumber[9].name = "Max Life Monthly Income Advantage Plan";
  policyStrToNumber[9].deathBenefit = "Death Benefit is higher of : 11 times the Annualised Premium, 105% of all the premiums paid till the date of death of the Life Insured, Guaranteed Sum Assured on Maturity, Any absolute amount assured to be payable on death";
  policyStrToNumber[9].maturityBenefit = "A sum of accrued compound reversionary bonuses and terminal bonus is payable on maturity to cater to your long term financial goals.";
  policyStrToNumber[9].websiteURL = "https://www.maxlifeinsurance.com/savings-and-income-plans/monthly-income-/advantage-plan";
  policyStrToNumber[9].riders = "Max Life Term Plus Rider, Max Life Accidental Death & Dismemberment Rider";

  policyToNumber[10].rank = 1;
  policyToNumber[10]._bytes = [9826,100,0,50000,123456];
  policyToNumber[10].ints = [0,150000,8500,100,6,0,5];
  policyToNumber[10].online = false;
  policyToNumber[10].loan = true;
  policyToNumber[10].paidup = true;
  policyStrToNumber[10].name = "Max Life Whole Life Super";
  policyStrToNumber[10].deathBenefit = "Guaranteed Death Benefit, plus, Accrued Paid Up Additions (if any), plus, Terminal Bonus (if any)";
  policyStrToNumber[10].maturityBenefit = "no maturity benefit payable";
  policyStrToNumber[10].websiteURL = "https://www.maxlifeinsurance.com/savings-and-income-plans/whole-life-super";
  policyStrToNumber[10].riders = "Max Life Term Plus Rider, Max Life Accidental Death & Dismemberment Rider, Max Life Waiver Of Premium Plus Rider";

  }
}
