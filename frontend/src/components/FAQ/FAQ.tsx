import { useState } from "react";
import arrowdown from "../../../assets/arrow-down.png";

// Step 1: Create a data array with questions and answers
const faqData = [
    {
        question: "What is Qoinpal?",
        answer: "QoinPal is a borderless fiat-to-crypto and crypto-to-fiat payment solution.",
    },
    {
        question: "How does Qoinpal work?",
        answer: "Qoinpal acts as a bridge; you send money from a your local bank account and the recipient receives it as crypto and vice versa with crypto-to-fiat payments. And no, you don’t need a wallet. ",
    },
    {
        question: "No wallet? How do I transact in crypto?",
        answer: "We act as the gateway, accepting fiat and sending it as crypto to the recipient.",
    },
    {
        question: "Is there an invoice system in place?",
        answer: "With QoinPal, you may bill clients in any currency and receive it either by fiat or in crypto.",
    },
    {
        question: "How can I stay in touch with the official launch?",
        answer: "You can stay connected by signing on our waitlist and receive our mails. You can also follow our social media handles below.",
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
            <h1 className="flex items-center justify-center text-bold text-[#111111] mb-10">
                FAQs
            </h1>
            <div className="flex items-center justify-center flex-col py-10">
                {/* Step 4: Map over the data array to render questions and answers */}
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center border rounded-2xl border-[#BFBFBF] w-[90%] md:w-[80%] mb-6 px-4 py-4"
                    >
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleAnswer(index)}
                            style={{ cursor: "pointer" }}
                        >
                            <h4 className="font-normal">{item.question}</h4>
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
                            <div className="my-4 font-light">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
