import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsFill4CircleFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Feed(props) {
  const [postImages, setPostImages] = useState([]);

  useEffect(() => {
    const images = props.postData.map(element => {
      let jsonData = JSON.parse(element.json_metadata)
      let image = jsonData.image ? jsonData.image[0] : ""
      return image
    });
    setPostImages(images);
    console.log(images)
  }, [props.postData]);


    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
      <div>
         {
        props.postData.map((post)=>(
          <div key={post.id} className='mb-3  bg-gray-50 py-5 px-3 shadow rounded-2xl'>
          <div className="relative mb-4 flex items-center justify-between gap-x-4">
              <div className='flex items-center'>
         
                  <img src={postImages[3]} alt="" className="h-10 w-10 rounded-full bg-gray-50 mr-3" />
                  <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                      <a href='#' className='text-base'>
                          {post.author}
                      </a>
                      </p>
                      <p className="text-gray-600">{new Date(post.created).toDateString()}</p>
                  </div>
              </div>
              <div>
                  <BsFill4CircleFill size={30}/>
              </div>
          </div>
          <h4 className='text-lg mb-2 font-semibold'>{post.title}</h4>
          <div className='max-w-[1000px] h-[400px] w-full m-auto  px-4 relative group'>
          <div
              style={{ backgroundImage: `url(${postImages[currentIndex]})` }}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex  justify-center py-2 absolute inset-0 top-80'>
              {postImages.map((slide, slideIndex) => (
              <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'
              >
                  <RxDotFilled />
              </div>
              ))}
          </div>
          </div>
          <h4 className='text-lg mt-3 font-semibold border-b border-gray-200 pb-2 truncate'>{post.body}</h4>
      </div>
        ))
       }
      </div>
      );
}
