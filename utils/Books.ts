import { Book } from "@/types/Book";

import bookReact from "../assets/books/tech/react.png";
import bookRPA from "../assets/books/tech/rpa.png";
import bookJS from "../assets/books/tech/javascript.png";
import bookTS from "../assets/books/tech/typescript.png";
import bookMachine from "../assets/books/tech/machine.png";
import bookArchitecture from "../assets/books/tech/architecture.png";
import bookDB from "../assets/books/tech/database.png";
import bookLogic from "../assets/books/tech/logic.png";
import bookDevOps from "../assets/books/tech/devops.png";
import bookAndroid from "../assets/books/tech/android.png";

import bookWW2 from "../assets/books/history/ww2.png";
import bookGreece from "../assets/books/history/greece.png";
import bookMiddle from "../assets/books/history/middle.png";
import bookNapoleon from "../assets/books/history/napoleon.png";
import bookArt from "../assets/books/history/art.png";
import bookInd from "../assets/books/history/industrial.png";
import bookAfrica from "../assets/books/history/africa.png";
import bookRome from "../assets/books/history/rome.png";
import bookPre from "../assets/books/history/pre.png";
import bookLatin from "../assets/books/history/latin.png";

import bookDead from "../assets/books/fiction/dead.png";
import bookShadow from "../assets/books/fiction/shadow.png";
import bookRise from "../assets/books/fiction/rise.png";
import bookCity from "../assets/books/fiction/city.png";
import bookWitch from "../assets/books/fiction/witch.png";
import bookAlchemy from "../assets/books/fiction/alchemy.png";
import bookMagic from "../assets/books/fiction/magic.png";
import bookOracle from "../assets/books/fiction/oracle.png";
import bookDragon from "../assets/books/fiction/dragon.png";
import bookKey from "../assets/books/fiction/key.png";

