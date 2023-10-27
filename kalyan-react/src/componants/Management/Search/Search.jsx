import { Auth } from "../../Authorizers/Authentication";

const Search = () => {
  const authRole = Auth()
  const optionsClasses = [
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
  return (
    <div className="py-5">
      <div className="container py-5 my-5">
        <div className="row">
          <div className="heading text-center">
            <h1 className="text-uppercase text-primary font-monospace">
              Search anything here
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iusto totam, adipisci sapiente optio esse harum temporibus et
              veniam atque eius cupiditate dolorem cumque explicabo molestiae
              quam asperiores voluptates consectetur.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 py-5 my-5">
          <div className="col">
            <div className="form-floating mb-3 z-0">
              {authRole.management ? (
                <>
                  <select className="form-select">
                    <option defaultValue>..</option>
                    <option value="1">Student</option>
                    <option value="1">Teacher</option>
                    <option value="1">Expanse</option>
                  </select>
                  <label>Choose user</label>
                </>
              ) : (
                <>
                  <select className="form-select">
                    {optionsClasses.map((cls, id) => {
                      return (
                        <option value={cls} key={id} >{cls}</option>
                      );
                    })}
                  </select>
                  <label>Choose user</label>
                </>
              )}
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3 z-0">
              <input type="text" className="form-control" />
              <label>Mobile number or username or admission number</label>
            </div>
          </div>
          {/* <div className="col">
            <div className="d-grid">
              <button className="btn-lg btn btn-primary">Search</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
