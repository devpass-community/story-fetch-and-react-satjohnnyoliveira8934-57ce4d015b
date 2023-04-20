import { useState } from "react";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

const handleClick = async (event) => {
  setIsLoading(true);
  try {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const data = await response.json();
    const { data: fact } = data;
    setQuote(fact);
  } catch (error) {
    console.error('Error fetching meowfact:', error);
  }
  setIsLoading(false);
};

  return (
    <Container>
      <button data-testid="button" onClick={e => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === '' ? 
        ( <Spinner /> ) : ( <span data-testid="quote">{quote}</span> )
      }
    </Container>
  );
}

export default App;