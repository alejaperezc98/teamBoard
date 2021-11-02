import mongoose from "mongoose";

// Se crea el esquema, la estructura de rol
const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

// crear una colección en la DB que se llame rol y todos los datos creados anteriormente
const role = mongoose.model("roles", roleSchema);

export default role