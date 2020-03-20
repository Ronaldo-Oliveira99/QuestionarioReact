import React, {useState, useEffect}from 'react'
import QuestionBox from './components/QuestionBox'
import Result from './components/Result'
import Header from './components/Header'
import data from './data/data.json'
import './assets/style.css'


function App(){
const [choiceOption, setChoiceOption] = useState({})
const [questions, setQuestions] = useState([])
const [responses, setResponses] = useState(0)
const [score, setScore] = useState(0)


useEffect( ()=> {
  setQuestions(data.questionsBD)
}, [])

const handleClickQuestion = (questionId, answer, answerRight) =>{

  setChoiceOption({
    ...choiceOption,
    [questionId]:{
      answerObj:answer.id,
      isRight: answerRight === answer.id, 
    }
  })
  setResponses(responses + 1)
  answerRight === answer.id ? setScore(score + 1) : setScore(score)
}


const playAgain = () => {
  setScore(0)
  setResponses(0)
  setChoiceOption({})

  
}



  return(
    <div className={'container'} >
      
      <header>
        <Header 
        title='Você consegue reconhecer as capitais desses Países?'
        subtitle='Eu sei que você é capaz'
        />
      </header>

      <main>
        {questions.map( (question,key)=> {
          return(
            <QuestionBox 
            key={key}
            question ={question}
            choiceOption={choiceOption}
            answerClicked={handleClickQuestion}
            playAgain={playAgain}
        
            />
          )
        
        })}
      </main>

      {responses === 3
      ? (<Result
        score ={score}
        playAgain={playAgain}
      
      />
      )
      : null
    }
    </div> 
    
  )
}

export default App