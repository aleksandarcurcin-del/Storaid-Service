import './Blog.css'
import Cards from "./Cards"
import {useState, useEffect} from 'react'

function Blog() {
    const [cardItems, setCardItems] = useState([])
    
    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
        const data = await res.json()
        setCardItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="blog">
            <div className="container">
                <div className="blog-flex">
                    <div className="blog-upper">
                        <h4>Latest Blog and News</h4>
                        <div className="blog-text">
                            <h3>Check Out Our Latest Blog and News Update</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                        </div>
                    </div>
                    
                    <div className="blog-cards">
                        {
                            cardItems.map((item) => (<Cards key={item} item={item} />))
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Blog