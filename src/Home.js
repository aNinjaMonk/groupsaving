import './App.css';

function Home() {
  return (
    <div className="App">
      <h1>Group Saving</h1>
      <h3>List of Active Groups</h3>
      <ul>
        <li>Group 1 : Rs. 10,000/month <a href="/group/1">Join</a></li>
        <li>Group 2 : Rs. 5,000/month <a href="/">Join</a></li>
      </ul>
    </div>
  );
}

export default Home;
