document.getElementById("checklistForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const checklistResults = [];

  // Kiểm tra các mục checklist
  checklistResults.push({
    "Sẵn sàng tham gia nghiên cứu": document.getElementById("consent").checked,
    "Đủ 18 tuổi": document.getElementById("age").checked,
    "Chẩn đoán ung thư": document.getElementById("diagnosis").checked,
    "Kỳ vọng sống thêm": document.getElementById("life_expectancy").checked,
    "Tổn thương có thể đo lường": document.getElementById("measurable_tumor").checked,
    "Chỉ số ECOG": document.getElementById("eco_g").checked,
    "Mẫu mô trước điều trị": document.getElementById("sample_tissue").checked,
    "Kết quả thử thai": document.getElementById("pregnancy_test").checked,
    "Chức năng cơ quan đầy đủ": document.getElementById("function_status").checked,
    "Biện pháp tránh thai phụ nữ": document.getElementById("contraception_women").checked,
    "Biện pháp tránh thai nam giới": document.getElementById("contraception_men").checked
  });

  // Tạo danh sách kết quả
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ""; // Xóa danh sách cũ

  checklistResults.forEach(item => {
    for (const key in item) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${item[key] ? 'Có' : 'Không'}`;
      resultList.appendChild(listItem);
    }
  });

  // Hiển thị kết quả
  document.getElementById("result").style.display = "block";
});
