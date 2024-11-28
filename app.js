// Function to create a new product page
function createProductPage(productName, productPrice, imageUrl) {
    // Create a new HTML page dynamically
    const newPageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="style.css" /> 
      <title>FINO - PRODUCT</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
      <link rel="shortcut icon" type="x-icon" href="Fino-Icon.png">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
    <div class="ham-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

  <section class="et-hero-tabs">
    <div class="et-hero-tabs-container">
            <a href="index.html" class="et-hero-tab" id="fino"><img src="Images/FINO-LOGO.png" alt=""></a>
    </div>
  </section>
  <div class="off-screen-menu">
    <div class="et-hero-tabs-container-mobile">
      <a class="et-hero-tab" id="mobile" href="NEW.html">NEW</a>
      <a class="et-hero-tab" id = 'mobile' href="SHOP.html">SHOP</a>
      <a class="et-hero-tab" id='mobile' href="CONTACT.html">ABOUT</a>
      <a class="et-hero-tab" id="mobile" href="MEDIA.html">MEDIA</a>

    </div>
  </div>
    <div class="placeholder"></div>
    <div class='fade-in'>
    <div class="Title">
      <h1>PRODUCT INFO</h1>
    </div>
    <div class="product">
            <img src="${imageUrl}" alt="${productName}">
            <h2>${productName}</h2>
            <p>${productPrice}</p>
    </div>
    <div class="container1">
      <form action="https://submit-form.com/bXD4OzkBK">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Full Name" required />
        <select id="clothes" name="clothes" required>
          <option value="${productName}">${productName}</option>
        </select>
        <button type="submit">CONFIRM PREORDER</button>
      </form>
    </div>
    </div>
      <script src='script.js'></script>
    </body>
    </html>
    `;
  
    // Create a new window with the generated content
    const newWindow = window.open('');
    newWindow.document.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
  }
  
  // Function to handle click event on "PRE-ORDER" button
  function handlePreOrderClick(event) {
    event.preventDefault();
    const productDiv = event.target.closest('.product');
    const productName = productDiv.querySelector('h2').innerText;
    const productPrice = productDiv.querySelector('p').innerText;
    const imageUrl = productDiv.querySelector('img').src; // Extract image source
  
    // Create a new product page with the extracted information
    createProductPage(productName, productPrice, imageUrl);
  }
  
  // Find all "PRE-ORDER" buttons and add click event listeners
  const preOrderButtons = document.querySelectorAll('.product button');
  preOrderButtons.forEach(button => {
    button.addEventListener('click', handlePreOrderClick);
  });
