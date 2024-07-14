# SimfoniSelera

**SimfoniSelera** - a platform celebrating the diverse flavors of Indonesia, designed to help you create memorable dining experiences. Created to fulfill a graduation [Menjadi Front-End Web Developer Expert](https://www.dicoding.com/academies/219) class requirement at Dicoding Academy.

---

## About the Company

SimfoniSelera is a platform that celebrates the diverse flavors of Indonesia, helping you create memorable dining experiences.

Simfoni Selera,
The Orchestra of Taste that Delights the Palate!
We are here to help you create memorable dining experiences.
Discover New Flavors!

This web app is built using the JavaScript bundler Webpack with the following features:

- PWA - Progressive Web Application using Workbox-InjectManifest and WebpackPwaManifest
- Responsiveness and image optimization using responsive-loader
- CSS minification using MiniCssExtractPlugin and CssMinimizerPlugin
- Preloading assets to speed up the loading of crucial files using HtmlWebpackInjectPreload
- Transpiling using babel-loader

---

## Testing

### Test Cases for Integration Tests

#### I. Components

##### 1. app-bar

- If the displayed page has a hero element, the App Bar should be transparent/no background.
- If the page does not have a hero element, the App Bar should have a background.
- If the Navigation Menu is set, the App Bar should display the menu correctly.
- The App Bar should display an indicator on the active menu.
- The hamburger menu button on the App Bar should toggle (show/hide) the menu list.

##### 2. resto-list

- If the list of restaurants is not set, display the skeleton element.
- If the list of restaurants is set, remove the skeleton element and display the restaurant list accordingly.
- Display the restaurant list content based on the set data.

##### 3. resto-detail

- If the restaurant detail data is not set, display the skeleton element.
- If the restaurant detail is set, remove the skeleton element and display the detail content based on the set data.

#### II. Data-Source

##### 1. Resto Detail

- If the response is ok (200) and the JSON response is valid, return the restaurant detail object.
- If the JSON response is empty, throw an error ‘Detail restaurant tidak ditemukan.’
- If the JSON response is invalid, throw an error ‘Terjadi kesalahan saat memproses data.’
- If the response is not ok (other than 200), throw an error ‘Terjadi kesalahan saat memproses data.’

##### 2. Resto List

- If the response is ok (200) and the JSON response is valid, return the list of restaurants object.
- If the JSON response is empty, throw an error ‘Daftar restaurant kosong.’
- If the JSON response is invalid, throw an error ‘Terjadi kesalahan saat memproses data.’
- If the response is not ok (other than 200), throw an error ‘Terjadi kesalahan saat memproses data.’

##### 3. Resto Review

- If the response is ok (200) and the JSON response is valid, return the object list of existing reviews along with the newly submitted review.
- If the JSON response is empty, throw an error ‘Terjadi kesalahan, silahkan ulangi kembali.’
- If the JSON response is invalid, throw an error ‘Terjadi kesalahan saat memproses data.’
- If the response is not ok (other than 200), throw an error ‘Terjadi kesalahan saat memproses data.’

##### 4. Favorite Resto Idb Contract

- Can return the added restaurant data.
- Does not add a restaurant without an id property.
- Can return all added restaurants.
- Can delete a restaurant by id.
- Can handle if the restaurant to be deleted does not exist.

#### III. Favorite

##### 1. Liking a Restaurant

- If the restaurant is not yet favorited, display the button to favorite the restaurant.
- Hide the button to remove the restaurant from the favorites list.
- If the favorite button is pressed, change the button to unfavorite the restaurant.
- Display a snackbar notification that the restaurant has been added to favorites.
- Save the restaurant information to IndexedDB.
- If the restaurant is already favorited, it does not need to be saved again.

##### 2. Unliking a Restaurant

- If the restaurant is already favorited, hide the button to favorite the restaurant and display the button to remove it from favorites.
- If the unfavorite button is pressed, change the button to favorite the restaurant.
- Display a snackbar notification that the restaurant has been removed from favorites.
- Remove the restaurant information from IndexedDB.
- It will not cause an error if the restaurant information to be deleted does not exist in the favorites list.

#### IV. Resto-List

##### Testing the relationship between presenter, model, and view on the restaurant list page

- The presenter can call the model to get the list of restaurant data.
- If the restaurant list is not empty, the presenter can call the view to display the restaurant list based on the data obtained from the model.
- If the restaurant list is empty, the presenter can call the view to display a message that the restaurant list is empty.

#### V. E2E Test

##### A. Favoriting a Restaurant

- The user opens the favorite restaurant list page and sees a message that the list is empty.
- The user opens the home page and sees the restaurant list.
- The user clicks the first restaurant on the list and sees the restaurant detail page.
- The user sees the favorite button and presses it.
- The user sees a snackbar notification that the restaurant has been added to favorites.
- The user opens the favorite list page and sees the added restaurant in the list.

##### B. Unfavoriting a Restaurant

- The user opens the home page and sees the restaurant list.
- The user clicks the first restaurant on the list and sees the favorite button.
- The user presses the favorite button and opens the favorite list page.
- The user sees the favorited restaurant in the list and clicks it.
- The user sees the unfavorite button and presses it.
- The user sees a snackbar notification that the restaurant has been removed from favorites.
- The user opens the favorite list page and sees that the list is now empty.

##### C. Reviewing a Restaurant

- The user opens the home page and the detail page of the third restaurant.
- The user sees the review form, fills in the name and review, and clicks the submit button.
- The user sees a loading indicator on the submit button and, after a moment, the indicator disappears.
- The user sees the submitted review appear at the end of the review list.

---

## Warning!

This repository is a submission for the [Menjadi Front-End Web Developer Expert](https://www.dicoding.com/academies/219) class at Dicoding. This class has submissions that must be completed to receive a certificate. The contents of this repository are the final section that includes the required criteria.

Make this repo a reference:

- By the terms of use at Dicoding, Dicoding Academy class submissions must be your own work.
- Code obtained from other sources (websites, books, forums, GitHub, etc.) is only used as a reference. The level of similarity cannot be more than 70%.

Big thanks to [Dicoding](https://www.dicoding.com/)

<br clear="both">

---

<br clear="both">

## Certificate

<img src="./src/public/doc/simfoniSelera-certificate.png"
     alt="Certificate">

<br clear="both">

---

<br clear="both">

### Author

<strong>[Sulhan Fuadi](https://github.com/sulhanfuadi)</strong>

---

## Additional Information

The website that I created has fulfilled:

- Implementing basic display responsibility on mobile devices (Implementing Small Things).
- Implementing responsive layout using @media query and css grid (Implementing Responsive Layout).
- Optimization of UI elements such as implementing a navigation drawer, and setting appropriate text spacing (Other Optimization).
- Using focus and screen reader to input data on the website (Experiencing Focus & Experiencing Screen Reader).
- Using ESLint as a linter when writing JavaScript code (Using ESLint).
- Creating a website with Application Shell architecture (Practice: Application Shell).
- Implementing the Web App Manifest (Practice: Web App Manifest).
- Implementing Service Worker (Practice: Service Worker).
- Implemented Cache API on Service Worker (Practice: Cache API).
- Using IndexedDB to store data in object form (Practice: IndexedDB).
- Implementing WebSocket and Notification (Practice: Web Socket & Notification).
- Test Driven Development using Jasmine.
- Applying Testing to Applications.
- Implementing Test Contracts.
- Building Features Using TDD.
- Implementing E2E Testing.
- Compressing images using Imagemin.
- Converting GIF into Video.
- Applying Responsive Image.
- Using WebP as image format.
- Applying lazy load image technique.
- Analyzing JavaScript bundle size.
- Splitting the bundle to keep the load small.

---

## License

This repository has the MIT License. This license allows the user to make any changes to the program code. This license only requires the user to include the license and author's copyright in the redistributed code, and there is no prohibition against using the trademark of the original author. In addition, the user also has no right to sue the manufacturer when there is damage to the software.

---

## Scripts

The npm scripts used in this project are:

- **Starting development server:** `npm run start-dev`
  - In development mode, some features like PWA and Split codes are not available.
- **Build for production distribution:** `npm run build`
- **Starting production server:** `npm run start-prod`
  - Before starting the production server, it's recommended to build and test first.
- **Linting:** `npm run lint`
- **Integration test:** `npm run test`
- **End to End (E2E) test:** `npm run e2e`
  - Before starting the E2E test, the development server must be run first.

#
