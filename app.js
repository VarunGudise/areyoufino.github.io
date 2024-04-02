// Function to create a new product page
function createProductPage(productName, productPrice) {
    // Create a new HTML page dynamically
    const newPageContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${productName}</title>
      </head>
      <body>
        <header>
          <h1>${productName}</h1>
        </header>
        <main>
          <div class="product">
            <h2>${productName}</h2>
            <p>${productPrice}</p>
            <button onclick="goBack()">Go Back</button>
          </div>
        </main>
        <footer>
          <p>&copy; 2024 Our Awesome Store. All rights reserved.</p>
        </footer>
        <script>
          function goBack() {
            window.history.back();
          }
        </script>
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
  
    // Create a new product page with the extracted information
    createProductPage(productName, productPrice);
  }
  
  // Find all "PRE-ORDER" buttons and add click event listeners
  const preOrderButtons = document.querySelectorAll('.product button');
  preOrderButtons.forEach(button => {
    button.addEventListener('click', handlePreOrderClick);
  });
  