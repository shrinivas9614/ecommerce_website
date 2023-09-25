export const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

export const singleFilter = [
  {
    id: "discount",
    name: "Discount",
    options: [
      { value: "10", label: "10% And Above", checked: false },
      { value: "20", label: "20% And Above", checked: false },
      { value: "30", label: "30% And Above", checked: false },
      { value: "40", label: "40% And Above", checked: false },
      { value: "50", label: "50% And Above", checked: false },
      { value: "60", label: "60% And Above", checked: false },
      // Add more discount options as needed
    ],
  },
  {
    id: "price-range",
    name: "Price Range",
    options: [
      { value: "159-399", label: "159-399", checked: false },
      { value: "399-999", label: "399-999", checked: false },
      { value: "999-1999", label: "999-1999", checked: false },
      { value: "1999-2999", label: "1999-2999", checked: false },
      { value: "3999-4999", label: "3999-4999", checked: false },
      { value: "upto-4999", label: "upto 4999", checked: false },
      // Add more price range options as needed
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In Stock", checked: false },
      { value: "out-of-stock", label: "Out of Stock", checked: false },
    ],
  },
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "sizes",
    name: "sizes",
    options:[
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
    ]

  }
];
