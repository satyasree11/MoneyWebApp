import React, { useEffect } from 'react'
import styled from 'styled-components'
import Forms from '../Forms/Forms';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/GlobalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';
function Expenses() {
    const {addExpense,expenses,getExpense,totalExpense,deleteExpense}=useGlobalContext()
  useEffect(() =>
  {
    getExpense()
  },[])
    return (
    <ExpenseStyled>
    <InnerLayout>
     <h1>Expenses</h1>
<h2 className='total-income'>Total Expense: <span>${totalExpense()}</span></h2>
     <div className='income-content'>
        <div className='form-container'>
          <ExpenseForm />
        </div>
        <div className='incomes'>
          {
            expenses.map((income) =>
            {
               const {_id, title, amount, date, category, description,type} = income;
               
               console.log(income)
               return <IncomeItem
               key={_id}
               id={_id}
               title={title}
               description={description}
               amount={amount}
               date={date}
               tyep={type}
               category={category}
               indicatorColor="var(--color-green)"
               deleteItem={deleteExpense}
               />
            })
            
          }


        </div>
    </div>

    </InnerLayout>
    </ExpenseStyled>
  )
}
const ExpenseStyled = styled.div`
display:flex;
overflow:auto;
 .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: #42AD00;
        }
    }

`;
export default Expenses