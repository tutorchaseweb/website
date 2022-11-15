export const ChatBot = ({ siteconfig }) => {
  const { chatBotCode, hideChatBot } = siteconfig || {}

  return !hideChatBot && chatBotCode ? <script src={chatBotCode} async></script> : ''
}

export default ChatBot
