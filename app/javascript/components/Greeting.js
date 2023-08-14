import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((store) => store.greeting);
  return (
    <div>
      <h1>Greetings</h1>
      <pre>{JSON.stringify(greeting, null, 2)}</pre>
    </div>
  );
}

export default Greeting;
