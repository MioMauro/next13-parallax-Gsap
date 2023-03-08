import Gallery from '../components/Gallery';
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className=" w-screen h-screen bg-gray-500 flex items-center justify-center  text-white text-7xl">
        <p className="animate-bounce">move the wheel &#59;&#41;</p>
      </div>
      <Gallery />
      <div className="w-screen h-screen bg-gray-500 flex items-center justify-center text-white text-7xl">
        <p className="animate-bounce">end landing page &#59;&#41;</p>
      </div>{' '}
    </div>
  );
}