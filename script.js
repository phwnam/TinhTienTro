function calculate() {

      // Fetch input values
      var electricityLastMonth = parseFloat(document.getElementById('electricity-lastmonth').value);
      var electricityThisMonth = parseFloat(document.getElementById('electricity-thismonth').value);
      var electricityPrice = parseFloat(document.getElementById('electricity-price').value);
      var waterLastMonth = parseFloat(document.getElementById('water-lastmonth').value);
      var waterThisMonth = parseFloat(document.getElementById('water-thismonth').value);
      var waterPrice = parseFloat(document.getElementById('water-price').value);
      var internet = parseFloat(document.getElementById('internet').value);
      var service = parseFloat(document.getElementById('service').value);

      // // Validate input values
      // if (isNaN(electricityLastMonth) || isNaN(electricityThisMonth) || isNaN(electricityPrice) || isNaN(waterLastMonth) || isNaN(waterThisMonth) || isNaN(waterPrice) || isNaN(internet) || isNaN(service)) {
      //     alert("Please enter valid numbers for all input fields.");
      //     return;
      // }

      // Calculate consumption
      var electricity = electricityThisMonth - electricityLastMonth;
      var water = waterThisMonth - waterLastMonth;

      // Calculate costs
      var electricityCost = electricity * electricityPrice;
      var waterCost = water * waterPrice;
      var internetCost = internet;
      var serviceCost = service;

      // Calculate total cost
      var totalCost = electricityCost + waterCost + internetCost + serviceCost;

      // Display results
      var resultDiv = document.getElementById('result');
      var electricityDiv = document.getElementById('electricityCost');
      var waterDiv = document.getElementById('waterCost');

      resultDiv.innerHTML = "Tổng tiền cần trả ước tính: " + totalCost.toLocaleString('vi-VN') + " VNĐ";
      electricityDiv.innerHTML = "Tiền điện ước tính: " + electricityCost.toLocaleString('vi-VN') + " VNĐ";
      waterDiv.innerHTML = "Tiền nước ước tính: " + waterCost.toLocaleString('vi-VN') + " VNĐ";
  
}

  function calculate1(){
    var elecNumber = parseFloat(document.getElementById('elecNumber').value);
    var elecChenhLech = parseFloat(document.getElementById('elecChenhLech').value);
    
    var dienBac1 = 10 * 1806;
    var dienBac2 = 10 * 1806;
    var dienBac3 = 21 * 1806;
    var dienBac4 = 21 * 1806;
    var dienBac5 = 21 * 1806;
    var dienBac6 = 10 * 1806;

    var bac1 = document.getElementById('bac1');
    var bac2 = document.getElementById('bac2');
    var bac3 = document.getElementById('bac3');
    var bac4 = document.getElementById('bac4');
    var bac5 = document.getElementById('bac5');
    var bac6 = document.getElementById('bac6');


  }
  