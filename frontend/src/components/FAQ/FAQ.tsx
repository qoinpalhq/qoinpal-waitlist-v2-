import { useState } from "react";
import arrowdown from "../../../assets/arrow-down.png";

// Step 1: Create a data array with questions and answers
const faqData = [
    {
        question: "What is Qoinpal?",
        answer: "Qoinpal is a cryptocurrency platform...",
    },
    {
        question: "How does Qoinpal work?",
        answer: "Qoinpal works by...",
    },
    {
        question: "No wallet? How do I transact in crypto?",
        answer: "You can transact in crypto on Qoinpal without a wallet...",
    },
    {
        question: "Is there an invoice system in place?",
        answer: "Yes, there is an invoice system...",
    },
    {
        question: "How can I stay in touch with the official launch?",
        answer: "To stay in touch with the official launch...",
    },
];

const FAQ = () => {
    // Step 2: Create state to track whether each answer is visible
    const [answersVisible, setAnswersVisible] = useState(
        new Array(faqData.length).fill(false)
    );

    // Step 3: Function to toggle answer visibility
    const toggleAnswer = (index: number) => {
        const newAnswersVisible = [...answersVisible];
        newAnswersVisible[index] = !newAnswersVisible[index];
        setAnswersVisible(newAnswersVisible);
    };

    return (
        <div className="">
            <h1 className="flex items-center justify-center text-bold text-[#111111] mb-20">
                FAQs
            </h1>
            <div className="flex items-center justify-center flex-col">
                {/* Step 4: Map over the data array to render questions and answers */}
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col border rounded-2xl border-[#BFBFBF] w-[1035px] mb-6"
                    >
                        <div
                            className="flex items-center justify-between px-4 my-8"
                            onClick={() => toggleAnswer(index)}
                            style={{ cursor: "pointer" }}
                        >
                            <p className="">{item.question}</p>
                            <img
                                src={arrowdown}
                                alt=""
                                style={{
                                    transform: answersVisible[index]
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                }}
                            />
                        </div>
                        {/* Step 5: Conditionally render the answer input field */}
                        {answersVisible[index] && (
                            <div className="px-4 my-4">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
