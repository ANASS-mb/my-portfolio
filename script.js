document.addEventListener('DOMContentLoaded', function() {
    // إنشاء زر القائمة للجوال
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const nav = document.querySelector('header .navbar nav');
    const ul = document.querySelector('header .navbar ul');
    
    // إدخال زر التبديل قبل القائمة
    nav.insertBefore(menuToggle, ul);
    
    // تفعيل القائمة عند الضغط
    menuToggle.addEventListener('click', function() {
        ul.classList.toggle('active');
    });
    
    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('header .navbar a').forEach(link => {
        link.addEventListener('click', () => {
            ul.classList.remove('active');
        });
    });
    
    // التمرير السلس للروابط الداخلية (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // معالجة نموذج الاتصال (تجريبي)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message envoyé ! Merci de m\'avoir contacté.');
            this.reset();
        });
    }
});