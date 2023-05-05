import React from "react";
import RecentProducts from "../RecentProducts/RecentProducts";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import PostYourAdd from "../PostYourAdd/PostYourAdd";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <RecentProducts />
      <PostYourAdd />
    </>
  );
};

export default Home;
