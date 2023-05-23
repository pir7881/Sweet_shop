let changeThemeButtons = document.querySelectorAll('.change-theme');


changeThemeButtons.forEach(button => {
  button.addEventListener('click', function () {
    let theme = this.dataset.theme;
    applyTheme(theme);
  });
});

function applyTheme(themeName) {
  document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
  changeThemeButtons.forEach(button => {
    button.style.display = 'block';
  });
  document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
}

function increaseFontSize() {
  var parent = document.querySelector('body');
  var currentSize = parseFloat(window.getComputedStyle(parent)['font-size']);
  parent.style.fontSize = (currentSize + 1) + 'px';
  var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (var i = 0; i < headers.length; i++) {
    var newSize = parseFloat(window.getComputedStyle(headers[i])['font-size']) + 1;
    headers[i].style.fontSize = newSize + 'px';
  }
}

function decreaseFontSize() {
  var parent = document.querySelector('body');
  var currentSize = parseFloat(window.getComputedStyle(parent)['font-size']);
  parent.style.fontSize = (currentSize - 1) + 'px';
  var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (var i = 0; i < headers.length; i++) {
    var newSize = parseFloat(window.getComputedStyle(headers[i])['font-size']) - 1;
    headers[i].style.fontSize = newSize + 'px';
  }
}

function resetFontSize() {
  var parent = document.querySelector('body');
  var initSize = 16;
  parent.style.fontSize = initSize + 'px';
  var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (var i = 0; i < headers.length; i++) {
    headers[i].style.fontSize = '';
  }
} 

