// 1、完成头部导航的数据渲染
(function () {
    /*
    思路：
        1、在data.js当中获得数据
        2、将数据转换成标签放置到nav当中即可
    * */

// 1、通过createElement完成。 结构不复杂时使用。增加事件比较方便。
    // 存放导航的元素
    // var topBarNav = document.querySelector(".topBar nav");
    // goodsDetail.topBarNav.forEach(function (item) {
    //     var a = document.createElement("a");
    //     a.href = item.url;
    //     a.innerText = item.title;
    //     topBarNav.appendChild(a);
    // })

// 2、将生成的标签写成字符串，然后再放置到指定的位置。结构复杂时使用。
//     var topBarNav = document.querySelector(".topBar nav");
//     var str = "";
//     goodsDetail.topBarNav.forEach(function (item) {
//         str+="<a href='"+item.url+"'>"+item.title+"</a>"
//     })
//     topBarNav.innerHTML = str;

// 3、通过map实现，未优化
//     var topBarNav = document.querySelector(".topBar nav");
//     var arr = goodsDetail.topBarNav.map(function (item) {
//         return (
//             "<a href='"+item.url+"'>"+item.title+"</a>"
//         )
//     })
//     topBarNav.innerHTML = arr.join("");

// 3、通过map实现,优化
//     var topBarNav = document.querySelector(".topBar nav");
//     topBarNav.innerHTML = goodsDetail.topBarNav.map(function (item) {
//         return (
//             "<a href='"+item.url+"'>"+item.title+"</a>"
//         )
//     }).join("");

// 4、使用utils.js---> aTp方法
    console.log(111111112);
    utils.aTp(".topBar nav", goodsDetail.topBarNav);
})();

//2、商品分类导航
(function () {
    // 通过map实现,优化
    // var goodsNav = document.querySelector(".goodsNav nav");
    // goodsNav.innerHTML =goodsDetail.goodsTypeNav.map(function (item) {
    //     return (
    //         "<a target='_blank' title='"+item.title+"' href='"+item.url+"'>"+item.title+"</a>"
    //     )
    // }).join("");

    // aTp方法
    utils.aTp(".goodsNav nav", goodsDetail.goodsTypeNav);
})();

// 3、类别面包屑导航
(function () {
    utils.typeTp(".typeNav",goodsDetail.typeNav);
})();

