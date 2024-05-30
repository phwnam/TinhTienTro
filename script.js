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
  var elecNumberThisMonth = parseFloat(document.getElementById('elecNumberThisMonth').value);
  var elecNumber = elecNumberThisMonth - elecNumberLastMonth;
  var elecChenhLech = parseFloat(document.getElementById('elecChenhLech').value);

  
   if (elecNumberLastMonth === "") {
    document.getElementById('elecNumberLastMonth').focus();
    alert("Vui lòng nhập tháng trước");
    return;
  } else if (elecNumberLastMonth < 0) {
    alert("Vui lòng nhập số điện lớn hơn 0");
    document.getElementById('elecNumberLastMonth').focus();
    return;
  }

  if (elecNumberThisMonth < 0) {
    alert("Vui lòng nhập số điện lớn hơn 0");
    document.getElementById('elecNumberThisMonth').focus();
    return;
  } else if (elecNumberThisMonth < elecNumberLastMonth) {
    alert("Số điện tháng này phải lớn hơn hoặc bằng số điện tháng trước");
    document.getElementById('elecNumberThisMonth').focus();
    return;
  }

  if (elecChenhLech < 0) {
    alert("Số điện chênh lệch phải lớn hơn 0");
    document.getElementById('elecChenhLech').focus();
    return;
  }

  var dienBac1 = 10 * 1806;
  var dienBac2 = 10 * 1866;
  var dienBac3 = 21 * 2167;
  var dienBac4 = 21 * 2729;
  var dienBac5 = 21 * 3050;
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
    cost = dienBac1 + dienBac2 + dienBac3 + (elecNumber - 41) * 2729;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + "21 kWh - " + dienBac3.toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + (elecNumber - 41) + " kWh - " + ((elecNumber - 41) * 2729).toLocaleString('vi-VN') + " VNĐ";
    bac5.innerHTML = "Điện bậc 5: " + 0;
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else if (elecNumber <= 83) {
    cost = dienBac1 + dienBac2 + dienBac3 + dienBac4 + (elecNumber - 62) * 3050;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + "21 kWh - " + dienBac3.toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + "21 kWh - " + dienBac4.toLocaleString('vi-VN') + " VNĐ";
    bac5.innerHTML = "Điện bậc 5: " + (elecNumber - 62) + " kWh - " + ((elecNumber - 62) * 3050).toLocaleString('vi-VN') + " VNĐ";
    bac6.innerHTML = "Điện bậc 6: " + 0;
  } else {
    cost = dienBac1 + dienBac2 + dienBac3 + dienBac4 + dienBac5 + (elecNumber - 83) * 3151;
    bac1.innerHTML = "Điện bậc 1: " + "10 kWh - " + dienBac1.toLocaleString('vi-VN') + " VNĐ";
    bac2.innerHTML = "Điện bậc 2: " + "10 kWh - " + dienBac2.toLocaleString('vi-VN') + " VNĐ";
    bac3.innerHTML = "Điện bậc 3: " + "21 kWh - " + dienBac3.toLocaleString('vi-VN') + " VNĐ";
    bac4.innerHTML = "Điện bậc 4: " + "21 kWh - " + dienBac4.toLocaleString('vi-VN') + " VNĐ";
    bac5.innerHTML = "Điện bậc 5: " + "21 kWh - " + dienBac5.toLocaleString('vi-VN') + " VNĐ";
    bac6.innerHTML = "Điện bậc 6: " + (elecNumber - 83) + " kWh - " + ((elecNumber - 83) * 3151).toLocaleString('vi-VN') + " VNĐ";

  }
  document.getElementById('costTruocThue').innerHTML = "Tổng tiền trước thuế: " + cost.toLocaleString('vi-VN') + " VNĐ";

  var thue = cost * 0.08;
  document.getElementById('thue').innerHTML = "Thuế (8%): " + thue.toLocaleString('vi-VN') + " VNĐ";

  var tongtien = cost + thue + elecChenhLech
  document.getElementById('totalCost').innerHTML = "Tổng tiền sau thuế: " + tongtien.toLocaleString('vi-VN') + " VNĐ";

  var gia1sodien = tongtien / elecNumber
  document.getElementById('gia1sodien').innerHTML = "Giá 1 số điện (sau thuế): " + gia1sodien.toLocaleString('vi-VN') + " VNĐ";

  document.getElementById('hr1').classList.remove('hidden');
  document.getElementById('hr2').classList.remove('hidden');
  document.getElementById('hr3').classList.remove('hidden');
  document.getElementById('hr4').classList.remove('hidden');
  document.getElementById('hr5').classList.remove('hidden');
}
