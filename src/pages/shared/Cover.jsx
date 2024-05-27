import { Parallax } from 'react-parallax';

const Cover = ({img, title, description }) => {

   
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className="hero min-h-[60vh] mb-12 opacity-50 px-56 py-40"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5 uppercase">
           {description}
          </p>
         
        </div>
      </div>
    </div>
</Parallax>
    
  );
};

export default Cover;
