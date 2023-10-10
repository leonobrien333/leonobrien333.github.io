window.addEventListener('load', (event) => {
    parallax();
    rotator();
  });

function parallax(){
    // var image = document.getElementsByClassName('parallax');
    // new simpleParallax(image, {
    //     scale: 1.3
    // });
    // const images = document.querySelectorAll(".parallax");
    // images.forEach(image => {
    //     new Ukiyo(image, {
    //       speed: 1.5,
    //       scale: 2.0,
    //       onComplete: () => {
    //         image.style.height = "400px";
    //       }
    //     });
    //   });
    

    const images = document.querySelectorAll(".parallax");

    const ukiyoInstances = [];
    
    // Initialize ukiyo instances for each image and store them in an array
    images.forEach(image => {
      const ukiyoInstance = new Ukiyo(image, {
        speed: 1.5,
        scale: 2.0,
      });
      ukiyoInstances.push(ukiyoInstance);
    });
    
    const buttons = document.querySelectorAll(".secondary-tab-btn");
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
    
        // Get the target id of the clicked button
        const targetId = button.getAttribute("data-bs-target");
        
        // Find the corresponding div containing the image
        const imageDiv = document.querySelector(targetId);
    
        if (imageDiv) {
          // Find the corresponding ukiyo instance for the image
          const ukiyoInstance = ukiyoInstances.find(instance => instance.wrapper.querySelector(".parallax") === imageDiv.querySelector(".parallax"));
    
          if (ukiyoInstance) {
            // Call reset() on the ukiyo instance to recalculate the parallax effect
            ukiyoInstance.reset();
          }
        }
      });
    });
    

}

function rotator(){
    const icons = document.querySelectorAll(".rotator");
	window.addEventListener('scroll', function() {
		icons.forEach(icon =>{
		let rotation_degrees = window.scrollY * 0.5;
			icon.style.transform = `rotate(${rotation_degrees}deg)`; 
		})
	})
}