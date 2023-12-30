// 20231229231152
// https://jsonplaceholder.typicode.com/comments

const contacts = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
  },
  {
    postId: 3,
    id: 11,
    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
    email: "Veronica_Goodwin@timmothy.net",
  },
  {
    postId: 3,
    id: 12,
    name: "modi ut eos dolores illum nam dolor",
    email: "Oswald.Vandervort@leanne.org",
  },
  {
    postId: 3,
    id: 13,
    name: "aut inventore non pariatur sit vitae voluptatem sapiente",
    email: "Kariane@jadyn.tv",
  },
  {
    postId: 3,
    id: 14,
    name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    email: "Nathan@solon.io",
  },
  {
    postId: 3,
    id: 15,
    name: "debitis magnam hic odit aut ullam nostrum tenetur",
    email: "Maynard.Hodkiewicz@roberta.com",
  },
  {
    postId: 4,
    id: 16,
    name: "perferendis temporibus delectus optio ea eum ratione dolorum",
    email: "Christine@ayana.info",
  },
  {
    postId: 4,
    id: 17,
    name: "eos est animi quis",
    email: "Preston_Hudson@blaise.tv",
  },
  {
    postId: 4,
    id: 18,
    name: "aut et tenetur ducimus illum aut nulla ab",
    email: "Vincenza_Klocko@albertha.name",
  },
  {
    postId: 4,
    id: 19,
    name: "sed impedit rerum quia et et inventore unde officiis",
    email: "Madelynn.Gorczany@darion.biz",
  },
  {
    postId: 4,
    id: 20,
    name: "molestias expedita iste aliquid voluptates",
    email: "Mariana_Orn@preston.org",
  },
  {
    postId: 5,
    id: 21,
    name: "aliquid rerum mollitia qui a consectetur eum sed",
    email: "Noemie@marques.me",
  },
  {
    postId: 5,
    id: 22,
    name: "porro repellendus aut tempore quis hic",
    email: "Khalil@emile.co.uk",
  },
  {
    postId: 5,
    id: 23,
    name: "quis tempora quidem nihil iste",
    email: "Sophia@arianna.co.uk",
  },
  {
    postId: 5,
    id: 24,
    name: "in tempore eos beatae est",
    email: "Jeffery@juwan.us",
  },
  {
    postId: 5,
    id: 25,
    name: "autem ab ea sit alias hic provident sit",
    email: "Isaias_Kuhic@jarrett.net",
  },
  {
    postId: 6,
    id: 26,
    name: "in deleniti sunt provident soluta ratione veniam quam praesentium",
    email: "Russel.Parker@kameron.io",
  },
  {
    postId: 6,
    id: 27,
    name: "doloribus quibusdam molestiae amet illum",
    email: "Francesco.Gleason@nella.us",
  },
  {
    postId: 6,
    id: 28,
    name: "quo voluptates voluptas nisi veritatis dignissimos dolores ut officiis",
    email: "Ronny@rosina.org",
  },
  {
    postId: 6,
    id: 29,
    name: "eum distinctio amet dolor",
    email: "Jennings_Pouros@erica.biz",
  },
  {
    postId: 6,
    id: 30,
    name: "quasi nulla ducimus facilis non voluptas aut",
    email: "Lurline@marvin.biz",
  },
  {
    postId: 7,
    id: 31,
    name: "ex velit ut cum eius odio ad placeat",
    email: "Buford@shaylee.biz",
  },
  {
    postId: 7,
    id: 32,
    name: "dolorem architecto ut pariatur quae qui suscipit",
    email: "Maria@laurel.name",
  },
  {
    postId: 7,
    id: 33,
    name: "voluptatum totam vel voluptate omnis",
    email: "Jaeden.Towne@arlene.tv",
  },
  {
    postId: 7,
    id: 34,
    name: "omnis nemo sunt ab autem",
    email: "Ethelyn.Schneider@emelia.co.uk",
  },
  {
    postId: 7,
    id: 35,
    name: "repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis",
    email: "Georgianna@florence.io",
  },
  {
    postId: 8,
    id: 36,
    name: "sit et quis",
    email: "Raheem_Heaney@gretchen.biz",
  },
  {
    postId: 8,
    id: 37,
    name: "beatae veniam nemo rerum voluptate quam aspernatur",
    email: "Jacky@victoria.net",
  },
  {
    postId: 8,
    id: 38,
    name: "maiores dolores expedita",
    email: "Piper@linwood.us",
  },
  {
    postId: 8,
    id: 39,
    name: "necessitatibus ratione aut ut delectus quae ut",
    email: "Gaylord@russell.net",
  },
  {
    postId: 8,
    id: 40,
    name: "non minima omnis deleniti pariatur facere quibusdam at",
    email: "Clare.Aufderhar@nicole.ca",
  },
  {
    postId: 9,
    id: 41,
    name: "voluptas deleniti ut",
    email: "Lucio@gladys.tv",
  },
  {
    postId: 9,
    id: 42,
    name: "nam qui et",
    email: "Shemar@ewell.name",
  },
  {
    postId: 9,
    id: 43,
    name: "molestias sint est voluptatem modi",
    email: "Jackeline@eva.tv",
  },
  {
    postId: 9,
    id: 44,
    name: "hic molestiae et fuga ea maxime quod",
    email: "Marianna_Wilkinson@rupert.io",
  },
  {
    postId: 9,
    id: 45,
    name: "autem illo facilis",
    email: "Marcia@name.biz",
  },
  {
    postId: 10,
    id: 46,
    name: "dignissimos et deleniti voluptate et quod",
    email: "Jeremy.Harann@waino.me",
  },
  {
    postId: 10,
    id: 47,
    name: "rerum commodi est non dolor nesciunt ut",
    email: "Pearlie.Kling@sandy.com",
  },
  {
    postId: 10,
    id: 48,
    name: "consequatur animi dolorem saepe repellendus ut quo aut tenetur",
    email: "Manuela_Stehr@chelsie.tv",
  },
  {
    postId: 10,
    id: 49,
    name: "rerum placeat quae minus iusto eligendi",
    email: "Camryn.Weimann@doris.io",
  },
  {
    postId: 10,
    id: 50,
    name: "dolorum soluta quidem ex quae occaecati dicta aut doloribus",
    email: "Kiana_Predovic@yasmin.io",
  },
  {
    postId: 11,
    id: 51,
    name: "molestias et odio ut commodi omnis ex",
    email: "Laurie@lincoln.us",
  },
  {
    postId: 11,
    id: 52,
    name: "esse autem dolorum",
    email: "Abigail.OConnell@june.org",
  },
  {
    postId: 11,
    id: 53,
    name: "maiores alias necessitatibus aut non",
    email: "Laverne_Price@scotty.info",
  },
  {
    postId: 11,
    id: 54,
    name: "culpa eius tempora sit consequatur neque iure deserunt",
    email: "Kenton_Vandervort@friedrich.com",
  },
  {
    postId: 11,
    id: 55,
    name: "quas pariatur quia a doloribus",
    email: "Hayden_Olson@marianna.me",
  },
  {
    postId: 12,
    id: 56,
    name: "et dolorem corrupti sed molestias",
    email: "Vince_Crist@heidi.biz",
  },
  {
    postId: 12,
    id: 57,
    name: "qui quidem sed",
    email: "Darron.Nikolaus@eulah.me",
  },
  {
    postId: 12,
    id: 58,
    name: "sint minus reiciendis qui perspiciatis id",
    email: "Ezra_Abshire@lyda.us",
  },
  {
    postId: 12,
    id: 59,
    name: "quis ducimus distinctio similique et illum minima ab libero",
    email: "Jameson@tony.info",
  },
  {
    postId: 12,
    id: 60,
    name: "expedita libero quos cum commodi ad",
    email: "Americo@estrella.net",
  },
  {
    postId: 13,
    id: 61,
    name: "quidem itaque dolores quod laborum aliquid molestiae",
    email: "Aurelio.Pfeffer@griffin.ca",
  },
  {
    postId: 13,
    id: 62,
    name: "libero beatae consequuntur optio est hic",
    email: "Vesta_Crooks@dora.us",
  },
  {
    postId: 13,
    id: 63,
    name: "occaecati dolor accusantium et quasi architecto aut eveniet fugiat",
    email: "Margarett_Klein@mike.biz",
  },
  {
    postId: 13,
    id: 64,
    name: "consequatur aut ullam voluptas dolorum voluptatum sequi et",
    email: "Freida@brandt.tv",
  },
  {
    postId: 13,
    id: 65,
    name: "earum ea ratione numquam",
    email: "Mollie@agustina.name",
  },
  {
    postId: 14,
    id: 66,
    name: "eius nam consequuntur",
    email: "Janice@alda.io",
  },
  {
    postId: 14,
    id: 67,
    name: "omnis consequatur natus distinctio",
    email: "Dashawn@garry.com",
  },
  {
    postId: 14,
    id: 68,
    name: "architecto ut deserunt consequatur cumque sapiente",
    email: "Devan.Nader@ettie.me",
  },
  {
    postId: 14,
    id: 69,
    name: "at aut ea iure accusantium voluptatum nihil ipsum",
    email: "Joana.Schoen@leora.co.uk",
  },
  {
    postId: 14,
    id: 70,
    name: "eum magni accusantium labore aut cum et tenetur",
    email: "Minerva.Anderson@devonte.ca",
  },
  {
    postId: 15,
    id: 71,
    name: "vel pariatur perferendis vero ab aut voluptates labore",
    email: "Lavinia@lafayette.me",
  },
  {
    postId: 15,
    id: 72,
    name: "quia sunt dolor dolor suscipit expedita quis",
    email: "Sabrina.Marks@savanah.name",
  },
  {
    postId: 15,
    id: 73,
    name: "ut quia ipsa repellat sunt et sequi aut est",
    email: "Desmond_Graham@kailee.biz",
  },
  {
    postId: 15,
    id: 74,
    name: "ut non illum pariatur dolor",
    email: "Gussie_Kunde@sharon.biz",
  },
  {
    postId: 15,
    id: 75,
    name: "minus laboriosam consequuntur",
    email: "Richard@chelsie.co.uk",
  },
  {
    postId: 16,
    id: 76,
    name: "porro ut soluta repellendus similique",
    email: "Gage_Turner@halle.name",
  },
  {
    postId: 16,
    id: 77,
    name: "dolores et quo omnis voluptates",
    email: "Alfred@sadye.biz",
  },
  {
    postId: 16,
    id: 78,
    name: "voluptas voluptas voluptatibus blanditiis",
    email: "Catharine@jordyn.com",
  },
  {
    postId: 16,
    id: 79,
    name: "beatae ut ad quisquam sed repellendus et",
    email: "Esther_Ratke@shayna.biz",
  },
  {
    postId: 16,
    id: 80,
    name: "et cumque ad culpa ut eligendi non",
    email: "Evangeline@chad.net",
  },
  {
    postId: 17,
    id: 81,
    name: "aut non consequuntur dignissimos voluptatibus dolorem earum recusandae dolorem",
    email: "Newton.Kertzmann@anjali.io",
  },
  {
    postId: 17,
    id: 82,
    name: "ea est non dolorum iste nihil est",
    email: "Caleb_Herzog@rosamond.net",
  },
  {
    postId: 17,
    id: 83,
    name: "nihil qui accusamus ratione et molestias et minus",
    email: "Sage_Mueller@candace.net",
  },
  {
    postId: 17,
    id: 84,
    name: "quia voluptatibus magnam voluptatem optio vel perspiciatis",
    email: "Bernie.Bergnaum@lue.com",
  },
  {
    postId: 17,
    id: 85,
    name: "non voluptas cum est quis aut consectetur nam",
    email: "Alexzander_Davis@eduardo.name",
  },
  {
    postId: 18,
    id: 86,
    name: "suscipit est sunt vel illum sint",
    email: "Jacquelyn@krista.info",
  },
  {
    postId: 18,
    id: 87,
    name: "dolor asperiores autem et omnis quasi nobis",
    email: "Grover_Volkman@coty.tv",
  },
  {
    postId: 18,
    id: 88,
    name: "officiis aperiam odit sint est non",
    email: "Jovanny@abigale.ca",
  },
  {
    postId: 18,
    id: 89,
    name: "in voluptatum nostrum voluptas iure nisi rerum est placeat",
    email: "Isac_Schmeler@barton.com",
  },
  {
    postId: 18,
    id: 90,
    name: "eum voluptas dolores molestias odio amet repellendus",
    email: "Sandy.Erdman@sabina.info",
  },
  {
    postId: 19,
    id: 91,
    name: "repellendus est laboriosam voluptas veritatis",
    email: "Alexandro@garry.io",
  },
  {
    postId: 19,
    id: 92,
    name: "repellendus aspernatur occaecati tempore blanditiis deleniti omnis qui distinctio",
    email: "Vickie_Schuster@harley.net",
  },
  {
    postId: 19,
    id: 93,
    name: "mollitia dolor deleniti sed iure laudantium",
    email: "Roma_Doyle@alia.com",
  },
  {
    postId: 19,
    id: 94,
    name: "vero repudiandae voluptatem nobis",
    email: "Tatum_Marks@jaylon.name",
  },
  {
    postId: 19,
    id: 95,
    name: "voluptatem unde quos provident ad qui sit et excepturi",
    email: "Juston.Ruecker@scot.tv",
  },
  {
    postId: 20,
    id: 96,
    name: "non sit ad culpa quis",
    email: "River.Grady@lavada.biz",
  },
  {
    postId: 20,
    id: 97,
    name: "reiciendis culpa omnis suscipit est",
    email: "Claudia@emilia.ca",
  },
  {
    postId: 20,
    id: 98,
    name: "praesentium dolorem ea voluptate et",
    email: "Torrey@june.tv",
  },
  {
    postId: 20,
    id: 99,
    name: "laudantium delectus nam",
    email: "Hildegard.Aufderhar@howard.com",
  },
  {
    postId: 20,
    id: 100,
    name: "et sint quia dolor et est ea nulla cum",
    email: "Leone_Fay@orrin.com",
  },
];

contacts.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;

  return 0;
});

const group = contacts.reduce((acc, cur) => {
  let groupName = cur.name.charAt(0).toUpperCase();
  if (acc[groupName]) {
    acc[groupName].push(cur);
  } else {
    acc[groupName] = [cur];
  }
  return acc;
}, {});

const displayList = (group) => {
  console.log("Displying contract Information");
  console.log("--------------------");

  const keys = Object.keys(group);
  keys.forEach((key) => {
    console.log(`Group: ${key}`);
    console.table(group[key]);
  });
};

displayList(group);
