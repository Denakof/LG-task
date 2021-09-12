import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bigtext">
          <div className="dktext">
          <h2> About US</h2>
          <br style={{clear:"both"}}/>

            DK, is a Jordanian apparel retailer based in Amman,Jordan. The
            company specializes in fast fashion, and products include clothing,
            accessories, shoes, swimwear, beauty, and perfumes. It is the
            largest company in the Inditex group, the world's largest apparel
            retailer.
          </div>
          <div className="storeimg2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Zara-salesdesk.jpg/1024px-Zara-salesdesk.jpg"/></div>
          <div className="text2">
            <h2>Early history: </h2>
            <ul className="ulist2">
              <li>The first DK store was opened in 2010 in the center</li>
          <li>it was founded in 2010 by Dena Kofahi of Amman,jordan. </li>
            <li> The first store featured low-priced lookalike
            products of popular, higher-end clothing fashions.</li>
            </ul>
          </div>
          <br style={{clear:"both"}}/>
          <div id="row">
          <div className="text-row text-center text-dark-grey text-padding-16">
            <div className="text-quarter text-section">
              <span className="text-xlarge">225+</span>
              <br />
              Stores
            </div>
            <div className="text-quarter text-section">
              <span className="text-xlarge"># 30</span>
              <br />
              On Interbrand's list of BGB
            </div>
            <div className="text-quarter text-section">
              <span className="text-xlarge">12,000+</span>
              <br />
              New designs every year
            </div>
            <div className="text-quarter text-section">
              <span className="text-xlarge"># 1</span>
              <br />
              Fully toxic-free production
            </div>
          </div>
        </div>  
          <br style={{clear:"both"}}/>
          <div className="storeimg">
            <img
              alt="store"
              src="https://st3.idealista.com/news/archivos/styles/news_detail/public/2020-03/zara.jpg?sv=zsIixHRX&itok=9fW4tipB"
            />
          </div>
          <div>
           <h2> Expansion:</h2>
            <ul className="ulist">
              <li> In September 2018, DK launched its online boutique.</li>
              
              <li>
                The website began in Jordan, the middle east,France, Italy,and
                Germany.
              </li>
              <li>
               
                 In November of that same year, DK Online extended its service
                to five more countries: Austria, Ireland, the Netherlands,
                Belgium and Luxembourg. Online stores began operating in the
                United States in 2019,Russia and Canada in 2020.
              </li>
            </ul>
            <br style={{clear:"both"}}/>
          </div>
        </div>
       
      </div>
    );
  }
}
export default Main;
