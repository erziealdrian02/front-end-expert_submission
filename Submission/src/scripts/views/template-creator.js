import CONFIG from '../globals/config';

const detailRestaurant = (restaurant) => `    
<h1 class="restaurant__title">${restaurant.name}</h1>
  <img class="restaurant__poster" src="${
  CONFIG.BASE_IMAGE_URL.MEDIUM_RESOLUTION + restaurant.pictureId
}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Name</h4>
    <p>${restaurant.name}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
        <p>${restaurant.categories
    .map((category) => category.name)
    .join(', ')}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__description">
    <h3>Menus</h3>
    <p>${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join('')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Drinks</h3>
    <p>${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}</p>
  </div>
  <div class="restaurant__description">
  <h3>Reviews</h3>
    ${restaurant.customerReviews
    .map(
      (review) => `
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <p>${review.date}</p>
        <br>
    `,
    )
    .join('')}
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${
  restaurant.backdrop_path
    ? CONFIG.BASE_IMAGE_URL + restaurant.backdrop_path
    : `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`
}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="judul"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  detailRestaurant,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
