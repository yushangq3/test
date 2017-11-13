<<<<<<< HEAD
## video 弹出层插件
 >使用fancybox.pack.js 和 fancybox-media.js 
 >
 >使用 fancybox.css + 图片
 >
 >语法 
 ```
 $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            'type' : 'iframe',
            openEffect  : 'none',
            closeEffect : 'none',
            maxHeight:460,
            helpers : {
                media : {}
            }
        });
 ```
 ___
 >
 ## 图片放大浏览插件 弹框 jquery.prettyPhoto.js
 ```
 $("a[rel^='prettyPhoto']")
		.prettyPhoto({
			animation_speed:'fast',
			slideshow:10000,
			autoplay:false,
			social_tools:"",
			default_width:600
		});
 ```
 ___
 >
 ## 图片轮播插件 jquery.carouFredSel.min.js [demo 地址](http://coolcarousels.frebsite.nl/c/66/)
 ```
 $('.carful ul').carouFredSel({
	items: 4,
	scroll:{
		items:1,
		duration: 800,
	},
	auto:false,
	prev:'#prev',
	next:'#next',
})
 ```
 ### 整屏滚动插件 fullPage.js 
=======
## video 弹出层插件
 >使用fancybox.pack.js 和 fancybox-media.js 
 >
 >使用 fancybox.css + 图片
 >
 >语法 
 ```
 $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            'type' : 'iframe',
            openEffect  : 'none',
            closeEffect : 'none',
            maxHeight:460,
            helpers : {
                media : {}
            }
        });
 ```
 ___
 >
 ## 图片放大浏览插件 弹框 jquery.prettyPhoto.js
 ```
 $("a[rel^='prettyPhoto']")
		.prettyPhoto({
			animation_speed:'fast',
			slideshow:10000,
			autoplay:false,
			social_tools:"",
			default_width:600
		});
 ```
 ___
 >
 ## 图片轮播插件 jquery.carouFredSel.min.js [demo 地址](http://coolcarousels.frebsite.nl/c/66/)
 ```
 $('.carful ul').carouFredSel({
	items: 4,
	scroll:{
		items:1,
		duration: 800,
	},
	auto:false,
	prev:'#prev',
	next:'#next',
})
 ```
 ### 整屏滚动插件 fullPage.js 
>>>>>>> c71c4969237aebfef237e78a26c0a4c60c463b6c
