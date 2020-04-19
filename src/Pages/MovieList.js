import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleUp,
  faAngleDown,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./MovieList.scss";
import { increasePoint, decreasePoint } from "../actions/rateActions";
import { deleteRow } from "../actions/deleteRow";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import '../Components/Modal/Modal.scss';

const mapStateToProps = (state) => ({
    movies: state.entities.movies,
    filterOptions: state.filterOptions
});

const mapDispatchToProps = (dispatch) => ({
  //redux-thunk ı kullanabilmemiz icin dispatch methodunun parametresi olarak actionu dürtüyoruz
  increasePoint: (id) => dispatch(increasePoint(id)),
  decreasePoint: (id) => dispatch(decreasePoint(id)),
  deleteRow: (id) => dispatch(deleteRow(id)),
});

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
    increasePoint: PropTypes.func,
    decreasePoint: PropTypes.func,
    deleteRow: PropTypes.func,
    filterType: PropTypes.object,
  };

    state = {
        checkAll: false,
        checkMovies: false,
        checkTvShows: false,
        show: false,
        deletedMovieId: 0,
        filmName: ''
    };

    onShowModal = (id, filmName) => {
        this.setState({
            show: true,
            deletedMovieId: id,
            filmName
        })
    };

    onCloseModal = () => {
        this.setState({
            show: false
        })
    };

  render() {
    const { movies, deleteRow, increasePoint, decreasePoint, filterOptions } = this.props;
    const { show, deletedMovieId, filmName } = this.state;

    const filteredList = movies.filter( ( item ) => {
        if( filterOptions.type === 'movies' ){
            return item.type === 'movie'
        }else if(filterOptions.type === 'tvShows') {
            return item.type === 'tvShow'
        }else {
            return item
        }
    });

    return (
      <div className="container">
        <div className="movie-list">
          {filteredList &&
            filteredList.map((movie, index) => {
              return (
                <div className="movie-list__item" key={index}>
                  <div className="movie-name">
                    {movie.filmName}
                    <button
                      onClick={() => { this.onShowModal(movie.id, movie.filmName) }}
                      className="delete-row"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                  <div className="rate">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{movie.rate}</span>
                  </div>
                  <div className="give-points">
                    <div>
                      Puan Ver
                      <button
                        onClick={() => {
                          increasePoint(movie.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faAngleUp} />
                      </button>
                      <button
                        onClick={() => {
                          decreasePoint(movie.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faAngleDown} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Modal show={show} className="modal-delete-movie" onHide={this.onShowModal}>
          <Modal.Body>
              <FontAwesomeIcon icon={faTrashAlt} />
              <span>
                  { filmName } <br/>
                  Silmek İstediğine emin misin?</span>
          </Modal.Body>
          <Modal.Footer>
              <button className="button" onClick={this.onCloseModal}>
              İptal
            </button>
            <button className="button" onClick={ () => {
                deleteRow(deletedMovieId);
                this.setState({
                    show: false
                })
            } }>
              Evet
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
