var numPagesVisited = 0;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-170179081-1', 'auto');

function sendGoogleAnalyticsPageView() {
	ga('send', 'pageview', location.pathname + location.search);
	numPagesVisited++;
}

window.onbeforeunload = function(){
	ga('send', 'event', 'time-tracking', 'page-exit');
	if (numPagesVisited === 1)
		ga('send', 'event', 'engagement', 'page-bounce');
}