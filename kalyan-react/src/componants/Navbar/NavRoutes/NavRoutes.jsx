import { Link, useNavigate } from "react-router-dom";

export let conditionalRoutes = [];

export const homeNavbarRoutes = () => {
  const routes = [
    {
      name: { heading: "Home", icon: "bi bi-house-heart-fill" },
    },

    {
      name: {
        heading: "Admission",
        icon: "bi bi-building-add",
        sub_names: [
          {
            word: "Admission Process",
          },
          {
            word: "Scholarships",
          },
          {
            word: "Admission Requirements",
          },
        ],
      },
    },

    {
      name: { heading: "Faculty", icon: "bi bi-microsoft-teams" },
    },

    {
      name: {
        heading: "News and Events",
        icon: "bi bi-newspaper",
        sub_names: [
          {
            word: "Notifications",
          },
          {
            word: "Events",
          },
        ],
      },
    },
    {
      name: { heading: "About", icon: "bi bi-file-earmark-person" },
    },

    {
      name: "Contact",
      icon: "bi bi-person-lines-fill",
    },
    {
      name: {
        heading: "Login",
        icon: "bi bi-door-open-fill",
        sub_names: [
          {
            word: "Management",
          },
          {
            word: "Staff",
          },
          {
            word: "Student",
          },
        ],
      },
    },
  ];
  conditionalRoutes = routes;

  const mapping = routes.map((route, id) => {
    return (
      <>
        {route.name.sub_names ? (
          <li className="nav-item dropdown" key={id}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className={route.name.icon + " me-1"}></i>
              <span> {route.name.heading}</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                {route.name.sub_names.map((data) => {
                  return (
                    <>
                      <Link
                        className="dropdown-item"
                        to={`/${route.name.heading
                          .replace(/\s/g, "")
                          .toLowerCase()}/${data.word
                          .replace(/\s/g, "")
                          .toLowerCase()}`}
                      >
                        {data.word}
                      </Link>
                    </>
                  );
                })}
              </li>
            </ul>
          </li>
        ) : route.name.heading ? (
          <>
            <li className="nav-item" key={id}>
              <Link
                className={"nav-link"}
                to={`/${
                  route.name.heading === "Home"
                    ? ""
                    : route.name.heading.toLowerCase()
                }`}
              >
                <i className={route.name.icon + " " + "me-1"}></i>
                <span>{route.name.heading}</span>
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-item" key={id}>
            <Link className={"nav-link"} to={`/${route.name.toLowerCase()}`}>
              <i className={route.icon + " " + "me-1"}></i>
              <span>{route.name}</span>
            </Link>
          </li>
        )}
      </>
    );
  });

  return mapping;
};

export const managementNavbarRoutes = () => {
  const routes = [
    {
      name: {
        heading: "Accounting",
        sub_names: [
          {
            word: "Fee management",
          },
          {
            word: "Salaries",
          },
          {
            word: "Expanses",
          },
          // {
          //   word: "Other",
          // },
        ],
      },
      icon : "bi bi-book"
    },
    {
      name: {
        heading: "Attendance",
        sub_names: [
          {
            word: "Staff",
          },
          {
            word: "Students",
          },
        ],
      },
      icon: "bi bi-calendar-check",
    },
    {
      name: {
        heading: "Add",
        sub_names: [
          {
            word: "Student",
          },
          {
            word: "Staff",
          },
          {
            word: "Salaries",
          },
          {
            word: "Fee ",
          },
          {
            word: "Expanses",
          },
          {
            word: "Events",
          },
          {
            word: "Notifications",
          },
          // {
          //   word: "Laboratory",
          // },
          // {
          //   word: "Library",
          // },
          // {
          //   word: "Sports ",
          // },
        ],
      },
      icon : "bi bi-plus-square"
    },
    {
      name: {
        heading: "Cards",
        sub_names: [
          {
            word: "Report Cards",
          },
          {
            word: "Hall Tickets",
          },
        ],
      },
      icon: "bi bi-card-list",
    },
    // {
    //   name: {
    //     heading: "Inventory",
    //     sub_names: [
    //       {
    //         word: "Lab records",
    //       },
    //       {
    //         word: "Library records",
    //       },
    //       {
    //         word: "Sports related",
    //       },
    //       {
    //         word: "Others",
    //       },
    //     ],
    //   },
    // },
    {
      name: "Search",
      icon: "bi bi-search",
    },
    {
      name: "Dashboard",
      icon: "bi bi-command",
    },
    {
      name: "Profile",
      icon: "bi bi-person-circle",
    },
    {
      name: "Log-out",
      condition: true,
    },
  ];
  const mapping = routes.map((route, id) => {
    const navigator = useNavigate();

    return (
      <>
        {route.name.sub_names ? (
          <>
            <li className="nav-item dropdown" key={id}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className={`${route.icon} me-2`}></i>
                <span> {route.name.heading}</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  {route.name.sub_names.map((data) => {
                    return (
                      <>
                        <Link
                          className="dropdown-item"
                          to={`/${route.name.heading.toLowerCase()}/${data.word
                            .toLowerCase()
                            .replace(/\s/g, "")}`}
                        >
                          {data.word}
                        </Link>
                      </>
                    );
                  })}
                </li>
              </ul>
            </li>
          </>
        ) : (
          <li className="nav-item" key={id}>
            <Link
              className={
                route.name === "Log-out" ? "btn btn-outline-light" : "nav-link"
              }
              to={
                route.name === "Profile"
                  ? `/profile/management`
                  : route.name === "Dashboard"
                  ? `/dashboard/feemanagement`
                  : `/${route.name.toLowerCase()}`
              }
              onClick={() => {
                route.condition
                  ? (localStorage.removeItem("authToken"),
                    navigator("/"),
                    window.location.reload(false))
                  : null;
              }}
            >
              {route.name !== "Log-out" && (
                <i className={route.icon + " " + "me-2"}></i>
              )}
              <span>{route.name}</span>
            </Link>
          </li>
        )}
      </>
    );
  });
  return mapping;
};

