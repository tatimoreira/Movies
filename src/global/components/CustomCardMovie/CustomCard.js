
import React, { Component } from 'react';
import './CustomCard.scss';

class CustomCard extends React.Component {


    render() {
        let data = this.props.data;
        let originalTitle = data.original_title,
            overview = data.overview,
            releaseDate = data.release_date,
            voteAverage = data.vote_average,
            posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path;

        return (
            <article className="articleShort articleMain">
                <div className="card">
                    <div className="card-image">
                        <a href="#" title="title here">
                            <img src={posterIMG} alt="alt here" />
                        </a>
                    </div>
                    <div className="card-content">
                        <h3 className="card_tittle">{originalTitle}</h3><span>{voteAverage}%</span>
                        <p className="card_date">{releaseDate}</p>
                        <p className="card_overview">{overview} </p>
                        {/* <p className="card_overview">When Alita awakens with no memory of who she is in a future world she does not recognize </p> */}
                    </div>
                </div>
            </article>
        );
    }
}
export default CustomCard;