$('.preloader').addClass('preloader-deactivate');
$(document).ready(function() {
  // When the dot-menu is clicked, toggle the menu
      // Toggle the 'visible' class on .mob-menu to show or hide the menu
    $('.mob-menu').toggleClass('visible');
    
    // You can also apply changes to the targeted containers if needed
    $('.others-option-for-responsive .container .container').each(function() {
      // Example action: add a class to the nested container
      $(this).toggleClass('active');  // Add or remove the 'active' class
    });
	
document.querySelectorAll('.navbar-nav-mob .nav-item > a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Get the dropdown menu
        const dropdownMenu = this.nextElementSibling;

        // Toggle the 'active' class on the clicked link
        this.classList.toggle('active');

        // Check if the dropdown menu exists and toggle visibility
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
            // Toggle the visibility of the dropdown menu
            dropdownMenu.classList.toggle('show');

            // Close other open dropdowns (optional)
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
        }

        // Prevent navigation only if the dropdown is open
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu') && dropdownMenu.classList.contains('show')) {
            event.preventDefault(); // Prevent default navigation if dropdown is visible
        }
    });
});

document.querySelectorAll('#navbar-nav-1 .nav-item > a').forEach(link => {
    link.addEventListener('mouseenter', function(event) {
        // Get the dropdown menu
        const dropdownMenu = this.nextElementSibling;

        // Toggle the 'active' class on the clicked link
        this.classList.toggle('active');

        // Check if the dropdown menu exists and toggle visibility
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
            // Toggle the visibility of the dropdown menu
            dropdownMenu.classList.toggle('show');

            // Close other open dropdowns (optional)
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
        }

        // Prevent navigation only if the dropdown is open
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu') && dropdownMenu.classList.contains('show')) {
            event.preventDefault(); // Prevent default navigation if dropdown is visible
        }
    });
});

			
			
			

         


		// Select elements
			const dotMenu = document.querySelector('.dot-menu');
			const mobileNav = document.getElementById('mobile-nav');

			// Add click event for slow toggle
			dotMenu.addEventListener('click', function() {
				mobileNav.classList.toggle('active');
			});
			dotMenu.click();
			
			
			
});
