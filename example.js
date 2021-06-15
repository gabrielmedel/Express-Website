import Options from "./express-wesbite.js"

var web = new Options(
  //if nav required put true
  true,

  //style of the hero section
  "centered",

  //style of footer
  "basic",

  //items of the nav
  ["Casa", "Sobre nosotros", "Examples", "Contact"],

  //Here you can add the title and a short description
  ["Express Website", "An example of an express website"],

  //items of the footer
  ["Home", "About", "Privacy"],

  //optional things like logo or whatever you want...
  "Express logo"
)

//inicialize express-website

web.init()
