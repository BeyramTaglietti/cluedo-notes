import type { V2_MetaFunction } from "@remix-run/node";

import { useImmer } from "use-immer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Cluedo Notes" },
    {
      name: "description",
      content:
        "This website allows you to insert your cluedo notes digitally to avoid looking for a piece of paper and a pen every time you want to play",
    },
  ];
};

enum KILLER_NAMES {
  MUSTARD = "Jack Mustard",
  PLUMM = "Victor Plumm",
  GREEN = "Jacob Green",
  PEACOCK = "Elenor peacock",
  SCARLET = "Kassandra scarlet",
  WHITE = "Diane white",
}

enum WEAPON_NAMES {
  COLTELLO = "Coltello",
  CANDELIERE = "Candeliere",
  PISTOLA = "Pistola",
  VELENO = "Veleno",
  TROFEO = "Trofeo",
  CORDA = "Corda",
  MAZZA = "Mazza da baseball",
  ASCIA = "Ascia",
  MANUBRIO = "Manubrio",
}

enum ROOM_NAMES {
  INGRESSO = "Ingresso",
  PRANZO = "Sala da pranzo",
  CUCINA = "Cucina",
  TERRAZZA = "Terrazza",
  OSSERVATORIO = "Osservatorio",
  THEATRE = "Sala home theatre",
  SOGGIORNO = "Soggiorno",
  SPA = "SPA",
  DEPENDANCE = "Dependance",
}

interface BUTTON {
  notes?: string;
  value?: boolean;
}

const defaultValue = { notes: "", value: false };

const defaultButtons: {
  Personaggi: { [name in KILLER_NAMES]: BUTTON };
  Armi: { [name in WEAPON_NAMES]: BUTTON };
  Stanze: { [name in ROOM_NAMES]: BUTTON };
} = {
  Personaggi: {
    [KILLER_NAMES.MUSTARD]: defaultValue,
    [KILLER_NAMES.GREEN]: defaultValue,
    [KILLER_NAMES.PEACOCK]: defaultValue,
    [KILLER_NAMES.WHITE]: defaultValue,
    [KILLER_NAMES.PLUMM]: defaultValue,
    [KILLER_NAMES.SCARLET]: defaultValue,
  },
  Armi: {
    [WEAPON_NAMES.ASCIA]: defaultValue,
    [WEAPON_NAMES.CANDELIERE]: defaultValue,
    [WEAPON_NAMES.COLTELLO]: defaultValue,
    [WEAPON_NAMES.CORDA]: defaultValue,
    [WEAPON_NAMES.MANUBRIO]: defaultValue,
    [WEAPON_NAMES.MAZZA]: defaultValue,
    [WEAPON_NAMES.PISTOLA]: defaultValue,
    [WEAPON_NAMES.TROFEO]: defaultValue,
    [WEAPON_NAMES.VELENO]: defaultValue,
  },
  Stanze: {
    [ROOM_NAMES.CUCINA]: defaultValue,
    [ROOM_NAMES.DEPENDANCE]: defaultValue,
    [ROOM_NAMES.INGRESSO]: defaultValue,
    [ROOM_NAMES.OSSERVATORIO]: defaultValue,
    [ROOM_NAMES.PRANZO]: defaultValue,
    [ROOM_NAMES.SOGGIORNO]: defaultValue,
    [ROOM_NAMES.SPA]: defaultValue,
    [ROOM_NAMES.TERRAZZA]: defaultValue,
    [ROOM_NAMES.THEATRE]: defaultValue,
  },
};

export default function Index() {
  const [buttons, setButtons] = useImmer(defaultButtons);

  return (
    <div className="p-2 bg-black">
      <h1 className="text-3xl text-center py-4 font-bold text-white">
        Cluedo Digital Notes
      </h1>
      <div className="flex flex-col gap-4">
        {Object.entries(buttons).map(([section, sectionValue]) => (
          <div key={section} className="rounded-lg p-3 bg-primary">
            <h4 className="text-2xl font-bold pb-4 text-white">{section}</h4>
            <div className="flex flex-col gap-2 items-start w-full">
              {Object.entries(sectionValue).map(([key, { notes, value }]) => (
                <div key={key} className="flex gap-4 justify-between w-full">
                  <button
                    className={`${
                      value ? "bg-[#EC7505]" : "bg-[#FFF8F0] text-black"
                    } rounded p-2 text-white`}
                    onClick={() => {
                      setButtons((draft: any) => {
                        draft[section][key].value = !value;
                      });
                    }}
                  >
                    {key}
                  </button>
                  <input
                    className="rounded py-1 pl-2 focus:outline-none w-1/2"
                    type="text"
                    value={notes}
                    onChange={(e) => {
                      setButtons((draft: any) => {
                        draft[section][key].notes = e.target.value;
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="rounded-lg p-3 bg-primary">
          <h4 className="text-2xl font-bold pb-4 text-white">
            Note aggiuntive
          </h4>
          <textarea className="rounded focus:outline-none py-1 pl-2 w-full h-56" />
        </div>
      </div>
    </div>
  );
}
