var button = document.getElementById("btn");
    button.addEventListener("click", function() {
      setTimeout(change, 2000);
    });

    function change() {      
      var displayText = document.getElementById("text");
      displayText.textContent = "ボタンをクリックしました";
    };