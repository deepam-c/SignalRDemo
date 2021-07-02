
$(() => {

    GetEmployees();
    var conn = new signalR.HubConnectionBuilder().withUrl("/signalrdataServer").build();
    conn.start();
    conn.on("readEmployees", function () {
        GetEmployees();
    });
    GetEmployees();

    function GetEmployees() {
        var tr = '';
        $.ajax({
            url: '/Employees/GetEmployees',
            method: 'GET',
            success: (result) => {
                $.each(result, (k, v) => {
                    tr += `<tr>
                    <td>${v.EmpCode}</td>
                    <td>${v.FirstName}</td>
                    <td>${v.LastName}</td>
                    <td>
                    <a href='../Employees/Edit?id=${v.EmpId}'>Edit</a>
                    <a href='../Employees/Details?id=${v.EmpId}'>Details</a>
                    <a href='../Employees/Delete?id=${v.EmpId}'>Delete</a>
                    </td>
                    </tr>`;

                });

                $('#EmpBody').html(tr);
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
})