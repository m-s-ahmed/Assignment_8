import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SingleApp from "../signleApp/singleApp";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import RatingChart from "../../Components/RatingsChart/RatingChart";
import Swal from "sweetalert2";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const handleInstall = () => {
    setInstalled(true);
    //alert("You clicked the button!");
    Swal.fire({
      title: "Good job!",
      text: "You successfully installed!",
      icon: "success",
    });
  };

  const { id } = useParams();
  //console.log(typeof id);
  const appId = parseInt(id);
  //console.log(typeof appId);
  const data = useLoaderData();
  console.log(data);
  console.log("type:", typeof data);
  //   //console.log(appId,data);

  if (!Array.isArray(data)) {
    return <p>Data is not an array</p>;
  }

  const app = data.find((item) => item.id === appId);
  //console.log(app);
  const {
    ratings,
    title,
    downloads,
    size,
    ratingAvg,
    image,
    companyName,
    reviews,
    description,
  } = app;

  if (!app) {
    return <p>App not found</p>;
  }

  return (
    <div className="max-w-[1100px] mx-auto p-10 border-2">
      <div className="flex flex-col md:flex-row lg:flex-row gap-20 ">
        <div>
          <img
            className="w-2/3 md:w-full lg:w-full mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>Developed by: {companyName}</p>
          <hr className="my-4   border-gray-500 " />
          <div className="flex gap-10 items-center justify-center">
            <div className="flex flex-col  items-center">
              <FaDownload color="green" size="30" />
              <p>Downloads</p>
              <p>{Math.floor(downloads / 100000)} M</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStar color="orange" size="30" />
              <p>Average Ratings</p>
              <p>{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <MdReviews color="purple" size="30" />
              <p>Total Reviews</p>
              <p>{reviews} k</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className="btn w-full mx-auto btn-success mt-3 text-white font-medium text-lg"
          >
            {installed ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <RatingChart ratings={ratings}></RatingChart>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-justify text-gray-600 leading-relaxed">
          {description} <br />
          <br /> *** This is Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt vel sit natus ut voluptatem quia dicta, animi consequuntur
          placeat distinctio repellendus magni, suscipit ipsa explicabo
          similique eius, nesciunt reiciendis excepturi? Atque nihil amet ipsum
          dolor unde iure sint quia molestias fuga architecto labore quo
          placeat, beatae aperiam maxime, ducimus iste autem voluptatibus porro
          voluptates possimus laudantium. Aperiam earum debitis quia! Dolorem
          culpa qui alias odit obcaecati distinctio odio unde. Sint optio
          aliquam aliquid esse laboriosam? Non iusto rem et iste provident
          blanditiis enim repellat, repudiandae corrupti pariatur voluptates ex
          sed. Ipsa quod ullam repellendus atque minus amet dolores rem, sit
          nobis ipsam distinctio quo.
          <br />
          <br /> Dignissimos quos optio iure earum, deserunt odio saepe nesciunt
          vitae temporibus iste commodi corrupti adipisci consequuntur! Unde
          fuga aliquid doloremque nulla dolore incidunt, magni vitae asperiores.
          Autem praesentium beatae eius a dolor voluptates cupiditate voluptas,
          sunt accusamus quis consequatur consequuntur natus soluta esse
          nostrum. Architecto, atque? Facilis rerum quia totam quibusdam cumque,
          minima laboriosam vero fugit explicabo alias illo ipsam. Illum vero
          vel fugiat repellendus cum accusantium eveniet deserunt a laboriosam.
          <br />
          <br /> Officiis illum perferendis ipsa hic! Deserunt voluptates
          excepturi architecto quos exercitationem provident tempore placeat
          ullam quam magni praesentium nesciunt consequuntur corrupti quo
          aliquam, suscipit molestias! Sed optio eligendi ea, amet debitis cum
          magnam eum veniam. Debitis, unde. Pariatur laudantium possimus quos
          fuga adipisci ab id, minus harum officiis excepturi numquam repellat
          repellendus voluptatibus quod placeat tempora eos? Similique debitis
          praesentium iste nihil sed saepe magni? Cupiditate culpa fugit, modi
          consequatur doloremque vitae maiores tenetur obcaecati aliquam omnis
          repudiandae nostrum repellat. Aut laborum nostrum dicta officiis
          facere, quis quas eos repellendus, ipsa, ut quia sapiente minima.
          Similique, facere tempore minus rem reiciendis laudantium ducimus,
          fugit explicabo sint ullam magni nulla itaque voluptate vitae officia
          praesentium earum exercitationem tenetur harum? Ea nisi officia in
          quam cum dicta.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
