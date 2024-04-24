function calculate() {
    var rent = parseFloat(document.getElementById('rent'))
    var electricityNumber = parseFloat(document.getElementById('electricityNumber').value);
    var TotalElectricityPrice = parseFloat(document.getElementById('total-electricity-price').value);
    var waterNumber = parseFloat(document.getElementById('waterNumber').value);
    var TotalWaterPrice = parseFloat(document.getElementById('total-water-price').value);
    var internet = parseFloat(document.getElementById('internet').value);
    var service = parseFloat(document.getElementById('service').value);
  
    var electricityPrice = TotalElectricityPrice / electricityNumber; // 
    var waterPrice = TotalWaterPrice / waterNumber; // 
    var internetCost = internet; // 
    var serviceCost = service;
  
    var totalCost = TotalElectricityPrice + TotalWaterPrice + internetCost + serviceCost;
  
    var resultDiv = document.getElementById('result');
    var electricityDiv = document.getElementById('electricityPrice');
    var waterDiv = document.getElementById('waterPrice');


    resultDiv.innerHTML = "Tổng tiền cần thanh toán: " + totalCost.toLocaleString('vi-VN') + " VNĐ";
    electricityDiv.innerHTML ="Giá điện: " + electricityPrice.toLocaleString('vi-VN') + " VNĐ";
    waterDiv.innerHTML ="Giá nước: " + waterPrice.toLocaleString('vi-VN') + " VNĐ";
  }
  