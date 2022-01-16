document.querySelector(".spazio").style.height = document.querySelector("header").clientHeight + "px"
document.querySelector(".menu").style.top = document.querySelector("header").clientHeight + "px"

// ---------------- Thema-Sito ----------------- // 
  const ThemeButton = document.querySelector('.theme-button')
  // vedo se nello storage del mio browser c'è salvato un attributo collegato al tema del sito
  const StorageTheme = localStorage.getItem('selected-theme')

  // se nello storage ci sono informazioni corrispondente all'attributo di cui gli ho dato il nome fa dei settaggi in base allinformazione che ha ottenuto 
  if (StorageTheme) {
    if (StorageTheme == "light") {
      // se l'informazione è light setto il data-theme del body a light e metto come icona dello switch-theme il sole togliendo la luna
      document.body.setAttribute("data-theme","light")
      ThemeButton.classList.remove("bi-moon-fill")
      ThemeButton.classList.add("bi-sun-fill")
    }else{
      // invece se l'informazione è dark o altro non corrispondente a light setto il data-theme del body a dark e metto come icona dello switch-theme la luna togliendo il sole
      document.body.setAttribute("data-theme","dark")
      ThemeButton.classList.remove("bi-sun-fill")
      ThemeButton.classList.add("bi-moon-fill")
    }
  }

  // attraverso due funzione attribuisco a due variabili che mi serviranno in seguito con il tema del sito e l'immagine dello swtch-theme corrispondente
  var Theme = getTheme()
  var Icon = getIcon()

  // quando lo switch-theme viene cliccato questa funzione chiama un'altra funzione simile alla funzione dei settaggi dallo storage che setta il tema al cambiamento da parte dell'utente
  ThemeButton.addEventListener("click", () =>{
    setTheme(Theme);
  })

  // funzioni che mi permettono di recuperare il tema e l'icona correnti nel sito
  // tema
  function getTheme(){
    return document.body.getAttribute("data-theme")
  }
  // icona
  function getIcon(){
    return ThemeButton.classList.contains("bi-moon-fill") ? "bi-moon-fill" : "bi-sun-fill"
  }

  function setTheme(theme){
    if (theme == "dark") {
      document.body.setAttribute("data-theme","light")
      ThemeButton.classList.remove("bi-moon-fill")
      ThemeButton.classList.add("bi-sun-fill")
    }else{
      document.body.setAttribute("data-theme","dark")
      ThemeButton.classList.remove("bi-sun-fill")
      ThemeButton.classList.add("bi-moon-fill")
    }
    Theme = getTheme();
    Icon = getIcon();
    console.log( Icon + " " + Theme)
    // setto nello stoage locale il mio attributo corrispondente al tema del sito in modo che nel caricamento succesivo della pagina il tema sara gia attivo
    localStorage.setItem('selected-theme',Theme)
  }

// ----------- apertura menu ------------- // 

  const MenuButton = document.querySelector(".menu-button")
  var OpenNav = getOpenMenu()

  MenuButton.addEventListener("click", () =>{
    changeMenu(OpenNav)
    OpenNav = getOpenMenu()
  })

  function getOpenMenu(){
    return document.querySelector("nav").getAttribute("open-nav")
  }

  function changeMenu(openNav){
    if(openNav == "true") document.querySelector("nav").setAttribute("open-nav" , "false")
    else document.querySelector("nav").setAttribute("open-nav" , "true")
  }

// ------------- scroll to top ---------------- //
  window.onscroll = function(){
    if(window.scrollY >= 30) {
      document.querySelector(".scroll-to-top").style.right = "20px"
      document.querySelector("header").style.boxShadow = "var(--nav-bar-shadow)"
    }
    else{ 
      document.querySelector(".scroll-to-top").style.right = "-100px"
      document.querySelector("header").style.boxShadow = "none"
    }
    if(window.scrollY >= 30 && OpenNav == "true"){
      changeMenu(OpenNav)
      OpenNav = getOpenMenu()
    }
    
  }

  document.querySelector(".scroll-to-top").onclick = () =>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
