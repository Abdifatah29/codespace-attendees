var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var students = JSON.parse(xhr.responseText);
        //html to hold ol list tag
        var statusHTML = '<ul class="bulleted">';
        //loop to run through list of employees
        for (var i = 0; i < students.length; i += 1) {
            if (students[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += students[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'data/students.json');
xhr.send();