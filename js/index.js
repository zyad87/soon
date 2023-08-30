var countDownDate = new Date();
countDownDate = new Date(
  countDownDate.getFullYear() + 1,
  countDownDate.getMonth() - 2,
  20
);
var x = setInterval(function () {
  var now = new Date();
  var diff = countDownDate - now;
  var Month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("months").innerHTML = Month;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// Example starter JavaScript for disabling form submissions if there are invalid fields
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 500) { // أو أي قيمة تمثل حجم الشاشة الصغيرة
        var b = document.getElementsByTagName("BODY")[0];

        b.addEventListener("mousemove", function (event) {
            parallaxed(event);
        });

        function parallaxed(e) {
            var amountMovedX = (e.clientX * -0.3 / 8);
            var amountMovedY = (e.clientY * -0.3 / 8);
            var x = document.getElementsByClassName("parallaxed");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)';
            }
        }
    }
});

