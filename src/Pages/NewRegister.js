import React, { Component } from "react";
import { connect } from "react-redux";

import Radio from "../Components/Radio/Radio";
import Button from "../Components/Button/Button";
//import Input from '../Components/Input/Input';
import "./NewRegister.scss";
import { newMovieName, newMovieRate } from "../actions/addMovie";

const mapDispatchToProps = {
    newMovieName,
    newMovieRate,
};

class NewRegister extends Component {
  render() {
      const { newMovieName, newMovieRate } = this.props;
    return (
      <div>
        <form
          className="form"
          onSubmit={() => {
          }}
        >
          <div className="form__item">
            <Radio />
          </div>
          <div className="form__item">
            <input
              onChange={newMovieName}
              type="text"
              label="Film / Dizi Adı"
            />
          </div>
          <div className="form__item">
            <input onBlur={newMovieRate} type="tel" label="Puanı" />
          </div>
          <div className="form__item">
            <Button text="KAYDET" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(NewRegister);
