const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('#gallery');
const addGalleryItem = function (item) {
  const galleryItemRef = document.createElement('li');
  galleryItemRef.classList.add('gallery-item');
  const galleryPhotoRef = document.createElement('img');
  galleryPhotoRef.setAttribute('src', item.url);
  galleryPhotoRef.setAttribute('alt', item.alt);
  galleryPhotoRef.classList.add('gallery-img');
  galleryItemRef.appendChild(galleryPhotoRef);
  return galleryItemRef;
};
//const imagesListToAdd = images.map(image => addGalleryItem(image));
galleryRef.append(...imagesListToAdd);
