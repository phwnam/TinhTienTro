function calculate() {
    var electricity = parseFloat(document.getElementById('electricity').value);
    var water = parseFloat(document.getElementById('water').value);
    var internet = parseFloat(document.getElementById('internet').value);
  
    var electricityCost = electricity * 3000; // 
    var waterCost = water * 14000; // 
    var internetCost = internet; // 
  
    var totalCost = electricityCost + waterCost + internetCost;
  
    var resultDiv = document.getElementById('result');
    var electricityDiv = document.getElementById('electricityCost');
    var waterDiv = document.getElementById('waterCost');


    resultDiv.innerHTML = "Tổng tiền cần trả ước tính: " + totalCost.toLocaleString('vi-VN') + " VNĐ";
    electricityDiv.innerHTML ="Tiền điện ước tính: " + electricityCost.toLocaleString('vi-VN') + " VNĐ";
    waterDiv.innerHTML ="Tiền nước ước tính: " + waterCost.toLocaleString('vi-VN') + " VNĐ";
  }
  