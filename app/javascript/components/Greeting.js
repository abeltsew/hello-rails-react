import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState([]);

  const getGreeting = async () => {
    const greeting = await axios.get('/random');
    setGreeting(greeting.data);
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(greeting, null, 2)}</pre>
    </div>
  );
}

export default Greeting;
