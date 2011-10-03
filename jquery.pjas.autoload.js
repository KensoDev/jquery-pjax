$(function() {
  $(".autopjax").each(function(){
    var elem = $(this);
    return if !elem;
    
    var url = elem.attr("data-url");
    var container_id = '#' + elem.attr("id");

    return if !url || !container_id;
    $.pjax({
      push: false,
      url: url,
      container: container_id
    });
  });
});