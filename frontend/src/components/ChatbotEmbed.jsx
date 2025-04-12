import { useState } from 'react';

const ChatbotEmbed = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Chat Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full bg-gray-900 hover:bg-gray-800 
                    flex items-center justify-center shadow-lg transition-all duration-300
                    border border-gray-700 ${isOpen ? 'rotate-180' : ''}`}
            >
                <svg 
                    className="w-8 h-8 text-white"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"} 
                    />
                </svg>
            </button>

            {/* Chatbot Popup */}
            <div className={`absolute bottom-20 right-0 w-[350px] h-[500px]
                bg-[#0f1117] rounded-lg shadow-2xl border border-gray-800 
                transition-all duration-300 transform origin-bottom-right
                ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
                <iframe
                    src="https://resume--chatbot-jzjfkhcbrexqux7ptthyrp.streamlit.app/embed?=true"
                    width="100%"
                    height="100%"
                    title="Resume Chatbot"
                    allow="clipboard-write"
                    sandbox=""
                    style={{
                        border: 'none',
                        borderRadius: '0.5rem',
                        backgroundColor: '#0f1117',
                    }}
                />
            </div>
        </div>
    );
};

export default ChatbotEmbed;
