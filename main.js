document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function activateTab(button) {
    // Remove active class from all buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.remove('bg-primary');
      btn.classList.remove('text-white');
      btn.classList.add('bg-white');
    });

    // Add active class to clicked button
    button.classList.add('active');
    button.classList.add('bg-gray-100');
    button.classList.remove('bg-white');

    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    // Show selected tab content
    const tabId = button.getAttribute('data-tab');
    const selectedContent = document.getElementById(tabId);
    selectedContent.classList.remove('hidden');
  }

  // Add click event to each tab button
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      activateTab(this);
    });
  });

  // Activate the first tab when the page loads
  activateTab(tabButtons[0]);
});


// Lấy đường dẫn từ URL
const path = window.location.pathname; // "/impressum/" hoặc "/about/"
const page = path.split('/')[1]; // Lấy phần đầu tiên sau domain, ví dụ: "impressum"

// Hiển thị nội dung tương ứng
if (page) {
  const targetElement = document.getElementById(page);

  if (targetElement) {
    targetElement.classList.remove("hidden");
    document.getElementById("home").classList.add("hidden");
  } else {
    // Nếu không tìm thấy nội dung phù hợp, hiển thị trang mặc định
    document.getElementById("home").classList.remove("hidden");
  }
}


// Add mobile menu functionality here if needed
const mobileMenuButton = document.querySelector('[data-mobile-menu]');
const mobileMenu = document.querySelector('[data-menu]');

// Menu mobile
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');  // Chuyển đổi trạng thái ẩn/hiện của menu
}


if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}