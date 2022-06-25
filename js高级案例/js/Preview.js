(function (win) {
    function PreView(){
        this.thumbList = document.querySelector(".thumbList");
        // 未放大图片
        this.smallImg = document.querySelector("#smallImg");
        // 选中缩略图图片的下标
        this.activeIndex = 0;
        // 左侧按钮
        this.leftBtn = document.querySelector(".arrow-left");
        // 右侧按钮
        this.rightBtn = document.querySelector(".arrow-right");
        this.zoomBox = document.querySelector(".zoom-box");
        this.zoom = document.querySelector(".zoom");
        this.bigDiv = document.querySelector(".bigImg");
        this.bigImg = document.querySelector("#bigImg");
        // 移动的位置
        this.translateIndex =0;
    }
    PreView.prototype.init = function () {
        this.zoomBox.onmouseenter = this.mouseenter.bind(this);
        this.zoomBox.onmouseleave = this.mouseleave.bind(this);
        this.zoomBox.onmousemove = this.mousemove.bind(this);
        goodsDetail.imgsrc.forEach(function (item,index) {
            // 创建img元素。
            var img = document.createElement("img");
            img.src = item.s;
            // 当前的index如果与指定的图片下标值相同，那么增加红色边框
            if(index === this.activeIndex) img.style.borderColor = "red";
            img.onclick = function(){
                // 判断用户点击的当前项是否为选中项。
                if(index === this.activeIndex) return;
                // 将选中的图片边框移除掉
                this.thumbList.querySelectorAll("img")[this.activeIndex].style.borderColor="#ccc";
                this.activeIndex = index;
                this.smallImg.src = img.src;
                this.bigImg.src = item.b;
                img.style.borderColor = "red";
            }.bind(this);
            this.thumbList.appendChild(img);
        },this)
        this.leftBtn.onclick = this.move.bind(this,-2);
        this.rightBtn.onclick = this.move.bind(this,2);
    }
    PreView.prototype.mouseenter = function () {
        this.zoom.style.display = this.bigDiv.style.display =  "block";
    }
    PreView.prototype.mouseleave=function(){
        this.zoom.style.display = this.bigDiv.style.display =  "none";
    }
    PreView.prototype.mousemove=function(e){
        var left = e.clientX - this.zoomBox.getBoundingClientRect().left - this.zoom.offsetWidth/2;
        var top = e.clientY - this.zoomBox.getBoundingClientRect().top-this.zoom.offsetHeight/2;
        if(left < 0) left = 0;
        else if(left>(this.zoomBox.clientWidth-this.zoom.offsetWidth)){
            left = this.zoomBox.clientWidth-this.zoom.offsetWidth;
        }
        if(top<0) top = 0;
        else if(top>(this.zoomBox.clientHeight-this.zoom.offsetHeight)){
            top = this.zoomBox.clientHeight-this.zoom.offsetHeight;
        }

        this.zoom.style.left = left+"px";
        this.zoom.style.top = top+"px";

        this.bigImg.style.transform = "translate("+(-left*2)+"px,"+(-top*2)+"px)"
    }
    // num:移动的图片数量
    PreView.prototype.move = function(num){
        this.translateIndex+=num;
        var maxIndex = goodsDetail.imgsrc.length-5;
        if(this.translateIndex>maxIndex) this.translateIndex = maxIndex;
        else if(this.translateIndex < 0 ) this.translateIndex = 0;
        var imgW = this.thumbList.firstElementChild.offsetWidth;
        var marginRight = parseInt(getComputedStyle(this.thumbList.firstElementChild).marginRight);
        var distanceNum = this.translateIndex*(imgW+marginRight);// 移动的最终距离
        this.thumbList.style.transform = "translateX(-"+distanceNum+"px)";
    }
    win.PreView = PreView;
})(window);