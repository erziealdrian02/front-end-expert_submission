import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { detailRestaurant } from '../template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="restaurant" id="detail">

    </div>
    <div id="likeButtonContainer"></div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = detailRestaurant(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        title: restaurant.title,
        city: restaurant.city,
        name: restaurant.name,
        description: restaurant.description,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        vote_average: restaurant.vote_average,
        menus: restaurant.menus,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
