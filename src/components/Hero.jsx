import lightAvatar from "../assets/images/3d-avatar-light.png";
import darkAvatar from "../assets/images/3d-avatar-dark.png";

const Hero = ({ theme }) => {
  return (
    <div className="w-full flex justify-center mt-18 ">
      <div className="border max-w-4xl w-full p-6 flex flex-wrap gap-2 md:gap-6 ">
        <div className=" flex tablet:items-center w-full justify-center sm:flex-col tablet:flex-row ">
          <img
            src={theme ? darkAvatar : lightAvatar}
            alt=""
            className="md:w-35 tablet:w-40"
          />
          <div className="md:text-2xl tablet:text-6xl">
            <h1 className="md:font-bold tablet:font-extrabold">
              Hey, I'm Roni <span>👋</span>
            </h1>
            <h1 className="font-bold"> A Front-End Developer</h1>
          </div>
        </div>
        {/* CTA Section */}
        <div className="flex w-full justify-center">
          <p className="text-lg ">
            Learning <strong>full-stack </strong> one project at a time -
            blending clean <strong>design </strong> with solid functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
