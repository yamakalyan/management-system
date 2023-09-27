import { Link } from "react-router-dom";

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
      // name: {
      //   heading: "Faculty",
      //   icon: "bi bi-microsoft-teams",
      //   sub_names: [
      //     {
      //       word: "Faculty Members",
      //     },
      //     {
      //       word: "Departments",
      //     },
      //   ],
      // },
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
    },
    // {
    //   name: "Fee-management",
    //   icon: "bi bi-wrench-adjustable-circle",
    // },
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
          {
            word: "Others",
          },
        ],
      },
    },
    {
      name: {
        heading: "Add",
        sub_names: [
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
          {
            word: "Laboratory",
          },
          {
            word: "Library",
          },
          {
            word: "Sports ",
          },
        ],
      },
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
      name: "Dashboard",
      icon: "bi bi-tag-fill",
    },
    {
      name: "Profile",
      icon: "bi bi-person-lines-fill",
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
                <i className="bi bi-people-fill me-2"></i>
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
                  ? `/dashboard/management`
                  : `/${route.name.toLowerCase()}`
              }
              onClick={() => {
                route.condition
                  ? (localStorage.removeItem("authToken"),
                    window.location.href("/"),
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
      name: "Home",
      icon: "bi bi-person-bounding-box",
    },
    {
      name: "Student",
      icon: "bi bi-wrench-adjustable-circle",
    },
    {
      name: "Analysits",
      icon: "bi bi-sliders",
    },
    {
      name: "Dashboard",
      icon: "bi bi-tag-fill",
    },
    {
      name: "Profile",
      icon: "bi bi-person-lines-fill",
    },
    {
      name: "Log-out",
      condition: true,
    },
  ];
  const mapping = routes.map((route, id) => {
    return (
      <>
        <li className="nav-item" key={id}>
          <Link
            className={
              route.name === "Log-out" ? "btn btn-outline-light" : "nav-link"
            }
            to={
              route.name === "Profile"
                ? `/profile/staff`
                : route.name === "Dashboard"
                ? `/dashboard/staff`
                : `/${route.name.toLowerCase()}`
            }
            onClick={() => {
              route.condition
                ? (localStorage.removeItem("authToken"),
                  window.location.href("/"),
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
      </>
    );
  });
  return mapping;
};

export const studentNavbarRoutes = () => {
  const routes = [
    {
      name: "Home",
      icon: "bi bi-person-bounding-box",
    },
    {
      name: "Books",
      icon: "bi bi-sliders",
    },
    {
      name: "Results",
      icon: "bi bi-sliders",
    },
    {
      name: "Tasks",
      icon: "bi bi-sliders",
    },
    {
      name: "Dashboard",
      icon: "bi bi-tag-fill",
    },
    {
      name: "Profile",
      icon: "bi bi-person-lines-fill",
    },
    {
      name: "Log-out",
      condition: true,
    },
  ];
  const mapping = routes.map((route, id) => {
    return (
      <>
        <li className="nav-item" key={id}>
          <Link
            className={
              route.name === "Log-out" ? "btn btn-outline-light" : "nav-link"
            }
            to={
              route.name === "Profile"
                ? `/profile/student`
                : route.name === "Dashboard"
                ? `/dashboard/student`
                : route.condition
                ? ""
                : `/${route.name.toLowerCase()}`
            }
            onClick={() => {
              route.condition
                ? (localStorage.removeItem("authToken"),
                  window.location.href("/"),
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
      </>
    );
  });
  return mapping;
};
