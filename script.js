// Khi bấm nút "Đăng ký ngay", hiển thị modal đăng ký
document.getElementById('registerBtn').addEventListener('click', function () {
  var registrationModal = new bootstrap.Modal(document.getElementById('registrationModal'));
  registrationModal.show();
});

// Xử lý sự kiện gửi form đăng ký
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Lấy dữ liệu từ form
  var studentName = document.getElementById('studentName').value;
  var studentPhone = document.getElementById('studentPhone').value;
  var parentName = document.getElementById('parentName').value;
  var parentPhone = document.getElementById('parentPhone').value;
  var subject = document.getElementById('subject').value;
  var registrationTime = document.getElementById('registrationTime').value;
  
  // Ví dụ: hiển thị thông báo xác nhận (có thể thay thế bằng xử lý gửi dữ liệu đến máy chủ)
  alert("Đăng ký học thành công:\n" +
        "Họ và tên học sinh: " + studentName + "\n" +
        "SĐT học sinh: " + studentPhone + "\n" +
        "Họ và tên phụ huynh: " + parentName + "\n" +
        "SĐT phụ huynh: " + parentPhone + "\n" +
        "Môn học: " + subject + "\n" +
        "Thời gian: " + registrationTime);
  
  // Đóng modal
  var registrationModalEl = document.getElementById('registrationModal');
  var modal = bootstrap.Modal.getInstance(registrationModalEl);
  modal.hide();
  
  // Reset form
  document.getElementById('registrationForm').reset();
});
