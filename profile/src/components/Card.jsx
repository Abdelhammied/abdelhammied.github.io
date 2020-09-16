import React, { Component } from 'react'

class Card extends Component {
    render() {
        const boxShadow = {
            boxShadow: '0px 2px 5px grey'
        };

        return (
            <div className="card " style={boxShadow}>
                <img src={this.props.user.avatar_url} className="card-img-top" alt={this.props.user.name} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.name}</h5>
                    <p className="card-text">{this.props.user.bio}</p>

                    <div className="list-group">
                        {
                            this.props.pages.map((page, index) => {
                                return (
                                    <a onClick={() => { this.props.pageWasClicked(index) }}
                                        href={`#${page.title}`}
                                        className={`list-group-item list-group-item-action ${page.active ? 'active' : ''}`}
                                        key={index}>
                                        {page.title}
                                    </a>
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}


export default Card;