import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, 
        faHome, 
        faThLarge, 
        faCalendarAlt, 
        faComment, 
        faClock, 
        faUser, 
        faTools, 
        faArrowLeft,
        faSearch,
        faBell,
        faChevronDown } from '@fortawesome/free-solid-svg-icons';
import userIcon from '../assets/user-icon.jpg';
import DragDropComponent from '../containers/DD-Container';
import ModalView from './Modal-View';
import './Main-View.css';

function MainView(props){

    const [showModal, setShowModal] = useState(false);

    const openModalHandler = (event) =>{
        setShowModal(!showModal);
    }

    const onCloseModalHandler = () =>{
        setShowModal(!showModal);
    }

    return (<div className="mainView">
                <div className="side-nav">
                <div className="top-icon">
                        <FontAwesomeIcon icon={faDiceOne}/>  
                </div>
                    <div className="icons-group">
                    
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faHome}/>  
                    </div>
                    <div className=" icon-wrapper icon-wrapper-active">
                        <FontAwesomeIcon icon={faThLarge}/>  
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faCalendarAlt}/>  
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faComment}/>  
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faClock}/>  
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faUser}/>  
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faTools}/>  
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header-nav">
                    <div className="icon-wrapper back-arrow-icon">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        <span className="back-button">All Projects</span>  
                    </div>
                    <div className="project-title">
                        <strong><span>Supermassive Black Hole</span></strong>
                        <div className="icon-wrapper project-title-icon">
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                    </div>
                    <div className="user-spec-icons">
                    <div className="icon-wrapper search-icon">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className="icon-wrapper notification-icon">
                        <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className="user-icon">
                        <img src={userIcon} alt="Logo"/>
                    </div>
                    </div>

                    </div>
                    <div className="task-view">
                        <DragDropComponent></DragDropComponent>
                    </div>
                    <div className="floating-add-button">
                            <span className="add-button-icon" onClick={openModalHandler}>+</span>
                    </div>
                </div>
                {
                    showModal ? <ModalView closeModal={onCloseModalHandler}></ModalView> : null
                }
            </div>);
}

export default MainView;