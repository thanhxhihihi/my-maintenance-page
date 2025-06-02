document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider-img');
    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        // Ẩn tất cả các slide và bỏ active khỏi dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Chuyển sang slide tiếp theo
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 } // Quay lại slide đầu nếu hết
        
        // Hiển thị slide hiện tại và active dot tương ứng
        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active');

        setTimeout(showSlides, 4000); // Tự động chuyển slide sau 4 giây
    }

    // Hàm chuyển slide khi click vào dot
    window.currentSlide = function(n) {
        slideIndex = n - 1; // Điều chỉnh để phù hợp với index mảng
        showSlidesManual();
    }

    function showSlidesManual() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    // Khởi chạy slider lần đầu
    showSlides();
});