export const staffNavbarRoutes = () => {
  const routes = [
    {
      name: "Search",
      icon: "bi bi-search",
    },
    {
      name: {
        heading: "Attendance",
        sub_names: [
          {
            word: "Students",
          },
        ],
      },
      icon : "bi bi-calendar-check"
    },
    {
      name: {
        heading: "Add",
        sub_names: [
          {
            word: "Student",
          },
          {
            word: "Halltickets",
          },
          {
            word: "Reportcards",
          },
        ],
      },
      icon : "bi bi-plus-square"
    },
    {
      name: {
        heading: "Cards",
        sub_names: [
          {
            word: "Report Cards",
          },
          {
            word: "Hall Tickets",
          },
        ],
      },
      icon: "bi bi-card-list",
    },
    {
      name: "Profile",
      icon: "bi bi-person-circle",
    },
    {
      name: "Log-out",
      condition: true,
    },
  ];
  const mapping = routes.map((route, id) => {
    const navigator = useNavigate();
    return (
      <>
        {route.name.sub_names ? (
          <>
            <li className="nav-item dropdown" key={id}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className={`${route.icon} me-2`}></i>
                <span> {route.name.heading}</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  {route.name.sub_names.map((data) => {
                    return (
                      <>
                        <Link
                          className="dropdown-item"
                          to={`/${route.name.heading.toLowerCase()}/${data.word
                            .toLowerCase()
                            .replace(/\s/g, "")}`}
                        >
                          {data.word}
                        </Link>
                      </>
                    );
                  })}
                </li>
              </ul>
            </li>
          </>
        ) : (
          <li className="nav-item" key={id}>
            <Link
              className={
                route.name === "Log-out" ? "btn btn-outline-light" : "nav-link"
              }
              to={
                route.name === "Profile"
                  ? `/search/staff/1234`
                  : `/${route.name.toLowerCase()}`
              }
              onClick={() => {
                route.condition
                  ? (localStorage.removeItem("authToken"),
                    navigator("/"),
                    window.location.reload(false))
                  : null;
              }}
            >
              {route.name !== "Log-out" && (
                <i className={route.icon + " " + "me-2"}></i>
              )}
              <span>{route.name}</span>
            </Link>
          </li>
        )}
      </>
    );
  });
  return mapping;
};

export const studentNavbarRoutes = () => {
  const studentId = localStorage.getItem("authToken");

  const routes = [
    {
      name: {
        heading: "Cards",

        sub_names: [
          {
            word: "Report Cards",
          },
          {
            word: "Hall Tickets",
          },
        ],
      },
      icon: "bi bi-card-list",
    },
    // {
    //   name: "Results",
    //   icon: "bi bi-sliders",
    // },
    {
      name: "Attendance",
      icon: "bi bi-calendar-check",
    },
    // {
    //   name: "Reports",
    //   icon: "bi bi-sliders",
    // },
    {
      name: "Profile",
      icon: "bi bi-person-circle",
    },
    {
      name: "Log-out",
      condition: true,
    },
  ];
  const mapping = routes.map((route, id) => {
    return (
      <>
        {route.name.sub_names ? (
          <>
            <li className="nav-item dropdown" key={id}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className={`${route.icon} me-2`}></i>
                <span> {route.name.heading}</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  {route.name.sub_names.map((data) => {
                    return (
                      <>
                        <Link
                          className="dropdown-item"
                          to={`/${route.name.heading.toLowerCase()}/${data.word
                            .toLowerCase()
                            .replace(/\s/g, "")}`}
                        >
                          {data.word}
                        </Link>
                      </>
                    );
                  })}
                </li>
              </ul>
            </li>
          </>
        ) : (
          <li className="nav-item" key={id}>
            <Link
              className={
                route.name === "Log-out" ? "btn btn-outline-light" : "nav-link"
              }
              to={
                route.name === "Profile"
                  ? `/search/student/${studentId}`
                  : route.name === "Attendance"
                  ? `/${route.name.toLowerCase()}/student/show`
                  : `/${route.name.toLowerCase().replace(/\s/g, "")}`
              }
              onClick={() => {
                route.condition
                  ? (localStorage.removeItem("authToken"),
                    navigator("/"),
                    window.location.reload(false))
                  : null;
              }}
            >
              {route.name !== "Log-out" && (
                <i className={route.icon + " " + "me-2"}></i>
              )}
              <span>{route.name}</span>
            </Link>
          </li>
        )}
      </>
    );
  });
  return mapping;
};
