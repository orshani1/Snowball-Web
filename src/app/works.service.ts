import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  works =  [
   {location:"קניון כפר סבא",
desc:"התקנה של מזגן מרכזי ",
rate:10,


   images:[{source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/36612680_479037412528751_4079919516144893952_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=UzCrCYc_feUAX9p_qmL&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT9THBXg0pveDRx3JD6JiwrVJkuhcy6YqIIUHEOI7NgRZw&oe=62929D51'},
  {source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/36578422_479038795861946_6195382353297145856_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=3ILeAlAr8T4AX_G-kTi&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8VAPfiU9iSwKiul17K7cEGjzZbuodFjwj121diB4dbCA&oe=62929DA7'},
{source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/36634354_479037085862117_3771202115926491136_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Pc2s0iwF9TsAX-3VKsk&tn=AivoTXvAM1T96lB4&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-kShs7EzncGzCGIy4s5EOrscpDPSrWxc97z2mu2ULrwg&oe=62957112'},
{source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/36499860_479036919195467_3250730153566797824_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=uuNP5OZLzzkAX8HnT2a&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-fheobRCesmGbA352LwnmZ7PbmpCOyBcMjqSWJ8SvHHQ&oe=6293A062'},
{source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/36535085_479036655862160_9060234829466959872_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Erx5CmfbakAAX-gGxvx&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8h6nqOxFe41Bx5VOhs4YeF92nUzVgvg66oM_V3MjjjyQ&oe=62957B17'}]},
{location:'משרד החקלאות',
desc:"התקנה של מזגנים חדשים  ",
rate:10,


images:[
  {source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/57491848_650207748745049_5930916649669492736_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=bUtEWgHRtgoAX_cA3l0&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_s0iGpKV0L5qQfccafk3mOklJQ6PvmEjQDpbW-zIIKXw&oe=62948813'},
  {source:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/57272062_650207652078392_79011910594330624_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=szqybFJY5OsAX9KIO4w&_nc_oc=AQmvzterGHH42n2YD3bChmovnFpGPzYZ-flD3Y_hhNqbqXF_jpzpydzUID-1WViDgdc&tn=AivoTXvAM1T96lB4&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT9cSHiHLR5qTGMqsOA2VAljfrp3Y9nAyRFFzLFLXC-dfw&oe=62958BFB"},
  {source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/56970946_650207925411698_781178736379691008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=R7gynZO7oiQAX8mGS2X&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-QvNq9WdATe3dBCLJ9F_nl3beX0J70crpvUQggsIpD2Q&oe=62937226'}

]},
{location:'נמל אשדוד',
rate:10,

desc:"החלפת מזגנים במנופי נמל אשדוד ",
images:[
  {source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/61127699_674809996284824_6151639902388748288_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=k6JUg-L71FwAX9WkHHx&tn=AivoTXvAM1T96lB4&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_Y0RWtkWyjHGnLtGEtC0G74YQLwUl8GSYP6Gz1KGRClg&oe=6294AB66'},
  {source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/61691988_674810069618150_1170218493254041600_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=d8nPWZ656SQAX8RnhSB&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-0QcyFmBFXIZzaJEXr6QE_G6YzfYfp3unKGeRd7moPYA&oe=62929546'},
  {source:'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/61157091_674810529618104_5518663054121762816_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=EjdjN67GzTsAX9e8edO&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_5BpNJFoZE7pih2P776dOuXfpyAVsKHlVq2onr3wMghQ&oe=629285DC'}
]}

  ];
  ratings = [
  {name:'יהודית',rate:'עבודה מצוינת, אדם ישר ואמין'},
  {name:'בר',rate:'מקצועי , מיומן , הגון , שירות מצויין !'},
  {name:'איה',rate:'תותח המזגנים, בלעדיו אין מזגן!'},
  {name:'שמעון',rate:'בן אדם ישר'},
  {name:'לירון',rate:'סופר מקצועי, שירות מצויין, זמין ואמין!'},
  {name:'נורית',rate:'אמין, מקצועי, שירות מעולה.'},
  {name:'כללית בריאות הנפש רהט',rate:'בהזדמנות זו ברצוני לשבח את המקצועיות והשרות המעולה שמקבל מאבי היקר'},
  {name:'מכון ריפוי בעיסוק אופקים',rate:'תודה רבה לכם! , חייבת לציין לטובה את העובד שהי אתמול-אבי בחור מקסים תמיד עם שירות טוב וחיוך נכונות לעזור ולשמוע תודה לכם'},
  {name:'נורית',rate:'אמין, מקצועי, שירות מעולה.'},
  ]
  constructor() { }
}
