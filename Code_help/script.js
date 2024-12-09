
  const box = document.querySelector('.box');

  box.addEventListener('mousemove', function (e) {
    const boxRect = box.getBoundingClientRect();
    const boxWidth = boxRect.width;
    const boxHeight = boxRect.height;

    // Calculate the mouse's X and Y position relative to the center of the box
    const xAxis = (e.clientX - boxRect.left - boxWidth / 2) / boxWidth * 2;
    const yAxis = (e.clientY - boxRect.top - boxHeight / 2) / boxHeight * 2;

    // Apply a 3D rotation based on mouse position
    box.style.transform = `rotateY(${xAxis * 10}deg) rotateX(${yAxis * -10}deg)`;

    // Change brightness based on Y-axis (as the mouse moves vertically)
    const brightness = 1 + Math.abs(yAxis) * 0.5;
    box.style.filter = `brightness(${brightness})`;

    // Add a dynamic shadow based on X and Y axis
    const shadowX = xAxis * 20;
    const shadowY = yAxis * 20;
    box.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.2)`;
  });

  // Reset the transformation when the mouse leaves the box
  box.addEventListener('mouseleave', function () {
    box.style.transform = 'rotateY(0) rotateX(0)';
    box.style.filter = 'brightness(1)';
    box.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
  });

