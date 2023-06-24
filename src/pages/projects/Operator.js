import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const imageArray = [
  "https://data2.unhcr.org/images/documents/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg",
  "https://data.unhcr.org/images/documents/big_8e966728ea4a3e116410ee7f3045219bc752e0f6.jpg",
  "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2020/08/25/spanish_translated.png",
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118432558/original/159bf80ed2369518663e1781fa0fc5f173f180de/document-translation-and-essay-writing.png",
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/141139841/original/cf75102acc0688050f69b65f4d4754011a9e5970/translate-any-document-from-english-to-spanish-dfe6.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkjq0jS0PY2PMHERpSlOZfIHTn2je9pMU2g&usqp=CAU",
];

const Operator = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(
    imageArray[Math.floor(Math.random() * imageArray.length)]
  );
  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            toast.success("Save!");
            setImage(imageArray[Math.floor(Math.random() * imageArray.length)]);
            setValue("");
          }}
        >
          submit
        </button>
      </div>
      <div className="grid grid-cols-12 px-2">
        <div className="col-span-6">
          <img src={image} className="w-full" />
        </div>
        <div className="col-span-6 px-4 pt-8 text-black text-base">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-[800px]"
          />
        </div>
      </div>
    </>
  );
};

export default Operator;
