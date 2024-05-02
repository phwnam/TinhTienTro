function calculate() {
    var electricity = parseFloat(document.getElementById('electricity').value);
    var electricityPrice = parseFloat(document.getElementById('electricity-price').value);
    var water = parseFloat(document.getElementById('water').value);
    var waterPrice = parseFloat(document.getElementById('water-price').value);
    var internet = parseFloat(document.getElementById('internet').value);
    var service = parseFloat(document.getElementById('service').value);
  
    var electricityCost = electricity * electricityPrice; // 
    var waterCost = water * waterPrice; // 
    var internetCost = internet; // 
    var serviceCost = service;
  
    var totalCost = electricityCost + waterCost + internetCost + serviceCost;
  
    var resultDiv = document.getElementById('result');
    var electricityDiv = document.getElementById('electricityCost');
    var waterDiv = document.getElementById('waterCost');


    resultDiv.innerHTML = "Tổng tiền cần trả ước tính: " + totalCost.toLocaleString('vi-VN') + " VNĐ";
    electricityDiv.innerHTML ="Tiền điện ước tính: " + electricityCost.toLocaleString('vi-VN') + " VNĐ";
    waterDiv.innerHTML ="Tiền nước ước tính: " + waterCost.toLocaleString('vi-VN') + " VNĐ";
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
  