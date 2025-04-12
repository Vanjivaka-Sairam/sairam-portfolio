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
            {/* Chat Toggle Button (unchanged) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full bg-gray-900 hover:bg-gray-800 
                    flex items-center justify-center shadow-lg transition-all duration-300
                    border border-gray-700 ${isOpen ? 'rotate-180' : ''}`}
            >
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