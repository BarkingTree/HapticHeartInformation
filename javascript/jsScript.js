// Event listener to load content on page loading
document.addEventListener("DOMContentLoaded", function() {
    
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
  });

  // On Click Perform 
  document.addEventListener("click", function(){
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };
  })

// On Scroll Perform
document.addEventListener("scroll", function(){
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };
  })


// Banner Control
;(function(window){

	var dismissibleItem = function(el, type, value, link) {
        
       // var link = '<a class= "dismissible" href="https://forms.office.com/e/mdJTGQvLxu"> Feedback Questionaire</a>'
		var html = '<span>' + '<a class = "dismissible" href='+link +'>'+value+'</a>'+ ' <button type="button" class="close">X</button></span>';
		
		el.removeAttribute('data-component');
		el.removeAttribute('data-value');
		el.removeAttribute('data-type');
        el.removeAttribute('data-link')

		el.classList.add('dismissible', 'dismissible-' + type);

		el.innerHTML = html;

		el.querySelector('.close').addEventListener('click', function(event){
			var height = el.offsetHeight,
				opacity = 1,
				timeout = null;
			function reduceHeight() {
				height -= 2;
				el.setAttribute('style', 'height: ' + height + 'px; opacity: ' + opacity);
				if (height <= 0) {
					window.clearInterval(timeout)	;
					timeout = null;
					el.remove();
				}
			}
			function fade() {
				opacity -= .1;
				el.setAttribute('style', 'opacity: ' + opacity);
				if (opacity <= 0) {
					window.clearInterval(timeout);
					timeout = window.setInterval(reduceHeight, 1);
				}
			}
			timeout = window.setInterval(fade, 25);
		});

	};

	var dismissibles = Array.prototype.slice.call(document.querySelectorAll('[data-component="dismissible-item"]'));
	if (dismissibles.length) {
		for (var i = 0; i < dismissibles.length; i++) {
			var type = dismissibles[i].getAttribute('data-type'),
				value = dismissibles[i].getAttribute('data-value');
                link = dismissibles[i].getAttribute('data-link')
			new dismissibleItem(dismissibles[i], type, value, link)
		}
	}

})(window);