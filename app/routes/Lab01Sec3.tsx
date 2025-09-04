import Header from "./components/Header";
import Footer from "./components/Footer";
export default function MyExamProject(){

  const myPage ="TCG SHOP";
    const myName ="Ratthanun Rukkarn";
    const myStudID ="026730491008-1";
    const myExamProject =[
    {
    Code: 1,
    Title: "Cardfight Vanguard",
    Description: "CD Booster Set 05-2",
    Logo: "/images/D-BT05-2.png",
    Category: 1,
    Price: 150,
    Owner: "Bushiroad",
    Website: "https://www.thaivanguard.net/",
    Top10: true
    },
    {
    Code: 2,
    Title: "YUGIOH",
    Description: "Duelist's Advance",
    Logo: "/images/DUAD_550.png",
    Category: 1,
    Price: 70,
    Owner: "Bushiroad",
    Website: "https://www.yugioh-card.com/en/",
    Top10: false
    },
    {
    Code: 3,
    Title: "BuddyFight",
    Description: "BFN-BT03",
    Logo: "/images/BFN-BT03.png",
    Category: 1,
    Price: 190,
    Owner: "Bushiroad",
    Website: "https://thaibuddyfight.com/",
    Top10: true
    },
    {
    tCode: 4,
    Title: "Battle Spirits",
    Description: "DBD-2-1",
    Logo: "/images/DBD-2-1.png",
    Category: 1,
    Price: 200,
    Owner: "Bandai",
    Website: "https://www.battlespirits.com/",
    Top10: false
    },
    {
    Code: 5,
    Title: "UNO",
    Description: "Uno No Mercy",
    Logo: "/images/UNO_No_Mercy.png",
    Category: 1,
    Price: 300,
    Owner: "Mattel",
    Website: "https://shop.mattel.com/collections/uno",
    Top10: true
    }
];

    const examProj = myExamProject.map((tpObj, index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300">
    <div className="w-32 p-1">
    <img src={tpObj.Logo} className="w-full rounded-full" title={tpObj.Description+" ID: " +tpObj.Code} />
    </div>
    <div className="p-4 col-span-3 mb-auto">
    <h2 className="text-lg font-semibold text-gray-800">{tpObj.Description}</h2>
    <p className="text-gray-600 text-sm mt-2">{tpObj.Title}</p>
    <p className="text-gray-600 text-sm mt-2">{tpObj.Category}</p>
    <p className="text-gray-600 text-sm mt-2">{tpObj.Price}</p>
    <p className="text-gray-600 text-sm mt-2">{tpObj.Owner}</p>

    </div>
    <div className="p-4 mb-auto">
    <a href={tpObj.Website} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
    </div>
    </div>
    );
    return (
        <>
      <Header title={myPage}/>  
      <p className="text-xl m-3 text-center">
        Name: {myName} Student ID: ({myStudID})
      </p>
      <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border border-gray-300">
      {examProj}
      </div>
      <Footer title="2025 Ratthanun Rukkarn. All Right Reserved." />
        </>
    );
}