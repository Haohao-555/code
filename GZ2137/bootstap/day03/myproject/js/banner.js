var data = [
    {
        "lg_img_url":"./images/slide_01_2000x410.jpg", 
        "sm_img_url":"./images/slide_01_640x340.jpg"
    },
    {
        "lg_img_url":"./images/slide_02_2000x410.jpg", 
        "sm_img_url":"./images/slide_02_640x340.jpg"
    },
    {
        "lg_img_url":"./images/slide_03_2000x410.jpg", 
        "sm_img_url":"./images/slide_03_640x340.jpg"
    },
    {
        "lg_img_url":"./images/slide_04_2000x410.jpg", 
        "sm_img_url":"./images/slide_04_640x340.jpg"
    }
]

function template(array) {
    var html_point = '';
    var html_image = '';
    for(var i = 0 ; i < array.length ; i ++){
        // 拼接导航点字符串
        html_point += '<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="'+(i == 0 ? "active" : "")+'"></li>'
        // 判断轮播图
        html_image += '<div class="carousel-item '+(i == 0 ? "active": "")+'">'
        html_image += '    <a href="#" class="pc_image d-none d-md-block" style="background-image: url('+array[i].lg_img_url+');"></a>'
        html_image += '    <a href="#" class="mb_image d-md-none d-lg-none d-xl-none"><img src="'+array[i].sm_img_url+'" alt=""></a>'
        html_image += '</div>'

    }
    // 渲染导航点
    $(".tt_banner .carousel-indicators").html(html_point);
    // 渲染图片
    $(".tt_banner .carousel-inner").html(html_image);
}

// 渲染轮播图的数据
template(data);