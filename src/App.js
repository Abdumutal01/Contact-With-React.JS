import React, { Component } from 'react'
import './App.css'
import FormContact from './components/FormContact/FormContact';
import ListContact from './components/ListContact/ListContact';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

      count: 2,

      listObj: {
        name: undefined,
        number: undefined,
        age: undefined,
        job: undefined
      },

      ListContactArr: [
        {
          id: 1,
          name: "Aziz",
          number: 900090909,
          age: 15,
          job: "Bloger"
        },
        {
          id: 2,
          name: "Abbos",
          number: 777000007,
          age: 22,
          job: "teacher"
        },
      ]
    }
  }

  typeHandlar = (e) => {
    console.log(e.target.value);
    let obj = {}

    if (e.target.type === "text") {
      obj.name = e.target.value
    }
    if (e.target.type === "tel") {
      obj.number = e.target.value
    }
    if (e.target.type === "number") {
      obj.age = e.target.value
    }
    if (e.target.type === "search") {
      obj.job = e.target.value
    }
    this.setState({ listObj: { ...this.state.listObj, ...obj } })

  }



  formSubmit = (e) => {
    e.preventDefault();


    this.setState({
      count: this.state.count + 1,
      ListContactArr: [...this.state.ListContactArr, this.state.listObj],
      listObj: { name: "", number: "", age: "", job: "" }
    })
  }

  deleteBtn = (name) => {
    this.setState({
      ListContactArr:this.state.ListContactArr.filter(f => f.name !== name),
      count: this.state.count -1
    })
  }

  render() {


    return (
      <div className='App container'>
        <h1 className='title'>People:  {this.state.count}</h1>

        <div className='row'>

          <div className='col-6'>
            <FormContact
              formSubmit={this.formSubmit}
              typeHandlar={this.typeHandlar}
              name={this.state.listObj.name}
              number={this.state.listObj.number}
              age={this.state.listObj.age}
              job={this.state.listObj.job}

            />
          </div>

          <div className='col-6 d-grit'>
            {this.state.ListContactArr.map((el, index) => {
              return <ListContact
                key={index}
                name={el.name}
                number={el.number}
                age={el.age}
                job={el.job}
                deleteBtn={this.deleteBtn}

              />
            })
            }
          </div>

        </div>
      </div>
    )
  }
}
