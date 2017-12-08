
$(document).on("ready", function()
{
  var url_link="http://api.giphy.com/v1/gifs/search";
  console.log("fully loaded");
  $.ajax(
  {
    method: 'GET',
    url: url_link,
    dataType: 'json',
    success: onSuccess

  })
$(".btn-primary").on("click",function(e)
{
  e.preventDefault();
  $.ajax({
    method: 'GET',
    url: url_link,
    dataType: 'json',
    data:$("form").serialize(),
    success: onSuccess
  })
})

$(".btn-secondary").on("click",function(e)
{
  e.preventDefault();
  $.ajax({

    method: 'GET',
    url: url_link,
    dataType: 'json',
    data:$("form").serialize(),
    offset:25,
    success: onSuccess,
    error:onError

  })
})

function onError(json_obj)
{
  console.log("error");
}
function onSuccess(obj)
{
    console.log(obj);
    $.each(obj.data,function(k,v)
    {
      $('.gif-gallery').append(`<img src="${obj.data[k].images.fixed_width.url}" >`);
    })
};

});
