import DicodingRestaurantDB from '../../data/restaurantdb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="headline" id="headline">
      <h2>Mari Bersimfoni dengan Rasa!</h2>
    </section>
    <section class="content" id="list"></section>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantDB.HomePage();
    const restaurantContainer = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
