import { ReportData } from "@/types/models/reportData";

export const __MOCK__reportData: ReportData = {
    questions: [
        {
            id: "1",
            title: "Czy uważasz, że młodzi ludzie powinni aktywnie uczestniczyć w życiu politycznym?",
            answers: [
                { id: "1", text: "Zdecydowanie za", value: 50 },
                { id: "1", text: "Za", value: 25 },
                { id: "2", text: "Przeciw", value: 12.5 },
                { id: "2", text: "Przeciw", value: 12.5 },
            ]
        },
        {
            id: "2",
            title: "Jakie tematy są dla Ciebie najważniejsze w kontekście wyborów? (wybierz maksymalnie 2 odpowiedzi)",
            answers: [
                { id: "1", text: "Edukacja", value: 40 },
                { id: "2", text: "Ochrona środowiska", value: 30 },
                { id: "3", text: "Gospodarka", value: 20 },
                { id: "4", text: "Inne", value: 10 }
            ]
        },
        {
            id: "3",
            title: "Czy uważasz, że Twoje głosy mają wpływ na wyniki wyborów?",
            answers: [
                { id: "1", text: "Zdecydowanie tak", value: 60 },
                { id: "2", text: "Tak", value: 25 },
                { id: "3", text: "Nie wiem", value: 10 },
                { id: "4", text: "Nie", value: 5 }
            ]
        },
        {
            id: "4",
            title: "Czy korzystasz z mediów społecznościowych, aby śledzić kampanie wyborcze? (Wybierz jedną odpowiedź)",
            answers: [
                { id: "1", text: "Tak, regularnie", value: 70 },
                { id: "2", text: "Czasami", value: 20 },
                { id: "3", text: "Rzadko", value: 5 },
                { id: "4", text: "Nigdy", value: 5 }
            ]
        },
        {
            id: "5",
            title: "Jakie formy aktywności politycznej są dla Ciebie najważniejsze?",
            answers: [
                { id: "1", text: "Udział w wyborach", value: 50 },
                { id: "2", text: "Demonstracje i protesty", value: 20 },
                { id: "3", text: "Debaty publiczne", value: 15 },
                { id: "4", text: "Inne", value: 15 }
            ]
        },
        {
            id: "6",
            title: "Czy uważasz, że młodzi ludzie mają wystarczającą reprezentację w polityce?",
            answers: [
                { id: "1", text: "Zdecydowanie tak", value: 30 },
                { id: "2", text: "Tak", value: 25 },
                { id: "3", text: "Nie wiem", value: 20 },
                { id: "4", text: "Nie", value: 15 },
                { id: "5", text: "Zdecydowanie nie", value: 10 }
            ]
        }
    ]
}