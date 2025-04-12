import { useState, useEffect } from 'react';

const ChatbotEmbed = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [iframeKey, setIframeKey] = useState(0);

    // Optional: Handle window resize to force iframe update
    useEffect(() => {
        const handleResize = () => {
            setIframeKey(prevKey => prevKey + 1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Chat Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full bg-gray-900 hover:bg-gray-800 
                    flex items-center justify-center shadow-lg transition-all duration-300
                    border border-gray-700 ${isOpen ? 'rotate-180' : ''}`}
            >
                {/* Chat/Close Icon */}
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
                        d={isOpen 
                            ? "M6 18L18 6M6 6l12 12" // X (close) icon
                            : "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" // Chat icon
                        } 
                    />
                </svg>
            </button>

            <div className={`absolute bottom-20 right-0 w-[90vw] max-w-[350px] h-[80vh] max-h-[500px]
                bg-[#0f1117] rounded-lg shadow-2xl border border-gray-800 
                transition-all duration-300 transform origin-bottom-right
                ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
                <iframe
                    key={iframeKey}
                    src="https://resume--chatbot-jzjfkhcbrexqux7ptthyrp.streamlit.app/?embed=true"
                    width="100%"
                    height="100%"
                    title="Resume Chatbot"
                    allow="clipboard-write"
                    sandbox="allow-scripts allow-same-origin"
                    style={{
                        border: 'none',
                        borderRadius: '0.5rem',
                        backgroundColor: '#0f1117',
                        minHeight: '400px' 
                    }}
                />
            </div>
        </div>
    );
};

export default ChatbotEmbed;