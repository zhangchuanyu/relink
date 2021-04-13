 <script>
        var num = 0;
        var arrUrl = ['images/lunbo-1.png', 'images/lunbo-2-max.png', 'images/lunbo-3-max.png', 'images/lunbo-4-max.png', 'images/lunbo-5-max.png'];
        var arrInfo = ['北京市人民检察院第十五次代表大会召开','北京市人民检察院','北京市人民会召开','十五次代表大会召开','北京市人民大会召开']
        var img = document.getElementById('jsSwitch');
        var li = document.getElementById('jsSwitchList').children;
        var left = document.getElementById('jsSwitchL');
        var right = document.getElementById('jsSwitchR');
        var info = document.getElementById('jsSwitchInfo');
        var timer = null;

        //左右按钮
        left.onclick = function(){
            num--;
            if (num == -1) {
                num = arrUrl.length - 1;
            }
            changeImg();
        }
        right.onclick = function(){
            num++;
            if (num == arrUrl.length) {
                num =  0;
            }
            changeImg();
        }

        setTimeout(autoplay(),1000);

        //鼠标进入清除定时器，鼠标离开恢复
        img.onmouseover = function(ev){
            clearInterval(timer);
        };
        img.onmouseout = autoplay;

        //点击小图片 换大图片
        for (var i = 0; i < li.length; i++){
            li[i].index = i;
            li[i].onclick = function (ev) {
                num = this.index;
                changeImg();
            }
        }

        //图片切换
        function changeImg() {
            for (var i = 0; i < li.length; i++) {
                //判断当前li是否包含active类
                if(li[i].classList.contains('active')){
                    li[i].classList.remove('active');
                }
            }
            //修改小图背景
            li[num].classList.add('active');
            //修改大图
            var currentImg = arrUrl[num];
            img.style.background = "url("+currentImg+") no-repeat center";
            //修改轮播标题
            info.innerText = arrInfo[num];
        }
        //定时器
        function autoplay() {
            timer = setInterval(function () {
                num++;
                num %= arrUrl.length;
                changeImg();
            },2000);
        }
    </script>