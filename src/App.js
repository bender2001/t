import logo from './logo.svg';
import './App.css';
import CalendarComponent from './components/calendar.componet';

function App() {
  return (
    <CalendarComponent
      dates={[
        { month: 8, day: 24, title: 'חמישי' },
        { month: 8, day: 25, title: 'שישי' },
        { month: 8, day: 26, title: 'שבת' },
        { month: 8, day: 27, title: 'ראשון' },
        { month: 8, day: 28, title: 'שני' },
      ]}
      hours={[{ time: 10, backgroundColor: 'black' }, { time: 11, backgroundColor: 'black' }, { time: 12, backgroundColor: 'black' }, { time: 13, backgroundColor: 'black' }, { time: 14, backgroundColor: 'black' }, { time: 15, backgroundColor: 'black' }]}
      plans={[
        { month: 8, day: 25, events: [{ start: 10.25, end: 11.5, message: 'מוזאיון מדט' }, { start: 12.5, end: 13.5, message: 'טיול בפרק' }] },
        { month: 8, day: 27, events: [{ start: 10.25, end: 13.5, message: 'מוזאיון מדט' }] }
      ]}
    />
  );
}

export default App;
