const products = [
    {
        id: 0,
        name: "Laptop",
        description: "High-performance laptop with Intel i7 processor and 16GB RAM.",
        price: "₹89,999.00 INR",
        image: "https://example.com/laptop.jpg",
        category: "Computer Accessories"
    },
    {
        id: 1,
        name: "Smartphone",
        description: "Latest model smartphone with 64MP camera and 128GB storage.",
        price: "₹34,999.00 INR",
        image: "https://example.com/smartphone.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 2,
        name: "Motherboard",
        description: "Gaming motherboard compatible with Intel and AMD processors.",
        price: "₹12,499.00 INR",
        image: "https://example.com/motherboard.jpg",
        category: "Computer Accessories"
    },
    {
        id: 3,
        name: "Hard Drive",
        description: "1TB external hard drive with USB 3.0 support.",
        price: "₹4,999.00 INR",
        image: "https://example.com/harddrive.jpg",
        category: "Computer Accessories"
    },
    {
        id: 4,
        name: "Pen Drive",
        description: "64GB USB 3.0 pen drive with high-speed data transfer.",
        price: "₹799.00 INR",
        image: "https://example.com/pendrive.jpg",
        category: "Computer Accessories"
    },
    {
        id: 5,
        name: "Monitor",
        description: "27-inch 4K Ultra HD monitor with HDR support.",
        price: "₹24,999.00 INR",
        image: "https://example.com/monitor.jpg",
        category: "Computer Accessories"
    },
    {
        id: 6,
        name: "Keyboard",
        description: "Mechanical keyboard with RGB backlighting.",
        price: "₹3,499.00 INR",
        image: "https://example.com/keyboard.jpg",
        category: "Computer Accessories"
    },
    {
        id: 7,
        name: "Mouse",
        description: "Wireless gaming mouse with adjustable DPI settings.",
        price: "₹1,499.00 INR",
        image: "https://example.com/mouse.jpg",
        category: "Computer Accessories"
    },
    {
        id: 8,
        name: "Headphones",
        description: "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
        price: "₹7,999.00 INR",
        image: "https://example.com/headphones.jpg",
        category: "Computer Accessories"
    },
    {
        id: 9,
        name: "Smartwatch",
        description: "Waterproof smartwatch with fitness tracking features.",
        price: "₹5,499.00 INR",
        image: "https://example.com/smartwatch.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 10,
        name: "Tablet",
        description: "10-inch tablet with 4G LTE support and 64GB storage.",
        price: "₹17,999.00 INR",
        image: "https://example.com/tablet.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 11,
        name: "Charger",
        description: "Fast charging USB-C charger with 45W output.",
        price: "₹1,299.00 INR",
        image: "https://example.com/charger.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 12,
        name: "Computer Repair Tool Kit",
        description: "Professional computer repair tool kit with 58 pieces.",
        price: "₹2,999.00 INR",
        image: "https://example.com/repair_tool_kit.jpg",
        category: "Computer Accessories"
    },
    {
        id: 13,
        name: "Mobile Repair Tool Kit",
        description: "Mobile phone repair tool kit with precision tools.",
        price: "₹1,499.00 INR",
        image: "https://example.com/mobile_repair_tool_kit.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 14,
        name: "Mobile Service",
        description: "Comprehensive mobile phone repair and maintenance service.",
        price: "₹1,999.00 INR",
        image: "https://example.com/mobile_service.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 15,
        name: "Computer Service",
        description: "Full computer repair and maintenance service.",
        price: "₹3,499.00 INR",
        image: "https://example.com/computer_service.jpg",
        category: "Computer Accessories"
    },
    {
        id: 16,
        name: "Laptop Cooling Pad",
        description: "Adjustable laptop cooling pad with dual fans.",
        price: "₹1,499.00 INR",
        image: "https://example.com/cooling_pad.jpg",
        category: "Computer Accessories"
    },
    {
        id: 17,
        name: "USB Hub",
        description: "7-port USB 3.0 hub with individual power switches.",
        price: "₹1,299.00 INR",
        image: "https://example.com/usb_hub.jpg",
        category: "Computer Accessories"
    },
    {
        id: 18,
        name: "Laptop Stand",
        description: "Ergonomic laptop stand with adjustable height.",
        price: "₹2,499.00 INR",
        image: "https://example.com/laptop_stand.jpg",
        category: "Computer Accessories"
    },
    {
        id: 19,
        name: "Bluetooth Speakers",
        description: "Portable Bluetooth speakers with 10-hour battery life.",
        price: "₹3,499.00 INR",
        image: "https://example.com/bluetooth_speakers.jpg",
        category: "Computer Accessories"
    },
    {
        id: 20,
        name: "External SSD",
        description: "500GB external SSD with USB-C interface.",
        price: "₹7,999.00 INR",
        image: "https://example.com/external_ssd.jpg",
        category: "Computer Accessories"
    },
    {
        id: 21,
        name: "Screen Protector",
        description: "Tempered glass screen protector for smartphones.",
        price: "₹399.00 INR",
        image: "https://example.com/screen_protector.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 22,
        name: "Phone Case",
        description: "Shockproof phone case with built-in kickstand.",
        price: "₹999.00 INR",
        image: "https://example.com/phone_case.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 23,
        name: "Power Bank",
        description: "10000mAh power bank with fast charging capability.",
        price: "₹1,499.00 INR",
        image: "https://example.com/power_bank.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 24,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with noise cancellation.",
        price: "₹3,999.00 INR",
        image: "https://example.com/wireless_earbuds.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 25,
        name: "Car Charger",
        description: "Dual USB car charger with quick charge support.",
        price: "₹699.00 INR",
        image: "https://example.com/car_charger.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 26,
        name: "Selfie Stick",
        description: "Extendable selfie stick with Bluetooth remote.",
        price: "₹599.00 INR",
        image: "https://example.com/selfie_stick.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 27,
        name: "Wireless Charger",
        description: "Qi-certified wireless charger with fast charging.",
        price: "₹1,999.00 INR",
        image: "https://example.com/wireless_charger.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 28,
        name: "Phone Holder",
        description: "Adjustable phone holder for car dashboard.",
        price: "₹799.00 INR",
        image: "https://example.com/phone_holder.jpg",
        category: "Mobile Accessories"
    },
    {
        id: 29,
        name: "OTG Adapter",
        description: "USB OTG adapter for connecting USB devices to smartphones.",
        price: "₹299.00 INR",
        image: "https://example.com/otg_adapter.jpg",
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

export { products, sales };
