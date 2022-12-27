import image from '../assests/placeholder.jpg'

export default function Home(){
    return (
    <div className="home-bg">
       <br></br><br></br><br></br>
       <div className="home-content">
    <div className="description">
    <h1 className="name">Jessica Grover</h1>
    <br></br>
        <h3>Full-Stack Web Developer<br></br>
        Algorithm Slayer</h3>
        </div>
<img className="home-img" src={image} alt=""></img>
    </div>
    
    
    
    
    </div>
    )
}