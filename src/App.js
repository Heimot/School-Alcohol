import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(0)

  const calculate = (e) => {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    grams = grams - (burning * time);

    switch (gender) {
      case "Male":
        setResult(grams / (weight * 0.7));
        break;
      case "Female":
        setResult(grams / (weight * 0.6))
        break;
      default:
        setResult(0);
        break;
    }
  }

  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
      <form onSubmit={calculate}>
        <div>
          <label for="weight">Weight</label>
          <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label for="bottles">Bottles</label>
          <input type="number" id="bottles" value={bottles} onChange={(e) => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label for="time">Time</label>
          <input type="number" id="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
        </div>
        <div>
          <label for="gender">Gender</label>
          <input id="gender" type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}></input>Male
          <input id="gender" type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}></input>Female
        </div>
        <p>{result.toFixed(2)}</p>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
