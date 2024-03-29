import React from "react";

const FilterNavRestro = ({ factlist }) => {
  const data = factlist;
  // return false
  return (
    <div className="container-fluid">
      <div className="sc-kOPcWz dedXvX">
        <div className="sc-cWSHoV dEoCtT">
          <h2 className="sc-aXZVg bwoZPF title">
             Restaurants with online food delivery in Indore
          </h2>
          <div className="sc-aXZVg kdMXvo"></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="VmIce">
            <div className="contents">
              <div className="sc-aXZVg  uxlfx">Filter</div>
              <div className="restrorentfilter">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3996 5.99897C13.3996 6.66172 12.8623 7.19897 12.1996 7.19897C11.5368 7.19897 10.9996 6.66172 10.9996 5.99897C10.9996 5.33623 11.5368 4.79897 12.1996 4.79897C12.8623 4.79897 13.3996 5.33623 13.3996 5.99897ZM14.9996 5.99897C14.9996 7.54537 13.746 8.79897 12.1996 8.79897C10.9311 8.79897 9.85962 7.95547 9.51546 6.79878L1.80875 6.79878C1.36692 6.79878 1.00875 6.44061 1.00875 5.99878C1.00875 5.55695 1.36692 5.19878 1.80875 5.19878L9.51558 5.19878C9.85986 4.04228 10.9312 3.19897 12.1996 3.19897C13.746 3.19897 14.9996 4.45258 14.9996 5.99897ZM3.8 13.4527C3.13726 13.4527 2.6 12.9154 2.6 12.2527C2.6 11.59 3.13726 11.0527 3.8 11.0527C4.46274 11.0527 5 11.59 5 12.2527C5 12.9154 4.46274 13.4527 3.8 13.4527ZM3.8 15.0527C2.2536 15.0527 1 13.7991 1 12.2527C1 10.7063 2.2536 9.45271 3.8 9.45271C5.0683 9.45271 6.13964 10.296 6.48396 11.4524H14.1953C14.6372 11.4524 14.9953 11.8106 14.9953 12.2524C14.9953 12.6942 14.6372 13.0524 14.1953 13.0524H6.48414C6.14001 14.2092 5.06852 15.0527 3.8 15.0527Z"
                    fill="rgba(2, 6, 12, 0.92)"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {data?.map((d, i) => (
            <>
              <div key={d.id} className="filterNav">
                <div className="VmIce">
                  <div className="contents">
                    <div className="sc-aXZVg  uxlfx">{d.label}</div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterNavRestro;
