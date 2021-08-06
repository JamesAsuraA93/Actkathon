export default function Selectbar() {
    return (
      <div className="mr-3">
        <select
          className={`mt-1 block w-full 
          pl-3 pr-1 py-2 pb-3 text-base 
          bg-transparent
          border-gray-300 focus:outline-none 
          focus:ring-indigo-500 
          focus:border-indigo-500 
          sm:text-sm rounded-md
          `}
          defaultValue="Canada"
        >
          <option>USA</option>
          <option>Canada</option>
          <option>EU</option>
        </select>
      </div>
    )
  }