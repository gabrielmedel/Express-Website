const nav = document.createElement("nav")
const section = document.createElement("section")
const footer = document.createElement("footer")
const layout = document.querySelector(".rest")
const body = document.body

class Options {
  constructor(navbar, body, footer, navItems, bodyContent, footerContent, ...rest) {
    this.navbar = navbar
    this.body = body
    this.footer = footer
    this.navItems = navItems
    this.bodyContent = bodyContent
    this.footerContent = footerContent
    this.logo = rest
  }
}

//Edit this options!

const web = new Options(
  //if nav required put true
  true,

  //style of the hero section
  "centered",

  //style of footer
  "basic",

  //items of the nav
  ["Inicio", "Sobre nosotros", "Examples", "Contact"],

  //Here you can add the title and a short description
  ["Express Website", "An example of an express website"],

  //items of the footer
  ["Home", "About", "Privacy"],

  //optional things like logo or whatever you want...
  "Express logo"
)

console.log(web)

//funcions to make it work

const innerNav = () => {
  nav.innerHTML =
    `<div><a href="index.html">${web.logo}</a></div>` +
    "<ul>" +
    web.navItems
      .map(function (item) {
        return `<li><a href="${item}"> ${item}</a></li>`
      })
      .join("") +
    "</ul>"
}

const innerFooter = () => {
  footer.innerHTML =
    "<ul>" +
    web.footerContent
      .map(function (item) {
        return `<li><a href="${item}"> ${item}</a></li>`
      })
      .join("") +
    "</ul>"
}

if ((web.navbar = true)) {
  body.appendChild(nav)
  innerNav()
}

if ((web.body = "centered")) {
  body.appendChild(section)
  section.classList.add("centered")
  section.innerHTML = `<h1>${web.bodyContent[0]}</h1>` + `<p>${web.bodyContent[1]}</p>`
}

if ((web.footer = "basic")) {
  body.appendChild(footer)
  footer.classList.add("basic")
  innerFooter()
}

nav.after(layout)
section.after(layout)
