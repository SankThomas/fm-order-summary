import background from "./images/illustration-hero.svg"
import music from "./images/icon-music.svg"

function App() {
  return (
    <>
      <section className="showcase">
        <div className="background-image"></div>
        <div className="card">
          <img src={background} alt="hero pattern" className="hero" />
          <h1>Order summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="pricing">
            <div>
              <img src={music} alt="music button" title="Play music" />

              <article>
                <h3>Annual plan</h3>
                <p>$59.99/year</p>
              </article>
            </div>

            <button className="btn btn-change">Change</button>
          </div>

          <div className="buttons">
            <button className="btn btn-primary">Proceed to Payment</button>
            <button className="btn btn-secondary">Cancel Order</button>
          </div>
        </div>

        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://tsbsankara.co.ke"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Thomas Sankara
          </a>
          .
        </div>
      </section>
    </>
  )
}

export default App
