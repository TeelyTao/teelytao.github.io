document.addEventListener("DOMContentLoaded", function() {
    let onetitle = document.getElementById("onetitle");
    let onelink = document.getElementById("onelink");
    let onethumbnail = document.getElementById("onethumbnail")
    let twotitle = document.getElementById("twotitle");
    let twolink = document.getElementById("twolink");
    let twothumbnail = document.getElementById("twothumbnail")
    let threetitle = document.getElementById("threetitle");
    let threelink = document.getElementById("threelink");
    let threethumbnail = document.getElementById("threethumbnail")

$.ajax({
  url: 'https://api.rss2json.com/v1/api.json',
  method: 'GET',
  dataType: 'json',
  data: {
    rss_url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCz_bkDxzrwqVrOQ2CCdrJEg',
  }
}).done(function (response) {
  if (response.status != 'ok') {
    throw response.message;
  }

  // Access response data here:
  var item = response.items[0];
  console.log(item);
  onetitle.innerText = item.title;
  onelink.href = item.link;
  onethumbnail.src = item.thumbnail;
  var item = response.items[1];
  twotitle.innerText = item.title;
  twolink.href = item.link;
  twothumbnail.src = item.thumbnail;
  var item = response.items[2];
  threetitle.innerText = item.title;
  threelink.href = item.link;
  threethumbnail.src = item.thumbnail;
})
.fail(function (error) {
  console.error("Error retrieving data:", error);
  // Handle error scenarios gracefully, e.g., display an error message
});
});