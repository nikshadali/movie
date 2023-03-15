import styles from './favorite.module.scss';
import classNames from 'classnames';
import { FavoritCard } from '../favorit-card/favorit-card';
import {useState, useEffect, useContext} from 'react'
import { FavoriteContext } from '../../cotext/Favcontext';
export interface FavoriteProps {
    className?: string;
    
}
export interface Movie {
   
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
   
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorites-and-templates
 */
export const Favorite = ({ className }: FavoriteProps) => {
    const {state} = useContext(FavoriteContext)
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Favorites</h1>
            {state.favorites.length > 0 && state.favorites.map(movie => (

            <FavoritCard movie={movie} />
            ))}
        </div>
    );
};
