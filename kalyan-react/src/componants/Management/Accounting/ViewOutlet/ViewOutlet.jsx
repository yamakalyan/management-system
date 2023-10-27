import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchInputs from "../../../SearchInputs/SearchInputs";

const ViewOutlet = () => {
  const params = useParams();

  const ifStudent = params.group === "fees" ? "student" : params.group === "salaries" ? "teacher" : params.group;

  const [valueOne, setValueOne] = useState("");
  const [valuetwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");

  const handleChange = (firstValue, secondValue, thirdValue) => {
    setValueOne(firstValue);
    setValueTwo(secondValue);
    setValueThree(thirdValue);
  };

  return (
    <div>
      <div className="container py-5 " data-aos="zoom-in">
        <div className="mb-4 text-center">
          <h2 className="text-capitalize fw-bold text-primary font-monospace">
            {params.group} {params.name}
          </h2>
        </div>
        <SearchInputs assignValues={handleChange} paramsGroup={params.group} />
        <div className="row py-5 ">
          <div className="col">
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link
                        to={`/search/${params.group}/123456`}
                      >
                        view details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <Link to={`/${params.group}/123456`}>view details</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOutlet;
