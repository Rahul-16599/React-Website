import React, { Component } from "react";
import { Newsitems } from "./Newsitems";

export default class Newsapp extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Akriti Anand",
      title:
        "HMPV outbreak in China: Is it a new virus? How is it similar to Covid-19? Is there any vaccine? What we know so far | Mint - Mint",
      description:
        "HMPV, or Human Metapneumovirus, is not a newly discovered virus. The US Centers for Disease Control and Prevention said it was first discovered in early 2000s. Should India be worried about it? Is there a vaccine to prevent the spread? Here’s all you need to …",
      url: "https://www.livemint.com/science/hmpv-outbreak-in-china-is-it-a-new-virus-how-is-it-similar-to-covid-19-is-there-any-vaccine-what-we-know-so-far-11736044379099.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2025/01/05/1600x900/The-Chandipura-virus-is-mainly-transmitted-by-vect_1724898468411_1736044493564.jpg",
      publishedAt: "2025-01-06T08:01:30Z",
      content:
        "An outbreak of Human Metapneumovirus (HMPV) in China has raised alarm globally. Several countries, including India, are monitoring the virus and its spread closely. But should one worry about it? How… [+4551 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Hira Humayun, Lauren Izso",
      title:
        "Hamas approves Israeli list of hostages for potential exchange: Reuters - CNN",
      description:
        "Hamas has approved an Israeli list of 34 hostages to be exchanged in a possible ceasefire deal, Reuters reported, citing a Hamas official.",
      url: "https://www.cnn.com/2025/01/05/middleeast/hamas-hostages-list-israel-intl-latam/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/150325082132-social-gfx-breaking-news.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2025-01-06T07:36:00Z",
      content:
        "Hamas has approved an Israeli list of 34 hostages to be exchanged in a possible ceasefire deal, Reuters reported, citing a Hamas official.\r\nThe Israeli government denied receiving a list of hostages … [+4988 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Kevin Seifert",
      title: "Vikings stumble to No. 5 seed, vow 'to respond' - ESPN",
      description:
        "Quarterback Sam Darnold and the Vikings failed to score a touchdown on four trips to the red zone, and Minnesota dropped a 31-9 decision to the Lions on Sunday night, a costly loss that completed the NFC playoff picture with Detroit as the No. 1 seed.",
      url: "https://www.espn.com/nfl/story/_/id/43305431/vikings-fail-secure-nfc-north-title-loss-lions",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0106%2Fr1435072_1296x729_16%2D9.jpg",
      publishedAt: "2025-01-06T07:03:00Z",
      content:
        "DETROIT -- The Minnesota Vikings, and quarterback Sam Darnold in particular, picked the wrong week for their worst offensive performance of the season.\r\nThe Vikings failed to score a touchdown on fou… [+4111 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Dov Lieber, Carrie Keller-Lynn, Saleh al-Batati",
      title:
        "Israel’s Red Sea Conundrum: Hit the Houthis or Iran - The Wall Street Journal",
      description:
        "The Yemen-based rebels pose a lingering threat, and some security analysts argue that their patrons in Tehran should be in Israel’s crosshairs",
      url: "https://www.wsj.com/world/middle-east/israels-red-sea-conundrum-hit-the-houthis-or-iran-75a196eb",
      urlToImage: "https://images.wsj.net/im-83240610/social",
      publishedAt: "2025-01-06T05:16:00Z",
      content: null,
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Simon Jessop, Iain Withers, Saeed Azhar",
      title:
        "Exodus by Wall Street banks from climate group worries advocates - Reuters.com",
      description:
        "U.S. lenders have been rushing in recent weeks to leave one of the world's top banking sector climate coalitions, drawing scorn from campaigners who worry the industry is losing resolve to take action on fossil fuels.",
      url: "https://www.reuters.com/sustainability/sustainable-finance-reporting/exodus-by-wall-street-banks-climate-group-worries-advocates-2025-01-06/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/25YML66WUVLCPGEVNZBWHYAXHQ.jpg?auth=d3d48cd84888a16bc321f27ea4ef486f26641f4afdfe8385447aec56819c3bb5&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2025-01-06T05:05:00Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "LISA MASCARO",
      title:
        "Congress is ready to certify Trump’s election win, but his Jan. 6 legacy hangs over the day - The Associated Press",
      description:
        "Congress plans to convene amid a snowstorm to certify the 2024 election results for President-elect Donald Trump. Jan. 6 is the date required by law. But the legacy of Jan. 6, 2021 is hanging over Monday's proceedings as the candidate who tried to overturn th…",
      url: "https://apnews.com/article/jan-6-trump-election-certification-capitol-b8284b9b6b22f78ab7f23f8c8b3c3da3",
      urlToImage:
        "https://dims.apnews.com/dims4/default/86ef0bf/2147483647/strip/true/crop/3333x1875+0+174/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F60%2F9f%2Fc3c586b2c6315ee48495e356d7c7%2Fcdad54e1fb3f4dceab798640529c3e0a",
      publishedAt: "2025-01-06T05:03:00Z",
      content:
        "WASHINGTON (AP) As Congress convenes amid a winter storm to certify President-elect Donald Trump s election, the legacy of Jan. 6 hangs over the proceedings with an extraordinary fact: The candidate … [+7616 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Mike Florio",
      title:
        "Mike McDaniel suggests Tyreek Hill removed himself from Sunday’s game - NBC Sports",
      description: "Hill seems to agree he decided on his own to not play.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/mike-mcdaniel-suggests-tyreek-hill-removed-himself-from-sundays-game",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/094ae80/2147483647/strip/true/crop/5686x3198+0+297/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fed%2F32%2Fae2ae88e4a788bc4d91bc8f02b54%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D25121439",
      publishedAt: "2025-01-06T03:46:26Z",
      content:
        "It wasnt nearly as dramatic as the last time a high-profile receiver refused to play in a game against the Jets at MetLife Stadium, nearly three years ago to the day. It might lead to the same result… [+1535 chars]",
    },
    {
      source: {
        id: null,
        name: "WHIO",
      },
      author: "WHIO Staff",
      title:
        "LIVE UPDATES: Snow emergency issued for area counties; What does it mean? - WHIO",
      description:
        "Snow emergencies have been issued as accumulating snow falls across the region Sunday.",
      url: "https://www.whio.com/weather/snow-emergencies-issued-area-county-what-does-it-mean/D2W6DZYKQ5HMBEIHY33PXNRI6E/",
      urlToImage:
        "https://cmg-cmg-tv-10040-prod.cdn.arcpublishing.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fcmg%2FK2GMSVM4VREPJEOKAMWVXP2VFY.jpg?auth=1e69e3824c2a5ef0a15b0a75ce96897325371a1b37e4e35d309a8acb8d07164a&width=1200&height=630&smart=true",
      publishedAt: "2025-01-06T03:34:00Z",
      content:
        "MIAMI VALLEY — Snow emergencies have been issued as accumulating snow falls across the region.\r\n[DOWNLOAD: Free WHIO-TV News app for alerts as news breaks]\r\nOur Storm Center 7 team of meteorologists … [+1849 chars]",
    },
    {
      source: {
        id: null,
        name: "AL.com",
      },
      author: "Mary Colurso | mcolurso@al.com",
      title:
        "Miss America 2025: Miss Alabama Abbie Stockard wins the crown - AL.com",
      description:
        "Abbie Stockard, from Birmingham, is the fourth Miss Alabama to win the title of Miss America. She's a student at Auburn University.",
      url: "https://www.al.com/life/2025/01/miss-america-2025-miss-alabama-wins-the-crown.html",
      urlToImage:
        "https://www.al.com/resizer/v2/EOH4H5HYWFGTNO4LTTQXLM3RBQ.JPG?auth=e3c9899b5426a59374c106f7057644fae68cb8b8ba6cde9dabb3abebdb153251&width=1280&quality=90",
      publishedAt: "2025-01-06T03:11:00Z",
      content:
        "Abbie Stockard, Miss Alabama 2024, was crowned Miss America 2025 on Sunday night at the Walt Disney Theater in Orlando, Florida.\r\nStockard, 22, will receive a $50,000 in scholarship money as Miss Ame… [+4322 chars]",
    },
    {
      source: {
        id: "the-hill",
        name: "The Hill",
      },
      author: "Tara Suter",
      title:
        "Donald Trump blasts the 'corrupt' and 'broken' legal system ahead of his sentencing - The Hill",
      description:
        "President-elect Trump on Sunday blasted the “corrupt” and “broken” legal system ahead of a Jan. 10 sentencing date in his New York hush money case. In a Truth Social post highlighted by Mediaite, the president-elect said Manhattan District Attorney Alvin Brag…",
      url: "https://thehill.com/regulation/court-battles/5068404-trump-blasts-the-corrupt-and-broken-legal-system-ahead-of-his-sentencing/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2025/01/memo-trump-new-orleans_stanage_AP.jpg?w=1280",
      publishedAt: "2025-01-06T03:05:00Z",
      content:
        "Skip to content\r\nPresident-elect Trump on Sunday blasted the “corrupt” and “broken” legal system ahead of a Jan. 10 sentencing date in his New York hush money case.\r\nIn a Truth Social post highlighte… [+2295 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Brian Heater",
      title:
        "Samsung brings live translate to its TVs at CES 2025 - TechCrunch",
      description:
        "At CES 2025, Samsung announced that it's bringing a popular feature from the company’s phones and tablets to its TVs. Live Translate does what it says on",
      url: "https://techcrunch.com/2025/01/05/samsung-brings-live-translate-to-its-tvs-at-ces-2025/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/02/IMG_0474.jpg?resize=1200,900",
      publishedAt: "2025-01-06T03:00:00Z",
      content:
        "At CES 2025, Samsung announced that it’s bringing a popular feature from the companys phones and tablets to its TVs.\r\nLive Translate does what it says on the box, offering users real-time translation… [+956 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Jane Lanhee Lee",
      title:
        "IPhone Maker Hon Hai Clinches Sales Beat on Strong AI Demand - Bloomberg",
      description:
        "Hon Hai Precision Industry Co. reported faster-than-expected 15% revenue growth after the server assembly partner to Nvidia Corp. rode sustained demand for AI infrastructure.",
      url: "https://www.bloomberg.com/news/articles/2025-01-05/iphone-maker-hon-hai-clinches-sales-beat-on-strong-ai-demand",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3z_l89DDcGY/v1/1200x800.jpg",
      publishedAt: "2025-01-06T02:39:00Z",
      content:
        "Hon Hai Precision Industry Co. reported faster-than-expected 15% revenue growth after the server assembly partner to Nvidia Corp. rode sustained demand for AI infrastructure.\r\nHon Hai, also the world… [+372 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "James Hibberd",
      title:
        "Nikki Glaser’s Golden Globes Monologue: Her Meanest Jokes - Hollywood Reporter",
      description:
        "Here are Globes' host Nikki Glaser's best jokes from her opening monologue.",
      url: "http://www.hollywoodreporter.com/tv/tv-news/nikki-glaser-golden-globes-monologue-jokes-1236098425/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2025/01/nikki-glaser-GettyImages-2192000739.jpg?w=1296&h=730&crop=1",
      publishedAt: "2025-01-06T02:34:24Z",
      content:
        "OK, so she wasn’t that mean.\r\nYet comedian Nikki Glaser nonetheless had some cutting jokes when making her debut as the host of the Golden Globes. Glaser managed to walk the line between mocking many… [+5920 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Rebecca Falconer",
      title:
        "What to know about Manhattan road toll as NYC becomes first U.S. city with congestion charge - Axios",
      description:
        "The program has been fiercely opposed by Trump and New Jersey officials.",
      url: "https://www.axios.com/2025/01/06/new-york-manhattan-congestion-pricing-first-us-city",
      urlToImage:
        "https://images.axios.com/xW1N5aXW2tcfJxn7pFoSQF7n2cA=/0x221:5344x3227/1366x768/2025/01/06/1736123952066.jpg",
      publishedAt: "2025-01-06T02:23:04Z",
      content:
        "New York City's congestion pricing went into effect in the center of Manhattan on Sunday, one day after a federal judge rejected a request from New Jersey officials to halt the program.\r\nWhy it matte… [+3189 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Wayne Cole",
      title:
        "Shares patchy in Asia, Canadian dollar up on Trudeau report - Reuters",
      description:
        "Share markets were mixed in Asia on Monday ahead of a week brimming with economic news that should underline the relative outperformance of the United States and support the dollar's ongoing bull run.",
      url: "https://www.reuters.com/markets/global-markets-wrapup-1-2025-01-06/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/DFKNCYWI3BIURAGJOJ5NQQC2HM.jpg?auth=30ad02a481d0bc00e2dc414758086a509cec9d0c2f1c90e87491d02b351297a9&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2025-01-06T02:18:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "2025 NFL playoff picture, bracket: Wild Card Weekend schedule unveiled, Vikings-Lions loser to face Rams - CBS Sports",
      description: "Here's an up-to-date look at the 2025 NFL playoff schedule",
      url: "https://www.cbssports.com/nfl/news/2025-nfl-playoff-picture-bracket-wild-card-weekend-schedule-unveiled-vikings-lions-loser-to-face-rams/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2025/01/01/4c40b8ce-e1f7-4553-9ce8-410dd5c093fc/thumbnail/1200x675/89ac94e793ed33accb86f0836935a28a/lamar-jackson.jpg",
      publishedAt: "2025-01-06T02:02:00Z",
      content:
        "Everything always gets crazy during the final week of the NFL regular season, and this year was no different. It lasted all the way until the final game of Week 18 to determine what the 2025 NFL play… [+2648 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "KYLE HIGHTOWER",
      title:
        "Patriots fire coach Jerod Mayo shortly after beating Bills to finish his lone season at 4-13 - The Associated Press",
      description:
        "The New England Patriots have fired coach Jerod Mayo after one season, beginning another reboot for the franchise just a year after it parted with longtime coach Bill Belichick. Owner Robert Kraft announced the firing in a statement shortly after New England …",
      url: "https://apnews.com/article/patriots-jerod-mayo-fired-4bc43a1ee8671179e58e46dfdc5126dc",
      urlToImage:
        "https://dims.apnews.com/dims4/default/e10e041/2147483647/strip/true/crop/4703x2645+0+245/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6d%2F58%2Faa5ba15519fa8ae67bb7fc6a092b%2F195ac866b0b54171added786ece9b47b",
      publishedAt: "2025-01-06T01:59:00Z",
      content:
        "FOXBOROUGH, Mass. (AP) The New England Patriots fired coach Jerod Mayo on Sunday after one season, beginning another reboot for the franchise just a year after it parted with longtime coach Bill Beli… [+4496 chars]",
    },
    {
      source: {
        id: null,
        name: "KPRC Click2Houston",
      },
      author: "Michael Horton",
      title:
        "ERCOT issues Weather Watch ahead of stretch of cold weather across Texas - KPRC Click2Houston",
      description:
        "The Electric Reliability Council of Texas (ERCOT) has issued a Weather Watch over the next five days, as cold temperatures are anticipated across the state.",
      url: "https://www.click2houston.com/news/local/2025/01/06/ercot-issues-weather-watch-ahead-of-stretch-of-cold-weather-across-texas/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/VT37PFUXSVDELOKBLI7XIN75DQ.jpg?_a=DATAdtfiZAA0",
      publishedAt: "2025-01-06T01:20:49Z",
      content:
        "If you need help with the Public File, call (713) 778-4745.\r\nAt KPRC, we are committed to informing and delighting our audience. In our commitment to covering our communities with innovation and exce… [+199 chars]",
    },


  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="news-container">
        <h4 className="mx-3 my-4 "> TOP HEADLINES</h4>
        {/* <h6>This is Fetch-API git branch</h6> */}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  
                  title={element.title.slice(0, 82)}
                  description={element.description.slice(0, 82)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
