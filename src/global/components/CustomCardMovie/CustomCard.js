
import React, { Component } from 'react';
import './CustomCard.scss';

class CustomCard extends React.Component {

    render() {
        return (
            <article className="articleShort articleMain">
                <div className="card">
                    <div className="card-image">
                        <a href="#" title="title here">
                            <img src="http://fakeimg.pl/262x316/?text=Hello" alt="alt here" />
                        </a>
                    </div>
                    <div className="card-content">
                        <h3 className="card_tittle">Alita: Battle Angel</h3><span>64%</span>
                        <p className="card_date">February 14,2019</p>
                        <p className="card_overview">When Alita awakens with no memory of who she is in a future world she does not recognize </p>
                    </div>
                </div>
            </article>
        );
    }
}
export default CustomCard;