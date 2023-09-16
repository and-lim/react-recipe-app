import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Home = () => {
  return (
 <>
 <Navbar/>

    <main>

      <section className='my-5'>
        <div className="hero container pt-lg-5 pt-4">
          <div className="row align-items-center">
            <div className="col-lg-6 fw-bold d-flex flex-column">
                <h1 className='fw-bold'>Find the Recipe</h1>
                <h3 className="mt-2">In your Website</h3>
                <p style={{lineHeight:"2", color:"green"}} className='fw-bold'>Find your Recipe now, search for recipes from foods <br /> around the world and cook them immediately</p>
              </div> 

              <div className="col-lg-6">
                <img src="image/ilustrasi.png" className='img-fluid' alt="" srcset="" />
              </div>
          </div>
        </div>
      </section>

      <div className="line my-3"></div>

      <section className='my-5'>
        <div className="container">
            <h1 className="fw-bold text-center" > Recipe Highlights </h1>

            <div className="d-flex justify-content-between my-5">
              <h3>Best Foods</h3>
              <a href="/recipe" className="btn btn-success px-3 d-flex align-items-center gap-1">See Recipe <i className="fa fa-arrow-right ms-1"></i></a>
            </div>

            <div className="row my-3">
                <div className="col-lg-4">
                  <div class="card" >
                    <img src="image/curry.jpg" style={{height:"18rem"}} className='card-top' alt="" />
                      <div class="card-body py-3 fw-bold">
                        <h5 clsass="card-title fw-bold">Chicken Katsu Curry</h5>
                        <p class="card-text">Japanese Chicken katsu with curry rice</p>
                      </div>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div class="card" >
                    <img src="image/steak.jpg" className='card-top img-fluid' style={{height:"18rem"}} alt="" />
                      <div class="card-body py-3 fw-bold">
                        <h5 clsass="card-title fw-bold">Steak Diane</h5>
                        <p class="card-text">French Steak Diane with premium Beef</p>
                      </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="card" >
                    <img src="image/laksa.jpg"  style={{height:"18rem"}} className='card-top' alt="" />
                      <div class="card-body fw-bold">
                        <h5 clsass="card-title fw-bold">Laksa</h5>
                        <p class="card-text">Malaysian Laksa with seafood</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

    </main>
    <Footer/>

 </>
  )
}

export default Home