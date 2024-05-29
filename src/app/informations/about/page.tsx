"use client";
import Style from "./about.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Samples from "./work_sample/sample";
export default function About() {
  const [Data, setData] = useState([]);
  const onProjects = async () => {
    const fetchData = await axios.get("/pages/api/about_page_samples");
    const data = fetchData.data.allAboutPageSamples;
    setData(data);
  };

  useEffect(() => {
    onProjects();
  }, []);

  return (
    <main id={Style.main} className=" pt-24 text-black">
      <div>
        <div id={Style.banner} className=" relatives h-52"></div>
        <div className=" pl-10 pr-10 max-sm:pl-5 max-sm:pr-5 pb-20">
          <h1 className=" text-center underline underline-offset-4 font-semibold text-xl pt-5">
            About Us
          </h1>
          <p className=" max-sm:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            odio fugit qui. Odit sint quisquam explicabo deserunt at nihil
            reprehenderit corporis, ducimus suscipit ipsum. Quia voluptatum
            voluptatem in alias vel! Eligendi quos explicabo ex veritatis ad
            assumenda reprehenderit sint neque obcaecati tempora iusto ducimus
            minima labore natus molestias perferendis amet mollitia
            exercitationem, vero error nemo maxime saepe? Aut, distinctio
            tempore. Voluptatum, quae incidunt aliquid rem praesentium sequi
            neque ad dignissimos quod ullam veritatis consequuntur? Dolorem, quo
            dolor dignissimos corrupti suscipit maiores. Recusandae, aperiam.
            Cupiditate quisquam praesentium labore ipsum perspiciatis quod?
            Nulla recusandae ut expedita mollitia velit illum sunt, ipsa
            molestiae! Dicta nam perferendis temporibus optio, quasi impedit
            numquam facilis neque suscipit rerum quas sapiente, quia ut rem
            obcaecati possimus adipisci. Doloremque ea eligendi beatae
            cupiditate porro veritatis, eius accusantium laborum, minima, natus
            error ratione voluptate odit. Maiores commodi delectus laboriosam!
            Aut optio reprehenderit unde, dolore hic amet nesciunt dicta magni.
          </p>

          <div className=" mt-5 flex flex-col justify-between bg-slate-600 text-white rounded-sm   pb-5 pr-5 pl-5">
            <h1
              className={
                " text-center text-xl underline underline-offset-4 pb-5 pt-5"
              }
            >
              Our Works Sample
            </h1>
            {Data.length == 0 ? (
              <h1>Loading...</h1>
            ) : (
              Data.map((item: any, index: any) => (
                <Samples item={item} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
