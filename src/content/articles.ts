import type { FaqItem } from "@/content/schema";

export interface KnowledgeArticle {
  slug: string;
  title: string;
  description: string;
  h1: string;
  excerpt: string;
  readingTime: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  faq: FaqItem[];
  related: string[];
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "regresja-poprzednich-wcielen-dla-sceptykow",
    title: "Regresja poprzednich wcieleń dla sceptyków — czy trzeba wierzyć?",
    description:
      "Regresja poprzednich wcieleń dla osób sceptycznych: jak rozumieć PLR symbolicznie, bez presji wiary i bez obietnic gotowych odpowiedzi.",
    h1: "Regresja poprzednich wcieleń dla sceptyków",
    excerpt:
      "Nie trzeba zaczynać od pewności. PLR można potraktować jako spokojną pracę z obrazem, emocją i znaczeniem, które pojawia się w wyciszeniu.",
    readingTime: "5 min czytania",
    sections: [
      {
        heading: "Sceptycyzm nie wyklucza doświadczenia",
        paragraphs: [
          "Wiele osób interesuje się regresją poprzednich wcieleń, ale nie chce od razu deklarować wiary w reinkarnację. To rozsądne. Uczciwa sesja PLR nie powinna wymagać przyjęcia gotowego światopoglądu ani obiecywać, że każdy obraz będzie dowodem na poprzednie życie.",
          "Można wejść w proces z prostą ciekawością: co pojawi się, kiedy ciało się wyciszy, a uwaga skieruje się do środka? Czasem będzie to scena, czasem emocja, czasem symbol, który dopiero po sesji zaczyna mieć znaczenie."
        ]
      },
      {
        heading: "Trzy sposoby rozumienia PLR",
        paragraphs: [
          "Pierwsze podejście jest duchowe: osoba traktuje doświadczenie jako kontakt z historią duszy. Drugie jest symboliczne: obrazy są językiem nieświadomej wyobraźni. Trzecie jest psychologiczno-duchowe: nie trzeba rozstrzygać, czym dokładnie jest obraz, żeby zobaczyć, co porusza w relacjach, emocjach i wyborach.",
          "W praktyce najważniejsze jest to, czy doświadczenie pomaga zobaczyć coś spokojniej. Jeśli obraz przynosi więcej jasności, nie trzeba od razu robić z niego dogmatu."
        ]
      },
      {
        heading: "Czego nie obiecywać sobie przed sesją",
        paragraphs: [
          "Nie warto przychodzić z oczekiwaniem spektakularnej historii, wielkich nazwisk albo gotowej odpowiedzi na całe życie. Takie nastawienie utrudnia kontakt z tym, co naprawdę się pojawia. Regresja jest delikatniejsza, gdy nie trzeba niczego udowadniać.",
          "Dobre pytanie przed sesją może brzmieć: jaki wzorzec chcę lepiej zrozumieć? Jaka emocja wraca? Jaka relacja domaga się spokojniejszego spojrzenia?"
        ]
      }
    ],
    faq: [
      {
        question: "Czy sceptyk może skorzystać z regresji poprzednich wcieleń?",
        answer:
          "Tak, jeśli podchodzi do sesji z otwartością i bez potrzeby natychmiastowego rozstrzygania, czym jest każde doświadczenie. PLR można traktować duchowo, symbolicznie albo jako pracę z głęboką wyobraźnią i emocjami."
      },
      {
        question: "Czy muszę uwierzyć w reinkarnację po sesji?",
        answer:
          "Nie. Sesja nie służy do wymuszania przekonań. Może pomóc zobaczyć obrazy, emocje i znaczenia, ale interpretacja pozostaje po stronie osoby, która doświadcza procesu."
      },
      {
        question: "Czy sceptyczne podejście utrudnia regresję?",
        answer:
          "Nie musi. Bardziej przeszkadza presja, kontrola i oczekiwanie konkretnego efektu. Spokojna ciekawość zwykle jest wystarczająca, nawet jeśli ktoś nie ma pewności, jak rozumieć temat poprzednich wcieleń."
      }
    ],
    related: ["czym-jest-regresja-poprzednich-wcielen", "symbol-czy-wspomnienie-w-sesji-plr", "integracja-po-sesji-regresji"]
  },
  {
    slug: "symbol-czy-wspomnienie-w-sesji-plr",
    title: "Symbol czy wspomnienie w sesji PLR? Spokojne rozróżnienie",
    description:
      "Jak rozumieć obrazy z sesji PLR: symbol, wspomnienie, emocja czy opowieść wewnętrzna. Bez sensacji i bez narzucania interpretacji.",
    h1: "Symbol czy wspomnienie w sesji PLR?",
    excerpt:
      "Nie każdy obraz trzeba natychmiast uznać za dosłowną historię. Czasem największą wartość ma to, co symbol porusza w obecnym życiu.",
    readingTime: "6 min czytania",
    sections: [
      {
        heading: "Dlaczego obrazy bywają niejednoznaczne",
        paragraphs: [
          "W regresji poprzednich wcieleń mogą pojawić się sceny bardzo konkretne: miejsce, postać, ubranie, relacja, moment decyzji. Mogą też pojawić się wrażenia bardziej symboliczne: kolor, gest, drzwi, droga, ciężar w ciele albo jedno zdanie.",
          "Niepewność nie jest błędem procesu. Doświadczenie wewnętrzne rzadko układa się jak film dokumentalny. Czasem pokazuje to, co człowiek jest gotów zobaczyć w danym momencie."
        ]
      },
      {
        heading: "Co daje podejście symboliczne",
        paragraphs: [
          "Podejście symboliczne pozwala pracować bez presji dowodu. Zamiast pytać wyłącznie: czy to naprawdę było moje poprzednie życie, można zapytać: co ten obraz pokazuje o moim lęku, relacji, granicy, lojalności albo poczuciu winy?",
          "Taka praca jest często bardziej trzeźwa. Nie odbiera duchowego wymiaru sesji, ale chroni przed zbyt szybkim dopisywaniem wielkich historii do delikatnych sygnałów."
        ]
      },
      {
        heading: "Kiedy obraz warto zostawić otwarty",
        paragraphs: [
          "Niektóre doświadczenia potrzebują czasu. Po sesji można je zapisać, wrócić do nich po kilku dniach i zobaczyć, co nadal wydaje się ważne. Jeśli znaczenie dojrzewa spokojnie, zwykle jest bardziej użyteczne niż pierwsza efektowna interpretacja.",
          "Właśnie dlatego integracja jest częścią pracy. Sesja nie kończy się na opowieści. Kończy się dopiero wtedy, gdy człowiek rozumie, co z tego doświadczenia naprawdę chce wnieść do swojego życia."
        ]
      }
    ],
    faq: [
      {
        question: "Czy obraz z PLR musi być dosłownym wspomnieniem?",
        answer:
          "Nie. Może być rozumiany jako wspomnienie, symbol, emocjonalna opowieść albo język wyobraźni. W odpowiedzialnej pracy nie trzeba narzucać jednej interpretacji, żeby doświadczenie miało wartość."
      },
      {
        question: "Jak sprawdzić, czy symbol jest ważny?",
        answer:
          "Warto zobaczyć, czy symbol niesie emocję, powtarza się w snach lub skojarzeniach, dotyka relacji albo pomaga lepiej nazwać obecny wzorzec. Znaczenie często ujawnia się po czasie."
      },
      {
        question: "Czy prowadzący interpretuje obrazy za uczestnika?",
        answer:
          "Nie powinien narzucać gotowych znaczeń. Może zadawać pytania i pomagać porządkować doświadczenie, ale ostateczny sens obrazu powinien pozostać blisko osoby, która go przeżyła."
      }
    ],
    related: ["regresja-poprzednich-wcielen-dla-sceptykow", "regresja-poprzednich-wcielen-a-sny", "integracja-po-sesji-regresji"]
  },
  {
    slug: "regresja-poprzednich-wcielen-a-sny",
    title: "Regresja poprzednich wcieleń a powtarzające się sny",
    description:
      "Powtarzające się sny, obrazy i emocje jako temat sesji regresji poprzednich wcieleń. Jak podejść do nich spokojnie i bez nadinterpretacji.",
    h1: "Regresja poprzednich wcieleń a powtarzające się sny",
    excerpt:
      "Sen może być dobrym punktem wyjścia do sesji PLR, jeśli wraca z mocną emocją, symbolem albo poczuciem niedokończonej historii.",
    readingTime: "5 min czytania",
    sections: [
      {
        heading: "Kiedy sen staje się tematem do pracy",
        paragraphs: [
          "Nie każdy sen wymaga głębokiej analizy. Ale jeśli jakiś motyw wraca wiele razy, zostawia silną emocję albo łączy się z relacją, której nie potrafisz spokojnie domknąć, może stać się dobrym punktem wyjścia do sesji regresji poprzednich wcieleń.",
          "Czasem jest to miejsce, którego nigdy nie widzieliśmy, a wydaje się znajome. Czasem postać, przed którą czujemy lęk lub bliskość. Czasem sytuacja powtarzana w różnych wariantach."
        ]
      },
      {
        heading: "Sen jako drzwi, nie dowód",
        paragraphs: [
          "Ważne, żeby nie robić ze snu natychmiastowego dowodu na poprzednie życie. Sen może być drzwiami do emocji, pamięci symbolicznej, wyobraźni albo duchowej historii. Jego wartość polega na tym, że coś w nas porusza.",
          "W sesji można wejść w atmosferę snu i sprawdzić, dokąd prowadzi. Nie trzeba wymuszać rozwiązania. Czasem wystarczy zobaczyć, jaka emocja stoi za obrazem."
        ]
      },
      {
        heading: "Jak przygotować sen do sesji",
        paragraphs: [
          "Przed spotkaniem warto zapisać sen prostym językiem: co widzę, co czuję, kto tam jest, czego się boję, czego szukam. Nie trzeba dodawać interpretacji. Surowy zapis zwykle jest bardziej przydatny niż zbyt rozbudowana analiza.",
          "Jeśli sen dotyczy trudnych doświadczeń, warto powiedzieć o tym przed sesją. Tempo pracy powinno być spokojne, a granice jasne."
        ]
      }
    ],
    faq: [
      {
        question: "Czy powtarzający się sen może być śladem poprzedniego wcielenia?",
        answer:
          "Może być tak rozumiany, ale nie trzeba tego zakładać. Sen może też być symbolem, emocjonalnym wzorcem albo językiem wyobraźni. W sesji warto sprawdzić, co naprawdę porusza."
      },
      {
        question: "Czy muszę pamiętać cały sen?",
        answer:
          "Nie. Czasem wystarczy jeden obraz, emocja, miejsce albo zdanie. Regresja może rozpocząć się od fragmentu, jeśli jest dla Ciebie ważny i wraca w świadomości."
      },
      {
        question: "Czy sny po sesji mogą się zmienić?",
        answer:
          "Czasem ludzie zauważają zmianę w sposobie przeżywania snów, ale nie należy tego zakładać z góry. Warto obserwować sny spokojnie i zapisywać je bez presji."
      }
    ],
    related: ["symbol-czy-wspomnienie-w-sesji-plr", "integracja-po-sesji-regresji", "regresja-poprzednich-wcielen-dla-sceptykow"]
  },
  {
    slug: "relacje-karmiczne-bez-taniej-ezoteryki",
    title: "Relacje karmiczne bez taniej ezoteryki — jak o nich mówić?",
    description:
      "Relacje karmiczne w spokojnym, psychologiczno-duchowym języku. Jak nie robić z regresji poprzednich wcieleń wymówki dla trudnych więzi.",
    h1: "Relacje karmiczne bez taniej ezoteryki",
    excerpt:
      "Relacja może nieść poczucie dawnej historii, ale nie powinna stawać się usprawiedliwieniem dla chaosu, zależności albo przekraczania granic.",
    readingTime: "6 min czytania",
    sections: [
      {
        heading: "Co ludzie zwykle nazywają relacją karmiczną",
        paragraphs: [
          "Tym określeniem często opisuje się więź, która od początku wydaje się silna, znajoma albo trudna do wyjaśnienia. Może być w niej intensywność, powtarzalny konflikt, poczucie długu, przyciąganie albo lęk przed utratą.",
          "Regresja poprzednich wcieleń może pomóc zobaczyć taką relację jako historię, symbol lub wzorzec. Nie powinna jednak służyć do romantyzowania cierpienia ani do rezygnowania z granic."
        ]
      },
      {
        heading: "Duchowość nie znosi odpowiedzialności",
        paragraphs: [
          "Jeśli ktoś mówi: to karma, więc muszę zostać w trudnej sytuacji, warto zatrzymać się i wrócić do konkretów. Co ta relacja robi z moim życiem? Czy jest w niej szacunek? Czy moje granice są widziane? Czy duchowe wyjaśnienie nie przykrywa prostego bólu?",
          "Odpowiedzialna praca duchowa nie odbiera sprawczości. Może pomóc zobaczyć głębszy sens, ale nie powinna wiązać człowieka z relacją, która go niszczy."
        ]
      },
      {
        heading: "Jak pracować z relacją w PLR",
        paragraphs: [
          "Dobrym tematem do sesji nie jest pytanie: czy ta osoba była moją wielką miłością w poprzednim życiu? Lepsze pytanie brzmi: jaki wzorzec między nami wraca, czego nie potrafię domknąć, co ta relacja uczy mnie o granicach albo lojalności?",
          "Takie pytania są mniej efektowne, ale bardziej pomocne. Pozwalają zobaczyć relację bez kiczu, bez presji i bez oddawania odpowiedzialności w ręce historii."
        ]
      }
    ],
    faq: [
      {
        question: "Czy regresja może pokazać poprzednie wcielenie z konkretną osobą?",
        answer:
          "Może pojawić się doświadczenie tak rozumiane, ale nie należy traktować go jako narzędzia do kontrolowania relacji. Ważniejsze jest zobaczenie emocji, wzorca i obecnych granic."
      },
      {
        question: "Czy relacja karmiczna oznacza, że trzeba w niej zostać?",
        answer:
          "Nie. Duchowe znaczenie relacji nie znosi potrzeby szacunku, bezpieczeństwa i granic. Regresja może pomagać w zrozumieniu, ale nie powinna usprawiedliwiać cierpienia."
      },
      {
        question: "Jak sformułować intencję do sesji o relacji?",
        answer:
          "Warto zapytać o wzorzec, emocję, granicę albo lekcję, a nie o potwierdzenie gotowej historii. Taka intencja jest spokojniejsza i daje więcej przestrzeni na realną integrację."
      }
    ],
    related: ["symbol-czy-wspomnienie-w-sesji-plr", "integracja-po-sesji-regresji", "regresja-poprzednich-wcielen-dla-sceptykow"]
  },
  {
    slug: "integracja-po-sesji-regresji",
    title: "Integracja po sesji regresji — co zrobić z doświadczeniem?",
    description:
      "Jak spokojnie integrować doświadczenie po sesji regresji poprzednich wcieleń: notatki, emocje, znaczenia i powrót do codzienności.",
    h1: "Integracja po sesji regresji",
    excerpt:
      "Najważniejsza praca często zaczyna się po sesji: w spokojnym zapisie, obserwacji emocji i sprawdzeniu, co naprawdę ma znaczenie.",
    readingTime: "5 min czytania",
    sections: [
      {
        heading: "Nie wszystko trzeba rozumieć od razu",
        paragraphs: [
          "Po sesji regresji poprzednich wcieleń może pojawić się jasność, wzruszenie, zmęczenie albo cisza. Każda z tych reakcji jest możliwa. Nie trzeba natychmiast robić z doświadczenia wielkiej opowieści ani tłumaczyć go wszystkim dookoła.",
          "Pierwsze godziny po sesji warto potraktować łagodnie. Zapisz obrazy, emocje, zdania i wrażenia z ciała. Nie oceniaj ich jeszcze zbyt mocno."
        ]
      },
      {
        heading: "Co zapisać po sesji",
        paragraphs: [
          "Pomocne są proste pytania: co było najważniejszym obrazem, jaka emocja wraca, kto pojawił się w historii, co poczułem na końcu, jakie jedno zdanie zostaje ze mną po sesji. Taki zapis pozwala wrócić do doświadczenia bez dopowiadania na siłę.",
          "Po kilku dniach można przeczytać notatki jeszcze raz i zobaczyć, które elementy nadal mają wagę. Często właśnie wtedy widać, co jest symbolem, co emocją, a co praktycznym wnioskiem."
        ]
      },
      {
        heading: "Jak nie przeciążyć doświadczenia",
        paragraphs: [
          "Nie warto robić natychmiast wielu kolejnych sesji ani szukać potwierdzeń w każdej sytuacji z codziennego życia. Integracja potrzebuje rytmu. Czasem wystarczy spacer, sen, notatnik i jedna spokojna rozmowa.",
          "Jeśli sesja poruszyła trudny temat, ważne jest zadbanie o wsparcie i granice. Regresja nie zastępuje pomocy specjalistycznej, kiedy ktoś jest w kryzysie albo potrzebuje opieki zdrowotnej."
        ]
      }
    ],
    faq: [
      {
        question: "Ile trwa integracja po sesji regresji?",
        answer:
          "To zależy od osoby i tematu. Czasem znaczenie układa się od razu, a czasem po kilku dniach. Warto dać sobie spokojny czas bez nacisku na szybkie wnioski."
      },
      {
        question: "Czy trzeba robić kolejną sesję od razu?",
        answer:
          "Zwykle nie. Najpierw warto zobaczyć, co zostaje po pierwszym doświadczeniu i jak wpływa ono na codzienne decyzje, emocje oraz relacje."
      },
      {
        question: "Co zrobić, jeśli sesja była emocjonalna?",
        answer:
          "Warto odpocząć, zapisać doświadczenie, zadbać o ciało i nie podejmować pochopnych decyzji. Jeśli pojawia się duże przeciążenie, dobrze skorzystać z odpowiedniego wsparcia."
      }
    ],
    related: ["symbol-czy-wspomnienie-w-sesji-plr", "regresja-poprzednich-wcielen-a-sny", "regresja-online-jak-sie-przygotowac"]
  },
  {
    slug: "regresja-online-jak-sie-przygotowac",
    title: "Regresja online — jak przygotować bezpieczne warunki?",
    description:
      "Jak przygotować się do sesji regresji poprzednich wcieleń online: miejsce, słuchawki, prywatność, intencja i spokojny powrót po spotkaniu.",
    h1: "Regresja online: jak przygotować bezpieczne warunki?",
    excerpt:
      "Sesja online może być dobra, jeśli zadbasz o prywatność, stabilne połączenie, wygodne miejsce i czas na spokojny powrót po spotkaniu.",
    readingTime: "5 min czytania",
    sections: [
      {
        heading: "Warunki są częścią sesji",
        paragraphs: [
          "W regresji online nie chodzi tylko o link do spotkania. Ważne jest miejsce, w którym nikt nie będzie przerywał, wygodna pozycja, słuchawki, woda i stabilne połączenie. Im mniej zakłóceń, tym łatwiej wejść w spokojny kontakt z doświadczeniem.",
          "Dobrze jest też powiedzieć domownikom, że przez określony czas potrzebujesz prywatności. To proste, ale bardzo pomaga."
        ]
      },
      {
        heading: "Technika bez napięcia",
        paragraphs: [
          "Przed sesją sprawdź kamerę, mikrofon, ładowarkę i internet. Ustaw urządzenie tak, żeby nie trzeba było trzymać go w ręku. Jeśli korzystasz z telefonu, włącz tryb nie przeszkadzać i upewnij się, że bateria wytrzyma całe spotkanie.",
          "Te przygotowania nie są formalnością. Dają układowi nerwowemu sygnał, że można się uspokoić i nie pilnować co chwilę techniki."
        ]
      },
      {
        heading: "Czas po sesji",
        paragraphs: [
          "Najlepiej nie planować od razu intensywnych obowiązków. Po regresji online dobrze mieć kilka minut na zapisanie wrażeń, wypicie wody i spokojny powrót. Czasem doświadczenie jest subtelne, czasem poruszające.",
          "Jeśli sesja dotyczy relacji, snu albo mocnej emocji, notatki po spotkaniu mogą być bardzo pomocne. Nie muszą być piękne. Wystarczy szczery zapis pierwszych skojarzeń."
        ]
      }
    ],
    faq: [
      {
        question: "Czy regresja online jest tak samo możliwa jak stacjonarna?",
        answer:
          "Może być wartościowa, jeśli warunki są spokojne i prywatne. Kluczowe są skupienie, kontakt z prowadzącym, stabilne połączenie i jasne przygotowanie techniczne."
      },
      {
        question: "Czy potrzebuję specjalnego sprzętu?",
        answer:
          "Nie. Zwykle wystarczą słuchawki, stabilny internet, kamera lub mikrofon oraz wygodne miejsce. Ważniejsze od sprzętu jest poczucie prywatności i brak przerywania."
      },
      {
        question: "Co zrobić, jeśli połączenie się zerwie?",
        answer:
          "Warto ustalić to przed sesją. Dobrą praktyką jest mieć telefon pod ręką i prosty plan powrotu do kontaktu, żeby techniczna przerwa nie wywoływała niepotrzebnego napięcia."
      }
    ],
    related: ["integracja-po-sesji-regresji", "regresja-poprzednich-wcielen-dla-sceptykow", "regresja-poprzednich-wcielen-a-sny"]
  }
];

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}
