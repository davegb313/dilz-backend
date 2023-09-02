const router = require("express").Router();
const userDBServices = require("../db-services/user");
const productDBServices = require("../db-services/product");

router.get("/", (req: any, res: any) => {
  return res.json("Backend is working");
});

// router.post("/create", (req: any, res: any) => {});

// ********************* Users ******************************
router.get("/users", (req: any, res: any) => {
  const users = userDBServices.getUsers();
  return res.json(users);
});

router.get("/user/:id", async (req: any, res: any) => {
  try {
    const user = await userDBServices.getUser(req.params.id);
    return res.json(user);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "config.ts getUser: Internal Server Error" });
  }
});

// ********************* Products ******************************

// create product
router.post("/product", async (req: any, res: any) => {
  try {
    const productData = req.body; // Assuming the request body contains product data

    // Create a new product using the function from product.ts
    const product = await productDBServices.createProduct(productData);
    console.log(product);

    return res.json(product);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "config.ts createProduct: Internal Server Error" });
  }
});

// get product by user id
router.get("/product/:user_id", async (req: any, res: any) => {
  try {
    const product = await productDBServices.getProducts(req.params.user_id);
    return res.json(product);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "config.ts getProducts: Internal Server Error" });
  }
});

// delete product by id 
router.delete("/product/:id", async (req: any, res: any) => {
  try {
    await productDBServices.deleteProductById(req.params.id);
    return res.json({ success: `product with id ${req.params.id} was deleted successfully !` });
  } catch (error) {
    return res.status(500).json({ error: "config.ts deleteProductById: Internal Server Error" });
  }
});

// delete all products
router.delete("/product", async (req: any, res: any) => {
  try {
    await productDBServices.deleteAllProducts();
  } catch (error) {
    return res.status(500).json({ error: "config.ts deleteProductById: Internal Server Error" });
  }
});

module.exports = router;
