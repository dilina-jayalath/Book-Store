import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import axios from "axios";
// import { paginationItems } from "../../../constants";s


const Phones = (props) => {

  const [books, setBooks] = useState([]);  // Change initial state to an empty array

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${props.name}`
        );
        setBooks(res.data.items); // Set books to the items array from the response
        console.log("Books fetched successfully:", res.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  return (
    <div className="w-full pb-16 p-5">
      <Heading heading={props.name} />
      <Slider {...settings}>
      {books.map((item) => (
          <div key={item.id} className="w-full">
            
            <Product
              _id={item.id}
              img={item.volumeInfo.imageLinks.thumbnail}
              productName={item.volumeInfo.title}
              price={100}
              publisher={item.volumeInfo.publisher}
              des={item.volumeInfo.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Phones;
