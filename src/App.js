import React, { Component} from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
class App extends Component{
    render(){
      const products = [
        {
          id:1,
          name : 'Iphone 12promax',
          price : '15000000',
          image : 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xam-new-600x600-200x200.jpg',
          status: true,
        },
        {
          id:1,
          name : 'SamSung Galaxy 20 utra',
          price : '15000000',
          image : 'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg',
          status: true,
        },
        {
          id:1,
          name : 'Oppo F11',
          price : '15000000',
          image : 'https://ttbh60s.com/wp-content/uploads/2019/07/M%C3%A0n-H%C3%ACnh-Oppo-F11-Pro-Ch%C3%ADnh-H%C3%A3ng.png',
          status: false,
        },
      ];
      //props
      var elements = products.map((product,index)=>{
        if(product.status){
          return <Content
                    key={index}
                    name= {product.name}
                    price={product.price}
                    image={product.image}
                  />
        }
        
      })
      return (
        <div>
          <Header/>
          <div className="container">
            <div className="row">
                {elements}
            </div>
          </div>
          
        </div>
      )
    }
}

export default App;