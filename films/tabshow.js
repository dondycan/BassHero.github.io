function renderlink(data) {
    var name, avatar, site, li = "";
    shuffle(data);
    for (var i = 0; i < 20; i++) {
      name = data[i].name;
      compdate = data[i].compdate;
      tagg = data[i].tagg;
      li += '<div class="card">' + '<a target="_blank">' + '<div class="thumb" style="background: url( ' + compdate + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div><a ' +  '" target="_blank">' + name + '</a></div>' + '</div>' + '</div>';
    }
    document.querySelector(".link-navigation").innerHTML = li;
  }
  
  // 获取 json 文件
  fetch('movie.json')
    .then(response => response.json())
    .then(res => renderlink(res));