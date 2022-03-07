import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import CharListItem from '../charListItem/CharListItem';

const CharList = () => {
    return (
        <div className="char__list">
            <ul className="char__grid">
            <CharListItem />
            <CharListItem />
            <CharListItem />
            <CharListItem />
            <CharListItem />
            <CharListItem />
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;