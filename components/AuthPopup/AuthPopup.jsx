import React from 'react'
import styles from './AuthPopup.module.css'
import {MdClose,MdMail} from "react-icons/md"
import {FaFacebook,FaGoogle} from "react-icons/fa"
import AppContext from '../../store/_appContext'

function AuthButton({Icon,text}){
    return <button className={styles.auth_btn}><Icon/> {text}</button>
}
function AuthPopup() {

    const {user,setUser,auth_modal,setAuthModal,authType,setAuthType} = React.useContext(AppContext);

    const handleClose = (e) => {

        if(e.target.id=='auth-modal'){
            setAuthModal(false)
            setAuthType("login")
        }
    }


    return (
        <>{auth_modal && <div className={styles.auth_modal} id="auth-modal" onClick={handleClose}>
            <div className={styles.auth_modal_popup}>
                <button className={styles.modal_close} onClick={()=>{
                    setAuthModal(false)
                    setAuthType("login")
                }}><MdClose/></button>
                <div className={styles.auth_modal_popup_container}>
                    <h3>{authType==="login"?"Welcome back.":"Join HotCoffee"}</h3>
                    <div className={styles.auth_methods}>
                        <AuthButton Icon={FaGoogle} text={authType=="login"?"Sign in with Google":"Sign up with Google"}/>
                        <AuthButton Icon={FaFacebook} text={authType==="login"?"Sign in with Facebook":"Sign up with Facebook"}/>
                        <AuthButton Icon={MdMail} text={authType==="login"?"Sign in with email":"Sign up with email"}/>
                    </div>
                    <span className={styles.auth_switcher}>{authType==="login"?"Not account?":"Already have an account?"} <strong><button onClick={()=>{
                        setAuthType(authType==="login"?"signup":"login")
                    }}>{authType==="login"?"Create one":"Login"}</button></strong></span>
                </div>
            </div>
        </div>}</>
    )
}

export default AuthPopup
