
import data from'./data/Format';

function Demo(props){

    return(<>
{data.map((item)=>{
    return(<p>
        WHO:{item.WHO}
       WEEK:{item.WEEK.map((item)=>{
        return(<p>
            NUMBER:{item.NUMBER}
            </p>)
        }
       
       
       )}
            
           
    </p>)
    }
    
)}


</>
    )
} 
export default Demo;