// 4、完成放大镜
(function () {
    /*******************面向过程的版本*********************************************/
    /*
    * 思路：
    * 1、先完成缩略图功能
    *   1、找到数据。
    *   2、通过数据创建img
    *   3、img增加单击事件（该事件完成：当点击图片以后，图片上方的大图会发生相对应的变化）
    * 2、放大镜的功能
    * */
    /***********1、完成缩略图，未优化*/
    // // 缩略图列表
    // var thumbList = document.querySelector(".thumbList");
    // // 未放大图片
    // var smallImg = document.querySelector("#smallImg");
    // // 选中缩略图图片的下标
    // var activeIndex = 0;
    // // 左侧按钮
    // var leftBtn = document.querySelector(".arrow-left");
    // // 右侧按钮
    // var rightBtn = document.querySelector(".arrow-right");
    // // 移动的位置
    // var translateIndex =0;
    // goodsDetail.imgsrc.forEach(function (item,index) {
    //     // 创建img元素。
    //     var img = document.createElement("img");
    //     img.src = item.s;
    //     // 当前的index如果与指定的图片下标值相同，那么增加红色边框
    //     if(index === activeIndex) img.style.borderColor = "red";
    //     img.onclick = function(){
    //         // 判断用户点击的当前项是否为选中项。
    //         if(index === activeIndex) return;
    //         // 将选中的图片边框移除掉
    //         thumbList.querySelectorAll("img")[activeIndex].style.borderColor="#ccc";
    //         activeIndex = index;
    //         smallImg.src = this.src;
    //         this.style.borderColor = "red";
    //         console.log("执行")
    //     }
    //     thumbList.appendChild(img);
    // })
    // leftBtn.onclick = function () {
    //     // console.log("left");
    //     translateIndex-=2;
    //     if(translateIndex<0)
    //         translateIndex = 0;
    //     var imgW = thumbList.firstElementChild.offsetWidth;
    //     var marginRight = parseInt(getComputedStyle(thumbList.firstElementChild).marginRight);
    //     var distanceNum = translateIndex*(imgW+marginRight);// 移动的最终距离
    //     // console.log(i*(imgW+16));
    //     thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    // }
    // rightBtn.onclick = function () {
    //     // console.log("right");
    //     /*
    //     * 1、尝试移动
    //     * 2、计算移动的距离
    //     * */
    //     translateIndex+=2;
    //     // 允许移动的最大数量。
    //     var maxIndex = goodsDetail.imgsrc.length-5;
    //     if(translateIndex>maxIndex)
    //         translateIndex = maxIndex;
    //     var imgW = thumbList.firstElementChild.offsetWidth;
    //     var marginRight = parseInt(getComputedStyle(thumbList.firstElementChild).marginRight);
    //     var distanceNum = translateIndex*(imgW+marginRight);// 移动的最终距离
    //     // console.log(i*(imgW+16));
    //     thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    // }


    /**********************优化缩略图效果*/
    // // 缩略图列表
    // var thumbList = document.querySelector(".thumbList");
    // // 未放大图片
    // var smallImg = document.querySelector("#smallImg");
    // // 选中缩略图图片的下标
    // var activeIndex = 0;
    // // 左侧按钮
    // var leftBtn = document.querySelector(".arrow-left");
    // // 右侧按钮
    // var rightBtn = document.querySelector(".arrow-right");
    // // 移动的位置
    // var translateIndex =0;
    // goodsDetail.imgsrc.forEach(function (item,index) {
    //     // 创建img元素。
    //     var img = document.createElement("img");
    //     img.src = item.s;
    //     // 当前的index如果与指定的图片下标值相同，那么增加红色边框
    //     if(index === activeIndex) img.style.borderColor = "red";
    //     img.onclick = function(){
    //         // 判断用户点击的当前项是否为选中项。
    //         if(index === activeIndex) return;
    //         // 将选中的图片边框移除掉
    //         thumbList.querySelectorAll("img")[activeIndex].style.borderColor="#ccc";
    //         activeIndex = index;
    //         smallImg.src = this.src;
    //         this.style.borderColor = "red";
    //         console.log("执行")
    //     }
    //     thumbList.appendChild(img);
    // })
    // leftBtn.onclick = move.bind(this,-2);
    // rightBtn.onclick = move.bind(this,2);
    // // num:移动的图片数量
    // function move(num){
    //     translateIndex+=num;
    //     var maxIndex = goodsDetail.imgsrc.length-5;
    //     if(translateIndex>maxIndex) translateIndex = maxIndex;
    //     else if(translateIndex < 0 ) translateIndex = 0;
    //     var imgW = thumbList.firstElementChild.offsetWidth;
    //     var marginRight = parseInt(getComputedStyle(thumbList.firstElementChild).marginRight);
    //     var distanceNum = translateIndex*(imgW+marginRight);// 移动的最终距离
    //     thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    // }



    // /**********************加上放大镜效果*/
    // // 缩略图列表
    // var thumbList = document.querySelector(".thumbList");
    // // 未放大图片
    // var smallImg = document.querySelector("#smallImg");
    // // 选中缩略图图片的下标
    // var activeIndex = 0;
    // // 左侧按钮
    // var leftBtn = document.querySelector(".arrow-left");
    // // 右侧按钮
    // var rightBtn = document.querySelector(".arrow-right");
    // var zoomBox = document.querySelector(".zoom-box");
    // var zoom = document.querySelector(".zoom");
    // var bigDiv = document.querySelector(".bigImg");
    // var bigImg = document.querySelector("#bigImg");
    // // 移动的位置
    // var translateIndex =0;
    // zoomBox.onmouseenter = function(){
    //     zoom.style.display = bigDiv.style.display =  "block";
    // }
    // zoomBox.onmouseleave = function(){
    //     zoom.style.display = bigDiv.style.display =  "none";
    // }
    // zoomBox.onmousemove = function(e){
    //     // 鼠标距离视口的左侧值
    //     console.log(e.clientX);
    //     // zoomBox距离视口的左侧值
    //     console.log(zoomBox.getBoundingClientRect().left);
    //     // zoom的一半
    //     console.log(zoom.offsetWidth/2);
    //     var left = e.clientX - zoomBox.getBoundingClientRect().left - zoom.offsetWidth/2;
    //     var top = e.clientY - zoomBox.getBoundingClientRect().top-zoom.offsetHeight/2;
    //     if(left < 0) left = 0;
    //     else if(left>(zoomBox.clientWidth-zoom.offsetWidth)){
    //         left = zoomBox.clientWidth-zoom.offsetWidth;
    //     }
    //     if(top<0) top = 0;
    //     else if(top>(zoomBox.clientHeight-zoom.offsetHeight)){
    //         top = zoomBox.clientHeight-zoom.offsetHeight;
    //     }
    //
    //
    //     zoom.style.left = left+"px";
    //     zoom.style.top = top+"px";
    //
    //     // bigDiv.scrollLeft = left*2;
    //     // bigDiv.scrollTop = top*2;
    //
    //     bigImg.style.transform = "translate("+(-left*2)+"px,"+(-top*2)+"px)"
    //     // console.log("移动");
    // }
    //
    // goodsDetail.imgsrc.forEach(function (item,index) {
    //     // 创建img元素。
    //     var img = document.createElement("img");
    //     img.src = item.s;
    //     // 当前的index如果与指定的图片下标值相同，那么增加红色边框
    //     if(index === activeIndex) img.style.borderColor = "red";
    //     img.onclick = function(){
    //         // 判断用户点击的当前项是否为选中项。
    //         if(index === activeIndex) return;
    //         // 将选中的图片边框移除掉
    //         thumbList.querySelectorAll("img")[activeIndex].style.borderColor="#ccc";
    //         activeIndex = index;
    //         smallImg.src = this.src;
    //         this.style.borderColor = "red";
    //         console.log("执行")
    //     }
    //     thumbList.appendChild(img);
    // })
    // leftBtn.onclick = move.bind(this,-2);
    // rightBtn.onclick = move.bind(this,2);
    // // num:移动的图片数量
    // function move(num){
    //     translateIndex+=num;
    //     var maxIndex = goodsDetail.imgsrc.length-5;
    //     if(translateIndex>maxIndex) translateIndex = maxIndex;
    //     else if(translateIndex < 0 ) translateIndex = 0;
    //     var imgW = thumbList.firstElementChild.offsetWidth;
    //     var marginRight = parseInt(getComputedStyle(thumbList.firstElementChild).marginRight);
    //     var distanceNum = translateIndex*(imgW+marginRight);// 移动的最终距离
    //     thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    // }




    /**********************加上放大镜效果,优化*/
    // // 缩略图列表
    // var thumbList = document.querySelector(".thumbList");
    // // 未放大图片
    // var smallImg = document.querySelector("#smallImg");
    // // 选中缩略图图片的下标
    // var activeIndex = 0;
    // // 左侧按钮
    // var leftBtn = document.querySelector(".arrow-left");
    // // 右侧按钮
    // var rightBtn = document.querySelector(".arrow-right");
    // var zoomBox = document.querySelector(".zoom-box");
    // var zoom = document.querySelector(".zoom");
    // var bigDiv = document.querySelector(".bigImg");
    // var bigImg = document.querySelector("#bigImg");
    // // 移动的位置
    // var translateIndex =0;
    // function init(){
    //     zoomBox.onmouseenter = mouseenter;
    //     zoomBox.onmouseleave = mouseleave;
    //     zoomBox.onmousemove = mousemove;
    //     goodsDetail.imgsrc.forEach(function (item,index) {
    //         // 创建img元素。
    //         var img = document.createElement("img");
    //         img.src = item.s;
    //         // 当前的index如果与指定的图片下标值相同，那么增加红色边框
    //         if(index === activeIndex) img.style.borderColor = "red";
    //         img.onclick = function(){
    //             // 判断用户点击的当前项是否为选中项。
    //             if(index === activeIndex) return;
    //             // 将选中的图片边框移除掉
    //             thumbList.querySelectorAll("img")[activeIndex].style.borderColor="#ccc";
    //             activeIndex = index;
    //             smallImg.src = this.src;
    //             bigImg.src = item.b;
    //             this.style.borderColor = "red";
    //             console.log("执行")
    //         }
    //         thumbList.appendChild(img);
    //     })
    //     leftBtn.onclick = move.bind(this,-2);
    //     rightBtn.onclick = move.bind(this,2);
    // }
    // function mouseenter(){
    //     zoom.style.display = bigDiv.style.display =  "block";
    // }
    // function mouseleave(){
    //     zoom.style.display = bigDiv.style.display =  "none";
    // }
    // function mousemove(e){
    //     var left = e.clientX - zoomBox.getBoundingClientRect().left - zoom.offsetWidth/2;
    //     var top = e.clientY - zoomBox.getBoundingClientRect().top-zoom.offsetHeight/2;
    //     if(left < 0) left = 0;
    //     else if(left>(zoomBox.clientWidth-zoom.offsetWidth)){
    //         left = zoomBox.clientWidth-zoom.offsetWidth;
    //     }
    //     if(top<0) top = 0;
    //     else if(top>(zoomBox.clientHeight-zoom.offsetHeight)){
    //         top = zoomBox.clientHeight-zoom.offsetHeight;
    //     }
    //
    //     zoom.style.left = left+"px";
    //     zoom.style.top = top+"px";
    //
    //     bigImg.style.transform = "translate("+(-left*2)+"px,"+(-top*2)+"px)"
    // }
    // // num:移动的图片数量
    // function move(num){
    //     translateIndex+=num;
    //     var maxIndex = goodsDetail.imgsrc.length-5;
    //     if(translateIndex>maxIndex) translateIndex = maxIndex;
    //     else if(translateIndex < 0 ) translateIndex = 0;
    //     var imgW = thumbList.firstElementChild.offsetWidth;
    //     var marginRight = parseInt(getComputedStyle(thumbList.firstElementChild).marginRight);
    //     var distanceNum = translateIndex*(imgW+marginRight);// 移动的最终距离
    //     thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    // }
    // init();
    /*******************面向对象的版本*********************************************/
    // 将过程当中的变量作为对象的属性，将过程当中的函数，作为对象的方法。
    // function PreView(){
    //     this.thumbList = document.querySelector(".thumbList");
    //     // 未放大图片
    //     this.smallImg = document.querySelector("#smallImg");
    //     // 选中缩略图图片的下标
    //     this.activeIndex = 0;
    //     // 左侧按钮
    //     this.leftBtn = document.querySelector(".arrow-left");
    //     // 右侧按钮
    //     this.rightBtn = document.querySelector(".arrow-right");
    //     this.zoomBox = document.querySelector(".zoom-box");
    //     this.zoom = document.querySelector(".zoom");
    //     this.bigDiv = document.querySelector(".bigImg");
    //     this.bigImg = document.querySelector("#bigImg");
    //     // 移动的位置
    //     this.translateIndex =0;
    // }
    // PreView.prototype.init = function () {
    //     this.zoomBox.onmouseenter = this.mouseenter.bind(this);
    //     this.zoomBox.onmouseleave = this.mouseleave.bind(this);
    //     this.zoomBox.onmousemove = this.mousemove.bind(this);
    //     goodsDetail.imgsrc.forEach(function (item,index) {
    //         // 创建img元素。
    //         var img = document.createElement("img");
    //         img.src = item.s;
    //         // 当前的index如果与指定的图片下标值相同，那么增加红色边框
    //         if(index === this.activeIndex) img.style.borderColor = "red";
    //         img.onclick = function(){
    //             // 判断用户点击的当前项是否为选中项。
    //             if(index === this.activeIndex) return;
    //             // 将选中的图片边框移除掉
    //             this.thumbList.querySelectorAll("img")[this.activeIndex].style.borderColor="#ccc";
    //             this.activeIndex = index;
    //             this.smallImg.src = img.src;
    //             this.bigImg.src = item.b;
    //             img.style.borderColor = "red";
    //         }.bind(this);
    //         this.thumbList.appendChild(img);
    //     },this)
    //     this.leftBtn.onclick = this.move.bind(this,-2);
    //     this.rightBtn.onclick = this.move.bind(this,2);
    // }
    // PreView.prototype.mouseenter = function () {
    //     this.zoom.style.display = this.bigDiv.style.display =  "block";
    // }
    // PreView.prototype.mouseleave=function(){
    //     this.zoom.style.display = this.bigDiv.style.display =  "none";
    // }
    // PreView.prototype.mousemove=function(e){
    //     var left = e.clientX - this.zoomBox.getBoundingClientRect().left - this.zoom.offsetWidth/2;
    //     var top = e.clientY - this.zoomBox.getBoundingClientRect().top-this.zoom.offsetHeight/2;
    //     if(left < 0) left = 0;
    //     else if(left>(this.zoomBox.clientWidth-this.zoom.offsetWidth)){
    //         left = this.zoomBox.clientWidth-this.zoom.offsetWidth;
    //     }
    //     if(top<0) top = 0;
    //     else if(top>(this.zoomBox.clientHeight-this.zoom.offsetHeight)){
    //         top = this.zoomBox.clientHeight-this.zoom.offsetHeight;
    //     }
    //
    //     this.zoom.style.left = left+"px";
    //     this.zoom.style.top = top+"px";
    //
    //     this.bigImg.style.transform = "translate("+(-left*2)+"px,"+(-top*2)+"px)"
    // }
    // // num:移动的图片数量
    // PreView.prototype.move = function(num){
    //     this.translateIndex+=num;
    //     var maxIndex = goodsDetail.imgsrc.length-5;
    //     if(this.translateIndex>maxIndex) this.translateIndex = maxIndex;
    //     else if(this.translateIndex < 0 ) this.translateIndex = 0;
    //     var imgW = this.thumbList.firstElementChild.offsetWidth;
    //     var marginRight = parseInt(getComputedStyle(this.thumbList.firstElementChild).marginRight);
    //     var distanceNum = this.translateIndex*(imgW+marginRight);// 移动的最终距离
    //     this.thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    // }
    //
    // var preView = new PreView();
    // preView.init();

    /***************将放大镜构造函数放置到外部************************/
    var preView = new PreView();
    preView.init();
})();

