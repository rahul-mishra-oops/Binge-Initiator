$().ready(() => {
    var URL = "https://www.boredapi.com/api/activity";
    var canClick = true;
  
    function getRandomActivity() {
      dark.getFetch(URL, data => {
        $('#log').html(JSON.stringify(data));
  
        $("#activity_name").html(data.activity);
        $("#activity_type").html(data.type);
        
      });
    }
  
    getRandomActivity();
  
    $(".btn").click(e => {
      e.preventDefault();
      if (canClick) {
        canClick = false;
        getRandomActivity();
        setTimeout(function() {
          canClick = true;
        }, 1200);
      }
    });
  });
  

