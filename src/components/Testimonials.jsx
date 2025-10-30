import './Testimonials.css'
import { useState, useEffect } from 'react'
import Rating from './Rating'

function Testimonials() {
    const [reviewItems, setReviewItems] = useState([])
    
    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
        const data = await res.json()
        setReviewItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <section className="testimonials">
        <div className="testimonials-bg">
            <div className="container">
                <div className="testimonials-flex">
                    <div className="testimonials-text">
                        <h4>Testimonials</h4>
                        <h3>See What Our Client Have to Say</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                    <div className="testimonials-review">
                        {
                            reviewItems.map((item) => (<Rating key={item.id} item={item} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials