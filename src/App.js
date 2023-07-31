import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '홍길동',
    'birthday' : '121212',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '나동빈',
    'birthday' : '961212',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '김경호',
    'birthday' : '000221',
    'gender' : '남자',
    'job' : '대학생'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Customer  // components 폴더 내의 Customer.js를 import로 불러와서 그것을 App.js 안에서 출력할 수 있도록 만듬
          id = {customers[0].id}
          image = {customers[0].image}
          name = {customers[0].name}
          birthday = {customers[0].birthday}
          gender = {customers[0].gender}
          job = {customers[0].job}
        />
        <Customer  // components 폴더 내의 Customer.js를 import로 불러와서 그것을 App.js 안에서 출력할 수 있도록 만듬
          id = {customers[1].id}
          image = {customers[1].image}
          name = {customers[1].name}
          birthday = {customers[1].birthday}
          gender = {customers[1].gender}
          job = {customers[1].job}
        />
        <Customer  // components 폴더 내의 Customer.js를 import로 불러와서 그것을 App.js 안에서 출력할 수 있도록 만듬
          id = {customers[2].id}
          image = {customers[2].image}
          name = {customers[2].name}
          birthday = {customers[2].birthday}
          gender = {customers[2].gender}
          job = {customers[2].job}
        />
      </div>
    );
  }
}

export default App;
