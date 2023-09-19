import { useContext } from 'react';

import FavoriteContext from '../store/favorite-context';

import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {

	const favoritesCtx =  useContext(FavoriteContext);

	let content;

	if(favoritesCtx.totalFavorites === 0) {

		content = <p>You got no favorites yet. Start adding some ? </p>
	} else {

        content = <MeetupList meetups={favoritesCtx.favorites} />
	}

    return(
        <div>
	        <h1>My Favorites</h1>

	        {content}
        </div>
    );
}

export default FavouritesPage;