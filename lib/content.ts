/* ------------------------------------------------------------------
   SITE CONTENT
   Edit text, halls and testimonials here. No other file needs changes.
------------------------------------------------------------------- */

export function createWhatsAppLink(message: string) {
  return `https://wa.me/918700267103?text=${encodeURIComponent(message)}`;
}

export const contact = {
  phoneDisplay: "+91 08700267103",
  phoneLink: "tel:+918700267103",
  whatsappLink: createWhatsAppLink(
    "Hello, I am interested in hosting an event at Hotel Imperial Park. Please share availability and details."
  ),
  address: "Plot No. 4, Site IV, Industrial Area, Sahibabad, Ghaziabad, Uttar Pradesh 201010",
  hours: "Desk open daily from 10:00 AM – 8:00 PM",
  mapsUrl: "https://maps.app.goo.gl/J7vsqX5kXNWHYyUNA",
  instagramUrl: "https://www.instagram.com/imperialparksahibabad/",
  instagramHandle: "@imperialparksahibabad",
};

export const halls = [
  {
    name: "Darbar",
    tag: "Grand Weddings",
    guests: "500 – 1,200 Guests",
    description:
      "For majestic weddings filled with royal joy. A palatial ballroom with soaring crystal chandeliers and an elevated floral stage.",
    image: "/images/darbar.webp",
  },
  {
    name: "Monarch",
    tag: "Sangeet & Soirees",
    guests: "100 – 350 Guests",
    description:
      "For small gatherings with big feelings. Warm amber light and intimate seating for Sangeet nights, roka events and refined dinners.",
    image: "/images/monarch.webp",
  },
  {
    name: "Grand Lounge",
    tag: "Cocktail Receptions",
    guests: "200 – 500 Guests",
    description:
      "A soaring lobby crowned with crystal chandeliers, ideal for welcome receptions and cocktail evenings.",
    image: "/images/lounge.webp",
  },
];

export const galleryImages = [
  { src: "/images/floral.webp", caption: "Floral Mandap", label: "Sacred Vows" },
  { src: "/images/ballroom-carpet.webp", caption: "Grand Ballroom Stage", label: "Celebrations" },
  { src: "/images/fine-banqueting.webp", caption: "Fine Banqueting", label: "Tablescapes" },
  { src: "/images/chandelier-corridor.webp", caption: "Crystal Corridor", label: "Illumination" },
];

export const testimonials = [
  {
    quote:
      "Had a wonderful experience at this banquet hall! The hospitality was excellent, and the team ensured all our guests were comfortable and faced no inconvenience. Special thanks to Ritin Chaudhary and Bablu Ji for their outstanding care, support, and cooperation throughout. Everything was managed smoothly. Highly recommended!",
    name: "Rajan Chopra",
    rating: 5,
  },
  {
    quote:
      "Located in Sahibabad Industrial Area, this is a very nice banquet hall. It is spacious, with huge halls and a garden. Valet parking makes it very convenient for you and your family to attend any function. The staff is polite and speaks Hindi. The food is good.",
    name: "Prachi Shukla",
    rating: 5,
  },
  {
    quote:
      "We recently attended a wedding at Imperial Park Banquet, Sahibabad, and it was a lovely experience. The hall looked elegant, the lighting was well done, and the staff were attentive without being intrusive. The food had good variety and tasted fresh, and the overall vibe was perfect for a family celebration. Imperial Park made the day feel special.",
    name: "Guest",
    rating: 5,
  },
  {
    quote:
      "A nice place for large gatherings and functions like weddings. The ambience is good, and the food is good. Management can improve more on service. Overall, it was a good experience.",
    name: "Sakkuja",
    rating: 5,
  },
];
