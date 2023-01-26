import React, {useState, useEffect} from "react";

import GalleryList from "../display/GalleryList";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
// GET http method to fetch the diffrent workouts we have for our app.
function Gallery() {
  const[workouts, setWorkouts] = useState([]);

  useEffect(  //Handle the fetch side effect
    ()=>{
    fetch("https://vercel-json-server-gules.vercel.app/workouts/")
    .then((response) => response.json())
    .then((data)=>(setWorkouts(data)))
    }, []
  )// GET http method to fet// GET http method to fetch the diffrent workouts we have for our app.ch the diffrent workouts we have for our app.
// Using the map to iterate over each item in the workouts array
  const displayExercises = workouts.map((workout)=>{
    return(
        <GalleryList key={workout.id} exercise={workout.exercise} duration={workout.duration} image={workout.image} coach={workout.couch} weight={workout.weight}/>
    ) //renders a "GalleryList" component and passes it the necessary props.
  })
  //the "motion" library from "framer-motion" which is used to animate the div element containing the gallery.
//uses the "initial" prop to set the initial state of the section 
//element to "hidden" and the "whileInView" prop to set the state of the element to "visible" 
//when it is scrolled into view.
  return (
    <section id="gallery" className="w-full bg-red-100 py-20">
      
      <motion.div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1  className="basis-3/5 font-montserrat text-3xl font-bold">OUR CLASSES</h1>
            <p className="py-5 text-black">
              Browse our catalogue of the most popular and recommended exercise stacks that we offer
              for an immersive experience. Provided are the recommended minimum weight to participate 
              and the required duration for each. The Individual coaches are also listed and you can book any on othem at your will
               to suit your needs.Make yourself stronger than your excuses. We guarantee results not promises.
            </p>
          </div>

        </motion.div>{/* "div" element that contains an "ul" element which holds the "GalleryList" components for each workout.
        has a className that defines the layout and styling for the gallery. */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap flex-wrap">
            { displayExercises }
          </ul>
        </div>
      </motion.div>
    </section>    
  )
}

export default Gallery;
