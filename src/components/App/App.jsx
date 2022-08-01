import React from 'react';
import { Section } from "components/Section/Section";
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions'
import {Statistics} from 'components/Statistics/Statistics'
import {Notification} from 'components/Notification/Notification'


export class App extends React.Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total:0,
      positivePercentage:0,
      noData:true,
    }

handlerGood =()=>{
      this.setState(prevState=>{
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
      return{ good:prevState.good + 1,
              noData:false,}
  })
}

handlerNeutral =()=>{this.setState(prevState=>{
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
  return{ neutral:prevState.neutral + 1,
          noData:false}
})}

handlerBad =()=>{this.setState(prevState=>{
  this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
  return{bad: prevState.bad + 1,
        noData:false}
})}

countTotalFeedback=()=>{this.setState(prevState=>{
  return{total:(prevState.good + prevState.neutral + prevState.bad)}
})}

countPositiveFeedbackPercentage=()=>{this.setState(prevState=>{
  return{
      positivePercentage: Math.round((prevState.good / prevState.total) * 100)
  }
})}

render(){
  return(<>
  
  <Section title ="Please leave feedback">
    <FeedbackOptions good={this.handlerGood} neutral={this.handlerNeutral} bad={this.handlerBad}/>
  </Section>
  <Section title ="Statistics">
    {this.state.noData ? (<Notification message="There is no feedback"/>):(<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage}/>)}
  </Section>
  </>
  )
}
};
