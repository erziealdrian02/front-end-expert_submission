const assert = require('assert');

Feature('Your Favorite Place');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavorite = 'Kosong';

Scenario('Menampilkan favorite restaurant kosong', ({ I }) => {
  I.seeElement('#favorite');
  I.see(emptyFavorite, '#favorite');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see(emptyFavorite, '#favorite');

  I.amOnPage('/');
  I.seeElement('.restaurant-item__content h3 a');
  const firstRestoCard = locate('.judul').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__content');
  const likedCardTitle = await I.grabTextFrom('.judul');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__content');
  const likedCardTitle = await I.grabTextFrom('.judul a');
  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favorite');

  const liked2CardTitle = await I.grabTextFrom('.judul a');
  I.click(liked2CardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.dontSeeElement('.restaurant-item__content');
  I.dontSeeElement('.judul a');
});
