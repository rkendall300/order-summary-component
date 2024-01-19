import './App.css';
import musicIcon from './images/icon-music.svg';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="fm-image-container">
            <div id="fm-image"></div>
          </div>
          <div id="info">
            <h1 id="title">Order Summary</h1>
            <p id="description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div id="plan-container">
              <img id="music-logo" src={musicIcon} alt="music"></img>
              <div id="plan-info">
                <p id="annual">Annual Plan</p>
                <p id="price">$59.99/year</p>
              </div>
              <a id="change" href="javascript:;">Change</a>
            </div>
            <div id="footer">
              <button id="checkout">Proceed to Payment</button>
              <p id="cancel">Cancel Order</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
