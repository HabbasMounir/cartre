// src/components/ArticleList.js
import Style from "./page.module.css"
// import {NavLink ,Link, useParams } from "react-router-dom";
import  { useEffect, useState } from 'react';
const CartList = () => {
   
  const [toggle,settoggle]=useState(false);
  const [data,setData]=useState([]);
  const [fillterddata,setFillterddata]=useState([]);
  const [filterdUser,setfilterdUser]=useState([])

  const [cart,setcart]=useState([])
const [filter,setFilter]= useState('')
// const  Params = useParams();
   useEffect(() => {
    const fetchdata = async () => {
      try {
          fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          // .then((data) =>console.log(data))
          .then((data) =>setData(data))
      } catch (error) {
        //
    }
    };
    fetchdata();
  }, []);

  function cartHandle(card){
    setcart([...cart,card])
    console.log(cart)
  }
  function carRemovetHandle(i){
    let as=cart
    let sd=as.splice(i,1)
    setcart([...as])
    
  }
  const handleChange=(e)=>{
    const filter= data.filter( user=>user.title.toLowerCase().includes(e.target.value.toLowerCase()) )
    setFillterddata(filter)
   }
  
  return (
    <>
    <div className={Style.wsmo}>


    <div className={Style.filter}> 
    <input type="search" className="search" onInput={handleChange} />
    </div>

    <div className={Style.cart}>
      <span onClick={()=>{settoggle(!toggle)}}> {cart.length}</span>
{toggle?<div className={Style.cartList}>
{cart.map((c,i)=>{
      return(
      <div className={Style.car} key={c?.i}>
        <h1 className={Style.carttite}>{c?.title} </h1>
        <span className={Style.cartbtn} onClick={()=>carRemovetHandle(i)}  >-</span>
   </div>
     )
    })}
</div>
:
<></>
}
    </div>
    </div>


    <div className={Style.container}>
    
    
     {fillterddata.map((c,i)=>{
      return(
      <div className={Style.card} key={c?.i}>
        <img src={c?.url} alt=""  loading="lazy" />   
        <h1 className={Style.tite}>{c?.title} </h1>
        <span className={Style.btn} onClick={()=>cartHandle(c)}  >add cart</span>

   </div>
     )
    })
    }
    </div>
     
    </>
   
  );
};





  






export default CartList;