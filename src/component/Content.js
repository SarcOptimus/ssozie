import React from 'react'
import Carousal from './Carousal'
import Footer from './Footer'
import Header from './Header'

export default function Content({logout}) {
    return (
        <div>
            <Header title='SSO POC' enableSearch={false} logoutAction={logout}/>
            <Carousal/>
            <Footer/>
        </div>
    )
}
