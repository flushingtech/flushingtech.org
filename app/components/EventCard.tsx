// Define the interface for the props
interface EventCardProps {
  title: string;
  image_URL: string;
  description: string;
  setCurrDescrip: (description: string) => void; 
  setSelectedCard: (cardTitle: string) => void;
  selectedCard: string;
}

//   event car should update state variable onclick
const EventCard: React.FC<EventCardProps> = ({
  title,
  image_URL,
  description,
  setCurrDescrip,
  setSelectedCard,
  selectedCard
}) => {

  console.log("eventcard")
  
  return (
    <button
    className={`flex flex-col items-center ${title === selectedCard ? 'border-4 border-red-300' : 'border border-yellow-200 hover:border-orange-400'}`}
    onClick={() => {
        setSelectedCard(title);
        setCurrDescrip(description);
      }}
    >
      <div>{title}</div>
      <img src={image_URL} alt={title} />
    </button>
  );
};

export default EventCard;
