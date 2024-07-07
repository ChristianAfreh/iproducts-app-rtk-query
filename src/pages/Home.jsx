import React from "react";
import styles from "../styles/Home.module.css";
import bgImage from "../assets/photos/glasses-beauty-supplies-near-keyboard.jpg";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className="bg-hero-pattern bg-cover bg-center h-[38rem] sticky">
        <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded-md h-full">
          <h1 className="text-5xl md:text-6xl font-bold mt-10 mb-6">
            Welcome to your <span className="text-[#0047AB]"> No.1 </span>{" "}
            e-commerce platform
          </h1>
          <p className="text-lg italic  md:text-2xl mb-[16rem]">
            The right place to get all your necessary products...from basic
            items to luxurious ones
          </p>
          <a
            href="#learn-more"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </section>
      <section className="mt-5">
        <p className="mx-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          beatae quam possimus, ea quibusdam eum, impedit cum, blanditiis ab
          neque quo reiciendis consectetur? Beatae sunt ab saepe perspiciatis
          voluptatem. Sed aliquam obcaecati sequi assumenda totam eaque, tempora
          temporibus provident velit, quam suscipit ea tempore, dolorem cumque
          blanditiis! Odio, excepturi nobis!
        </p>
        <p className="mx-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          beatae quam possimus, ea quibusdam eum, impedit cum, blanditiis ab
          neque quo reiciendis consectetur? Beatae sunt ab saepe perspiciatis
          voluptatem. Sed aliquam obcaecati sequi assumenda totam eaque, tempora
          temporibus provident velit, quam suscipit ea tempore, dolorem cumque
          blanditiis! Odio, excepturi nobis! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Consequatur tempora velit a corporis
          quaerat, autem voluptates veniam esse delectus sunt reiciendis
          voluptas repudiandae natus officia ipsum sapiente nulla minus
          consequuntur molestias quam dignissimos possimus dicta. Blanditiis
          culpa, voluptas tempore aperiam quam rem. Quisquam minima tempore
          pariatur vel, inventore itaque libero sequi hic sed autem fugiat!
          Ipsam repudiandae voluptates esse ratione. Debitis et corrupti
          obcaecati, cum numquam ut corporis. Natus doloribus quod, fugit minima
          laborum et in corrupti possimus, earum id explicabo ullam quas rerum
          similique ipsa provident cupiditate qui dolorum officiis? Distinctio
          ducimus quasi quas suscipit ipsum aliquid recusandae nesciunt.
        </p>
        <p className="mx-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          beatae quam possimus, ea quibusdam eum, impedit cum, blanditiis ab
          neque quo reiciendis consectetur? Beatae sunt ab saepe perspiciatis
          voluptatem. Sed aliquam obcaecati sequi assumenda totam eaque, tempora
          temporibus provident velit, quam suscipit ea tempore, dolorem cumque
          blanditiis! Odio, excepturi nobis! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Consequatur tempora velit a corporis
          quaerat, autem voluptates veniam esse delectus sunt reiciendis
          voluptas repudiandae natus officia ipsum sapiente nulla minus
          consequuntur molestias quam dignissimos possimus dicta. Blanditiis
          culpa, voluptas tempore aperiam quam rem. Quisquam minima tempore
          pariatur vel, inventore itaque libero sequi hic sed autem fugiat!
          Ipsam repudiandae voluptates esse ratione. Debitis et corrupti
          obcaecati, cum numquam ut corporis. Natus doloribus quod, fugit minima
          laborum et in corrupti possimus, earum id explicabo ullam quas rerum
          similique ipsa provident cupiditate qui dolorum officiis? Distinctio
          ducimus quasi quas suscipit ipsum aliquid recusandae nesciunt.
        </p>
        <p className="mx-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          beatae quam possimus, ea quibusdam eum, impedit cum, blanditiis ab
          neque quo reiciendis consectetur? Beatae sunt ab saepe perspiciatis
          voluptatem. Sed aliquam obcaecati sequi assumenda totam eaque, tempora
          temporibus provident velit, quam suscipit ea tempore, dolorem cumque
          blanditiis! Odio, excepturi nobis! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Consequatur tempora velit a corporis
          quaerat, autem voluptates veniam esse delectus sunt reiciendis
          voluptas repudiandae natus officia ipsum sapiente nulla minus
          consequuntur molestias quam dignissimos possimus dicta. Blanditiis
          culpa, voluptas tempore aperiam quam rem. Quisquam minima tempore
          pariatur vel, inventore itaque libero sequi hic sed autem fugiat!
          Ipsam repudiandae voluptates esse ratione. Debitis et corrupti
          obcaecati, cum numquam ut corporis. Natus doloribus quod, fugit minima
          laborum et in corrupti possimus, earum id explicabo ullam quas rerum
          similique ipsa provident cupiditate qui dolorum officiis? Distinctio
          ducimus quasi quas suscipit ipsum aliquid recusandae nesciunt.
        </p>
      </section>
    </div>
  );
};

export default Home;