// 5、商品详情
(function (win) {
    /************1、完成了渲染******************/
    // // detail商品详情
    // var detail = goodsDetail.goodsDetail;
    // // 商品标题
    // var productTitle = document.querySelector(".product-title");
    // // 商品新闻
    // var productNews = document.querySelector(".product-news");
    // // 商品价格
    // var productPrice = document.querySelector("#price");
    // var rowContent = document.querySelector(".row-content");
    // var choose = document.querySelector(".choose");
    // productTitle.innerText = detail.title;
    // productNews.innerText = detail.recommend;
    // productPrice.innerText = detail.price;
    // rowContent.innerHTML = "<span>"+detail.promoteSales.type+"</span>"+detail.promoteSales.content;
    // // 商品配置选项
    // detail.crumbData.forEach(function (item) {
    //     var dl = document.createElement("dl");
    //     var dt = document.createElement("dt");
    //     dt.innerText = item.title;
    //     dl.appendChild(dt);
    //     item.data.forEach(function (info) {
    //         var dd = document.createElement("dd");
    //         dd.innerText = info.type;
    //         dl.appendChild(dd);
    //     })
    //     choose.appendChild(dl);
    // })


    // /**********************2、渲染优化*********************************/
    // // detail商品详情
    // var detail = goodsDetail.goodsDetail;
    // // 商品标题
    // var productTitle = document.querySelector(".product-title");
    // // 商品新闻
    // var productNews = document.querySelector(".product-news");
    // // 商品价格
    // var productPrice = document.querySelector("#price");
    // var rowContent = document.querySelector(".row-content");
    // var choose = document.querySelector(".choose");
    // productTitle.innerText = detail.title;
    // productNews.innerText = detail.recommend;
    // productPrice.innerText = detail.price;
    // rowContent.innerHTML = "<span>"+detail.promoteSales.type+"</span>"+detail.promoteSales.content;
    // // 商品配置选项
    // detail.crumbData.forEach(function (item) {
    //     var dl = utils.createElementAppend("dl",choose);
    //     var dt = utils.createElementAppend("dt",dl,{
    //         innerText:item.title
    //     });
    //     item.data.forEach(function (info) {
    //         // 创建了一个dd元素，给dd元素设置属性innerText,值为info.type,将创建完成之后的dd放置到dl的尾部
    //         var dd = utils.createElementAppend("dd",dl,{
    //             innerText:info.type
    //         })
    //     })
    // })


    // /**********************3、完成配置的切换*********************************/
    // // detail商品详情
    // var detail = goodsDetail.goodsDetail;
    // // 商品标题
    // var productTitle = document.querySelector(".product-title");
    // // 商品新闻
    // var productNews = document.querySelector(".product-news");
    // // 商品价格
    // var productPrice = document.querySelector("#price");
    // var rowContent = document.querySelector(".row-content");
    // var choose = document.querySelector(".choose");
    // productTitle.innerText = detail.title;
    // productNews.innerText = detail.recommend;
    // productPrice.innerText = detail.price;
    // rowContent.innerHTML = "<span>"+detail.promoteSales.type+"</span>"+detail.promoteSales.content;
    // // 商品配置选项。 A-->B
    // detail.crumbData.forEach(function (item) {
    //     var dl = utils.createElementAppend("dl",choose);
    //     var dt = utils.createElementAppend("dt",dl,{
    //         innerText:item.title
    //     });
    //     var activeDD = null;// 选中的DD
    //     item.data.forEach(function (info,ddIndex) {
    //         // 创建了一个dd元素，给dd元素设置属性innerText,值为info.type,将创建完成之后的dd放置到dl的尾部
    //         var dd = utils.createElementAppend("dd",dl,{
    //             innerText:info.type
    //         })
    //         // 将配置当中的第一个选项作为默认选项。
    //         if(ddIndex === 0) {
    //             dd.className = "active";
    //             activeDD = dd;
    //         }
    //         // 增加点击事件
    //         /*
    //         * 1、JS会创建一个与事件相关的线程。
    //         * 2、该线程监听用户的点击行为。
    //         * 3、当用户发生了点击行为之后，会将该事件对应的函数放置到执行队列当中
    //         * 4、队列当中的函数，会在JS线程的代码执行完毕之后运行。
    //         * */
    //         dd.onclick = function () {
    //             // 将之前选中的样式移除掉
    //             activeDD.className = null;
    //             // 将点击的dd元素作为选中项
    //             activeDD = dd;
    //             // 为选中项增加样式
    //             activeDD.className = "active";
    //         }
    //     })
    // })


    // /**********************4、显示标签*********************************/
    //     // detail商品详情
    // var detail = goodsDetail.goodsDetail;
    // // 商品标题
    // var productTitle = document.querySelector(".product-title");
    // // 商品新闻
    // var productNews = document.querySelector(".product-news");
    // // 商品价格
    // var productPrice = document.querySelector("#price");
    // var rowContent = document.querySelector(".row-content");
    // var choose = document.querySelector(".choose");
    // // 标签存放的位置
    // var selectItem = document.querySelector(".select-item");
    // productTitle.innerText = detail.title;
    // productNews.innerText = detail.recommend;
    // productPrice.innerText = detail.price;
    // rowContent.innerHTML = "<span>"+detail.promoteSales.type+"</span>"+detail.promoteSales.content;
    // // 商品配置选项。 A-->B
    // detail.crumbData.forEach(function (item) {
    //     var dl = utils.createElementAppend("dl",choose);
    //     var dt = utils.createElementAppend("dt",dl,{
    //         innerText:item.title
    //     });
    //     var activeDD = null;// 选中的DD
    //     var defaultDD = null;// 进入到页面打开时，默认的DD
    //     var span = utils.createElementAppend("span",selectItem,{
    //         className:"mark"
    //     });
    //     span.style.display = "none";
    //     item.data.forEach(function (info,ddIndex) {
    //         // 创建了一个dd元素，给dd元素设置属性innerText,值为info.type,将创建完成之后的dd放置到dl的尾部
    //         var dd = utils.createElementAppend("dd",dl,{
    //             innerText:info.type
    //         })
    //         // 将配置当中的第一个选项作为默认选项。
    //         if(ddIndex === 0) {
    //             dd.className = "active";
    //             activeDD = defaultDD = dd;
    //
    //             span.innerText = info.type;
    //             var i = utils.createElementAppend("i",span,{
    //                 innerText:"X"
    //             });
    //             i.onclick = function () {
    //                 span.style.display = "none";
    //                 activeDD.className = null;
    //                 activeDD = defaultDD;
    //                 activeDD.className = "active";
    //             }
    //
    //         }
    //         // 增加点击事件
    //         dd.onclick = function () {
    //             // 如果当前的dd已经是选中项的话，那么不会再次执行。
    //             if(this === activeDD) return;
    //             // 如果当前的dd是默认项，那么将span隐藏，改变actionDD为defaultDD
    //             if(this === defaultDD) {
    //                 // 隐藏span
    //                 span.style.display = "none";
    //                 activeDD.className = null;
    //                 activeDD = defaultDD;
    //                 activeDD.className = "active";
    //                 return;
    //             }
    //             // 将之前选中的样式移除掉
    //             activeDD.className = null;
    //             // 将点击的dd元素作为选中项
    //             activeDD = dd;
    //             // 为选中项增加样式
    //             activeDD.className = "active";
    //
    //             // 修改span第一个节点的文本信息
    //             span.firstChild.nodeValue= info.type;
    //             console.log(span.firstChild.nodeValue)
    //             span.style.display = "block";
    //
    //
    //         }
    //     })
    // })




    /**********************5、价格计算(面向过程最终版本)*********************************/
    // // detail商品详情
    // var detail = goodsDetail.goodsDetail;
    // // 商品标题
    // var productTitle = document.querySelector(".product-title");
    // // 商品新闻
    // var productNews = document.querySelector(".product-news");
    // // 商品价格
    // var productPrice = document.querySelector("#price");
    // var rowContent = document.querySelector(".row-content");
    // var choose = document.querySelector(".choose");
    // var numInput = document.querySelector(".num");
    // // 加
    // var plusBtn = document.querySelector(".plus");
    // // 减
    // var reduceBtn = document.querySelector(".reduce");
    // // 标签存放的位置
    // var selectItem = document.querySelector(".select-item");
    // // 单 价
    // var price = detail.price;
    // var num = 1;// 商品的数量
    // productTitle.innerText = detail.title;
    // productNews.innerText = detail.recommend;
    // productPrice.innerText = detail.price;
    // numInput.value = num;
    // rowContent.innerHTML = "<span>"+detail.promoteSales.type+"</span>"+detail.promoteSales.content;
    // // 商品配置选项。 A-->B
    // detail.crumbData.forEach(function (item) {
    //     var dl = utils.createElementAppend("dl",choose);
    //     var dt = utils.createElementAppend("dt",dl,{
    //         innerText:item.title
    //     });
    //     var activeDD = null;// 选中的DD
    //     var defaultDD = null;// 进入到页面打开时，默认的DD
    //     var span = utils.createElementAppend("span",selectItem,{
    //         className:"mark",
    //         changePrice:0
    //     });
    //     span.style.display = "none";
    //     // 改变选中dd元素。
    //     function changeActiveDD(dd) {
    //         activeDD.className = null;
    //         activeDD = dd;
    //         activeDD.className = "active";
    //     }
    //     // 更改价格。upPrice参数：要更新的价格。
    //     function changePrice(upPrice){
    //         price-=span.changePrice;
    //         price+= upPrice;
    //         productPrice.innerText = price*num;
    //         span.changePrice = upPrice;
    //     }
    //     // 关闭mark
    //     function closeMark(upPrice){
    //         changePrice(upPrice);
    //         span.style.display = "none";
    //         changeActiveDD(defaultDD);
    //     }
    //     item.data.forEach(function (info,ddIndex) {
    //         // 创建了一个dd元素，给dd元素设置属性innerText,值为info.type,将创建完成之后的dd放置到dl的尾部
    //         var dd = utils.createElementAppend("dd",dl,{
    //             innerText:info.type
    //         })
    //         // 将配置当中的第一个选项作为默认选项。
    //         if(ddIndex === 0) {
    //             dd.className = "active";
    //             activeDD = defaultDD = dd;
    //             span.innerText = info.type;
    //             var i = utils.createElementAppend("i",span,{
    //                 innerText:"X"
    //             });
    //             i.onclick = closeMark.bind(this,info.changePrice);
    //         }
    //         // 增加点击事件
    //         dd.onclick = function () {
    //             // 如果当前的dd已经是选中项的话，那么不会再次执行。
    //             if(this === activeDD) return;
    //             // 如果当前的dd是默认项，那么将span隐藏，改变actionDD为defaultDD
    //             if(this === defaultDD) {
    //                 closeMark(info.changePrice)
    //                 return;
    //             }
    //             changeActiveDD(dd);
    //             // 更新价格
    //             changePrice(info.changePrice);
    //             // 修改span第一个节点的文本信息
    //             span.firstChild.nodeValue= info.type;
    //             span.style.display = "block";
    //         }
    //     })
    // })
    // plusBtn.onclick = changeNum.bind(this,1);
    // reduceBtn.onclick = changeNum.bind(this,-1);
    // numInput.onchange = changeNum.bind(this,0);
    // function changeNum(n,e) {
    //     num+=n;
    //     if(e.type === "change")  num = parseInt(numInput.value);
    //     if(isNaN(num) || num<1)  num = 1;
    //     numInput.value = num;
    //     productPrice.innerText = num*price;
    // }

    // /***************更改为面向对象版1***************************************/
    // function Detail(){
    //     // detail商品详情
    //     this.detail = goodsDetail.goodsDetail;
    //     // 商品标题
    //     this.productTitle = document.querySelector(".product-title");
    //     // 商品新闻
    //     this.productNews = document.querySelector(".product-news");
    //     // 商品价格
    //     this.productPrice = document.querySelector("#price");
    //     this.rowContent = document.querySelector(".row-content");
    //     this.choose = document.querySelector(".choose");
    //     this.numInput = document.querySelector(".num");
    //     // 加
    //     this.plusBtn = document.querySelector(".plus");
    //     // 减
    //     this.reduceBtn = document.querySelector(".reduce");
    //     // 标签存放的位置
    //     this.selectItem = document.querySelector(".select-item");
    //     this.masterPrice = document.querySelector("#masterPrice");
    //     // 单 价
    //     this.price = this.detail.price;
    //     this.num = 1;// 商品的数量
    //     // this.init();
    // }
    // Detail.prototype.init = function(){
    //     this.productTitle.innerText = this.detail.title;
    //     this.productNews.innerText = this.detail.recommend;
    //     this.numInput.value = this.num;
    //     this.rowContent.innerHTML = "<span>"+this.detail.promoteSales.type+"</span>"+this.detail.promoteSales.content;
    //     // 商品配置选项。 A-->B
    //     this.detail.crumbData.forEach(function (item) {
    //         var dl = utils.createElementAppend("dl",this.choose);
    //         var dt = utils.createElementAppend("dt",dl,{
    //             innerText:item.title
    //         });
    //         var activeDD = null;// 选中的DD
    //         var defaultDD = null;// 进入到页面打开时，默认的DD
    //         var span = utils.createElementAppend("span",this.selectItem,{
    //             className:"mark",
    //             changePrice:0
    //         });
    //         span.style.display = "none";
    //         // 改变选中dd元素。
    //         function changeActiveDD(dd) {
    //             activeDD.className = null;
    //             activeDD = dd;
    //             activeDD.className = "active";
    //         }
    //         // 更改价格。upPrice参数：要更新的价格。
    //         function changePrice(upPrice){
    //             this.price-=span.changePrice;
    //             this.price+= upPrice;
    //             // console.log(this.price,this.num);
    //             span.changePrice = upPrice;
    //             this.changePriceHTML();
    //         }
    //         // 关闭mark
    //         function closeMark(upPrice){
    //             changePrice.call(this,upPrice);//?
    //             span.style.display = "none";
    //             changeActiveDD(defaultDD);
    //         }
    //         // 增加点击事件
    //         var _this = this;
    //         item.data.forEach(function (info,ddIndex) {
    //             // 创建了一个dd元素，给dd元素设置属性innerText,值为info.type,将创建完成之后的dd放置到dl的尾部
    //             var dd = utils.createElementAppend("dd",dl,{
    //                 innerText:info.type
    //             })
    //             // 将配置当中的第一个选项作为默认选项。
    //             if(ddIndex === 0) {
    //                 dd.className = "active";
    //                 activeDD = defaultDD = dd;
    //                 span.innerText = info.type;
    //                 var i = utils.createElementAppend("i",span,{
    //                     innerText:"X"
    //                 });
    //                 i.onclick = closeMark.bind(this,info.changePrice);
    //             }
    //
    //             dd.onclick = function () {
    //                 // 如果当前的dd已经是选中项的话，那么不会再次执行。
    //                 if(this === activeDD) return;
    //                 // 如果当前的dd是默认项，那么将span隐藏，改变actionDD为defaultDD
    //                 if(this === defaultDD) {
    //                     closeMark.call(_this,info.changePrice)
    //                     return;
    //                 }
    //                 changeActiveDD(dd);
    //                 // 更新价格
    //                 changePrice.call(_this,info.changePrice);
    //                 // 修改span第一个节点的文本信息
    //                 span.firstChild.nodeValue= info.type;
    //                 span.style.display = "block";
    //             }
    //         },this)
    //     },this)
    //     this.plusBtn.onclick = this.changeNum.bind(this,1);
    //     this.reduceBtn.onclick = this.changeNum.bind(this,-1);
    //     this.numInput.onchange = this.changeNum.bind(this,0);
    //     this.changePriceHTML();
    // }
    // Detail.prototype.changeNum = function (n,e) {
    //     this.num+=n;
    //     if(e.type === "change")  this.num = parseInt(this.numInput.value);
    //     if(isNaN(this.num) || this.num<1)  this.num = 1;
    //     this.numInput.value = this.num;
    //     this.changePriceHTML();
    // }
    // Detail.prototype.changePriceHTML = function(){
    //     this.productPrice.innerText = this.num*this.price;
    //     this.masterPrice.innerHTML = "&yen;"+this.num*this.price;
    // }
    // var detailObj = new Detail();
    // detailObj.init();


    /***************更改为面向对象版2***************************************/
    function Tab(item,detail){
        this.item = item;
        this.detail = detail;
        // 标签存放的位置
        this.selectItem = document.querySelector(".select-item");
        this.dl = utils.createElementAppend("dl",this.detail.choose);
        this.dt = utils.createElementAppend("dt",this.dl,{
            innerText:this.item.title
        });
        this.activeDD = null;// 选中的DD
        this.defaultDD = null;// 进入到页面打开时，默认的DD
        this.span = utils.createElementAppend("span",this.selectItem,{
            className:"mark",
            changePrice:0
        });
        this.init();
    }
    Tab.prototype.init = function(){
        this.span.style.display = "none";
        // 增加点击事件
        var _this = this;
        this.item.data.forEach(function (info,ddIndex) {
            // 创建了一个dd元素，给dd元素设置属性innerText,值为info.type,将创建完成之后的dd放置到dl的尾部
            var dd = utils.createElementAppend("dd",this.dl,{
                innerText:info.type
            })
            // 将配置当中的第一个选项作为默认选项。
            if(ddIndex === 0) {
                dd.className = "active";
                this.activeDD = this.defaultDD = dd;
                this.span.innerText = info.type;
                var i = utils.createElementAppend("i",this.span,{
                    innerText:"X"
                });
                i.onclick = this.closeMark.bind(this,info.changePrice);
            }

            dd.onclick = function () {
                // 如果当前的dd已经是选中项的话，那么不会再次执行。
                if(this === _this.activeDD) return;
                // 如果当前的dd是默认项，那么将span隐藏，改变actionDD为defaultDD
                if(this === _this.defaultDD) {
                    _this.closeMark(info.changePrice)
                    return;
                }
                _this.changeActiveDD(dd);
                // 更新价格
                _this.changePrice(info.changePrice);
                // 修改span第一个节点的文本信息
                _this.span.firstChild.nodeValue= info.type;
                _this.span.style.display = "block";
            }
        },this)
    }
    // 改变选中dd元素。
    Tab.prototype.changeActiveDD = function(dd) {
        this.activeDD.className = null;
        this.activeDD = dd;
        this.activeDD.className = "active";
    }
    // 更改价格。upPrice参数：要更新的价格。
    Tab.prototype.changePrice = function(upPrice){
        this.detail.price-=this.span.changePrice;
        this.detail.price+= upPrice;
        // console.log(this.price,this.num);
        this.span.changePrice = upPrice;
        this.detail.changePriceHTML();
    }
    // 关闭mark
    Tab.prototype.closeMark = function(upPrice){
        this.changePrice(upPrice);//?
        this.span.style.display = "none";
        this.changeActiveDD(this.defaultDD);
    }

    function Detail(){
        this.collectionPrice = 0;// 计算的价格
        // detail商品详情
        this.detail = goodsDetail.goodsDetail;
        // 商品标题
        this.productTitle = document.querySelector(".product-title");
        // 商品新闻
        this.productNews = document.querySelector(".product-news");
        // 商品价格
        this.productPrice = document.querySelector("#price");
        this.rowContent = document.querySelector(".row-content");
        this.choose = document.querySelector(".choose");
        this.numInput = document.querySelector(".num");
        // 加
        this.plusBtn = document.querySelector(".plus");
        // 减
        this.reduceBtn = document.querySelector(".reduce");
        // // 标签存放的位置
        // this.selectItem = document.querySelector(".select-item");
        this.masterPrice = document.querySelector("#masterPrice");
        this.resultPrice = document.querySelector("#resultPrice");
        // 单 价
        this.price = this.detail.price;
        this.num = 1;// 商品的数量
        // this.init();
    }
    Detail.prototype.init = function(){
        this.productTitle.innerText = this.detail.title;
        this.productNews.innerText = this.detail.recommend;
        this.numInput.value = this.num;
        this.rowContent.innerHTML = "<span>"+this.detail.promoteSales.type+"</span>"+this.detail.promoteSales.content;
        // 商品配置选项。 A-->B
        this.detail.crumbData.forEach(function (item) {
            new Tab(item,this);
        },this)
        this.plusBtn.onclick = this.changeNum.bind(this,1);
        this.reduceBtn.onclick = this.changeNum.bind(this,-1);
        this.numInput.onchange = this.changeNum.bind(this,0);
        this.changePriceHTML();
    }
    Detail.prototype.changeNum = function (n,e) {
        this.num+=n;
        if(e.type === "change")  this.num = parseInt(this.numInput.value);
        if(isNaN(this.num) || this.num<1)  this.num = 1;
        this.numInput.value = this.num;
        this.changePriceHTML();
    }
    Detail.prototype.changePriceHTML = function(){
        this.productPrice.innerText = this.num*this.price;
        this.masterPrice.innerHTML = "&yen;"+this.num*this.price;
        this.resultPrice.innerHTML = "&yen;"+(this.num*this.price +this.collectionPrice);
    }

    win.detailObj = new Detail();
    detailObj.init();
})(window);

