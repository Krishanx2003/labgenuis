import React from 'react'

function Collab() {
    const companyLogos = [
        {
          id: 0,
          path: "/unsplash_logo.png",
        },
        {
          id: 1,
          path: "/notion_logo.png",
        },
        {
          id: 2,
          path: "/intercom_logo.png",
        },
        {
          id: 3,
          path: "/descript_logo.png",
        },
        {
          id: 4,
          path: "/grammerly_logo.png",
        },
      ];
      return (
        <section className="my-[8rem]">
          <div className="text-center text-[2.5rem] font-[700] text-dark">
            More than 25,000 teams use Collabs
          </div>
          <div className="flex mt-[3.81rem]  items-center justify-between flex-wrap gap-4">
            {companyLogos.map((logo) => (
              <div key={logo.id}>
                <img src={logo.path} alt="company logo" />
              </div>
            ))}
          </div>
        </section>
      );
    }

export default Collab