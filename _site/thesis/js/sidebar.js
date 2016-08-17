// Scrolling sidebar for your website
// Downloaded from Marcofolio.net
// Read the full article: http://www.marcofolio.net/webdesign/create_a_sticky_sidebar_or_box.html

window.onscroll = function()
{
	if( window.XMLHttpRequest ) {
		if (document.documentElement.scrollTop > 340 || self.pageYOffset > 340) {
			$('sidebar').style.position = 'fixed';
			$('sidebar').style.top = '0';
		} else if (document.documentElement.scrollTop < 340 || self.pageYOffset < 340) {
			$('sidebar').style.position = 'absolute';
			$('sidebar').style.top = '340px';
		}
	}
}