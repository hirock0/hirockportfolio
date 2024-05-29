import Style from "./building.module.css";
import Link from "next/link";
import ProjectCarts from "./webCart/carts";
const websiteBuildField = [
  {
    id: 0,
    field: "Fiverr:-",
    fieldImage: "/Images/fiverr.png",
    fieldDescriptions:
      "Fiverr offers a unique platform where businesses and individuals can easily connect with skilled freelancers to build websites tailored to their needs. With Fiverr, you gain access to a diverse pool of talented web designers, developers, and other professionals who can create custom websites at competitive prices. Whether you're looking for a basic landing page or a complex e-commerce platform, Fiverr provides flexibility, affordability, and convenience in finding the right expertise for your web development projects. Plus, Fiverr's review system and escrow payment process offer added security and peace of mind throughout the project's duration.",
    fieldLink: "https://www.fiverr.com/hirock06?up_rollout=true",
  },
  {
    id: 1,
    field: "UpWork:-",
    fieldImage: "/Images/upwork.png",
    fieldDescriptions:
      "Upwork offers a robust platform for businesses to find skilled freelancers for building websites. With Upwork, you gain access to a vast talent pool of web designers, developers, and other professionals from around the world. The platform provides tools for easy collaboration, communication, and project management, ensuring seamless progress and timely delivery. Upwork's transparent rating system and secure payment options offer peace of mind, while its flexible hiring options allow you to find the perfect match for your website development needs, whether it's a simple landing page or a complex e-commerce site.",
    fieldLink: "https://www.fiverr.com/hirock06?up_rollout=true",
  },
  {
    id: 2,
    field: "Email:-",
    fieldImage: "/Images/email1.png",
    fieldDescriptions:
      "Working with email offers numerous benefits for businesses and individuals alike. Firstly, email provides a direct and cost-effective communication channel, allowing for efficient exchange of information, collaboration, and customer engagement. Additionally, email enables targeted marketing campaigns, personalized communication, and audience segmentation, leading to higher engagement and conversion rates. Moreover, email is accessible across various devices and platforms, ensuring widespread reach and convenience for both senders and recipients. Furthermore, email can be automated and integrated with other systems, streamlining workflows and improving productivity. Overall, leveraging the power of email can enhance communication, foster relationships, and drive business growth in today's digital landscape.",
    fieldEmail: "hirockdutta0@gmail.com",
    fieldLink: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    id: 3,
    field: "Facebook:-",
    fieldImage: "/Images/facebook.png",
    fieldDescriptions:
      "Working with email offers numerous benefits for businesses and individuals alike. Firstly, email provides a direct and cost-effective communication channel, allowing for efficient exchange of information, collaboration, and customer engagement. Additionally, email enables targeted marketing campaigns, personalized communication, and audience segmentation, leading to higher engagement and conversion rates. Moreover, email is accessible across various devices and platforms, ensuring widespread reach and convenience for both senders and recipients. Furthermore, email can be automated and integrated with other systems, streamlining workflows and improving productivity. Overall, leveraging the power of email can enhance communication, foster relationships, and drive business growth in today's digital landscape.",
    fieldLink: "https://www.facebook.com/profile.php?id=100028605347325",
  },
];

export default function BuildingWebsite() {
  return (
    <main id={Style.main} className=" pt-32 pb-20">
      <div className=" pr-10 pl-10 max-sm:pr-5 max-sm:pl-5">
        <h1 className=" text-center underline underline-offset-8 text-2xl font-semibold ">
          You can build your website with
        </h1>

        <div>
          {websiteBuildField.map((item: any, index: any) => (
            <ProjectCarts item={item} key={index} />
          ))}
        </div>
        {/* top_part-end */}

        {/* other_part_start */}
        <div className=" mt-5">
          <div className=" flex flex-col items-center">
            <h1 className=" text-center ">Others:</h1>
            <ul className=" list-inside list-disc mt-5">
              <Link href={""}>
                <li>Kwork.com</li>
              </Link>
              <Link href={""}>
                <li>PeopleperHour</li>
              </Link>
              <Link href={""}>
                <li>GURU.com</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* other_part_end */}
      </div>
    </main>
  );
}
