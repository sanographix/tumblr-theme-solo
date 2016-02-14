$(document).ready(function(){
    // notecount
    $(".page-permalink .notecount a").click(function(){
      $(".notecontainer").slideToggle("fast");
      return false;
    });
    // text投稿のyoutubeもレスポンシブにする
    $(".post.text iframe[src*='youtube.com']").wrap("<div class='video-iframe'></div>");
    $(".tumblr_video_container").addClass("video-iframe");
    // fitvid
    $(".video-iframe").fitVids();
});