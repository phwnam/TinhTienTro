function calculate() {
    var electricity = parseFloat(document.getElementById('electricity').value);
    var TotalElectricityPrice = parseFloat(document.getElementById('total-electricity-price').value);
    var water = parseFloat(document.getElementById('water').value);
    var TotalWaterPrice = parseFloat(document.getElementById('total-water-price').value);
    var internet = parseFloat(document.getElementById('internet').value);
    var service = parseFloat(document.getElementById('service').value);
  
    var electricityPrice = electricity * electricityPrice; // 
    var waterPrice = water * waterPrice; // 
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
  