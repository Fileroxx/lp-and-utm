import Image from "./Image";

interface ProductCardProps {
  image: string;
  oldPrice: string;
  newPrice: string;
  installment: string;
  purchaseLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  oldPrice,
  newPrice,
  installment,
  purchaseLink,
}) => {


  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-xs relative">

      <div className="text-center bg-gray-200 rounded-2xl p-2">
        <Image src={image} alt="Produto" width="100%" height="240px"/>
      </div>

   
      <div className="mt-5">
        <p className="text-gray-500 text-sm line-through">DE {oldPrice}</p>
        <p className="text-black text-xl font-bold">POR {newPrice}</p>
      </div>


      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 flex justify-between items-center text-black font-bold text-sm py-2 px-3 mt-4">
        <Image src="truckLeft.png" alt="Truck Left" width="30px" height="100%" />
        <span>FRETE GRÁTIS</span>
        <Image src="truckRight.png" alt="Truck Right" width="30px" height="100%" />
      </div>


      <div className="text-center mt-4 flex justify-center items-end">
        <p className="text-sm text-gray-600">12X</p>
        <p className="text-4xl font-light">{installment}</p>
      </div>

      <a href={`${purchaseLink}${window.location.search}`}>
        <button className="bg-gray-800 cursor-pointer text-white font-semibold py-3 w-full  mt-4 hover:bg-gray-900 transition">
          COMPRAR AGORA
        </button>
      </a>
    </div>
  );
};

export default ProductCard;
