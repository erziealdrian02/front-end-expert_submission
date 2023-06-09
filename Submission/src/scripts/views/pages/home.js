import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../template-creator';

const DefaultPage = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Lates Post</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>`;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.DefaultPage();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((e) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(e);
    });
  },
};

export default DefaultPage;
