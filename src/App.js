import "./App.css";
import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#56ed24");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <div className="App">
      {loading ? (
        <RingLoader color={color} loading={loading} size={50} />
      ) : (
        <header className="App-header">
          <article>
            <h1>We&rsquo;ll be back soon!</h1>
            <div>
              <p>
                Sorry for the inconvenience our system is under maintenance at
                the moment. We&rsquo;ll be back online shortly!.
              </p>
              <p>
                Contact :{" "}
                <a href="mailto:info@goldengateconsultants.com">
                  info@goldengateconsultants.com
                </a>
              </p>
            </div>
          </article>
        </header>
      )}
    </div>
  );
}

export default App;
