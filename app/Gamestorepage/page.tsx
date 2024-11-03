import Gameinfo from "@/components/gameinfo";

export default function Gameinfopage() {
  return (
    <main className="bg-night">
      <div className="w-[996px]">
        <div className="gap-x-4 gap-y-6 grid grid-cols-5 pt-2 w-full h-full">
          <div className="col-span-3 bg-[#FAF8E7] p-4 rounded-2xl ]">2</div>
          <div className="col-span-2 bg-opnig rounded-2xl">
            <Gameinfo />
          </div>
          <div className="col-span-5 bg-[#FAF8E7] rounded-2xl">4</div>
        </div>
      </div>
    </main>
  );
}
