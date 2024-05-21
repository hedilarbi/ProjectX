const lieux = [
  {
    id: 1,
    title: "Ghar Melh",
    discription:
      "Founded at the beginning of the installation of the Phoenicians in Tunisia (1101 BC), like the Utica, the ancient Rusucmona is quickly becoming a renowned counter to be the Utica's port. It later became an important base for Barbarian privateers. Since ancient times, the population of Ghar El Melh has worked, almost exclusively, in agriculture and fisheries. Designated a Wetland of International Importance, Ghar el Melh was the first North African and Middle Eastern city to receive Ramsar’s Wetland City Accreditation Award",
    imageUrl: require("../../assets/Places/les-forts-de-ghar-melh.jpg"),
    latitude: 37.168883,
    longitude: 10.186279,
  },
  {
    id: 2,
    title: "Utica",
    discription:
      "Utica is one of the very first Phoenician trading posts established on African soil, probably around 1100 BC. The oldest of Carthage, Utique played the role of capital for a long time before being overshadowed by its neighbor, founded at the end of the 9th century BC, but rapidly gaining momentum. Associated with the fate of its neighbor, the city experienced good times and dark hours. But, at the decisive turning point of the confrontation between Carthage and Rome",
    imageUrl: require("../../assets/Places/utica.jpg"),
    latitude: 37.05517,
    longitude: 10.062468,
  },
  {
    id: 3,
    title: "Qsiba",
    discription:
      "The Qsiba is in the heart of BIZERTE, joins the old port and the historic fort of the old Medina. BIZERTE medina! A great resemblance to the city of Venice but with a typical Muslim Arabo style! To visit day and night without regrets",
    imageUrl: require("../../assets/Places/qsiba.jpg"),
    latitude: 37.277396,
    longitude: 9.875169,
  },
  {
    id: 4,
    title: "Ichkeul National Park",
    discription:
      "The Ichkeul lake and wetland are a major stopover point for millions of millions of migrating birds, such as ducks, geese, storks and pink flamingoes, which come to feed and nest there. Ichkeul is the last remaining lake in a chain that once extended across North Africa. The site is Unesco listed for its rich fauna and flora. For the lover of nature and birds, we offer a special guided tour of the park, accompanied with a professional born in situ guide to the best views of the birds and the natural life.",
    imageUrl: require("../../assets/Places/ichkeul.jpg"),
    latitude: 37.128712,
    longitude: 9.661458,
  },
];

const tours = [
  {
    nom: "North Africa Bizerta-Tour",
    description:
      "A circuit that allows you to discover the charm of North Africa, the circuit is easy full of beautiful landscapes to explore. If there is one place to visit when you come to Tunisia, it is the tourist town of Bizerte. You will spend a peaceful day trip and experience this day in another environment.",
    TourImage: require("../../assets/Places/Bizerte.jpg"),
    date: "2024-05-10",
    heure: "10:00",
    lieux: lieux,
  },
  {
    nom: "Tour 2",
    description: "Description of Tour 2",
    image: "tour2.jpg",
    date: "2024-05-15",
    heure: "14:00",
    lieux: ["Place 2", "Place 3"],
  },
];

export default tours;
