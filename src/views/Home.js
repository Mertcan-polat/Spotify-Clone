import React from "react";
import Section from "../components/Sidebar/Section";
function Home() {
  const items = [
    {
      id: 1,
      title: "METALLICA - ONE",
      description: "one of the best sound system in the world",
      image: "https://i.scdn.co/image/ab67706f000000026579fac64591f3aa1360bb06",
    },
    {
      id: 5,
      title: "MOTÖRHEAD - SONIC",
      description: "one of the best sound system in the world",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/nineties/1DFr97A9HnbV3SKTJFu62M/tr/default",
      src: "https://open.spotify.com/embed/track/6vwXg9Q7QqQZqQXQZqQXQ",
    },
    {
      id: 2,
      title: "AD/DC - HELLFIRE",
      description: "one of the best sound system in the world",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/metal/0zfT626RwO6zN3RDYeRit5/tr/default",
    },
    {
      id: 3,
      title: "BLACK SABBATH - I SAY AHHH",
      description: "one of the best sound system in the world",
      image:
        "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/etiTEuVEJaB8XleeGhLzMA==/cnRydHJ0cnRydHJ0cnRydA==",
    },
    {
      id: 4,
      title: "SEPULTURA - SONIC",
      description: "one of the best sound system in the world",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb8101d13bdd630b0889acd2fd/1/tr/default",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <Section title="Recently Played" more="/blabla" items={items} />
      <Section title="Show to Try" more="/blabla" items={items} />
      <Section title="Made for Mertcan POLAT" more="/blabla" items={items} />
    </div>
  );
}

export default Home;
