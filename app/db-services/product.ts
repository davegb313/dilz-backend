import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

module.exports = {
    // create a product
    createProduct: async (productData: any) => {
        return await prisma.product.create({
          data: productData,
        });
      },
      
    // Get all products for a user
    getProducts: async function (userId: string) {
        return await prisma.product.findMany({
            where: {
                user_id: userId    
            }
        });
      },

    // delete product by id 
    deleteProductById: async (productId: string) => {
      return await prisma.product.delete({
        where:{
            id: productId
        }
      })  
    },
    
    // delete all products
    deleteAllProducts: async function   (id: string) {
        return await prisma.product.deleteMany();
    }
};