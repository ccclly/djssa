        var list = document.querySelector('.daohang');
        var lis = list.querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        var imgs = document.querySelector('.bj').querySelectorAll('img');
        //注册事件
        for(var i = 0; i < lis.length; i++){
            lis[i].setAttribute('index',i);//自定义属性
            lis[i].onclick = function (){
                 var index = this.getAttribute('index');
                 for(var i = 0; i < items.length; i++){
                     items[i].style.display = 'none';
                 }
                 //留下点击的
                 items[index].style.display = 'block';
            }
        }