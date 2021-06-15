const nav = document.createElement("nav")
const section = document.createElement("section")
const footer = document.createElement("footer")
const layout = document.querySelector(".rest")
const body = document.body

export default class Options {
  constructor(navbar, body, footer, navItems, bodyContent, footerContent, ...rest) {
    this.navbar = navbar
    this.body = body
    this.footer = footer
    this.navItems = navItems
    this.bodyContent = bodyContent
    this.footerContent = footerContent
    this.logo = rest
  }

  //funcions to make it work
  innerNav = () => {
    nav.innerHTML =
      `<div><a href="index.html">${this.logo}</a></div>` +
      "<ul>" +
      this.navItems
        .map(function (item) {
          return `<li><a href="${item}"> ${item}</a></li>`
        })
        .join("") +
      "</ul>"
  }

  innerFooter = () => {
    footer.innerHTML =
      "<ul>" +
      this.footerContent
        .map(function (item) {
          return `<li><a href="${item}"> ${item}</a></li>`
        })
        .join("") +
      "</ul>"
  }

  init = () => {
    if ((this.navbar = true)) {
      body.appendChild(nav)
      this.innerNav()
    }

    if ((this.body = "centered")) {
      body.appendChild(section)
      section.classList.add("centered")
      section.innerHTML = `<h1>${this.bodyContent[0]}</h1>` + `<p>${this.bodyContent[1]}</p>`
    }

    if ((this.footer = "basic")) {
      body.appendChild(footer)
      footer.classList.add("basic")
      this.innerFooter()
    }

    nav.after(layout)
    section.after(layout)
  }
}
