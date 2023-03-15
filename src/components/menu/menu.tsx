import styles from './menu.module.scss';
import classNames from 'classnames';
import { SearchContext } from '../../cotext/SearchContext';
import { useContext } from 'react';
export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
const sortBy: { q: string; text: string }[] = [
    { q: 'popularity.desc', text: 'Popularity' },
    { q: 'vote_count.desc', text: 'Most Voted' },
    { q: 'release_date.desc', text: 'Release Date' },
];
const geners: { id: string; text: string }[] = [
    { id: '28', text: 'Action' },
    { id: '12', text: 'Adventure' },
    { id: '35', text: 'Comedy' },
    { id: '18', text: 'Drama' },
    { id: '27', text: 'Horror' },
    { id: '10749', text: 'Romance' },
    { id: '53', text: 'Thriller' },
    { id: '16', text: 'Animation' },
];
export const Menu = ({ className }: MenuProps) => {
    const { state, dispatch } = useContext(SearchContext);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/zYa4iMN.png" className={styles.logoImg} />
                <span className={styles.logoText}> Movie</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li key={item.q} onClick={() => dispatch({ type: 'SORT_BY', payload: item.q })}>
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Gener</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {geners.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => dispatch({ type: 'ADD_GENRE', payload: item.id })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
