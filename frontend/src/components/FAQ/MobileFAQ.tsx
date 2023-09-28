import { useState } from "react";
import arrowdown from "../../../assets/arrow-down.png";

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

const MobileFAQ = () => {

    const [answersVisible, setAnswersVisible] = useState(
        new Array(faqData.length).fill(false)
    );

    const toggleAnswer = (index: number) => {
        const newAnswersVisible = [...answersVisible];
        newAnswersVisible[index] = !newAnswersVisible[index];
        setAnswersVisible(newAnswersVisible);
    };

    return (
        <div className="lg:hidden flex flex-col w-full ">
            <h1 className="flex text-center justify-center mb-8">FAQs</h1>
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className="w-[380px] h-[72px] rounded-2xl border border-[#BFBFBF] justify-between items-center inline-flex mb-8 px-8 "
                >
                    <p className="text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight">
                        {item.question}
                    </p>
                    <div
                        className="w-6 h-6 justify-center items-center flex cursor-pointer"
                        onClick={() => toggleAnswer(index)}
                    >
                        <img
                            src={arrowdown}
                            alt=""
                            className="w-6 h-6 relative"
                            style={{
                                transform: answersVisible[index]
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                            }}
                        />
                    </div> 
                    {answersVisible[index] && (
                        <div className="px-4 my-4">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MobileFAQ;
