import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="font-bold text-4xl text-emerald-500 font-mono flex flex-wrap items-center bg-white rounded-xl overflow-hidden lg:w-[40%] md:w-[60%] w-[100%] text-center">
      {/* Large screen text */}
      <div className="w-[40%] hidden sm:block">ZER0.D0T</div>
      {/* Small screen text */}
      <div className="w-[40%] block sm:hidden">0.</div>
      <div className="w-[60%] text-2xl text-white bg-emerald-500 font-normal p-2">
        Inventory Dashboard
      </div>
    </Link>
  );
};

export default Logo;