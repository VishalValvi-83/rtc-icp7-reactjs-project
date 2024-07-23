const products = [
    {
        id: 0,
        name: "Laptop",
        description: "High-performance laptop with Intel i7 processor and 16GB RAM.",
        price: "₹89,999.00 INR",
        image: "https://p2-ofp.static.pub//fes/cms/2023/08/16/9po8ze7s3reb7ods680pa87ph8wm4c624538.png",
        category: "Computer Accessories"
    },
    {
        id: 1,
        name: "Smartphone",
        description: "Motorola Edge 50 Fusion 5G (Forest Blue, 8GB RAM, 128GB Storage)",
        price: "₹34,999.00 INR",
        image: "https://m.media-amazon.com/images/I/71ZJ6bsARtL._SX569_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 2,
        name: "Motherboard",
        description: "Gaming motherboard compatible with Intel and AMD processors.",
        price: "₹12,499.00 INR",
        image: "https://m.media-amazon.com/images/I/61TbCg1bh3L.jpg",
        category: "Computer Accessories"
    },
    {
        id: 3,
        name: "Hard Drive",
        description: "1TB External HDD - USB 3.0 for Windows and Mac with 3 yr Data Recovery Services",
        price: "₹4,999.00 INR",
        image: "https://m.media-amazon.com/images/I/814SDu24dnL._SX679_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 4,
        name: "Pen Drive",
        description: "64GB USB 3.0 pen drive with high-speed data transfer.",
        price: "₹799.00 INR",
        image: "https://m.media-amazon.com/images/I/31+O31ILlcL.jpg",
        category: "Computer Accessories"
    },
    {
        id: 5,
        name: "Monitor",
        description: "27-inch 4K Ultra HD monitor with HDR support.",
        price: "₹24,999.00 INR",
        image: "https://m.media-amazon.com/images/I/71GRpZb6+vL._SX679_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 6,
        name: "Keyboard",
        description: "Mechanical keyboard with RGB backlighting.",
        price: "₹3,499.00 INR",
        image: "https://m.media-amazon.com/images/I/71efrSqYHwL._SY450_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 7,
        name: "Mouse",
        description: "Wireless gaming mouse with adjustable DPI settings.",
        price: "₹1,499.00 INR",
        image: "https://m.media-amazon.com/images/I/51nxsHroOLL._SY879_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 8,
        name: "Headphones",
        description: "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
        price: "₹7,999.00 INR",
        image: "https://m.media-amazon.com/images/I/51+xFDM2H2L._SY450_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 9,
        name: "Smartwatch",
        description: "Waterproof smartwatch with fitness tracking features.",
        price: "₹5,499.00 INR",
        image: "https://m.media-amazon.com/images/I/510+3Km7MtL._SX569_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 10,
        name: "Tablet",
        description: "10-inch tablet with 4G LTE support and 64GB storage.",
        price: "₹17,999.00 INR",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697175358/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/302271_m1m9sv.png?tr=w-480",
        category: "Mobile Accessories"
    },
    {
        id: 11,
        name: "Charger",
        description: "Fast charging USB-C charger with 45W output.",
        price: "₹1,299.00 INR",
        image: "https://m.media-amazon.com/images/I/51J8w+cXLoL._SY450_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 12,
        name: "Computer Repair Tool Kit",
        description: "Professional computer repair tool kit with 58 pieces.",
        price: "₹2,999.00 INR",
        image: "https://m.media-amazon.com/images/I/81RfoyuT2LL._SX569_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 13,
        name: "Mobile Repair Tool Kit",
        description: "Mobile phone repair tool kit with precision tools.",
        price: "₹1,499.00 INR",
        image: "https://m.media-amazon.com/images/I/81Iak49KL7L._SX569_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 14,
        name: "Mobile Service",
        description: "Comprehensive mobile phone repair and maintenance service.",
        price: "₹1,999.00 INR",
        image: "https://miro.medium.com/v2/resize:fit:800/1*-58dZ_gj-4t73ehxuFwleA.jpeg",
        category: "Mobile Accessories"
    },
    {
        id: 15,
        name: "Computer Service",
        description: "Full computer repair and maintenance service.",
        price: "₹3,499.00 INR",
        image: "https://rahatcomputer.com/wp-content/uploads/2016/06/Computers-Repair-and-Maintenance.webp",
        category: "Computer Accessories"
    },
    {
        id: 16,
        name: "Laptop Cooling Pad",
        description: "Adjustable laptop cooling pad with dual fans.",
        price: "₹1,499.00 INR",
        image: "https://m.media-amazon.com/images/I/71Jhyhs2orL._SY450_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 17,
        name: "USB Hub",
        description: "7-port USB 3.0 hub with individual power switches.",
        price: "₹1,299.00 INR",
        image: "https://m.media-amazon.com/images/I/51V3GTSos1L.jpg",
        category: "Computer Accessories"
    },
    {
        id: 18,
        name: "Laptop Stand",
        description: "Ergonomic laptop stand with adjustable height.",
        price: "₹2,499.00 INR",
        image: "https://m.media-amazon.com/images/I/616UovaQcLL._AC_UF894,1000_QL80_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 19,
        name: "Bluetooth Speakers",
        description: "Portable Bluetooth speakers with 10-hour battery life.",
        price: "₹3,499.00 INR",
        image: "https://m.media-amazon.com/images/I/71gNXJ6ciBL.jpg",
        category: "Computer Accessories"
    },
    {
        id: 20,
        name: "External SSD",
        description: "500GB external SSD with USB-C interface.",
        price: "₹7,999.00 INR",
        image: "https://m.media-amazon.com/images/I/71Uy60eWrVL._AC_UF1000,1000_QL80_.jpg",
        category: "Computer Accessories"
    },
    {
        id: 21,
        name: "Screen Protector",
        description: "Tempered glass screen protector for smartphones.",
        price: "₹399.00 INR",
        image: "https://m.media-amazon.com/images/I/71tUjv1-wNL.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 22,
        name: "Phone Case",
        description: "Shockproof phone case with built-in kickstand.",
        price: "₹999.00 INR",
        image: "https://m.media-amazon.com/images/I/71RRYQ4dVXL._SX569_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 23,
        name: "Power Bank",
        description: "10000mAh power bank with fast charging capability.",
        price: "₹1,499.00 INR",
        image: "https://m.media-amazon.com/images/I/71pBjes-NTS._SL1500_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 24,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with noise cancellation.",
        price: "₹3,999.00 INR",
        image: "https://www.gonoise.com/cdn/shop/files/Beige_b8bace91-1ca1-4182-a043-d58a3a7534c7.png?v=1714033033",
        category: "Mobile Accessories"
    },
    {
        id: 25,
        name: "Car Charger",
        description: "Dual USB car charger with quick charge support.",
        price: "₹699.00 INR",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCPRcfkXlB7ZGHpGyYmVtVnsKFfRRtbKdc0aX840RYdZgSWwbX5CCpc9Luq2K_o4JKlbDJ1uT0R4lycIIOsfx2KuJWlSy95gtEhPAhil49Lo3E-SqgkQhU&usqp=CAE",
        category: "Mobile Accessories"
    },
    {
        id: 26,
        name: "Selfie Stick",
        description: "Extendable selfie stick with Bluetooth remote.",
        price: "₹599.00 INR",
        image: "https://m.media-amazon.com/images/I/51zUGppjnEL._SX679_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 27,
        name: "Wireless Charger",
        description: "Qi-certified wireless charger with fast charging.",
        price: "₹1,999.00 INR",
        image: "https://m.media-amazon.com/images/I/61F-S077BXL._AC_UY327_FMwebp_QL65_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 28,
        name: "Phone Holder",
        description: "Adjustable phone holder for car dashboard.",
        price: "₹799.00 INR",
        image: "https://m.media-amazon.com/images/I/61ZhzGZi6JL._SX679_.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 29,
        name: "OTG Adapter",
        description: "USB OTG adapter for connecting USB devices to smartphones.",
        price: "₹299.00 INR",
        image: "https://m.media-amazon.com/images/I/212redZnCCL._SY445_SX342_QL70_FMwebp_.jpg",
        category: "Mobile Accessories"
    }
];

const sales = [
    {
        id: 0,
        productId: 4,
        discount: 20,
        salePrice: "₹639.00 INR",
    },
    {
        id: 1,
        productId: 8,
        discount: 15,
        salePrice: "₹6,799.00 INR",
    },
    {
        id: 2,
        productId: 5,
        discount: 10,
        salePrice: "₹22,499.00 INR",
    },
    {
        id: 3,
        productId: 14,
        discount: 10,
        salePrice: "₹8,999.00 INR",
    },
    {
        id: 4,
        productId: 15,
        discount: 15,
        salePrice: "₹2,974.00 INR",
    },
    {
        id: 5,
        productId: 16,
        discount: 15,
        salePrice: "₹1,274.00 INR",
    },
    {
        id: 6,
        productId: 17,
        discount: 20,
        salePrice: "₹1,039.00 INR",
    },
    {
        id: 7,
        productId: 19,
        discount: 10,
        salePrice: "₹3,149.00 INR",
    },

];
const categories = [
    { id: 1, name: "Computer Accessories" },
    { id: 2, name: "Mobile Accessories" },
];
export { products, sales, categories };
