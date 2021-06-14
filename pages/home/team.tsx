import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="px-8 py-20 m-auto max-w-7xl">
      <h2 className="text-4xl font-bold text-blue-gray-800" id="team">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
        <div className="flex flex-row items-center md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/peter-joseph.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">
              Joesph Peter, M.D.
            </h3>
            <h4 className="text-lg font-semibold text-primary-500">
              Founder - Pediatrician
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Dr. Joseph Peter is a pediatrician with over 40 years of
              experience. He
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/john-johnson.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">
              John Johnson, M.D.
            </h3>
            <h4 className="text-lg font-semibold text-primary-500">
              Family Medicine
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/docs-streeter.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">
              Tom Streeter, O.D.
            </h3>
            <h4 className="text-lg font-semibold text-primary-500">
              Optometrist
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/sharlene-cox.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">Sharlene Cox</h3>
            <h4 className="text-lg font-semibold text-primary-500">
              Treasurer
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/bernadine-peter.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">Bernadine Peter</h3>
            <h4 className="text-lg font-semibold text-primary-500">
              Volunteer
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
