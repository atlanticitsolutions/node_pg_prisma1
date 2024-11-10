import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import authMiddleware from '../middleware/Authenticate.js'
import ProfileController from '../controllers/ProfileController.js'
import CategoryController from '../controllers/categoryController.js'
// import { productController } from '../controllers/productController.js'

const router = Router()

// app.use('/products', require('./routes/productRoute'))
// app.use('/categories', require('./routes/categoryRoute'))

// router.get("/products", );

router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)

// * Profile routes
router.get('/profile', authMiddleware, ProfileController.index) //Private route
router.put('/profile/:id', authMiddleware, ProfileController.update) //Private route

router.post('/categories/', CategoryController.createCategory)
router.get('/categories/', CategoryController.getCategories)
router.put('/categories/:id', CategoryController.updateCategory)
router.delete('/categories/:id', CategoryController.deleteCategory)

// router.post('/products/', productController.createProduct)
// router.get('/products/', productController.getProducts)
// router.get('/products/:id', productController.getProductById)
// router.put('/products/:id', productController.updateProduct)
// router.delete('/products/:id', productController.deleteProduct)
// router.get(
//   '/products/category/:categoryId',
//   productController.getProductsByCategoryId
// )

export default router
