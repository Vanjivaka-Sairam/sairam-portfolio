import { useState, useEffect } from 'react';

const ChatbotEmbed = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [iframeKey, setIframeKey] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 640px)').matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle window resize to force iframe update
    useEffect(() => {
        const handleResize = () => setIframeKey(prev => prev + 1);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`fixed z-50 ${isMobile && isOpen ? 'inset-0 bg-black/30' : 'bottom-4 right-4 sm:bottom-8 sm:right-8'}`}>
            {/* Chat Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14  // Responsive sizing
                    rounded-full bg-gray-900 hover:bg-gray-800 
                    flex items-center justify-center shadow-lg transition-all duration-300
                    border border-gray-700 ${isOpen ? 'rotate-180' : ''}
                    ${isMobile && isOpen ? 'absolute top-4 right-4' : 'relative'}
                `}
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
                            ? "M6 18L18 6M6 6l12 12" 
                            : "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        } 
                    />
                </svg>
            </button>

            {/* Chat Container */}
            <div className={`
                absolute bg-[#0f1117] rounded-lg shadow-2xl border border-gray-800
                transition-all duration-300 transform
                ${isMobile ? 
                    `bottom-0 left-0 right-0 w-full h-[85vh] max-h-none rounded-t-lg origin-bottom
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}` 
                    : 
                    `bottom-20 right-0 w-[90vw] max-w-[350px] h-[80vh] max-h-[500px] origin-bottom-right
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`
                }
            `}>
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
                        borderRadius: 'inherit',
                        backgroundColor: '#0f1117',
                    }}
                    className="h-full w-full"
                />
            </div>
        </div>
    );
};

export default ChatbotEmbed;