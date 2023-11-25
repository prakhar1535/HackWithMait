import Spline from '@splinetool/react-spline';

const Nft = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: '5rem'}}>  
   < h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>Domino Game</h1>
    <div style={{width: '80vh' , height: '50vh', border: '2px solid black'}}>
      
    <Spline scene="https://prod.spline.design/fKNEfCkilSbF2JAT/scene.splinecode" />
    </div>
    < h1 style={{fontSize: '3rem', fontWeight: 'bold', margin: '5rem'}}>Car Game</h1>
    <div style={{width: '80vh' , height: '50vh', border: '2px solid black',}}>
    <Spline scene="https://prod.spline.design/mm4h0jIarAzlusFo/scene.splinecode" />
    </div>
    </div>
  )
}

export default Nft
