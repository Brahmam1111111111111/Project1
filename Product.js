import React from 'react';
import '../styles/product.css'; // Adjust the relative path as needed

const Product = () => {
  const changeColor = (carId, color) => {
    const carImages = {
      'car-1': {
        '#A1E52C': 'https://res.cloudinary.com/dysapvb7e/image/upload/v1720076318/blue_1_ossecv.png',
        '#01B8E5': 'https://res.cloudinary.com/dysapvb7e/image/upload/v1720076866/Copy_of_Copy_of_Copy_of_final_design_try_2_cross_view.168_uzdra9.png',
        '#C92C49': 'https://res.cloudinary.com/dysapvb7e/image/upload/v1720078352/black_vlaspj.jpg'
      },
      'car-2': {
        '#A1E52C': 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        '#01B8E5': 'https://p0.pikist.com/photos/131/463/bike-superbike-1000r-suzuki-motorbike-blue-race-speed-ride.jpg',
        '#C92C49': 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80'
      }
    };

    const imgElement = document.getElementById(`${carId}-img`);
    imgElement.src = carImages[carId][color];
  };

  return (
    <main className="container my-5">
      {/* SE03 Lite */}
      <section id="se03lite" className="my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Rhyno SE03 Lite</h2>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <div className="color-circle" style={{ backgroundColor: '#01B8E5' }} onClick={() => changeColor('car-1', '#A1E52C')}></div>
                <div className="color-circle" style={{ backgroundColor: 'red' }} onClick={() => changeColor('car-1', '#01B8E5')}></div>
                <div className="color-circle" style={{ backgroundColor: 'black' }} onClick={() => changeColor('car-1', '#C92C49')}></div>
              </div>
              <div className="mb-3">
                <img id="car-1-img" className="card-img-top img-fluid" src="https://res.cloudinary.com/dysapvb7e/image/upload/v1720076318/blue_1_ossecv.png" alt="Rhyno SE03 Lite" />
              </div>
              <button className="btn btn-primary">Buy Now</button>
              <p>Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="table-title">Rhyno SE03 Lite Specifications</div>
          <table className="table table-bordered spec-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Warranty on electronics</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>1.8Kwh</td>
              </tr>
              <tr>
                <td>Max range (@30km/h)</td>
                <td>100 km</td>
              </tr>
              <tr>
                <td>Motor</td>
                <td>1500W</td>
              </tr>
              <tr>
                <td>Charging time</td>
                <td>3 hours (12A)</td>
              </tr>
              <tr>
                <td>Battery warranty</td>
                <td>3 Years</td>
              </tr>
              <tr>
                <td>Max speed</td>
                <td>50 km/h</td>
              </tr>
              <tr>
                <td>Max range (@full speed)</td>
                <td>70 km</td>
              </tr>
              <tr>
                <td>Max range (@45km/h)</td>
                <td>90 km</td>
              </tr>
              <tr>
                <td>Other key benefits</td>
                <td>
                  Fire-safe battery<br />
                  Range prediction<br />
                  Comfortable ride<br />
                  Stable and safe
                </td>
              </tr>
              <tr>
                <td>Battery features</td>
                <td>
                  LFP with 1500 cycles<br />
                  Active Balancing<br />
                  Waterproof (IP67)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Product;
