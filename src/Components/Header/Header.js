import React, { Component } from 'react';

import '../Button/Button.scss';
import './Header.scss';
import '../General/General.scss';
import '../Submenu/Submenu.scss';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import HeaderActions from "./HeaderFilters";

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <Route path="/" exact component={ HeaderActions } />
                    <Route path="/yeni-kayit" render={ () => {
                        return(
                            <div className="header-left">
                                <Link to="/" className="button button--icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                    Geri Dön
                                </Link>
                            </div>
                        )
                    }} />
                    <div className="header-middle">
                        <h1>Case Study</h1>
                    </div>
                    <div className="header-right">
                        <Link to="/yeni-kayit" className="button button--icon">
                            <FontAwesomeIcon icon={faPlus} />
                            YENİ KAYIT
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}