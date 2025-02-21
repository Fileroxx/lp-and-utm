
interface CardProps {
  logo: string;
  logoAlt?: string;
  title: string;
  description: string; 
  borderColor?: string;
}

const Card = ({
  logo,
  logoAlt = "Logo",
  title,
  description,
  borderColor = "border-gray-300",
}: CardProps) => {
  return (
    <div
      className={`flex flex-col items-start p-6 w-[280px] max-sm:w-[100%] h-[300px] bg-[#fafafa] rounded-2xl border ${borderColor} shadow-md`}
    >

      <img src={logo} alt={logoAlt} className="w-10 mb-4" />


      <h3 className="text-lg font-semibold leading-tight">{title}</h3>


      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
