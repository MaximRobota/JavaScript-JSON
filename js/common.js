function ajaxSmall(){
  var request;
  if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
  }else{
      request = new ActiveXObject('Microsoft.XMLHTTP');
  }
  request.open('GET', 'json/small.json');
  request.onreadystatechange = function(){
      if((request.readyState ===4) && (request.status===200)){
          var items = JSON.parse(request.responseText);
          var output = '<table class="table table-striped">' + '<thead>' + '<tr>';
      for (var keys in items) {
        if(keys == 0){
          for (var key in items[keys]) {
          output += '<th>' + items[0][key] + '</th>';
          }
          output +=  '</tr>' + '</thead>' + '<tbody>';
        }else{
          output += '<tr>';
          for (var key in items[keys]) {
          output += '<td>' + items[keys][key] + '</td>';
          }
          output += '</tr>';
        }
      }
      output += '</tbody>' + '</table>';
          document.getElementById('update').innerHTML = output;
      }
  }
  request.send();
}
function ajaxLong(){
  var request;
  if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
  }else{
      request = new ActiveXObject('Microsoft.XMLHTTP');
  }
  request.open('GET', 'json/large.json');
  request.onreadystatechange = function(){
    if((request.readyState === 4) && (request.status === 200)){
      var items = JSON.parse(request.responseText);
      var output = '<table class="table table-striped">' + '<thead>' + '<tr>';
      for (var keys in items) {
        if(keys == 0){
          for (var key in items[keys]) {
          output += '<th>' + items[0][key] + '</th>';
          }
          output +=  '</tr>' + '</thead>' + '<tbody>' + '<tr>';
        }else{
          for (var key in items[keys]) {
          output += '<td>' + items[keys][key] + '</td>';
          }
          output += '</tr>';
        }
      }
      output += '</tbody>' + '</table>';
      document.getElementById('update').innerHTML = output;
    }//200
  }
  request.send();
}