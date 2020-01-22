<script type="text/javascript">
//<![CDATA[
var backClick = false;
var browserAgent = navigator.userAgent;
var preKeydownCode = '';
document.onmouseover = function() {
	window.innerDocClick = true;
}
document.onmouseleave = function() {
	window.innerDocClick = false;
}
var curUrl = location.href; 
$(document).on('ready', function() {
	history.pushState(null, null, curUrl);
	window.onpopstate = function(e) {
		if(backClick) {
			backClick = false;
		} else {
			if((browserAgent.indexOf("MSIE") > -1) || navigator.appName == "Netscape" && browserAgent.indexOf("Trident") > -1) { // ie
				alert('뒤로가기가 허용되지 않습니다.');
				backClick = true;
			} else {
				if(browserAgent.indexOf("Mozilla") > -1 && !window.innerDocClick) {
					alert('뒤로가기가 허용되지 않습니다.');
					history.pushState(null, null, curUrl);
				}
				backClick = false;
			}
		}
		history.go(1);
		e.returnValue = true;
		e.cancelBublue =  true;
		e.stopPropagation();
		e.stopImmediatePropagation();
		e.preventDefault();
		return false;
	}
	
	
	if(browserAgent.indexOf("Mozilla") > -1) {
		$(document).on('keydown', function(key) {
			if(window.innerDocClick && preKeydownCode == '18' && key.keyCode == '37') { // chrome 키보드 뒤로가기 버튼(Alt+왼쪽방향키)
				alert('뒤로가기가 허용되지 않습니다.');
				history.pushState(null, null, curUrl);
			}
			preKeydownCode = key.keyCode;
		});
	}
});           
           	
//]]>
</script>

