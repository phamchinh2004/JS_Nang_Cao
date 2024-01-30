let output;

// document.all is deprecated (deprecated: không được dùng nữa)
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags lấy mọi thứ trong thẻ html
output = document.documentElement;
// console.log(output);

// Head and body tags
output = document.head;//Lấy thẻ head
output = document.body;//Lấy thẻ body

// HTMLCollection of everything in head/body
output = document.head.children;//Lấy tất cả những gì trong thẻ head
output = document.body.children;//Lấy tất cả những gì trong thẻ body

// Random properties
output = document.doctype;console.log(output);
output = document.domain;console.log(output);
output = document.URL;console.log(output);
output = document.characterSet;console.log(output);
output = document.contentType;console.log(output);

// Get all forms
output = document.forms;console.log(output);
output = document.forms[0];console.log(output);
output = document.forms[0].id;console.log(output);
output = document.forms[0].method;console.log(output);
output = document.forms[0].action;console.log(output);

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);

forms.forEach((form) => console.log(form));

console.log(output);