export const Books: Book[] = [
   {
      id: 1,
      cover: bookReact,
      title: "React - Learn",
      description: [
         "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
         "With their learning road map, authors Alex Banks and Eve Porcello show you how to create UIs that can deftly display changes without page reloads on large-scale, data-driven websites. You'll also discover how to work with functional programming and the latest ECMAScript features. Once you learn how to build React components with this hands-on guide, you'll understand just how useful React can be in your organization.",
         "Understand key functional programming concepts with JavaScript Look under the hood to learn how React runs in the browser Create application presentation layers with React components Manage data and reduce the time you spend debugging applications Incorporate React Hooks to manage state and fetch data Use a routing solution for single-page application features Learn how to structure React applications with servers in mind",
      ],
      author: "John Gordon",
      publishingDate: "2019",
      pages: 450,
      price: 28,
      category: "Technology",
   },
   {
      id: 2,
      cover: bookRPA,
      title: "RPA - Robotic Process Automation",
      description: [
         "While Robotic Process Automation (RPA) has been around for about 20 years, it has hit an inflection point because of the convergence of cloud computing, big data and AI. This book shows you how to leverage RPA effectively in your company to  automate repetitive and rules-based processes, such as scheduling, inputting/transferring data, cut and paste, filling out forms, and search.",
         "Using practical aspects of implementing the technology (based on case studies and industry best practices), you’ll see how companies have been able to realize substantial ROI (Return On Investment) with their implementations, such as by lessening the need for hiring or outsourcing. By understanding the core concepts of RPA, you’ll also see that the technology significantly increases compliance – leading to fewer issues with regulations – and minimizes costly errors.",
         "RPA software revenues have recently soared by over 60 percent, which is the fastest ramp in the tech industry, and they are expected to exceed $1 billion by the end of 2019. It is generally seamless with legacy IT environments, making it easier for companies to pursue a strategy of digital transformation and can even be a gateway to AI. The Robotic Process Automation Handbook puts everything you need to know into one place to be a part of this wave.",
      ],
      author: "Andrew",
      publishingDate: "2020",
      pages: 220,
      price: 52,
      category: "Technology",
   },
   {
      id: 3,
      cover: bookJS,
      title: "Javascript - Basic to Advanced",
      description: [
         "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You'll find illuminating and engaging example code throughout.",
         "This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.",
      ],
      author: "Brent Jackson",
      publishingDate: "2022",
      pages: 356,
      price: 61,
      category: "Technology",
   },
   {
      id: 4,
      cover: bookTS,
      title: "Typescript - Guide to typing",
      description: [
         "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
         "If you’re a programmer with intermediate JavaScript experience, author Boris Cherny will teach you how to master the TypeScript language. You’ll understand how TypeScript can help you eliminate bugs in your code and enable you to scale your code across more engineers than you could before.",
      ],
      author: "Luke Johnson",
      publishingDate: "2021",
      pages: 225,
      price: 71,
      category: "Technology",
   },
   {
      id: 5,
      cover: bookMachine,
      title: "Machine Learning - Everything there is to know",
      description: [
         "Machine learning systems are both complex and unique. Complex because they consist of many different components and involve many different stakeholders. Unique because they're data dependent, with data varying wildly from one use case to the next. In this book, you'll learn a holistic approach to designing ML systems that are reliable, scalable, maintainable, and adaptive to changing environments and business requirements.",
         "The author considers each design decision-such as how to process and create training data, which features to use, how often to retrain models, and what to monitor-in the context of how it can help your system as a whole achieve its objectives. The iterative framework in this book uses actual case studies backed by ample references.",
      ],
      author: "Anna Smith",
      publishingDate: "2018",
      pages: 532,
      price: 103,
      category: "Technology",
   },
   {
      id: 6,
      cover: bookArchitecture,
      title: "Software Architecture - Volume 1",
      description: [
         "Salary surveys worldwide regularly place software architect in the top 10 best jobs, yet no real guide exists to help developers become architects. Until now. This book provides the first comprehensive overview of software architecture’s many aspects. Aspiring and existing architects alike will examine architectural characteristics, architectural patterns, component determination, diagramming and presenting architecture, evolutionary architecture, and many other topics.",
         "The author — hands-on practitioner who have taught software architecture classes professionally for years—focus on architecture principles that apply across all technology stacks. You’ll explore software architecture in a modern light, taking into account all the innovations of the past decade.",
      ],
      author: "Robert Davidson",
      publishingDate: "2016",
      pages: 412,
      price: 96,
      category: "Technology",
   },
   {
      id: 7,
      cover: bookDB,
      title: "Database Modeling - Modeling Databases Effectively",
      description: [
         "This extensively revised fifth edition features clear explanations, lots of terrific examples and an illustrative case, and practical advice, with design rules that are applicable to any SQL-based system. The common examples are based on real-life experiences and have been thoroughly class-tested.",
         "This book is immediately useful to anyone tasked with the creation of data models for the integration of large-scale enterprise data. It is ideal for a stand-alone data management course focused on logical database design, or a supplement to an introductory text for introductory database management.",
      ],
      author: "Erika Keller",
      publishingDate: "2017",
      pages: 151,
      price: 35,
      category: "Technology",
   },
   {
      id: 8,
      cover: bookLogic,
      title: "Programming Logic - A Concise Guide",
      description: [
         "'Programming Logic - A Concise Guide' is a practical and easy-to-understand introduction to the fundamental concepts of programming logic. This book covers the basic building blocks of programming, including data types, variables, control structures, functions, and algorithms.",
         "Through clear explanations and practical examples, readers will learn how to write efficient and effective code, debug errors, and solve complex programming problems. Whether you're a beginner or an experienced programmer looking to brush up on your skills, 'Programming Logic: A Concise Guide' is an essential resource for anyone looking to master the art of programming logic.",
      ],
      author: "Mick Stone",
      publishingDate: "2023",
      pages: 247,
      price: 49,
      category: "Technology",
   },
   {
      id: 9,
      cover: bookDevOps,
      title: "DevOps Guide - Tips and Guides",
      description: [
         "For years, The DevOps Handbook has been the definitive guide for taking the successes laid out in the bestselling The Phoenix Project and applying them in any organization. Now, with this fully updated and expanded edition, it's time to take DevOps out of the IT department and apply it across the full business.",
         "Technology is now at the core of every company, no matter the business model or product. The theories and practices laid out in The DevOps Handbook are tools to be used by anyone from across the organization to create joy and succeed in the marketplace.",
         "The second edition features 15 new case studies, including stories from Adidas, American Airlines, Fannie Mae, Target, and the US Air Force. In addition, renowned researcher and coauthor of Accelerate, Dr. Nicole Forsgren, provides her insights through new and updated material and research. With over 100 pages of new content throughout the book, this expanded edition is a must read for anyone who works with technology.",
      ],
      author: "Hedley Brown",
      publishingDate: "2019",
      pages: 198,
      price: 53,
      category: "Technology",
   },
   {
      id: 10,
      cover: bookAndroid,
      title: "Android - Java e Kotlin",
      description: [
         "If you have an idea for a killer Android app, this fully revised and updated edition will get you up and running in a jiffy. You'll go beyond syntax and how-to manuals and learn how to think like a great Android developer. This hands-on book teaches you everything from designing user interfaces to building multi-screen apps that persist data in a database. It covers the latest features of Android Jetpack, including Jetpack Compose. It's like having an experienced Android developer sitting right next to you! If you have some Kotlin know-how, you're ready to get started.",
         "Based on the latest research in cognitive science and learning theory, 'Android - Java and Kotlin' uses a visually rich format to engage your mind rather than a text-heavy approach that puts you to sleep. Why waste your time struggling with new concepts? This multisensory learning experience is designed for the way your brain really works.",
      ],
      author: "Rhonda Brock",
      publishingDate: "2020",
      pages: 359,
      price: 84,
      category: "Technology",
   },
   {
      id: 11,
      cover: bookWW2,
      title: "2° World War - History",
      description: [
         "In this stunning visual history book, custom maps tell the story of the Second World War from the rise of the Axis powers to the dropping of the atom bomb on Hiroshima and Nagasaki. Each map is rich with detail and graphics, helping you to chart the progress of key events of World War II on land, sea, and air, such as the Dunkirk evacuation, the attack on Pearl Harbor, the D-Day landings, and the siege of Stalingrad.",
         "Historical maps from both Allied and Axis countries also offer unique insights into the events. There are timelines to help you follow the story as it unfolds, while narrative overviews explain the social, economic, political, and technical developments at the time. Fascinating, large-scale pictures introduce topics such as the Holocaust, blitzkrieg, kamikaze warfare, and code-breaking.",
         "This book examines how the deadliest conflict in history changed the face of our world. It is perfect for students, general readers, and military history enthusiasts.",
      ],
      author: "Bette Chamberlain",
      publishingDate: "2012",
      pages: 167,
      price: 24,
      category: "History",
   },
   {
      id: 12,
      cover: bookGreece,
      title: "Ancient Greece - Important Facts and Curiosities",
      description: [
         "Exploring ancient Greece’s history is spectacularly inspiring. The Greeks gave us our foundational concepts of geometry, our first astronomical models, the beginnings of modern medicine, and our understanding of democracy. Greek sculptures, paintings, and mosaics captured the human form realistically and movingly – like nothing ever seen before. The ancient Greeks were a powerhouse of all things new!",
         "This book unlocks the door to an ancient past reaching through time to touch all parts of our lives. We will follow the Greeks as they developed democracy and employed innovative tactics in epic wars. We will learn how Alexander the Great conquered a mammoth swathe of the known world. We will discern what Greek philosophers taught about life and how to live it.",
      ],
      author: "Ilias Spyros",
      publishingDate: "2007",
      pages: 273,
      price: 43,
      category: "History",
   },
   {
      id: 13,
      cover: bookMiddle,
      title: "Middle age in europe",
      description: [
         "It was an age of hope and possibility, of accomplishment and expansion. Europe's High Middle Ages spanned the Crusades, the building of Chartres Cathedral, Dante's Inferno, and Thomas Aquinas. Buoyant, confident, creative, the era seemed to be flowering into a true renaissance-until the disastrous fourteenth century rained catastrophe in the form of plagues, famine, and war.",
         "In Europe in the High Middle Ages, William Chester Jordan paints a vivid, teeming landscape that captures this lost age in all its glory and complexity. Here are the great popes who revived the power of the Church against the secular princes; the writers and thinkers who paved the way for the Renaissance; the warriors who stemmed the Islamic tide in Spain and surged into Palestine; and the humbler estates, those who found new hope and prosperity until the long night of the 1300s. From high to low, from dramatic events to social structures, Jordan's account brings to life this fascinating age.",
      ],
      author: "Emilia Jöllenbeck",
      publishingDate: "2009",
      pages: 385,
      price: 63,
      category: "History",
   },
   {
      id: 14,
      cover: bookAfrica,
      title: "African History",
      description: [
         "A broad history of one of the greatest civilizations that ever existed… Here’s the untold story of the most prominent African kingdoms!",
         "Since the beginning of time, Africa’s been inhabited by humans. As one of the oldest civilizations, it is suspected that mankind first originated from Africa. Nearly 5000 years later, Africa’s ancient kingdoms are equally fascinating to the modern world as they were once before.",
         "Did you know that ancient Africans developed some of the first mathematics systems, established language, revolutionized architecture, and much more? Their ideas have spread across the world and we have been building on their knowledge for all these years.",
      ],
      author: "Tadesse Afolayan",
      publishingDate: "2011",
      pages: 362,
      price: 44,
      category: "History",
   },

   {
      id: 15,
      cover: bookArt,
      title: "Art History",
      description: [
         "The Story of Art, one of the most famous and popular books on art ever written, has been a world bestseller for over four decades. Attracted by the simplicity and clarity of his writing, readers of all ages and backgrounds have found in Professor Gombrich a true master, and one who combines knowledge and wisdom with a unique gift for communicating his deep love of the subject.",
         "For the first time in many years the book has been completely redesigned. The illustrations, now in color throughout, have all been improved and reoriginated, and include six fold‐outs. The text has been revised and updated where appropriate, and a number of significant new artists have been incorporated. The bibliographies have been expanded and updated, and the maps and charts redrawn.",
      ],
      author: "Gloria Segreti",
      publishingDate: "2014",
      pages: 303,
      price: 37,
      category: "History",
   },
   {
      id: 16,
      cover: bookInd,
      title: "The Industrial Revolution",
      description: [
         "The Industrial Revolution which took place in Great Britain between the middle of the eighteenth century and the middle of the nineteenth transformed British industry and society and made Great Britain the most powerful nation in the world.",
         "The Industrial Revolution didn’t happen due to one, single factor but rather to a number of separate yet related developments which interacted to change the world profoundly and completely. Improvements in the production of iron allowed the construction of efficient, reliable steam engines. These steam engines were then used in the production of iron to improve the quality and quantity of iron production even further. Manufacturing became concentrated in factories filled with automated machinery while canals and improved roads allowed raw materials to be brought to these factories and for finished products to be distributed.",
         "Opposition to the Industrial Revolution came from skilled workers who saw their jobs being replaced by machines and from influential poets who deplored the loss of what they regarded as an idyllic, rural, agrarian way of life. This opposition was brutally repressed, and even those who tried to champion the rights of workers sometimes found themselves under attack by the British Army.",
      ],
      author: "Stephania Cornell",
      publishingDate: "2021",
      pages: 222,
      price: 23,
      category: "History",
   },
   {
      id: 17,
      cover: bookNapoleon,
      title: "Napoleon Bonaparte - Life",
      description: [
         "This book provides a concise, accurate, and lively portrait of Napoleon Bonaparte's character and career, situating him firmly in historical context.",
         "The author emphasizes the astonishing sense of human possibility--for both good and ill--that Napoleon represented. By his late twenties, Napoleon was already one of the greatest generals in European history. At thirty, he had become absolute master of Europe's most powerful country. In his early forties, he ruled a European empire more powerful than any since Rome, fighting wars that changed the shape of the continent and brought death to millions. Then everything collapsed, leading him to spend his last years in miserable exile in the South Atlantic.",
         "The book talks about the importance of the French Revolution in understanding Napoleon's career. The revolution made possible the unprecedented concentration of political authority that Napoleon accrued, and his success in mobilizing human and material resources. Without the political changes brought about by the revolution, Napoleon could not have fought his wars. Without the wars, he could not have seized and held onto power. Though his virtual dictatorship betrayed the ideals of liberty and equality, his life and career were revolutionary.",
      ],
      author: "Corneille Perrault",
      publishingDate: "2015",
      pages: 126,
      price: 16,
      category: "History",
   },
   {
      id: 18,
      cover: bookRome,
      title: "Ancient Roman History",
      description: [
         "Immerse yourself in the history of ancient Rome - from its origins as a small settlement on the Palatine Hill to its peak as an empire reigning over 90 million people, and its tumultuous decline.",
         "Covering more than 1,000 years of history, and an empire that stretched from Scotland to Syria, Ancient Rome reveals in vivid detail all of the key political, cultural, and military events that shaped the Roman Empire and explores what it was like to live in a society that laid the foundations for many aspects of the modern world.",
         "Featuring Rome's greatest emperors, from Augustus to Constantine, as well as profiles of generals, historians, and influential women, Ancient Rome also delves into the fascinating stories of gladiators, bakers, and enslaved people. The most iconic buildings of Rome are brought to life with specially commissioned CGI recreations, while the stories of ordinary citizens, soldiers, and persecuted groups from across the empire are told with the help of illustrations, artifacts, and eyewitness accounts.",
      ],
      author: "Fiorella Baldinotti",
      publishingDate: "2010",
      pages: 201,
      price: 22,
      category: "History",
   },
   {
      id: 19,
      cover: bookPre,
      title: "Pre-Historcal Times",
      description: [
         "This book covers human existence before the advent of written records–which is to say, the overwhelming majority of our time here on earth. But Renfrew also opens up to discussion, and even debate, the term “prehistory” itself, giving an incisive, concise, and lively survey of the past, and how scholars and scientists labor to bring it to light.",
         "The author begins by looking at prehistory as a discipline, particularly how developments of the past century and a half–advances in archaeology and geology; Darwin’s ideas of evolution; discoveries of artifacts and fossil evidence of our human ancestors; and even more enlightened museum and collection curatorship–have fueled continuous growth in our knowledge of prehistory. He details how breakthroughs such as radiocarbon dating and DNA analysis have helped us to define humankind’s past–how things have changed–much more clearly than was possible just a half century ago. Answers for why things have changed, however, continue to elude us, so Renfrew discusses some of the issues and challenges past and present that confront the study of prehistory and its investigators.",
         "The book’s second part shifts the narrative focus, offering a summary of human prehistory from early hominids to the rise of literate civilization that is refreshingly free from conventional wisdom and grand “unified” theories. The author’s own case studies encompass a vast geographical and chronological range–the Orkney Islands, the Balkans, the Indus Valley, Peru, Ireland, and China–and help to explain the formation and development of agriculture and centralized societies. He concludes with a fascinating chapter on early writing systems, “From Prehistory to History.”",
      ],
      author: "Emmanuel Parrish",
      publishingDate: "2005",
      pages: 402,
      price: 55,
      category: "History",
   },
   {
      id: 20,
      cover: bookLatin,
      title: "Latin American History",
      description: [
         "Just what is Latin America? How do you define it? Latin America comprises the Caribbean, South America, and Mexico. These regions are diverse in culture yet share a common bond of history that was forged when the Old World of Latin Europe met the New World of the Americas. This book takes you through the history of this vast and complex region.",
         "We will explore the days of pre-Columbian contact to European conquest, colonization, and subsequent Latin American independence. We follow the cataclysmic clash of civilizations when men like Hernán Cortés and Francisco Pizarro waged war on the Aztecs and Incas. We examine the subsequent merger of great and powerful civilizations such as these with the culture and lifestyles of their conquerors.",
         "This book then goes on to chronicle the complex development of the truly unique Latin American civilizations that followed. Discover what happened in Mexico, Argentina, Peru, Cuba, and all the points in between. This book follows the triumphs and tragedies that made Latin America what it is today.",
      ],
      author: "Koos Reinout",
      publishingDate: "2022",
      pages: 268,
      price: 51,
      category: "History",
   },
   {
      id: 21,
      cover: bookDead,
      title: "Dead Kingdom",
      description: [
         "'Dead Kingdom' takes place in a post-apocalyptic world where humanity has been wiped out by a mysterious virus that turns people into violent creatures. The survivors, led by a small group of charismatic leaders, have managed to carve out a new existence in the ruins of the old world.",
         "The story follows the journey of a young woman named Maya, who is searching for her missing brother in this dangerous new world. Along the way, she meets a diverse cast of characters, each with their own motivations and secrets.",
         "As Maya and her companions venture deeper into the heart of the dead kingdom, they begin to uncover the sinister truth behind the virus and the catastrophic event that brought about the end of the world as they knew it. With danger at every turn and time running out, Maya must use all of her skills and cunning to stay alive and unravel the mysteries of the dead kingdom.",
      ],
      author: "Koos Reinout",
      publishingDate: "2022",
      pages: 630,
      price: 54,
      category: "Fiction",
   },
   {
      id: 22,
      cover: bookShadow,
      title: "The Shadow Realm",
      description: [
         "In 'The Shadow Realm', readers will be transported to a world of magic and mystery, where darkness reigns and ancient powers threaten to plunge the world into eternal night.",
         "The story follows the journey of Aria, a young sorceress who is forced to confront her deepest fears and darkest desires when she is called upon to save the realm from the curse of the eternal night. With the help of a group of unlikely allies, including a grizzled warrior and a wise old wizard, Aria must journey deep into the shadow realm, facing off against powerful dark forces and uncovering long-buried secrets.",
         "As Aria and her companions delve deeper into the shadow realm, they begin to realize that the curse of the eternal night is far more insidious than they ever could have imagined. With time running out and the fate of the world hanging in the balance, Aria must use all of her magic and courage to overcome the darkness and restore the balance of light and shadow.",
      ],
      author: "Edgar Linford",
      publishingDate: "2017",
      pages: 320,
      price: 32,
      category: "Fiction",
   },
   {
      id: 23,
      cover: bookDragon,
      title: "The Dragon's Hoard",
      description: [
         "In 'The Dragon's Hoard', readers will be taken on a journey of greed and redemption. The story follows a young thief named Arin, who has always dreamed of finding a legendary hoard of treasure guarded by a fearsome dragon. When Arin finally discovers the hoard, he realizes that the treasure may not be worth the price he will pay.",
         "As Arin navigates the dangerous terrain surrounding the dragon's lair, he must confront the consequences of his actions and the true cost of his obsession with wealth. Along the way, he meets a diverse cast of characters, including a wise old sage, a powerful sorceress, and a group of rebels who challenge the status quo.",
      ],
      author: "Ester Georg",
      publishingDate: "2023",
      pages: 429,
      price: 39,
      category: "Fiction",
   },
   {
      id: 24,
      cover: bookKey,
      title: "The Cristal Key - A Quest for Balance",
      description: [
         "In 'The Crystal Key', readers will be transported to a world where magic and technology coexist, but the delicate balance between the two is at risk. The story follows a young engineer named Remy, who discovers a powerful crystal key that could restore balance to the world.",
         "As Remy embarks on her quest to unlock the key's secrets, she must confront a dangerous cabal of technologists who seek to dominate the world through their advanced machines. Along the way, she meets a diverse cast of characters, including a wise mystic, a daring adventurer, and a rogue technologist who challenges Remy's beliefs about the nature of technology.",
      ],
      author: "Stefan Uno",
      publishingDate: "2012",
      pages: 287,
      price: 31,
      category: "Fiction",
   },
   {
      id: 25,
      cover: bookWitch,
      title: "The Witch of Willow Woods",
      description: [
         "In 'The Witch of Willow Woods', readers will enter a world of ancient curses, forbidden magic, and dangerous secrets.",
         "The story follows the journey of Willow, a young girl who discovers that she possesses the power of magic. But when a mysterious woman known only as the Witch of Willow Woods appears and offers to teach her the ways of dark magic, Willow must make a choice that will change her life forever.",
         "As Willow delves deeper into the world of dark magic, she begins to uncover the secrets of her past and the true nature of the Witch of Willow Woods. With each new revelation, she finds herself drawn deeper into a world of danger and deception, where nothing is as it seems.",
      ],
      author: "Lennard Herman",
      publishingDate: "2019",
      pages: 386,
      price: 23,
      category: "Fiction",
   },
   {
      id: 26,
      cover: bookAlchemy,
      title: "The Alchemist's Apprentice",
      description: [
         "In 'The Alchemist's Apprentice', readers will follow the journey of a young apprentice who seeks to uncover the mysteries of the ancient art of alchemy. Guided by his master, a legendary alchemist, the apprentice embarks on a perilous journey to uncover the secrets of the philosopher's stone, a legendary substance said to possess the power to transmute base metals into gold and grant eternal life.",
         "As the apprentice delves deeper into the world of alchemy, he begins to discover that the secrets of the philosopher's stone are not only about physical transmutation, but also about spiritual transformation. Along the way, he must confront his deepest fears, desires, and weaknesses, as he learns to master the elements of fire, water, air, and earth and unlock the secrets of the universe itself.",
         " Whether you are a fan of historical fiction, fantasy, or philosophy, this book will take you on a journey that will leave you spellbound and transformed.",
      ],
      author: "Marine Donatien",
      publishingDate: "2013",
      pages: 245,
      price: 17,
      category: "Fiction",
   },
   {
      id: 27,
      cover: bookMagic,
      title: "The Last Magician",
      description: [
         "In 'The Last Magician', readers will be transported to a world where magic is real, but its power is fading. The story follows a young magician named Tessa, who possesses the rare ability to manipulate time itself. When Tessa discovers that an ancient artifact that could restore magic to the world has been stolen, she embarks on a perilous quest to retrieve it.",
         "As Tessa's journey takes her across a dangerous and unpredictable landscape, she must confront powerful foes and face the painful memories of her past. Along the way, she meets a diverse cast of characters, including a band of rebels, a cunning thief, and a wise old wizard. Together, they work to unravel the mysteries of the lost artifact and restore magic to the world before it's too late.",
      ],
      author: "Lothaire Gaëtan",
      publishingDate: "2018",
      pages: 401,
      price: 27,
      category: "Fiction",
   },
   {
      id: 28,
      cover: bookOracle,
      title: "The Oracle's Prophecy",
      description: [
         "In 'The Oracle's Prophecy' readers will be taken on a journey of self-discovery and truth-seeking. The story follows a young girl named Maya, who has always had a deep connection to the spiritual world. Maya's gift leads her to discover an ancient prophecy that could change the course of history.",
         "As Maya sets out to uncover the truth behind the prophecy, she must navigate a world of political intrigue, betrayal, and danger. Along the way, she meets a diverse cast of characters, including a powerful oracle, a skilled warrior, and a mysterious stranger who holds the key to unlocking the prophecy's secrets",
      ],
      author: "Viktor Agda",
      publishingDate: "2014",
      pages: 597,
      price: 46,
      category: "Fiction",
   },
   {
      id: 29,
      cover: bookRise,
      title: "The Rise of the Phoenix Queen",
      description: [
         "In 'The Rise of the Phoenix Queen', readers will embark on a fantastical journey through a world of magic and myth, where the elements hold the key to ultimate power.",
         "The story follows the journey of Ember, a young fire mage who discovers that she is the prophesied Phoenix Queen, destined to unite the elemental kingdoms and restore balance to the world. With the help of a band of unlikely allies, including a stoic earth warrior, a mischievous water sprite, and a free-spirited air druid, Ember must journey across the elemental kingdoms, facing off against powerful foes and uncovering long-buried secrets.",
         "As Ember and her companions delve deeper into the elemental kingdoms, they begin to realize that the fate of the world is far more precarious than they ever could have imagined. With dark forces gathering and the very elements themselves at risk of being corrupted, Ember must use all of her magic and strength to unite the kingdoms and bring about a new era of harmony and balance.",
      ],
      author: "Blaire Roland",
      publishingDate: "2018",
      pages: 367,
      price: 41,
      category: "Fiction",
   },
   {
      id: 30,
      cover: bookCity,
      title: "The Lost City of Arcadia",
      description: [
         "'The Lost City of Arcadia' is a thrilling adventure into a long-forgotten world, where the secrets of the past hold the key to unlocking the future.",
         "The story follows a team of archaeologists and adventurers as they set out on a perilous journey to uncover the mysteries of the lost city of Arcadia. Faced with treacherous terrain, dangerous wildlife, and rival factions, the team must work together to unravel the secrets of this ancient civilization before they are lost forever.",
         "As they delve deeper into the ruins of Arcadia, they begin to uncover a world of wonder and danger, filled with powerful artifacts, hidden treasures, and dark secrets. With each discovery, the team becomes embroiled in a web of intrigue and betrayal, as they struggle to stay one step ahead of their enemies and uncover the truth behind the lost city.",
      ],
      author: "Salina Wilfrid",
      publishingDate: "2020",
      pages: 463,
      price: 38,
      category: "Fiction",
   },
];
