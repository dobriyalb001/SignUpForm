import React from 'react'
import AuthStore from '../Store/AuthStore';

const Home = () => {
  const token= AuthStore((state)=>{state.token})
  console.log(token)
  return (
    <>
    
    <h1>Hello this is the home page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dicta dolores doloribus molestias perspiciatis. Nemo quidem neque perspiciatis nostrum. 
      Eveniet architecto tempora blanditiis magni. Deserunt, nesciunt sequi nisi praesentium, 
      inventore nam sit quod autem eaque, quisquam voluptatem non nobis porro possimus perspiciatis 
      atque voluptatum! Voluptates reprehenderit id, itaque suscipit unde omnis voluptas eaque,
       deleniti vel quis, eum dolores soluta fuga animi rerum. Architecto praesentium pariatur 
       rerum? Amet dignissimos vel, delectus beatae, eaque adipisci alias molestias dolore ex 
       explicabo, consequuntur exercitationem iusto. Aliquam cumque repellat reiciendis esse et. 
       Vero, officia, maxime dolorem quibusdam numquam eaque at incidunt eum voluptatem architecto recusandae ad!</p>
    </>
  )
}

export default Home