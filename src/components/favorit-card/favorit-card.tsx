import styles from './favorit-card.module.scss';
import classNames from 'classnames';
import { FavoriteContext } from '../../cotext/Favcontext';
import { useContext } from 'react';
export interface FavoritCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorit-cards-and-templates
 */
export const FavoritCard = ({ className, movie }: FavoritCardProps) => {
    const {dispatch} = useContext(FavoriteContext)
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className={styles.favImg}
            />
            <div className={styles.favDetail}>
                <h1 className={styles.favh1}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
               
            </div>
            <div>
                <img src="https:/i.imgur.com/oFxZf6r.png" onClick={() => dispatch({type:"REMOVE_MOVIE", payload:movie})}/>
            </div>
        </div>
    );
};
