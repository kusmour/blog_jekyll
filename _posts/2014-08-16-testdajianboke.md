---
layout: article
title: 搭建博客（Jekyll模板 + Disqus评论管理）
---
<h2>{{ page.title }}</h2>

写这个网站是一个很偶然的决定，也可以说这完全是无聊的产物。大学的暑假是没有作业的，我还没得出去玩，无聊的长草的时候又机缘巧合了解到gitHub可以搭建独立博客，于是我就开始了新的尝（wan）试（tuo）。

我不太会写教程之类的东西，鉴于我也是从网上看来的，小伙伴们可以去Google或者百度一下关键词“使用GitHub搭建独立博客”。在这里主要写一下教程里没有的我遇到的问题，还有一些心得。

<p>下面是一些相关链接：</p>
<span class = "link">[【GitHub-Pages】](https://pages.github.com/)
	[【Jekyll】](http://jekyllrb.com/)
	[【Disqus】](https://disqus.com/)
</span>

我的水平大概就是学过基础html、css和js，仅仅懂一点皮毛，为了写这个简直就是现学现卖。

最最开始的时候我是完全follow教程做的，把基本的部分都弄出来了之后才开始写网页设计和样式，教程都很详细，跟着做基本上没有问题。问题最多的是写html的时候，div的float真是头疼的不行，光一个简单的首页我都写了整整一天。后来实在是太难折腾，我就参考了一些网站，用chrome浏览器查看代码很方便，你们懂的。磕磕绊绊写完了首页，我才发现原来这里面<a href = "https://github.com/jekyll/jekyll/wiki/Sites" class = "inline">【Jekyll - Sites】</a>有好多好看的设计可以参考【摔！！

写html是很繁琐的工作，为了好看，要一点点调css，看到最后我看什么东西都两眼发直看他们对齐了没有。

鉴于github上面文件的相对路径与本地是一致的，所以在html文件里面直接使用相对路径就行了，不过注意在_layout里面的html文件，也就是你自己写的一些模板里面不能使用相对路径，因为你的post或是其他内容套用了模板之后路径会改变（变深了），可以使用jekyll的变量“site.baseurl”写上全路径。

定下了基本的布局和风格，写出html代码之后，homepage跟BLOG页面就基本上完成了。我不会告诉你们写这个就用了两个晚上，但是导航栏那个出现横杠的动画效果我写了整整一个晚上。然后我试着写了两篇post上去。git push完了之后在自己的主页上点击一下就能转跳还能看到文章，我简直不能更嘚瑟。

post之类的例子可以看这里：

<span class = "link">[【Jekyll创始人示例】](https://github.com/mojombo/tpw)</span>

到这里博客的基本功能就完成了，还有就是评论的功能，当时觉得这个可能很难所以没做，就搁置了，事实证明我真是笨蛋。

我之前并没有了解过Disqus，甚至没有听过，搜了一下惊呆了，据说是媲美Facebook的评论系统，而且可以嵌入到自己的主页里面，这个兼容性也是很强的。之前说觉得很难，真的是冤枉了Disqus服务的便利性。对于自己写的网页，只需要粘贴下面这段代码到html文件里面，你希望评论功能面板出现的位置就可以了。然后注册一下，添加博客的网址，finish！

	<div id="disqus_thread"></div>
	<script type="text/javascript">
	    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
	    var disqus_shortname = 'example'; // required: replace example with your forum shortname 这个地方需要改成你在Disqus上配置的网站名
	    /* * * DON'T EDIT BELOW THIS LINE * * */
	    (function() {
	        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
	        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	    })();
	</script>
	<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
	<a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>

具体请看这里：

<span class = "link">[【Disuqs - Setup For Universal Code】](https://disqus.com/admin/universalcode/)</span>

Disqus会提供样式，也支持自己写样式。支持中文，在你的主页admin>setting里面可以设置允许匿名身份发布，这样不需要任何账号也可以进行评论。总之是一款很方便又很强大的产品。不过修改了设置之后生效需要时间，需要等待，不过没有耐心的po主刷新了半天都没有见到更改就重新来了一下= =

<div>
	<img class = "illustration" src = "{{site.baseurl}}/photos/2014-08-16/1.png" alt = "illustration" />
	<span class = "image_credit">效果截图</span>
</div>
<br>

最后，这篇文章实在是写得很糟糕，只好在文章结尾送点福利啦，看，就是它<i class="fa fa-gift"></i>。一个我经常用的icon样式，就像div那样可以直接使用，网站涵盖了很多方面的图标，大小调节跟字体是一样的，方便嵌入到文字中。

到官方网站下载CSS：

<span class = "link">[【Font-Awesome】](http://fortawesome.github.io/Font-Awesome/)</span>

使用方法如下：

	<i class="fa fa-gift"></i>


最后的最后，感谢看到这里的人。