import React, { useEffect, useState } from "react";
import { useLocation , useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";

const ProductDetails = () => {
  const {_id} = useParams()
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
        <div className="h-full w-f">

            {productInfo.img ? (            
              <img
              className="w-full object-cover"
              src={productInfo.img}
              alt={productInfo.img}
            />):(
              <img
              className="w-full object-cover"
              src={productInfo.volumeInfo?.imageLinks?.thumbnail}
              alt={productInfo.volumeInfo?.imageLinks?.thumbnail}
            />
            )}
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
