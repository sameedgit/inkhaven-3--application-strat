/* Theme toggle. Runs before paint so there is no flash of the wrong theme. */
(function(){
  var K="ink3-theme", root=document.documentElement;
  try{var saved=localStorage.getItem(K); if(saved) root.setAttribute("data-theme",saved);}catch(e){}

  var SUN='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"'+
    ' stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/>'+
    '<path d="M12 2.6v2.1M12 19.3v2.1M4.3 4.3l1.5 1.5M18.2 18.2l1.5 1.5M2.6 12h2.1M19.3 12h2.1'+
    'M4.3 19.7l1.5-1.5M18.2 5.8l1.5-1.5"/></svg>';
  var MOON='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"'+
    ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+
    '<path d="M20.5 14.8A8.6 8.6 0 1 1 9.2 3.5a6.9 6.9 0 0 0 11.3 11.3z"/></svg>';

  function isDark(){
    return root.getAttribute("data-theme")==="dark";   // light is the default
  }
  function paint(btn){
    var dark=isDark();
    btn.innerHTML=dark?SUN:MOON;
    btn.title=dark?"Switch to light mode":"Switch to dark mode";
    btn.setAttribute("aria-label",btn.title);
  }
  function init(){
    var btn=document.getElementById("theme"); if(!btn) return;
    paint(btn);
    btn.addEventListener("click",function(){
      var next=isDark()?"light":"dark";
      root.setAttribute("data-theme",next);
      try{localStorage.setItem(K,next)}catch(e){}
      paint(btn);
    });
  }
  document.readyState==="loading"
    ? document.addEventListener("DOMContentLoaded",init) : init();
})();
