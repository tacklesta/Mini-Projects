import Timer from './Timer';

export default function App(){
  return(
    <div className="app-container">
      <h1 className="app-title">React Countdown Clock</h1>
      <p>Changing of the Guard: Countdown to Nov 15th,2021</p>
      <Timer />
      <footer>
        Created by <a href="www.linkedin.com/in/tarun-dyundi-801
">Tacklestar</a>{' '}
      </footer>
    </div>
  );
}
