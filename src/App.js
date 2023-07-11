import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CalculatorPage from './routes/Calculator';
import Home from './routes/Home';
import Quotes from './routes/Quotes';
import ErrorPage from './routes/Error-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="Quotes" element={<Quotes />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
