import styles from './card.module.scss';
import classNames from 'classnames';
import { FavoriteContext } from '../../cotext/Favcontext';
import { useContext } from 'react';
export interface CardProps {
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
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
   const {dispatch} = useContext(FavoriteContext)
    return (
        <div className={classNames(styles.root, className)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.cardImg} />
            <div className={styles.cardDetail}>
                <h1>{movie.title}</h1>
                <span className={styles.cardrating}>{movie.vote_average}</span>
                <p className={styles.cardDesc}>{movie.overview.substring(0,120)}</p>
                <button className={styles.cardbtn} onClick={() => dispatch({type:"ADD_MOVIE",payload:movie})}>+</button>
            </div>
        </div>
    );
};
