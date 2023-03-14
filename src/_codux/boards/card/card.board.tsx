import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 452,
                overview:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora. Odio nesciunt alias enim temporibus corrupti laborum, illum quis consequatur sapiente laboriosam facilis neque possimus doloremque molestiae quisquam ullam nostrum.',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 7,
                poster_path:
                    'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
        />
    ),
});
