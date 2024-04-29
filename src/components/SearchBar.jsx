import LinkButton from "./LinkButton";

const SearchBar = () => {
  return (
    <form className=" flex max-w-full rounded-xl bg-white px-4 py-2 ">
      <input
        type="text"
        className="flex-1 py-2 pl-4 outline-none"
        placeholder="Search books..."
      />
      <LinkButton to="/">Search</LinkButton>
    </form>
  );
};

export default SearchBar;
