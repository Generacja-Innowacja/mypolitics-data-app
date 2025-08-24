import { ReportData } from "@/types/models/reportData";

export const __MOCK__reportData: ReportData = {
    questions: [
        {
            id: "1",
            title: "Czy uważasz, że młodzi ludzie powinni aktywnie uczestniczyć w życiu politycznym?",
            answers: [
                { id: "1-a1", text: "Zdecydowanie za", value: 50 },
                { id: "1-a1", text: "Za", value: 25 },
                { id: "1-a2", text: "Przeciw", value: 12.5 },
                { id: "1-a2", text: "Zdecydowanie przeciw", value: 12.5 },
            ],
            description: "Aż 77,1% młodych badanych popiera uznanie mowy śląskiej za język regionalny, z czego ponad jedna piąta deklaruje zdecydowane poparcie. Sprzeciw jest relatywnie niski (22,9%), co wskazuje na szeroki konsensus w tej grupie w kwestii nadania śląskiemu formalnego statusu."
        },
        {
            id: "2",
            title: "Jakie tematy są dla Ciebie najważniejsze w kontekście wyborów? (wybierz maksymalnie 2 odpowiedzi)",
            answers: [
                { id: "2-a1", text: "Edukacja", value: 40 },
                { id: "2-a2", text: "Ochrona środowiska", value: 30 },
                { id: "2-a3", text: "Gospodarka", value: 20 },
                { id: "2-a4", text: "Inne", value: 10 }
            ]
        },
        {
            id: "3",
            title: "Czy uważasz, że Twoje głosy mają wpływ na wyniki wyborów?",
            answers: [
                { id: "3-a1", text: "Zdecydowanie za", value: 60 },
                { id: "3-a2", text: "Za", value: 25 },
                { id: "3-a3", text: "Przeciw", value: 10 },
                { id: "3-a4", text: "Zdecydowanie przeciw", value: 5 }
            ]
        },
        {
            id: "4",
            title: "Czy korzystasz z mediów społecznościowych, aby śledzić kampanie wyborcze? (Wybierz jedną odpowiedź)",
            answers: [
                { id: "4-a1", text: "Za, regularnie", value: 70 },
                { id: "4-a2", text: "Czasami", value: 20 },
                { id: "4-a3", text: "Rzadko", value: 5 },
                { id: "4-a4", text: "Nigdy", value: 5 }
            ]
        },
        {
            id: "5",
            title: "Jakie formy aktywności politycznej są dla Ciebie najważniejsze?",
            answers: [
                { id: "5-a1", text: "Udział w wyborach", value: 50 },
                { id: "5-a2", text: "Demonstracje i protesty", value: 20 },
                { id: "5-a3", text: "Debaty publiczne", value: 15 },
                { id: "5-a4", text: "Inne", value: 15 }
            ],
            description: "Aż 77,1% młodych badanych popiera uznanie mowy śląskiej za język regionalny, z czego ponad jedna piąta deklaruje zdecydowane poparcie. Sprzeciw jest relatywnie niski (22,9%), co wskazuje na szeroki konsensus w tej grupie w kwestii nadania śląskiemu formalnego statusu."
        },
        {
            id: "6",
            title: "Czy uważasz, że młodzi ludzie mają wystarczającą reprezentację w polityce?",
            answers: [
                { id: "6-a1", text: "Zdecydowanie za", value: 30 },
                { id: "6-a2", text: "Za", value: 25 },
                { id: "6-a3", text: "Nie wiem", value: 20 },
                { id: "6-a4", text: "Przeciw", value: 15 },
                { id: "6-a5", text: "Zdecydowanie przeciw", value: 10 }
            ]
        }
    ]
}