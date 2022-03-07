import './charListItem.scss';
import { Component } from 'react';
import abyss from '../../resources/img/abyss.jpg';
// import RandomChar from '../randomChar/RandomChar';


class CharListItem extends Component{

    onSelected = (e) => {
        let classNames = 'char__item';
        const item = e.currentTarget;
        console.log(item);

    }

    render() {
    return(
        <li className="char__item" onClick={this.onSelected}>
            <img src={abyss} alt="abyss"/>
            <div className="char__name">Abyss</div>
        </li>)

    }
}

export default CharListItem;