// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
// Add a class of flex-ctrto mainEl.
mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl = document.querySelector("#top-menu");
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Set the height topMenuElelement to be 100%
topMenuEl.style.height = "100%";
// Add a class of flex-aroundto topMenuEl
topMenuEl.classList.add("flex-around");

// iterate over the entire menuLinks array and for each "link" object
menuLinks.forEach((link) => {
  // Create an <a>element.
  let linkElement = document.createElement("a");
  // add an href attribute with its value set to the href property of the "link" object
  linkElement.setAttribute("href", link.href);
  // Set the new element's content to the value of the text property of the "link" object.
  linkElement.textContent = link.text;
  // append the new element to the topMenul element
  topMenuEl.appendChild(linkElement);
  // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl

  // Tasks 4.0- 4.3
  const subMenuEl = document.getElementById("sub-menu");
  // Set the height subMenuElelement to be 100%
  subMenuEl.style.height = "100%";
  // Set the background color of subMenuElto the value stored in the --sub-menu-bg CSS custom property
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  // Add the class of flex-around to the subMenuElelement
  subMenuEl.classList.add("flex-around");
  // Tasks 4.4 and 4.5
  //Set the CSS position property of subMenuElto the value of absolute
  subMenuEl.style.position = "absolute";
  //   // Set the CSS top property of subMenuElto the value of 0
  subMenuEl.style.top = "0";
// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");
// Declare a global showingSubMenuvariable and initialize it to false
var showingSubMenu = false;
// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.
topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    var link = evt.target;
    if (link.tagName !== 'A') return;
  if (!link.classList.contains('sub-link')) {
      topMenuLinks.forEach(function(menuLink) {
        menuLink.classList.remove('active');
      });

// Tasks 5.3 to 5.8
// Next in the event listener, if the clicked <a>link has a class of active:
// Remove the activeclass from the clicked <a>element.
// Set the showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// returnto exit the handler.

      link.classList.add('active');
      activeMenuItem = link;
      topMenuLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      link.classList.add('active');
      const linkData = menuLinks.find(function(linkObject) {
        return linkObject.text === link.textContent;
      });
  if (linkData && linkData.subLinks) {
        buildSubMenu(linkData.subLinks);
        subMenuEl.style.top = '100%';
      } else {
        subMenuEl.style.top = '0';
      }
    }
  });
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
      let linkEl = document.createElement('a');
      linkEl.classList.add('sub-link');
      linkEl.textContent = link.text;
      linkEl.href = link.href;
      subMenuEl.appendChild(linkEl);
    });
  }
  subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    var link = evt.target;
    if (link.tagName !== 'A') return;
  });
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });


});
