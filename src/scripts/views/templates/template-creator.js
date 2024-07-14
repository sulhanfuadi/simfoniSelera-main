import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
<h2 class="content-title-detail">${restaurants.name}</h2>
<img class="content-thumbnail-detail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
<h3>Information</h3>
<div class="content-location-detail">Lokasi: ${restaurants.city}</div>
<div class="content-rating-detail">Rating Restoran: ${restaurants.rating}</div>
<div class="content-category-detail">Kategori: ${restaurants.categories.map((category) => category.name)}</div>
<div class="restaurant-overview">
  <h3>Description</h3>
  <div class="content-description"><p>${restaurants.description}</p></div>
  <h3>Menu Makanan</h3>
  <div class="content-description"><p>${restaurants.menus.foods.map((food) => `${food.name}<br>`).join('')}</p></div>
  <h3>Menu Minuman</h3>
  <div class="content-description"><p>${restaurants.menus.drinks.map((drink) => `${drink.name}<br>`).join('')}</p></div>
  <h3>Review Pelanggan</h3>
  <div class="content-description">
    ${restaurants.customerReviews.map((review) => `
      <h4 tabindex="0">Nama Pelanggan: ${review.name}</h4>
      <p tabindex="0">Tanggal: ${review.date}</p>
      <p tabindex="0">Review: ${review.review}</p>
    `).join('')}
  </div>
</div>  
`;

const createRestaurantItemTemplate = (restaurants) => `
<article class="content-item ${restaurants.Id}">
  <img class="content-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
  <div class="content-paragraph">
    <p>
      <div class="content-rating">Rating: ${restaurants.rating}</div>
      <div class="content-location">Lokasi: ${restaurants.city}</div>
      <div class="content-title">Nama : ${restaurants.name}</div>
    </p>
  <div class="content-title"><a class="btn btn-detail-full" href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
