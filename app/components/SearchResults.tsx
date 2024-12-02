import { CircleX } from "lucide-react";
import { Region } from "../code-postal-maroc/[regionName]/page";

const SearchResults = ({ data ,close}: { data: Region[] ,close:()=>void}) => {
    if (!data || data.length === 0) {
      // Display the "no results" message if data is missing or empty
      return (
        <div className="w-screen h-screen text-gray-700 z-10 absolute top-20 right-0  flex flex-col justify-start pt-20 items-center ">
          <div className="w-2/3 bg-white z-20 h-full p-4 rounded">
         <div className="w-full text-sm hover:cursor-pointer flex justify-end items-center">
             <CircleX className="z-50  " color="red" onClick={close}/>
         </div>

            <div className="grid grid-cols-4 p-4">
              <h3>région</h3>
              <h3>province</h3>
              <h3>agence</h3>
              <h3>code postal</h3>
            </div>
            <span>Aucun résultat ne correspond à votre recherche</span>
          </div>
        </div>
      );
    }
  
    // Display the results if data is available
    return (
      <div className="w-screen h-screen z-10 absolute top-20 right-0  flex flex-col justify-start pt-20 items-center overflow-y-scroll ">
        <div className="w-2/3 bg-white h-full p-4 rounded overflow-y-scroll  ">
        <div className="w-full text-sm hover:cursor-pointer flex justify-end items-center">
        <CircleX className="z-50  " color="red" onClick={close}/>
         </div>

          <div className="w-full grid grid-cols-4 justify-items-start p-4 bg-white text-black">
            <h3>région</h3>
            <h3>province</h3>
            <h3>agence</h3>
            <h3>code postal</h3>
          </div>
          {data.map((record) => (
            <div key={record.NOUVEAU_CODE_POSTAL} className="grid grid-cols-4 text-gray-600 px-4">
              <span>{record.REGION_POSTALE}</span>
              <span>{record.PROVINCE}</span>
              <span>{record.AGENCE}</span>
              <span>{record.NOUVEAU_CODE_POSTAL}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default SearchResults
  