// 左侧切换
(function () {
    // 面向过程1
    // var btns = document.querySelectorAll(".tab-title h4");
    // var divs = document.querySelectorAll(".tab-content .tab-item");
    // var activeIndex = 0;
    // setElement("block","active");
    // btns.forEach(function (btn,index) {
    //     btn.onclick = function () {
    //         if(index === activeIndex) return;
    //         setElement("none",null);
    //         activeIndex = index;
    //         setElement("block","active");
    //     }
    // })
    // function setElement(divsValue,btnsValue) {
    //     divs[activeIndex].style.display = divsValue;
    //     btns[activeIndex].className = btnsValue;
    // }


    // 面向过程2
    // var btns = document.querySelectorAll(".tab-title h4");
    // var divs = document.querySelectorAll(".tab-content .tab-item");
    // var activeIndex = 0;
    //
    // btns[activeIndex].classList.add("active");
    // divs[activeIndex].classList.add("active");
    //
    // btns.forEach(function (btn,index) {
    //     btn.onclick = function () {
    //         if(index === activeIndex) return;
    //
    //         btns[activeIndex].classList.remove("active");
    //         divs[activeIndex].classList.remove("active");
    //
    //         activeIndex = index;
    //
    //         btns[activeIndex].classList.add("active");
    //         divs[activeIndex].classList.add("active");
    //     }
    // })


    // 面向对象
    // function Tag(btnSelector,divSelector){
    //     this.btns = document.querySelectorAll(btnSelector);
    //     this.divs = document.querySelectorAll(divSelector);
    //     this.activeIndex = 0;
    //     this.init();
    // }
    // Tag.prototype.init = function(){
    //     this.add();
    //     this.btns.forEach(function (btn,index) {
    //         btn.onclick = function () {
    //             if(index === this.activeIndex) return;
    //             this.remove();
    //             this.activeIndex = index;
    //             this.add();
    //         }.bind(this);
    //     },this)
    // }
    // Tag.prototype.add = function () {
    //     this.btns[this.activeIndex].classList.add("active");
    //     this.divs[this.activeIndex].classList.add("active");
    // }
    // Tag.prototype.remove = function () {
    //     this.btns[this.activeIndex].classList.remove("active");
    //     this.divs[this.activeIndex].classList.remove("active");
    // }


    new Tag(".tab-title h4",".tab-content .tab-item");
})();
// 商品介绍的切换
// 1、如果不增加class = tabli,如果写选择器。
// 2、
(function () {
    new Tag("#detailsContent .tab-title li","#detailsContent .tab-content .tabli");
})();

