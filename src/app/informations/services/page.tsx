
export default function Services() {
  return (
    <main className=" bg-cyan-600 text-white pt-24">
      <div className=" relative bg-green-400  h-96">
        <video
          src="/videos/service-banner-2.mp4"
          playsInline
          autoPlay
          muted
          loop
          className=" object-cover h-full w-full"
        />
        <div className=" absolute w-full top-1/2">
          <h1 className=" text-center text-3xl font-semibold">
            WELCOME TO OUR SERVICES
          </h1>
        </div>
        <div className=" absolute top-0 h-full pr-5 pl-5 ">
          <p></p>
        </div>
      </div>
      <div className=" mt-5 pb-20">
        <h1 className=" text-center text-xl underline underline-offset-4">
          Services
        </h1>
        <p className=" max-sm:text-xs p-5">
          "Welcome to our all-inclusive web development suite, where innovation
          meets functionality. Our service offering spans a rich spectrum of
          technologies tailored to elevate your digital presence. At the core of
          our stack lies Next.js, empowering lightning-fast rendering and
          seamless client-side navigation, ensuring optimal performance and user
          engagement. Leveraging the power of MongoDB, we provide scalable and
          robust database solutions, enabling you to manage data efficiently and
          securely, regardless of your application's scale. With Redux, we
          ensure state management is a breeze, maintaining application-wide
          coherence and facilitating seamless interaction between components.
          But we don't stop there. Our team of experts excels in crafting
          visually stunning user interfaces with HTML, CSS, and the modern
          utility-first approach of Tailwind CSS. Whether it's crafting bespoke
          designs or adhering to your brand guidelines, we ensure your web
          presence is not only functional but also aesthetically captivating.
          With our comprehensive suite of services, we empower you to unlock the
          full potential of your web applications, delivering exceptional user
          experiences and driving tangible results for your business. Partner
          with us today to embark on a journey of digital transformation and
          success."
        </p>

        <h1 className=" mt-5 underline underline-offset-4 text-center text-xl">
          Website Categories
        </h1>
        <div className="  flex flex-col items-center">
          <ul className=" list-inside list-disc mt-2">
            <li>Commercial</li>
            <li>Educational</li>
            <li>Media</li>
            <li>News</li>
            <li>Other</li>
          </ul>
          <p className=" max-sm:text-xs p-5">
            Unlocking the Future of Web Development with Next.js, MongoDB, HTML,
            CSS, and Redux Experience the pinnacle of modern web development
            with our suite of products leveraging the power of Next.js, MongoDB,
            HTML, CSS, and Redux. Seamlessly blending cutting-edge technology
            with intuitive design, our products redefine the possibilities of
            online experiences. Next.js: Elevating Web Development At the heart
            of our products lies Next.js, the leading React framework for
            building production-grade applications. With its unparalleled
            performance, server-side rendering capabilities, and effortless
            scalability, Next.js ensures lightning-fast load times and a smooth,
            immersive user experience. Whether you're crafting a dynamic web
            application or a static website, Next.js provides the robust
            foundation you need to bring your vision to life. MongoDB:
            Unleashing the Power of Data Fueling our products is MongoDB, the
            industry-leading NoSQL database known for its flexibility,
            scalability, and real-time data capabilities. By harnessing the
            power of MongoDB, our solutions effortlessly handle vast amounts of
            data, empowering you to create dynamic, data-driven applications
            that adapt to the evolving needs of your users. From seamless
            integration with Next.js to effortless scalability, MongoDB
            revolutionizes the way you manage and leverage data in your
            projects. HTML & CSS: Crafting Beautiful, Responsive Designs With
            HTML and CSS, we elevate the visual and interactive elements of our
            products to new heights. From stunning layouts to fluid animations,
            our designs captivate and engage users across every device and
            screen size. With meticulous attention to detail and a focus on
            accessibility and responsiveness, our HTML and CSS creations deliver
            a flawless user experience that delights and inspires. Redux: State
            Management Perfected Powering the state management layer of our
            applications is Redux, the go-to solution for managing complex
            application state with ease. By centralizing your application's
            state and enabling predictable data flow, Redux simplifies
            development, enhances maintainability, and ensures a seamless user
            experience. Whether you're handling user authentication, managing
            form data, or orchestrating complex UI interactions, Redux provides
            the tools you need to build robust, scalable applications that
            exceed expectations. Experience the Difference From dynamic web
            applications to stunning static sites, our products embody the
            future of web development. With Next.js, MongoDB, HTML, CSS, and
            Redux at the core, we deliver unparalleled performance, scalability,
            and user experience. Elevate your projects to new heights and unlock
            the full potential of the web with our suite of innovative
            solutions.
          </p>
        </div>
      </div>
    </main>
  );
}
