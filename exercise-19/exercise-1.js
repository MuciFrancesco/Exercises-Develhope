const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

//semplicemente perchè stiamo assegnando con l'uguale un ogetto  ad un altro oggetto, quindi è
//ovvio che il risultato sarà il medesimo e se si cercherà di modificare person2, che è
//uguale a person1, quindi nello scope globale si modificherà anche person1 , poichè gli oggetti vengono passati per riferimento e non per assegnazione come può essere per una variabile globale di tipo let o var.
//gli oggetti vengono passati per riferimento all'allocazione di memoria quindi sia person1 che person2 punteranno alla stessa alocazione di memoria e se modificata la prima verrà modificata anche la seconda avendo lo stesso posizionamento

//per cambiare il risultato di person2 dobbiamo utilizzare Object.assing che creerà un nuovo oggetto che però non sarà il medesimo
//adesso person2 potrà essere però modificato e person1 rimarrà invariato.

const person2 = person1;

console.log(person1);
console.log(person2);
