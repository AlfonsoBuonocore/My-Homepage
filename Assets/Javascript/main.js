// ---------------- Thema-Sito ----------------- // 
  const ThemeButton = document.querySelector('.theme-button')
  // vedo se nello storage del mio browser c'è salvato un attributo collegato al tema del sito
  const StorageTheme = localStorage.getItem('selected-theme')

  // se nello storage ci sono informazioni corrispondente all'attributo di cui gli ho dato il nome fa dei settaggi in base allinformazione che ha ottenuto 
  if (StorageTheme) {
    if (StorageTheme == "light") {
      // se l'informazione è light setto il data-theme del body a light e metto come icona dello switch-theme il sole togliendo la luna
      document.body.setAttribute("data-theme","light")
      ThemeButton.classList.remove("bi-moon")
      ThemeButton.classList.add("bi-sun")
    }else{
      // invece se l'informazione è dark o altro non corrispondente a light setto il data-theme del body a dark e metto come icona dello switch-theme la luna togliendo il sole
      document.body.setAttribute("data-theme","dark")
      ThemeButton.classList.remove("bi-sun")
      ThemeButton.classList.add("bi-moon")
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
    return ThemeButton.classList.contains("bi-moon") ? "bi-moon" : "bi-sun"
  }

  function setTheme(theme){
    if (theme == "dark") {
      document.body.setAttribute("data-theme","light")
      ThemeButton.classList.remove("bi-moon")
      ThemeButton.classList.add("bi-sun")
    }else{
      document.body.setAttribute("data-theme","dark")
      ThemeButton.classList.remove("bi-sun")
      ThemeButton.classList.add("bi-moon")
    }
    Theme = getTheme();
    Icon = getIcon();
    // setto nello stoage locale il mio attributo corrispondente al tema del sito in modo che nel caricamento succesivo della pagina il tema sara gia attivo
    localStorage.setItem('selected-theme',Theme)
  }