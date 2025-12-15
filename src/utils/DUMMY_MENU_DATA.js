const DUMMY_MENU_DATA = {
  cards: [
    {
      card: {
        card: {
          info: {
            name: "Dummy Restaurant",
            cuisines: ["Biryani", "Fast Food", "Chinese"],
            costForTwoMessage: "₹400 for two",
          },
        },
      },
    },

    {},

    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: {
            cards: [
              {},
              {
                card: {
                  card: {
                    title: "Recommended",
                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "1",
                            name: "Chicken Biryani",
                            price: 25000,
                            description: "Delicious spicy chicken biryani.",
                          },
                        },
                      },
                      {
                        card: {
                          info: {
                            id: "2",
                            name: "Zinger Burger",
                            price: 18000,
                            description: "Crispy fried chicken burger.",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              // Category accordions
              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Starters",
                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "3",
                            name: "Chicken Tikka",
                            price: 22000,
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Drinks",
                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "4",
                            name: "Mint Margarita",
                            price: 12000,
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  ],
};

export default DUMMY_MENU_DATA;
