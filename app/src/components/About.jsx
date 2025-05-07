import React from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  console.log(location)

  return (
    <>
    <h1>This is the About page</h1>
    <h2>This is the second page which is publically available</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit nihil assumenda cum? Consectetur fugit quisquam ducimus neque expedita illum accusamus natus tenetur voluptas quaerat sequi dignissimos enim provident asperiores, vitae assumenda molestiae quidem hic repellat porro incidunt voluptatem fugiat, non doloribus. Necessitatibus fugit, dolores quod odit soluta quasi iure!</p>
    
    </>
  )
}

export default About