import './Blog.css'
import Cards from "./Cards"

function Blog() {
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
                    <Cards imageURL="https://win25jsfstorage.blob.core.windows.net/images/blogs/b_img_fee9174f-70ed-435a-90c5-e310aab29c80.png" date="2025-08-17T00:00:00" title="Free Up Your Space, Free Up Your Life: The Power of Decluttering" text="Clutter doesn't just take up physical space—it weighs on your mind too. Studies show that a tidy environment can reduce stress and increase focus, helping you feel more in control of your daily life. Decluttering starts with small steps: sort your belongings, decide what to keep, and store away items you don't use regularly. Renting a storage unit can help you keep your home organized without having to part with valuable possessions. By freeing up your living space, you also create mental space for creativity, relaxation, and productivity. A cleaner space truly leads to a clearer mind."/>
                    <Cards imageURL="https://win25jsfstorage.blob.core.windows.net/images/blogs/b_img_ca802974-2f14-4cd2-bb5e-30c6eb84a809.png" date="2025-07-12T00:00:00" title="Storage Trends 2024: What's New in the World of Storage" text="The storage industry has evolved rapidly, with 2024 bringing a wave of innovation and technology-driven improvements. Smart storage units with digital access control are becoming the new standard, allowing customers to manage their space directly from mobile apps. Eco-friendly materials and energy-efficient lighting are helping facilities reduce their environmental footprint. There's also a growing demand for climate-controlled units, catering to customers who store electronics, artwork, or furniture. Additionally, short-term rentals and flexible pricing models have become increasingly popular as people seek convenient and cost-effective storage options. The modern storage landscape is more connected, sustainable, and user-focused than ever before."/>
                    <Cards imageURL="https://win25jsfstorage.blob.core.windows.net/images/blogs/b_img_37a95e8a-719f-414e-b64d-ba1116791d87.png" date="2025-04-08T00:00:00" title="Safe and Secure: The Importance of Choosing the Right Storage" text="When it comes to storing your belongings, security should always be your top priority. Choosing the right storage facility means finding one that not only offers convenience but also ensures complete protection. Look for features like 24/7 surveillance, controlled access gates, strong perimeter fencing, and well-lit premises. A reliable storage company will also invest in fire prevention systems and pest control to maintain a safe environment. Whether you're storing family heirlooms, business inventory, or seasonal items, selecting a trusted storage provider gives you peace of mind knowing everything is safe and secure."/>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Blog