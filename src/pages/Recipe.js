import React,{useState} from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Mealitem from '../component/Mealitem'

const Recipe = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }


 return (
 <>
    <Navbar/>

    <main>
        <section>
        <div className="container my-5 ">
            <div className="text-center">
                <h1> Find Recipe </h1>
                <p className='fw-bold text-success'>Find your favourite recipe from food around the world and start Cooking</p>
            </div>

            <div className="col-lg-8 mx-auto my-4">
                <div class="input-group">
                    <input type="search" class="form-control search-bar border-3 border-dark rounded" placeholder="Enter Food name"  onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}  />
                    <button type="button" class="btn btn-success">Search <i className="fa fa-search ms-1"></i></button>
                </div>
            </div>
        </div>


        <div className="container">
                <div className="row justify-content-center">
        {        
                  (Mymeal==null)? <p className="notSearch">Not found</p> : 
                       Mymeal.map((res)=>{
                           return(
                          <Mealitem data={res}/>)} 
                  )     
                 }
             </div>
        </div>
        </section>

    </main>

    <Footer/>
    
    </>
  )
}

export default Recipe