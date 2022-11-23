import { dbConnect } from "../../../utils/mongoose";
dbConnect();
export default async function handler(req, res) {
  // const productos = await Producto.find();
  // console.log(productos);
  res.status(200).json("task");
}
