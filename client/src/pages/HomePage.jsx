const HomePage = () => {
  return (
    <section>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="/form" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                ONLINE Exam Form simulator
              </div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="/signup" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">SIGNUP Form</div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="/login" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">LOGIN Form</div>

              <div className="ag-courses-item_date-box">
                desc:
                <span className="ag-courses-item_date">
                  Authentication via email and password
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>
        Welcome to the Exam simulator web page
      </h1>
    </section>
  );
};

export { HomePage };
