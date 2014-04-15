var ads001 = '<SCR'+'IPT SRC="http://ib.adnxs.com/ttj?id=2476523&cb=[CACHEBUSTER]&referrer=[REFERRER_URL]&pubclickenc=%5BINSERT_CLICK_TAG%5D" TYPE="text/javascript"></SCR'+'IPT> ';
var ads002 = '<ifr'+'ame id="abcc74f6" name="abcc74f6" src="http://d.href.asia/nw/d/afr.php?zoneid=9424&amp;cb=INSERT_RANDOM_NUMBER_HERE" frameborder="0" scrolling="no" width="300" height="250"><a href="http://d.href.asia/nw/d/ck.php?n=a2a58ba4&amp;cb=INSERT_RANDOM_NUMBER_HERE" target="_blank"><img src="http://d.href.asia/nw/d/avw.php?zoneid=9424&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a2a58ba4" border="0" alt="" /></a></ifr'+'ame>';
var AdsRan =new Array()
AdsRan[0] = ads001;
AdsRan[1] = ads002;
var QAds = AdsRan.length;
var SelectAdsRan=Math.round(Math.random()*(QAds-1));
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
{document.write(' ');}else{document.write(AdsRan[SelectAdsRan]);}

