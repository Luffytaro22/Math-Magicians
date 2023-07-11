import Calculator from '../components/Calculator';
import styles from '../styles/calculator.module.css';

export default function CalculatorPage() {
  return (
    <div id="calculator-div" className={styles.calculator}>
      <h2>Let&apos;s do some math!</h2>
      <Calculator />
    </div>
  );
}
