import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import { useHref } from 'react-router-dom'
import Shops from '../components/Shops'


export default function Home() {

      //   const [foodCat,setFoodCat] = useState([]);
      //   const [foodItem,setFoodItem] = useState([]);

      //   const loadData = async ()=>{
      //     let response = await fetch("https://localhost:3000/api/foodData"{
      //         method:"POST",
      //         headers:{
      //           'Content-Type': 'application/json'
      //         } 

      //     }
      //  ) ;

      //  response =await response.json();

      //   setFoodItem(response[0]);
      //   setFoodCat(response[1]);

      // //  console.log(response[0],response[1]);

      //   }

      //   useEffect(()=>{
      //     loadData()
      //   },[])







  return (
    <div>
        <div><Navbar /></div>

        <div><Carousal/></div>
        

      <div className='m-3'style={{float:'left'}}>

        <Card/>
        <Card/>
        

        </div> 


        <div className='m-3'style={{float:'left'}}>

        <Card/>
        <Card/>
        

        </div> 

        
      <div className='m-3'style={{float:'left'}}>

<Card/>
<Card/>


</div> 


<div className='m-3'style={{float:'left'}}>

<Card/>
<Card/>


</div> 





        <div><Shops/></div>
        <div><Shops/></div>


        <div id='snm'>HURRY!! 30% DISCOUNT ON MANY ITEMS </div>




       


<div className='m-3'style={{float:'left'}}>

<Card/>



</div> 

<div className='m-3'style={{float:'left'}}>

<Card/>



</div> 

<div className='m-3'style={{float:'left'}}>

<Card/>



</div> 

<div className='m-3'style={{float:'left'}}>

<Card/>



</div> 



       <div style={{position:'relative', bottom:'0px'}}>

        <div><Footer/></div>
        </div>
       
    </div>




  )
}
