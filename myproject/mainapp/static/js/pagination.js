
var val_count = 0;

$('.slid').each(function(){
  if($(this).length){
    val_count++;
  }

});

var count = val_count; // це яка загальна кількість товару є
var cnt = 6; // це скільки хочу на головну сторінку вивести
var cnt_page = Math.ceil(count / cnt); // тут ділить, щоб взнати скік буде сторінок



var paginator = document.querySelector(".paginator");
var page = "";

for (var i = 0; i < cnt_page; i++) {
  page += "<span class='pag-block' data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
}
paginator.innerHTML = page;


var div_num = document.querySelectorAll(".container-photo-car");
var div_slid = document.querySelectorAll(".slid");

for (var i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "block";
       div_slid[i].style.position = "static";
  }

}

var main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");


function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id;

  if (target.tagName.toLowerCase() != "span") return;

  var num_ = id.substr(4);
  var data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";
       div_slid[i].style.position = "absolute";


  }
  for (var i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
     div_slid[i].style.position = "static";
    j++;
  }
}