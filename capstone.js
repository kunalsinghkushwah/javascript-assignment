// Capstone: Interactive Product Inventory & Analytics Dashboard
// Run in a browser. The prompt defaults reproduce the assignment's example.

console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

const productNameInput = prompt("Enter a new product name:", "Monitor");
const productPriceInput = prompt("Enter the product price:", "150");

if (
  productNameInput === null ||
  productPriceInput === null ||
  productNameInput.trim() === "" ||
  productPriceInput.trim() === ""
) {
  console.log("Input cancelled or missing. No product was added.");
} else {
  const productName = productNameInput.trim();
  const productPrice = Number(productPriceInput);

  if (!Number.isFinite(productPrice) || productPrice < 0) {
    console.log("Invalid price. Please enter a valid non-negative number.");
  } else {
    inventory.push({ name: productName, price: productPrice });
    console.log(`[Prompt executed: User adds "${productName}" at "$${productPrice}"]`);

    function getCategory(price) {
      if (price < 100) {
        return "Budget";
      } else if (price < 500) {
        return "Standard";
      } else {
        return "Premium";
      }
    }

    // Use switch to demonstrate category handling.
    function categoryBadge(category) {
      switch (category) {
        case "Budget":
          return "Budget";
        case "Standard":
          return "Standard";
        case "Premium":
          return "Premium";
        default:
          return "Uncategorized";
      }
    }

    const calculateInventoryValue = (items) =>
      items.reduce((total, item) => total + item.price, 0);

    function calculateAfterAdjustments(amount, taxRate = 0, discountRate = 0) {
      const tax = amount * (taxRate / 100);
      const discount = amount * (discountRate / 100);
      return amount + tax - discount;
    }

    console.log("\n--- Processing Inventory Roster (forEach) ---");
    inventory.forEach((item) => {
      const category = categoryBadge(getCategory(item.price));
      console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
    });

    console.log("\n--- Financial Analytics ---");
    const totalValue = calculateInventoryValue(inventory);
    console.log(`Total Inventory Value: $${totalValue}`);

    const affordableItems = inventory.filter((item) => item.price < 200);
    console.log(
      `Filtered Affordable Items (Under $200): ${JSON.stringify(
        affordableItems.map((item) => item.name)
      )}`
    );

    const formattedReport = inventory.map(
      (item) => `${item.name.toUpperCase()}: $${item.price}`
    );
    console.log(`Formatted Report List: ${JSON.stringify(formattedReport)}`);

    // Example usage of optional tax/discount parameters:
    // console.log(`After 5% tax and 10% discount: $${calculateAfterAdjustments(totalValue, 5, 10)}`);
  }
}
