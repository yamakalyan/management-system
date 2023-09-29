import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfileMethod } from "../Helpers/Methods";
import { Loader1 } from "../Loaders/Loader1";

export const Profile = () => {
  const params = useParams();
  const [profile, setProfile] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchProfile = async () => {
      try {
        const url = `${params.name}/profile`;
        const results = await getProfileMethod(url);
        setLoader(false)
        setProfile(results);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [params.name]);

  return (
    <div>
      {loader ? (
        <Loader1 />
      ) : (
        <>
          <div className="profile mt-5 py-5 ">
            <div className="container py-5">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md col-lg" data-aos="zoom-in">
                  <div className="row p-2">
                    <div className="col-md col-lg">
                      <div
                        className="p-5 text-center shadow rounded-3"
                        style={{ background: "rgb(167 239 174)" }}
                      >
                        <div className="text-success row">
                          <div className="col">
                            <h2 className="fw-light text-center">
                              PROFILE DETAILS
                            </h2>
                          </div>
                          <div className="col">
                            <span className="h4">
                              <Link
                                to="/salesrecruiter/update"
                                className="mx-3"
                              ></Link>
                              <Link to="/salesrecruiter/delete"></Link>
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className="row py-5">
                          <div className="col-md col-lg">
                            <h1 className="display-3"></h1>
                            <br />
                            <br />
                            <h5 className="text-muted">
                              {params.name}
                            </h5>
                          </div>

                          <div className="col-md col-lg text-start">
                            <p className="text-muted lead">
                              Name : {profile[0]?.name}
                            </p>
                            <p className="text-muted lead">
                              Email : {profile[0]?.email}
                            </p>
                            <p className="text-muted lead">
                              Mobile : {profile[0]?.mobile}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md col-lg overflow-list" data-aos="zoom-in">
                  <div className="py-3 text-center my-3">
                    <div className="card-body">
                      <p className="card-text lead">Administration</p>
                      <h2 className=" display-6">Nishita commerce & science</h2>
                      <p className="card-text">college.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
