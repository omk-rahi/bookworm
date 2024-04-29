import Button from "./Button";
import Rating from "./Rating";

const Book = () => {
  return (
    <div className="max-w-60 border">
      <div className="flex justify-center bg-gray-100 py-4">
        <img
          src="https://www.bookswagon.com/productimages/images200/463/9781421522463.jpg"
          alt="Cover image"
          className="h-40"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-xl font-bold">Design for business</h2>
        <p className="mb-2 mt-1 text-sm text-gray-500">Art & Design</p>
        <div className="relative right-1 mb-1 flex">
          <Rating fillColor="fill-orange-300" />
        </div>
        <p className="mb-4 text-2xl font-bold ">₹200</p>

        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default Book;
