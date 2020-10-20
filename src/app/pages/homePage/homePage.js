import React from 'react'
import Header from '../../components/Header'
import FormBody from '../../components/FormBody'
import './homePage.css'

function HomePage() 
{
    return(
        <>
            <Header heading="Order Form" />
            <br></br>
            <FormBody/>
        </>
    )
}

export default HomePage