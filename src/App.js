import React, { useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [numberValue, setNumberValue] = useState('');
  const [listOfPrimeNumber, setList] = useState([]);

  // Pergunta 1 (a)

  function onChangePrimeNumberInput(evt) {
    const onlyNumbers = evt.target.value.replace(/[^\d]/g, '')
    setNumberValue(onlyNumbers)
    let primeNumbers = []
    for (let i = 0; i <= parseInt(onlyNumbers); i++) {
      if (isPrimeNumber(i)) {
        primeNumbers.push(i)
      }
    }
    setList(primeNumbers)
  }

  function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  // Pergunta 2 (a), Esta retornando errado pois cada objeto e único, sendo assim, teria que transformar o objeto com o name: amy em uma string.

  function greet (person) {
    if (person == 'amy') {
    return 'hey amy'
    } else {
    return 'hey arnold'
    }
   }
   greet( 'amy' )

   //Pergunta 2(b), porque o this.name referenciado na função bark é sobre o nome da função dog, acho que poderia chamar como classe ao envés de Função.
   class Dog {
    constructor(name) {
      this.name=name
    }
    bark() {
      console.log(this.name + ' says woof')
    }
  }
  let fido = new Dog('cachorro')
  fido.bark();

   
  return (
    <div className="App">
      <header className="App-header">
        <h1>Challenge Mercadou</h1>
      </header>
      <div>
        <label htmlFor="">Digite o número primo:</label>
        <input type="text" maxLength="2" value={numberValue} onChange={onChangePrimeNumberInput} />
        {
          listOfPrimeNumber.length > 0 &&
          <div>
            <h2>Os números primos são:</h2>
            <ul>

              {listOfPrimeNumber.map(n => (
                <li>{n}</li>
              ))}
            </ul>

          </div>

        }
      </div>
      {!loading ?
        <button onClick={onClick}>test promise all clica aqui</button>
        : <span>carregando...</span>
      }
    </div>
  );
}

export default App;
