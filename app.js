var app = a = {};
a.elements = e = {};
a.listeners = l = {};
a.handlers = h = {};
a.utilities = u = {};

e.content = undefined;

document.addEventListener('DOMContentLoaded', function() {
  e.content = document.getElementById('content');

  document.addEventListener('keypress', l.onKeyPress);
  document.addEventListener('click', l.onClick);

  var content = localStorage.getItem('bucket/content');
  if (content) {
    e.content.innerHTML = content;
  }
});

l.onKeyPress = function(event) {
  if (event.key !== 'Enter') { return; }
  if (event.target.id !== 'input') { return; }
  if (event.target.value) {
    var newEl = document.createElement('p');
    newEl.innerText = event.target.value;
    e.content.appendChild(newEl);
    event.target.value = '';

    var content = e.content.innerHTML;
    localStorage.setItem('bucket/content', content);
  }
}

l.onClick = function(event) {
  if (event.target.tagName === 'P') {
    event.target.remove();

    var content = e.content.innerHTML;
    localStorage.setItem('bucket/content', content);
  }
}
