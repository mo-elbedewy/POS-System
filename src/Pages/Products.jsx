import { useState, useEffect } from  "react";
import api from "../api/axios";
import { motion } from "framer-motion";
import { Package, AlertCircle } from "lucide-react"

const Products = () => {

    const [Products, setProducts] = useState([])
    const [Error, setError] = useState("")

    useEffect(() => {
       api.get("/products")
       .then((res) => setProducts(res.data))
       .catch((error) => {
         console.error(error)
         setError("Faild to fetch products")
       }) 
    })

  return (
    <div className="pt-32 min-h-screen p-10 bg-linear-to-b from-[#faf6ef] to-[#f0e5d2]">
        <motion.h1 intial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
         className="text-4xl font-bold text-neutral-900 mb-10 flex items-center gap-3">
            <Package size={36} className="text-[#C9A86A]" />
            Products
        </motion.h1>     
    </div>
  )
}

export default Products
