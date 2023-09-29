import { useEffect, useState } from "react";

const SearchInputs = ({ assignValues, paramsGroup }) => {
  const [valueOne, setValueOne] = useState("");
  const [valuetwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");

  const [optionValues, setOptionsValues] = useState([]);

  const optionsFee = [
    "..",
    "Nursery",
    "UKG",
    "LKG",
    "1st class",
    "2nd class",
    "3rd class",
    "4th class",
    "5th class",
    "6th class",
    "7th class",
    "8th class",
    "9th class",
    "10th class",
  ];
  const optionsSalaries = [
    "..",
    "Telugu",
    "English",
    "Maths",
    "Science",
    "chemistry",
    "Social",
  ];

  const ifvalue =
    paramsGroup === "fees"
      ? optionsFee
      : paramsGroup === "salaries"
      ? optionsSalaries
      : [];

  useEffect(() => {
    assignValues(valueOne, valuetwo, valueThree);
    setOptionsValues(ifvalue);
  }, [valueOne, valuetwo, valueThree, assignValues]);

  const mappingOptions = optionValues?.map((option, id) => {
    return (
      <>
        <option value={option.toLowerCase()} key={id}>
          {option}
        </option>
      </>
    );
  });

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-4">
        {paramsGroup !== "expanses" && (
          <>
            <div className="col">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  onChange={(e) => setValueOne(e.target.value)}
                >
                  {mappingOptions}
                </select>
                <label>{paramsGroup === "fees" ? "Choose class" : "Choose subject"}</label>
              </div>
            </div>
          </>
        )}
        {paramsGroup === "fees" && (
          <>
            <div className="col">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  onChange={(e) => setValueTwo(e.target.value)}
                >
                  <option defaultValue>..</option>
                  <option value="1">A</option>
                  <option value="1">B</option>
                  <option value="1">C</option>
                  <option value="1">D</option>
                </select>
                <label>Choose section</label>
              </div>
            </div>
          </>
        )}
        {paramsGroup === "expanses" && (
          <>
            <div className="col">
              <div className="form-floating mb-3">
                <input type="date" className="form-control" />
                <label>Choose date</label>
              </div>
            </div>
          </>
        )}
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
              onChange={(e) => setValueThree(e.target.value)}
            />
            <label>
              {paramsGroup === "fees"
                ? "Admission No. or Username"
                : "Mobile number or Username"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInputs;
