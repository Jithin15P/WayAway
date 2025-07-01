 const sampleListings = [
  {
    title: "Cozy Cottage in the Woods",
    description: "A peaceful retreat nestled in Shimla's forests, perfect for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyZWUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 2500,
    location: "Shimla",
    country: "India",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [77.173424, 31.104605] }
  },
  {
    title: "Beachside Bungalow in Goa",
    description: "Relax with ocean views and sandy beaches right at your doorstep in Goa.",
    image: {
      url: "https://images.unsplash.com/photo-1682743710558-b338ba285925?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
      filename: "listingimage"
    },
    price: 4500,
    location: "Goa",
    country: "India",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [74.12400, 15.29933] }
  },
  {
    title: "Luxury Villa in Dubai",
    description: "Stay in style in this modern villa with a private pool and skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 7111,
    location: "Dubai",
    country: "United Arab Emirates",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Urban Loft in New York",
    description: "Enjoy modern city living in the heart of NYC with skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1543158266-0066955047b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ld3lvcmt8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 3311,
    location: "New York",
    country: "United States",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },
  {
    title: "Alpine Retreat in Zurich",
    description: "Escape to this tranquil lodge in Zurich, surrounded by snow-capped peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1706794543262-a013701e070c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 5763,
    location: "Zurich",
    country: "Switzerland",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [8.5417, 47.3769] }
  },
  {
    title: "Bangkok City Escape",
    description: "Stay in a modern apartment close to temples, street food, and shopping.",
    image: {
      url: "https://images.unsplash.com/photo-1559693353-ef3d2e6774db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIyQmFuZ2tvayUyMENpdHklMjBFc2NhcGUlMjIlMkN8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 4325,
    location: "Bangkok",
    country: "Thailand",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [100.5018, 13.7563] }
  },
  {
    title: "Skytower Apartment in Tokyo",
    description: "Modern luxury and tech convenience in a high-rise Tokyo apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1614541129217-9d45d7738fe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      filename: "listingimage"
    },
    price: 9646,
    location: "Tokyo",
    country: "Japan",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Romantic Getaway in Rome",
    description: "A charming apartment just steps away from Rome's historic landmarks.",
    image: {
      url: "https://images.unsplash.com/photo-1627903368493-0e9a9e074298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIyUm9tYW50aWMlMjBHZXRhd2F5JTIwaW4lMjBSb21lJTIyfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 9811,
    location: "Rome",
    country: "Italy",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
  },
  {
    title: "Delhi Heritage Stay",
    description: "Stay near the heart of Delhi's culture and monuments in a cozy suite.",
    image: {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 2272,
    location: "Delhi",
    country: "India",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Beachside Villa in Athens",
    description: "Unwind at this serene villa with stunning Aegean Sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1709545972531-0a8366463f75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JTIyQmVhY2hzaWRlJTIwVmlsbGElMjBpbiUyMEF0aGVucyUyMnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4808,
    location: "Athens",
    country: "Greece",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [23.7275, 37.9838] }
  },{
    title: "Amsterdam Canal House",
    description: "Charming canal-side home in the heart of Amsterdam's historic district.",
    image: {
      url: "https://images.unsplash.com/photo-1664563367272-f0e22db82a92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fEFtc3RlcmRhbSUyMENhbmFsJTIwSG91c2UlMjJ8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 4200,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Island Paradise in Fiji",
    description: "Private beachfront villa with crystal-clear waters and stunning sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1715940093974-8836926f3f41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCUyMklzbGFuZCUyMFBhcmFkaXNlJTIwaW4lMjBGaWppJTIyfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 8900,
    location: "Suva",
    country: "Fiji",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [178.0650, -17.7134] }
  },
  {
    title: "Countryside Cottage in Cotswolds",
    description: "Peaceful stone cottage with a garden in the scenic English countryside.",
    image: {
      url: "https://images.unsplash.com/photo-1558150519-b37626b5f763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjb3R0YWdlfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 3100,
    location: "Cotswolds",
    country: "United Kingdom",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-1.7833, 51.7500] }
  },
  {
    title: "Jungle Hideaway in Costa Rica",
    description: "Eco-lodge deep in the rainforest, perfect for wildlife enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 2900,
    location: "San José",
    country: "Costa Rica",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-84.0907, 9.9333] }
  },
  {
    title: "Lakeside Chalet in Banff",
    description: "Enjoy mountain views and fresh air at this Canadian Rockies retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4700,
    location: "Banff",
    country: "Canada",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-115.5726, 51.1784] }
  },
  {
    title: "Santorini Cliffside Suite",
    description: "A stunning whitewashed suite overlooking the blue domes and sea.",
    image: {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxob3RlbHN8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 6200,
    location: "Santorini",
    country: "Greece",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [25.4333, 36.3932] }
  },
  {
    title: "Tropical Escape in Bali",
    description: "Relax in a serene Balinese villa with lush greenery and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1748935550642-3ba87c1bee51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIyVHJvcGljYWwlMjBFc2NhcGUlMjBpbiUyMEJhbGklMjJ8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 5100,
    location: "Bali",
    country: "Indonesia",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Highland Castle in Scotland",
    description: "Live like royalty in a historic castle in the Scottish Highlands.",
    image: {
      url: "https://images.unsplash.com/photo-1739038685434-942846223e45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCUyMkhpZ2hsYW5kJTIwQ2FzdGxlJTIwaW4lMjBTY290bGFuZCUyMnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 7800,
    location: "Inverness",
    country: "United Kingdom",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-3.6208, 57.4778] }
  },
  {
    title: "Venetian Canal Loft",
    description: "Elegant loft with views of the canals and gondolas in Venice.",
    image: {
      url: "https://images.unsplash.com/photo-1611440052868-58b551b07e2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWx8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 6700,
    location: "Venice",
    country: "Italy",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] }
  },
  {
    title: "Safari Tent in Serengeti",
    description: "Experience wildlife up close in this luxurious safari tented camp.",
    image: {
      url: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlbnR8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 5600,
    location: "Serengeti",
    country: "Tanzania",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
  },
  {
    title: "Maldivian Overwater Bungalow",
    description: "Sleep above the ocean in this dreamy overwater bungalow in Maldives.",
    image: {
      url: "https://images.unsplash.com/photo-1692417045306-bb61bfe7afd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JTIyTWFsZGl2aWFuJTIwT3ZlcndhdGVyJTIwQnVuZ2Fsb3clMjJ8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 9700,
    location: "Malé",
    country: "Maldives",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [73.5089, 4.1755] }
  },
  {
    title: "Desert Camp in Rajasthan",
    description: "Enjoy a cultural stay in a traditional luxury tent in Jaisalmer.",
    image: {
      url: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0JTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 3200,
    location: "Jaisalmer",
    country: "India",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [70.9110, 26.9150] }
  },
  {
    title: "Mountain Log Cabin in Montana",
    description: "A rustic log cabin with breathtaking views of the American Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1633325609628-ad5c6295ee5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxsb2clMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4400,
    location: "Montana",
    country: "United States",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-112.0191, 46.8797] }
  },
  {
    title: "Modern Loft in Seoul",
    description: "Sleek and minimalistic loft located in the vibrant city of Seoul.",
    image: {
      url: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwbG9mdHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 5400,
    location: "Seoul",
    country: "South Korea",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [126.9780, 37.5665] }
  },
  {
    title: "Lakefront Retreat in New Hampshire",
    description: "Relax in a cozy lake house surrounded by New England’s natural beauty.",
    image: {
      url: " https://images.unsplash.com/photo-1750126833705-ba98013f16f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      filename: "listingimage"
    },
    price: 3900,
    location: "New Hampshire",
    country: "United States",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-71.6678, 43.1939] }
  },
  {
    title: "Terraced House in Kyoto",
    description: "Traditional Japanese stay with serene gardens and tatami rooms.",
    image: {
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRva3lvfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 4200,
    location: "Kyoto",
    country: "Japan",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] }
  },
  {
    title: "Cabin in the Rockies",
    description: "Warm and rustic cabin surrounded by forest and mountain trails.",
    image: {
      url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhYmlufGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 3600,
    location: "Colorado",
    country: "United States",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-105.7821, 40.01499] }
  },
  {
    title: "Himalayan Homestay in Leh",
    description: "Experience local culture with breathtaking views of the Himalayas.",
    image: {
      url: "https://images.unsplash.com/photo-1668966780199-0c36f7977427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCUyMkhpbWFsYXlhbiUyMEhvbWVzdGF5JTIwaW4lMjBMZWglMjIlMkN8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 2800,
    location: "Leh",
    country: "India",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [77.5887, 34.1526] }
  },
  {
    title: "Luxury Condo in Singapore",
    description: "Modern high-rise condo with skyline views and world-class amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1667895725233-b766d6626e64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JTIyTHV4dXJ5JTIwQ29uZG8lMjBpbiUyMFNpbmdhcG9yZSUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 7600,
    location: "Singapore",
    country: "Singapore",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [103.8198, 1.3521] }
  },
  {
    title: "Historic Flat in Edinburgh",
    description: "Charming old-world apartment in the heart of Edinburgh’s Old Town.",
    image: {
      url: "https://images.unsplash.com/photo-1698129781534-d3cfab07d5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIySGlzdG9yaWMlMjBGbGF0JTIwaW4lMjBFZGluYnVyZ2glMjIlMkN8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 4100,
    location: "Edinburgh",
    country: "United Kingdom",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] }
  },
   {
    title: "Wine Country Farmhouse",
    description: "Rustic farmhouse surrounded by vineyards in Tuscany.",
    image: {
      url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4900,
    location: "Tuscany",
    country: "Italy",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [10.4000, 43.7711] }
  },
  {
    title: "Artistic Studio in Paris",
    description: "Cozy and bright studio near Montmartre, perfect for art lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1631388167592-dc99e14a4aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHBhcmlzJTIwaG90ZWxzfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 5200,
    location: "Paris",
    country: "France",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Seaside Chalet in Algarve",
    description: "Bright and breezy chalet with sea views in southern Portugal.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4300,
    location: "Algarve",
    country: "Portugal",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [-8.6667, 37.0179] }
  },
  {
    title: "Modern Cabin in Queenstown",
    description: "Scenic retreat with lake and mountain views in New Zealand.",
    image: {
      url: "https://images.unsplash.com/photo-1697807650304-907257330a3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwY2FiaW58ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 6500,
    location: "Queenstown",
    country: "New Zealand",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
  },
  {
    title: "Cave House in Cappadocia",
    description: "Unique cave dwelling carved into rock with hot air balloon views.",
    image: {
      url: "https://images.unsplash.com/photo-1669203408570-4140ee21f211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNhbnRvcmluaSUyQ3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4700,
    location: "Cappadocia",
    country: "Turkey",
    reviews: [],
    owner: "6650d5f2a671cb3c45a1d134",
    geometry: { type: "Point", coordinates: [34.9538, 38.6250] }
  }
];
module.exports={data:sampleListings}