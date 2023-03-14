import { createBoard } from '@wixc3/react-board';
import { FavoritCard } from '../../../components/favorit-card/favorit-card';

export default createBoard({
    name: 'FavoritCard',
    Board: () => (
        <FavoritCard
            movie={{
                id: 123,
                overview: 'desc',
                release_date: '2000',
                title: 'AVATAR',
                vote_average: 7,
                poster_path:
                    'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
        />
    ),
    environmentProps: {
        canvasWidth: 207,
    },
});
