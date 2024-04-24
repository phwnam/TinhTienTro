
// console.log(rent);
// console.log(electricityNumber);
// console.log(TotalElectricityPrice);
// console.log(waterNumber);
// console.log(TotalWaterPrice);
// console.log(internet);
// console.log(service);


var currentDate = new Date();
var options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
var formattedDate = currentDate.toLocaleString('vi-VN', options);

var data = {
  date: formattedDate,
  electricity: electricityNumber,
  water: waterNumber,
};

function addToHistory() {
  var rent = parseFloat(document.getElementById('rent').value);
  var electricityNumber = parseFloat(document.getElementById('electricityNumber').value);
  var TotalElectricityPrice = parseFloat(document.getElementById('total-electricity-price').value);
  var waterNumber = parseFloat(document.getElementById('waterNumber').value);
  var TotalWaterPrice = parseFloat(document.getElementById('total-water-price').value);
  var internet = parseFloat(document.getElementById('internet').value);
  var service = parseFloat(document.getElementById('service').value);

  var electricityPrice = TotalElectricityPrice / electricityNumber;
  var waterPrice = TotalWaterPrice / waterNumber;
  var internetCost = internet;
  var serviceCost = service;
  var totalCost = rent + TotalElectricityPrice + TotalWaterPrice + internetCost + serviceCost;
  var resultDiv = document.getElementById('result');
  var electricityDiv = document.getElementById('electricityPrice');
  var waterDiv = document.getElementById('waterPrice');

  resultDiv.innerHTML = "Tổng tiền cần thanh toán: " + totalCost.toLocaleString('vi-VN') + " VNĐ";
  electricityDiv.innerHTML = "Giá điện: " + electricityPrice.toLocaleString('vi-VN') + " VNĐ";
  waterDiv.innerHTML = "Giá nước: " + waterPrice.toLocaleString('vi-VN') + " VNĐ";



  dataList.push(item);
  displayDataList();
  postData(dataList);
}
var item = {
  date: formattedDate,
  electricity: electricityNumber,
  water: waterNumber,
};

function calculate() {
  var rent = parseFloat(document.getElementById('rent').value);
  var electricityNumber = parseFloat(document.getElementById('electricityNumber').value);
  var TotalElectricityPrice = parseFloat(document.getElementById('total-electricity-price').value);
  var waterNumber = parseFloat(document.getElementById('waterNumber').value);
  var TotalWaterPrice = parseFloat(document.getElementById('total-water-price').value);
  var internet = parseFloat(document.getElementById('internet').value);
  var service = parseFloat(document.getElementById('service').value);


  var electricityPrice = TotalElectricityPrice / electricityNumber;
  var waterPrice = TotalWaterPrice / waterNumber;
  var internetCost = internet;
  var serviceCost = service;
  var totalCost = rent + TotalElectricityPrice + TotalWaterPrice + internetCost + serviceCost;
  var resultDiv = document.getElementById('result');
  var electricityDiv = document.getElementById('electricityPrice');
  var waterDiv = document.getElementById('waterPrice');

  resultDiv.innerHTML = "Tổng tiền cần thanh toán: " + totalCost.toLocaleString('vi-VN') + " VNĐ";
  electricityDiv.innerHTML = "Giá điện: " + electricityPrice.toLocaleString('vi-VN') + " VNĐ";
  waterDiv.innerHTML = "Giá nước: " + waterPrice.toLocaleString('vi-VN') + " VNĐ";
}

// Các phần còn lại của mã không thay đổi

var dataList = [];

function displayDataList() {
  var list = document.getElementById('list');
  list.innerHTML = ''; // Xóa nội dung hiện tại của danh sách trước khi cập nhật

  // Kiểm tra xem dataList có phần tử nào không trước khi tạo các phần tử <li>
  if (dataList.length === 0) {
    var listItem = document.createElement('li');
    listItem.textContent = "Không có dữ liệu";
    list.appendChild(listItem);
  } else {
    // Lặp qua mỗi phần tử trong dataList và tạo phần tử <li> cho mỗi mục
    dataList.forEach(function (data) {
      var listItem = document.createElement('li');
      listItem.textContent = `${data.date}: Điện - ${data.electricity}kWh, Nước - ${data.water}m3`;
      list.appendChild(listItem); // Sử dụng biến list thay vì dataListContainer
    });
  }
}


//===============================================API===========================================
function postData() {
  // Địa chỉ URL của Mock API
  const url = 'https://6610b7ec0640280f219d51a6.mockapi.io/tro';

  // Dữ liệu cần đẩy lên

  // Tùy chọn của yêu cầu POST
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  };

  // Thực hiện yêu cầu POST bằng Fetch API
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      console.log('Data successfully posted:');
      // Xử lý kết quả nếu cần
    })
    .catch(error => {
      console.error('There was a problem posting the data:', error);
    });
}




// Lấy thẻ canvas trong HTML
var ctx = document.getElementById('myChart').getContext('2d');

function generateMonthlyData(dataList) {
  // Tạo một đối tượng để lưu trữ dữ liệu thống kê hàng tháng
  var monthlyData = {
    labels: [], // Danh sách các nhãn (ví dụ: "Tháng 1", "Tháng 2",...)
    datasets: [] // Danh sách các dataset
  };

  // Tạo một đối tượng dataset cho số điện tiêu thụ
  var electricityDataset = {
    label: 'Số điện tiêu thụ',
    data: [], // Danh sách dữ liệu (số điện tiêu thụ)
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  };

  // Tạo một đối tượng dataset cho số nước tiêu thụ
  var waterDataset = {
    label: 'Số nước tiêu thụ',
    data: [], // Danh sách dữ liệu (số nước tiêu thụ)
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  };

  // Lặp qua mỗi phần tử trong dataList và thêm dữ liệu vào các dataset tương ứng
  dataList.forEach(function (data) {
    // Lấy ngày của dữ liệu và thêm vào nhãn của monthlyData
    monthlyData.labels.push(data.date);

    // Thêm dữ liệu số điện tiêu thụ vào electricityDataset
    electricityDataset.data.push(data.electricity);

    // Thêm dữ liệu số nước tiêu thụ vào waterDataset
    waterDataset.data.push(data.water);
  });

  // Thêm các dataset vào danh sách datasets của monthlyData
  monthlyData.datasets.push(electricityDataset);
  monthlyData.datasets.push(waterDataset);

  return monthlyData;
}


// Định nghĩa dữ liệu mẫu cho biểu đồ
var monthlyData = generateMonthlyData(dataList);



// Tạo biểu đồ
var myChart = new Chart(ctx, {
  type: 'bar',
  data: monthlyData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

