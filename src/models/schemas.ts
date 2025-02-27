import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  sku: {
    type: String,
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
})


export {
  productSchema
}

// await products.find({ id: "1212"});


/**
const example = {
  "name": "Camiseta Deportiva",
  "price": 350,
  "category": "Ropa",
  "stock": 150,
  "description": "Camiseta deportiva para entrenamiento, disponible en varios colores.",
  "brand": "FitWear",
  "sku": "FW-TSH-001",
  "tags": [
    "deporte",
    "ropa",
    "entrenamiento"
  ],
  "createdAt": "2024-11-01T10:30:00Z",
  "updatedAt": "2024-11-02T14:00:00Z"
} 
*/