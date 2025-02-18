"use client"
import { useState } from 'react';

export default function MyForm() {
  const [width, setWidth] = useState('0');
  const [height, setHeight] = useState('0');
  const [length, setLength] = useState('0');
  const [mass, setMass] = useState('0');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <p>hello</p>
  );
}