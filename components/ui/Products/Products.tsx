import { Product } from "../../../db";
const Products = ({ product }: { product: Product }) => {
    return (   
        <div className="group relative">
            <div className=" aspect-h-1 aspect-w-1 lg:aspect-none bg-gray-200 rounded-md group-hover:opacity-75">
                <img src={product.imageId} alt="image-product" className=" h-full w-full object-cover object-center"></img>
                </div> 
                <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>{product.name}</h3>
          <p className='mt-1 text-sm text-gray-500'>
            Size: {product.size.toUpperCase()}, {product.color}
          </p>
        </div>

        <p className='text-sm font-medium text-gray-900'>{product.price}💸</p>
      </div>
        </div>
    ) 
}

export default Products;  
