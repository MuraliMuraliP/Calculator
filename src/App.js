import './App.css';
import shoe from './assert/shoe.jpg';
import Product1 from './task/Product1';
function App(){
return(
    <div>
    <h1 style={{textAlign:'center'}}>Product</h1>
        <div className='App' style={{display:'flex'}}>
            <Product1
                img={shoe}
                name='Adidas'
                discount=' Buy one Get One free'
                price='$350'
            />
             <Product1
                img={shoe}
                name='Adidas'
                discount=' Buy one Get One free'
                price='$350'
            />
             <Product1
                img={shoe}
                name='Adidas'
                discount=' Buy one Get One free'
                price='$350'
            />

        </div>
    </div>
)
}
export default App;