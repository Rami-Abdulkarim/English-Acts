import './Styles.css';
import { useTheme } from '../ThemeContext';

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className='switch'>
      <input
      checked={theme == 'light'}
      onChange={toggleTheme}
      type='checkbox' />
      <span className='slider round' />
    </label>
  )
}

export default Switch;