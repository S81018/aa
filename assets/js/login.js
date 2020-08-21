// -------------------------------登录功能---------------------
$('.login form').on('submit', function (e) {
    e.preventDefault();
    // 收集账号密码
    var data = $(this).serialize();
    // 用ajax提交
    $.ajax({
        type: 'POST',
        url: 'http://ajax.frontend.itheima.net/api/login',
        data: data,
        success: function (res) {
            if (res.status === 0) {
                localStorage.setItem('token', res.token)
                location.href = '/index.html';
            }
        }
    })
})