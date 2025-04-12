const ChatbotEmbed = () => {
  return (
    <div className="w-full h-[80vh] p-4">
      <iframe
        src="https://resume--chatbot-jzjfkhcbrexqux7ptthyrp.streamlit.app/?embed=true"
        width="100%"
        height="100%"
        style={{ border: "none", borderRadius: "12px" }}
        title="Resume Chatbot"
        allow="clipboard-write"
      ></iframe>
    </div>
  );
};

export default ChatbotEmbed;
