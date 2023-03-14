import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    const sortBy: string[] = ['Populerity', 'Most voted', 'release date'];
    const gener: string[] = ['Action', 'Commdy', 'Horror'];
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/zYa4iMN.png" className={styles.logoImg} />
                <span className={styles.logoText}>Lama Movie</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <span className={styles.title}>Gener</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {gener.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};
