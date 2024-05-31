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

function calculate1() {

  var elecNumberLastMonth = parseFloat(document.getElementById('elecNumberLastMonth').value);
  console.log(elecNumberLastMonth);
  var elecNumberThisMonth = parseFloat(document.getElementById('elecNumberThisMonth').value);
  console.log(elecNumberThisMonth);
  var elecChenhLech = parseFloat(document.getElementById('elecChenhLech').value);

  var elecNumber = elecNumberThisMonth - elecNumberLastMonth + elecChenhLech;

  var dienBac1 = 10 * 1806;
  var dienBac2 = 10 * 1866;
  var dienBac3 = 20 * 2167;
  var dienBac4 = 20 * 2729;
  var dienBac5 = 20 * 3050;
  var dienBac6 = 10 * 3151;

  var bac1 = document.getElementById('bac1');
  var bac2 = document.getElementById('bac2');
  var bac3 = document.getElementById('bac3');
  var bac4 = document.getElementById('bac4');
  var bac5 = document.getElementById('bac5');
  var bac6 = document.getElementById('bac6');

  document.getElementById('sodien').innerHTML = "Số điện tiêu thụ: " + elecNumber + " kWh";



  if (elecNumber <= 10) {
    cost = elecNumber * 1806;
    bac1.innerHTML = "Điện bậc 1: " + elecNumber + " kWh - " + cost.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + 0;
    bac3.innerHTML = "Điện bậc 3: " + 0;
    bac4.innerHTML = "Điện bậc 4: " + 0;
    bac5.innerHTML = "Điện bậc 5: " + 0;
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else if (elecNumber <= 20) {
    cost = "Điện bậc 1: " + dienBac1 + (elecNumber - 10) * 1866;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + (elecNumber - 10) + " kWh - " + ((elecNumber - 10) * 1866).toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + 0;
    bac4.innerHTML = "Điện bậc 4: " + 0;
    bac5.innerHTML = "Điện bậc 5: " + 0;
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else if (elecNumber <= 41) {
    cost = dienBac1 + dienBac2 + (elecNumber - 20) * 2167;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + (elecNumber - 20) + " kWh - " + ((elecNumber - 20) * 2167).toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + 0;
    bac5.innerHTML = "Điện bậc 5: " + 0;
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else if (elecNumber <= 62) {
    cost = dienBac1 + dienBac2 + dienBac3 + (elecNumber - 40) * 2729;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + "21 kWh - " + dienBac3.toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + (elecNumber - 40) + " kWh - " + ((elecNumber - 40) * 2729).toLocaleString('vi-VN') + " VNĐ";
    bac5.innerHTML = "Điện bậc 5: " + 0;
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else if (elecNumber <= 83) {
    cost = dienBac1 + dienBac2 + dienBac3 + dienBac4 + (elecNumber - 60) * 3050;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + "21 kWh - " + dienBac3.toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + "21 kWh - " + dienBac4.toLocaleString('vi-VN') + " VNĐ";
    bac5.innerHTML = "Điện bậc 5: " + (elecNumber - 60) + " kWh - " + ((elecNumber - 60) * 3050).toLocaleString('vi-VN') + " VNĐ";
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else {
    cost = dienBac1 + dienBac2 + dienBac3 + dienBac4 + dienBac5 + (elecNumber - 80) * 3151;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + "21 kWh - " + dienBac3.toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + "21 kWh - " + dienBac4.toLocaleString('vi-VN') + " VNĐ";
    bac5.innerHTML = "Điện bậc 5: " + "21 kWh - " + dienBac5.toLocaleString('vi-VN') + " VNĐ";
    bac6.innerHTML = "Điện bậc 6: " + (elecNumber - 80) + " kWh - " + ((elecNumber - 80) * 3151).toLocaleString('vi-VN') + " VNĐ";

  }
  document.getElementById('costTruocThue').innerHTML = "Tổng tiền điện trước thuế: " + cost.toLocaleString('vi-VN') + " VNĐ";

  var thue = cost * 0.08;
  document.getElementById('thue').innerHTML = "Thuế (8%): " + thue.toLocaleString('vi-VN') + " VNĐ";

  var tongtien = cost + thue;
  document.getElementById('totalCost').innerHTML = "<strong>Tổng tiền diện sau thuế: " + tongtien.toLocaleString('vi-VN') + " VNĐ</ strong>";

  var gia1sodien = tongtien / elecNumber
  document.getElementById('gia1sodien').innerHTML = "Giá 1 số điện (sau thuế): " + gia1sodien.toLocaleString('vi-VN') + " VNĐ";

  document.getElementById('hr1').classList.remove('hidden');
  document.getElementById('hr2').classList.remove('hidden');
  document.getElementById('hr3').classList.remove('hidden');
  document.getElementById('hr4').classList.remove('hidden');
  document.getElementById('hr5').classList.remove('hidden');
}

function calculateNuoc(){
  var waterNumberLastMonth = parseFloat(document.getElementById('waterNumberLastMonth').value);
  var waterNumberThisMonth = parseFloat(document.getElementById('waterNumberThisMonth').value);
  var waterNumber = waterNumberThisMonth - waterNumberLastMonth;

  
  var nuocBac1 = 2 * 8500;
  var nuocBac2 = 2 * 9900;
  var nuocBac3 = 2 * 16000;
  var nuocBac4 = 6 * 27000;

  var nuocbac1 = document.getElementById('nuocbac1');
  var nuocbac2 = document.getElementById('nuocbac2');
  var nuocbac3 = document.getElementById('nuocbac3');
  var nuocbac4 = document.getElementById('nuocbac4');

  document.getElementById('sonuoc').innerHTML = "Số nước tiêu thụ: " + waterNumber + " m3";

  var cost;

  if (waterNumber <= 2) {
    cost = waterNumber * 8500;
    nuocbac1.innerHTML = "Nước bậc 1: " + waterNumber + " m3 - " + cost.toLocaleString('vi-VN') + " VNĐ";
    nuocbac2.innerHTML = "Nước bậc 2: " + 0;
    nuocbac3.innerHTML = "Nước bậc 3: " + 0;
    nuocbac4.innerHTML = "Nước bậc 4: " + 0;
    
  } else if (waterNumber <= 4) {
    cost =  nuocBac1 + (waterNumber - 2) * 9900;
    nuocbac1.innerHTML = "Nước bậc 1: " + "2 m3 - " + nuocBac1.toLocaleString('vi-VN') + " VNĐ";
    nuocbac2.innerHTML = "Nước bậc 2: " + (waterNumber - 2) + " m3 - " + ((waterNumber - 10) * 9900).toLocaleString('vi-VN') + " VNĐ";
    nuocbac3.innerHTML = "Nước bậc 3: " + 0;
    nuocbac4.innerHTML = "Nước bậc 4: " + 0;
    
  } else if (waterNumber <= 6) {
    cost = nuocBac1 + nuocBac2 + (waterNumber - 4) * 16000;
    nuocbac1.innerHTML = "Nước bậc 1: " + "2 m3 - " + nuocBac1.toLocaleString('vi-VN') + " VNĐ";
    nuocbac2.innerHTML = "Nước bậc 2: " + "2 m3 - " + nuocBac2.toLocaleString('vi-VN') + " VNĐ";
    nuocbac3.innerHTML = "Nước bậc 3: " + (waterNumber - 4) + " m3 - " + ((waterNumber - 4) * 16000).toLocaleString('vi-VN') + " VNĐ";
    nuocbac4.innerHTML = "Nước bậc 4: " + 0;
    
  } else {
    cost = nuocBac1 + nuocBac2 + nuocBac3 + (waterNumber - 6) * 27000;
    nuocbac1.innerHTML = "Nước bậc 1: " + "2 m3 - " + nuocBac1.toLocaleString('vi-VN') + " VNĐ";
    nuocbac2.innerHTML = "Nước bậc 2: " + "2 m3 - " + nuocBac2.toLocaleString('vi-VN') + " VNĐ";
    nuocbac3.innerHTML = "Nước bậc 3: " + "2 m3 - " + nuocBac3.toLocaleString('vi-VN') + " VNĐ";
    nuocbac4.innerHTML = "Nước bậc 4: " + (waterNumber - 6) + " m3 - " + ((waterNumber - 6) * 27000).toLocaleString('vi-VN') + " VNĐ";
  }

  document.getElementById('costNuocTruocThue').innerHTML = "Tổng tiền nước trước thuế: " + cost.toLocaleString('vi-VN') + " VNĐ";

  var thue = cost * 0.05;
  document.getElementById('thueNuoc').innerHTML = "Thuế (5%): " + thue.toLocaleString('vi-VN') + " VNĐ";

  var tongtienNuoc = Math.round(cost + thue);
  document.getElementById('totalCostNuoc').innerHTML = "<strong>Tổng tiền nước sau thuế: " + tongtienNuoc.toLocaleString('vi-VN') + " VNĐ </strong>";

  var gia1sonuoc = tongtienNuoc / waterNumber
  document.getElementById('gia1sonuoc').innerHTML = "Giá 1 số nước (sau thuế): " + gia1sonuoc.toLocaleString('vi-VN') + " VNĐ";

  document.getElementById('hr1nuoc').classList.remove('hiddenwater');
  document.getElementById('hr2nuoc').classList.remove('hiddenwater');
  document.getElementById('hr3nuoc').classList.remove('hiddenwater');
  document.getElementById('hr4nuoc').classList.remove('hiddenwater');
  document.getElementById('hr5nuoc').classList.remove('hiddenwater');
}
