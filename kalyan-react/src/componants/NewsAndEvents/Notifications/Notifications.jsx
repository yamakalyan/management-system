const Notifications = () => {
  return (
    <div>
      <div className="container-fluid bg-light">
        <div className="container py-4">
          {/* <div className="mb-3 py-2">
            <h2 className="text-secondary display-5 ">Notifications</h2>
            <hr style={{ width: "50%", borderTop: "4px solid green" }} />
          </div> */}
          <div className="row py-5" data-aos="zoom-out">
            <div className="col-md col-lg my-auto">
              <div className="">
                <h3 className="text-danger fw-normal">Weather Alert:</h3>
                <p className="lead">
                  🌦️ Weather Update: Due to inclement weather, school will be
                  closed today. Stay safe and warm!
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5" data-aos="zoom-out">
            <div className="col-md col-lg my-auto">
              <div className="">
                <h3 className="text-danger fw-normal">
                  Parent-Teacher Meeting:{" "}
                </h3>
                <p className="lead">
                  📣 Parent-Teacher Conferences: Don't forget to schedule your
                  parent-teacher meetings for next week. Your involvement
                  matters!
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5" data-aos="zoom-out">
            <div className="col-md col-lg my-auto">
              <div className="">
                <h3 className="text-danger fw-normal">Exam Schedule: </h3>
                <p className="lead">
                  📝 Midterm Exams: The midterm exam schedule is now available
                  on the school website. Start preparing early!
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5" data-aos="zoom-out">
            <div className="col-md col-lg my-auto">
              <div className="">
                <h3 className="text-danger fw-normal">Sports Day: </h3>
                <p className="lead">
                  🏆 Sports Day: Get ready for a day filled with fun and games
                  on Friday. Wear your sports attire and bring your enthusiasm!
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5" data-aos="zoom-out">
            <div className="col-md col-lg my-auto">
              <div className="">
                <h3 className="text-danger fw-normal">Art Exhibition:</h3>
                <p className="lead">
                  🎨 Art Exhibition: Our talented students' artwork will be on
                  display in the school's art gallery starting Monday. Don't
                  miss it!
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5" data-aos="zoom-out">
            <div className="col-md col-lg my-auto">
              <div className="">
                <h3 className="text-danger fw-normal">Holiday Reminder:</h3>
                <p className="lead">
                  🎉 Upcoming Holiday: School will be closed on Monday for Labor
                  Day. Enjoy your long weekend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
