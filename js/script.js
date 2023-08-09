var copybtns = document.querySelectorAll("#btn")


copybtns.forEach(function (btn) {
    btn.onclick = function () {
    alert("تم نسخ النص..")
    }
}

);
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })