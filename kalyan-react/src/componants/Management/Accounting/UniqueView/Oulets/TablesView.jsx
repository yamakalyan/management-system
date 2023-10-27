import { useParams } from "react-router-dom";

const TablesView = () => {
  const params = useParams();
  console.log(params.id);
  console.log(params.type);

  const classData = [
    { class: "Nursery" },
    { class: "LKG" },
    { class: "UKG" },
    { class: "1st" },
    { class: "2nd" },
    { class: "3rd" },
    { class: "4th" },
    { class: "5th" },
    { class: "6th" },
    { class: "7th" },
    { class: "8th" },
    { class: "9th" },
    { class: "10th" },
  ];
  const monthsData = [
    { month: "Jan" },
    { month: "Feb" },
    { month: "Mar" },
    { month: "Apr" },
    { month: "May" },
    { month: "Jun" },
    { month: "Jul" },
    { month: "Aug" },
    { month: "Sep" },
    { month: "Oct" },
    { month: "Nov" },
    { month: "Dec" },
  ];
  const subjectData = [
    { subject: "Telugu" },
    { subject: "Hindi" },
    { subject: "English" },
    { subject: "Maths" },
    { subject: "Physics" },
    { subject: "Chemistry" },
    { subject: "Science" },
    { subject: "Social" },
    { subject: "Biology" },
  ];

  let Tables = <></>;

  switch (params.type) {
    case "fees":
    case "student":
      switch (params.list) {
        case "payments":
          Tables = (
            <div>
              <table className="table shadow">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Class</th>
                    <th scope="col">A-Year</th>
                    <th scope="col" className="text-success">
                      Paid
                    </th>
                    <th scope="col" className="text-danger">
                      Due
                    </th>
                    <th scope="col">Paid-type</th>
                    <th scope="col">Total</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {classData.map((classN, id) => {
                    return (
                      <>
                        <tr key={id}>
                          <td>1</td>
                          <th>{classN.class}</th>
                          <td>2000-2001</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
          break;
        case "classreports":
          Tables = (
            <div>
              <table className="table shadow">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Class</th>
                    <th scope="col">A-Year</th>
                    <th scope="col" className="text-success">
                      Paid
                    </th>
                    <th scope="col" className="text-danger">
                      Due
                    </th>
                    <th scope="col">Paid-type</th>
                    <th scope="col">Total</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {classData.map((classN, id) => {
                    return (
                      <>
                        <tr key={id}>
                          <td>1</td>
                          <th>{classN.class}</th>
                          <td>2000-2001</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
          break;
        default:
          <div></div>;
          break;
      }
      break;
    case "salaries":
    case "staff":
      switch (params.list) {
        case "payments":
          Tables = (
            <div>
              <table className="table shadow">
                <thead>
                  <tr>
                    <th scope="col">Date-time</th>
                    <th scope="col">Remarks</th>
                    <th scope="col" className="text-success">
                      Paid
                    </th>
                    <th scope="col" className="text-danger">
                      Due
                    </th>
                    <th scope="col">Total</th>
                    <th scope="col">Paid-type</th>
                  </tr>
                </thead>
                <tbody>
                  {monthsData.map((classN, id) => {
                    return (
                      <>
                        <tr key={id}>
                          {/* <th>{classN.month}</th> */}
                          <th>Oct 13 2022</th>
                          <td>no</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
          break;

        default:
          <div></div>;
          break;
      }
      break;
    case "expanses":
      switch (params.list) {
        case "payments":
          Tables = (
            <div>
              <table className="table shadow">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Description</th>
                    <th scope="col" className="text-success">
                      Paid
                    </th>
                    <th scope="col" className="text-danger">
                      Due
                    </th>
                    <th scope="col">Paid-type</th>
                    <th scope="col">Total</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {monthsData.map((classN, id) => {
                    return (
                      <>
                        <tr key={id}>
                          <td>1</td>
                          {/* <th>{classN.month}</th> */}
                          <th>Chairs</th>
                          <td>
                            <small style={{ overflowX: "hidden" }}>
                              no description Lorem ipsum dolor sit amet
                            </small>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
          break;
        default:
          <div></div>;
          break;
      }
      break;

    default:
      <div></div>;
      break;
  }
  return (
    <div data-aos="zoom-in">
      <div>
        {params.list !== "transactions" ? (
          Tables
        ) : (
          <table className="table shadow">
            <thead>
              <tr>
                <th>Date-time</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Paid type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2002-2003</td>
                <td>1</td>
                <td>1</td>
                <td>cash</td>
                <td className="text-success fw-bold">Success</td>
              </tr>
              <tr>
                <td>2002-2003</td>
                <td>1</td>
                <td>1</td>
                <td>UPI</td>
                <td className="text-danger fw-bold">Failed</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TablesView;
