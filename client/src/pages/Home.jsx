import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import PopularRestaurants from '../components/PopularRestaurants'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
      }, [])

    const fetchRestaurants = async() =>{
        await axios.get('http://localhost:6001/fetch-restaurants').then(
          (response)=>{
            setRestaurants(response.data);
          }
        )
      }

  return (
    <div className="HomePage">

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Breakfast')}>
          <img src="https://www.lacademie.com/wp-content/uploads/2022/03/indian-breakfast-recipes-500x500.jpg" alt="" />
          <h5>Breakfast</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Morning Biriyani')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-VXaTJIkc6rk02DU8r7r9zR-KaeWvH1oKA&usqp=CAU" alt="" />
          <h5>Morning Biriyani</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Pizza')}>
          <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
          <h5>Pizza</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Noodles')}>
          <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2176816723.jpg" alt="" />
          <h5>Noodles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Burger')}>
          <img src="data:image/jpeg;base64,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" alt="" />
          <h5>Burger</h5>
        </div>

      </div>


      <PopularRestaurants />

      


      <div className="restaurants-container">
        <div className="restaurants-body">
            <h3>All restaurants</h3>
            <div className="restaurants">

                {restaurants.map((restaurant) =>(

                  <div className='restaurant-item' key={restaurant._id}>
                      <div className="restaurant" onClick={()=> navigate(`/restaurant/${restaurant._id}`)}>
                          <img src={restaurant.mainImg} alt="" />
                          <div className="restaurant-data">
                              <h6>{restaurant.title}</h6>
                              <p>{restaurant.address}</p>
                          </div>
                      </div>
                  </div>
                ))}

 
            </div>
        </div>
    </div>





      <Footer />
    </div>
  )
}

export default Home