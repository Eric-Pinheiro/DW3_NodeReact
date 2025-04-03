import Head from "next/head";
import Welcome from "@/components/Welcome";
import User from "@/components/User";
import Parent from "@/components/Parent";
import Description from "@/components/Descriptions";
import Dog from "@/components/Dog";
import Counter from "@/components/Counter";
import Counter2 from "@/components/Couter2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world</h1>
        <Welcome />
        <User />
        <Parent/>
        {/* Chamando o componente e passando os props para ele  */}
<Description name="Diego" age={18}/>
        <Dog name="rex" breed="Doberman"/>
        <br /><br /><br />
        <Counter/>
        <br /><br /><br /><br />
        <Counter2/>
      </main>
    </>
  );
}
