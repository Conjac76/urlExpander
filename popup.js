document.addEventListener("DOMContentLoaded", function() {
    var expandButton = document.getElementById("expandButton");
    var urlInput = document.getElementById("urlInput");
    var resultDiv = document.getElementById("result");
  
    expandButton.addEventListener("click", function() {
      var url = urlInput.value;
      expandUrl(url);
    });
  
    function expandUrl(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://unshorten.me/json/" + encodeURIComponent(url), true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var expandedUrl = response.resolved_url;
            resultDiv.textContent = expandedUrl;
          }
        };
        xhr.send();
      }       
  });
  