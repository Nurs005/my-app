'use client'
import Image from "next/image";
import Header from "./component/Header";
import InputAddress from "./component/InputAddress";
import CircleSVG from "./component/CircleSVG";
import RaitingHook from './component/hooks/raitingHook'
import WichProtocol from "./component/WichProtocol";
export default function Home() {
  return (
    <body>
      <main>
        <div>
          <Header />
          <RaitingHook>
            <InputAddress />
            <CircleSVG />
            <WichProtocol />
          </RaitingHook>

        </div>
      </main>
    </body>
  );
}
