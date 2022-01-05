import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import RecentReview from './components/recent-reviews';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';

ReactDOM.render(
  React.createElement(RecentReview, {}, null),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// ************************ PROPS*****************************************
// props is a JS object that consists of values being passed into a component.
// EX: under post.js add an atrubute to the comment (<Comment contne="This is my post"/>)
// have the same structure as a HTML attrbute, 
// can then go into the comment component....use 'this.props'
/// Ex under the div className=card-footer">  write {this.props.content}
// then have to re-render the page with npx start  then npm start
// to pass it in as an object:  go to post.js tab & under render() 
//{ type:  let commentOne = {
// content: 'This is my post',
// username: 'Tommy',
//date: '12-12-2021'
// };
// then go to the div section on the post tab, under return, under div className="card-footer">, under the buttons
// then remove the quoted text & type after <Comment {...commentOne}/>
// then go to comment tab file and under the div card header type
//{this.props.usernanem} {this.props.blah}

//****************************************** */
// THE 3 DOTS BEFORE THE COMMENToNE ARE KNOWN AS THE ****SPREAD OPERATOR****
// ALLOws to pass props in without overriding anything that already eisit in the prop object, it will take
// an object and combine its properties with the exiiting ones
//

//**********************************************STATE**********************************************
// DATA WITH THE ui CHANGES THE CRUTIAL DRIVER BEHIND A DRIVER APPLCATION. this typ of data is known as the state
// the STATE represents the current state of what the application is displaying & in REACT it is called STATE
// state can cause the app to be dynamic, plays a crutial role.. can cause the app to update & display diff
//aspects of the component as the data changes.App

// to start, add a constructor to the post class
// under the export default class Post extends React.component {
  // type: consturctor(props) {
    // super(props);
  /// this.states={
    // comments: porps.comments,
    //content: props.content
// *****WANT TO ALWAYS ADD PROPS AS PART OF THE CONSTRUCTOR AND MAKE IT THE FIRST LINE WRITTEN AS "SUPER(PROPS)"
// ****AND HAVE IT PART OF THIS.STATE = { COMMENTS: PROPS.COMMENTS, CONTENT: PROPS.CONTENT};
//

// **************************************UPDATING STATE*******************************************
//the set state method is used to update the state methid.  The set state method allows to 
// to safely update the state   To not get an excption, must ue inside of a set time out
//  so an infinte loop is not created.  The state does does not replace  the entire state object but 
//finds and replaces the named properties that natch.  the set stae method takes and object as its first parameter
// can use the call back method. Must be used in the call back.
// There are two parameters one that is an object to update the state and two is a callback.
//  MAKE SURE NOT TO USE this .props or this.state.  


//*************************************************UNIQUIE KEY PROP**************************** */
// When there is a warning in the consle about a Key propt needed for each child, need to USE map method
// Map method take the this,state,comment & pushes it to the array.
//Adding the key remove the warning & helps REACT job by adding to the DOM.

//*************************events part 1, 2 & 3*************************************** */
// need a way to trigger and react to events.
// 1 way is to put an onclick attribute of a JSX button, use curly braces not quotes
// Ex: counter.js will count # of clicks button is pushed.  
// import React from 'react''
// export default calss Counter extends React.Comoponent {
  // constructor(props) {
    //super(props);
    // this.state = {  ***setting the state
      //count:0  **** (#of ckicks/ count = the property)
    //};

 // }
//render() {
  //return ((
    //<button
    //className="btn btn-primary"
    //onclick={() => this.stateSet(state => ({count: state,count + 1})))}>
    //                     ***********when interpletaing JS into JSX need curley braces****
 //Counter {this.state.count}
//</button>
  // NOTE: the onClick is camel case and use an arrow function so the "this" keyword work properly inside the function
  // if didn't use the an anonomys function, then need to bind it to the event like: 
  // instead of *****this.stateSet(state => ({count: state,count + 1}))**** would code above the render the following:
  // handleClick() {
    //this.setState(state => ({count: state.sount + 1})));
    // to bind the this, code this.handleClick = this,handleClick.bind(this);
    // if required t use multiple buttons on same page, need a container to house multipe buttons
    // can display the name as tex on the button. component to take a prop for name & then create the contaier by:
    // under super(props & this.state = {( type  name: props.name, then remove counter ( under the render and type
    // {this.state.name}
    // add a new .js called container.js then code
    //import React from 'react';
    //import Counter from './counter';
    //export default class Comtaomer extemds Teact.component {
      ////render() {
       // return ( 
         //<div>
        //  <Counter name="one"/>
          //<Counter name="two"/>
        //Coutner name="three").
//</div>
       // then npm start from the terminal & should have 3 buttons that click
      
    // go to index.js and import Container from ',/container';
    //then need to install bootstrap to use the classes from the counter.js under render/ classs name="btn btn-primary"
//then import into index.js.. import '../node_modules/bootstrap/dist/css/bootstrap/css"
// do npm start
  //

//*****************if request for every button with the same name needed to display the same count:** */
//need to increment and stay synched. 

//************RAISING THE STATE********
//State flows one way/unidirectional in React and the state of the counter buttons can be stored in the parent 
// allows the parent to maintain the state of the counter buttons and pass changes down to the children thru props
 //to do this..............
 //Ex. remove the state in counter.js under super(props) remove this.state, name and count lines
 // change the word state to props (this.props.name...........change all state to props everywhere)
// go to the contaiier.js need to add a constructor       constructor(props) {
 // super(props);
  ////this,state - {
    //counts:{}     (counts is an object itself)
  // use countClicks(name)  this will integrate the butn and increments the state and keeps names synched across
  //this.setState(state => {
    //this.setState.count[name]   of object pairs and want to find the name of he object
  // counts is an object.

  //code  state.counts[name] +=1 if the name already exist
  //if it does not exsist:  :stste.counts[name] = 1
  //need to return the state: return state;
//
// need to pass in the data to counter, under render/return/ div 
//type <Counter
//name="One"
//count-{this.state.counts.one}
//onClick={this.countClicks}
// copy for Two & three
//
//*******adding the name of the mmethod on the container.js export default which is:  
// this.countClicks = this.countClicks.bind(this);   ..........this will BIND the "this" object
//*******************The creat React tool defaults to generate the <React.StrictMode> in the index.js tab
//**************** that needs to be removed (under the ReactDOM.render) so the button does not fire/double twice */
//

//***************************** EVENTS PART 3***********************8*/
// to place the button that has the most clicks on top, ......................
// in the state, add a few properties
//1 add the hghest count, on the container.js, under the constructor/this.state = { counts:{}
//add.....highestCount: 0,}
// 2 then add the highest count name, .........code highestCountName: ' '
// 3 go to under countClicks(name) section & add if (state.counts[name] > state.highestCount){
  // state.hiighestCount = state.sount[name];
  //  state.highestCountName = name;
  // 4 go to the under the render/return/div & code <h2>{this.state.highestCountName}</h2>

//******************INTRO TO LIFECYCLE METHODS************* */
// each class that extends React.components comes with inherited methods called lyfecycle methods
// these can be overriden to run code during specific times during its lifecycle.
//the lifecycle can be divided into 3 sections, moun ting when a component is being created and inseted into the DOM
// the render menthod ONLY lifecycle meth that is requrd when you create a class component it's purpose is to return
// methods that are mounted to the DOM = JSX as soon as the compnent is added to the DONM , the component did mount
// is fired. good place to make network calls.
// when moev to the updating phase, the render method is used again, caled anytime once when new props 
//the set state method or the force update method called, simular to the mounting phase, once a component had 
// updated there is a componend DID update methond to override.
// ********** the difference is will not be called afeter the inital render but ONLY after each additional render
//  while the componet DID mountd metho will only be called for the first Render
// a less used lyfecycle is the should component, allows to say a componet should update or not when state or porps change depending on what they are/

// The unmounting good to clean up what compnent crated like subscriptions so there are no leaks

//*****************************LIFECYCLE METHODS DEMO****************************************
//         making a lifecycle application with a second counter:
// make a second-counter.js file tab & import React from 'react'; 
//& export default class SecondCounter extends React.Component {
  //constructor(props) {
    //super(props(;
      // console..log('constructor)  ..... logging our each lifecycle method......
  //this.state = {
    //currentCount: props.start || 0                 (||= "OR")
  //

//render () {
  //console.log('render');
  //return (
  //  <p>{this.state.currentCount}</p>  ............. this is watching the count.........
//
// add a componentDidMount() {
//  console.log('componinetnDidMount')
// Now going to set an interval that will start incrementignt= the state current count
// setInterval(() => {
  //this.setState((state) => (]
  // currentCount: state.cirrentCount + 1
  //}));
  // }; 1000);

  //nexr component will allow comparison to see if want them to update or Notification.App//
//shouldComponentUpdate(nextProps, nextState) {}
//consloe.log('shouldComponentUpdate');
//return next State.currentCount % 2 === 0 ;
// 
//componentDidUpdate() {
 // console.log('componentDidUpdate');

 //componentWillUnmount() {
   //console.log('componentWillUnmount');
   //
 // need to put second-counter in a container to conteol how itcounts 

 // create another app called second counter-container.js & import React and second-counter from second-counter
 // export as b fore, will not take any props
//& turn the counter on or off have a switch by coding Boolian value of...........
//showCounter: true  after the this.state in the constructor.

//render () {
 // return (
   // <div>
   //{this.state.show'counter ? <secondCounter /> : null} ..... if not tru then nothing will show with the null
//</div>          ........... 
   //
 //add a conponendDidMount so when it is mounted an interval will start and afte a ertian # of second will turn the counter off
 //code : setInterval(( => {
   //this.setState(()
     //showcounter; false
    //});
 // }. 11000  11 seconds
// go back to the index.js and import the secondCounterContainer from './second-counter-container;

// do npm start.

// ERROR Can't performa React state updae on an unmounted component can be fixed by.............
//claring out the timer intervals that were set, go into code on second-coounter,js and assign the
// setInterval(() => { under the compnentDidMOunt()})so........... assign it to a variable by coding:
// this.timer = setInterval(() => {
  // 
  // & go to componentWillUnmount and afte clearIneterval code: (this.timer);




