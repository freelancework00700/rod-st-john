    window.addEventListener('DOMContentLoaded', function() {
      var anchors = document.querySelectorAll('a[href^="#"]');
      
      anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          event.preventDefault();
          var targetId = this.getAttribute('href').substr(1);
          var targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.click();
          }
        });
      });
    });
