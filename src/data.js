const products = [
  {
    id: 1,
    name: "Avant-Garde Lamp",
    category: "Lamps",
    price: 179.99,
    store: "Ilumina",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["green", "blue", "red"],
    image:
      "https://lw-cdn.com/images/8F01354BBA5B/k_a0e5ea2e6a5d878732b1d56174aed6eb;w_1600;h_1600;q_70/8603002.webp",
  },
  {
    id: 2,
    name: "Chic Chair",
    category: "Chairs",
    price: 339.99,
    store: "Botega",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["green", "purple"],
    image:
      "https://www.mocka.co.nz/cdn/shop/files/T03710_Square_01.jpg?v=1723248328",
  },
  {
    id: 3,
    name: "Comfy Bed",
    category: "Beds",
    price: 129.99,
    store: "Hakiri",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["blue", "yellow"],
    image:
      "https://www.nilkamalfurniture.com/cdn/shop/files/Mozart_66bfc296-2982-4ee1-883a-50e80a422835_600x.jpg?v=1728031239",
  },
  {
    id: 4,
    name: "Avant-Garde Lamp",
    category: "Lamps",
    price: 179.99,
    store: "Ilumina",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["green", "blue", "red"],
    image:
      "https://lw-cdn.com/images/8F01354BBA5B/k_a0e5ea2e6a5d878732b1d56174aed6eb;w_1600;h_1600;q_70/8603002.webp",
  },
  {
    id: 5,
    name: "Chic Chair",
    category: "Chairs",
    price: 339.99,
    store: "Botega",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["green", "purple"],
    image:
      "https://www.mocka.co.nz/cdn/shop/files/T03710_Square_01.jpg?v=1723248328",
  },
  {
    id: 6,
    name: "Comfy Bed",
    category: "Beds",
    price: 129.99,
    store: "Hakiri",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["blue", "yellow"],
    image:
      "https://www.nilkamalfurniture.com/cdn/shop/files/Mozart_66bfc296-2982-4ee1-883a-50e80a422835_600x.jpg?v=1728031239",
  },
  {
    id: 7,
    name: "Comfy Bed",
    category: "Beds",
    price: 129.99,
    store: "Hakiri",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["blue", "yellow"],
    image:
      "https://www.nilkamalfurniture.com/cdn/shop/files/Mozart_66bfc296-2982-4ee1-883a-50e80a422835_600x.jpg?v=1728031239",
  },
  {
    id: 8,
    name: "Comfy Bed",
    category: "Beds",
    price: 129.99,
    store: "Hakiri",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["blue", "yellow"],
    image:
      "https://www.nilkamalfurniture.com/cdn/shop/files/Mozart_66bfc296-2982-4ee1-883a-50e80a422835_600x.jpg?v=1728031239",
  },
  {
    id: 9,
    name: "Comfy Bed",
    category: "Beds",
    price: 129.99,
    store: "Hakiri",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["blue", "yellow"],
    image:
      "https://www.nilkamalfurniture.com/cdn/shop/files/Mozart_66bfc296-2982-4ee1-883a-50e80a422835_600x.jpg?v=1728031239",
  },
  {
    id: 10,
    name: "Comfy Bed",
    category: "Beds",
    price: 129.99,
    store: "Hakiri",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    colors: ["blue", "yellow"],
    image:
      "https://www.nilkamalfurniture.com/cdn/shop/files/Mozart_66bfc296-2982-4ee1-883a-50e80a422835_600x.jpg?v=1728031239",
  },
];

export default products;
