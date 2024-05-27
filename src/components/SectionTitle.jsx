

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, SubHeading}) => {
    return (
        <div className=" mx-auto md:w-3/12 text-center my-8">
            <p className="text-yellow-500 mb-3">{SubHeading}</p>
            <h1 className="text-3xl uppercase border-y-4 py-4">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;