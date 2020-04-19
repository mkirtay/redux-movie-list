import React, { Component } from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../Checkbox/Checkbox';
import { sortItems } from '../../actions/sortingAction';
import { setFilter } from "../../actions/filterActions";
import PropTypes from "prop-types";

const mapDispatchToProps = (dispatch) => ({
    sortItems: (key, orderType) => dispatch(sortItems(key, orderType)),
    setFilter : (type) => dispatch(setFilter(type))
});

class HeaderActions extends Component{
    static propTypes = {
        sortItems: PropTypes.func,
        showMovies: PropTypes.func,
        setFilter: PropTypes.func
    };

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps :', prevProps, 'prevState :', prevState)
        console.log('thisstate :', this.state);

        if( prevState.checkInputName !== this.state.checkInputName ){
            this.props.setFilter(this.state.checkInputName)
        }
    }

    state = {
        checkInputName: 'all',
    };

    onInputCheck = (e) => {
        this.setState({
            checkInputName: e.target.name
        })
    };

    render(){
        const { sortItems } = this.props;
        const { checkInputName } = this.state;

        return(
            <div className="header-left">
                <div className="button--accordion">Türler
                    <FontAwesomeIcon icon={faAngleDown} />
                    <div className="submenu">
                        <div className="submenu__item">
                            <label className="checkbox-label">
                                <span style={{ marginRight: 8 }}>Tümü</span>
                                <Checkbox
                                    name="all"
                                    checked={ checkInputName === 'all' }
                                    onChange={(e) => { this.onInputCheck(e) }}
                                />
                            </label>
                        </div>
                        <div className="submenu__item">
                            <label className="checkbox-label">
                                <span style={{ marginRight: 8 }}>Filmler</span>
                                <Checkbox
                                    name="movies"
                                    checked={ checkInputName === 'movies' }
                                    onChange={(e) => { this.onInputCheck(e) }}
                                />
                            </label>
                        </div>
                        <div className="submenu__item">
                            <label className="checkbox-label">
                                <span style={{ marginRight: 8 }}>Diziler</span>
                                <Checkbox
                                    name="tvShows"
                                    checked={ checkInputName === 'tvShows' }
                                    onChange={ (e) => { this.onInputCheck(e) }}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="button--accordion">Sırala
                    <FontAwesomeIcon icon={faAngleDown} />
                    <div className="submenu submenu--sorting">
                        <div className="sorting-link" onClick={() => { sortItems('rate', 'asc') }}>Puana Göre (Azalan)</div>
                        <div className="sorting-link" onClick={() => { sortItems('rate', 'desc') }}>Puana Göre (Artan)</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(HeaderActions);