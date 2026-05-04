document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-toggle");
    const nav = document.querySelector(".nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    const form = document.querySelector("#contactForm");
    const notice = document.querySelector("#formNotice");

    if (form && notice) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.querySelector('[name="name"]').value.trim();
            const phone = form.querySelector('[name="phone"]').value.trim();

            if (!name || !phone) {
                notice.style.display = "block";
                notice.innerText = "请填写姓名和联系电话。";
                return;
            }

            notice.style.display = "block";
            notice.innerText = "提交成功，我们会尽快与您联系。";
            form.reset();
        });
    }
});
