function showContent(contentType) {
  var contentElement = document.getElementById('content');
  var content = '';

  switch (contentType) {
    case 'home':
      content = '<h1>Welcome to the Home Page</h1>';
      break;
    case 'contact':
      content = '<h1>Contact Information</h1>' +
                '<p>Phone: 123-456-7890</p>' +
                '<p>Email: contact@example.com</p>';
      break;
    case 'information':
      content = '<h1>Information</h1>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>';
      break;
    case 'guide':
      content = '<h1>Guide</h1>' +
                '<p>This is a guide on how to use the website.</p>';
      break;
  }

  contentElement.innerHTML = content;
}
