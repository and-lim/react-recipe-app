import React from 'react'

const Mealitem = (getMeal) => {
    console.log(getMeal.data)

  return (
            <div className="col-lg-4 mb-3">
                <div className="card">
                    <img src={getMeal.data.strMealThumb} className='img-fluid card-top' alt="meal"/>
                    <div className ="card-body px-3">
                        <h3>{getMeal.data.strMeal}</h3>
                        <span className='bg-green my-2 text-white'>{getMeal.data.strCategory}</span>
                        <p className='fw-bold mt-1'>{getMeal.data.strArea} food</p>
                        <p className='fw-bold'>{getMeal.data.strTags} food</p>
                    </div>
                    <div className="button d-flex justify-content-between px-3 mb-3">
                    <a className="btn btn-danger" href={getMeal.data.strYoutube}>Watch video
                    <i className="fa fa-youtube ms-2"></i>
                    </a>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            See recipe <i className="fa fa-book ms-1"></i>
                        </button>
                    </div>
                            
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLabel">Recipe</h2>  
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <div className ="recipe d-flex flex-column gap-3">
                                    <p>{getMeal.data.strInstructions}</p>
                                    <img src={getMeal.data.strMealThumb} className='img-recipe'/>
                                    <div className="watch-btn text-center">
                                        <a className="btn btn-success"  
                                            href={getMeal.data.strYoutube}>Watch video</a>
                                    </div>
                                </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>  
            </div>
  )
}

export default Mealitem