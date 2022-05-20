function ProductCard({title,rating,image,price}) {
    return (
      <>
        <div className="flex flex-col md:flex-row cursor-pointer hover:shadow-red-200 hover:shadow-lg">
          <div className="w-40 flex flex-col justify-center my-2">
            <div className="mx-auto">
              <img className="h-40" src={image} alt="product" />
            </div>
            <p className="text-sm text-ellipsis">{title}</p>
            <p className="text-yellow-500 font-extrabold">
              {"*".repeat(rating.rate)}
              <span className="text-sm text-black font-normal">
                {" "}
                ({Math.ceil(rating.count)})
              </span>
            </p>
            <p className="font-bold">${price}</p>
          </div>
        </div>
      </>
    );
}

export default ProductCard;