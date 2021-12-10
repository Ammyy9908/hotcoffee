import React from 'react'
import styles from './Sidebar.module.css'
import {MdArrowLeft,MdHome, MdMoreVert,MdEdit} from 'react-icons/md'
import AppContext from '../../store/_appContext';
function Sidebar() {

    const {auth_modal,sidebar,setSidebar} = React.useContext(AppContext);
    return (
        <div className={`${styles.sidebar} ${sidebar && styles.sidebar__enable}`}>
            <div className={styles.sidebar_header}>
                <a href="#">HotCoffee</a>
                <button className="sidebar_close_btn"><MdArrowLeft/></button>
            </div>
            <div className={styles.sidebar_links}>
                <a href="#" className={`${styles.active_link}`}>
                    <div className={`${styles.link_wrapper}`}>
                    <MdHome/> Home
                    </div>
                </a>
                <a href="#">
                    <div className={styles.link_wrapper}>
                    <MdEdit/> Articles
                    </div>
                </a>
            </div>

            <div className={styles.sidebar__footer}>
                <div className={styles.sidebar__footer_wrapper}>
                    <div className={styles.sidebar__footer_meta}>
                        <div className={styles.user_avatar}>
                            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="user__avatar__not__loaded" />
                        </div>
                        <div className={styles.user__info}>
                            <span className={styles.username}>Alice</span>
                            <a href="mailto:sb78639@gmail.com" className={styles.user_email}>alice@gmail.com</a>
                        </div>
                    </div>
                    <button className={styles.sidebar_footer_more_btn}>
                        <MdMoreVert/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