//
// 选择搭配功能
(function (win) {
    var collectionsGroups = document.querySelector("#collectionsGroups");
    var resultPrice = document.querySelector("#resultPrice");

    collectionsGroups.innerHTML = goodsDetail.collections.map(function (item) {
        return (
            "<li>" +
            "   <img src="+item.imgSrc+" alt="+item.title+">" +
            "   <p class='des'>"+item.title+"</p>" +
            "   <div class='price'>" +
            "       <input onchange='changePrice(this,event)' type='checkbox' data-change-price="+item.price+">" +
            "       <span>"+item.price+"</span>" +
            "   </div>" +
            "</li>"
        )
    }).join("");

    win.changePrice = function(_this,event) {
        // console.log("执行了changePrice",_this,event)
        // console.log(parseInt(_this.dataset.changePrice));
        // console.log(detailObj.num,detailObj.price)

        var changePrice = parseInt(_this.dataset.changePrice);
        if(_this.checked){
            detailObj.collectionPrice += changePrice;
            // resultPrice.innerHTML = "&yen;"+(detailObj.num*detailObj.price+changePrice);
        }else{
            detailObj.collectionPrice-=changePrice;
            // resultPrice.innerHTML = "&yen;"+(detailObj.num*detailObj.price-changePrice);
        }
        resultPrice.innerHTML = "&yen;"+(detailObj.num*detailObj.price+detailObj.collectionPrice);
        console.log(price);




    }
})(window);

// 侧边栏效果
(function () {
    var pageAsider = document.querySelector("#pageAsider");
    var openBtn = document.querySelector("#openBtn");
    openBtn.onclick = function () {
        this.classList.toggle("open");
        pageAsider.classList.toggle("open");
    }
})();

// 返回顶部
(function () {
    var gotoTop = document.querySelector("#gotoTop");
    gotoTop.onclick = function () {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
})();

