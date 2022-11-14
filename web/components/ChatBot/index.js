export const ChatBot = ({ siteconfig }) => {
  return siteconfig?.chatBotCode ? <script src={siteconfig?.chatBotCode} async></script> : ''
}

export default ChatBot
