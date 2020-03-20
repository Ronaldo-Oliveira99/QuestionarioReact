import React from 'react'

export default function QuestionBox({
    question,
    answerClicked,
    choiceOption,

}){
    const {questionTitle, answers, rightAnswer} = question
    const questionSelected = choiceOption[question.id]
    let dataTestAnswer = "";
    if (questionSelected !== undefined) {
        dataTestAnswer = questionSelected.isRight ? "correta" : "errada";
    }
   
    return(
        <section data-test="pergunta" data-resposta={dataTestAnswer} className='questionBox'>

            <h1> {questionTitle} </h1>
            <ul>
                {answers.map(answer => {
                    
                    const style={
                        background:'#ededed'
                    }

                     if(questionSelected !== undefined){
                         if(questionSelected){
                             answerClicked = () => null
                         }
                        if(answer.id === rightAnswer){
                            style.background ='#c8ffbb'
                        }
                        else if (answer.id === questionSelected.answerObj){
                            style.background = '#eb6565'
                        }
                     }
                   
                    return (
                
                        <li
                            data-test="opcao"
                            className={'answerBtn'}
                            style={style}
                            key={answer.id}
                    
                            onClick={() => 
                                answerClicked(question.id, answer,rightAnswer)
                            }
                        >               
                            {answer.text}
                           
                        </li>
                
                    )
                })}             
            </ul>
        </section>
    )
}