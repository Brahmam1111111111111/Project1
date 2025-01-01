import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Adjust the relative path as needed
import '../styles/Slider.css'; // Adjust the relative path as needed
// Import vehicle images
import vehicle1 from '../assets/images/vehicle1.jpg';
import vehicle2 from '../assets/images/vehicle2.jpg';
import vehicle3 from '../assets/images/vehicle3.jpg';

const Home = () => {
  const [changingWord, setChangingWord] = useState('Style');
  const words = ['Style', 'Elegance', 'Minimalism', 'Comfort'];
  let slideIndex = 1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChangingWord(prev => words[(words.indexOf(prev) + 1) % words.length]);
    }, 2000);

    showSlides(slideIndex);

    return () => clearInterval(intervalId);
  }, []);

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }

  return (
    <div className="home-container">
      <header className="front-line">
        Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span id="changing-word">{changingWord}</span>.
      </header>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="https://res.cloudinary.com/dysapvb7e/image/upload/v1720076318/blue_1_ossecv.png" alt="Blue Rhyno SE03" style={{width: "100%"}} />
          <h1>Rhyno SE03 Lite</h1>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="https://res.cloudinary.com/dysapvb7e/image/upload/v1720078352/black_vlaspj.jpg" alt="Rhyno SE03" style={{width: "100%"}} />
          <h1>Rhyno SE03</h1>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="https://res.cloudinary.com/dysapvb7e/image/upload/v1720078352/black_vlaspj.jpg" alt="Rhyno SE03 Max" style={{width: "100%"}} />
          <h1>Rhyno SE03 Max</h1>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      <div className="dot-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      <div className="color-selection">
        <div className="color-buttons">
          <button className="color-button" aria-label="Select red color"></button>
          <button className="color-button" aria-label="Select blue color"></button>
          <button className="color-button" aria-label="Select green color"></button>
        </div>
        <p className="description">The Rhyno SE03 offers a perfect balance of performance and features.</p>
        <button className="buy-now-button">Buy Now</button>
      </div>

      <div className="features mt-4">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>LFP Battery:</strong> Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!
          </li>
          <li className="list-group-item">
            <strong>Wider Tyres:</strong> Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.
          </li>
          <li className="list-group-item">
            <strong>Range Prediction:</strong> Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.
          </li>
          <li className="list-group-item">
            <strong>Extraordinary Experience:</strong> Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!
          </li>
          <li className="list-group-item">
            <strong>Rugged and Simple Design:</strong> We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;