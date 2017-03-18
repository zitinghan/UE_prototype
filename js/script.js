$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };
  
  scaleFix();
  // Menu Android
  if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }


 $("#index_parent_post_select_level").change(function(){
  
  if(this.value=='Primary 1'){
    var html = '';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="English"> English</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="English"> Chinese</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Maths"> Maths</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Science"> Science</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Malay"> Malay</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Tamil"> Tamil</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Piano"> Piano</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="JAP LANGUAGE"> JAP LANGUAGE</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="violin"> Violin</li>';
    
  }else if(this.value=='Secondary 1'){
    var html = '';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="English"> English</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="English"> Chinese</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Maths"> H1 MATH</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Science"> Science</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Malay"> Malay</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="Tamil"> Tamil</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="computer"> Computer</li>';
    html+='<li><input id="chkid2" name="chkid2" type="checkbox" value="hip_hop_dancing"> Hip Hop Dancing</li>';
  }
  console.log(this.value);
  $("#requestTutorClass").html(html);
 })
         

 var menuHtml = '';
 menuHtml += '<li class="current"><a href="index.html">Home</a></li>';
 menuHtml += '<li><a href="index-1.html">Request Tutor</a></li>';
 menuHtml += '<li><a href="job_post.html">Job Post</a></li>';
 menuHtml += '<li><a href="index-2.html">Our Tutors</a></li>';
 menuHtml += '<li><a href="article.html">Article</a></li>';
 menuHtml += '<li><a href="foreign_student.html">Foreign Student Service</a></li>';
 menuHtml += '<li><a href="index-4.html">Contacts</a></li>';
 $('.login_menu').append(menuHtml);

            
 var notLogin_menuHtml = '';
 notLogin_menuHtml += '<li class="current"><a href="index.html">Home</a></li>';
 notLogin_menuHtml += '<li><a href="#" title="Please login before you can post request">Request Tutor</a></li>';
 notLogin_menuHtml += '<li><a href="#" title="Please login before you can see all the request">Job Post</a></li>';
 notLogin_menuHtml += '<li><a href="index-2.html">Our Tutors</a></li>';
 notLogin_menuHtml += '<li><a href="article.html">Article</a></li>';
 notLogin_menuHtml += '<li><a href="foreign_student.html">Foreign Student Service</a></li>';
 notLogin_menuHtml += '<li><a href="index-4.html">Contacts</a></li>';
 $('.not_login_menu').append(notLogin_menuHtml);


});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

var currentYear = (new Date).getFullYear();
  $(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
  });

  $(function(){
  $('.sf-menu').superfish({autoArrows: true})
})

