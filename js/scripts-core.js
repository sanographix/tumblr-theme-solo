$(document).ready(function(){
    // notecount
    $(".page-permalink .notecount a").click(function(){
      $(".notecontainer").slideToggle("fast");
      return false;
    });

    // fitvid
    $(".post.text iframe[src*='youtube.com']").wrap("<div class='video-iframe'></div>");
    $(".tumblr_video_container").addClass("video-iframe");
    $(".video-iframe").fitVids();
});