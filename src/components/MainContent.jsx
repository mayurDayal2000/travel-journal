import React from "react";
import locationPointer from "../media/locator.svg";

const MainContent = function ({ data }) {
  return (
    <main>
      {data.map(function (items) {
        return (
          <section key={items.id}>
            <img src={items.coverImg} alt="journal cover image" />

            <div className="journal-contents">
              <ul>
                <li>
                  <img src={locationPointer} alt="" />
                  <p>{items.country}</p>
                </li>

                <li>
                  <a href={items.map} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </li>
              </ul>

              <h2>{items.title}</h2>

              <p className="timeline">
                {items["start-date"]} - {items["end-date"]}
              </p>

              <p className="description">{items.description}</p>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default MainContent;
