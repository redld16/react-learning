import Button from './components/Button';
const App = () => {
  // const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  // useEffect(() => {
  //   // const interval =
  //   setInterval(() => {
  //     setTime(dayjs().format('HH:mm:ss'));
  //     console.log('run code');
  //   }, 1000);
  //   // return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      {/* <h1>{time}</h1> */}
      <Button />
    </div>
  );
};

export default App;
