import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { sampleServices } from "../../service";

const Classify = () => {
  const navigate = useNavigate();
  const { prjId, id } = useParams();

  const [sample, setSample] = useState(null);

  const getSample = async () => {
    const { data } = await sampleServices.getSamplesByProjectId(prjId);

    setSample(data.find((e) => e.id == id));
  };

  useEffect(() => {
    getSample();
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    toast.info("Updating....");

    const resp = await sampleServices.update(sample.id, sample.label);

    if (resp.status === 200) {
      toast.success("Done!");
      navigate("/projects/" + prjId + "/samples");
    } else toast.error("Error!");
  };
  return (
    <form onSubmit={submit}>
      <div className="mb-6">
        <label
          htmlFor="sample"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Sample
        </label>
        <input
          value={sample?.sample}
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setSample({ ...sample, sample: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="sample"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Lable
        </label>
        <input
          value={sample?.label}
          type="text"
          id="label"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setSample({ ...sample, label: e.target.value })}
        />
      </div>

      <div className="flex justify-end items-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Classify;
