import { useEffect, useState } from "react";

function BannerSection({
  allcategory,
  setallcategory,
  productRef,
  setfilterQuery,
  setactiveCategory,
}) {
  const [loading, setloading] = useState(false);
  const [bannerProducts, setbannerProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      var datalist = [];
      for (let index = 0; index < allcategory.length; index++) {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${allcategory[index]}`
        );
        const products = await response.json();
        datalist.push(products[0]);
      }
      setloading(false);
      setbannerProducts(datalist);
    };
    fetchData();
  }, [allcategory]);
  return (
    <>
      {console.log("bbb", bannerProducts)}
      {loading ? (
        <svg
          role="status"
          class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      ) : (
        <div className="flex flex-col md:flex-row gap-1">
          <div
            onClick={() => {
              setactiveCategory(bannerProducts[0]?.category);
              setfilterQuery(`/category/${bannerProducts[0]?.category}`);
              productRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-1/2 shadow-lg relative pb-4 cursor-pointer"
          >
            <img
              className="h-80 mx-auto opacity-90 "
              src={bannerProducts[0]?.image}
              alt=""
            />
            <p className="w-fit mx-auto">{bannerProducts[0]?.category}</p>
            <p className="w-fit mx-auto bg-orange-200 text-base border-b-2 border-red-600">
              Shop Now
            </p>
          </div>
          <div class="w-full md:w-1/2 grid gap-1 grid-cols-2">
            {bannerProducts.map((product, i) => {
              return (
                i < 4 && (
                  <div
                    className="shadow-lg relative pb-4 cursor-pointer"
                    onClick={() => {
                      setactiveCategory(product.category);
                      productRef.current.scrollIntoView({ behavior: "smooth" });
                      setfilterQuery(`/category/${product.category}`);
                    }}
                  >
                    <img
                      className="h-40 mx-auto opacity-90 object-cover"
                      src={product.image}
                      alt=""
                    />
                    <p className="w-fit mx-auto">{product.category}</p>
                    <p className="w-fit mx-auto bg-orange-200 text-base border-b-2 border-red-600">
                      Shop Now
                    </p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default BannerSection;
