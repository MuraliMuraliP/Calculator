const Product1=(props)=>{
    return(
    <>
    <div style={{padding:50}}>
    <img src={props.img} style={{width:200,height:200}} alt="products"/>
    <h2>{props.name}</h2>
    <p>{props.content}</p>
    <h2>{props.discount}</h2>
    <h2>{props.price}</h2>
    </div>
    </>
    );
    }
    export default Product1;