import { useState } from 'react'

function Zadanie({ tresc, czyWykonane }: Notatka) {
  return (
    <div>
      {tresc} <br/>
      {czyWykonane ?
        <span>Wykonane</span> :
        <span>Niewykonane</span>}
    </div>
  );
}

interface Notatka {
  tresc: string;
  czyWykonane: boolean;
}

let notatkitablica: Notatka[] = [
  {
    tresc: "blablabla",
    czyWykonane: false
  },
  {
    tresc: "notatka2",
    czyWykonane: false
  }
]


function App() {

    const [notatkiarray, setNotatki] = useState(notatkitablica)
    
  // posortowane alfabetycznie
  const notatkiResult = notatkiarray.sort((a, b) => a.tresc.localeCompare(b.tresc)).map(notka => {

    return (
      <div>
        <button onClick={() => setNotatki(AktualizujNotatke(notatkitablica, notka))}>Oznacz</button>
        
        {notka.czyWykonane &&
          <span>test wiadomosc true</span>
        }
        {/* {notka.czyWykonane = czyWykonanestate}  */}

        <Zadanie tresc={notka.tresc} czyWykonane={notka.czyWykonane} />

      </div>
    );
  });

  const notatkiwykonane = [...notatkiarray].filter(nota => nota.czyWykonane).map(notka => {
    return (
      <div>
        <button onClick={() => AktualizujNotatke(notatkitablica, notka)}>Oznacz</button>
        {notka.czyWykonane &&
          <span>test wiadomosc true</span>
        }
        {/* {notka.czyWykonane = czyWykonanestate}  */}

        <Zadanie tresc={notka.tresc} czyWykonane={notka.czyWykonane} />

      </div>
    );
  });

   const notatkiniewykonane = [...notatkiarray].filter(nota => !nota.czyWykonane).map(notka => {
    return (
      <div>
        <button onClick={() => AktualizujNotatke(notatkitablica, notka)}>Oznacz</button>
        {notka.czyWykonane &&
          <span>test wiadomosc true</span>
        }
        {/* {notka.czyWykonane = czyWykonanestate}  */}

        <Zadanie tresc={notka.tresc} czyWykonane={notka.czyWykonane} />

      </div>
    );
  });

  // function wykonaj(notat : Notatka) {
  //   console.log("czywykonane " + notat.tresc + " stan: " + notat.czyWykonane)
  //   notat.czyWykonane = !notat.czyWykonane;
  //   return notat;
  // }

  function AktualizujNotatke(tablica : Notatka[], notat: Notatka){
  console.log("czywykonane " + notat.tresc + " stan: " + notat.czyWykonane)
    notat.czyWykonane = !notat.czyWykonane;
    return tablica.map(not =>{
        if(not.tresc === notat.tresc){
          not.czyWykonane = !notat.czyWykonane;
          return not;
        }else{
          return not;
        }
    });
  }


  function dodawanie(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    notatkiarray.push({ tresc: event.target.value, czyWykonane: false });
  }


  return (
    <div className="container">
      {notatkiResult}
      <br/>
       <br/>
       <span>Notatki NieWykonane:</span>
      {notatkiniewykonane}
       <br/>
        <br/>

      <span>Notatki Wykonane:</span>
      {notatkiwykonane}

      <br/>
      <br/>

       <input
            type="text"
            className="form-control"
            placeholder="Podaj tytul"
            id="dodawanieinput"
            
          />

          <button onClick={() => dodawanie}>
            Dodaj notatke
          </button>
    </div>

    
  )
}

export default App
