document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var carName = document.getElementById('car-name').value;
    var problem = document.getElementById('problem').value;
    var contact = document.getElementById('contact').value;

    alert('Car Name: ' + carName + '\nProblem: ' + problem + '\nContact Number: ' + contact);
});