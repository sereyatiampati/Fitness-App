import React, {useState, useEffect} from "react";
import GalleryList from "../display/GalleryList";
import { motion } from "framer-motion";

function Gallery() {
  const[workouts, setWorkouts] = useState([]);

  useEffect(
    ()=>{
    fetch("https://vercel-json-server-gules.vercel.app/workouts/")
    .then((response) => response.json())
    .then((data)=>(setWorkouts(data)))
    }, []
  )

  const displayExercises = workouts.map((workout)=>{
    return(
        <GalleryList key={workout.id} exercise={workout.exercise} duration={workout.duration} image={workout.image} coach={workout.couch} weight={workout.weight}/>
    )
  })

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
            <p className="py-5">
              Browse our catalogue of the most popular and recommended exercise stacks that we offer
              for an immersive experience. Provided are the recommenede minimum weight to participate 
              and the required duration for each. The Individual coaches are also listed and you can book any at your will
               to suit your needs.
            </p>
          </div>
        </motion.div>
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
