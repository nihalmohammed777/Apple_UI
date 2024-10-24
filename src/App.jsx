import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
  <div className='w-full h-screen  font-["gilroy"]'>
       <div className='navbar line flex gap-10 pt-5  pb-2 absolute top-0 left-1/2 -translate-x-1/2'>
       {["iPhone","iPad","Services",'ios','mac','products'].map((value)=>{
          return <a href="" className='text-white font-[500] text-sm capitalize'>{value}</a>
       })}
       </div>
       <div className='absolute flex flex-col items-center text-white top-[95px] left-1/2 -translate-x-1/2'>
       <h3 className='text-7xl masked tracking-tighter font-[700]'>macbook pro.</h3>
       <h5>oh so pro!</h5>
       <p className='text-center w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum accusantium voluptatem explicabo!</p>
       </div>
        <Canvas camera={{fov:12,position:[0,-10,220]}}>
      {/* <OrbitControls/> */}
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
      {/* to create a 3d container */}
      {/* <mesh>
        <boxGeometry/>
      </mesh> */}
      <ScrollControls pages={3}>
      <MacContainer/>
      </ScrollControls>
    </Canvas>
  </div>
  )
}

export default App