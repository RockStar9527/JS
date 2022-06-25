(function (win) {
    // function Tag(btnsSelector,divSelector){
    //     this.btns = document.querySelectorAll(btnsSelector);
    //     this.divs = document.querySelectorAll(divSelector);
    //     this.activeIndex = 0;
    //     this.init();
    // }
    // Tag.prototype.init = function () {
    //     this.setElement("block","active");
    //     this.btns.forEach(function (btn,index) {
    //         btn.onclick = function () {
    //             if(index === this.activeIndex) return;
    //             this.setElement("none",null);
    //             this.activeIndex = index;
    //             this.setElement("block","active");
    //         }.bind(this)
    //     },this)
    // }
    // Tag.prototype.setElement = function(divsValue,btnsValue) {
    //     this.divs[this.activeIndex].style.display = divsValue;
    //     this.btns[this.activeIndex].className = btnsValue;
    // }
    // win.Tag = Tag;


    function Tag(btnSelector,divSelector){
        this.btns = document.querySelectorAll(btnSelector);
        this.divs = document.querySelectorAll(divSelector);
        this.activeIndex = 0;
        this.init();
    }
    Tag.prototype.init = function(){
        // this.add();
        this.toggle();
        this.btns.forEach(function (btn,index) {
            btn.onclick = function () {
                if(index === this.activeIndex) return;
                
                // this.remove();
                this.toggle();
                this.activeIndex = index;
                // this.add();
                this.toggle();
            }.bind(this);
        },this)
    }
    // Tag.prototype.toggle = function(){
    //     this.btns[this.activeIndex].classList.toggle("active");
    //     this.divs[this.activeIndex].classList.toggle("active");
    // }
    // Tag.prototype.add = function () {
    //     this.btns[this.activeIndex].classList.add("active");
    //     this.divs[this.activeIndex].classList.add("active");
    // }
    Tag.prototype.remove = function () {
        this.btns[this.activeIndex].classList.remove("active");
        this.divs[this.activeIndex].classList.remove("active");
    }
    win.Tag = Tag;
})(window);