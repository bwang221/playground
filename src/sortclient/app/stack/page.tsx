"use client"
import { useState } from 'react';


const API_URL='http://localhost:8000/api/sort';

async function callAPi(url, data){
	

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log("****")
      const jres= await response.json();
      console.log(jres)
      return jres['stack']

}
export default function Page(){
	const [width, setWidth] = useState('0');
  const [height, setHeight] = useState('0');
  const [length, setLength] = useState('0');
  const [mass, setMass] = useState('0');
  const [stack, setStack] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data={width:parseInt(width), height:parseInt(height), length:(length), mass:parseInt(mass) };
    const stack= await callAPi(API_URL, data);
    console.log(stack)
    setStack(stack);
	}
	return(
	<form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Width:</label>
      <input
        type="number"
        id="width-input"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />

      <label htmlFor="text-input">Height:</label>
      <input
        type="number"
        id="height-input"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />
      <label htmlFor="text-input">Height:</label>
      <input
        type="number"
        id="length-input"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />

      <label htmlFor="text-input">Mass:</label>
      <input
        type="number"
        id="mass-input"
        value={length}
        onChange={(e) => setMass(parseInt(e.target.value))}
      />
      <button type="submit">Submit</button>
      <p>{stack}</p>
    </form>

	)
}