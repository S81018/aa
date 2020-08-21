// ---------------------切换登录和注册的盒子---------------------

$('.login a').click(function () {
    $('.register').show().prev().hide();
});

$('.register a').click(function () {
    $('.login').show().next().hide();
});

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
});


// ------------------------------注册功能--------------------
$('.register form').on('submit', function (e) {
    e.preventDefault();
    // 收集表单数据
    var data = $(this).serialize();
    // console.log(data);
    $.ajax({
        type: 'POST',
        url: 'http://ajax.frontend.itheima.net/api/reguser',
        data: data,
        success: function (res) {
            layer.msg(res.message);
            if (res.status === 0) {
                $('.login').show().next().hide();
                // 清空注册的表单
                $('.register form')[0].reset();


            }
        }
    })
})