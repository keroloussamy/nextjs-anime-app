import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <div>
        <Image
          src="./logo.svg"
          alt="logo"
          width="0"
          height="0"
          className="w-full h-auto"
        />
      </div>
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width="0"
          height="0"
          className="w-full h-auto"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width="0"
          height="0"
          className="w-full h-auto"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width="0"
          height="0"
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}

export default Footer;
