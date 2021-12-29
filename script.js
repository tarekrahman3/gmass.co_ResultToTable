let emails = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
let result = [];
for (var i=0;i<emails.length;i++)
{
    var data = {
        'email':emails[i].getElementsByTagName('td')[0].innerText,
        'status':emails[i].getElementsByClassName("verify verify-status")[0].innerText,
        'details':emails[i].getElementsByClassName("proof")[0].getElementsByTagName('span')[0].getAttribute('data-original-title')
    };
    result.push(data);
};
table(result);
