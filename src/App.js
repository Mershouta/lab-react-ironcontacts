import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const startingContacts = contacts.slice(0, 6);

function App() {
  const [actualContacts, setActualContacts] = useState(startingContacts);

  const ajouterContact = () => {
    const randomNumber = Math.random() * contacts.length;
    const randomPosition = Math.floor(randomNumber);
    const randomContact = contacts[randomPosition];

    const contactClone = [...actualContacts];
    contactClone.unshift(randomContact);

    setActualContacts(contactClone);
  };

  const ordreAlphabetique = () => {
    const contactClone = [...actualContacts];

    contactClone.sort((elem2, elem1) => {
      if (elem2.name[0] > elem1.name[0]) {
        return 1;
      } else if (elem2.name[0] < elem1.name[0]) {
        return -1;
      } else {
        return 0;
      }
    });
    setActualContacts(contactClone);
  };

  const ordrePopularite = () => {
    const contactClone = [...actualContacts];

    contactClone.sort((elem2, elem1) => {
      if (elem2.popularity < elem1.popularity) {
        return 1;
      } else if (elem2.popularity > elem1.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setActualContacts(contactClone);
  };

  const supprimerContact = (idContact)=>{
const filterContacts = actualContacts.filter((cadaContact)=>{
  if (cadaContact.id === idContact){
    return false
  } else{
    return true
  }
})

setActualContacts(filterContacts)
  }



  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={ajouterContact} id="btn-ajouter">Nouveau contact aléatoire</button>
      <br />
      <br />
      <button onClick={ordreAlphabetique} className="btn-ordonner">Ordre Alphabétique</button>
      <button onClick={ordrePopularite} className="btn-ordonner">Ordre de Popularité</button>
      <br />
      <br />
      <section>
        {actualContacts.map((cadaContact) => {
          return (
            <div key={cadaContact.name} className="carte">
              <h4>Picture</h4>
              <br />
              <br />
              <img src={cadaContact.pictureUrl} alt="profile" width="150px" />
              <h4>Name</h4>
              <p>{cadaContact.name}</p>
              <h4>Popularity</h4>
              <p>{cadaContact.popularity}</p>
              <h4>Win Oscar</h4>
              {cadaContact.wonOscar === true ? <span>🏆</span> : <p>NO :</p>}
              <h4>Win Emmy</h4>
              {cadaContact.wonEmmy === true ? <span>🏆</span> : <p>NO :</p>}
              <br />
              <button onClick={()=> supprimerContact(cadaContact.id)} id="btn-supprimer">Supprimer Contact</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;